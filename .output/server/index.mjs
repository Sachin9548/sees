globalThis.__nitro_main__ = import.meta.url;
import { i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-07-27T08:35:47.915Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-07-27T08:35:47.959Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/assets/about-DTn_-sKd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e98-BsvXgML0Ki39oWiK3yCCXUSq5O0\"",
		"mtime": "2026-07-28T06:04:55.335Z",
		"size": 11928,
		"path": "../public/assets/about-DTn_-sKd.js"
	},
	"/assets/bulk-packaging-BQdoi5gu.jpg": {
		"type": "image/jpeg",
		"etag": "\"87c2-aXU/L8M/2wPUK4bL94TE/d6Xp+w\"",
		"mtime": "2026-07-28T06:04:55.336Z",
		"size": 34754,
		"path": "../public/assets/bulk-packaging-BQdoi5gu.jpg"
	},
	"/assets/Footer-id0FCAoX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22b7-ixmlw757DmN4PrCqnT/BZuBRnyk\"",
		"mtime": "2026-07-28T06:04:55.333Z",
		"size": 8887,
		"path": "../public/assets/Footer-id0FCAoX.js"
	},
	"/assets/hero-jaggery-nS9FR7cG.jpg": {
		"type": "image/jpeg",
		"etag": "\"23e85-BRrjc4qSWdvKybDOSqdjIpB6v1E\"",
		"mtime": "2026-07-28T06:04:55.336Z",
		"size": 147077,
		"path": "../public/assets/hero-jaggery-nS9FR7cG.jpg"
	},
	"/assets/index-BzhvqltU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54a18-4y5kSvVAXoXfUREBAXNTMhOLKAY\"",
		"mtime": "2026-07-28T06:04:55.333Z",
		"size": 346648,
		"path": "../public/assets/index-BzhvqltU.js"
	},
	"/assets/jaggery-blocks-BLKiah0x.jpg": {
		"type": "image/jpeg",
		"etag": "\"ccf5-uE5sw6mVu8+5gTp3mOXYvQ2ERl4\"",
		"mtime": "2026-07-28T06:04:55.336Z",
		"size": 52469,
		"path": "../public/assets/jaggery-blocks-BLKiah0x.jpg"
	},
	"/assets/jaggery-cubes-BiZMDB_s.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb3c-IYvgCQ5aa52oAwslUCnyhNxxTG0\"",
		"mtime": "2026-07-28T06:04:55.336Z",
		"size": 64316,
		"path": "../public/assets/jaggery-cubes-BiZMDB_s.jpg"
	},
	"/assets/jaggery-powder-DJx7cujB.jpg": {
		"type": "image/jpeg",
		"etag": "\"14345-8MtOVxTVBFV8eg/aT2Ore2ADp0I\"",
		"mtime": "2026-07-28T06:04:55.336Z",
		"size": 82757,
		"path": "../public/assets/jaggery-powder-DJx7cujB.jpg"
	},
	"/assets/powder-detail-BN4OVfzF.jpg": {
		"type": "image/jpeg",
		"etag": "\"22065-M5Ere5AxmxuNqNAcy8LLSTFvVoo\"",
		"mtime": "2026-07-28T06:04:55.339Z",
		"size": 139365,
		"path": "../public/assets/powder-detail-BN4OVfzF.jpg"
	},
	"/assets/products-BArhQjCE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e-VWUPwQfaOuKsGsJ/8Q8IJkwCI7A\"",
		"mtime": "2026-07-28T06:04:55.335Z",
		"size": 78,
		"path": "../public/assets/products-BArhQjCE.js"
	},
	"/assets/ProductsPage-CV7Fbci8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45ee-OmQ7qwkzMdPLhsUpPLyRUF3iD50\"",
		"mtime": "2026-07-28T06:04:55.333Z",
		"size": 17902,
		"path": "../public/assets/ProductsPage-CV7Fbci8.js"
	},
	"/assets/retail-packaging-CVHxpLf5.jpg": {
		"type": "image/jpeg",
		"etag": "\"c51b-UH/AIp/7etptBeSAkp1AO0gN6fA\"",
		"mtime": "2026-07-28T06:04:55.339Z",
		"size": 50459,
		"path": "../public/assets/retail-packaging-CVHxpLf5.jpg"
	},
	"/assets/routes-BArhQjCE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e-VWUPwQfaOuKsGsJ/8Q8IJkwCI7A\"",
		"mtime": "2026-07-28T06:04:55.335Z",
		"size": 78,
		"path": "../public/assets/routes-BArhQjCE.js"
	},
	"/assets/styles-BZA_tnvU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15216-fYXzpvXe5u5Uh6/5fhmnuP6Dm1M\"",
		"mtime": "2026-07-28T06:04:55.339Z",
		"size": 86550,
		"path": "../public/assets/styles-BZA_tnvU.css"
	},
	"/assets/world-map-K5OMpZt1.jpg": {
		"type": "image/jpeg",
		"etag": "\"16322-KSoEduaLYhryTj9TlZyQl1huX4Q\"",
		"mtime": "2026-07-28T06:04:55.340Z",
		"size": 90914,
		"path": "../public/assets/world-map-K5OMpZt1.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_hydCi5 = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_hydCi5
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
