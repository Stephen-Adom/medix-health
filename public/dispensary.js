(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispensary"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dispensary.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dispensary.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      patients: [],
      search: '',
      loadingData: false,
      headers: [{
        text: 'Patient Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Contact',
        value: 'contact'
      }, {
        text: 'Drugs Prescribed',
        value: 'drugs'
      }, {
        text: 'Start Course',
        value: 'start'
      }, {
        text: 'End Course',
        value: 'end'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allData'])),
  watch: {
    allData: function allData() {
      if (this.allData.length) {
        this.patients = this.allData;
        this.loadingData = false;
      } else {
        this.loadingData = false;
      }
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchDispensary']), {
    formatStatus: function formatStatus(item) {
      if (item.prescribed === 0) {
        return 'Incomplete';
      } else {
        return 'Completed';
      }
    },
    details: function details(item) {
      this.$router.push({
        name: 'dispensary_details',
        params: {
          id: item.id
        }
      });
    }
  }),
  mounted: function mounted() {
    this.fetchDispensary();
    this.loadingData = true;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dispensary.vue?vue&type=template&id=7007cbea&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dispensary.vue?vue&type=template&id=7007cbea& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card",
        { attrs: { outlined: "" } },
        [
          _c("v-card-title", [
            _c(
              "span",
              { staticClass: "subtitle-1 text-uppercase font-weight-bold" },
              [_vm._v("Dispensary Data")]
            )
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-data-table", {
                ref: "dispensaryData",
                staticClass: "elevation-0",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.patients,
                  "sort-by": "full_name",
                  search: _vm.search,
                  loading: _vm.loadingData,
                  "loading-text": "Loading... Please wait"
                },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c(
                          "v-toolbar",
                          { attrs: { flat: "", color: "white" } },
                          [
                            _c("v-toolbar-title", [_vm._v("Patients Data")]),
                            _vm._v(" "),
                            _c("v-divider", {
                              staticClass: "mx-4",
                              attrs: { inset: "", vertical: "" }
                            }),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c("v-text-field", {
                              staticClass: "mx-4 mt-2",
                              attrs: {
                                color: "success",
                                label: "Who are you looking for?",
                                "append-icon": "mdi-magnify"
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
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "item.name",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            _vm._s(item.patient.title) +
                              " " +
                              _vm._s(item.patient.firstname) +
                              " " +
                              _vm._s(item.patient.lastname)
                          )
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.contact",
                    fn: function(ref) {
                      var item = ref.item
                      return [_c("span", [_vm._v(_vm._s(item.patient.phone))])]
                    }
                  },
                  {
                    key: "item.drugs",
                    fn: function(ref) {
                      var item = ref.item
                      return [_c("span", [_vm._v(_vm._s(item.drug_name))])]
                    }
                  },
                  {
                    key: "item.start",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm._f("formatDate")(item.start_course))
                          )
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.end",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(_vm._s(_vm._f("formatDate")(item.end_course)))
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.status",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [_vm._v(_vm._s(_vm.formatStatus(item)))])
                      ]
                    }
                  },
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "warning darken-1" },
                            on: {
                              click: function($event) {
                                return _vm.details(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v(" mdi-eye")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "red darken-2" },
                            on: { click: function($event) {} }
                          },
                          [_c("v-icon", [_vm._v(" mdi-delete")])],
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dispensary.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Dispensary.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dispensary_vue_vue_type_template_id_7007cbea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dispensary.vue?vue&type=template&id=7007cbea& */ "./resources/js/components/Dispensary.vue?vue&type=template&id=7007cbea&");
/* harmony import */ var _Dispensary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dispensary.vue?vue&type=script&lang=js& */ "./resources/js/components/Dispensary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dispensary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dispensary_vue_vue_type_template_id_7007cbea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dispensary_vue_vue_type_template_id_7007cbea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dispensary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dispensary.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Dispensary.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispensary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dispensary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dispensary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispensary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dispensary.vue?vue&type=template&id=7007cbea&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Dispensary.vue?vue&type=template&id=7007cbea& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispensary_vue_vue_type_template_id_7007cbea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dispensary.vue?vue&type=template&id=7007cbea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dispensary.vue?vue&type=template&id=7007cbea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispensary_vue_vue_type_template_id_7007cbea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispensary_vue_vue_type_template_id_7007cbea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);