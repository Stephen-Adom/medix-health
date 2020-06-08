(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports_lab_tests"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTest.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabTest.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
      loadingData: false,
      search: '',
      headers: [{
        text: 'Name of Patient',
        align: 'start',
        sortable: false,
        value: 'firstname'
      }, {
        text: 'Sex',
        value: 'gender'
      }, {
        text: 'Phone Number',
        value: 'phone'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Job Title',
        value: 'job_title'
      }, {
        text: 'Status',
        value: 'referred'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        align: 'center'
      }]
    };
  },
  methods: {
    goback: function goback() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTest.vue?vue&type=template&id=8d0204b8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabTest.vue?vue&type=template&id=8d0204b8& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5 ma-3" },
    [
      _c(
        "v-toolbar",
        { staticClass: "pa-1", attrs: { flat: "" } },
        [
          _c(
            "v-toolbar-title",
            { staticClass: "subtitle-1 font-weight-bold text-uppercase" },
            [_vm._v(" Lab Reports")]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "red darken-2 px-5",
              attrs: { dark: "", tile: "", depressed: "" },
              on: { click: _vm.goback }
            },
            [_c("span", { staticClass: "caption" }, [_vm._v("Back")])]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "6", md: "3", sm: "3" } },
            [
              _c(
                "v-card",
                {
                  staticStyle: { "border-top": "5px solid red" },
                  attrs: { outlined: "", link: "", hover: "" }
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "subtitle-1 font-weight-bold pb-1" },
                    [_c("span", [_vm._v("Blood Tests")])]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pa-0 d-flex justify-center align-center" },
                    [
                      _c(
                        "v-avatar",
                        {
                          staticStyle: { border: "3px solid red" },
                          attrs: { size: "85" }
                        },
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: { src: "/app_asset/blood_tests.png" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "body d-flex justify-center" },
                    [
                      _vm._v(
                        "\n                    Click to view various Blood Test Result\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-7 red darken-2",
                          attrs: {
                            dark: "",
                            rounded: "",
                            depressed: "",
                            to: { name: "blood-test", hash: "#options" }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "caption font-weight-bold" },
                            [_vm._v("View Results")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6", md: "3", sm: "3" } },
            [
              _c(
                "v-card",
                {
                  staticStyle: { "border-top": "5px solid #007E33" },
                  attrs: { outlined: "", link: "", hover: "" }
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "subtitle-1 font-weight-bold pb-1" },
                    [_c("span", [_vm._v("Urine Tests")])]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pa-0 d-flex justify-center align-center" },
                    [
                      _c(
                        "v-avatar",
                        {
                          staticStyle: { border: "3px solid #007E33" },
                          attrs: { size: "85" }
                        },
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: { src: "/app_asset/urine_tests.png" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "body d-flex justify-center" },
                    [
                      _vm._v(
                        "\n                    Click to view various Urine Test Results\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-7 success darken-2",
                          attrs: {
                            dark: "",
                            rounded: "",
                            depressed: "",
                            to: { name: "urine-test" }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "caption font-weight-bold" },
                            [_vm._v("View Results")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6", md: "3", sm: "3" } },
            [
              _c(
                "v-card",
                {
                  staticStyle: { "border-top": "5px solid #FF8800" },
                  attrs: { outlined: "", link: "", hover: "" }
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "subtitle-1 font-weight-bold pb-1" },
                    [_c("span", [_vm._v("Faecal Tests")])]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pa-0 d-flex justify-center align-center" },
                    [
                      _c(
                        "v-avatar",
                        {
                          staticStyle: { border: "3px solid #FF8800" },
                          attrs: { size: "85" }
                        },
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: { src: "/app_asset/stool_tests.png" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "body d-flex justify-center" },
                    [
                      _vm._v(
                        "\n                    Click to view various Faecal Test Results\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-7",
                          attrs: {
                            dark: "",
                            rounded: "",
                            color: "#FF8800",
                            depressed: "",
                            to: { name: "faecal-test" }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "caption font-weight-bold" },
                            [_vm._v("View Results")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6", md: "3", sm: "3" } },
            [
              _c(
                "v-card",
                {
                  staticStyle: { "border-top": "5px solid #6e40bd" },
                  attrs: { outlined: "", link: "", hover: "" }
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "subtitle-1 font-weight-bold pb-1" },
                    [_c("span", [_vm._v("Saliva Tests")])]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pa-0 d-flex justify-center align-center" },
                    [
                      _c(
                        "v-avatar",
                        {
                          staticStyle: { border: "3px solid #6e40bd" },
                          attrs: { size: "85" }
                        },
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: { src: "/app_asset/sperm_tests.png" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "body d-flex justify-center" },
                    [
                      _vm._v(
                        "\n                    Click to view various Saliva Test Results\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-7",
                          attrs: {
                            dark: "",
                            rounded: "",
                            color: "#6e40bd",
                            depressed: "",
                            to: { name: "saliva-test" }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "caption font-weight-bold" },
                            [_vm._v("View Result")]
                          )
                        ]
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", id: "options" } },
            [_c("router-view", { key: _vm.$router.path })],
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

/***/ "./resources/js/components/LabTest.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/LabTest.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabTest_vue_vue_type_template_id_8d0204b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabTest.vue?vue&type=template&id=8d0204b8& */ "./resources/js/components/LabTest.vue?vue&type=template&id=8d0204b8&");
/* harmony import */ var _LabTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabTest.vue?vue&type=script&lang=js& */ "./resources/js/components/LabTest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LabTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LabTest_vue_vue_type_template_id_8d0204b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LabTest_vue_vue_type_template_id_8d0204b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LabTest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LabTest.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/LabTest.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LabTest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LabTest.vue?vue&type=template&id=8d0204b8&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LabTest.vue?vue&type=template&id=8d0204b8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTest_vue_vue_type_template_id_8d0204b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LabTest.vue?vue&type=template&id=8d0204b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTest.vue?vue&type=template&id=8d0204b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTest_vue_vue_type_template_id_8d0204b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTest_vue_vue_type_template_id_8d0204b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);