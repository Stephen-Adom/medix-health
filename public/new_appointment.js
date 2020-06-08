(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new_appointment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/New.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/New.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dob_modal: false,
      attach: true,
      loading: false,
      appointment: {
        title: null,
        firstname: null,
        lastname: null,
        phone: null,
        age: null,
        dob: null,
        email: null,
        appointment_reason: null,
        job_title: null,
        gender: null,
        department: null,
        employee_type: null,
        address: null
      },
      valid: false,
      appointment_time: null,
      appointment_day: null,
      speciality: null,
      step: 1,
      schedules: [],
      timings: [],
      titleOptions: ['Mr', 'Mrs', 'Miss', 'Dr'],
      genderOptions: ['Male', 'Female'],
      employee_typeOptions: ['Senior Staff', 'Junior Staff', 'Casual', 'Contract Workers'],
      departmentOptions: ['Docks', 'FSIC', 'Human Resource', 'Finance/IT', 'Operations', 'QHSE', 'Supply Chain', 'Engineering', 'Fish Meal Plant'],
      namedRules: [function (v) {
        return !!v || 'Name is required';
      }],
      titleRules: [function (v) {
        return !!v || 'Title is required';
      }],
      dobRules: [function (v) {
        return !!v || 'DoB is required';
      }],
      addressRules: [function (v) {
        return !!v || 'Address is required';
      }],
      departmentRules: [function (v) {
        return !!v || 'Department is required';
      }],
      employee_typeRules: [function (v) {
        return !!v || 'Type of Employee Field is required';
      }],
      reasonRules: [function (v) {
        return !!v || 'Appointment reason is required';
      }, function (v) {
        return v && v.length > 5 || 'Appointment reason must be more than 5 characters';
      }],
      phoneRules: [function (v) {
        return !!v || 'Phone number is required';
      }, function (v) {
        return v && v.length == 10 || 'Phone number must be 10 characters';
      }],
      ageRules: [function (v) {
        return !!v || 'Age is required';
      }],
      genderRules: [function (v) {
        return !!v || 'Gender is required';
      }],
      jobRules: [function (v) {
        return !!v || 'Job title is required';
      }, function (v) {
        return v && v.length > 1 || 'Job title must be more than 1 characters';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      doctors: [],
      selection: null
    };
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('LL');
    },
    formatBookedDate: function formatBookedDate(value) {
      return moment(value).format('dddd, MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  watch: {
    speciality: function speciality() {
      if (this.speciality === 'Doctor') {
        this.getDoctors();
      } else if (this.speciality === 'Lab') {
        this.getLabs();
      }
    },
    appointment_day: function appointment_day() {
      if (this.appointment_day !== null) {
        this.getDoctorTime(this.appointment_day);
      }
    },
    selection: function selection() {
      if (this.selection !== null) {
        this.getDoctorSchedule(this.selection);
      }
    }
  },
  computed: {
    currentTitle: function currentTitle() {
      switch (this.step) {
        case 1:
          return 'Patient Information';

        case 2:
          return 'Book Appointment';

        default:
          return 'Appointment Created';
      }
    },
    getAppointmentDate: function getAppointmentDate() {
      var _this = this;

      var bookdate = this.schedules.find(function (schedule) {
        return schedule.id === _this.appointment_day;
      });

      if (bookdate) {
        return bookdate.schedule_date;
      }

      ;
    },
    getAppointmentStartTime: function getAppointmentStartTime() {
      var _this2 = this;

      var time = this.timings.find(function (time) {
        return time.id === _this2.appointment_time;
      });

      if (time) {
        return time.start_time;
      }
    },
    getAppointmentEndTime: function getAppointmentEndTime() {
      var _this3 = this;

      var time = this.timings.find(function (time) {
        return time.id === _this3.appointment_time;
      });

      if (time) {
        return time.end_time;
      }
    },
    patientImage: function patientImage() {
      if (this.appointment.gender === 'Female') {
        return "app_asset/undraw_female_avatar_l3ey.png";
      } else {
        return "app_asset/male_avatar.png";
      }
    }
  },
  methods: {
    getDoctorSchedule: function getDoctorSchedule(id) {
      var _this4 = this;

      axios.post('/api/doctor_schedule', {
        id: id
      }).then(function (response) {
        if (response.data.schedule) {
          _this4.schedules = [];
          _this4.schedules = response.data.schedule;
        }

        if (response.data.no_schedules) {
          _this4.schedules = [];
          Toast.fire({
            icon: 'info',
            title: 'No Available Schedules'
          });
        }
      });
    },
    getImage: function getImage(item) {
      if (item.image) {
        return '/storage/profiles/' + item.image;
      } else {
        if (item.gender === "Male") {
          return '/app_asset/male-profile-2.jpg';
        } else {
          return '/app_asset/female-avatar.jpg';
        }
      }
    },
    getDoctorTime: function getDoctorTime(id) {
      var _this5 = this;

      axios.post('/api/doctor_time', {
        id: id
      }).then(function (response) {
        if (response.data.timing) {
          _this5.timings = response.data.timing;
        }
      });
    },
    nextStep: function nextStep() {
      if (this.step === 1) {
        if (this.$refs.patientform.validate()) {
          this.step++;
        }
      } else if (this.step === 2) {
        if (this.$refs.appointmentform.validate()) {
          this.step++;
        }
      }
    },
    getDoctors: function getDoctors() {
      var _this6 = this;

      axios.get('/api/all_doctors').then(function (response) {
        _this6.doctors = response.data;
      });
    },
    getLabs: function getLabs() {
      var _this7 = this;

      axios.get('/api/all_labs').then(function (response) {
        _this7.doctors = response.data;
      });
    },
    submitBooked: function submitBooked() {
      var _this8 = this;

      this.loading = true;
      axios.post('/store_appointment', {
        appointment: this.appointment,
        speciality: this.selection,
        appointment_time: this.appointment_time,
        appointment_day: this.appointment_day
      }).then(function (response) {
        if (response.data.email_error) {
          _this8.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Patient Account Error', response.data.email_error, 'error');
        }

        if (response.data.contact_error) {
          _this8.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Patient Account Error', response.data.contact_error, 'error');
        }

        if (response.data.success) {
          _this8.loading = false;

          _this8.resetForm();

          _this8.speciality = null, _this8.schedules = [];
          _this8.timings = [];
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Appointment Booked',
            icon: 'success',
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
          });
          _this8.step = 1;
        }
      });
    },
    resetForm: function resetForm() {
      this.$refs.patientform.reset();
      this.$refs.appointmentform.reset();
    },
    goback: function goback() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/New.vue?vue&type=template&id=27f73170&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/New.vue?vue&type=template&id=27f73170&scoped=true& ***!
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
    { staticClass: "mt-3" },
    [
      _c(
        "v-container",
        [
          _c(
            "v-card",
            { staticClass: "pa-4" },
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "success darken-2",
                  attrs: { elevation: "20", dark: "" }
                },
                [
                  _c("v-icon", { staticClass: "mr-2" }, [
                    _vm._v("mdi-circle-edit-outline")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-title",
                    { staticClass: "subtitle-1 font-weight-bold" },
                    [_vm._v("New Appointment")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "white px-5",
                      attrs: { tile: "", depressed: "", dark: "" },
                      on: { click: _vm.goback }
                    },
                    [
                      _c("span", { staticClass: "caption black--text" }, [
                        _vm._v("back")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-3" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "7" } },
                    [
                      _c(
                        "v-card-title",
                        {
                          staticClass:
                            "subtitle-1 font-weight-bold justify-space-between"
                        },
                        [
                          _c("span", [_vm._v(_vm._s(_vm.currentTitle))]),
                          _vm._v(" "),
                          _c(
                            "v-avatar",
                            {
                              staticClass: "caption white--text",
                              attrs: { color: "success darken-2", size: "20" }
                            },
                            [
                              _c("span", { staticClass: "overline" }, [
                                _vm._v(_vm._s(_vm.step))
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-window",
                        {
                          model: {
                            value: _vm.step,
                            callback: function($$v) {
                              _vm.step = $$v
                            },
                            expression: "step"
                          }
                        },
                        [
                          _c(
                            "v-window-item",
                            { attrs: { value: 1 } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-form",
                                    {
                                      ref: "patientform",
                                      model: {
                                        value: _vm.valid,
                                        callback: function($$v) {
                                          _vm.valid = $$v
                                        },
                                        expression: "valid"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "pa-4",
                                          attrs: { outlined: "" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            { staticClass: "mb-0" },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      attach: _vm.attach,
                                                      color: "success darken-2",
                                                      rules: _vm.titleRules,
                                                      items: _vm.titleOptions,
                                                      label: "Title",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment.title,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "title",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.title"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "First Name",
                                                      color: "success darken-2",
                                                      rules: _vm.namedRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment
                                                          .firstname,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "firstname",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.firstname"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "Last Name",
                                                      color: "success darken-2",
                                                      rules: _vm.namedRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment
                                                          .lastname,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "lastname",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.lastname"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-dialog",
                                                    {
                                                      ref: "dob_dialog",
                                                      attrs: {
                                                        "return-value":
                                                          _vm.appointment.dob,
                                                        persistent: "",
                                                        width: "290px"
                                                      },
                                                      on: {
                                                        "update:returnValue": function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.appointment,
                                                            "dob",
                                                            $event
                                                          )
                                                        },
                                                        "update:return-value": function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.appointment,
                                                            "dob",
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
                                                                      outlined:
                                                                        "",
                                                                      label:
                                                                        "DOB",
                                                                      color:
                                                                        "success darken-2",
                                                                      rules:
                                                                        _vm.dobRules
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .appointment
                                                                          .dob,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.appointment,
                                                                          "dob",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "appointment.dob"
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
                                                        value: _vm.dob_modal,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.dob_modal = $$v
                                                        },
                                                        expression: "dob_modal"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-date-picker",
                                                        {
                                                          attrs: {
                                                            scrollable: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.appointment
                                                                .dob,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.appointment,
                                                                "dob",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "appointment.dob"
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
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.dob_modal = false
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
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$refs.dob_dialog.save(
                                                                    _vm
                                                                      .appointment
                                                                      .dob
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
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
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
                                                      value:
                                                        _vm.appointment.gender,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "gender",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.gender"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "Email",
                                                      color: "success darken-2",
                                                      rules: _vm.emailRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment.email,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "email",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.email"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "Phone/Contact",
                                                      color: "success darken-2",
                                                      rules: _vm.phoneRules,
                                                      counter: 10
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment.phone,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "phone",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.phone"
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
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "Job Title",
                                                      color: "success darken-2",
                                                      rules: _vm.jobRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment
                                                          .job_title,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "job_title",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.job_title"
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
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "Address",
                                                      color: "success darken-2",
                                                      rules: _vm.addressRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment.address,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "address",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.address"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      label: "Age",
                                                      color: "success darken-2",
                                                      rules: _vm.ageRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment.age,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "age",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.age"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-combobox", {
                                                    attrs: {
                                                      attach: _vm.attach,
                                                      items:
                                                        _vm.departmentOptions,
                                                      label: "Department",
                                                      rules:
                                                        _vm.departmentRules,
                                                      color: "success darken-2",
                                                      chips: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment
                                                          .department,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "department",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.department"
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
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-combobox", {
                                                    attrs: {
                                                      attach: _vm.attach,
                                                      items:
                                                        _vm.employee_typeOptions,
                                                      label: "Employee Type",
                                                      rules:
                                                        _vm.employee_typeRules,
                                                      color: "success darken-2",
                                                      chips: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment
                                                          .employee_type,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "employee_type",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.employee_type"
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-window-item",
                            { attrs: { value: 2 } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold d-block"
                                        },
                                        [_vm._v("Choose Type of Speciality")]
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
                                                      "white--text text--accent-4",
                                                    row: ""
                                                  },
                                                  model: {
                                                    value: _vm.speciality,
                                                    callback: function($$v) {
                                                      _vm.speciality = $$v
                                                    },
                                                    expression: "speciality"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-chip",
                                                    {
                                                      staticClass: "ma-2",
                                                      attrs: {
                                                        filter: "",
                                                        color:
                                                          "success darken-1",
                                                        value: "Doctor",
                                                        label: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v("Doctor "),
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            size: "18",
                                                            right: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-stethoscope"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-chip",
                                                    {
                                                      staticClass: "ma-2",
                                                      attrs: {
                                                        filter: "",
                                                        color:
                                                          "success darken-1",
                                                        value: "Lab",
                                                        label: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v("Lab Technician "),
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            size: "18",
                                                            right: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-microscope"
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold d-block"
                                        },
                                        [_vm._v("Choose Speciality")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _vm.doctors.length
                                            ? _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c(
                                                    "v-chip-group",
                                                    {
                                                      attrs: {
                                                        "active-class":
                                                          "success--text text--accent-4"
                                                      },
                                                      model: {
                                                        value: _vm.selection,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.selection = $$v
                                                        },
                                                        expression: "selection"
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.doctors,
                                                      function(doctor) {
                                                        return _c(
                                                          "v-chip",
                                                          {
                                                            key: doctor.id,
                                                            staticClass: "ma-2",
                                                            attrs: {
                                                              value: doctor.id,
                                                              pill: ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-avatar",
                                                              {
                                                                attrs: {
                                                                  left: ""
                                                                }
                                                              },
                                                              [
                                                                _c("v-img", {
                                                                  attrs: {
                                                                    src: _vm.getImage(
                                                                      doctor
                                                                    )
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  doctor.title
                                                                ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    doctor.firstname
                                                                  )
                                                              )
                                                            ])
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : [
                                                _c(
                                                  "span",
                                                  { staticClass: "ml-3" },
                                                  [
                                                    _c("i", [
                                                      _vm._v(
                                                        "Select Speciality type"
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                        ],
                                        2
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
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold d-block"
                                        },
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
                                                    expression:
                                                      "appointment_day"
                                                  }
                                                },
                                                [
                                                  _vm.schedules.length
                                                    ? _vm._l(
                                                        _vm.schedules,
                                                        function(schedule) {
                                                          return _c(
                                                            "v-chip",
                                                            {
                                                              key: schedule.id,
                                                              staticClass:
                                                                "ma-2",
                                                              attrs: {
                                                                filter: "",
                                                                outlined: "",
                                                                value:
                                                                  schedule.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "formatDate"
                                                                  )(
                                                                    schedule.schedule_date
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      )
                                                    : [
                                                        _c("span", [
                                                          _c("i", [
                                                            _vm._v(
                                                              "Select appointment type to display available dates"
                                                            )
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
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold d-block"
                                        },
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
                                                    expression:
                                                      "appointment_time"
                                                  }
                                                },
                                                [
                                                  _vm.timings.length
                                                    ? _vm._l(
                                                        _vm.timings,
                                                        function(
                                                          timing,
                                                          index
                                                        ) {
                                                          return _c(
                                                            "v-chip",
                                                            {
                                                              key: index,
                                                              staticClass:
                                                                "ma-2",
                                                              attrs: {
                                                                filter: "",
                                                                color:
                                                                  "success darken-1",
                                                                value:
                                                                  timing.id,
                                                                label: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "formatTime"
                                                                  )(
                                                                    timing.start_time
                                                                  )
                                                                ) +
                                                                  " - " +
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "formatTime"
                                                                    )(
                                                                      timing.end_time
                                                                    )
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      )
                                                    : [
                                                        _c("span", [
                                                          _c("i", [
                                                            _vm._v(
                                                              "Select appointment day to display available timings"
                                                            )
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
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold d-block"
                                        },
                                        [_vm._v("Reason for Appointment")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-form",
                                        { ref: "appointmentform" },
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
                                                      label: "Reason",
                                                      color: "success",
                                                      large: "",
                                                      rules: _vm.reasonRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointment
                                                          .appointment_reason,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointment,
                                                          "appointment_reason",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointment.appointment_reason"
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-window-item", { attrs: { value: 3 } }, [
                            _c(
                              "div",
                              { staticClass: "pa-4 text-center body-1" },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass: "title font-weight-light mb-2"
                                  },
                                  [
                                    _c(
                                      "v-responsive",
                                      [
                                        _c("v-img", {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            src: _vm.patientImage,
                                            width: "20%"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v("New Appointment Booked for "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.appointment.firstname) +
                                          " " +
                                          _vm._s(_vm.appointment.lastname)
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    ", scheduled on \n                            "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatBookedDate")(
                                            _vm.getAppointmentDate
                                          )
                                        ) + ","
                                      )
                                    ]
                                  ),
                                  _vm._v(" from "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatTime")(
                                            _vm.getAppointmentStartTime
                                          )
                                        ) + "-"
                                      )
                                    ]
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatTime")(
                                            _vm.getAppointmentEndTime
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "caption grey--text" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "ma-2",
                                        attrs: {
                                          tile: "",
                                          outlined: "",
                                          color: "success",
                                          loading: _vm.loading,
                                          disabled: _vm.loading
                                        },
                                        on: { click: _vm.submitBooked }
                                      },
                                      [_vm._v("Submit")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                disabled:
                                  _vm.step === 1 || _vm.loading === true,
                                text: ""
                              },
                              on: {
                                click: function($event) {
                                  _vm.step--
                                }
                              }
                            },
                            [_vm._v(" Back")]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.step !== 3
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "px-5",
                                  attrs: {
                                    color: "info darken-2",
                                    tile: "",
                                    depressed: ""
                                  },
                                  on: { click: _vm.nextStep }
                                },
                                [
                                  _c("span", { staticClass: "caption" }, [
                                    _vm._v("Next")
                                  ])
                                ]
                              )
                            : _vm._e()
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
                      staticClass: "fill-height",
                      staticStyle: { "margin-top": "100px" },
                      attrs: { cols: "12", md: "5" }
                    },
                    [
                      _c(
                        "div",
                        [
                          _c(
                            "v-responsive",
                            [
                              _vm.step === 1
                                ? _c("v-img", {
                                    staticClass: "mx-auto hidden-xs-only",
                                    attrs: {
                                      src:
                                        "/app_asset/undraw_annotation_7das.svg",
                                      width: "90%"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.step === 2
                                ? _c("v-img", {
                                    staticClass: "mx-auto hidden-xs-only",
                                    attrs: {
                                      src: "app_asset/undraw_booking_33fn.svg",
                                      width: "90%"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.step === 3
                                ? _c("v-img", {
                                    staticClass: "mx-auto hidden-xs-only",
                                    attrs: {
                                      src:
                                        "app_asset/undraw_order_confirmed_aaw7.svg",
                                      width: "90%"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
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

/***/ "./resources/js/components/appointments/New.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/appointments/New.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_27f73170_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=27f73170&scoped=true& */ "./resources/js/components/appointments/New.vue?vue&type=template&id=27f73170&scoped=true&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/components/appointments/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_27f73170_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_27f73170_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27f73170",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointments/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointments/New.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/appointments/New.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointments/New.vue?vue&type=template&id=27f73170&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/appointments/New.vue?vue&type=template&id=27f73170&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_27f73170_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=27f73170&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/New.vue?vue&type=template&id=27f73170&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_27f73170_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_27f73170_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);