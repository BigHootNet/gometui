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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm/v4.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// src/app/api/users/route.ts\n\n\n\n\nconst saltRounds = 10;\nconst insertUser = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare('INSERT INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');\nconst selectAllUsers = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare('SELECT * FROM users');\nconst updateUser = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare('UPDATE users SET name = ?, email = ?, password = ?, role = ?, banned = ? WHERE id = ?');\nconst deleteUser = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare('DELETE FROM users WHERE id = ?');\nconst countUsersByRole = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare('SELECT role, COUNT(*) as count FROM users WHERE banned = 0 GROUP BY role');\nconst countTotalUsers = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare('SELECT COUNT(*) as total FROM users WHERE banned = 0');\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const type = searchParams.get('type');\n    try {\n        if (type === 'stats') {\n            const totalResult = countTotalUsers.get();\n            const total = totalResult.total;\n            const byRole = countUsersByRole.all();\n            const stats = {\n                total,\n                roles: byRole.reduce((acc, { role, count })=>({\n                        ...acc,\n                        [role]: count\n                    }), {})\n            };\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(stats);\n        }\n        const users = selectAllUsers.all();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(users);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch data',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const { name, email, password, role } = await req.json();\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, saltRounds);\n        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        insertUser.run(id, name, email, hashedPassword, role, 0);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id,\n            name,\n            email,\n            password: hashedPassword,\n            role,\n            banned: 0\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to add user',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(req) {\n    try {\n        const { id, name, email, password, role, banned } = await req.json();\n        const users = selectAllUsers.all(); // Typage explicite\n        const userToUpdate = users.find((u)=>u.id === id);\n        if (!userToUpdate) throw new Error('User not found');\n        const hashedPassword = password ? await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, saltRounds) : userToUpdate.password;\n        updateUser.run(name, email, hashedPassword, role, banned !== undefined ? banned : 0, id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id,\n            name,\n            email,\n            password: hashedPassword,\n            role,\n            banned\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update user',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req) {\n    try {\n        const { id } = await req.json();\n        deleteUser.run(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'User deleted'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to delete user',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCRCxXQUFXLE1BQU1wQyxrREFBVyxDQUFDb0MsVUFBVWxDLGNBQWN5QyxhQUFhUCxRQUFRO1FBQ2pHOUIsV0FBV2tDLEdBQUcsQ0FBQ04sTUFBTUMsT0FBT0UsZ0JBQWdCWixNQUFNZ0IsV0FBV00sWUFBWU4sU0FBUyxHQUFHRjtRQUNyRixPQUFPMUMscURBQVlBLENBQUM4QixJQUFJLENBQUM7WUFBRVk7WUFBSUw7WUFBTUM7WUFBT0MsVUFBVUM7WUFBZ0JaO1lBQU1nQjtRQUFPO0lBQ3JGLEVBQUUsT0FBT1osT0FBTztRQUNkLE9BQU9oQyxxREFBWUEsQ0FBQzhCLElBQUksQ0FBQztZQUFFRSxPQUFPO1lBQXlCQyxTQUFTQyxPQUFPRjtRQUFPLEdBQUc7WUFBRUcsUUFBUTtRQUFJO0lBQ3JHO0FBQ0Y7QUFFTyxlQUFlZ0IsT0FBT3JDLEdBQWdCO0lBQzNDLElBQUk7UUFDRixNQUFNLEVBQUU0QixFQUFFLEVBQUUsR0FBRyxNQUFNNUIsSUFBSWdCLElBQUk7UUFDN0JwQixXQUFXaUMsR0FBRyxDQUFDRDtRQUNmLE9BQU8xQyxxREFBWUEsQ0FBQzhCLElBQUksQ0FBQztZQUFFc0IsU0FBUztRQUFlO0lBQ3JELEVBQUUsT0FBT3BCLE9BQU87UUFDZCxPQUFPaEMscURBQVlBLENBQUM4QixJQUFJLENBQUM7WUFBRUUsT0FBTztZQUF5QkMsU0FBU0MsT0FBT0Y7UUFBTyxHQUFHO1lBQUVHLFFBQVE7UUFBSTtJQUNyRztBQUNGIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGFwcFxcYXBpXFx1c2Vyc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvdXNlcnMvcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IGRiIGZyb20gJ0AvbGliL2RiJztcclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcm9sZTogJ3N1cGVyYWRtaW4nIHwgJ2FkbWluJyB8ICd1c2VyJztcclxuICBiYW5uZWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSb2xlQ291bnQge1xyXG4gIHJvbGU6IHN0cmluZztcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG90YWxDb3VudCB7XHJcbiAgdG90YWw6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xyXG5cclxuY29uc3QgaW5zZXJ0VXNlciA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIHVzZXJzIChpZCwgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlLCBiYW5uZWQpIFZBTFVFUyAoPywgPywgPywgPywgPywgPyknKTtcclxuY29uc3Qgc2VsZWN0QWxsVXNlcnMgPSBkYi5wcmVwYXJlKCdTRUxFQ1QgKiBGUk9NIHVzZXJzJyk7XHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBkYi5wcmVwYXJlKCdVUERBVEUgdXNlcnMgU0VUIG5hbWUgPSA/LCBlbWFpbCA9ID8sIHBhc3N3b3JkID0gPywgcm9sZSA9ID8sIGJhbm5lZCA9ID8gV0hFUkUgaWQgPSA/Jyk7XHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBkYi5wcmVwYXJlKCdERUxFVEUgRlJPTSB1c2VycyBXSEVSRSBpZCA9ID8nKTtcclxuY29uc3QgY291bnRVc2Vyc0J5Um9sZSA9IGRiLnByZXBhcmUoJ1NFTEVDVCByb2xlLCBDT1VOVCgqKSBhcyBjb3VudCBGUk9NIHVzZXJzIFdIRVJFIGJhbm5lZCA9IDAgR1JPVVAgQlkgcm9sZScpO1xyXG5jb25zdCBjb3VudFRvdGFsVXNlcnMgPSBkYi5wcmVwYXJlKCdTRUxFQ1QgQ09VTlQoKikgYXMgdG90YWwgRlJPTSB1c2VycyBXSEVSRSBiYW5uZWQgPSAwJyk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCB0eXBlID0gc2VhcmNoUGFyYW1zLmdldCgndHlwZScpO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKHR5cGUgPT09ICdzdGF0cycpIHtcclxuICAgICAgY29uc3QgdG90YWxSZXN1bHQgPSBjb3VudFRvdGFsVXNlcnMuZ2V0KCkgYXMgVG90YWxDb3VudDtcclxuICAgICAgY29uc3QgdG90YWwgPSB0b3RhbFJlc3VsdC50b3RhbDtcclxuICAgICAgY29uc3QgYnlSb2xlID0gY291bnRVc2Vyc0J5Um9sZS5hbGwoKSBhcyBSb2xlQ291bnRbXTtcclxuICAgICAgY29uc3Qgc3RhdHMgPSB7XHJcbiAgICAgICAgdG90YWwsXHJcbiAgICAgICAgcm9sZXM6IGJ5Um9sZS5yZWR1Y2UoKGFjYywgeyByb2xlLCBjb3VudCB9KSA9PiAoeyAuLi5hY2MsIFtyb2xlXTogY291bnQgfSksIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pLFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oc3RhdHMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcnMgPSBzZWxlY3RBbGxVc2Vycy5hbGwoKSBhcyBVc2VyW107XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXNlcnMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJywgZGV0YWlsczogU3RyaW5nKGVycm9yKSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcm9sZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHRSb3VuZHMpO1xyXG4gICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcclxuICAgIGluc2VydFVzZXIucnVuKGlkLCBuYW1lLCBlbWFpbCwgaGFzaGVkUGFzc3dvcmQsIHJvbGUsIDApO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgaWQsIG5hbWUsIGVtYWlsLCBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsIHJvbGUsIGJhbm5lZDogMCB9LCB7IHN0YXR1czogMjAxIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBhZGQgdXNlcicsIGRldGFpbHM6IFN0cmluZyhlcnJvcikgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHJvbGUsIGJhbm5lZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnN0IHVzZXJzID0gc2VsZWN0QWxsVXNlcnMuYWxsKCkgYXMgVXNlcltdOyAvLyBUeXBhZ2UgZXhwbGljaXRlXHJcbiAgICBjb25zdCB1c2VyVG9VcGRhdGUgPSB1c2Vycy5maW5kKCh1KSA9PiB1LmlkID09PSBpZCk7XHJcbiAgICBpZiAoIXVzZXJUb1VwZGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xyXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBwYXNzd29yZCA/IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKSA6IHVzZXJUb1VwZGF0ZS5wYXNzd29yZDtcclxuICAgIHVwZGF0ZVVzZXIucnVuKG5hbWUsIGVtYWlsLCBoYXNoZWRQYXNzd29yZCwgcm9sZSwgYmFubmVkICE9PSB1bmRlZmluZWQgPyBiYW5uZWQgOiAwLCBpZCk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBpZCwgbmFtZSwgZW1haWwsIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCwgcm9sZSwgYmFubmVkIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdXNlcicsIGRldGFpbHM6IFN0cmluZyhlcnJvcikgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgZGVsZXRlVXNlci5ydW4oaWQpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZGVsZXRlZCcgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSB1c2VyJywgZGV0YWlsczogU3RyaW5nKGVycm9yKSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ2NCIsInV1aWR2NCIsImJjcnlwdCIsImRiIiwic2FsdFJvdW5kcyIsImluc2VydFVzZXIiLCJwcmVwYXJlIiwic2VsZWN0QWxsVXNlcnMiLCJ1cGRhdGVVc2VyIiwiZGVsZXRlVXNlciIsImNvdW50VXNlcnNCeVJvbGUiLCJjb3VudFRvdGFsVXNlcnMiLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJ0eXBlIiwiZ2V0IiwidG90YWxSZXN1bHQiLCJ0b3RhbCIsImJ5Um9sZSIsImFsbCIsInN0YXRzIiwicm9sZXMiLCJyZWR1Y2UiLCJhY2MiLCJyb2xlIiwiY291bnQiLCJqc29uIiwidXNlcnMiLCJlcnJvciIsImRldGFpbHMiLCJTdHJpbmciLCJzdGF0dXMiLCJQT1NUIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJpZCIsInJ1biIsImJhbm5lZCIsIlBVVCIsInVzZXJUb1VwZGF0ZSIsImZpbmQiLCJ1IiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJERUxFVEUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n// src/lib/db.ts\n\n\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('database/users.db');\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT NOT NULL UNIQUE,\n    password TEXT NOT NULL,\n    role TEXT NOT NULL,\n    banned INTEGER DEFAULT 0\n  )\n`);\nconst saltRounds = 10;\nconst insertInitialUser = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');\n// Hacher le mot de passe initial\nconst hashedPassword = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync('password123', saltRounds);\ninsertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ3NCO0FBQ1Y7QUFFNUIsTUFBTUUsS0FBSyxJQUFJRix1REFBUUEsQ0FBQztBQUV4QkUsR0FBR0MsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7OztBQVNULENBQUM7QUFFRCxNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLG9CQUFvQkgsR0FBR0ksT0FBTyxDQUFDO0FBRXJDLGlDQUFpQztBQUNqQyxNQUFNQyxpQkFBaUJOLHNEQUFlLENBQUMsZUFBZUc7QUFDdERDLGtCQUFrQkksR0FBRyxDQUFDLEtBQUssYUFBYSxvQkFBb0JGLGdCQUFnQixjQUFjO0FBRTFGLGlFQUFlTCxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9kYi50c1xyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgnZGF0YWJhc2UvdXNlcnMuZGInKTtcclxuXHJcbmRiLmV4ZWMoYFxyXG4gIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHVzZXJzIChcclxuICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXHJcbiAgICBuYW1lIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBlbWFpbCBURVhUIE5PVCBOVUxMIFVOSVFVRSxcclxuICAgIHBhc3N3b3JkIFRFWFQgTk9UIE5VTEwsXHJcbiAgICByb2xlIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBiYW5uZWQgSU5URUdFUiBERUZBVUxUIDBcclxuICApXHJcbmApO1xyXG5cclxuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xyXG5jb25zdCBpbnNlcnRJbml0aWFsVXNlciA9IGRiLnByZXBhcmUoJ0lOU0VSVCBPUiBJR05PUkUgSU5UTyB1c2VycyAoaWQsIG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcm9sZSwgYmFubmVkKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8pJyk7XHJcblxyXG4vLyBIYWNoZXIgbGUgbW90IGRlIHBhc3NlIGluaXRpYWxcclxuY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBiY3J5cHQuaGFzaFN5bmMoJ3Bhc3N3b3JkMTIzJywgc2FsdFJvdW5kcyk7XHJcbmluc2VydEluaXRpYWxVc2VyLnJ1bignMScsICdUZXN0IFVzZXInLCAndGVzdEBleGFtcGxlLmNvbScsIGhhc2hlZFBhc3N3b3JkLCAnc3VwZXJhZG1pbicsIDApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7Il0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiYmNyeXB0IiwiZGIiLCJleGVjIiwic2FsdFJvdW5kcyIsImluc2VydEluaXRpYWxVc2VyIiwicHJlcGFyZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaFN5bmMiLCJydW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

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