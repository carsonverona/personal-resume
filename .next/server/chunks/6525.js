"use strict";
exports.id = 6525;
exports.ids = [6525];
exports.modules = {

/***/ 6525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5236);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_count_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7919);
/* harmony import */ var use_count_up__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_count_up__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__);







const image1 = "./img/background/3.jpg";
function Counter() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_4___default().init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "section bg-top bg-bottom py-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_parallax__WEBPACK_IMPORTED_MODULE_2__.Parallax, {
            className: "py-5",
            bgImage: image1,
            strength: 300,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-5 position-relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "de_count text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "timer",
                                            "data-aos": "fade",
                                            "data-aos-delay": "0",
                                            "data-aos-duration": "1000",
                                            "data-aos-easing": "ease",
                                            "data-aos-once": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(use_count_up__WEBPACK_IMPORTED_MODULE_3__.CountUp, {
                                                isCounting: true,
                                                end: 8240,
                                                duration: 3
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Hours of Works"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "de_count text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "timer",
                                            "data-aos": "fade",
                                            "data-aos-delay": "200",
                                            "data-aos-duration": "1000",
                                            "data-aos-easing": "ease",
                                            "data-aos-once": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(use_count_up__WEBPACK_IMPORTED_MODULE_3__.CountUp, {
                                                isCounting: true,
                                                end: 315,
                                                duration: 3
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Projects Done"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "de_count text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "timer",
                                            "data-aos": "fade",
                                            "data-aos-delay": "400",
                                            "data-aos-duration": "1000",
                                            "data-aos-easing": "ease",
                                            "data-aos-once": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(use_count_up__WEBPACK_IMPORTED_MODULE_3__.CountUp, {
                                                isCounting: true,
                                                end: 250,
                                                duration: 3
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Satisfied Customers"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "de_count text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "timer",
                                            "data-aos": "fade",
                                            "data-aos-delay": "600",
                                            "data-aos-duration": "1000",
                                            "data-aos-easing": "ease",
                                            "data-aos-once": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(use_count_up__WEBPACK_IMPORTED_MODULE_3__.CountUp, {
                                                isCounting: true,
                                                end: 32,
                                                duration: 3
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Awards Winning"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ })

};
;