(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["excuse_duty_applicants"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/applicants.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExcuseDuty/applicants.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
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


var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadingData: false,
      search: '',
      headers: [{
        text: 'Staff Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Job Title',
        value: 'job_title'
      }, {
        text: 'Start Date',
        value: 'start_date'
      }, {
        text: 'End Date',
        value: 'end_date'
      }, {
        text: 'Reason',
        value: 'reason'
      }, {
        text: 'Actions',
        value: 'actions'
      }]
    };
  },
  watch: {
    allExcuses: function allExcuses() {
      if (this.allExcuses.length) {
        this.loadingData = false;
        this.$refs.topProgress.done();
      } else {
        this.loadingData = false;
        this.$refs.topProgress.done();
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allExcuses'])),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchExcuses']), {
    goback: function goback() {
      this.$router.go(-1);
    },
    approve: function approve(item) {
      this.$router.push({
        name: 'excuse_duty_approval',
        params: {
          id: item.id
        }
      });
    },
    deleteApplication: function deleteApplication(item) {
      var _this = this;

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var index = _this.allExcuses.indexOf(item);

          _this.allExcuses.splice(index, 1);

          axios.post('/api/delete_excuseduty_application', {
            id: item.id
          }).then(function (response) {
            if (response.data.success) {
              swalWithBootstrapButtons.fire('Deleted!', 'Application has been deleted.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', 'Application Operation Cancelled :)', 'info');
        }
      });
    }
  }),
  created: function created() {
    this.loadingData = true;
    this.fetchExcuses();
  },
  mounted: function mounted() {
    this.$refs.topProgress.start();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/applicants.vue?vue&type=template&id=6d736590&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExcuseDuty/applicants.vue?vue&type=template&id=6d736590&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("vue-topprogress", {
        ref: "topProgress",
        attrs: {
          color: "#00C851",
          colorShadow: "#00C851",
          height: 5,
          errorColor: "#CC0000"
        }
      }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "pa-3", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "span",
                {
                  staticClass:
                    "text-uppercase subtitle-2 font-weight-bold grey--text darken-7"
                },
                [_vm._v("Excuse Applicant List")]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "red darken-3 px-5",
                  attrs: { depressed: "", tile: "", dark: "" },
                  on: { click: _vm.goback }
                },
                [
                  _c("span", { staticClass: "caption font-weight-bold" }, [
                    _vm._v("back")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-card-title",
                [
                  _c("span", { staticClass: "subtitle-1 font-weight-bold" }, [
                    _vm._v("All Lists")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      color: "success darken-2",
                      "append-icon": "mdi-magnify",
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
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
                  items: _vm.allExcuses,
                  search: _vm.search,
                  loading: _vm.loadingData
                },
                scopedSlots: _vm._u([
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
                    key: "item.job_title",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [_vm._v(_vm._s(item.patient.job_title))])
                      ]
                    }
                  },
                  {
                    key: "item.start_date",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(_vm._s(_vm._f("formatDate")(item.start_date)))
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.end_date",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(_vm._s(_vm._f("formatDate")(item.end_date)))
                        ])
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
                                return _vm.approve(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-account-details")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "red darken-2" },
                            on: {
                              click: function($event) {
                                return _vm.deleteApplication(item)
                              }
                            }
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

/***/ "./resources/js/components/ExcuseDuty/applicants.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/applicants.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applicants_vue_vue_type_template_id_6d736590_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicants.vue?vue&type=template&id=6d736590&scoped=true& */ "./resources/js/components/ExcuseDuty/applicants.vue?vue&type=template&id=6d736590&scoped=true&");
/* harmony import */ var _applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicants.vue?vue&type=script&lang=js& */ "./resources/js/components/ExcuseDuty/applicants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _applicants_vue_vue_type_template_id_6d736590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _applicants_vue_vue_type_template_id_6d736590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d736590",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExcuseDuty/applicants.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExcuseDuty/applicants.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/applicants.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./applicants.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/applicants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExcuseDuty/applicants.vue?vue&type=template&id=6d736590&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/applicants.vue?vue&type=template&id=6d736590&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_applicants_vue_vue_type_template_id_6d736590_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./applicants.vue?vue&type=template&id=6d736590&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/applicants.vue?vue&type=template&id=6d736590&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_applicants_vue_vue_type_template_id_6d736590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_applicants_vue_vue_type_template_id_6d736590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);