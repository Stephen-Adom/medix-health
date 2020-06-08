(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment_all"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/All.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/All.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      headers: [{
        text: 'Name of Patient',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Gender',
        value: 'gender'
      }, {
        text: 'Reason',
        value: 'reason'
      }, {
        text: 'Date',
        value: 'date'
      }, {
        text: 'Time',
        value: 'time'
      }, {
        text: 'Status',
        value: 'status',
        align: 'center'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      appointments: []
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.appointments = [{
        name: 'Alaska Avegbor',
        gender: 'Male',
        reason: 'Sore throat test',
        date: '2020-12-02',
        time: '12:40',
        status: 'pending'
      }, {
        name: 'Stephen Addae',
        gender: 'Female',
        reason: 'Head test',
        date: '2020-12-04',
        time: '05:40',
        status: 'accepted'
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/All.vue?vue&type=template&id=f8c5ce1e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/All.vue?vue&type=template&id=f8c5ce1e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.appointments,
          "sort-by": "name",
          search: _vm.search
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
                    _c("v-toolbar-title", [_vm._v("All Appointments")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mx-4",
                  attrs: {
                    color: "success",
                    label: "Looking for someone?",
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
              ]
            },
            proxy: true
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-2 success",
                    attrs: { rounded: "", small: "" },
                    on: { click: function($event) {} }
                  },
                  [_c("span", { staticClass: "caption" }, [_vm._v("accept")])]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-2 primary",
                    attrs: { small: "", rounded: "" },
                    on: { click: function($event) {} }
                  },
                  [
                    _c("span", { staticClass: "caption" }, [
                      _vm._v("re-schedule")
                    ])
                  ]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/appointments/All.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/appointments/All.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _All_vue_vue_type_template_id_f8c5ce1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./All.vue?vue&type=template&id=f8c5ce1e&scoped=true& */ "./resources/js/components/appointments/All.vue?vue&type=template&id=f8c5ce1e&scoped=true&");
/* harmony import */ var _All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./All.vue?vue&type=script&lang=js& */ "./resources/js/components/appointments/All.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _All_vue_vue_type_template_id_f8c5ce1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _All_vue_vue_type_template_id_f8c5ce1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f8c5ce1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointments/All.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointments/All.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/appointments/All.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./All.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/All.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointments/All.vue?vue&type=template&id=f8c5ce1e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/appointments/All.vue?vue&type=template&id=f8c5ce1e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_f8c5ce1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./All.vue?vue&type=template&id=f8c5ce1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/All.vue?vue&type=template&id=f8c5ce1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_f8c5ce1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_f8c5ce1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);