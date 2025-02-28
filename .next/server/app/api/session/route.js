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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// pages/api/auth/[...nextauth].ts\n\n\n\n\nconst findUserByEmail = _lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepare('SELECT * FROM users WHERE email = ?');\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'text'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                if (!email || !password) {\n                    console.error('Missing email or password');\n                    return null;\n                }\n                const user = findUserByEmail.get(email);\n                if (!user) {\n                    console.error('User not found:', email);\n                    return null;\n                }\n                console.log('User found:', {\n                    email,\n                    banned: user.banned,\n                    storedHash: user.password\n                });\n                console.log('Provided password:', password);\n                const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password); // Utiliser compare async\n                console.log('Password valid:', isValid);\n                if (!isValid) {\n                    console.error('Invalid password for:', email);\n                    return null;\n                }\n                if (user.banned === 1) {\n                    console.error('User banned:', email);\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: '/login'\n    },\n    secret: process.env.NEXTAUTH_SECRET || 'temporary-secret-for-testing',\n    debug: true,\n    session: {\n        strategy: 'jwt'\n    },\n    callbacks: {\n        async redirect ({ url, baseUrl }) {\n            console.log('Redirect callback called with:', {\n                url,\n                baseUrl\n            });\n            if (url.startsWith('/')) return `${baseUrl}${url}`;\n            return url;\n        },\n        async session ({ session, token }) {\n            session.user = {\n                id: token.sub || '',\n                name: token.name || '',\n                email: token.email || '',\n                role: token.role || 'user'\n            };\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.name = user.name;\n                token.email = user.email;\n            }\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZXhDLGdEQUFRQSxDQUFDTSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxwYWdlc1xcYXBpXFxhdXRoXFxbLi4ubmV4dGF1dGhdLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHNcclxuaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucywgU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xyXG5pbXBvcnQgeyBKV1QgfSBmcm9tICduZXh0LWF1dGgvand0JztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5pbXBvcnQgZGIgZnJvbSAnQC9saWIvZGInO1xyXG5cclxuY29uc3QgZmluZFVzZXJCeUVtYWlsID0gZGIucHJlcGFyZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBlbWFpbCA9ID8nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICd0ZXh0JyB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHM/LmVtYWlsIGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzPy5wYXNzd29yZCBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIGVtYWlsIG9yIHBhc3N3b3JkJyk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBmaW5kVXNlckJ5RW1haWwuZ2V0KGVtYWlsKSBhcyB7XHJcbiAgICAgICAgICBpZDogc3RyaW5nO1xyXG4gICAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICByb2xlOiAnc3VwZXJhZG1pbicgfCAnYWRtaW4nIHwgJ3VzZXInO1xyXG4gICAgICAgICAgYmFubmVkOiBudW1iZXI7XHJcbiAgICAgICAgfSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVc2VyIG5vdCBmb3VuZDonLCBlbWFpbCk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGZvdW5kOicsIHsgZW1haWwsIGJhbm5lZDogdXNlci5iYW5uZWQsIHN0b3JlZEhhc2g6IHVzZXIucGFzc3dvcmQgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVkIHBhc3N3b3JkOicsIHBhc3N3b3JkKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpOyAvLyBVdGlsaXNlciBjb21wYXJlIGFzeW5jXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkIHZhbGlkOicsIGlzVmFsaWQpO1xyXG5cclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQgZm9yOicsIGVtYWlsKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5iYW5uZWQgPT09IDEpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgYmFubmVkOicsIGVtYWlsKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCAndGVtcG9yYXJ5LXNlY3JldC1mb3ItdGVzdGluZycsXHJcbiAgZGVidWc6IHRydWUsXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnIGFzIGNvbnN0LFxyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdCBjYWxsYmFjayBjYWxsZWQgd2l0aDonLCB7IHVybCwgYmFzZVVybCB9KTtcclxuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiBgJHtiYXNlVXJsfSR7dXJsfWA7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH06IHsgc2Vzc2lvbjogU2Vzc2lvbjsgdG9rZW46IEpXVCB9KSB7XHJcbiAgICAgIHNlc3Npb24udXNlciA9IHtcclxuICAgICAgICBpZDogdG9rZW4uc3ViIHx8ICcnLFxyXG4gICAgICAgIG5hbWU6IHRva2VuLm5hbWUgfHwgJycsXHJcbiAgICAgICAgZW1haWw6IHRva2VuLmVtYWlsIHx8ICcnLFxyXG4gICAgICAgIHJvbGU6ICh0b2tlbi5yb2xlIGFzICdzdXBlcmFkbWluJyB8ICdhZG1pbicgfCAndXNlcicpIHx8ICd1c2VyJyxcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfTogeyB0b2tlbjogSldUOyB1c2VyPzogYW55IH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlIGFzICdzdXBlcmFkbWluJyB8ICdhZG1pbicgfCAndXNlcic7XHJcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZTtcclxuICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJkYiIsImZpbmRVc2VyQnlFbWFpbCIsInByZXBhcmUiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJ1c2VyIiwiZ2V0IiwibG9nIiwiYmFubmVkIiwic3RvcmVkSGFzaCIsImlzVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiZGVidWciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJzdWIiLCJqd3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./pages/api/auth/[...nextauth].ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   insertLog: () => (/* binding */ insertLog),\n/* harmony export */   selectAllLogs: () => (/* binding */ selectAllLogs)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n// src/lib/db.ts\n\n\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('database/users.db');\n// Table users\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT NOT NULL UNIQUE,\n    password TEXT NOT NULL,\n    role TEXT NOT NULL,\n    banned INTEGER DEFAULT 0\n  )\n`);\n// Table logs\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS logs (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    user_id TEXT NOT NULL,\n    action TEXT NOT NULL,\n    target_id TEXT,\n    target_name TEXT,\n    timestamp INTEGER NOT NULL,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n  )\n`);\n// Insérer l'utilisateur initial\nconst saltRounds = 10;\nconst insertInitialUser = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');\nconst hashedPassword = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync('password123', saltRounds);\ninsertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);\n// Préparer la requête pour insérer un log\nconst insertLog = db.prepare('INSERT INTO logs (user_id, action, target_id, target_name, timestamp) VALUES (?, ?, ?, ?, ?)');\nconst selectAllLogs = db.prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFDc0I7QUFDVjtBQUU1QixNQUFNRSxLQUFLLElBQUlGLHVEQUFRQSxDQUFDO0FBRXhCLGNBQWM7QUFDZEUsR0FBR0MsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7OztBQVNULENBQUM7QUFFRCxhQUFhO0FBQ2JELEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FBVVQsQ0FBQztBQUVELGdDQUFnQztBQUNoQyxNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLG9CQUFvQkgsR0FBR0ksT0FBTyxDQUFDO0FBQ3JDLE1BQU1DLGlCQUFpQk4sc0RBQWUsQ0FBQyxlQUFlRztBQUN0REMsa0JBQWtCSSxHQUFHLENBQUMsS0FBSyxhQUFhLG9CQUFvQkYsZ0JBQWdCLGNBQWM7QUFFMUYsMENBQTBDO0FBQ25DLE1BQU1HLFlBQVlSLEdBQUdJLE9BQU8sQ0FBQyxnR0FBZ0c7QUFDN0gsTUFBTUssZ0JBQWdCVCxHQUFHSSxPQUFPLENBQUMsa0hBQWtIO0FBRTFKLGlFQUFlSixFQUFFQSxFQUFDIiwic291cmNlcyI6WyJIOlxcd3d3XFxHb21ldFVJXFxnb21ldHVpXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9kYi50c1xyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgnZGF0YWJhc2UvdXNlcnMuZGInKTtcclxuXHJcbi8vIFRhYmxlIHVzZXJzXHJcbmRiLmV4ZWMoYFxyXG4gIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHVzZXJzIChcclxuICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXHJcbiAgICBuYW1lIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBlbWFpbCBURVhUIE5PVCBOVUxMIFVOSVFVRSxcclxuICAgIHBhc3N3b3JkIFRFWFQgTk9UIE5VTEwsXHJcbiAgICByb2xlIFRFWFQgTk9UIE5VTEwsXHJcbiAgICBiYW5uZWQgSU5URUdFUiBERUZBVUxUIDBcclxuICApXHJcbmApO1xyXG5cclxuLy8gVGFibGUgbG9nc1xyXG5kYi5leGVjKGBcclxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBsb2dzIChcclxuICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgIHVzZXJfaWQgVEVYVCBOT1QgTlVMTCxcclxuICAgIGFjdGlvbiBURVhUIE5PVCBOVUxMLFxyXG4gICAgdGFyZ2V0X2lkIFRFWFQsXHJcbiAgICB0YXJnZXRfbmFtZSBURVhULFxyXG4gICAgdGltZXN0YW1wIElOVEVHRVIgTk9UIE5VTEwsXHJcbiAgICBGT1JFSUdOIEtFWSAodXNlcl9pZCkgUkVGRVJFTkNFUyB1c2VycyhpZClcclxuICApXHJcbmApO1xyXG5cclxuLy8gSW5zw6lyZXIgbCd1dGlsaXNhdGV1ciBpbml0aWFsXHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuY29uc3QgaW5zZXJ0SW5pdGlhbFVzZXIgPSBkYi5wcmVwYXJlKCdJTlNFUlQgT1IgSUdOT1JFIElOVE8gdXNlcnMgKGlkLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHJvbGUsIGJhbm5lZCkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/KScpO1xyXG5jb25zdCBoYXNoZWRQYXNzd29yZCA9IGJjcnlwdC5oYXNoU3luYygncGFzc3dvcmQxMjMnLCBzYWx0Um91bmRzKTtcclxuaW5zZXJ0SW5pdGlhbFVzZXIucnVuKCcxJywgJ1Rlc3QgVXNlcicsICd0ZXN0QGV4YW1wbGUuY29tJywgaGFzaGVkUGFzc3dvcmQsICdzdXBlcmFkbWluJywgMCk7XHJcblxyXG4vLyBQcsOpcGFyZXIgbGEgcmVxdcOqdGUgcG91ciBpbnPDqXJlciB1biBsb2dcclxuZXhwb3J0IGNvbnN0IGluc2VydExvZyA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIGxvZ3MgKHVzZXJfaWQsIGFjdGlvbiwgdGFyZ2V0X2lkLCB0YXJnZXRfbmFtZSwgdGltZXN0YW1wKSBWQUxVRVMgKD8sID8sID8sID8sID8pJyk7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxMb2dzID0gZGIucHJlcGFyZSgnU0VMRUNUIGxvZ3MuKiwgdXNlcnMubmFtZSBBUyB1c2VyX25hbWUgRlJPTSBsb2dzIEpPSU4gdXNlcnMgT04gbG9ncy51c2VyX2lkID0gdXNlcnMuaWQgT1JERVIgQlkgdGltZXN0YW1wIERFU0MnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiOyJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsImJjcnlwdCIsImRiIiwiZXhlYyIsInNhbHRSb3VuZHMiLCJpbnNlcnRJbml0aWFsVXNlciIsInByZXBhcmUiLCJoYXNoZWRQYXNzd29yZCIsImhhc2hTeW5jIiwicnVuIiwiaW5zZXJ0TG9nIiwic2VsZWN0QWxsTG9ncyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

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