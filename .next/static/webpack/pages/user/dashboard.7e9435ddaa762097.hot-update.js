"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/TotalSpendBox.js":
/*!*************************************!*\
  !*** ./components/TotalSpendBox.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar TotalSpendBox = function(param) {\n    var display = param.display, timeframe = param.timeframe, userLocale = param.userLocale;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalSpend = ref1[0], setTotalSpend = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTotalSpend(0);\n        var getSpending = function() {\n            if (display != null) {\n                switch(timeframe){\n                    case \"6 months\":\n                        var ref;\n                        var getSpending = display === null || display === void 0 ? void 0 : (ref = display.transactions) === null || ref === void 0 ? void 0 : ref.filter(function(transaction) {\n                            return Math.sign(transaction.amount) === 1;\n                        });\n                        var total = 0;\n                        getSpending === null || getSpending === void 0 ? void 0 : getSpending.forEach(function(payment) {\n                            total += payment.amount * -1;\n                        });\n                        setTotalSpend(total.toFixed(2));\n                        break;\n                    case \"12 months\":\n                        var ref1;\n                        var getSpending12Month = display === null || display === void 0 ? void 0 : (ref1 = display.twelveMonthTransactions) === null || ref1 === void 0 ? void 0 : ref1.filter(function(transaction) {\n                            return Math.sign(transaction.amount) === 1;\n                        });\n                        var twelveMonthTotal = 0;\n                        getSpending12Month === null || getSpending12Month === void 0 ? void 0 : getSpending12Month.forEach(function(payment) {\n                            twelveMonthTotal += payment.amount * -1;\n                        });\n                        setTotalSpend(twelveMonthTotal.toFixed(2));\n                        break;\n                    case \"YTD\":\n                        var ref2;\n                        var getSpendingYTD = display === null || display === void 0 ? void 0 : (ref2 = display.ytdTransactions) === null || ref2 === void 0 ? void 0 : ref2.filter(function(transaction) {\n                            return Math.sign(transaction.amount) === 1;\n                        });\n                        var ytdTransactionsTotal = 0;\n                        getSpendingYTD === null || getSpendingYTD === void 0 ? void 0 : getSpendingYTD.forEach(function(payment) {\n                            ytdTransactionsTotal += payment.amount * -1;\n                        });\n                        setTotalSpend(ytdTransactionsTotal.toFixed(2));\n                        break;\n                    case \"24 months\":\n                        var ref3;\n                        var getSpending24Month = display === null || display === void 0 ? void 0 : (ref3 = display.twentyFourMonthTransactions) === null || ref3 === void 0 ? void 0 : ref3.filter(function(transaction) {\n                            return Math.sign(transaction.amount) === 1;\n                        });\n                        var twentyFourMonthTotal = 0;\n                        getSpending24Month === null || getSpending24Month === void 0 ? void 0 : getSpending24Month.forEach(function(payment) {\n                            twentyFourMonthTotal += payment.amount * -1;\n                        });\n                        setTotalSpend(twentyFourMonthTotal.toFixed(2));\n                        break;\n                }\n            }\n        };\n        getSpending();\n        console.log(\"infinitelooptest\");\n        return function() {};\n    }, [\n        timeframe,\n        display\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n    col-span-2 p-6 bg-sky-600 rounded-xl xl:col-span-1\\n    \".concat(display.subtype === \"credit card\" && \"col-span-4\", \"\\n    \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-neutral-300 text-\",\n                children: \"Total Spent\"\n            }, void 0, false, {\n                fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/TotalSpendBox.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl font-medium text-white\",\n                children: parseFloat(totalSpend).toLocaleString(userLocale, {\n                    style: \"currency\",\n                    currency: ((ref = display.balances) === null || ref === void 0 ? void 0 : ref.iso_currency_code) || \"USD\"\n                })\n            }, void 0, false, {\n                fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/TotalSpendBox.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-sm text-neutral-300/75\",\n                children: [\n                    \"Within \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: timeframe\n                    }, void 0, false, {\n                        fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/TotalSpendBox.js\",\n                        lineNumber: 61,\n                        columnNumber: 64\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/TotalSpendBox.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eduardos/Desktop/live projects/plaidtest/client/components/TotalSpendBox.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(TotalSpendBox, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = TotalSpendBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TotalSpendBox);\nvar _c;\n$RefreshReg$(_c, \"TotalSpendBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7UUFBQ3pCLFNBQVM7UUFBRUQsT0FBTztLQUFDLENBQUM7SUFDdkIscUJBQ0UsOERBQUMyQixLQUFHO1FBQUNDLFNBQVMsRUFBSSxnRUFFbEIsQ0FBc0QsTUFDdEQsQ0FERTVCLE9BQU8sQ0FBQzZCLE9BQU8sS0FBSyxhQUFhLElBQUssWUFBWSxFQUFFLFFBQ3RELENBQUM7OzBCQUNDLDhEQUFDQyxNQUFJO2dCQUFDRixTQUFTLEVBQUcsd0JBQXdCOzBCQUFDLGFBQVc7Ozs7O3FCQUFPOzBCQUM3RCw4REFBQ0csR0FBQztnQkFBQ0gsU0FBUyxFQUFHLGlDQUFpQzswQkFBRUksVUFBVSxDQUFDN0IsVUFBVSxDQUFDLENBQUM4QixjQUFjLENBQUMvQixVQUFVLEVBQUM7b0JBQUNnQyxLQUFLLEVBQUMsVUFBVTtvQkFBQ0MsUUFBUSxFQUFDbkMsQ0FBQUEsQ0FBQUEsR0FBZ0IsR0FBaEJBLE9BQU8sQ0FBQ29DLFFBQVEsY0FBaEJwQyxHQUFnQixXQUFtQixHQUFuQ0EsS0FBQUEsQ0FBbUMsR0FBbkNBLEdBQWdCLENBQUVxQyxpQkFBaUIsS0FBSSxLQUFLO2lCQUFDLENBQUM7Ozs7O3FCQUFLOzBCQUNqTCw4REFBQ04sR0FBQztnQkFBQ0gsU0FBUyxFQUFHLGtDQUFrQzs7b0JBQUMsU0FBTztrQ0FBQSw4REFBQ1UsR0FBQztrQ0FBRXJDLFNBQVM7Ozs7OzZCQUFLOzs7Ozs7cUJBQUk7Ozs7OzthQUMzRSxDQUNQO0NBQ0Y7R0E1REtGLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQThEbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3RhbFNwZW5kQm94LmpzP2MxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuY29uc3QgVG90YWxTcGVuZEJveCA9ICh7ZGlzcGxheSwgdGltZWZyYW1lLCB1c2VyTG9jYWxlfSkgPT4ge1xuXG4gIGNvbnN0IFt0b3RhbFNwZW5kLCBzZXRUb3RhbFNwZW5kXSA9IHVzZVN0YXRlKDApXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc2V0VG90YWxTcGVuZCgwKVxuICAgIGNvbnN0IGdldFNwZW5kaW5nID0gKCkgPT57XG4gICAgICBpZihkaXNwbGF5IT0gbnVsbCl7XG4gICAgICAgIHN3aXRjaCh0aW1lZnJhbWUpe1xuICAgICAgICAgIGNhc2UgJzYgbW9udGhzJzpcbiAgICAgICAgICAgIGNvbnN0IGdldFNwZW5kaW5nID0gZGlzcGxheT8udHJhbnNhY3Rpb25zPy5maWx0ZXIodHJhbnNhY3Rpb24gPT4gTWF0aC5zaWduKHRyYW5zYWN0aW9uLmFtb3VudCkgPT09IDEgKVxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICAgIGdldFNwZW5kaW5nPy5mb3JFYWNoKHBheW1lbnQgPT57XG4gICAgICAgICAgICAgIHRvdGFsICs9IHBheW1lbnQuYW1vdW50ICogLTFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRUb3RhbFNwZW5kKHRvdGFsLnRvRml4ZWQoMikpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcxMiBtb250aHMnOlxuICAgICAgICAgICAgY29uc3QgZ2V0U3BlbmRpbmcxMk1vbnRoID0gZGlzcGxheT8udHdlbHZlTW9udGhUcmFuc2FjdGlvbnM/LmZpbHRlcih0cmFuc2FjdGlvbiA9PiBNYXRoLnNpZ24odHJhbnNhY3Rpb24uYW1vdW50KSA9PT0gMSApXG4gICAgICAgICAgICBsZXQgdHdlbHZlTW9udGhUb3RhbCA9IDA7XG4gICAgICAgICAgICBnZXRTcGVuZGluZzEyTW9udGg/LmZvckVhY2gocGF5bWVudCA9PntcbiAgICAgICAgICAgICAgdHdlbHZlTW9udGhUb3RhbCArPSBwYXltZW50LmFtb3VudCAqIC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0VG90YWxTcGVuZCh0d2VsdmVNb250aFRvdGFsLnRvRml4ZWQoMikpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ1lURCc6XG4gICAgICAgICAgICBjb25zdCBnZXRTcGVuZGluZ1lURCA9IGRpc3BsYXk/Lnl0ZFRyYW5zYWN0aW9ucz8uZmlsdGVyKHRyYW5zYWN0aW9uID0+IE1hdGguc2lnbih0cmFuc2FjdGlvbi5hbW91bnQpID09PSAxIClcbiAgICAgICAgICAgIGxldCB5dGRUcmFuc2FjdGlvbnNUb3RhbCA9IDA7XG4gICAgICAgICAgICBnZXRTcGVuZGluZ1lURD8uZm9yRWFjaChwYXltZW50ID0+e1xuICAgICAgICAgICAgICB5dGRUcmFuc2FjdGlvbnNUb3RhbCArPSBwYXltZW50LmFtb3VudCAqIC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0VG90YWxTcGVuZCh5dGRUcmFuc2FjdGlvbnNUb3RhbC50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICcyNCBtb250aHMnOlxuICAgICAgICAgICAgY29uc3QgZ2V0U3BlbmRpbmcyNE1vbnRoID0gZGlzcGxheT8udHdlbnR5Rm91ck1vbnRoVHJhbnNhY3Rpb25zPy5maWx0ZXIodHJhbnNhY3Rpb24gPT4gTWF0aC5zaWduKHRyYW5zYWN0aW9uLmFtb3VudCkgPT09IDEgKVxuICAgICAgICAgICAgbGV0IHR3ZW50eUZvdXJNb250aFRvdGFsID0gMDtcbiAgICAgICAgICAgIGdldFNwZW5kaW5nMjRNb250aD8uZm9yRWFjaChwYXltZW50ID0+e1xuICAgICAgICAgICAgICB0d2VudHlGb3VyTW9udGhUb3RhbCArPSBwYXltZW50LmFtb3VudCAqIC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0VG90YWxTcGVuZCh0d2VudHlGb3VyTW9udGhUb3RhbC50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0U3BlbmRpbmcoKVxuICAgIGNvbnNvbGUubG9nKCdpbmZpbml0ZWxvb3B0ZXN0JylcbiAgICByZXR1cm4oKCk9Pnt9KVxuICB9LFt0aW1lZnJhbWUsIGRpc3BsYXldKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0ge2BcbiAgICBjb2wtc3Bhbi0yIHAtNiBiZy1za3ktNjAwIHJvdW5kZWQteGwgeGw6Y29sLXNwYW4tMVxuICAgICR7ZGlzcGxheS5zdWJ0eXBlID09PSAnY3JlZGl0IGNhcmQnICYmICgnY29sLXNwYW4tNCcpfVxuICAgIGB9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lID0gXCJ0ZXh0LW5ldXRyYWwtMzAwIHRleHQtXCI+VG90YWwgU3BlbnQ8L3NwYW4+XG4gICAgICA8cCBjbGFzc05hbWUgPSBcInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj57cGFyc2VGbG9hdCh0b3RhbFNwZW5kKS50b0xvY2FsZVN0cmluZyh1c2VyTG9jYWxlLHtzdHlsZTonY3VycmVuY3knLGN1cnJlbmN5OmRpc3BsYXkuYmFsYW5jZXM/Lmlzb19jdXJyZW5jeV9jb2RlIHx8ICdVU0QnfSl9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lID0gXCJtdC0yIHRleHQtc20gdGV4dC1uZXV0cmFsLTMwMC83NVwiPldpdGhpbiA8Yj57dGltZWZyYW1lfTwvYj48L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG90YWxTcGVuZEJveCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG90YWxTcGVuZEJveCIsImRpc3BsYXkiLCJ0aW1lZnJhbWUiLCJ1c2VyTG9jYWxlIiwidG90YWxTcGVuZCIsInNldFRvdGFsU3BlbmQiLCJnZXRTcGVuZGluZyIsInRyYW5zYWN0aW9ucyIsImZpbHRlciIsInRyYW5zYWN0aW9uIiwiTWF0aCIsInNpZ24iLCJhbW91bnQiLCJ0b3RhbCIsImZvckVhY2giLCJwYXltZW50IiwidG9GaXhlZCIsImdldFNwZW5kaW5nMTJNb250aCIsInR3ZWx2ZU1vbnRoVHJhbnNhY3Rpb25zIiwidHdlbHZlTW9udGhUb3RhbCIsImdldFNwZW5kaW5nWVREIiwieXRkVHJhbnNhY3Rpb25zIiwieXRkVHJhbnNhY3Rpb25zVG90YWwiLCJnZXRTcGVuZGluZzI0TW9udGgiLCJ0d2VudHlGb3VyTW9udGhUcmFuc2FjdGlvbnMiLCJ0d2VudHlGb3VyTW9udGhUb3RhbCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdWJ0eXBlIiwic3BhbiIsInAiLCJwYXJzZUZsb2F0IiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiYmFsYW5jZXMiLCJpc29fY3VycmVuY3lfY29kZSIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TotalSpendBox.js\n"));

/***/ })

});