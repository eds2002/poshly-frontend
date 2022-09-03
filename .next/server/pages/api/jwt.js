"use strict";
(() => {
var exports = {};
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 5592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "middleware": () => (/* binding */ middleware)
});

;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
;// CONCATENATED MODULE: ./pages/api/jwt.js


async function middleware(req) {
    const cookie = request.cookies.get("user");
    console.log(cookie);
// let token = await cookies.jwt
// let url = req.url;
} // // if(url.includes('/user/dashboard')){
 //     if(token === undefined) return NextResponse.redirect('/');
 //     try {
 //         verify(token,process.env.ACCESS_TOKEN_SECRET);
 //         return NextResponse.next();
 //     } catch (err) {
 //         return NextResponse.redirect('/');
 //     }
 // }
 // return NextResponse.next();
 // }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5592));
module.exports = __webpack_exports__;

})();