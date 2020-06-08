(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["excuse_duty_approval"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/approval.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExcuseDuty/approval.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data: function data() {
    return {
      verifying: false,
      authorize_dialog: false,
      modal: false,
      row: '',
      inputRules: [function (v) {
        return !!v || 'Field is required';
      }],
      dateRules: [function (v) {
        return !!v || 'Date is required';
      }],
      password: '',
      approved: {
        date: '',
        recommendation: '',
        manager: '',
        comment: ''
      }
    };
  },
  props: {
    id: [String, Number]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['Patients', 'allExcuses']), {
    excuse: function excuse() {
      var _this = this;

      return this.allExcuses.find(function (data) {
        return data.id == _this.id;
      });
    },
    getDaysLeft: function getDaysLeft() {
      if (this.excuse.start_date && this.excuse.end_date) {
        var a = moment(this.excuse.start_date);
        var b = moment(this.excuse.end_date);
        var result = b.diff(a, 'days') + " " + "days"; // 1

        return result;
      }
    },
    formatStartDate: function formatStartDate() {
      if (this.excuse.start_date) {
        return moment(this.excuse.start_date).format('MMMM Do YYYY');
      }
    },
    formatEndDate: function formatEndDate() {
      if (this.excuse.end_date) {
        return moment(this.excuse.end_date).format('MMMM Do YYYY');
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatients']), {
    goback: function goback() {
      this.$router.go(-1);
    },
    approve: function approve() {
      if (this.$refs.approvedForm.validate()) {
        this.authorize_dialog = true;
      } else {
        Swal.fire('Invalid Input', 'Enter Data before submission.', 'error');
      }
    },
    disapprove: function disapprove() {
      if (this.$refs.approvedForm.validate()) {
        this.authorize_dialog = true;
      } else {
        Swal.fire('Invalid Input', 'Enter Data before submission.', 'error');
      }
    },
    cancel_dialog: function cancel_dialog() {
      this.$refs.authorizeForm.reset();
      this.$refs.authorizeForm.resetValidation();
      this.authorize_dialog = false;
    },
    authorize: function authorize() {
      var _this2 = this;

      this.verifying = true;
      axios.post('/authorize', {
        password: this.password,
        data: this.approved,
        id: this.excuse.id
      }).then(function (response) {
        if (response.data.success) {
          _this2.verifying = false;

          _this2.cancel_dialog();

          Swal.fire('Authorized', 'Excuse Form Processed', 'success');
        }

        if (response.data.error) {
          _this2.verifying = false;

          _this2.cancel_dialog();

          Swal.fire('Unauthorized', 'Password entered does not match', 'error');
        }
      });
    }
  }),
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/approval.vue?vue&type=template&id=2d51e88a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExcuseDuty/approval.vue?vue&type=template&id=2d51e88a&scoped=true& ***!
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
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mx-2",
                  attrs: {
                    fab: "",
                    dark: "",
                    color: "success darken-2",
                    elevation: "15"
                  },
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
              _c("h6", { staticClass: "title mt-5 text-uppercase" }, [
                _vm._v("Staff Excuse Duty Form")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card",
                { staticClass: "mt-7", attrs: { flat: "" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "title green--text darken-3" },
                    [_vm._v("Staff Information")]
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
                                  label: "Staff First Name",
                                  outlined: "",
                                  rounded: "",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.excuse.patient.firstname,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.excuse.patient,
                                      "firstname",
                                      $$v
                                    )
                                  },
                                  expression: "excuse.patient.firstname"
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
                                  label: "Staff Last Name",
                                  outlined: "",
                                  rounded: "",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.excuse.patient.lastname,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.excuse.patient,
                                      "lastname",
                                      $$v
                                    )
                                  },
                                  expression: "excuse.patient.lastname"
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
                                  outlined: "",
                                  rounded: "",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.excuse.patient.phone,
                                  callback: function($$v) {
                                    _vm.$set(_vm.excuse.patient, "phone", $$v)
                                  },
                                  expression: "excuse.patient.phone"
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
                                  outlined: "",
                                  rounded: "",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.excuse.patient.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.excuse.patient, "email", $$v)
                                  },
                                  expression: "excuse.patient.email"
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
                                  label: "Gender",
                                  outlined: "",
                                  rounded: "",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.excuse.patient.gender,
                                  callback: function($$v) {
                                    _vm.$set(_vm.excuse.patient, "gender", $$v)
                                  },
                                  expression: "excuse.patient.gender"
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
                                  label: "Staff Job Title",
                                  outlined: "",
                                  rounded: "",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.excuse.patient.job_title,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.excuse.patient,
                                      "job_title",
                                      $$v
                                    )
                                  },
                                  expression: "excuse.patient.job_title"
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
              _c(
                "v-form",
                { ref: "excuseForm" },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "title green--text darken-3" },
                        [_vm._v("Staff Occupational Information")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            { staticClass: "no-gutters" },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pl-5",
                                  attrs: { cols: "12", lg: "5" }
                                },
                                [
                                  _c("h5", { staticClass: "pt-4" }, [
                                    _vm._v("Department / Unit :")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "7" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      rounded: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.excuse.patient.department,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.excuse.patient,
                                          "department",
                                          $$v
                                        )
                                      },
                                      expression: "excuse.patient.department"
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
                            { staticClass: "no-gutters" },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pl-5",
                                  attrs: { cols: "12", lg: "5" }
                                },
                                [
                                  _c("h5", { staticClass: "pt-1" }, [
                                    _vm._v(
                                      "Have you already taken your annual leave?"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "7" } },
                                [
                                  _c(
                                    "v-radio-group",
                                    {
                                      staticClass: "mt-0 pl-3",
                                      attrs: { row: "", readonly: "" },
                                      model: {
                                        value: _vm.excuse.annual_leave,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.excuse,
                                            "annual_leave",
                                            $$v
                                          )
                                        },
                                        expression: "excuse.annual_leave"
                                      }
                                    },
                                    [
                                      _c("v-radio", {
                                        attrs: {
                                          label: "Have taken part",
                                          value: "Part",
                                          color: "success darken-2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-radio", {
                                        attrs: {
                                          label: "Have taken all",
                                          value: "Full",
                                          color: "success darken-2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-radio", {
                                        attrs: {
                                          label: "Have not taken any",
                                          value: "None",
                                          color: "success darken-2"
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { attrs: { inset: "" } }),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "title green--text darken-3" },
                        [_vm._v("Patient Request Information")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            { staticClass: "no-gutters" },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pl-5 pt-3",
                                  attrs: { cols: "12", lg: "3" }
                                },
                                [
                                  _c("h5", { staticClass: "pt-1" }, [
                                    _vm._v("Reason of Request")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "9" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      placeholder: "Type here....",
                                      readonly: "",
                                      outlined: "",
                                      rounded: "",
                                      label: "Reason"
                                    },
                                    model: {
                                      value: _vm.excuse.reason,
                                      callback: function($$v) {
                                        _vm.$set(_vm.excuse, "reason", $$v)
                                      },
                                      expression: "excuse.reason"
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
                                      label: "Start Date",
                                      readonly: "",
                                      outlined: "",
                                      rounded: "",
                                      value: _vm.formatStartDate
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "End Date",
                                      readonly: "",
                                      outlined: "",
                                      rounded: "",
                                      value: _vm.formatEndDate
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Number of Days",
                                      outlined: "",
                                      rounded: "",
                                      value: _vm.getDaysLeft,
                                      readonly: ""
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-form",
                { ref: "approvedForm" },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "title green--text darken-3" },
                        [_vm._v("Recommendation by Clinic Manager")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-textarea", {
                            attrs: {
                              label: "Comments",
                              outlined: "",
                              placeholder: "Include comments here...."
                            },
                            model: {
                              value: _vm.approved.comment,
                              callback: function($$v) {
                                _vm.$set(_vm.approved, "comment", $$v)
                              },
                              expression: "approved.comment"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Manager's Full Name",
                                      rules: _vm.inputRules,
                                      outlined: "",
                                      rounded: ""
                                    },
                                    model: {
                                      value: _vm.approved.manager,
                                      callback: function($$v) {
                                        _vm.$set(_vm.approved, "manager", $$v)
                                      },
                                      expression: "approved.manager"
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
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "dialog",
                                      attrs: {
                                        "return-value": _vm.approved.date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.approved,
                                            "date",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.approved,
                                            "date",
                                            $event
                                          )
                                        }
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      label: "Date",
                                                      placeholder:
                                                        "26th, January 2030",
                                                      rules: _vm.dateRules,
                                                      outlined: "",
                                                      rounded: ""
                                                    },
                                                    model: {
                                                      value: _vm.approved.date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.approved,
                                                          "date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "approved.date"
                                                    }
                                                  },
                                                  on
                                                )
                                              )
                                            ]
                                          }
                                        }
                                      ]),
                                      model: {
                                        value: _vm.modal,
                                        callback: function($$v) {
                                          _vm.modal = $$v
                                        },
                                        expression: "modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.approved.date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.approved,
                                                "date",
                                                $$v
                                              )
                                            },
                                            expression: "approved.date"
                                          }
                                        },
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                color: "primary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.modal = false
                                                }
                                              }
                                            },
                                            [_vm._v("Cancel")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                color: "primary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.$refs.dialog.save(
                                                    _vm.approved.date
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("OK")]
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
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    align: "center"
                                  }
                                },
                                [
                                  _c("h5", [_vm._v("Application Recommended")]),
                                  _vm._v(" "),
                                  _c(
                                    "v-radio-group",
                                    {
                                      staticClass: "mt-0",
                                      staticStyle: {
                                        "margin-left": "195px !important"
                                      },
                                      attrs: { rules: _vm.inputRules, row: "" },
                                      model: {
                                        value: _vm.approved.recommendation,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.approved,
                                            "recommendation",
                                            $$v
                                          )
                                        },
                                        expression: "approved.recommendation"
                                      }
                                    },
                                    [
                                      _c("v-radio", {
                                        attrs: { label: "Yes", value: "1" }
                                      }),
                                      _vm._v(" "),
                                      _c("v-radio", {
                                        attrs: {
                                          label: "No",
                                          value: "0",
                                          color: "red"
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
                            {
                              staticClass: "pa-8",
                              attrs: { justify: "center" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success darken-2",
                                    rounded: "",
                                    large: "",
                                    elevation: "15"
                                  },
                                  on: { click: _vm.approve }
                                },
                                [
                                  _c("span", { staticClass: "subtitle-2" }, [
                                    _vm._v("Approve")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ml-5",
                                  attrs: {
                                    color: "red darken-3",
                                    dark: "",
                                    rounded: "",
                                    large: "",
                                    elevation: "15"
                                  },
                                  on: { click: _vm.disapprove }
                                },
                                [
                                  _c("span", { staticClass: "subtitle-2" }, [
                                    _vm._v("Disapprove")
                                  ])
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
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "500" },
              model: {
                value: _vm.authorize_dialog,
                callback: function($$v) {
                  _vm.authorize_dialog = $$v
                },
                expression: "authorize_dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    {
                      staticClass:
                        "subtitle-1 red--text darken-3 font-weight-bold"
                    },
                    [_vm._v("Authorize?")]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pa-3 px-8" },
                    [
                      _c(
                        "v-form",
                        { ref: "authorizeForm" },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Password",
                              color: "success darken-2",
                              dense: "",
                              type: "password",
                              loading: _vm.verifying,
                              outlined: "",
                              placeholder:
                                "Enter your password for authorization"
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
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
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: { click: _vm.cancel_dialog }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: { click: _vm.authorize }
                        },
                        [_vm._v("Authorize")]
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

/***/ "./resources/js/components/ExcuseDuty/approval.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/approval.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _approval_vue_vue_type_template_id_2d51e88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval.vue?vue&type=template&id=2d51e88a&scoped=true& */ "./resources/js/components/ExcuseDuty/approval.vue?vue&type=template&id=2d51e88a&scoped=true&");
/* harmony import */ var _approval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval.vue?vue&type=script&lang=js& */ "./resources/js/components/ExcuseDuty/approval.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _approval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _approval_vue_vue_type_template_id_2d51e88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _approval_vue_vue_type_template_id_2d51e88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d51e88a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExcuseDuty/approval.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExcuseDuty/approval.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/approval.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./approval.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/approval.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExcuseDuty/approval.vue?vue&type=template&id=2d51e88a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/approval.vue?vue&type=template&id=2d51e88a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_vue_vue_type_template_id_2d51e88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./approval.vue?vue&type=template&id=2d51e88a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/approval.vue?vue&type=template&id=2d51e88a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_vue_vue_type_template_id_2d51e88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_vue_vue_type_template_id_2d51e88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);