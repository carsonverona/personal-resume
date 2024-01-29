"use strict";
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7740c008.png","height":36,"width":138,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR4nGMsZ2CQaPn1y5+FlfXd////ZRgYGLgZGRl//vn1660jO/smxu9fvgiwc3GJAAW/ARVwABUwA9msQPbvX9+/vwUAWNkcR2gObVsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/img/logo-3.png
/* harmony default export */ const logo_3 = ({"src":"/_next/static/media/logo-3.fbf4b05c.png","height":36,"width":138,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/Af+olg9AhZQ62PD0KQoDAvwBAQHY8vz9DSwQDPW+bmHKAUUlIA7W8fUP/QMECf79/QUDAwP9/P39/wX8++8lEAz77iIfyEHDKBYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/img/logo-6.png
/* harmony default export */ const logo_6 = ({"src":"/_next/static/media/logo-6.02f08d87.png","height":45,"width":77,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAARklEQVR42k3BoQmAQAAAwEviAopFHj4ahI+a3UFwCLFafDA5gRu4p/XviLJRYXHrNYJaJ3Ha7F6PS/YRDA6T1ixKUFkB+AFpsQgrf+SHTgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/logo-7.png
/* harmony default export */ const logo_7 = ({"src":"/_next/static/media/logo-7.70a39ece.png","height":46,"width":176,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANUlEQVR4nGP8d43BkoGB4RMQfwRiAwZGIP8/w28gGyS2G6ZADIhvACX1gZJGQPZ/IOYA4scABncOSn/aUeQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/img/logo-5.png
/* harmony default export */ const logo_5 = ({"src":"/_next/static/media/logo-5.12adb547.png","height":36,"width":111,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAL0lEQVR42mNgCGCoZ0ABZQxFDN4MXgwBDBYMzgwmDAyTGVIZGhiKGMoZihkqGLIBhm8HAxNg3XIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./public/img/logo-4.png
/* harmony default export */ const logo_4 = ({"src":"/_next/static/media/logo-4.619878d3.png","height":36,"width":212,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAK0lEQVR4nGNc0RafpmYVckXP2uP3r5/fORkYGP78/fP7679///4wM7MIAwAP9BEUof910QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./public/img/logo-2.png
/* harmony default export */ const logo_2 = ({"src":"/_next/static/media/logo-2.c200ad23.png","height":36,"width":138,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR4nGNkWLle4lewrz8rM/O7////yzAwMHAzMjL+/P3371u2GfM3MX75+UuAi5VFBCj4DaiAA6iAGchmBbJ///jz5y0AfgMdQnpeoqcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./pages/layout/Navbar.jsx











const Navbar = function() {
    const [showmenu, btn_icon] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const header = document.getElementById("header-wrap");
        const flytext = document.getElementById("fly");
        const totop = document.getElementById("scroll-to-top");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", ()=>{
            btn_icon(false);
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                totop.classList.add("show");
                flytext.classList.add("hide");
            } else {
                header.classList.remove("sticky");
                flytext.classList.remove("hide");
                totop.classList.remove("show");
            }
        });
        return ()=>{
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar transition",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                    className: "navbar-brand",
                    activeClass: "active",
                    spy: true,
                    to: "hero-area",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            className: "img-fluid d-block imginit",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo_3,
                            className: "img-fluid imgsaly",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo_6,
                            className: "img-fluid imggrey",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo_7,
                            className: "img-fluid imgchef",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo_5,
                            className: "img-fluid imgdesigner",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo_4,
                            className: "img-fluid imglawyer",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo_2,
                            className: "img-fluid imgdark",
                            alt: "logo"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "dekstopmenu",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "hero-area",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "about",
                                    children: "About me"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "whatido",
                                    children: "What I Do"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "gallery",
                                    children: "Portofolio"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "resume",
                                    children: "My resume"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "blog",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    activeClass: "active",
                                    spy: true,
                                    to: "contact",
                                    children: "Contact Me"
                                })
                            })
                        ]
                    })
                }),
                showmenu && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mobilemenu",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav mr-auto w-100 justify-content-end clearfix",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    activeClass: "active",
                                    smooth: true,
                                    spy: true,
                                    to: "hero-area",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    activeClass: "active",
                                    smooth: true,
                                    spy: true,
                                    to: "about",
                                    children: "About me"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    smooth: true,
                                    activeClass: "active",
                                    spy: true,
                                    to: "whatido",
                                    children: "What I Do"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    smooth: true,
                                    activeClass: "active",
                                    spy: true,
                                    to: "gallery",
                                    children: "Portofolio"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    smooth: true,
                                    activeClass: "active",
                                    spy: true,
                                    to: "resume",
                                    children: "My resume"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    smooth: true,
                                    activeClass: "active",
                                    spy: true,
                                    to: "blog",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link transition",
                                    smooth: true,
                                    activeClass: "active",
                                    spy: true,
                                    to: "contact",
                                    children: "Contact Me"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "burgermenu",
                    type: "button",
                    onClick: ()=>btn_icon(!showmenu),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-bars",
                        "aria-hidden": "true"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Navbar = (Navbar);


/***/ })

};
;