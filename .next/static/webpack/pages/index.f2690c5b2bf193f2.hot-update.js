"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PopularEvent.js":
/*!************************************!*\
  !*** ./components/PopularEvent.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\n\nfunction PopularEvent(param) {\n    let { event  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            alignItems: \"center\",\n            maxW: \"250px\",\n            borderWidth: \"1px\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                align: \"baseline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        borderRadius: \"md\",\n                        width: \"40px\",\n                        src: event.image\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next JS\\\\event-app\\\\components\\\\PopularEvent.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        ml: 1,\n                        fontSize: \"sm\",\n                        fontWeight: \"bold\",\n                        children: event.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next JS\\\\event-app\\\\components\\\\PopularEvent.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next JS\\\\event-app\\\\components\\\\PopularEvent.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\next JS\\\\event-app\\\\components\\\\PopularEvent.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\next JS\\\\event-app\\\\components\\\\PopularEvent.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = PopularEvent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularEvent);\nvar _c;\n$RefreshReg$(_c, \"PopularEvent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVsYXJFdmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBeUQ7QUFFekQsU0FBU0ksYUFBYSxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDtJQUNwQixxQkFDRSw4REFBQ0M7a0JBQ0csNEVBQUNOLGlEQUFHQTtZQUFFTyxZQUFXO1lBQVdDLE1BQUs7WUFBU0MsYUFBWTtzQkFDdEQsNEVBQUNSLGtEQUFJQTtnQkFBQ1MsT0FBTTs7a0NBQ1osOERBQUNSLG1EQUFLQTt3QkFBQ1MsY0FBYTt3QkFBS0MsT0FBTTt3QkFBT0MsS0FBS1IsTUFBTVMsS0FBSzs7Ozs7O2tDQUNwRCw4REFBQ1gsa0RBQUlBO3dCQUNIWSxJQUFJO3dCQUNKQyxVQUFTO3dCQUNUQyxZQUFXO2tDQUVWWixNQUFNYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0tBbEJTZDtBQW9CVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BvcHVsYXJFdmVudC5qcz9mZDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5mdW5jdGlvbiBQb3B1bGFyRXZlbnQoeyBldmVudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICAgIDxCb3ggIGFsaWduSXRlbXM9J2NlbnRlcicgICBtYXhXPVwiMjUwcHhcIiAgYm9yZGVyV2lkdGg9XCIxcHhcIj5cclxuICAgICAgICA8RmxleCBhbGlnbj1cImJhc2VsaW5lXCIgPlxyXG4gICAgICAgIDxJbWFnZSBib3JkZXJSYWRpdXM9XCJtZFwiIHdpZHRoPSc0MHB4JyBzcmM9e2V2ZW50LmltYWdlfSAvPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgbWw9ezF9XHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtldmVudC50aXRsZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyRXZlbnQiXSwibmFtZXMiOlsiQm94IiwiRmxleCIsIkltYWdlIiwiVGV4dCIsIlBvcHVsYXJFdmVudCIsImV2ZW50IiwiZGl2IiwiYWxpZ25JdGVtcyIsIm1heFciLCJib3JkZXJXaWR0aCIsImFsaWduIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJzcmMiLCJpbWFnZSIsIm1sIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PopularEvent.js\n"));

/***/ })

});