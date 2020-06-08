(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient_vitals_new"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientNew.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vitals/PatientNew.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      attach: true,
      patientInfo: null,
      submitted: false,
      genderOptions: ['Male', 'Female'],
      namedRules: [function (v) {
        return !!v || 'Name is required';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }],
      titleOptions: ['Mr', 'Mrs', 'Miss', 'Dr'],
      employee_typeOptions: ['Senior Staff', 'Junior Staff', 'Casual', 'Contract Workers'],
      departmentOptions: ['Docks', 'FSIC', 'Human Resource', 'Finance/IT', 'Operations', 'QHSE', 'Supply Chain', 'Engineering', 'Fish Meal Plant']
    }, _defineProperty(_ref, "genderOptions", ['Male', 'Female']), _defineProperty(_ref, "ageRules", [function (v) {
      return !!v || 'Age is required';
    }]), _defineProperty(_ref, "contactRules", [function (v) {
      return !!v || 'Contact is required';
    }, function (v) {
      return v && v.length == 10 || 'Contact must be 10 characters';
    }]), _defineProperty(_ref, "genderRules", [function (v) {
      return !!v || 'Gender is required';
    }]), _defineProperty(_ref, "jobRules", [function (v) {
      return !!v || 'Job Title is required';
    }]), _defineProperty(_ref, "patient", {
      title: '',
      employee: false,
      department: '',
      employee_type: '',
      firstname: '',
      lastname: '',
      age: '',
      email: '',
      contact: '',
      job_title: '',
      sex: ''
    }), _ref;
  },
  methods: {
    goback: function goback() {
      this.$router.go(-1);
    },
    submitPatientInfo: function submitPatientInfo() {
      var _this = this;

      if (this.$refs.patientForm.validate()) {
        axios.post('/api/new_patient', {
          patient: this.patient
        }).then(function (response) {
          if (response.data.error) {
            Swal.fire('Data Error', 'The Email entered already exist', 'error');
          }

          if (response.data.success) {
            _this.submitted = true;
            _this.patientInfo = response.data.patient;

            _this.$refs.patientForm.reset();

            _this.$refs.patientForm.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: 'New Patient Information added'
            });
          }
        });
      }
    },
    checkvitals: function checkvitals() {
      if (this.patientInfo) {
        this.$router.push({
          name: 'newvitals',
          params: {
            id: this.patientInfo.id
          }
        });
      } else {
        Swal.fire('No Account Found', 'The Patient Account has not been created', 'error');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientNew.vue?vue&type=template&id=4b583568&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vitals/PatientNew.vue?vue&type=template&id=4b583568&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pa-2", attrs: { outlined: "" } },
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c("v-toolbar-title", [
                _c("span", { staticClass: "subtitle-1" }, [
                  _vm._v("New Patient Information")
                ])
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
                  attrs: { rounded: "", elevation: "15", dark: "" },
                  on: { click: _vm.goback }
                },
                [
                  _c("span", { staticClass: "font-weight-thin caption" }, [
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
            { staticClass: "mt-2" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8", lg: "8" } },
                    [
                      _c(
                        "v-form",
                        { ref: "patientForm" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      attach: _vm.attach,
                                      color: "success darken-2",
                                      rules: _vm.namedRules,
                                      items: _vm.titleOptions,
                                      label: "Title",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.patient.title,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "title", $$v)
                                      },
                                      expression: "patient.title"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "First Name",
                                      rules: _vm.namedRules,
                                      color: "success",
                                      outlined: "",
                                      placeholder: "First name"
                                    },
                                    model: {
                                      value: _vm.patient.firstname,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "firstname", $$v)
                                      },
                                      expression: "patient.firstname"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Last Name",
                                      rules: _vm.namedRules,
                                      color: "success",
                                      outlined: "",
                                      placeholder: "Last name"
                                    },
                                    model: {
                                      value: _vm.patient.lastname,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "lastname", $$v)
                                      },
                                      expression: "patient.lastname"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      attach: _vm.attach,
                                      color: "success darken-2",
                                      rules: _vm.genderRules,
                                      items: _vm.genderOptions,
                                      label: "Sex",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.patient.sex,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "sex", $$v)
                                      },
                                      expression: "patient.sex"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Contact",
                                      rules: _vm.contactRules,
                                      type: "number",
                                      color: "success",
                                      outlined: "",
                                      placeholder: "Contact"
                                    },
                                    model: {
                                      value: _vm.patient.contact,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "contact", $$v)
                                      },
                                      expression: "patient.contact"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Email",
                                      rules: _vm.emailRules,
                                      type: "email",
                                      color: "success",
                                      outlined: "",
                                      placeholder: "Email Address"
                                    },
                                    model: {
                                      value: _vm.patient.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "email", $$v)
                                      },
                                      expression: "patient.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "8", lg: "8" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Job title",
                                      rules: _vm.jobRules,
                                      color: "success",
                                      outlined: "",
                                      placeholder: "Job title"
                                    },
                                    model: {
                                      value: _vm.patient.job_title,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "job_title", $$v)
                                      },
                                      expression: "patient.job_title"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Age",
                                      type: "number",
                                      min: "0",
                                      rules: _vm.ageRules,
                                      color: "success",
                                      outlined: "",
                                      placeholder: "Age"
                                    },
                                    model: {
                                      value: _vm.patient.age,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "age", $$v)
                                      },
                                      expression: "patient.age"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-switch", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "label",
                                        fn: function() {
                                          return [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "grey--text font-weight-bold darken-5 mt-3"
                                              },
                                              [_vm._v("Are you an Employee?")]
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ]),
                                    model: {
                                      value: _vm.patient.employee,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "employee", $$v)
                                      },
                                      expression: "patient.employee"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      attach: _vm.attach,
                                      disabled: !_vm.patient.employee,
                                      items: _vm.departmentOptions,
                                      label: "Department",
                                      color: "success darken-2",
                                      chips: ""
                                    },
                                    model: {
                                      value: _vm.patient.department,
                                      callback: function($$v) {
                                        _vm.$set(_vm.patient, "department", $$v)
                                      },
                                      expression: "patient.department"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6", md: "6" }
                                },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      attach: _vm.attach,
                                      disabled: !_vm.patient.employee,
                                      items: _vm.employee_typeOptions,
                                      label: "Employee Type",
                                      color: "success darken-2",
                                      chips: ""
                                    },
                                    model: {
                                      value: _vm.patient.employee_type,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.patient,
                                          "employee_type",
                                          $$v
                                        )
                                      },
                                      expression: "patient.employee_type"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c(
                        "v-responsive",
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: {
                              src: "/app_asset/undraw_account_490v.svg",
                              width: "90%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "mt-3" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-10 d-flex justify-content-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "primary px-5 ma-2",
                              attrs: { tile: "", dark: "", depressed: "" },
                              on: { click: _vm.submitPatientInfo }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "text-lowercase caption" },
                                [_vm._v("Add Info")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "success darken-1 ma-2 px-5",
                              attrs: { tile: "", dark: "", depressed: "" },
                              on: { click: _vm.checkvitals }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "text-lowercase caption" },
                                [_vm._v("Check vitals")]
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

/***/ "./resources/js/components/vitals/PatientNew.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/vitals/PatientNew.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientNew_vue_vue_type_template_id_4b583568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientNew.vue?vue&type=template&id=4b583568&scoped=true& */ "./resources/js/components/vitals/PatientNew.vue?vue&type=template&id=4b583568&scoped=true&");
/* harmony import */ var _PatientNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientNew.vue?vue&type=script&lang=js& */ "./resources/js/components/vitals/PatientNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PatientNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientNew_vue_vue_type_template_id_4b583568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PatientNew_vue_vue_type_template_id_4b583568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b583568",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vitals/PatientNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vitals/PatientNew.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/vitals/PatientNew.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vitals/PatientNew.vue?vue&type=template&id=4b583568&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/vitals/PatientNew.vue?vue&type=template&id=4b583568&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientNew_vue_vue_type_template_id_4b583568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientNew.vue?vue&type=template&id=4b583568&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientNew.vue?vue&type=template&id=4b583568&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientNew_vue_vue_type_template_id_4b583568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientNew_vue_vue_type_template_id_4b583568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);