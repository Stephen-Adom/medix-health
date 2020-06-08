(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patientvitals"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vitals/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        text: 'Full Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Age',
        value: 'age',
        align: 'center'
      }, {
        text: 'Sex',
        value: 'gender',
        align: 'center'
      }, {
        text: 'Email',
        value: 'email',
        align: 'center'
      }, {
        text: 'Contact',
        value: 'phone',
        align: 'center'
      }, {
        text: 'Action',
        value: 'actions',
        align: 'center'
      }],
      patients: []
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])([]), {
    getid: function getid(item) {},
    addNewPatient: function addNewPatient() {
      this.$router.push({
        name: 'patient_vitals_new'
      });
    },
    viewInfo: function viewInfo(item) {
      this.$router.push({
        name: 'newvitals',
        params: {
          id: item.id
        }
      });
    },
    getGenderColor: function getGenderColor(gender) {
      if (gender === 'Male') {
        return 'primary';
      } else {
        return 'success';
      }
    },
    formatGender: function formatGender(gender) {
      if (gender == 'Male') {
        return 'mdi-gender-male';
      } else {
        return 'mdi-gender-female';
      }
    }
  }),
  created: function created() {// this.loadingData = true;
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])([])),
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/Index.vue?vue&type=template&id=6be14155&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vitals/Index.vue?vue&type=template&id=6be14155&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        { staticClass: "pa-0", attrs: { outlined: "" } },
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c("v-toolbar-title", [
                _c(
                  "span",
                  { staticClass: "subtitle-1 font-weight-bold text-uppercase" },
                  [_vm._v("Vitals Assessment")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "mx-4",
                attrs: { inset: "", vertical: "" }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "px-6 success darken-2",
                  attrs: { rounded: "", elevation: "15" },
                  on: { click: _vm.addNewPatient }
                },
                [
                  _c("span", { staticClass: "font-weight-thin caption" }, [
                    _vm._v("New Vital Record")
                  ]),
                  _vm._v(" "),
                  _c("v-icon", { attrs: { right: "", size: "20" } }, [
                    _vm._v("mdi-heart-flash")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "mt-2" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "subtitle-2 font-weight-bold text-uppercase"
                            },
                            [
                              _vm._v(
                                "\n                        Patient Vital Record List\n                        "
                              ),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "subtitle-2 font-weight-light",
                                attrs: {
                                  "append-icon": "mdi-magnify",
                                  label: "Looking for a patient?",
                                  "single-line": "",
                                  "hide-details": "",
                                  color: "success"
                                },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.patients,
                              search: _vm.search,
                              loading: _vm.loadingData,
                              "loading-text": "Loading... Please wait"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item.actions",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-tooltip",
                                      {
                                        attrs: { top: "", attach: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      {
                                                        staticClass: "px-5",
                                                        attrs: {
                                                          tile: "",
                                                          color: "red darken-3",
                                                          depressed: "",
                                                          dark: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.viewInfo(
                                                              item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            left: "",
                                                            size: "20"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-heart-flash"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [_vm._v("vitals")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("span", { staticClass: "caption" }, [
                                          _vm._v("check vitals")
                                        ])
                                      ]
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.name",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(item.firstname) +
                                          " " +
                                          _vm._s(item.lastname)
                                      )
                                    ])
                                  ]
                                }
                              },
                              {
                                key: "item.gender",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "span",
                                      [
                                        _vm._v(_vm._s(item.gender)),
                                        _c("v-icon", {
                                          attrs: {
                                            color: _vm.getGenderColor(
                                              item.gender
                                            )
                                          },
                                          domProps: {
                                            textContent: _vm._s(
                                              _vm.formatGender(item.gender)
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
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

/***/ "./resources/js/components/vitals/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/vitals/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6be14155_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6be14155&scoped=true& */ "./resources/js/components/vitals/Index.vue?vue&type=template&id=6be14155&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/vitals/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6be14155_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6be14155_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6be14155",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vitals/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vitals/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/vitals/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vitals/Index.vue?vue&type=template&id=6be14155&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/vitals/Index.vue?vue&type=template&id=6be14155&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6be14155_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6be14155&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/Index.vue?vue&type=template&id=6be14155&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6be14155_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6be14155_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);