export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const appsScriptUrl = (process.env.CONTACT_WEBHOOK_URL || process.env.VITE_CONTACT_WEBHOOK_URL || '').trim();

  if (!appsScriptUrl) {
    res.status(500).json({
      ok: false,
      error: 'The Apps Script webhook URL is not configured on the server.',
    });
    return;
  }

  try {
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(req.body || {}),
    });

    const responseText = await response.text();
    let payload = null;

    try {
      payload = responseText ? JSON.parse(responseText) : null;
    } catch {
      payload = null;
    }

    if (!response.ok) {
      res.status(response.status).json({
        ok: false,
        error: payload?.error || payload?.message || 'The Apps Script request failed.',
      });
      return;
    }

    res.status(200).json({
      ok: true,
      message: payload?.message || 'Submitted successfully.',
    });
  } catch (error) {
    res.status(502).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to reach the Apps Script endpoint.',
    });
  }
}
