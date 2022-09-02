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

/***/ "./components/Features.js":
/*!********************************!*\
  !*** ./components/Features.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_debts_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/debts.png */ \"./assets/debts.png\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Features = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentFeature = ref[0], setCurrentFeature = ref[1];\n    var featuresDesc = [\n        {\n            id: 1,\n            name: \"Track your spending by category\",\n            desc: \"Track what you end up spending the most on.\"\n        },\n        {\n            id: 2,\n            name: \"Payment reminders\",\n            desc: \"It's easy to forget your payment dates without Poshly. We make sure to remind you of a payment due soon.\"\n        },\n        {\n            id: 3,\n            name: \"Penalty charges calculator\",\n            desc: \"It's always best to pay your bill in full, but if you cannot, we'll estimate the charges for you.\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full py-24 bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 mx-auto max-w-7xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"max-w-md text-3xl text-red-500\",\n                            children: \"It's time to become financially successful.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"max-w-md mt-4 text-lg text-neutral-400\",\n                            children: \"Poshly was built for those for who use multiple credit cards and are trying to get control of their finances.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-full bg-red-500 gap-x-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center flex-1 w-full h-full bg-gray-400\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[50%] h-[50%]\",\n                                children: \"as'dfkl'asdlfk\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid flex-1 grid-cols-1 grid-rows-3 gap-6\",\n                            children: featuresDesc.map(function(feature) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-medium w-full h-full p-6 hover:bg-neutral-900/90 rounded-xl cursor-pointer \".concat(feature.id === currentFeature && \"bg-neutral-900/90 cursor-default\"),\n                                    onClick: function() {\n                                        return setCurrentFeature(feature.id);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl text-red-500\",\n                                            children: feature.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg text-neutral-400\",\n                                            children: feature.desc\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, feature.id, true, {\n                                    fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/Features.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Features, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUFnQztBQUNGO0FBQ1k7QUFFMUMsSUFBTUcsUUFBUSxHQUFHLFdBQU07O0lBRXJCLElBQTRDSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQWhESSxjQUFjLEdBQXVCSixHQUFXLEdBQWxDLEVBQUVLLGlCQUFpQixHQUFJTCxHQUFXLEdBQWY7SUFFeEMsSUFBTU0sWUFBWSxHQUFHO1FBQ25CO1lBQ0VDLEVBQUUsRUFBQyxDQUFDO1lBQ0pDLElBQUksRUFBQyxpQ0FBaUM7WUFDdENDLElBQUksRUFBQyw2Q0FBNkM7U0FDbkQ7UUFDRDtZQUNFRixFQUFFLEVBQUMsQ0FBQztZQUNKQyxJQUFJLEVBQUMsbUJBQW1CO1lBQ3hCQyxJQUFJLEVBQUMsMEdBQTJHO1NBQ2pIO1FBQ0Q7WUFDRUYsRUFBRSxFQUFDLENBQUM7WUFDSkMsSUFBSSxFQUFDLDRCQUE0QjtZQUNqQ0MsSUFBSSxFQUFDLG1HQUFxRztTQUMzRztLQUNGO0lBRUQscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFHLHVCQUF1QjtrQkFDMUMsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFHLHdCQUF3Qjs7OEJBQ3ZDLDhEQUFDQyxLQUFHOztzQ0FDRiw4REFBQ0MsSUFBRTs0QkFBQ0YsU0FBUyxFQUFHLGdDQUFnQztzQ0FBQyw2Q0FBMkM7Ozs7O2lDQUFLO3NDQUNqRyw4REFBQ0csR0FBQzs0QkFBQ0gsU0FBUyxFQUFHLHdDQUF3QztzQ0FBQywrR0FFeEQ7Ozs7O2lDQUFJOzs7Ozs7eUJBQ0E7OEJBR04sOERBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBRyxnQ0FBZ0M7O3NDQUMvQyw4REFBQ0MsS0FBRzs0QkFBQ0QsU0FBUyxFQUFHLG1FQUFtRTtzQ0FDbEYsNEVBQUNDLEtBQUc7Z0NBQUNELFNBQVMsRUFBRyxpQkFBaUI7MENBQUMsZ0JBRW5DOzs7OztxQ0FBTTs7Ozs7aUNBRUY7c0NBRU4sOERBQUNDLEtBQUc7NEJBQUNELFNBQVMsRUFBRywyQ0FBMkM7c0NBQ3pETCxZQUFZLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxPQUFPO3FEQUN4Qiw4REFBQ0osS0FBRztvQ0FBQ0QsU0FBUyxFQUFJLGtGQUFpRixDQUF3RSxPQUF0RUssT0FBTyxDQUFDVCxFQUFFLEtBQUtILGNBQWMsSUFBSyxrQ0FBa0MsQ0FBRztvQ0FFM0thLE9BQU8sRUFBSTsrQ0FBSVosaUJBQWlCLENBQUNXLE9BQU8sQ0FBQ1QsRUFBRSxDQUFDO3FDQUFBOztzREFFM0MsOERBQUNXLElBQUU7NENBQUNQLFNBQVMsRUFBRyxzQkFBc0I7c0RBQUVLLE9BQU8sQ0FBQ1IsSUFBSTs7Ozs7aURBQU07c0RBQzFELDhEQUFDTSxHQUFDOzRDQUFDSCxTQUFTLEVBQUcsMEJBQTBCO3NEQUFFSyxPQUFPLENBQUNQLElBQUk7Ozs7O2lEQUFLOzttQ0FKdERPLE9BQU8sQ0FBQ1QsRUFBRTs7Ozt5Q0FLWjs2QkFDUCxDQUFDOzs7OztpQ0FDRTs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0UsQ0FDWDtDQUNGO0dBeERLSixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUEwRGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlcy5qcz83NzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGRlYnRzSW1nIGZyb20gJy4uL2Fzc2V0cy9kZWJ0cy5wbmcnXG5cbmNvbnN0IEZlYXR1cmVzID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtjdXJyZW50RmVhdHVyZSwgc2V0Q3VycmVudEZlYXR1cmVdID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCBmZWF0dXJlc0Rlc2MgPSBbXG4gICAge1xuICAgICAgaWQ6MSxcbiAgICAgIG5hbWU6J1RyYWNrIHlvdXIgc3BlbmRpbmcgYnkgY2F0ZWdvcnknLFxuICAgICAgZGVzYzonVHJhY2sgd2hhdCB5b3UgZW5kIHVwIHNwZW5kaW5nIHRoZSBtb3N0IG9uLidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOjIsXG4gICAgICBuYW1lOidQYXltZW50IHJlbWluZGVycycsXG4gICAgICBkZXNjOidJdFxcJ3MgZWFzeSB0byBmb3JnZXQgeW91ciBwYXltZW50IGRhdGVzIHdpdGhvdXQgUG9zaGx5LiBXZSBtYWtlIHN1cmUgdG8gcmVtaW5kIHlvdSBvZiBhIHBheW1lbnQgZHVlIHNvb24uJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6MyxcbiAgICAgIG5hbWU6J1BlbmFsdHkgY2hhcmdlcyBjYWxjdWxhdG9yJyxcbiAgICAgIGRlc2M6J0l0XFwncyBhbHdheXMgYmVzdCB0byBwYXkgeW91ciBiaWxsIGluIGZ1bGwsIGJ1dCBpZiB5b3UgY2Fubm90LCB3ZVxcJ2xsIGVzdGltYXRlIHRoZSBjaGFyZ2VzIGZvciB5b3UuJ1xuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZSA9IFwidy1mdWxsIHB5LTI0IGJnLWJsYWNrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicHgtNCBteC1hdXRvIG1heC13LTd4bFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSBcIm1heC13LW1kIHRleHQtM3hsIHRleHQtcmVkLTUwMFwiPkl0J3MgdGltZSB0byBiZWNvbWUgZmluYW5jaWFsbHkgc3VjY2Vzc2Z1bC48L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibWF4LXctbWQgbXQtNCB0ZXh0LWxnIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICBQb3NobHkgd2FzIGJ1aWx0IGZvciB0aG9zZSBmb3Igd2hvIHVzZSBtdWx0aXBsZSBjcmVkaXQgY2FyZHMgYW5kIGFyZSB0cnlpbmcgdG8gZ2V0IGNvbnRyb2wgb2YgdGhlaXIgZmluYW5jZXMuIFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZFQVRVUkVTIFNFQ1RJT04gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGgtZnVsbCBiZy1yZWQtNTAwIGdhcC14LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC0xIHctZnVsbCBoLWZ1bGwgYmctZ3JheS00MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ3LVs1MCVdIGgtWzUwJV1cIj4gXG4gICAgICAgICAgICAgIGFzJ2Rma2wnYXNkbGZrXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjID0ge2RlYnRzSW1nfS8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdyaWQgZmxleC0xIGdyaWQtY29scy0xIGdyaWQtcm93cy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7ZmVhdHVyZXNEZXNjLm1hcCgoZmVhdHVyZSk9PihcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7YGZvbnQtbWVkaXVtIHctZnVsbCBoLWZ1bGwgcC02IGhvdmVyOmJnLW5ldXRyYWwtOTAwLzkwIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXIgJHtmZWF0dXJlLmlkID09PSBjdXJyZW50RmVhdHVyZSAmJiAoJ2JnLW5ldXRyYWwtOTAwLzkwIGN1cnNvci1kZWZhdWx0Jyl9YH1cbiAgICAgICAgICAgICAgIGtleSA9IHtmZWF0dXJlLmlkfVxuICAgICAgICAgICAgICAgb25DbGljayA9IHsoKT0+c2V0Q3VycmVudEZlYXR1cmUoZmVhdHVyZS5pZCl9XG4gICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZSA9IFwidGV4dC14bCB0ZXh0LXJlZC01MDBcIj57ZmVhdHVyZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJ0ZXh0LWxnIHRleHQtbmV1dHJhbC00MDBcIj57ZmVhdHVyZS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsImRlYnRzSW1nIiwiRmVhdHVyZXMiLCJjdXJyZW50RmVhdHVyZSIsInNldEN1cnJlbnRGZWF0dXJlIiwiZmVhdHVyZXNEZXNjIiwiaWQiLCJuYW1lIiwiZGVzYyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJtYXAiLCJmZWF0dXJlIiwib25DbGljayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Features.js\n"));

/***/ })

});