(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient_referrals_form"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Referrals/Referrals.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Referrals/Referrals.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'App',
  data: function data() {
    return {
      loading_dialog: false,
      report_dialog: false,
      surgery: '',
      specialist_name: '',
      hospital_name: 'Medix Digital Hospital',
      referred_date: moment().format("MMMM Do, YYYY"),
      referred_time: moment().format("LT"),
      referral: {
        reason: '',
        surgery: '',
        diagnosis: '',
        medication: '',
        to_hospital: '',
        to_doctor: ''
      },
      inputRules: [function (v) {
        return !!v || 'Field is required';
      }],
      report: null
    };
  },
  props: {
    id: [Number]
  },
  watch: {
    getUser: function getUser() {
      if (this.getUser) {
        this.specialist_name = this.getUser.title + " " + this.getUser.firstname + " " + this.getUser.lastname;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['Patients', 'getUser']), {
    patient: function patient() {
      var _this = this;

      return this.Patients.find(function (data) {
        return data.id == _this.id;
      });
    },
    getFullName: function getFullName() {
      if (this.getUser) {
        return this.getUser.title + " " + this.getUser.firstname + " " + this.getUser.lastname;
      }
    },
    patient_full_name: function patient_full_name() {
      if (this.patient) {
        return this.patient.title + " " + this.patient.firstname + " " + this.patient.lastname;
      }
    },
    referrer: function referrer() {
      if (this.report !== null) {
        return this.report.user.title + " " + this.report.user.firstname + " " + this.report.user.lastname;
      }
    },
    getDate: function getDate() {
      if (this.report !== null) {
        return moment(this.report.referred_date).format('MMMM Do YYYY');
      }
    },
    getTime: function getTime() {
      if (this.patient) {
        return moment(this.report.referred_date).format('LT');
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatients', 'fetchUser']), {
    print_form: function print_form() {
      window.print();
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    submitReport: function submitReport() {
      var _this2 = this;

      if (this.$refs.referralForm.validate()) {
        this.loading_dialog = true;
        axios.post('/submit_referral', {
          id: this.patient.id,
          data: this.referral,
          hospital: this.hospital_name
        }).then(function (response) {
          if (response.data.success) {
            _this2.loading_dialog = false;
            _this2.report = response.data.data;
            Swal.fire('Form Completed', 'Referral Submission Form Completed', 'success');
          }
        });
      } else {
        Swal.fire('Input Error', 'Enter the remaining field before submission', 'error');
      }
    },
    view_report: function view_report() {
      if (this.report !== null) {
        this.report_dialog = true;
      } else {
        Swal.fire('No Data Entry', 'Enter the data before submission', 'error');
      }
    }
  }),
  mounted: function mounted() {
    this.fetchPatients();
    this.fetchUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Referrals/Referrals.vue?vue&type=template&id=82055d3c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Referrals/Referrals.vue?vue&type=template&id=82055d3c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-container",
        [
          _c(
            "v-form",
            { ref: "referralForm" },
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { fab: "", dark: "", color: "success darken-2" },
                      on: { click: _vm.goback }
                    },
                    [
                      _c("v-icon", { attrs: { dark: "" } }, [
                        _vm._v("mdi-chevron-double-left")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "flex-column", attrs: { align: "center" } },
                [
                  _c("v-img", {
                    attrs: { src: "/app_asset/medix_full.png", width: "200" }
                  }),
                  _vm._v(" "),
                  _c(
                    "h3",
                    {
                      staticClass:
                        "subtitle-2 mt-2 text-uppercase font-weight-bold"
                    },
                    [_vm._v("Patient Referral Form")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "pa-3", attrs: { outlined: "" } },
                [
                  _vm.patient
                    ? _c(
                        "v-card",
                        {
                          staticClass: "mt-5",
                          attrs: { flat: "", outlined: "" }
                        },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold success--text darken-2"
                            },
                            [_vm._v("Patient Information")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Patient's Full Name",
                                          color: "success darken-2",
                                          outlined: "",
                                          rounded: "",
                                          readonly: "",
                                          value: _vm.getFullName
                                        }
                                      })
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
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Patient's Contact",
                                          color: "success darken-2",
                                          outlined: "",
                                          rounded: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.patient.phone,
                                          callback: function($$v) {
                                            _vm.$set(_vm.patient, "phone", $$v)
                                          },
                                          expression: "patient.phone"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Patient's Email",
                                          color: "success darken-2",
                                          outlined: "",
                                          rounded: "",
                                          readonly: ""
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
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Patient's Age",
                                          color: "success darken-2",
                                          outlined: "",
                                          rounded: "",
                                          readonly: ""
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
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Patient's Gender",
                                          color: "success darken-2",
                                          outlined: "",
                                          rounded: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.patient.gender,
                                          callback: function($$v) {
                                            _vm.$set(_vm.patient, "gender", $$v)
                                          },
                                          expression: "patient.gender"
                                        }
                                      })
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
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Patient's Job Title",
                                          color: "success darken-2",
                                          outlined: "",
                                          rounded: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.patient.job_title,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.patient,
                                              "job_title",
                                              $$v
                                            )
                                          },
                                          expression: "patient.job_title"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.patient.department
                                    ? _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient Department",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: ""
                                            },
                                            model: {
                                              value: _vm.patient.department,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.patient,
                                                  "department",
                                                  $$v
                                                )
                                              },
                                              expression: "patient.department"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.patient.employee_type
                                    ? _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Type of Employee",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: ""
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
                                              expression:
                                                "patient.employee_type"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-divider", { attrs: { inset: "" } }),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-title",
                        {
                          staticClass:
                            "subtitle-1 font-weight-bold success--text darken-2"
                        },
                        [_vm._v("Patient Medical Information")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-textarea", {
                                    attrs: {
                                      label: "Reason for Referral",
                                      color: "success darken-2",
                                      rules: _vm.inputRules,
                                      outlined: "",
                                      height: "150"
                                    },
                                    model: {
                                      value: _vm.referral.reason,
                                      callback: function($$v) {
                                        _vm.$set(_vm.referral, "reason", $$v)
                                      },
                                      expression: "referral.reason"
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
                                  _c("h5", { staticClass: "pl-5" }, [
                                    _vm._v("Undergone Surgery?")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-radio-group",
                                    {
                                      staticClass: "mt-0 pl-3",
                                      attrs: { row: "", rules: _vm.inputRules },
                                      model: {
                                        value: _vm.referral.surgery,
                                        callback: function($$v) {
                                          _vm.$set(_vm.referral, "surgery", $$v)
                                        },
                                        expression: "referral.surgery"
                                      }
                                    },
                                    [
                                      _c("v-radio", {
                                        attrs: {
                                          label: "Yes",
                                          value: "1",
                                          color: "success darken-2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-radio", {
                                        attrs: {
                                          label: "No",
                                          value: "0",
                                          colr: "red"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Diagnosis",
                                      rounded: "",
                                      outlined: "",
                                      color: "success darken-2",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.referral.diagnosis,
                                      callback: function($$v) {
                                        _vm.$set(_vm.referral, "diagnosis", $$v)
                                      },
                                      expression: "referral.diagnosis"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Medication",
                                      rules: _vm.inputRules,
                                      rounded: "",
                                      outlined: "",
                                      color: "success darken-2"
                                    },
                                    model: {
                                      value: _vm.referral.medication,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.referral,
                                          "medication",
                                          $$v
                                        )
                                      },
                                      expression: "referral.medication"
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
                  _c("v-divider", { attrs: { inset: "" } }),
                  _vm._v(" "),
                  _vm.getUser
                    ? _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold success--text darken-2"
                            },
                            [_vm._v("Referred By")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Referred By",
                                          outlined: "",
                                          rounded: "",
                                          color: "success darken-2",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.specialist_name,
                                          callback: function($$v) {
                                            _vm.specialist_name = $$v
                                          },
                                          expression: "specialist_name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Referral Contact",
                                          value: _vm.getUser.phone,
                                          outlined: "",
                                          rounded: "",
                                          color: "success darken-2"
                                        }
                                      })
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
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Hospital",
                                          outlined: "",
                                          rounded: "",
                                          readonly: "",
                                          color: "success darken-2"
                                        },
                                        model: {
                                          value: _vm.hospital_name,
                                          callback: function($$v) {
                                            _vm.hospital_name = $$v
                                          },
                                          expression: "hospital_name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "3" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Referral Date",
                                          outlined: "",
                                          rounded: "",
                                          readonly: "",
                                          color: "success darken-2"
                                        },
                                        model: {
                                          value: _vm.referred_date,
                                          callback: function($$v) {
                                            _vm.referred_date = $$v
                                          },
                                          expression: "referred_date"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "3" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Referral Time",
                                          outlined: "",
                                          rounded: "",
                                          readonly: "",
                                          color: "success darken-2"
                                        },
                                        model: {
                                          value: _vm.referred_time,
                                          callback: function($$v) {
                                            _vm.referred_time = $$v
                                          },
                                          expression: "referred_time"
                                        }
                                      })
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
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Doctor Referred To",
                                          rules: _vm.inputRules,
                                          outlined: "",
                                          rounded: "",
                                          color: "success darken-2"
                                        },
                                        model: {
                                          value: _vm.referral.to_doctor,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.referral,
                                              "to_doctor",
                                              $$v
                                            )
                                          },
                                          expression: "referral.to_doctor"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Hospital Referred To",
                                          rules: _vm.inputRules,
                                          outlined: "",
                                          rounded: "",
                                          color: "success darken-2"
                                        },
                                        model: {
                                          value: _vm.referral.to_hospital,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.referral,
                                              "to_hospital",
                                              $$v
                                            )
                                          },
                                          expression: "referral.to_hospital"
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
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "px-5 mx-2",
                                  attrs: {
                                    dark: "",
                                    color: "info darken-1",
                                    rounded: "",
                                    elevation: "15"
                                  },
                                  on: { click: _vm.view_report }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { left: "", size: "20" } },
                                    [_vm._v("mdi-flash-circle")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [_vm._v("View Report")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "px-5 mx-2",
                                  attrs: {
                                    dark: "",
                                    color: "success darken-2",
                                    rounded: "",
                                    elevation: "15"
                                  },
                                  on: { click: _vm.submitReport }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [_vm._v("Submit Details")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
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
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
            id: "print_dialog"
          },
          model: {
            value: _vm.report_dialog,
            callback: function($$v) {
              _vm.report_dialog = $$v
            },
            expression: "report_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { staticClass: "print_preview_toolbar", attrs: { flat: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.report_dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-title",
                    {
                      staticClass: "subtitle-2 font-weight-bold text-uppercase"
                    },
                    [_vm._v("Referral Report")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        { attrs: { icon: "", color: "pink" } },
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "success darken-2" } },
                            [_vm._v("mdi-printer")]
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
              _c("v-divider", { attrs: { inset: "" } }),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-form",
                    { ref: "referralForm" },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "flex-column",
                          attrs: { align: "center" }
                        },
                        [
                          _c("v-img", {
                            attrs: {
                              src: "/app_asset/medix_full.png",
                              width: "200"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "h3",
                            {
                              staticClass:
                                "title mt-2 text-uppercase font-weight-bold"
                            },
                            [_vm._v("Patient Referral Form")]
                          ),
                          _vm._v(" "),
                          _c(
                            "h3",
                            {
                              staticClass:
                                "subtitle-2 mt-0 text-uppercase font-weight-bold"
                            },
                            [_vm._v("Contact: +233 54 043 0893")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.patient
                        ? _c(
                            "v-card",
                            {
                              staticClass: "mt-5",
                              attrs: { flat: "", outlined: "" }
                            },
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 font-weight-bold success--text darken-2"
                                },
                                [_vm._v("Patient Information")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient's Full Name",
                                              color: "success darken-2",
                                              value: _vm.patient_full_name,
                                              outlined: "",
                                              rounded: "",
                                              readonly: ""
                                            }
                                          })
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
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient's Contact",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: "",
                                              value: _vm.patient.phone
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient's Email",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: "",
                                              value: _vm.patient.email
                                            }
                                          })
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
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient's Age",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: "",
                                              value: _vm.patient.age
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient's Gender",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: "",
                                              value: _vm.patient.gender
                                            }
                                          })
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
                                        { attrs: { cols: "12", lg: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Patient's Job Title",
                                              color: "success darken-2",
                                              outlined: "",
                                              rounded: "",
                                              readonly: "",
                                              value: _vm.patient.job_title
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.patient
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "4" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Patient Department",
                                                  color: "success darken-2",
                                                  outlined: "",
                                                  rounded: "",
                                                  readonly: "",
                                                  value: _vm.patient.department
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.patient
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "4" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Type of Employee",
                                                  color: "success darken-2",
                                                  outlined: "",
                                                  rounded: "",
                                                  readonly: "",
                                                  value:
                                                    _vm.patient.employee_type
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.report !== null
                        ? _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 font-weight-bold success--text darken-2"
                                },
                                [_vm._v("Patient Medical Information")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              label: "Reason for Referral",
                                              readonly: "",
                                              color: "success darken-2",
                                              outlined: "",
                                              height: "150",
                                              value: _vm.report.referred_reason
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("h5", { staticClass: "pl-5" }, [
                                          _vm._v(
                                            "Undergone Surgery?\n                                            "
                                          ),
                                          _vm.report.surgery === 1
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold ml-2"
                                                },
                                                [_vm._v("Yes")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.report.surgery === 0
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold ml-2"
                                                },
                                                [_vm._v("No")]
                                              )
                                            : _vm._e()
                                        ])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Diagnosis",
                                              rounded: "",
                                              outlined: "",
                                              readonly: "",
                                              color: "success darken-2",
                                              value: _vm.report.diagnosis
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Medication",
                                              rounded: "",
                                              outlined: "",
                                              readonly: "",
                                              color: "success darken-2",
                                              value: _vm.report.medication
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _vm.report !== null
                        ? _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 font-weight-bold success--text darken-2"
                                },
                                [_vm._v("Referred By")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Referred By",
                                              outlined: "",
                                              readonly: "",
                                              rounded: "",
                                              color: "success darken-2",
                                              value: _vm.referrer
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Referral Contact",
                                              outlined: "",
                                              readonly: "",
                                              rounded: "",
                                              color: "success darken-2",
                                              value: _vm.report.user.phone
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.report !== null
                                    ? _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Hospital",
                                                  outlined: "",
                                                  rounded: "",
                                                  value:
                                                    _vm.report.referred_from,
                                                  readonly: "",
                                                  color: "success darken-2"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "3" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Referral Date",
                                                  outlined: "",
                                                  rounded: "",
                                                  readonly: "",
                                                  color: "success darken-2",
                                                  value: _vm.getDate
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "3" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Referral Time",
                                                  outlined: "",
                                                  rounded: "",
                                                  readonly: "",
                                                  color: "success darken-2",
                                                  value: _vm.getTime
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.report !== null
                                    ? _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Doctor Referred To",
                                                  value: _vm.report.referred_to,
                                                  readonly: "",
                                                  outlined: "",
                                                  rounded: "",
                                                  color: "success darken-2"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Hospital Referred To",
                                                  value:
                                                    _vm.report
                                                      .referred_hospital,
                                                  readonly: "",
                                                  outlined: "",
                                                  rounded: "",
                                                  color: "success darken-2"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "px-5 mx-2 print_btn",
                                      attrs: {
                                        dark: "",
                                        color: "info darken-1",
                                        rounded: "",
                                        elevation: "15"
                                      },
                                      on: { click: _vm.print_form }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { left: "", size: "20" } },
                                        [_vm._v("mdi-printer")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold"
                                        },
                                        [_vm._v("Print Report")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
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
        "v-dialog",
        {
          attrs: { "hide-overlay": "", persistent: "", width: "300" },
          model: {
            value: _vm.loading_dialog,
            callback: function($$v) {
              _vm.loading_dialog = $$v
            },
            expression: "loading_dialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { color: "teal", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("submitting data. Please wait...")]
                  ),
                  _vm._v(" "),
                  _c("v-progress-linear", {
                    staticClass: "mb-0",
                    attrs: { indeterminate: "", color: "white" }
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

/***/ "./resources/js/components/Referrals/Referrals.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Referrals/Referrals.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Referrals_vue_vue_type_template_id_82055d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Referrals.vue?vue&type=template&id=82055d3c&scoped=true& */ "./resources/js/components/Referrals/Referrals.vue?vue&type=template&id=82055d3c&scoped=true&");
/* harmony import */ var _Referrals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Referrals.vue?vue&type=script&lang=js& */ "./resources/js/components/Referrals/Referrals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Referrals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Referrals_vue_vue_type_template_id_82055d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Referrals_vue_vue_type_template_id_82055d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82055d3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Referrals/Referrals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Referrals/Referrals.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Referrals/Referrals.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Referrals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Referrals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Referrals/Referrals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Referrals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Referrals/Referrals.vue?vue&type=template&id=82055d3c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Referrals/Referrals.vue?vue&type=template&id=82055d3c&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Referrals_vue_vue_type_template_id_82055d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Referrals.vue?vue&type=template&id=82055d3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Referrals/Referrals.vue?vue&type=template&id=82055d3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Referrals_vue_vue_type_template_id_82055d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Referrals_vue_vue_type_template_id_82055d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);