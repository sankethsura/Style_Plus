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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick-theme.css\");\n\n\n\n\n\nconst CarouselComponent = (param)=>{\n    let { images } = param;\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    const CustomNextArrow = (param)=>/*#__PURE__*/ {\n        let { onClick } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"slick-arrow next-arrow\",\n            onClick: onClick,\n            children: \"Next\"\n        }, void 0, false, {\n            fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, undefined);\n    };\n    const CustomPrevArrow = (param)=>/*#__PURE__*/ {\n        let { onClick } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"slick-arrow prev-arrow\",\n            onClick: onClick,\n            children: \"Prev\"\n        }, void 0, false, {\n            fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n            lineNumber: 39,\n            columnNumber: 5\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel-container mx-auto max-w-screen-lg px-4 py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...settings,\n            nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomNextArrow, {}, void 0, false, void 0, void 0),\n            prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomPrevArrow, {}, void 0, false, void 0, void 0),\n            children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full px-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white p-4 rounded-lg shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index),\n                                className: \"w-full h-48 object-cover rounded-md mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: \"Image Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"Image Subtitle\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sankethg/Desktop/P/suhas/Style_Plus/app/component/Carrousal.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CarouselComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselComponent);\nvar _c;\n$RefreshReg$(_c, \"CarouselComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvQ2Fycm91c2FsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDTztBQUNNO0FBRTlDLE1BQU1FLG9CQUFvQjtRQUFDLEVBQUVDLE1BQU0sRUFBRTtJQUNuQyxNQUFNQyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1lBQ1Y7Z0JBQ0VDLFlBQVk7Z0JBQ1pQLFVBQVU7b0JBQ1JJLGNBQWM7b0JBQ2RDLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBO2dCQUNFRSxZQUFZO2dCQUNaUCxVQUFVO29CQUNSSSxjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCRyxRQUFRO2dCQUNWO1lBQ0Y7U0FDRDtJQUNIO0lBRUEsTUFBTUMsa0JBQWtCO1lBQUMsRUFBRUMsT0FBTyxFQUFFO2VBQ2xDLDhEQUFDQztZQUFPQyxXQUFVO1lBQXlCRixTQUFTQTtzQkFBUzs7Ozs7O0lBRXJEO0lBR1YsTUFBTUcsa0JBQWtCO1lBQUMsRUFBRUgsT0FBTyxFQUFFO2VBQ2xDLDhEQUFDQztZQUFPQyxXQUFVO1lBQXlCRixTQUFTQTtzQkFBUzs7Ozs7O0lBRXJEO0lBR1YscUJBQ0UsOERBQUNJO1FBQUlGLFdBQVU7a0JBQ2IsNEVBQUNmLG1EQUFNQTtZQUFFLEdBQUdHLFFBQVE7WUFBRWUseUJBQVcsOERBQUNOO1lBQW9CTyx5QkFBVyw4REFBQ0g7c0JBQy9EZCxPQUFPa0IsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ0w7b0JBQWdCRixXQUFVOzhCQUN6Qiw0RUFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FDQ0MsS0FBS0g7Z0NBQ0xJLEtBQUssU0FBZSxPQUFOSDtnQ0FDZFAsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDVztnQ0FBR1gsV0FBVTswQ0FBd0I7Ozs7OzswQ0FDdEMsOERBQUNZO2dDQUFFWixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7O21CQVJ2Qk87Ozs7Ozs7Ozs7Ozs7OztBQWVwQjtLQXpETXJCO0FBMkROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC9DYXJyb3VzYWwuanM/NjRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5cbmNvbnN0IENhcm91c2VsQ29tcG9uZW50ID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLCAvLyBIaWRlIGFycm93cyBvbiBtb2JpbGVcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBDdXN0b21OZXh0QXJyb3cgPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNsaWNrLWFycm93IG5leHQtYXJyb3dcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIE5leHRcbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICBjb25zdCBDdXN0b21QcmV2QXJyb3cgPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNsaWNrLWFycm93IHByZXYtYXJyb3dcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIFByZXZcbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyIG14LWF1dG8gbWF4LXctc2NyZWVuLWxnIHB4LTQgcHktOFwiPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IG5leHRBcnJvdz17PEN1c3RvbU5leHRBcnJvdyAvPn0gcHJldkFycm93PXs8Q3VzdG9tUHJldkFycm93IC8+fT5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidy1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17YEltYWdlICR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1tZCBtYi00XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPkltYWdlIFRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkltYWdlIFN1YnRpdGxlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9TbGlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlciIsIkNhcm91c2VsQ29tcG9uZW50IiwiaW1hZ2VzIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJhcnJvd3MiLCJDdXN0b21OZXh0QXJyb3ciLCJvbkNsaWNrIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiQ3VzdG9tUHJldkFycm93IiwiZGl2IiwibmV4dEFycm93IiwicHJldkFycm93IiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/Carrousal.js\n"));

/***/ })

});