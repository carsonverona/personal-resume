"use strict";
exports.id = 3571;
exports.ids = [3571];
exports.modules = {

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__);



class Particle extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }
    particlesInit(main) {
    /*console.log(main);*/ // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }
    particlesLoaded(container) {
    /*console.log(container);*/ }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default()), {
            id: "tsparticles",
            init: this.particlesInit,
            loaded: this.particlesLoaded,
            options: {
                background: {
                    color: {
                        value: "none"
                    }
                },
                fpsLimit: 70,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 1
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 400
                        },
                        value: 20
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);


/***/ })

};
;