(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upcoming_appointment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Upcoming.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Upcoming.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
      loading_dialog: false,
      reschedule_dialog: false,
      reschedule_patient: null,
      schedules: [],
      timings: [],
      appointment_day: null,
      appointment_time: null
    };
  },
  created: function created() {
    this.getDoctorSchedule();
  },
  watch: {
    appointment_day: function appointment_day() {
      if (this.appointment_day !== null) {
        this.getDoctorTime(this.appointment_day);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this.$refs.topProgress.done();
    }, 1000);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['upcoming_appointments'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchUpcomingAppointment', 'fetchCanceledAppointment']), {
    appontment_details: function appontment_details(appointment) {
      this.$router.push({
        name: 'appointment_upcoming_details',
        params: {
          id: appointment.id
        }
      });
    },
    getImage: function getImage(patient) {
      if (patient.image) {
        return '/patients/profiles/' + patient.image;
      } else {
        if (patient.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
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
    },
    completeAppointment: function completeAppointment(item) {
      var _this2 = this;

      var index = this.appointments.indexOf(item);
      this.appointments.splice(index, 1);
      axios.patch('/api/complete_appointment/' + item.id).then(function (response) {
        if (response.data.success) {
          _this2.fetchCompletedAppointment();

          _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
            icon: 'success',
            title: 'Appointment completed'
          });
        }
      });
    },
    getDoctorSchedule: function getDoctorSchedule() {
      var _this3 = this;

      axios.get('/my_schedules').then(function (response) {
        _this3.schedules = response.data.schedule;
      });
    },
    getDoctorTime: function getDoctorTime(id) {
      var _this4 = this;

      axios.post('/api/doctor_time', {
        id: id
      }).then(function (response) {
        if (response.data.no_timings) {
          _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
            icon: 'info',
            title: 'No Available time'
          });
        }

        if (response.data.timing) {
          _this4.timings = response.data.timing;
        }
      });
    },
    closeSchedule: function closeSchedule() {
      this.reschedule_dialog = false;
      this.appointment_day = null;
      this.appointment_time = null;
      this.timings = [];
    },
    reschedule_appointment: function reschedule_appointment(appointment) {
      this.reschedule_patient = appointment;

      if (this.reschedule_patient) {
        this.reschedule_dialog = true;
      }
    },
    cancel_appointment: function cancel_appointment(appointment) {
      var _this5 = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The selected appointment will be cancel!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, cancel!',
        cancelButtonText: 'No, close!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this5.loading_dialog = true;
          axios.patch('/api/cancel_appointment/' + appointment.id).then(function (response) {
            if (response.data.success) {
              _this5.fetchUpcomingAppointment();

              _this5.fetchCanceledAppointment();

              _this5.$refs.topProgress.done();

              _this5.loading_dialog = false;

              var index = _this5.upcoming_appointments.indexOf(appointment);

              _this5.upcoming_appointments.splice(index, 1);

              swalWithBootstrapButtons.fire('Canceled!', 'Appointment Canceled.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this5.$refs.topProgress.fail();

          _this5.loading_dialog = false;
          swalWithBootstrapButtons.fire('Reverted', 'The Application Process is reversed :)', 'info');
        }
      });
    },
    accept_appointment: function accept_appointment(appointment) {
      var _this6 = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The selected appointment will be accepted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Accept!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this6.loading_dialog = true;
          axios.patch('/api/accept_appointment/' + appointment.id).then(function (response) {
            if (response.data.success) {
              _this6.fetchUpcomingAppointment();

              _this6.$refs.topProgress.done();

              _this6.loading_dialog = false;

              var index = _this6.upcoming_appointments.indexOf(appointment);

              _this6.upcoming_appointments.splice(index, 1);

              swalWithBootstrapButtons.fire('Accepted!', 'Appointment is prepared for Examination.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this6.$refs.topProgress.fail();

          _this6.loading_dialog = false;
          swalWithBootstrapButtons.fire('Reverted', 'The Application Process is reversed :)', 'info');
        }
      });
    },
    newBooked: function newBooked() {
      var _this7 = this;

      if (this.appointment_time === null && this.appointment_time === null) {
        Swal.fire('Data Error', 'No Time and Date Selected', 'error');
      } else {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.patch('/api/reschedule_appointment/' + this.reschedule_patient.id, {
          appointment_time: this.appointment_time,
          appointment_day: this.appointment_day
        }).then(function (response) {
          if (response.data.success) {
            _this7.$refs.topProgress.done();

            _this7.loading_dialog = false;

            _this7.fetchUpcomingAppointment();

            _this7.reschedule_dialog = false;
            _this7.appointment_day = null;
            _this7.appointment_time = null;
            _this7.timings = [];
            _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
              icon: 'success',
              title: 'Appointment rescheduled'
            });
          }
        });
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('YY-MMM-Do');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Upcoming.vue?vue&type=template&id=948da908&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Upcoming.vue?vue&type=template&id=948da908&scoped=true& ***!
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
        "v-row",
        { staticClass: "px-5" },
        [
          _c("section", [
            _c("span", { staticClass: "subtitle-2 font-weight-bold" }, [
              _vm._v("Upcoming "),
              _c("span", { staticClass: "caption" }, [
                _vm._v(
                  "(" +
                    _vm._s(_vm.upcoming_appointments.length) +
                    " appointments)"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-icon", { attrs: { color: "info darken-1" } }, [
            _vm._v("mdi-account-group")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.upcoming_appointments.length
        ? _c(
            "v-row",
            _vm._l(_vm.upcoming_appointments, function(appointment) {
              return _c(
                "v-col",
                { key: appointment.id, attrs: { cols: "6", md: "3", sm: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "pa-1" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "60" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.getImage(appointment.patient)
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
                                "v-col",
                                {
                                  staticClass: "d-flex flex-column",
                                  attrs: { cols: "8" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold black--text"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(appointment.patient.title) +
                                          " " +
                                          _vm._s(
                                            appointment.patient.firstname
                                          ) +
                                          " " +
                                          _vm._s(appointment.patient.lastname)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "caption font-weight-bold grey--text"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(appointment.patient.job_title)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "d-flex mt-1" },
                                    [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { top: "" },
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
                                                          staticClass: "mr-2",
                                                          attrs: {
                                                            color:
                                                              "info darken-2",
                                                            depressed: "",
                                                            fab: "",
                                                            "x-small": "",
                                                            dark: "",
                                                            width: "30",
                                                            height: "30"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.accept_appointment(
                                                                appointment
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
                                                              size: "14"
                                                            }
                                                          },
                                                          [_vm._v("mdi-check")]
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
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("accept")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { top: "" },
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
                                                          staticClass: "mr-2",
                                                          attrs: {
                                                            color: "grey",
                                                            depressed: "",
                                                            fab: "",
                                                            "x-small": "",
                                                            dark: "",
                                                            width: "30",
                                                            height: "30"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.cancel_appointment(
                                                                appointment
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
                                                              size: "14"
                                                            }
                                                          },
                                                          [_vm._v("mdi-close")]
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
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("cancel")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { top: "" },
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
                                                          attrs: {
                                                            color: "grey",
                                                            depressed: "",
                                                            fab: "",
                                                            "x-small": "",
                                                            dark: "",
                                                            width: "30",
                                                            height: "30"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.reschedule_appointment(
                                                                appointment
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
                                                              size: "14"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-swap-horizontal"
                                                            )
                                                          ]
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
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("reschedule")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "my-0" }),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "pa-1" },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-1 font-weight-light black--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatTime")(
                                          appointment.timing.start_time
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-2 font-weight-bold grey--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(
                                          appointment.schedule.schedule_date
                                        )
                                      )
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "my-0" }),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text-center" }, [
                        _c(
                          "span",
                          { staticClass: "subtitle-2 font-weight-bold" },
                          [
                            _c(
                              "a",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.appontment_details(appointment)
                                  }
                                }
                              },
                              [_vm._v("View Details")]
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        : _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-card",
                    { staticStyle: { "border-top": "4px solid green" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "d-flex" },
                        [
                          _c(
                            "v-responsive",
                            { attrs: { "max-width": "30%" } },
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: "/app_asset/undraw_void_3ggu.svg",
                                  width: "60%"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-center grey--text font-weight-bold subtitle-1 font-italic mx-5",
                              staticStyle: { "margin-top": "80px" }
                            },
                            [_vm._v("No Appointment(s) Data Available !!!")]
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
          attrs: { width: "600" },
          model: {
            value: _vm.reschedule_dialog,
            callback: function($$v) {
              _vm.reschedule_dialog = $$v
            },
            expression: "reschedule_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "subtitle-1 font-weight-bold",
                  attrs: { "primary-title": "" }
                },
                [_vm._v(" Reschedule Patient")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "div",
                    [
                      _c(
                        "span",
                        { staticClass: "subtitle-1 font-weight-bold d-block" },
                        [_vm._v("Available Dates:")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-chip-group",
                                {
                                  attrs: {
                                    "active-class":
                                      "success--text text--accent-4 darken-2",
                                    row: ""
                                  },
                                  model: {
                                    value: _vm.appointment_day,
                                    callback: function($$v) {
                                      _vm.appointment_day = $$v
                                    },
                                    expression: "appointment_day"
                                  }
                                },
                                [
                                  _vm.schedules.length
                                    ? _vm._l(_vm.schedules, function(schedule) {
                                        return _c(
                                          "v-chip",
                                          {
                                            key: schedule.id,
                                            staticClass: "ma-2",
                                            attrs: {
                                              filter: "",
                                              outlined: "",
                                              value: schedule.id
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatDate")(
                                                  schedule.schedule_date
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      })
                                    : [
                                        _c("span", [
                                          _c("i", [
                                            _vm._v("No available dates")
                                          ])
                                        ])
                                      ]
                                ],
                                2
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
                  _c("v-divider", { staticClass: "my-3" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "span",
                        { staticClass: "subtitle-1 font-weight-bold d-block" },
                        [_vm._v("Available Times:")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-chip-group",
                                {
                                  attrs: {
                                    "active-class":
                                      "white--text text--accent-4 darken-2",
                                    row: ""
                                  },
                                  model: {
                                    value: _vm.appointment_time,
                                    callback: function($$v) {
                                      _vm.appointment_time = $$v
                                    },
                                    expression: "appointment_time"
                                  }
                                },
                                [
                                  _vm.timings.length
                                    ? _vm._l(_vm.timings, function(timing) {
                                        return _c(
                                          "v-chip",
                                          {
                                            key: timing.id,
                                            staticClass: "ma-2",
                                            attrs: {
                                              filter: "",
                                              color: "success darken-1",
                                              value: timing.id,
                                              label: ""
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatTime")(
                                                  timing.start_time
                                                )
                                              ) +
                                                " - " +
                                                _vm._s(
                                                  _vm._f("formatTime")(
                                                    timing.end_time
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      })
                                    : [
                                        _c("span", [
                                          _c("i", [
                                            _vm._v("No available times")
                                          ])
                                        ])
                                      ]
                                ],
                                2
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
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4 ma-2",
                      attrs: {
                        color: "info darken-2",
                        tile: "",
                        depressed: "",
                        dark: ""
                      },
                      on: { click: _vm.newBooked }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("update")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4 ma-2",
                      attrs: {
                        color: "red darken-2",
                        tile: "",
                        depressed: "",
                        dark: ""
                      },
                      on: { click: _vm.closeSchedule }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("cancel")])]
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

/***/ "./resources/js/components/appointments/Upcoming.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/appointments/Upcoming.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upcoming_vue_vue_type_template_id_948da908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upcoming.vue?vue&type=template&id=948da908&scoped=true& */ "./resources/js/components/appointments/Upcoming.vue?vue&type=template&id=948da908&scoped=true&");
/* harmony import */ var _Upcoming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Upcoming.vue?vue&type=script&lang=js& */ "./resources/js/components/appointments/Upcoming.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Upcoming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Upcoming_vue_vue_type_template_id_948da908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Upcoming_vue_vue_type_template_id_948da908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "948da908",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointments/Upcoming.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointments/Upcoming.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/appointments/Upcoming.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Upcoming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Upcoming.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Upcoming.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Upcoming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointments/Upcoming.vue?vue&type=template&id=948da908&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/appointments/Upcoming.vue?vue&type=template&id=948da908&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Upcoming_vue_vue_type_template_id_948da908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Upcoming.vue?vue&type=template&id=948da908&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Upcoming.vue?vue&type=template&id=948da908&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Upcoming_vue_vue_type_template_id_948da908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Upcoming_vue_vue_type_template_id_948da908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);