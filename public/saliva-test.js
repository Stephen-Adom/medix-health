(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saliva-test"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TestsOptions/Saliva.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TestsOptions/Saliva.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tests: [{
        name: 'Steroid Hormone Analysis',
        link: {
          name: 'steroid-hormone'
        }
      }, {
        name: 'Genetic Material Assessment',
        link: {
          name: 'genetics'
        }
      }, {
        name: 'Infection Examination',
        link: {
          name: 'saliva-infection'
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TestsOptions/Saliva.vue?vue&type=template&id=0c245166&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TestsOptions/Saliva.vue?vue&type=template&id=0c245166& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { id: "options" } },
    [
      _c("h5", { staticClass: "subtitle-1 font-weight-bold" }, [
        _vm._v("List of Saliva Test Type")
      ]),
      _vm._v(" "),
      _c("v-divider", { attrs: { inset: "" } }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "7" } },
            _vm._l(_vm.tests, function(test, index) {
              return _c(
                "v-card",
                {
                  key: index,
                  staticClass: "mt-3",
                  staticStyle: { "border-bottom": "3px solid grey" },
                  attrs: { link: "", hover: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "justify-center align-center mr-auto pa-3"
                        },
                        [
                          _c(
                            "v-icon",
                            { attrs: { size: "30", color: "#6e40bd" } },
                            [_vm._v("mdi-cards")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c(
                            "v-card-text",
                            {
                              staticClass:
                                "pa-1 subtitle-2 font-weight-bold ml-4"
                            },
                            [_vm._v(_vm._s(test.name))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "mx-3",
                        attrs: { inset: "", vertical: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        { staticClass: "ml-auto" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "px-5",
                              attrs: {
                                rounded: "",
                                depressed: "",
                                to: test.link
                              }
                            },
                            [
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("view results")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                { attrs: { right: "", size: "19" } },
                                [_vm._v("mdi-send")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "5" } },
            [
              _c(
                "v-responsive",
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: "/app_asset/undraw_files_6b3d.svg",
                      width: "70%"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TestsOptions/Saliva.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/TestsOptions/Saliva.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Saliva_vue_vue_type_template_id_0c245166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Saliva.vue?vue&type=template&id=0c245166& */ "./resources/js/components/TestsOptions/Saliva.vue?vue&type=template&id=0c245166&");
/* harmony import */ var _Saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Saliva.vue?vue&type=script&lang=js& */ "./resources/js/components/TestsOptions/Saliva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Saliva_vue_vue_type_template_id_0c245166___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Saliva_vue_vue_type_template_id_0c245166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TestsOptions/Saliva.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TestsOptions/Saliva.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/TestsOptions/Saliva.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Saliva.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TestsOptions/Saliva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TestsOptions/Saliva.vue?vue&type=template&id=0c245166&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/TestsOptions/Saliva.vue?vue&type=template&id=0c245166& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Saliva_vue_vue_type_template_id_0c245166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Saliva.vue?vue&type=template&id=0c245166& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TestsOptions/Saliva.vue?vue&type=template&id=0c245166&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Saliva_vue_vue_type_template_id_0c245166___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Saliva_vue_vue_type_template_id_0c245166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);