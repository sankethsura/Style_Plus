"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/component/Carrousal.js":
/*!************************************!*\
  !*** ./app/component/Carrousal.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick-theme.css\");\n\n\n\n\n\nconst CarouselComponent = (param)=>{\n    let { images } = param;\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel-container mx-auto max-w-screen-lg px-4 py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...settings,\n            children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full px-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white p-4 rounded-lg shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index),\n                                className: \"w-full h-48 object-cover rounded-md mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: \"Image Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"Image Subtitle\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CarouselComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselComponent);\nvar _c;\n$RefreshReg$(_c, \"CarouselComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvQ2Fycm91c2FsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDTztBQUNNO0FBRTlDLE1BQU1FLG9CQUFvQjtRQUFDLEVBQUVDLE1BQU0sRUFBRTtJQUNuQyxNQUFNQyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1lBQ1Y7Z0JBQ0VDLFlBQVk7Z0JBQ1pQLFVBQVU7b0JBQ1JJLGNBQWM7b0JBQ2RDLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBO2dCQUNFRSxZQUFZO2dCQUNaUCxVQUFVO29CQUNSSSxjQUFjO29CQUNkQyxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNaLG1EQUFNQTtZQUFFLEdBQUdHLFFBQVE7c0JBQ2pCRCxPQUFPVyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDSjtvQkFBZ0JDLFdBQVU7OEJBQ3pCLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUNDQyxLQUFLSDtnQ0FDTEksS0FBSyxTQUFlLE9BQU5IO2dDQUNkSCxXQUFVOzs7Ozs7MENBRVosOERBQUNPO2dDQUFHUCxXQUFVOzBDQUF3Qjs7Ozs7OzRCQUFnQjswQ0FDdEQsOERBQUNRO2dDQUFFUixXQUFVOzBDQUFnQjs7Ozs7OzRCQUFrQjs7Ozs7OzttQkFSekNHOzs7Ozs7Ozs7Ozs7Ozs7QUFlcEI7S0E1Q01kO0FBOENOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC9DYXJyb3VzYWwuanM/NjRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5cbmNvbnN0IENhcm91c2VsQ29tcG9uZW50ID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsIC8vIEFkanVzdCB0aGlzIGJyZWFrcG9pbnQgYXMgbmVlZGVkXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LCAvLyBBZGp1c3QgdGhpcyBicmVha3BvaW50IGFzIG5lZWRlZFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyIG14LWF1dG8gbWF4LXctc2NyZWVuLWxnIHB4LTQgcHktOFwiPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIG1iLTRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+SW1hZ2UgVGl0bGU8L2gyPiB7LyogQWRkIHlvdXIgdGl0bGUgbG9naWMgaGVyZSAqL31cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkltYWdlIFN1YnRpdGxlPC9wPiB7LyogQWRkIHlvdXIgc3VidGl0bGUgbG9naWMgaGVyZSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJDYXJvdXNlbENvbXBvbmVudCIsImltYWdlcyIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/Carrousal.js\n"));

/***/ })

});