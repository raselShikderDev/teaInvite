/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=E%3A%5Cprogramme%5Cteainvite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cprogramme%5Cteainvite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=E%3A%5Cprogramme%5Cteainvite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cprogramme%5Cteainvite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_programme_teainvite_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/contact/route.ts */ \"(rsc)/./src/app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"E:\\\\programme\\\\teainvite\\\\src\\\\app\\\\api\\\\contact\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_programme_teainvite_src_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDcHJvZ3JhbW1lJTVDdGVhaW52aXRlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDcHJvZ3JhbW1lJTVDdGVhaW52aXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNVO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxwcm9ncmFtbWVcXFxcdGVhaW52aXRlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvbnRhY3RcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnRhY3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb250YWN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb250YWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxccHJvZ3JhbW1lXFxcXHRlYWludml0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=E%3A%5Cprogramme%5Cteainvite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cprogramme%5Cteainvite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/contact/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/contact/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_rateLimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/rateLimit */ \"(rsc)/./src/app/lib/rateLimit.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ \n\n\n// const data = {\n//   response,\n//   userAgent,\n//   deviceInfo,\n//   screenSize,\n//   ip,\n//   time,\n// };\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_2__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    try {\n        // 🔹 Get IP safely\n        const forwardedFor = req.headers.get(\"x-forwarded-for\");\n        const ip2 = forwardedFor?.split(\",\")[0] ?? \"unknown\";\n        // 🔹 Rate limit\n        if (!(0,_app_lib_rateLimit__WEBPACK_IMPORTED_MODULE_0__.rateLimit)(ip2)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: false,\n                message: \"Too many requests\"\n            }, {\n                status: 429\n            });\n        }\n        const body = await req.json();\n        const { time, ip, screenSize, deviceInfo, userAgent, response } = body;\n        // 🔹 (Optional) Turnstile verification\n        if (process.env.TURNSTILE_SECRET) {\n            const token = body[\"cf-turnstile-response\"];\n            if (!token) {\n                return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                    success: false,\n                    message: \"Captcha required\"\n                }, {\n                    status: 400\n                });\n            }\n            const verifyRes = await fetch(\"https://challenges.cloudflare.com/turnstile/v0/siteverify\", {\n                method: \"POST\",\n                body: new URLSearchParams({\n                    secret: process.env.TURNSTILE_SECRET,\n                    response: token\n                })\n            });\n            const verifyData = await verifyRes.json();\n            if (!verifyData.success) {\n                return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                    success: false,\n                    message: \"Captcha failed\"\n                }, {\n                    status: 400\n                });\n            }\n        }\n        // 🔹 Send email\n        await resend.emails.send({\n            from: \"Portfolio <onboarding@resend.dev>\",\n            to: [\n                \"yourgmail@gmail.com\"\n            ],\n            subject: \"New Portfolio Message\",\n            html: `\n    <h3>New Message</h3>\n    <h4>A user clicked the \"${response}\" button at hur pori's web.</h4>\n    <p>📅 Time: ${time}</p>\n    <p>💻 Device: ${deviceInfo}</p>\n    <p>🌍 Browser: ${userAgent}</p>\n    <p>📏 Screen: ${screenSize}</p>\n    <p>📡 IP Address: ${ip}</p>\n    <p>📡 IP Address 02: ${ip2}</p>\n  `\n        });\n        console.log(body);\n        console.log({\n            ip2\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: false,\n            message: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxvREFBb0QsR0FDSjtBQUNRO0FBQ3hCO0FBWTVCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLFVBQVU7QUFDVixLQUFLO0FBRVQsTUFBTUcsU0FBUyxJQUFJRCwwQ0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBRTdDLGVBQWVDLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixtQkFBbUI7UUFDbkIsTUFBTUMsZUFBZUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDckMsTUFBTUMsTUFBTUgsY0FBY0ksTUFBTSxJQUFJLENBQUMsRUFBRSxJQUFJO1FBRTNDLGdCQUFnQjtRQUNoQixJQUFJLENBQUNiLDZEQUFTQSxDQUFDWSxNQUFNO1lBQ25CLE9BQU9YLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO2dCQUFPQyxTQUFTO1lBQW9CLEdBQy9DO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNQyxPQUFRLE1BQU1WLElBQUlNLElBQUk7UUFFNUIsTUFBTSxFQUFFSyxJQUFJLEVBQUVDLEVBQUUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdOO1FBR2xFLHVDQUF1QztRQUN2QyxJQUFJZCxRQUFRQyxHQUFHLENBQUNvQixnQkFBZ0IsRUFBRTtZQUNoQyxNQUFNQyxRQUFRUixJQUFJLENBQUMsd0JBQXdCO1lBRTNDLElBQUksQ0FBQ1EsT0FBTztnQkFDVixPQUFPekIscURBQVlBLENBQUNhLElBQUksQ0FDdEI7b0JBQUVDLFNBQVM7b0JBQU9DLFNBQVM7Z0JBQW1CLEdBQzlDO29CQUFFQyxRQUFRO2dCQUFJO1lBRWxCO1lBRUEsTUFBTVUsWUFBWSxNQUFNQyxNQUN0Qiw2REFDQTtnQkFDRUMsUUFBUTtnQkFDUlgsTUFBTSxJQUFJWSxnQkFBZ0I7b0JBQ3hCQyxRQUFRM0IsUUFBUUMsR0FBRyxDQUFDb0IsZ0JBQWdCO29CQUNwQ0QsVUFBVUU7Z0JBQ1o7WUFDRjtZQUdGLE1BQU1NLGFBQW1DLE1BQU1MLFVBQVViLElBQUk7WUFFN0QsSUFBSSxDQUFDa0IsV0FBV2pCLE9BQU8sRUFBRTtnQkFDdkIsT0FBT2QscURBQVlBLENBQUNhLElBQUksQ0FDdEI7b0JBQUVDLFNBQVM7b0JBQU9DLFNBQVM7Z0JBQWlCLEdBQzVDO29CQUFFQyxRQUFRO2dCQUFJO1lBRWxCO1FBQ0Y7UUFJQSxnQkFBZ0I7UUFDaEIsTUFBTWQsT0FBTzhCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQ3ZCQyxNQUFNO1lBQ05DLElBQUk7Z0JBQUM7YUFBc0I7WUFDM0JDLFNBQVM7WUFDVEMsTUFBTyxDQUFDOzs0QkFFYyxFQUFFZCxTQUFTO2dCQUN2QixFQUFFTCxLQUFLO2tCQUNMLEVBQUVHLFdBQVc7bUJBQ1osRUFBRUMsVUFBVTtrQkFDYixFQUFFRixXQUFXO3NCQUNULEVBQUVELEdBQUc7eUJBQ0YsRUFBRVIsSUFBSTtFQUM3QixDQUFDO1FBQ0M7UUFHQzJCLFFBQVFDLEdBQUcsQ0FBQ3RCO1FBQ1pxQixRQUFRQyxHQUFHLENBQUM7WUFBQzVCO1FBQUc7UUFJakIsT0FBT1gscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFPMEIsT0FBTztRQUNkLE9BQU94QyxxREFBWUEsQ0FBQ2EsSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1lBQU9DLFNBQVM7UUFBZSxHQUMxQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiRTpcXHByb2dyYW1tZVxcdGVhaW52aXRlXFxzcmNcXGFwcFxcYXBpXFxjb250YWN0XFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcIkAvYXBwL2xpYi9yYXRlTGltaXRcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCI7XHJcblxyXG50eXBlIENvbnRhY3RCb2R5ID0ge1xyXG4gIHJlc3BvbnNlOiBzdHJpbmc7XHJcbiAgdXNlckFnZW50OiBzdHJpbmc7XHJcbiAgZGV2aWNlSW5mbzogc3RyaW5nO1xyXG4gIHNjcmVlblNpemU6IHN0cmluZztcclxuICBpcDpzdHJpbmc7XHJcbiAgdGltZTpzdHJpbmc7XHJcbiAgXCJjZi10dXJuc3RpbGUtcmVzcG9uc2VcIj86IHN0cmluZztcclxufTtcclxuXHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICByZXNwb25zZSxcclxuICAgIC8vICAgdXNlckFnZW50LFxyXG4gICAgLy8gICBkZXZpY2VJbmZvLFxyXG4gICAgLy8gICBzY3JlZW5TaXplLFxyXG4gICAgLy8gICBpcCxcclxuICAgIC8vICAgdGltZSxcclxuICAgIC8vIH07XHJcblxyXG5jb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZISk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIPCflLkgR2V0IElQIHNhZmVseVxyXG4gICAgY29uc3QgZm9yd2FyZGVkRm9yID0gcmVxLmhlYWRlcnMuZ2V0KFwieC1mb3J3YXJkZWQtZm9yXCIpO1xyXG4gICAgY29uc3QgaXAyID0gZm9yd2FyZGVkRm9yPy5zcGxpdChcIixcIilbMF0gPz8gXCJ1bmtub3duXCI7XHJcblxyXG4gICAgLy8g8J+UuSBSYXRlIGxpbWl0XHJcbiAgICBpZiAoIXJhdGVMaW1pdChpcDIpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlRvbyBtYW55IHJlcXVlc3RzXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDI5IH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5ID0gKGF3YWl0IHJlcS5qc29uKCkpIGFzIENvbnRhY3RCb2R5O1xyXG5cclxuICAgIGNvbnN0IHsgdGltZSwgaXAsIHNjcmVlblNpemUsIGRldmljZUluZm8sIHVzZXJBZ2VudCwgcmVzcG9uc2UgfSA9IGJvZHlcclxuICBcclxuXHJcbiAgICAvLyDwn5S5IChPcHRpb25hbCkgVHVybnN0aWxlIHZlcmlmaWNhdGlvblxyXG4gICAgaWYgKHByb2Nlc3MuZW52LlRVUk5TVElMRV9TRUNSRVQpIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBib2R5W1wiY2YtdHVybnN0aWxlLXJlc3BvbnNlXCJdO1xyXG5cclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQ2FwdGNoYSByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZnlSZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vY2hhbGxlbmdlcy5jbG91ZGZsYXJlLmNvbS90dXJuc3RpbGUvdjAvc2l0ZXZlcmlmeVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5UVVJOU1RJTEVfU0VDUkVULFxyXG4gICAgICAgICAgICByZXNwb25zZTogdG9rZW4sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZnlEYXRhOiB7IHN1Y2Nlc3M6IGJvb2xlYW4gfSA9IGF3YWl0IHZlcmlmeVJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoIXZlcmlmeURhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQ2FwdGNoYSBmYWlsZWRcIiB9LFxyXG4gICAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8g8J+UuSBTZW5kIGVtYWlsXHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBcIlBvcnRmb2xpbyA8b25ib2FyZGluZ0ByZXNlbmQuZGV2PlwiLFxyXG4gICAgICB0bzogW1wieW91cmdtYWlsQGdtYWlsLmNvbVwiXSxcclxuICAgICAgc3ViamVjdDogXCJOZXcgUG9ydGZvbGlvIE1lc3NhZ2VcIixcclxuICAgICAgaHRtbDogIGBcclxuICAgIDxoMz5OZXcgTWVzc2FnZTwvaDM+XHJcbiAgICA8aDQ+QSB1c2VyIGNsaWNrZWQgdGhlIFwiJHtyZXNwb25zZX1cIiBidXR0b24gYXQgaHVyIHBvcmkncyB3ZWIuPC9oND5cclxuICAgIDxwPvCfk4UgVGltZTogJHt0aW1lfTwvcD5cclxuICAgIDxwPvCfkrsgRGV2aWNlOiAke2RldmljZUluZm99PC9wPlxyXG4gICAgPHA+8J+MjSBCcm93c2VyOiAke3VzZXJBZ2VudH08L3A+XHJcbiAgICA8cD7wn5OPIFNjcmVlbjogJHtzY3JlZW5TaXplfTwvcD5cclxuICAgIDxwPvCfk6EgSVAgQWRkcmVzczogJHtpcH08L3A+XHJcbiAgICA8cD7wn5OhIElQIEFkZHJlc3MgMDI6ICR7aXAyfTwvcD5cclxuICBgLFxyXG4gICAgfSk7XHJcblxyXG4gICBcclxuICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICBjb25zb2xlLmxvZyh7aXAyfSk7XHJcbiAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlcnZlciBlcnJvclwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsicmF0ZUxpbWl0IiwiTmV4dFJlc3BvbnNlIiwiUmVzZW5kIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcSIsImZvcndhcmRlZEZvciIsImhlYWRlcnMiLCJnZXQiLCJpcDIiLCJzcGxpdCIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsImJvZHkiLCJ0aW1lIiwiaXAiLCJzY3JlZW5TaXplIiwiZGV2aWNlSW5mbyIsInVzZXJBZ2VudCIsInJlc3BvbnNlIiwiVFVSTlNUSUxFX1NFQ1JFVCIsInRva2VuIiwidmVyaWZ5UmVzIiwiZmV0Y2giLCJtZXRob2QiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWNyZXQiLCJ2ZXJpZnlEYXRhIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/rateLimit.ts":
/*!**********************************!*\
  !*** ./src/app/lib/rateLimit.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rateLimit: () => (/* binding */ rateLimit)\n/* harmony export */ });\nconst rateLimitMap = new Map();\nfunction rateLimit(ip, limit = 5, windowMs = 60000) {\n    const now = Date.now();\n    const entry = rateLimitMap.get(ip);\n    if (!entry) {\n        rateLimitMap.set(ip, {\n            count: 1,\n            start: now\n        });\n        return true;\n    }\n    if (now - entry.start > windowMs) {\n        rateLimitMap.set(ip, {\n            count: 1,\n            start: now\n        });\n        return true;\n    }\n    if (entry.count >= limit) {\n        return false;\n    }\n    entry.count++;\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9yYXRlTGltaXQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE1BQU1BLGVBQWUsSUFBSUM7QUFFbEIsU0FBU0MsVUFDZEMsRUFBVSxFQUNWQyxRQUFRLENBQUMsRUFDVEMsV0FBVyxLQUFNO0lBRWpCLE1BQU1DLE1BQU1DLEtBQUtELEdBQUc7SUFFcEIsTUFBTUUsUUFBUVIsYUFBYVMsR0FBRyxDQUFDTjtJQUUvQixJQUFJLENBQUNLLE9BQU87UUFDVlIsYUFBYVUsR0FBRyxDQUFDUCxJQUFJO1lBQUVRLE9BQU87WUFBR0MsT0FBT047UUFBSTtRQUM1QyxPQUFPO0lBQ1Q7SUFFQSxJQUFJQSxNQUFNRSxNQUFNSSxLQUFLLEdBQUdQLFVBQVU7UUFDaENMLGFBQWFVLEdBQUcsQ0FBQ1AsSUFBSTtZQUFFUSxPQUFPO1lBQUdDLE9BQU9OO1FBQUk7UUFDNUMsT0FBTztJQUNUO0lBRUEsSUFBSUUsTUFBTUcsS0FBSyxJQUFJUCxPQUFPO1FBQ3hCLE9BQU87SUFDVDtJQUVBSSxNQUFNRyxLQUFLO0lBQ1gsT0FBTztBQUNUIiwic291cmNlcyI6WyJFOlxccHJvZ3JhbW1lXFx0ZWFpbnZpdGVcXHNyY1xcYXBwXFxsaWJcXHJhdGVMaW1pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFJhdGVMaW1pdEVudHJ5ID0ge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IHJhdGVMaW1pdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSYXRlTGltaXRFbnRyeT4oKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYXRlTGltaXQoXHJcbiAgaXA6IHN0cmluZyxcclxuICBsaW1pdCA9IDUsXHJcbiAgd2luZG93TXMgPSA2MF8wMDBcclxuKTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgY29uc3QgZW50cnkgPSByYXRlTGltaXRNYXAuZ2V0KGlwKTtcclxuXHJcbiAgaWYgKCFlbnRyeSkge1xyXG4gICAgcmF0ZUxpbWl0TWFwLnNldChpcCwgeyBjb3VudDogMSwgc3RhcnQ6IG5vdyB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5vdyAtIGVudHJ5LnN0YXJ0ID4gd2luZG93TXMpIHtcclxuICAgIHJhdGVMaW1pdE1hcC5zZXQoaXAsIHsgY291bnQ6IDEsIHN0YXJ0OiBub3cgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChlbnRyeS5jb3VudCA+PSBsaW1pdCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW50cnkuY291bnQrKztcclxuICByZXR1cm4gdHJ1ZTtcclxufSJdLCJuYW1lcyI6WyJyYXRlTGltaXRNYXAiLCJNYXAiLCJyYXRlTGltaXQiLCJpcCIsImxpbWl0Iiwid2luZG93TXMiLCJub3ciLCJEYXRlIiwiZW50cnkiLCJnZXQiLCJzZXQiLCJjb3VudCIsInN0YXJ0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/rateLimit.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/svix","vendor-chunks/uuid","vendor-chunks/postal-mime","vendor-chunks/standardwebhooks","vendor-chunks/resend","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=E%3A%5Cprogramme%5Cteainvite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cprogramme%5Cteainvite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();