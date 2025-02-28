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
exports.id = "app/api/session/route";
exports.ids = ["app/api/session/route"];
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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsession%2Froute&page=%2Fapi%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsession%2Froute&page=%2Fapi%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var H_www_GometUI_gometui_src_app_api_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/session/route.ts */ \"(rsc)/./src/app/api/session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/session/route\",\n        pathname: \"/api/session\",\n        filename: \"route\",\n        bundlePath: \"app/api/session/route\"\n    },\n    resolvedPagePath: \"H:\\\\www\\\\GometUI\\\\gometui\\\\src\\\\app\\\\api\\\\session\\\\route.ts\",\n    nextConfigOutput,\n    userland: H_www_GometUI_gometui_src_app_api_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZXNzaW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZXNzaW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj1IJTNBJTVDd3d3JTVDR29tZXRVSSU1Q2dvbWV0dWklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUglM0ElNUN3d3clNUNHb21ldFVJJTVDZ29tZXR1aSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSDpcXFxcd3d3XFxcXEdvbWV0VUlcXFxcZ29tZXR1aVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzZXNzaW9uXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZXNzaW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2Vzc2lvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2Vzc2lvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkg6XFxcXHd3d1xcXFxHb21ldFVJXFxcXGdvbWV0dWlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2Vzc2lvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsession%2Froute&page=%2Fapi%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// pages/api/auth/[...nextauth].ts\n\n\n\n\nconst findUserByEmail = _lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepare('SELECT * FROM users WHERE email = ?');\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'text'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                if (!email || !password) return null;\n                const user = findUserByEmail.get(email);\n                if (!user || !bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password) || user.banned === 1) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: '/login'\n    },\n    secret: process.env.NEXTAUTH_SECRET || 'temporary-secret-for-testing',\n    debug: false,\n    session: {\n        strategy: 'jwt'\n    },\n    callbacks: {\n        async redirect ({ url, baseUrl }) {\n            return baseUrl;\n        },\n        async session ({ session, token }) {\n            session.user = {\n                id: token.sub || '',\n                name: token.name || '',\n                email: token.email || '',\n                role: token.role || 'user'\n            };\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.name = user.name;\n                token.email = user.email;\n            }\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0NBQWtDO0FBQzZCO0FBQ0c7QUFFdEM7QUFDRjtBQUUxQixNQUFNSSxrQkFBa0JELCtDQUFFQSxDQUFDRSxPQUFPLENBQUM7QUFFNUIsTUFBTUMsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsTUFBTUMsUUFBUUQsYUFBYUM7Z0JBQzNCLE1BQU1HLFdBQVdKLGFBQWFJO2dCQUU5QixJQUFJLENBQUNILFNBQVMsQ0FBQ0csVUFBVSxPQUFPO2dCQUVoQyxNQUFNRSxPQUFPWCxnQkFBZ0JZLEdBQUcsQ0FBQ047Z0JBU2pDLElBQUksQ0FBQ0ssUUFBUSxDQUFDYix5REFBa0IsQ0FBQ1csVUFBVUUsS0FBS0YsUUFBUSxLQUFLRSxLQUFLRyxNQUFNLEtBQUssR0FBRztvQkFDOUUsT0FBTztnQkFDVDtnQkFFQSxPQUFPO29CQUNMQyxJQUFJSixLQUFLSSxFQUFFO29CQUNYWCxNQUFNTyxLQUFLUCxJQUFJO29CQUNmRSxPQUFPSyxLQUFLTCxLQUFLO29CQUNqQlUsTUFBTUwsS0FBS0ssSUFBSTtnQkFDakI7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlLElBQUk7SUFDdkNDLE9BQU87SUFDUEMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNULE1BQU1DLFVBQVMsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQW9DO1lBQy9ELE9BQU9BO1FBQ1Q7UUFDQSxNQUFNTCxTQUFRLEVBQUVBLE9BQU8sRUFBRU0sS0FBSyxFQUFvQztZQUNoRU4sUUFBUWIsSUFBSSxHQUFHO2dCQUNiSSxJQUFJZSxNQUFNQyxHQUFHLElBQUk7Z0JBQ2pCM0IsTUFBTTBCLE1BQU0xQixJQUFJLElBQUk7Z0JBQ3BCRSxPQUFPd0IsTUFBTXhCLEtBQUssSUFBSTtnQkFDdEJVLE1BQU0sTUFBT0EsSUFBSSxJQUF3QztZQUMzRDtZQUNBLE9BQU9RO1FBQ1Q7UUFDQSxNQUFNUSxLQUFJLEVBQUVGLEtBQUssRUFBRW5CLElBQUksRUFBOEI7WUFDbkQsSUFBSUEsTUFBTTtnQkFDUm1CLE1BQU1kLElBQUksR0FBR0wsS0FBS0ssSUFBSTtnQkFDdEJjLE1BQU0xQixJQUFJLEdBQUdPLEtBQUtQLElBQUk7Z0JBQ3RCMEIsTUFBTXhCLEtBQUssR0FBR0ssS0FBS0wsS0FBSztZQUMxQjtZQUNBLE9BQU93QjtRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWVsQyxnREFBUUEsQ0FBQ00sWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiSDpcXHd3d1xcR29tZXRVSVxcZ29tZXR1aVxccGFnZXNcXGFwaVxcYXV0aFxcWy4uLm5leHRhdXRoXS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzXHJcbmltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMsIFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IHsgSldUIH0gZnJvbSAnbmV4dC1hdXRoL2p3dCc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IGRiIGZyb20gJ0AvbGliL2RiJztcclxuXHJcbmNvbnN0IGZpbmRVc2VyQnlFbWFpbCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAndGV4dCcgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzPy5lbWFpbCBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQgYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBmaW5kVXNlckJ5RW1haWwuZ2V0KGVtYWlsKSBhcyB7XHJcbiAgICAgICAgICBpZDogc3RyaW5nO1xyXG4gICAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICByb2xlOiAnc3VwZXJhZG1pbicgfCAnYWRtaW4nIHwgJ3VzZXInO1xyXG4gICAgICAgICAgYmFubmVkOiBudW1iZXI7XHJcbiAgICAgICAgfSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpIHx8IHVzZXIuYmFubmVkID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvbG9naW4nLFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgfHwgJ3RlbXBvcmFyeS1zZWNyZXQtZm9yLXRlc3RpbmcnLFxyXG4gIGRlYnVnOiBmYWxzZSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCcgYXMgY29uc3QsXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHJlZGlyZWN0KHsgdXJsLCBiYXNlVXJsIH06IHsgdXJsOiBzdHJpbmc7IGJhc2VVcmw6IHN0cmluZyB9KSB7XHJcbiAgICAgIHJldHVybiBiYXNlVXJsO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiB7IHNlc3Npb246IFNlc3Npb247IHRva2VuOiBKV1QgfSkge1xyXG4gICAgICBzZXNzaW9uLnVzZXIgPSB7XHJcbiAgICAgICAgaWQ6IHRva2VuLnN1YiB8fCAnJyxcclxuICAgICAgICBuYW1lOiB0b2tlbi5uYW1lIHx8ICcnLFxyXG4gICAgICAgIGVtYWlsOiB0b2tlbi5lbWFpbCB8fCAnJyxcclxuICAgICAgICByb2xlOiAodG9rZW4ucm9sZSBhcyAnc3VwZXJhZG1pbicgfCAnYWRtaW4nIHwgJ3VzZXInKSB8fCAndXNlcicsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH06IHsgdG9rZW46IEpXVDsgdXNlcj86IGFueSB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZSBhcyAnc3VwZXJhZG1pbicgfCAnYWRtaW4nIHwgJ3VzZXInO1xyXG4gICAgICAgIHRva2VuLm5hbWUgPSB1c2VyLm5hbWU7XHJcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiZGIiLCJmaW5kVXNlckJ5RW1haWwiLCJwcmVwYXJlIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImdldCIsImNvbXBhcmVTeW5jIiwiYmFubmVkIiwiaWQiLCJyb2xlIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiZGVidWciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJ0b2tlbiIsInN1YiIsImp3dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/session/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/session/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pages/api/auth/[...nextauth] */ \"(rsc)/./pages/api/auth/[...nextauth].ts\");\n\n\n\nasync function GET(req) {\n    try {\n        const sessionToken = req.cookies.get('next-auth.session-token');\n        if (!sessionToken || sessionToken.value === 'undefined') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No session'\n            }, {\n                status: 401\n            });\n        }\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        const validSession = session && 'user' in session ? session : null;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(validSession || {\n            error: 'No session'\n        }, {\n            status: validSession ? 200 : 401\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZXNzaW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDTjtBQUNxQjtBQUVoRSxlQUFlRyxJQUFJQyxHQUFnQjtJQUN4QyxJQUFJO1FBQ0YsTUFBTUMsZUFBZUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDckMsSUFBSSxDQUFDRixnQkFBZ0JBLGFBQWFHLEtBQUssS0FBSyxhQUFhO1lBQ3ZELE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBYSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbEU7UUFFQSxNQUFNQyxVQUFVLE1BQU1YLGdFQUFnQkEsQ0FBQ0Msa0VBQVdBO1FBQ2xELE1BQU1XLGVBQWVELFdBQVcsVUFBVUEsVUFBVUEsVUFBVTtRQUM5RCxPQUFPWixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDSSxnQkFBZ0I7WUFBRUgsT0FBTztRQUFhLEdBQUc7WUFBRUMsUUFBUUUsZUFBZSxNQUFNO1FBQUk7SUFDdkcsRUFBRSxPQUFPSCxPQUFPO1FBQ2QsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIkg6XFx3d3dcXEdvbWV0VUlcXGdvbWV0dWlcXHNyY1xcYXBwXFxhcGlcXHNlc3Npb25cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvbmV4dCc7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvblRva2VuID0gcmVxLmNvb2tpZXMuZ2V0KCduZXh0LWF1dGguc2Vzc2lvbi10b2tlbicpO1xyXG4gICAgaWYgKCFzZXNzaW9uVG9rZW4gfHwgc2Vzc2lvblRva2VuLnZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIHNlc3Npb24nIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgY29uc3QgdmFsaWRTZXNzaW9uID0gc2Vzc2lvbiAmJiAndXNlcicgaW4gc2Vzc2lvbiA/IHNlc3Npb24gOiBudWxsO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHZhbGlkU2Vzc2lvbiB8fCB7IGVycm9yOiAnTm8gc2Vzc2lvbicgfSwgeyBzdGF0dXM6IHZhbGlkU2Vzc2lvbiA/IDIwMCA6IDQwMSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsInJlcSIsInNlc3Npb25Ub2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlc3Npb24iLCJ2YWxpZFNlc3Npb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/session/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsession%2Froute&page=%2Fapi%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession%2Froute.ts&appDir=H%3A%5Cwww%5CGometUI%5Cgometui%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cwww%5CGometUI%5Cgometui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();