"use strict";
exports.id = 121;
exports.ids = [121];
exports.modules = {

/***/ 1121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Input(props) {
    const { error , onChange , wrongPassword , id , ...inputProps } = props;
    const { 0: invalid , 1: setInvalid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleFocus = (e)=>{
        setInvalid(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...inputProps,
                className: `
      w-full basis-full px-4 text-base py-3 my-2 transition rounded-md text-neutral-300 outline-none ${invalid && "invalid:bg-red-600/25 invalid:text-red-200 focus:invalid:bg-red-600/25 focus:invalid:text-red-200 valid:bg-neutral-900/65 valid:text-white "} bg-neutral-600/25 focus:bg-neutral-600/75 placeholder:text-white/50 hover:bg-neutral-600/70
      ${invalid && wrongPassword && "bg-red-600/25 focus:text-red-200 focus:bg-red-600/25"}
      `,
                onBlur: handleFocus,
                onChange: onChange
            }, id),
            error != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-red-600 ",
                children: error
            })
        ]
    });
};


/***/ })

};
;