(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newvitals"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientVitals.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vitals/PatientVitals.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      appointmentdialog: false,
      appointment_time: null,
      appointment_day: null,
      speciality: null,
      schedules: [],
      timings: [],
      appointment_reason: '',
      reasonRules: [function (v) {
        return !!v || 'Appointment reason is required';
      }, function (v) {
        return v && v.length > 5 || 'Appointment reason must be more than 5 characters';
      }],
      submmited: false,
      pressure: false,
      pulse: false,
      temperature: false,
      respiration: false,
      blood_pressure_dialog: false,
      pulse_dialog: false,
      respiration_dialog: false,
      temperature_dialog: false,
      vitals: {
        systolic_value: 0,
        diastolic_value: 0,
        pulse_rate: 0,
        respiration_rate: 0,
        temperature: 0,
        weight: 0,
        height: 0
      },
      vitalsRules: [function (v) {
        return !!v || 'Field is required';
      }],
      doctors: [],
      selection: null
    };
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
  props: {
    id: [Number]
  },
  created: function created() {
    if (this.Patients.length <= 0) {
      this.fetchPatients();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['Patients']), {
    patient: function patient() {
      var _this = this;

      return this.Patients.find(function (data) {
        return data.id == _this.id;
      });
    },
    getImage: function getImage() {
      if (this.patient.image) {
        return '/storage/patients/profiles/' + this.patient.image;
      } else {
        if (this.patient.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    },
    analyze_temperature: function analyze_temperature() {
      if (this.vitals.temperature <= 37.2 && this.vitals.temperature >= 36.5) {
        return 'success darken-1';
      } else if (this.vitals.temperature < 36.5) {
        return 'info darken-2';
      } else if (this.vitals.temperature > 37.2) {
        return 'red darken-2';
      }
    },
    pressure_analyze: function pressure_analyze() {
      if (this.vitals.systolic_value < 120 && this.vitals.diastolic_value < 80) {
        return 'success darken-1';
      } else if (this.vitals.systolic_value <= 129 && this.vitals.systolic_value >= 120 && this.vitals.diastolic_value < 80) {
        return 'warning';
      } else if (this.vitals.systolic_value <= 139 && this.vitals.systolic_value >= 130 || this.vitals.diastolic_value <= 89 && this.vitals.diastolic_value >= 80) {
        return 'warning darken-1';
      } else if (this.vitals.systolic_value >= 140 || this.vitals.diastolic_value >= 90) {
        return 'red darken-2';
      } else if (this.vitals.systolic_value > 180 && this.vitals.diastolic_value > 120) {
        return 'red darken-3';
      } else if (this.vitals.systolic_value > 180 || this.vitals.diastolic_value > 120) {
        return 'red darken-3';
      }
    },
    calculateBMI: function calculateBMI() {
      if (this.vitals.weight && this.vitals.height) {
        var height_in_meters = this.vitals.height / 100;
        var height_squared = height_in_meters * height_in_meters;
        var bmi = this.vitals.weight / height_squared;
        return bmi.toFixed(1);
      }
    },
    getActive: function getActive() {
      if (this.patient) {
        if (this.patient.referred === 1) {
          return 'Referred';
        } else {
          return 'Active';
        }
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('dddd, MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    },
    formatDob: function formatDob(value) {
      return moment(value).format('MMMM Do, YYYY');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatients']), {
    getDoctors: function getDoctors() {
      var _this2 = this;

      axios.get('/api/all_doctors').then(function (response) {
        _this2.doctors = response.data;
      });
    },
    getLabs: function getLabs() {
      var _this3 = this;

      axios.get('/api/all_labs').then(function (response) {
        _this3.doctors = response.data;
      });
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    saveVitals: function saveVitals() {
      var _this4 = this;

      if (this.pressure && this.pulse && this.respiration && this.temperature) {
        axios.post('/store_vitals', {
          vitals: this.vitals,
          id: this.id
        }).then(function (response) {
          if (response.data.success) {
            _this4.submmited = true;
            _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
              icon: 'success',
              title: 'Patient vitals saved'
            });
          }
        });
      } else {
        this.submmited = false;
        Swal.fire('Data Error', 'Input data before submission', 'error');
      }
    },
    book_appointment: function book_appointment() {
      var _this5 = this;

      if (this.$refs.appointmentform.validate()) {
        axios.post('/book_appointment', {
          id: this.id,
          speciality: this.selection,
          appointment_time: this.appointment_time,
          appointment_day: this.appointment_day,
          reason: this.appointment_reason
        }).then(function (response) {
          if (response.data.success) {
            _this5.appointmentdialog = false;
            Swal.fire({
              title: 'Appointment Booked',
              icon: 'success',
              showClass: {
                popup: 'animated fadeInDown faster'
              },
              hideClass: {
                popup: 'animated fadeOutUp faster'
              }
            });
          }
        });
      }
    },
    getDoctorTime: function getDoctorTime(id) {
      var _this6 = this;

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
          _this6.timings = response.data.timing;
        }
      });
    },
    getDoctorSchedule: function getDoctorSchedule(id) {
      var _this7 = this;

      axios.post('/api/doctor_schedule', {
        id: id
      }).then(function (response) {
        if (response.data.schedule) {
          _this7.schedules = [];
          _this7.schedules = response.data.schedule;
        }

        if (response.data.no_schedules) {
          _this7.schedules = [];
          _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
            icon: 'info',
            title: 'No Available Schedules'
          });
        }
      });
    },
    getStaffImage: function getStaffImage(item) {
      if (item.image) {
        return '/staff/profiles/' + item.image;
      } else {
        if (item.gender === "Male") {
          return '/app_asset/male-profile-2.jpg';
        } else {
          return '/app_asset/female-avatar.jpg';
        }
      }
    } // getLabSchedule(){
    //     axios.get('/api/lab_schedule').then(response => {
    //         this.schedules = response.data.schedule;
    //     })
    // } 

  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vitals/PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c(
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
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-weight-bold subtitle-2 text-uppercase grey--text darken-3"
                      },
                      [_vm._v("Patient Vitals")]
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
                    "div",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-5 mr-2 red darken-2",
                          attrs: { tile: "", depressed: "", dark: "" },
                          on: { click: _vm.goback }
                        },
                        [
                          _c("span", { staticClass: "caption" }, [
                            _vm._v("back")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-5 mr-2",
                          attrs: {
                            tile: "",
                            color: "success darken-3",
                            disabled: _vm.submmited,
                            depressed: ""
                          },
                          on: { click: _vm.saveVitals }
                        },
                        [
                          _c("span", { staticClass: "caption" }, [
                            _vm._v("Save")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "my-4" }),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "pa-3",
                      staticStyle: { "border-top": "4px solid green" },
                      attrs: { elevation: "15" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "8", lg: "8" } },
                            [
                              _vm.patient
                                ? _c(
                                    "v-row",
                                    { staticClass: "mx-4" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        First Name\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patient.firstname)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Last Name\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patient.lastname)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Sex\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [_vm._v(_vm._s(_vm.patient.gender))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        DOB\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "font-weight-bold subtitle-2"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("formatDob")(
                                                    _vm.patient.dob
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _vm.patient
                                ? _c(
                                    "v-row",
                                    { staticClass: "mx-4" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "4",
                                            lg: "4"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Email\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [_vm._v(_vm._s(_vm.patient.email))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "4",
                                            lg: "4"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [_vm._v("Contact")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [_vm._v(_vm._s(_vm.patient.phone))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "4",
                                            lg: "4"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [_vm._v("Job Title")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patient.job_title)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _vm.patient
                                ? _c(
                                    "v-row",
                                    { staticClass: "mx-4" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Age\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patient.age) +
                                                  " years"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Weight\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.vitals.weight) +
                                                  " Kg"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Height\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.vitals.height) +
                                                  " cm"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-center",
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase"
                                            },
                                            [_vm._v("Body Mass Index (BMI)")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "font-weight-bold subtitle-2"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.calculateBMI) +
                                                  " Kg/m2"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.patient
                            ? _c(
                                "v-col",
                                {
                                  staticClass: "mt-4",
                                  attrs: { cols: "12", md: "4", lg: "4" }
                                },
                                [
                                  _c(
                                    "v-responsive",
                                    [
                                      _c("v-img", {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          src: _vm.getImage,
                                          width: "60%"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold grey--text text-center mt-3"
                                    },
                                    [_vm._v("Status: " + _vm._s(_vm.getActive))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "px-5 d-flex mx-auto",
                                      attrs: {
                                        tile: "",
                                        color: "info darken-1",
                                        dark: "",
                                        depressed: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.appointmentdialog = true
                                        }
                                      }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("Book appointment")
                                      ])
                                    ]
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
                    scrollable: "",
                    "max-width": "600px",
                    persistent: ""
                  },
                  model: {
                    value: _vm.appointmentdialog,
                    callback: function($$v) {
                      _vm.appointmentdialog = $$v
                    },
                    expression: "appointmentdialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        {
                          staticClass: "success darken-1",
                          attrs: { dark: "" }
                        },
                        [
                          _c("span", { staticClass: "white--text" }, [
                            _vm._v("Book Appointment")
                          ])
                        ]
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
                                                color: "success darken-1",
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
                                                [_vm._v("mdi-stethoscope")]
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
                                                color: "success darken-1",
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
                                                [_vm._v("mdi-microscope")]
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
                                                callback: function($$v) {
                                                  _vm.selection = $$v
                                                },
                                                expression: "selection"
                                              }
                                            },
                                            _vm._l(_vm.doctors, function(
                                              doctor
                                            ) {
                                              return _c(
                                                "v-chip",
                                                {
                                                  key: doctor.id,
                                                  staticClass: "ma-2",
                                                  attrs: { value: doctor.id }
                                                },
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    { attrs: { left: "" } },
                                                    [
                                                      _c("v-img", {
                                                        attrs: {
                                                          src: _vm.getStaffImage(
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
                                                      _vm._s(doctor.title) +
                                                        " " +
                                                        _vm._s(doctor.firstname)
                                                    )
                                                  ])
                                                ],
                                                1
                                              )
                                            }),
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : [
                                        _c("span", { staticClass: "ml-3" }, [
                                          _c("i", [
                                            _vm._v("Select Speciality type")
                                          ])
                                        ])
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
                                  _vm.schedules
                                    ? _c(
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
                                                ? _vm._l(
                                                    _vm.schedules,
                                                    function(schedule) {
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
                                    : _vm._e()
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
                                  _vm.timings
                                    ? _c(
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
                                                ? _vm._l(_vm.timings, function(
                                                    timing
                                                  ) {
                                                    return _c(
                                                      "v-chip",
                                                      {
                                                        key: timing.id,
                                                        staticClass: "ma-2",
                                                        attrs: {
                                                          filter: "",
                                                          color:
                                                            "success darken-1",
                                                          value: timing.id,
                                                          label: ""
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f(
                                                              "formatTime"
                                                            )(timing.start_time)
                                                          ) +
                                                            " - " +
                                                            _vm._s(
                                                              _vm._f(
                                                                "formatTime"
                                                              )(timing.end_time)
                                                            )
                                                        )
                                                      ]
                                                    )
                                                  })
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
                                    : _vm._e()
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
                                              value: _vm.appointment_reason,
                                              callback: function($$v) {
                                                _vm.appointment_reason = $$v
                                              },
                                              expression: "appointment_reason"
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
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        { staticClass: "d-flex justify-content-end" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "px-4",
                              attrs: {
                                color: "red darken-2",
                                tile: "",
                                depressed: "",
                                dark: ""
                              },
                              on: {
                                click: function($event) {
                                  _vm.appointmentdialog = false
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("Close")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "success darken-2 px-4",
                              attrs: { tile: "", depressed: "", dark: "" },
                              on: { click: _vm.book_appointment }
                            },
                            [
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("book")
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
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-row",
                        { staticClass: "mx-4" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "3", lg: "3" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pa-3",
                                  staticStyle: {
                                    "border-top": "4px solid green"
                                  },
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-weight-bold grey--text text-uppercase caption darken-5"
                                        },
                                        [_vm._v("Blood Pressure")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "20",
                                            color: "teal darken-3"
                                          }
                                        },
                                        [_vm._v("mdi-heart-flash")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    {
                                      staticClass:
                                        "d-flex jutify-content-center"
                                    },
                                    [
                                      _c(
                                        "v-progress-circular",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            rotate: 360,
                                            size: 130,
                                            width: 20,
                                            value: 100,
                                            color: _vm.pressure_analyze
                                          }
                                        },
                                        [
                                          _c("span", { staticClass: "mx-1" }, [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.vitals.systolic_value
                                                ) +
                                                " "
                                            )
                                          ]),
                                          _vm._v(" / "),
                                          _c("span", { staticClass: "mx-1" }, [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.vitals.diastolic_value
                                                ) +
                                                " "
                                            )
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
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          attrs: {
                                            persistent: "",
                                            "max-width": "350"
                                          },
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
                                                        attrs: {
                                                          block: "",
                                                          color:
                                                            "teal darken-2",
                                                          dark: "",
                                                          elevation: "15"
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [_vm._v("input value")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ]),
                                          model: {
                                            value: _vm.blood_pressure_dialog,
                                            callback: function($$v) {
                                              _vm.blood_pressure_dialog = $$v
                                            },
                                            expression: "blood_pressure_dialog"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            [
                                              _c(
                                                "v-card-title",
                                                { staticClass: "headline" },
                                                [_vm._v("Blood Pressure")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-divider"),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-form",
                                                    {
                                                      model: {
                                                        value: _vm.pressure,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.pressure = $$v
                                                        },
                                                        expression: "pressure"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules:
                                                            _vm.vitalsRules,
                                                          outlined: "",
                                                          label: "Systolic",
                                                          placeholder:
                                                            "enter systolic value",
                                                          color: "success"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vitals
                                                              .systolic_value,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vitals,
                                                              "systolic_value",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vitals.systolic_value"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules:
                                                            _vm.vitalsRules,
                                                          outlined: "",
                                                          label: "Diastolic",
                                                          placeholder:
                                                            "enter diastolic value",
                                                          color: "success"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vitals
                                                              .diastolic_value,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vitals,
                                                              "diastolic_value",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vitals.diastolic_value"
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
                                                [
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "green darken-1",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.blood_pressure_dialog = false
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Done")]
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
                            "v-col",
                            { attrs: { cols: "12", md: "3", lg: "3" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pa-3",
                                  staticStyle: {
                                    "border-top": "4px solid red"
                                  },
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-weight-bold grey--text text-uppercase caption darken-5"
                                        },
                                        [_vm._v("Heart Rate Pulse")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "20",
                                            color: "red darken-3"
                                          }
                                        },
                                        [_vm._v("mdi-heart-pulse")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    {
                                      staticClass:
                                        "d-flex jutify-content-center"
                                    },
                                    [
                                      _c(
                                        "v-progress-circular",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            rotate: 360,
                                            size: 130,
                                            width: 20,
                                            value: 100,
                                            color: "red darken-3"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              " " +
                                                _vm._s(_vm.vitals.pulse_rate) +
                                                " BPM"
                                            )
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
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          attrs: {
                                            persistent: "",
                                            "max-width": "350"
                                          },
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
                                                        attrs: {
                                                          block: "",
                                                          color:
                                                            "teal darken-2",
                                                          dark: "",
                                                          elevation: "15"
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [_vm._v("input value")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ]),
                                          model: {
                                            value: _vm.pulse_dialog,
                                            callback: function($$v) {
                                              _vm.pulse_dialog = $$v
                                            },
                                            expression: "pulse_dialog"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            [
                                              _c(
                                                "v-card-title",
                                                { staticClass: "headline" },
                                                [_vm._v("Pulse Rate")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-divider"),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-form",
                                                    {
                                                      model: {
                                                        value: _vm.pulse,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.pulse = $$v
                                                        },
                                                        expression: "pulse"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules:
                                                            _vm.vitalsRules,
                                                          outlined: "",
                                                          label: "Heart Rate",
                                                          placeholder:
                                                            "enter pulse value",
                                                          color: "success"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vitals
                                                              .pulse_rate,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vitals,
                                                              "pulse_rate",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vitals.pulse_rate"
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
                                                [
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "green darken-1",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.pulse_dialog = false
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Done")]
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
                            "v-col",
                            { attrs: { cols: "12", md: "3", lg: "3" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pa-3",
                                  staticStyle: {
                                    "border-top": "4px solid orange"
                                  },
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-weight-bold grey--text text-uppercase caption darken-5"
                                        },
                                        [_vm._v("Respiration")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "20",
                                            color: "warning darken-1"
                                          }
                                        },
                                        [_vm._v("mdi-head-flash")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    {
                                      staticClass:
                                        "d-flex jutify-content-center"
                                    },
                                    [
                                      _c(
                                        "v-progress-circular",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            rotate: 360,
                                            size: 130,
                                            width: 20,
                                            value: 100,
                                            color: "warning darken-1"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.vitals.respiration_rate
                                                ) +
                                                " BPM"
                                            )
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
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          attrs: {
                                            persistent: "",
                                            "max-width": "350"
                                          },
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
                                                        attrs: {
                                                          block: "",
                                                          color:
                                                            "teal darken-2",
                                                          dark: "",
                                                          elevation: "15"
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [_vm._v("input value")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ]),
                                          model: {
                                            value: _vm.respiration_dialog,
                                            callback: function($$v) {
                                              _vm.respiration_dialog = $$v
                                            },
                                            expression: "respiration_dialog"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            [
                                              _c(
                                                "v-card-title",
                                                { staticClass: "headline" },
                                                [_vm._v("Respiration Rate")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-divider"),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-form",
                                                    {
                                                      model: {
                                                        value: _vm.respiration,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.respiration = $$v
                                                        },
                                                        expression:
                                                          "respiration"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules:
                                                            _vm.vitalsRules,
                                                          outlined: "",
                                                          label:
                                                            "Respiration Rate",
                                                          placeholder:
                                                            "enter rate value",
                                                          color: "success"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vitals
                                                              .respiration_rate,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vitals,
                                                              "respiration_rate",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vitals.respiration_rate"
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
                                                [
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "green darken-1",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.respiration_dialog = false
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Done")]
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
                            "v-col",
                            { attrs: { cols: "12", md: "3", lg: "3" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pa-3",
                                  staticStyle: {
                                    "border-top": "4px solid blue"
                                  },
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-weight-bold grey--text text-uppercase caption darken-5"
                                        },
                                        [_vm._v("Body Temperature")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "20",
                                            color: "info darken-3"
                                          }
                                        },
                                        [_vm._v("mdi-thermometer")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    {
                                      staticClass:
                                        "d-flex jutify-content-center"
                                    },
                                    [
                                      _c(
                                        "v-progress-circular",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            rotate: 360,
                                            size: 130,
                                            width: 20,
                                            value: 100,
                                            color: _vm.analyze_temperature
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              " " +
                                                _vm._s(_vm.vitals.temperature) +
                                                " ℃"
                                            )
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
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          attrs: {
                                            persistent: "",
                                            "max-width": "350"
                                          },
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
                                                        attrs: {
                                                          block: "",
                                                          color:
                                                            "teal darken-2",
                                                          dark: "",
                                                          elevation: "15"
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [_vm._v("input value")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ]),
                                          model: {
                                            value: _vm.temperature_dialog,
                                            callback: function($$v) {
                                              _vm.temperature_dialog = $$v
                                            },
                                            expression: "temperature_dialog"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            [
                                              _c(
                                                "v-card-title",
                                                { staticClass: "headline" },
                                                [_vm._v("Body Temperature")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-divider"),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-form",
                                                    {
                                                      model: {
                                                        value: _vm.temperature,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.temperature = $$v
                                                        },
                                                        expression:
                                                          "temperature"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          outlined: "",
                                                          rules:
                                                            _vm.vitalsRules,
                                                          label: "Temperature",
                                                          placeholder:
                                                            "enter temperature value",
                                                          color: "success"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vitals
                                                              .temperature,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vitals,
                                                              "temperature",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vitals.temperature"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold grey--text darken-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Input Weight and Height Value"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("v-divider"),
                                                          _vm._v(" "),
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              outlined: "",
                                                              label: "Weight",
                                                              placeholder:
                                                                "enter weight value",
                                                              color: "success",
                                                              hint:
                                                                "Weight measurements are in Kg"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vitals
                                                                  .weight,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.vitals,
                                                                  "weight",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "vitals.weight"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              outlined: "",
                                                              label: "Height",
                                                              placeholder:
                                                                "enter Height value",
                                                              color: "success",
                                                              hint:
                                                                "Height measurements are in Centimeters"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vitals
                                                                  .height,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.vitals,
                                                                  "height",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "vitals.height"
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
                                                "v-card-actions",
                                                [
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "green darken-1",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.temperature_dialog = false
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Done")]
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

/***/ "./resources/js/components/vitals/PatientVitals.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/vitals/PatientVitals.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientVitals_vue_vue_type_template_id_2242a1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true& */ "./resources/js/components/vitals/PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true&");
/* harmony import */ var _PatientVitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientVitals.vue?vue&type=script&lang=js& */ "./resources/js/components/vitals/PatientVitals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PatientVitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientVitals_vue_vue_type_template_id_2242a1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PatientVitals_vue_vue_type_template_id_2242a1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2242a1cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vitals/PatientVitals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vitals/PatientVitals.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/vitals/PatientVitals.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientVitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientVitals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientVitals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientVitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vitals/PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/vitals/PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientVitals_vue_vue_type_template_id_2242a1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vitals/PatientVitals.vue?vue&type=template&id=2242a1cf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientVitals_vue_vue_type_template_id_2242a1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientVitals_vue_vue_type_template_id_2242a1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);