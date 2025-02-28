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
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var H_www_GometUI_gometui_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/route.ts */ \"(rsc)/./src/app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"H:\\\\www\\\\GometUI\\\\gometui\\\\src\\\\app\\\\api\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: H_www_GometUI_gometui_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1IJTNBJTVDd3d3JTVDR29tZXRVSSU1Q2dvbWV0dWklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUglM0ElNUN3d3clNUNHb21ldFVJJTVDZ29tZXR1aSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDUztBQUN0RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSDpcXFxcd3d3XFxcXEdvbWV0VUlcXFxcZ29tZXR1aVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJIOlxcXFx3d3dcXFxcR29tZXRVSVxcXFxnb21ldHVpXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/users/route.ts":
/*!************************************!*\
  !*** ./src/app/api/users/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm/v4.js\");\n// src/app/api/users/route.ts\n\n\n\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default())('database/users.db');\n// Créer la table uniquement si elle n'existe pas (sans DROP)\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT NOT NULL UNIQUE,\n    role TEXT NOT NULL,\n    banned INTEGER DEFAULT 0\n  )\n`);\nconst insertUser = db.prepare('INSERT INTO users (id, name, email, role, banned) VALUES (?, ?, ?, ?, ?)');\nconst selectAllUsers = db.prepare('SELECT * FROM users');\nconst updateUser = db.prepare('UPDATE users SET name = ?, email = ?, role = ?, banned = ? WHERE id = ?');\nconst deleteUser = db.prepare('DELETE FROM users WHERE id = ?');\nconst countUsersByRole = db.prepare('SELECT role, COUNT(*) as count FROM users WHERE banned = 0 GROUP BY role');\nconst countTotalUsers = db.prepare('SELECT COUNT(*) as total FROM users WHERE banned = 0');\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const type = searchParams.get('type');\n    try {\n        if (type === 'stats') {\n            const totalResult = countTotalUsers.get();\n            const total = totalResult.total;\n            const byRole = countUsersByRole.all();\n            const stats = {\n                total,\n                roles: byRole.reduce((acc, { role, count })=>({\n                        ...acc,\n                        [role]: count\n                    }), {})\n            };\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(stats);\n        }\n        const users = selectAllUsers.all();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(users);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch data',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const { name, email, role } = await req.json();\n        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        insertUser.run(id, name, email, role, 0);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id,\n            name,\n            email,\n            role,\n            banned: 0\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to add user',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(req) {\n    try {\n        const { id, name, email, role, banned } = await req.json();\n        updateUser.run(name, email, role, banned !== undefined ? banned : 0, id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id,\n            name,\n            email,\n            role,\n            banned\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update user',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req) {\n    try {\n        const { id } = await req.json();\n        deleteUser.run(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'User deleted'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to delete user',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtRQUFPLEdBQUc7WUFBRUcsUUFBUTtRQUFJO0lBQ3JHO0FBQ0Y7QUFFTyxlQUFlUyxPQUFPOUIsR0FBZ0I7SUFDM0MsSUFBSTtRQUNGLE1BQU0sRUFBRXlCLEVBQUUsRUFBRSxHQUFHLE1BQU16QixJQUFJZ0IsSUFBSTtRQUM3QnBCLFdBQVc4QixHQUFHLENBQUNEO1FBQ2YsT0FBT3ZDLHFEQUFZQSxDQUFDOEIsSUFBSSxDQUFDO1lBQUVlLFNBQVM7UUFBZTtJQUNyRCxFQUFFLE9BQU9iLE9BQU87UUFDZCxPQUFPaEMscURBQVlBLENBQUM4QixJQUFJLENBQUM7WUFBRUUsT0FBTztZQUF5QkMsU0FBU0MsT0FBT0Y7UUFBTyxHQUFHO1lBQUVHLFFBQVE7UUFBSTtJQUNyRztBQUNGIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGFwcFxcYXBpXFx1c2Vyc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvdXNlcnMvcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IERhdGFiYXNlIGZyb20gJ2JldHRlci1zcWxpdGUzJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICByb2xlOiBzdHJpbmc7XHJcbiAgYmFubmVkPzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUm9sZUNvdW50IHtcclxuICByb2xlOiBzdHJpbmc7XHJcbiAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRvdGFsQ291bnQge1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gbmV3IERhdGFiYXNlKCdkYXRhYmFzZS91c2Vycy5kYicpO1xyXG5cclxuLy8gQ3LDqWVyIGxhIHRhYmxlIHVuaXF1ZW1lbnQgc2kgZWxsZSBuJ2V4aXN0ZSBwYXMgKHNhbnMgRFJPUClcclxuZGIuZXhlYyhgXHJcbiAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxyXG4gICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcclxuICAgIG5hbWUgVEVYVCBOT1QgTlVMTCxcclxuICAgIGVtYWlsIFRFWFQgTk9UIE5VTEwgVU5JUVVFLFxyXG4gICAgcm9sZSBURVhUIE5PVCBOVUxMLFxyXG4gICAgYmFubmVkIElOVEVHRVIgREVGQVVMVCAwXHJcbiAgKVxyXG5gKTtcclxuXHJcbmNvbnN0IGluc2VydFVzZXIgPSBkYi5wcmVwYXJlKCdJTlNFUlQgSU5UTyB1c2VycyAoaWQsIG5hbWUsIGVtYWlsLCByb2xlLCBiYW5uZWQpIFZBTFVFUyAoPywgPywgPywgPywgPyknKTtcclxuY29uc3Qgc2VsZWN0QWxsVXNlcnMgPSBkYi5wcmVwYXJlKCdTRUxFQ1QgKiBGUk9NIHVzZXJzJyk7XHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBkYi5wcmVwYXJlKCdVUERBVEUgdXNlcnMgU0VUIG5hbWUgPSA/LCBlbWFpbCA9ID8sIHJvbGUgPSA/LCBiYW5uZWQgPSA/IFdIRVJFIGlkID0gPycpO1xyXG5jb25zdCBkZWxldGVVc2VyID0gZGIucHJlcGFyZSgnREVMRVRFIEZST00gdXNlcnMgV0hFUkUgaWQgPSA/Jyk7XHJcbmNvbnN0IGNvdW50VXNlcnNCeVJvbGUgPSBkYi5wcmVwYXJlKCdTRUxFQ1Qgcm9sZSwgQ09VTlQoKikgYXMgY291bnQgRlJPTSB1c2VycyBXSEVSRSBiYW5uZWQgPSAwIEdST1VQIEJZIHJvbGUnKTtcclxuY29uc3QgY291bnRUb3RhbFVzZXJzID0gZGIucHJlcGFyZSgnU0VMRUNUIENPVU5UKCopIGFzIHRvdGFsIEZST00gdXNlcnMgV0hFUkUgYmFubmVkID0gMCcpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgdHlwZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmICh0eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsUmVzdWx0ID0gY291bnRUb3RhbFVzZXJzLmdldCgpIGFzIFRvdGFsQ291bnQ7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gdG90YWxSZXN1bHQudG90YWw7XHJcbiAgICAgIGNvbnN0IGJ5Um9sZSA9IGNvdW50VXNlcnNCeVJvbGUuYWxsKCkgYXMgUm9sZUNvdW50W107XHJcbiAgICAgIGNvbnN0IHN0YXRzID0ge1xyXG4gICAgICAgIHRvdGFsLFxyXG4gICAgICAgIHJvbGVzOiBieVJvbGUucmVkdWNlKChhY2MsIHsgcm9sZSwgY291bnQgfSkgPT4gKHsgLi4uYWNjLCBbcm9sZV06IGNvdW50IH0pLCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSxcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHN0YXRzKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJzID0gc2VsZWN0QWxsVXNlcnMuYWxsKCkgYXMgVXNlcltdO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXJzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZGF0YScsIGRldGFpbHM6IFN0cmluZyhlcnJvcikgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcm9sZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnN0IGlkID0gdXVpZHY0KCk7XHJcbiAgICBpbnNlcnRVc2VyLnJ1bihpZCwgbmFtZSwgZW1haWwsIHJvbGUsIDApO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgaWQsIG5hbWUsIGVtYWlsLCByb2xlLCBiYW5uZWQ6IDAgfSwgeyBzdGF0dXM6IDIwMSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gYWRkIHVzZXInLCBkZXRhaWxzOiBTdHJpbmcoZXJyb3IpIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHJvbGUsIGJhbm5lZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIHVwZGF0ZVVzZXIucnVuKG5hbWUsIGVtYWlsLCByb2xlLCBiYW5uZWQgIT09IHVuZGVmaW5lZCA/IGJhbm5lZCA6IDAsIGlkKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGlkLCBuYW1lLCBlbWFpbCwgcm9sZSwgYmFubmVkIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdXNlcicsIGRldGFpbHM6IFN0cmluZyhlcnJvcikgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgZGVsZXRlVXNlci5ydW4oaWQpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZGVsZXRlZCcgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSB1c2VyJywgZGV0YWlsczogU3RyaW5nKGVycm9yKSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJEYXRhYmFzZSIsInY0IiwidXVpZHY0IiwiZGIiLCJleGVjIiwiaW5zZXJ0VXNlciIsInByZXBhcmUiLCJzZWxlY3RBbGxVc2VycyIsInVwZGF0ZVVzZXIiLCJkZWxldGVVc2VyIiwiY291bnRVc2Vyc0J5Um9sZSIsImNvdW50VG90YWxVc2VycyIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInR5cGUiLCJnZXQiLCJ0b3RhbFJlc3VsdCIsInRvdGFsIiwiYnlSb2xlIiwiYWxsIiwic3RhdHMiLCJyb2xlcyIsInJlZHVjZSIsImFjYyIsInJvbGUiLCJjb3VudCIsImpzb24iLCJ1c2VycyIsImVycm9yIiwiZGV0YWlscyIsIlN0cmluZyIsInN0YXR1cyIsIlBPU1QiLCJuYW1lIiwiZW1haWwiLCJpZCIsInJ1biIsImJhbm5lZCIsIlBVVCIsInVuZGVmaW5lZCIsIkRFTEVURSIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();