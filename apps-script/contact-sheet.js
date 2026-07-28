function doGet(e) {
  return createJsonResponse({ ok: true, message: "Contact form endpoint is ready." });
}

function doPost(e) {
  try {
    const rawBody = e.postData && e.postData.contents ? e.postData.contents : '{}';
    const data = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Leads') || spreadsheet.insertSheet('Leads');

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.company || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.productInterest || '',
      data.quantity || '',
      data.packaging || '',
      data.message || '',
      data.submittedAt || '',
    ]);

    return createJsonResponse({ ok: true, message: 'Submitted successfully.' });
  } catch (error) {
    return createJsonResponse({ ok: false, error: error.message || 'Unknown error' });
  }
}

function doOptions(e) {
  return createJsonResponse({ ok: true, message: 'CORS preflight OK' });
}

function createJsonResponse(payload) {
  const output = ContentService.createTextOutput(JSON.stringify(payload));
  output.setMimeType(ContentService.MimeType.JSON);
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  output.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  return output;
}
