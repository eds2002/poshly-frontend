"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 6305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ ItemsProvider),
/* harmony export */   "c": () => (/* binding */ ItemsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_signedUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5208);



const ItemsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ItemsProvider = ({ children  })=>{
    const { signedUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_signedUser__WEBPACK_IMPORTED_MODULE_2__/* .UserContext */ .S);
    const { 0: item , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: bankAccounts , 1: setBankAccounts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: transactions , 1: setTransactions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: displayTransactions , 1: setDisplayTransactions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: transactionsId , 1: setTransactionsId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemsContext.Provider, {
        value: {
            item,
            setItem,
            bankAccounts,
            setBankAccounts,
            transactions,
            setTransactions,
            displayTransactions,
            setDisplayTransactions,
            transactionsId,
            setTransactionsId
        },
        children: children
    });
};



/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TabsProvider),
/* harmony export */   "q": () => (/* binding */ TabContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TabContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const TabsProvider = ({ children  })=>{
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Overview");
    const { 0: subLink , 1: setSublink  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Profile");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabContext.Provider, {
        value: {
            tab,
            setTab,
            subLink,
            setSublink
        },
        children: children
    });
};



/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext),
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const UserProvider = ({ children  })=>{
    const { 0: signedUser , 1: setSignedUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            signedUser,
            setSignedUser
        },
        children: children
    });
};



/***/ }),

/***/ 7609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ThemeContext),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ThemeProvider = ({ children  })=>{
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    });
};



/***/ })

};
;