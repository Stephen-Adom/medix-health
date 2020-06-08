(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment_canceled_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
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


var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading_dialog: false
    };
  },
  props: {
    id: [Number, String]
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('YY-MMM-Do');
    },
    formatDob: function formatDob(value) {
      return moment(value).format('YYYY MMM, Do');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['canceled_appointments']), {
    appointment: function appointment() {
      var _this = this;

      return this.canceled_appointments.find(function (appointment) {
        return appointment.id == _this.id;
      });
    },
    getImage: function getImage() {
      if (this.appointment) {
        if (this.appointment.patient.image) {
          return '/storage/patients/profiles/' + this.appointment.patient.image;
        } else {
          if (this.appointment.patient.gender === 'Male') {
            return '/app_asset/male_avatar.png';
          } else {
            return '/app_asset/undraw_female_avatar_l3ey.png';
          }
        }
      }
    },
    getSpecialistImage: function getSpecialistImage() {
      if (this.appointment) {
        if (this.appointment.user.image) {
          return '/storage/profiles/' + this.appointment.user.image;
        } else {
          if (this.appointment.user.gender === 'Male') {
            return '/app_asset/male-profile-2.jpg';
          } else {
            return '/app_asset/female-avatar.jpg';
          }
        }
      }
    },
    getStatus: function getStatus() {
      if (this.appointment) {
        if (this.appointment.patient.referred === 0) {
          return 'Active';
        } else {
          return 'Referred';
        }
      }
    },
    formatPhone: function formatPhone() {
      if (this.appointment) {
        return '(+233)' + ' ' + this.appointment.patient.phone.slice(1, 10);
      }
    },
    formatAppointmentStatus: function formatAppointmentStatus() {
      if (this.appointment) {
        if (this.appointment.completed === 0) {
          return 'pending';
        } else {
          return 'completed';
        }
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchCanceledAppointment']), {
    goback: function goback() {
      this.$router.go(-1);
    },
    profile_details: function profile_details() {
      this.$router.push({
        name: 'patient_details',
        params: {
          id: this.appointment.patient.id
        }
      });
    },
    delete_appointment: function delete_appointment() {
      var _this2 = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The selected appointment will be deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this2.loading_dialog = true;
          axios["delete"]('/api/delete_appointment/' + _this2.appointment.id).then(function (response) {
            if (response.data.success) {
              _this2.goback();

              _this2.fetchCanceledAppointment();

              _this2.$refs.topProgress.done();

              _this2.loading_dialog = false;

              var index = _this2.canceled_appointments.indexOf(_this2.appointment);

              _this2.canceled_appointments.splice(index, 1);

              swalWithBootstrapButtons.fire('Deleted!', 'Appointment Deleted.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this2.$refs.topProgress.fail();

          _this2.loading_dialog = false;
          swalWithBootstrapButtons.fire('Reverted', 'The Application Process is reversed :)', 'info');
        }
      });
    }
  }),
  mounted: function mounted() {
    var _this3 = this;

    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this3.$refs.topProgress.done();
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        { staticClass: "px-5 d-flex flex-column mt-3" },
        [
          _c(
            "section",
            { staticClass: "d-flex" },
            [
              _c("span", { staticClass: "subtitle-1 font-weight-bold mt-2" }, [
                _vm._v("User Profile")
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "red darken-2 px-5 ml-auto",
                  attrs: { tile: "", depressed: "", dark: "" },
                  on: { click: _vm.goback }
                },
                [_c("span", { staticClass: "caption" }, [_vm._v("back")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            { staticClass: "mt-4", attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass:
                            "d-flex flex-column justify-center align-center",
                          attrs: { cols: "3" }
                        },
                        [
                          _c(
                            "v-avatar",
                            { attrs: { size: "120" } },
                            [_c("v-img", { attrs: { src: _vm.getImage } })],
                            1
                          ),
                          _vm._v(" "),
                          _vm.appointment
                            ? _c(
                                "h5",
                                {
                                  staticClass:
                                    "subtitle-1 font-weight-bold mt-2 "
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.appointment.patient.title) +
                                      " " +
                                      _vm._s(
                                        _vm.appointment.patient.firstname
                                      ) +
                                      " " +
                                      _vm._s(_vm.appointment.patient.lastname)
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "h5",
                            { staticClass: "subtitle-1 font-weight-bold" },
                            [_vm._v("Status: " + _vm._s(_vm.getStatus))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "grey--text font-weight-light subtitle-2 mb-1"
                            },
                            [_vm._v("User Profile")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "4" } }, [
                                _c("h5", { staticClass: "subtitle-2" }, [
                                  _vm._v("Gender: "),
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.appointment.patient.gender
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "4" } }, [
                                _c("h5", { staticClass: "subtitle-2" }, [
                                  _vm._v("Date of Birth: "),
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatDob")(
                                                _vm.appointment.patient.dob
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "4" } }, [
                                _c("h5", { staticClass: "subtitle-2" }, [
                                  _vm._v("Phone Number: "),
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v(_vm._s(_vm.formatPhone))]
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "4" } }, [
                                _c("h5", { staticClass: "subtitle-2" }, [
                                  _vm._v("Email: "),
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.appointment.patient.email
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "4" } }, [
                                _c("h5", { staticClass: "subtitle-2" }, [
                                  _vm._v("Job Title: "),
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.appointment.patient.job_title
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "4" } }, [
                                _c("h5", { staticClass: "subtitle-2" }, [
                                  _vm._v("Address: "),
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.appointment.patient.address
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "mt-4" },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "success darken-2 px-7",
                                      attrs: {
                                        rounded: "",
                                        elevation: "15",
                                        depressed: "",
                                        dark: ""
                                      },
                                      on: { click: _vm.profile_details }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { size: "20", left: "" } },
                                        [_vm._v("mdi-account-details")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("profile details")
                                      ])
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
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "px-5 d-flex flex-column mt-5" },
        [
          _c("span", { staticClass: "subtitle-1 font-weight-bold" }, [
            _vm._v("User Appointment Information")
          ]),
          _vm._v(" "),
          _c(
            "v-card",
            { staticClass: "mt-4", attrs: { outlined: "" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "info px-7",
                      attrs: { rounded: "", depressed: "", dark: "" }
                    },
                    [
                      _c("span", { staticClass: "caption" }, [
                        _vm._v("Appointment Details")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c(
                                  "th",
                                  {
                                    staticClass:
                                      "text-left subtitle-2 font-weight-bold black--text"
                                  },
                                  [_vm._v("Specialist Name")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass:
                                      "text-center subtitle-2 font-weight-bold black--text"
                                  },
                                  [_vm._v("Purpose")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass:
                                      "text-center subtitle-2 font-weight-bold black--text"
                                  },
                                  [_vm._v("Date & Time")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass:
                                      "text-center subtitle-2 font-weight-bold black--text"
                                  },
                                  [_vm._v("Completed")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass:
                                      "text-center subtitle-2 font-weight-bold black--text"
                                  },
                                  [_vm._v("Status")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass:
                                      "text-center subtitle-2 font-weight-bold black--text"
                                  },
                                  [_vm._v("Action")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "d-flex" },
                                  [
                                    _c(
                                      "v-avatar",
                                      { attrs: { size: "40" } },
                                      [
                                        _c("v-img", {
                                          attrs: { src: _vm.getSpecialistImage }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.appointment
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold black--text mt-3 ml-3"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.appointment.user.title
                                              ) +
                                                " " +
                                                _vm._s(
                                                  _vm.appointment.user.firstname
                                                ) +
                                                " " +
                                                _vm._s(
                                                  _vm.appointment.user.lastname
                                                )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold mt-3 ml-3"
                                        },
                                        [_vm._v(_vm._s(_vm.appointment.reason))]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm.appointment
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold mt-3 ml-3"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatDate")(
                                                _vm.appointment.scheduled_date
                                              )
                                            ) +
                                              " " +
                                              _vm._s(
                                                _vm._f("formatTime")(
                                                  _vm.appointment.scheduled_time
                                                )
                                              )
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold mt-3 ml-3"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.formatAppointmentStatus)
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold mt-3 ml-3"
                                    },
                                    [_vm._v("Deleted")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-center" },
                                  [
                                    _c(
                                      "v-tooltip",
                                      {
                                        attrs: { top: "" },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    {
                                                      staticClass: "ma-2",
                                                      attrs: {
                                                        fab: "",
                                                        dark: "",
                                                        color: "red darken-3",
                                                        "x-small": ""
                                                      },
                                                      on: {
                                                        click:
                                                          _vm.delete_appointment
                                                      }
                                                    },
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      { attrs: { size: "15" } },
                                                      [_vm._v("mdi-delete")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ])
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("span", { staticClass: "caption" }, [
                                          _vm._v("delete")
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        },
                        proxy: true
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
            { attrs: { color: "primary", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("span", { staticClass: "caption font-italic" }, [
                    _vm._v("updating...")
                  ]),
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

/***/ "./resources/js/components/appointments/Appointment_Canceled_Details.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/appointments/Appointment_Canceled_Details.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Appointment_Canceled_Details_vue_vue_type_template_id_78fa079c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c& */ "./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c&");
/* harmony import */ var _Appointment_Canceled_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Appointment_Canceled_Details.vue?vue&type=script&lang=js& */ "./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Appointment_Canceled_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Appointment_Canceled_Details_vue_vue_type_template_id_78fa079c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Appointment_Canceled_Details_vue_vue_type_template_id_78fa079c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointments/Appointment_Canceled_Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_Canceled_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment_Canceled_Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_Canceled_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_Canceled_Details_vue_vue_type_template_id_78fa079c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Appointment_Canceled_Details.vue?vue&type=template&id=78fa079c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_Canceled_Details_vue_vue_type_template_id_78fa079c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_Canceled_Details_vue_vue_type_template_id_78fa079c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);