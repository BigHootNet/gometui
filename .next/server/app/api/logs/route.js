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
exports.id = "app/api/logs/route";
exports.ids = ["app/api/logs/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var H_www_GometUI_gometui_src_app_api_logs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/logs/route.ts */ \"(rsc)/./src/app/api/logs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/logs/route\",\n        pathname: \"/api/logs\",\n        filename: \"route\",\n        bundlePath: \"app/api/logs/route\"\n    },\n    resolvedPagePath: \"H:\\\\www\\\\GometUI\\\\gometui\\\\src\\\\app\\\\api\\\\logs\\\\route.ts\",\n    nextConfigOutput,\n    userland: H_www_GometUI_gometui_src_app_api_logs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZsb2dzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbG9ncyUyRnJvdXRlLnRzJmFwcERpcj1IJTNBJTVDd3d3JTVDR29tZXRVSSU1Q2dvbWV0dWklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUglM0ElNUN3d3clNUNHb21ldFVJJTVDZ29tZXR1aSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDUTtBQUNyRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSDpcXFxcd3d3XFxcXEdvbWV0VUlcXFxcZ29tZXR1aVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsb2dzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkg6XFxcXHd3d1xcXFxHb21ldFVJXFxcXGdvbWV0dWlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcbG9nc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/logs/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/logs/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// src/app/api/logs/route.ts\n\n\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const limit = parseInt(searchParams.get('limit') || '10', 10); // Par défaut 10\n    const offset = parseInt(searchParams.get('offset') || '0', 10); // Par défaut 0\n    try {\n        const logs = _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC LIMIT ? OFFSET ?').all(limit, offset);\n        const total = _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prepare('SELECT COUNT(*) as total FROM logs').get();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            logs,\n            total: total.total\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch logs',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const { user_id, action, target_id, target_name, timestamp } = await req.json();\n        _lib_db__WEBPACK_IMPORTED_MODULE_1__.insertLog.run(user_id, action, target_id || null, target_name || null, timestamp);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Log added'\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to add log',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw0QkFBNEI7QUFDNEI7QUFDQTtBQUVqRCxlQUFlRyxJQUFJQyxHQUFnQjtJQUN4QyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7SUFDeEMsTUFBTUMsUUFBUUMsU0FBU0osYUFBYUssR0FBRyxDQUFDLFlBQVksTUFBTSxLQUFLLGdCQUFnQjtJQUMvRSxNQUFNQyxTQUFTRixTQUFTSixhQUFhSyxHQUFHLENBQUMsYUFBYSxLQUFLLEtBQUssZUFBZTtJQUUvRSxJQUFJO1FBQ0YsTUFBTUUsT0FBT1gsK0NBQUVBLENBQUNZLE9BQU8sQ0FBQyxtSUFBbUlDLEdBQUcsQ0FBQ04sT0FBT0c7UUFDdEssTUFBTUksUUFBUWQsK0NBQUVBLENBQUNZLE9BQU8sQ0FBQyxzQ0FBc0NILEdBQUc7UUFDbEUsT0FBT1YscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUo7WUFBTUcsT0FBT0EsTUFBTUEsS0FBSztRQUFDO0lBQ3RELEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU9qQixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztZQUFFQyxPQUFPO1lBQXdCQyxTQUFTQyxPQUFPRjtRQUFPLEdBQUc7WUFBRUcsUUFBUTtRQUFJO0lBQ3BHO0FBQ0Y7QUFFTyxlQUFlQyxLQUFLakIsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRWtCLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFLEdBQUcsTUFBTXRCLElBQUlZLElBQUk7UUFDN0VkLDhDQUFTQSxDQUFDeUIsR0FBRyxDQUFDTCxTQUFTQyxRQUFRQyxhQUFhLE1BQU1DLGVBQWUsTUFBTUM7UUFDdkUsT0FBTzFCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVZLFNBQVM7UUFBWSxHQUFHO1lBQUVSLFFBQVE7UUFBSTtJQUNuRSxFQUFFLE9BQU9ILE9BQU87UUFDZCxPQUFPakIscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUMsT0FBTztZQUFxQkMsU0FBU0MsT0FBT0Y7UUFBTyxHQUFHO1lBQUVHLFFBQVE7UUFBSTtJQUNqRztBQUNGIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGFwcFxcYXBpXFxsb2dzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FwaS9sb2dzL3JvdXRlLnRzXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBkYiwgeyBpbnNlcnRMb2csIHNlbGVjdEFsbExvZ3MgfSBmcm9tICdAL2xpYi9kYic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCBsaW1pdCA9IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5nZXQoJ2xpbWl0JykgfHwgJzEwJywgMTApOyAvLyBQYXIgZMOpZmF1dCAxMFxyXG4gIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5nZXQoJ29mZnNldCcpIHx8ICcwJywgMTApOyAvLyBQYXIgZMOpZmF1dCAwXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2dzID0gZGIucHJlcGFyZSgnU0VMRUNUIGxvZ3MuKiwgdXNlcnMubmFtZSBBUyB1c2VyX25hbWUgRlJPTSBsb2dzIEpPSU4gdXNlcnMgT04gbG9ncy51c2VyX2lkID0gdXNlcnMuaWQgT1JERVIgQlkgdGltZXN0YW1wIERFU0MgTElNSVQgPyBPRkZTRVQgPycpLmFsbChsaW1pdCwgb2Zmc2V0KTtcclxuICAgIGNvbnN0IHRvdGFsID0gZGIucHJlcGFyZSgnU0VMRUNUIENPVU5UKCopIGFzIHRvdGFsIEZST00gbG9ncycpLmdldCgpIGFzIHsgdG90YWw6IG51bWJlciB9O1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbG9ncywgdG90YWw6IHRvdGFsLnRvdGFsIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBsb2dzJywgZGV0YWlsczogU3RyaW5nKGVycm9yKSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVzZXJfaWQsIGFjdGlvbiwgdGFyZ2V0X2lkLCB0YXJnZXRfbmFtZSwgdGltZXN0YW1wIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgaW5zZXJ0TG9nLnJ1bih1c2VyX2lkLCBhY3Rpb24sIHRhcmdldF9pZCB8fCBudWxsLCB0YXJnZXRfbmFtZSB8fCBudWxsLCB0aW1lc3RhbXApO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0xvZyBhZGRlZCcgfSwgeyBzdGF0dXM6IDIwMSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gYWRkIGxvZycsIGRldGFpbHM6IFN0cmluZyhlcnJvcikgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJpbnNlcnRMb2ciLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJsaW1pdCIsInBhcnNlSW50IiwiZ2V0Iiwib2Zmc2V0IiwibG9ncyIsInByZXBhcmUiLCJhbGwiLCJ0b3RhbCIsImpzb24iLCJlcnJvciIsImRldGFpbHMiLCJTdHJpbmciLCJzdGF0dXMiLCJQT1NUIiwidXNlcl9pZCIsImFjdGlvbiIsInRhcmdldF9pZCIsInRhcmdldF9uYW1lIiwidGltZXN0YW1wIiwicnVuIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/logs/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   insertLog: () => (/* binding */ insertLog),\n/* harmony export */   selectAllLogs: () => (/* binding */ selectAllLogs)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n// src/lib/db.ts\n\n\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('database/users.db');\n// Table users\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT NOT NULL UNIQUE,\n    password TEXT NOT NULL,\n    role TEXT NOT NULL,\n    banned INTEGER DEFAULT 0\n  )\n`);\n// Table logs\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS logs (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    user_id TEXT NOT NULL,\n    action TEXT NOT NULL,\n    target_id TEXT,\n    target_name TEXT,\n    timestamp INTEGER NOT NULL,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n  )\n`);\n// Insérer l'utilisateur initial\nconst saltRounds = 10;\nconst insertInitialUser = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');\nconst hashedPassword = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync('password123', saltRounds);\ninsertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);\n// Préparer la requête pour insérer un log\nconst insertLog = db.prepare('INSERT INTO logs (user_id, action, target_id, target_name, timestamp) VALUES (?, ?, ?, ?, ?)');\nconst selectAllLogs = db.prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFDc0I7QUFDVjtBQUU1QixNQUFNRSxLQUFLLElBQUlGLHVEQUFRQSxDQUFDO0FBRXhCLGNBQWM7QUFDZEUsR0FBR0MsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7OztBQVNULENBQUM7QUFFRCxhQUFhO0FBQ2JELEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FBVVQsQ0FBQztBQUVELGdDQUFnQztBQUNoQyxNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLG9CQUFvQkgsR0FBR0ksT0FBTyxDQUFDO0FBQ3JDLE1BQU1DLGlCQUFpQk4sc0RBQWUsQ0FBQyxlQUFlRztBQUN0REMsa0JBQWtCSSxHQUFHLENBQUMsS0FBSyxhQUFhLG9CQUFvQkYsZ0JBQWdCLGNBQWM7QUFFMUYsMENBQTBDO0FBQ25DLE1BQU1HLFlBQVlSLEdBQUdJLE9BQU8sQ0FBQyxnR0FBZ0c7QUFDN0gsTUFBTUssZ0JBQWdCVCxHQUFHSSxPQUFPLENBQUMsa0hBQWtIO0FBRTFKLGlFQUFlSixFQUFFQSxFQUFDIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9kYi50c1xyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgnZGF0YWJhc2UvdXNlcnMuZGInKTtcclxuXHJcbi8vIFRhYmxlIHVzZXJzXHJcbmRiLmV4ZWMoYFxyXG4gIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHVzZXJzIChcclxuICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXHJcbiAgICBuYW1lIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBlbWFpbCBURVhUIE5PVCBOVUxMIFVOSVFVRSxcclxuICAgIHBhc3N3b3JkIFRFWFQgTk9UIE5VTEwsXHJcbiAgICByb2xlIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBiYW5uZWQgSU5URUdFUiBERUZBVUxUIDBcclxuICApXHJcbmApO1xyXG5cclxuLy8gVGFibGUgbG9nc1xyXG5kYi5leGVjKGBcclxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBsb2dzIChcclxuICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgIHVzZXJfaWQgVEVYVCBOT1QgTlVMTCxcclxuICAgIGFjdGlvbiBURVhUIE5PVCBOVUxMLFxyXG4gICAgdGFyZ2V0X2lkIFRFWFQsXHJcbiAgICB0YXJnZXRfbmFtZSBURVhULFxyXG4gICAgdGltZXN0YW1wIElOVEVHRVIgTk9UIE5VTEwsXHJcbiAgICBGT1JFSUdOIEtFWSAodXNlcl9pZCkgUkVGRVJFTkNFUyB1c2VycyhpZClcclxuICApXHJcbmApO1xyXG5cclxuLy8gSW5zw6lyZXIgbCd1dGlsaXNhdGV1ciBpbml0aWFsXHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuY29uc3QgaW5zZXJ0SW5pdGlhbFVzZXIgPSBkYi5wcmVwYXJlKCdJTlNFUlQgT1IgSUdOT1JFIElOVE8gdXNlcnMgKGlkLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHJvbGUsIGJhbm5lZCkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/KScpO1xyXG5jb25zdCBoYXNoZWRQYXNzd29yZCA9IGJjcnlwdC5oYXNoU3luYygncGFzc3dvcmQxMjMnLCBzYWx0Um91bmRzKTtcclxuaW5zZXJ0SW5pdGlhbFVzZXIucnVuKCcxJywgJ1Rlc3QgVXNlcicsICd0ZXN0QGV4YW1wbGUuY29tJywgaGFzaGVkUGFzc3dvcmQsICdzdXBlcmFkbWluJywgMCk7XHJcblxyXG4vLyBQcsOpcGFyZXIgbGEgcmVxdcOqdGUgcG91ciBpbnPDqXJlciB1biBsb2dcclxuZXhwb3J0IGNvbnN0IGluc2VydExvZyA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIGxvZ3MgKHVzZXJfaWQsIGFjdGlvbiwgdGFyZ2V0X2lkLCB0YXJnZXRfbmFtZSwgdGltZXN0YW1wKSBWQUxVRVMgKD8sID8sID8sID8sID8pJyk7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxMb2dzID0gZGIucHJlcGFyZSgnU0VMRUNUIGxvZ3MuKiwgdXNlcnMubmFtZSBBUyB1c2VyX25hbWUgRlJPTSBsb2dzIEpPSU4gdXNlcnMgT04gbG9ncy51c2VyX2lkID0gdXNlcnMuaWQgT1JERVIgQlkgdGltZXN0YW1wIERFU0MnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiOyJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsImJjcnlwdCIsImRiIiwiZXhlYyIsInNhbHRSb3VuZHMiLCJpbnNlcnRJbml0aWFsVXNlciIsInByZXBhcmUiLCJoYXNoZWRQYXNzd29yZCIsImhhc2hTeW5jIiwicnVuIiwiaW5zZXJ0TG9nIiwic2VsZWN0QWxsTG9ncyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();