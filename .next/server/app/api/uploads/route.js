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
exports.id = "app/api/uploads/route";
exports.ids = ["app/api/uploads/route"];
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var H_www_GometUI_gometui_src_app_api_uploads_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/uploads/route.ts */ \"(rsc)/./src/app/api/uploads/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/uploads/route\",\n        pathname: \"/api/uploads\",\n        filename: \"route\",\n        bundlePath: \"app/api/uploads/route\"\n    },\n    resolvedPagePath: \"H:\\\\www\\\\GometUI\\\\gometui\\\\src\\\\app\\\\api\\\\uploads\\\\route.ts\",\n    nextConfigOutput,\n    userland: H_www_GometUI_gometui_src_app_api_uploads_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1cGxvYWRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXBsb2FkcyUyRnJvdXRlLnRzJmFwcERpcj1IJTNBJTVDd3d3JTVDR29tZXRVSSU1Q2dvbWV0dWklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUglM0ElNUN3d3clNUNHb21ldFVJJTVDZ29tZXR1aSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSDpcXFxcd3d3XFxcXEdvbWV0VUlcXFxcZ29tZXR1aVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1cGxvYWRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91cGxvYWRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXBsb2Fkc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXBsb2Fkcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkg6XFxcXHd3d1xcXFxHb21ldFVJXFxcXGdvbWV0dWlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXBsb2Fkc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/uploads/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/uploads/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm/v4.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// src/app/api/uploads/route.ts\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        const file = formData.get('file');\n        const userId = formData.get('userId');\n        const type = formData.get('type'); // 'avatar' ou 'album'\n        if (!file || !userId || !type) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing file, userId, or type'\n            }, {\n                status: 400\n            });\n        }\n        const uploadDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'public/uploads');\n        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.mkdir(uploadDir, {\n            recursive: true\n        });\n        const fileExtension = path__WEBPACK_IMPORTED_MODULE_2___default().extname(file.name);\n        const fileName = `${(0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()}${fileExtension}`;\n        const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadDir, fileName);\n        const buffer = Buffer.from(await file.arrayBuffer());\n        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile(filePath, buffer);\n        const relativePath = `/uploads/${fileName}`;\n        if (type === 'avatar') {\n            _lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepare('UPDATE users SET avatar = ? WHERE id = ?').run(relativePath, userId);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Avatar uploaded',\n                path: relativePath\n            }, {\n                status: 201\n            });\n        } else if (type === 'album') {\n            const title = formData.get('title') || 'Untitled Album';\n            const albumId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n            const timestamp = Math.floor(Date.now() / 1000);\n            _lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepare('INSERT INTO albums (id, user_id, title, file_path, created_at) VALUES (?, ?, ?, ?, ?)').run(albumId, userId, title, relativePath, timestamp);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Album uploaded',\n                id: albumId,\n                path: relativePath\n            }, {\n                status: 201\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Invalid type'\n        }, {\n            status: 400\n        });\n    } catch (error) {\n        console.error('Error uploading file:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to upload file',\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGxvYWRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQ3lCO0FBQ3BCO0FBQ1o7QUFDWTtBQUNWO0FBRW5CLGVBQWVPLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7UUFDbkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBQzFCLE1BQU1DLFNBQVNILFNBQVNFLEdBQUcsQ0FBQztRQUM1QixNQUFNRSxPQUFPSixTQUFTRSxHQUFHLENBQUMsU0FBbUIsc0JBQXNCO1FBRW5FLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxVQUFVLENBQUNDLE1BQU07WUFDN0IsT0FBT2IscURBQVlBLENBQUNjLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFnQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckY7UUFFQSxNQUFNQyxZQUFZZCxnREFBUyxDQUFDZ0IsUUFBUUMsR0FBRyxJQUFJO1FBQzNDLE1BQU1sQix3Q0FBRUEsQ0FBQ21CLEtBQUssQ0FBQ0osV0FBVztZQUFFSyxXQUFXO1FBQUs7UUFFNUMsTUFBTUMsZ0JBQWdCcEIsbURBQVksQ0FBQ08sS0FBS2UsSUFBSTtRQUM1QyxNQUFNQyxXQUFXLEdBQUdyQixnREFBTUEsS0FBS2tCLGVBQWU7UUFDOUMsTUFBTUksV0FBV3hCLGdEQUFTLENBQUNjLFdBQVdTO1FBRXRDLE1BQU1FLFNBQVNDLE9BQU9DLElBQUksQ0FBQyxNQUFNcEIsS0FBS3FCLFdBQVc7UUFDakQsTUFBTTdCLHdDQUFFQSxDQUFDOEIsU0FBUyxDQUFDTCxVQUFVQztRQUU3QixNQUFNSyxlQUFlLENBQUMsU0FBUyxFQUFFUCxVQUFVO1FBRTNDLElBQUliLFNBQVMsVUFBVTtZQUNyQlAsK0NBQUVBLENBQUM0QixPQUFPLENBQUMsNENBQTRDQyxHQUFHLENBQUNGLGNBQWNyQjtZQUN6RSxPQUFPWixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO2dCQUFFc0IsU0FBUztnQkFBbUJqQyxNQUFNOEI7WUFBYSxHQUFHO2dCQUFFakIsUUFBUTtZQUFJO1FBQzdGLE9BQU8sSUFBSUgsU0FBUyxTQUFTO1lBQzNCLE1BQU13QixRQUFRNUIsU0FBU0UsR0FBRyxDQUFDLFlBQXNCO1lBQ2pELE1BQU0yQixVQUFVakMsZ0RBQU1BO1lBQ3RCLE1BQU1rQyxZQUFZQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBSztZQUMxQ3JDLCtDQUFFQSxDQUFDNEIsT0FBTyxDQUFDLHlGQUNSQyxHQUFHLENBQUNHLFNBQVMxQixRQUFReUIsT0FBT0osY0FBY007WUFDN0MsT0FBT3ZDLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7Z0JBQUVzQixTQUFTO2dCQUFrQlEsSUFBSU47Z0JBQVNuQyxNQUFNOEI7WUFBYSxHQUFHO2dCQUFFakIsUUFBUTtZQUFJO1FBQ3pHO1FBRUEsT0FBT2hCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFLEVBQUUsT0FBT0QsT0FBTztRQUNkOEIsUUFBUTlCLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU9mLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7WUFBRUMsT0FBTztZQUF5QitCLFNBQVNDLE9BQU9oQztRQUFPLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JHO0FBQ0YiLCJzb3VyY2VzIjpbIkg6XFx3d3dcXEdvbWV0VUlcXGdvbWV0dWlcXHNyY1xcYXBwXFxhcGlcXHVwbG9hZHNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL3VwbG9hZHMvcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGRiIGZyb20gJ0AvbGliL2RiJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xyXG4gICAgY29uc3QgdXNlcklkID0gZm9ybURhdGEuZ2V0KCd1c2VySWQnKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCB0eXBlID0gZm9ybURhdGEuZ2V0KCd0eXBlJykgYXMgc3RyaW5nOyAvLyAnYXZhdGFyJyBvdSAnYWxidW0nXHJcblxyXG4gICAgaWYgKCFmaWxlIHx8ICF1c2VySWQgfHwgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIGZpbGUsIHVzZXJJZCwgb3IgdHlwZScgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYy91cGxvYWRzJyk7XHJcbiAgICBhd2FpdCBmcy5ta2Rpcih1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBwYXRoLmV4dG5hbWUoZmlsZS5uYW1lKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7dXVpZHY0KCl9JHtmaWxlRXh0ZW5zaW9ufWA7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbih1cGxvYWREaXIsIGZpbGVOYW1lKTtcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBidWZmZXIpO1xyXG5cclxuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGAvdXBsb2Fkcy8ke2ZpbGVOYW1lfWA7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdhdmF0YXInKSB7XHJcbiAgICAgIGRiLnByZXBhcmUoJ1VQREFURSB1c2VycyBTRVQgYXZhdGFyID0gPyBXSEVSRSBpZCA9ID8nKS5ydW4ocmVsYXRpdmVQYXRoLCB1c2VySWQpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQXZhdGFyIHVwbG9hZGVkJywgcGF0aDogcmVsYXRpdmVQYXRoIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhbGJ1bScpIHtcclxuICAgICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nIHx8ICdVbnRpdGxlZCBBbGJ1bSc7XHJcbiAgICAgIGNvbnN0IGFsYnVtSWQgPSB1dWlkdjQoKTtcclxuICAgICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICAgIGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIGFsYnVtcyAoaWQsIHVzZXJfaWQsIHRpdGxlLCBmaWxlX3BhdGgsIGNyZWF0ZWRfYXQpIFZBTFVFUyAoPywgPywgPywgPywgPyknKVxyXG4gICAgICAgIC5ydW4oYWxidW1JZCwgdXNlcklkLCB0aXRsZSwgcmVsYXRpdmVQYXRoLCB0aW1lc3RhbXApO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQWxidW0gdXBsb2FkZWQnLCBpZDogYWxidW1JZCwgcGF0aDogcmVsYXRpdmVQYXRoIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHR5cGUnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBmaWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHVwbG9hZCBmaWxlJywgZGV0YWlsczogU3RyaW5nKGVycm9yKSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcm9taXNlcyIsImZzIiwicGF0aCIsInY0IiwidXVpZHY0IiwiZGIiLCJQT1NUIiwicmVxIiwiZm9ybURhdGEiLCJmaWxlIiwiZ2V0IiwidXNlcklkIiwidHlwZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInVwbG9hZERpciIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwibWtkaXIiLCJyZWN1cnNpdmUiLCJmaWxlRXh0ZW5zaW9uIiwiZXh0bmFtZSIsIm5hbWUiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwid3JpdGVGaWxlIiwicmVsYXRpdmVQYXRoIiwicHJlcGFyZSIsInJ1biIsIm1lc3NhZ2UiLCJ0aXRsZSIsImFsYnVtSWQiLCJ0aW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiaWQiLCJjb25zb2xlIiwiZGV0YWlscyIsIlN0cmluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/uploads/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   insertLog: () => (/* binding */ insertLog),\n/* harmony export */   selectAllLogs: () => (/* binding */ selectAllLogs)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n// src/lib/db.ts\n\n\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('database/users.db');\n// Table users\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT NOT NULL UNIQUE,\n    password TEXT NOT NULL,\n    role TEXT NOT NULL,\n    banned INTEGER DEFAULT 0,\n    avatar TEXT DEFAULT NULL -- Nouveau champ pour l'avatar\n  )\n`);\n// Table logs\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS logs (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    user_id TEXT NOT NULL,\n    action TEXT NOT NULL,\n    target_id TEXT,\n    target_name TEXT,\n    timestamp INTEGER NOT NULL,\n    details TEXT,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n  )\n`);\n// Table albums (pour les portfolios admin)\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS albums (\n    id TEXT PRIMARY KEY,\n    user_id TEXT NOT NULL,\n    title TEXT NOT NULL,\n    file_path TEXT NOT NULL,\n    created_at INTEGER NOT NULL,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n  )\n`);\n// Migration pour ajouter la colonne avatar si elle n'existe pas\ntry {\n    db.exec(`ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT NULL`);\n} catch (error) {\n    if (error instanceof Error && error.message.includes('duplicate column name')) {\n    // Ignorer si la colonne existe déjà\n    } else {\n        console.error('Error adding avatar column to users:', error);\n    }\n}\n// Insérer l'utilisateur initial\nconst saltRounds = 10;\nconst insertInitialUser = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');\nconst hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync('password123', saltRounds);\ninsertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);\nconst insertLog = db.prepare('INSERT INTO logs (user_id, action, target_id, target_name, timestamp, details) VALUES (?, ?, ?, ?, ?, ?)');\nconst selectAllLogs = db.prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFDc0I7QUFDUjtBQUU5QixNQUFNRSxLQUFLLElBQUlGLHVEQUFRQSxDQUFDO0FBRXhCLGNBQWM7QUFDZEUsR0FBR0MsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUFVVCxDQUFDO0FBRUQsYUFBYTtBQUNiRCxHQUFHQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFXVCxDQUFDO0FBRUQsMkNBQTJDO0FBQzNDRCxHQUFHQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7O0FBU1QsQ0FBQztBQUVELGdFQUFnRTtBQUNoRSxJQUFJO0lBQ0ZELEdBQUdDLElBQUksQ0FBQyxDQUFDLHFEQUFxRCxDQUFDO0FBQ2pFLEVBQUUsT0FBT0MsT0FBZ0I7SUFDdkIsSUFBSUEsaUJBQWlCQyxTQUFTRCxNQUFNRSxPQUFPLENBQUNDLFFBQVEsQ0FBQywwQkFBMEI7SUFDN0Usb0NBQW9DO0lBQ3RDLE9BQU87UUFDTEMsUUFBUUosS0FBSyxDQUFDLHdDQUF3Q0E7SUFDeEQ7QUFDRjtBQUVBLGdDQUFnQztBQUNoQyxNQUFNSyxhQUFhO0FBQ25CLE1BQU1DLG9CQUFvQlIsR0FBR1MsT0FBTyxDQUNsQztBQUVGLE1BQU1DLGlCQUFpQlgsd0RBQWUsQ0FBQyxlQUFlUTtBQUN0REMsa0JBQWtCSSxHQUFHLENBQUMsS0FBSyxhQUFhLG9CQUFvQkYsZ0JBQWdCLGNBQWM7QUFFbkYsTUFBTUcsWUFBWWIsR0FBR1MsT0FBTyxDQUNqQyw0R0FDQTtBQUNLLE1BQU1LLGdCQUFnQmQsR0FBR1MsT0FBTyxDQUNyQyxrSEFDQTtBQUVGLGlFQUFlVCxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9kYi50c1xyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmNvbnN0IGRiID0gbmV3IERhdGFiYXNlKCdkYXRhYmFzZS91c2Vycy5kYicpO1xyXG5cclxuLy8gVGFibGUgdXNlcnNcclxuZGIuZXhlYyhgXHJcbiAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxyXG4gICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcclxuICAgIG5hbWUgVEVYVCBOT1QgTlVMTCxcclxuICAgIGVtYWlsIFRFWFQgTk9UIE5VTEwgVU5JUVVFLFxyXG4gICAgcGFzc3dvcmQgVEVYVCBOT1QgTlVMTCxcclxuICAgIHJvbGUgVEVYVCBOT1QgTlVMTCxcclxuICAgIGJhbm5lZCBJTlRFR0VSIERFRkFVTFQgMCxcclxuICAgIGF2YXRhciBURVhUIERFRkFVTFQgTlVMTCAtLSBOb3V2ZWF1IGNoYW1wIHBvdXIgbCdhdmF0YXJcclxuICApXHJcbmApO1xyXG5cclxuLy8gVGFibGUgbG9nc1xyXG5kYi5leGVjKGBcclxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBsb2dzIChcclxuICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgIHVzZXJfaWQgVEVYVCBOT1QgTlVMTCxcclxuICAgIGFjdGlvbiBURVhUIE5PVCBOVUxMLFxyXG4gICAgdGFyZ2V0X2lkIFRFWFQsXHJcbiAgICB0YXJnZXRfbmFtZSBURVhULFxyXG4gICAgdGltZXN0YW1wIElOVEVHRVIgTk9UIE5VTEwsXHJcbiAgICBkZXRhaWxzIFRFWFQsXHJcbiAgICBGT1JFSUdOIEtFWSAodXNlcl9pZCkgUkVGRVJFTkNFUyB1c2VycyhpZClcclxuICApXHJcbmApO1xyXG5cclxuLy8gVGFibGUgYWxidW1zIChwb3VyIGxlcyBwb3J0Zm9saW9zIGFkbWluKVxyXG5kYi5leGVjKGBcclxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBhbGJ1bXMgKFxyXG4gICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcclxuICAgIHVzZXJfaWQgVEVYVCBOT1QgTlVMTCxcclxuICAgIHRpdGxlIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBmaWxlX3BhdGggVEVYVCBOT1QgTlVMTCxcclxuICAgIGNyZWF0ZWRfYXQgSU5URUdFUiBOT1QgTlVMTCxcclxuICAgIEZPUkVJR04gS0VZICh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKVxyXG4gIClcclxuYCk7XHJcblxyXG4vLyBNaWdyYXRpb24gcG91ciBham91dGVyIGxhIGNvbG9ubmUgYXZhdGFyIHNpIGVsbGUgbidleGlzdGUgcGFzXHJcbnRyeSB7XHJcbiAgZGIuZXhlYyhgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBhdmF0YXIgVEVYVCBERUZBVUxUIE5VTExgKTtcclxufSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdkdXBsaWNhdGUgY29sdW1uIG5hbWUnKSkge1xyXG4gICAgLy8gSWdub3JlciBzaSBsYSBjb2xvbm5lIGV4aXN0ZSBkw6lqw6BcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGF2YXRhciBjb2x1bW4gdG8gdXNlcnM6JywgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW5zw6lyZXIgbCd1dGlsaXNhdGV1ciBpbml0aWFsXHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuY29uc3QgaW5zZXJ0SW5pdGlhbFVzZXIgPSBkYi5wcmVwYXJlKFxyXG4gICdJTlNFUlQgT1IgSUdOT1JFIElOVE8gdXNlcnMgKGlkLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHJvbGUsIGJhbm5lZCkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/KSdcclxuKTtcclxuY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBiY3J5cHQuaGFzaFN5bmMoJ3Bhc3N3b3JkMTIzJywgc2FsdFJvdW5kcyk7XHJcbmluc2VydEluaXRpYWxVc2VyLnJ1bignMScsICdUZXN0IFVzZXInLCAndGVzdEBleGFtcGxlLmNvbScsIGhhc2hlZFBhc3N3b3JkLCAnc3VwZXJhZG1pbicsIDApO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydExvZyA9IGRiLnByZXBhcmUoXHJcbiAgJ0lOU0VSVCBJTlRPIGxvZ3MgKHVzZXJfaWQsIGFjdGlvbiwgdGFyZ2V0X2lkLCB0YXJnZXRfbmFtZSwgdGltZXN0YW1wLCBkZXRhaWxzKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8pJ1xyXG4pO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0QWxsTG9ncyA9IGRiLnByZXBhcmUoXHJcbiAgJ1NFTEVDVCBsb2dzLiosIHVzZXJzLm5hbWUgQVMgdXNlcl9uYW1lIEZST00gbG9ncyBKT0lOIHVzZXJzIE9OIGxvZ3MudXNlcl9pZCA9IHVzZXJzLmlkIE9SREVSIEJZIHRpbWVzdGFtcCBERVNDJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7Il0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiYmNyeXB0IiwiZGIiLCJleGVjIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJzYWx0Um91bmRzIiwiaW5zZXJ0SW5pdGlhbFVzZXIiLCJwcmVwYXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoU3luYyIsInJ1biIsImluc2VydExvZyIsInNlbGVjdEFsbExvZ3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();