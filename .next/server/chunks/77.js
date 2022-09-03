"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 2077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({ text , customCSS , icon , disabled , setOpenTrackSpending  }) {
    const handleClick = ()=>{
        if (!setOpenTrackSpending) {
            return;
        } else {
            setOpenTrackSpending(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `disabled:bg-neutral-500/50 disabled:text-neutral-400 disabled:cursor-default w-full px-4 py-2 text-white bg-red-500 hover:bg-red-500/50 transition rounded-lg ${customCSS}`,
        disabled: disabled,
        onClick: ()=>handleClick(),
        children: [
            icon && icon,
            text
        ]
    });
};


/***/ })

};
;