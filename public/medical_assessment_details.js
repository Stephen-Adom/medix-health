(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical_assessment_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessmentDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MedicalAssessmentDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading_dialog: false,
      prescription_dialog: false,
      vital_history_dialog: false,
      vital_search: '',
      medical_search: '',
      evening_menu: false,
      afternoon_menu: false,
      morning_menu: false,
      end_course_dialog: false,
      start_course_dialog: false,
      drugselect: [],
      items: [],
      drug_dialog: false,
      vitalsHistory: null,
      medical: {
        allergies: '',
        problem: '',
        notes: '',
        diagnosis: ''
      },
      medicRules: [function (v) {
        return !!v || 'Field is required';
      }],
      pillRules: [function (v) {
        return !!v || 'Field is required';
      }],
      data: {
        drugs: '',
        dosage: '',
        start_course: '',
        end_course: '',
        morning_time: '',
        afternoon_time: '',
        evening_time: ''
      },
      prescription: [],
      appointment_time: null,
      appointment_day: null,
      appointment_reason: '',
      reasonRules: [function (v) {
        return !!v || 'Appointment reason is required';
      }, function (v) {
        return v && v.length > 5 || 'Appointment reason must be more than 5 characters';
      }],
      schedules: [],
      timings: [],
      appointmentdialog: false,
      medical_history_dialog: false,
      headers: [{
        text: 'Patient Problem',
        align: 'start',
        sortable: false,
        value: 'problem'
      }, {
        text: 'Medical Diagnosis',
        value: 'diagnosis'
      }, {
        text: 'Additional Notes',
        value: 'notes'
      }, {
        text: 'Assessed On',
        value: 'created_at'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }],
      vital_headers: [{
        text: 'Date Checked',
        align: 'start',
        sortable: false,
        value: 'created_at'
      }, {
        text: 'Examined By',
        value: 'user'
      }, {
        text: 'Blood Pressure',
        value: 'pressure'
      }, {
        text: 'Temperature',
        value: 'temperature'
      }, {
        text: 'Respiration Rate',
        value: 'respiratory_rate',
        align: 'center'
      }, {
        text: 'Heart Pulse Rate',
        value: 'pulse_rate',
        align: 'center'
      }, {
        text: 'Weight',
        value: 'weight'
      }, {
        text: 'Body Mass Index',
        value: 'height',
        align: 'center'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      vitals: null,
      medicaHistory: null,
      prescription_items: null,
      doctors: [],
      selection: null
    };
  },
  props: {
    id: [Number]
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do YYYY');
    },
    formatVitalDate: function formatVitalDate(value) {
      return moment(value).format('MMMM Do, YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['all_Accepted_Appointment', 'allDrugs', 'allPrescribedDrugs']), {
    appointment: function appointment() {
      var _this = this;

      return this.all_Accepted_Appointment.find(function (data) {
        return data.id == _this.id;
      });
    },
    getPatientImage: function getPatientImage() {
      if (this.appointment) {
        if (this.appointment.patient.image) {
          return '/patients/profiles/' + this.appointment.patient.image;
        } else {
          if (this.appointment.patient.gender === 'Male') {
            return '/app_asset/male_avatar.png';
          } else {
            return '/app_asset/undraw_female_avatar_l3ey.png';
          }
        }
      }
    },
    getTodayDate: function getTodayDate() {
      return moment().format('dddd, Do MMMM YYYY');
    },
    calculateBMI: function calculateBMI() {
      if (this.vitals.weight && this.vitals.height) {
        var height_in_meters = parseFloat(this.vitals.height) / 100;
        var height_squared = parseFloat(height_in_meters) * parseFloat(height_in_meters);
        var bmi = this.vitals.weight / height_squared;
        return bmi.toFixed(1);
      }
    },
    formattedDrugs: function formattedDrugs() {
      if (this.allDrugs.length) {
        var drugs = this.allDrugs.map(function (item) {
          return item.name;
        });
        return drugs;
      }
    },
    getDaysLeft: function getDaysLeft() {
      if (this.data.start_course && this.data.end_course) {
        var a = moment(this.data.start_course);
        var b = moment(this.data.end_course);
        var result = b.diff(a, 'days') + " " + "days"; // 1

        return result;
      }
    }
  }),
  created: function created() {
    this.formattedDrugs;
    this.appointment;
  },
  watch: {
    formattedDrugs: function formattedDrugs() {
      if (this.formattedDrugs.length) {
        this.items = this.formattedDrugs;
      }
    },
    appointment_day: function appointment_day() {
      if (this.appointment_day !== null) {
        this.getDoctorTime(this.appointment_day);
      }
    },
    selection: function selection() {
      if (this.selection !== null) {
        this.getLabSchedule(this.selection);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.appointment) {
      this.getVital(this.appointment.patient.id);
    } else {
      this.appointment;
    }

    this.fetchDrugs();
    this.getVitals();
    this.getMedicalHistory();
    this.getLabDoctors();
    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this2.$refs.topProgress.done();
    }, 1000);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchDrugs', 'newDrug', 'clearDrug']), {
    close_appointment_dialog: function close_appointment_dialog() {
      this.$refs.appointmentform.reset();
      this.$refs.appointmentform.resetValidation();
      this.timings = [];
      this.appointment_time = null;
      this.appointment_day = null;
      this.appointmentdialog = false;
    },
    clearPrescriptions: function clearPrescriptions() {
      this.clearDrug();
    },
    getVital: function getVital(id) {
      var _this3 = this;

      axios.post('/api/medic_vital', {
        id: id
      }).then(function (response) {
        _this3.vitals = response.data;
      });
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getLabDoctors: function getLabDoctors() {
      var _this4 = this;

      axios.get('/api/lab_doctors').then(function (response) {
        _this4.doctors = response.data;
      });
    },
    submit: function submit() {
      var _this5 = this;

      if (this.$refs.medicForm.validate()) {
        this.loading_dialog = true;
        axios.post("/new_assessment", {
          patient_id: this.appointment.patient.id,
          prescription: this.allPrescribedDrugs,
          medical: this.medical
        }).then(function (response) {
          if (response.data.success) {
            _this5.loading_dialog = false;

            _this5.getMedicalHistory();

            Swal.fire('Success', 'Medical Record Saved', 'success');
          }
        });
      } else {
        Swal.fire('Invalid Input', 'Please enter data before submission', 'error');
      }
    },
    prescribe: function prescribe() {
      if (this.$refs.prescriptionForm.validate()) {
        this.loading_dialog = true;
        this.newDrug(this.data);
        this.loading_dialog = false;
      } else {
        Swal.fire('Invalid Input', 'Please enter data before submission', 'error');
      }
    },
    book_appointment: function book_appointment() {
      var _this6 = this;

      if (this.$refs.appointmentform.validate()) {
        this.loading_dialog = true;
        axios.post('/api/post_medic_appointment', {
          id: this.appointment.patient.id,
          appointment_time: this.appointment_time,
          appointment_day: this.appointment_day,
          reason: this.appointment_reason,
          speciality: this.selection
        }).then(function (response) {
          if (response.data.error) {
            _this6.loading_dialog = false;
            _this6.appointmentdialog = true;
            Swal.fire('Unavailable time or date', 'Time or date selected is not available', 'info');
          }

          if (response.data.success) {
            _this6.loading_dialog = false;
            _this6.appointmentdialog = false;
            _this6.appointment_time = null;
            _this6.appointment_day = null;

            _this6.$refs.appointmentform.reset();

            _this6.$refs.appointmentform.resetValidation();

            _this6.timings = [];
            Swal.fire('success', 'Lab test booked', 'success');
          }
        });
      }
    },
    getLabSchedule: function getLabSchedule(id) {
      var _this7 = this;

      axios.post('/api/doctor_schedule', {
        id: id
      }).then(function (response) {
        if (response.data.schedule) {
          _this7.schedules = response.data.schedule;
        }

        if (response.data.no_schedules) {
          Toast.fire({
            icon: 'info',
            title: 'No Available Schedules'
          });
        }
      });
    },
    getDoctorTime: function getDoctorTime(id) {
      var _this8 = this;

      axios.post('/api/doctor_time', {
        id: id
      }).then(function (response) {
        if (response.data.no_timings) {
          Toast.fire({
            icon: 'info',
            title: 'No Available time'
          });
        }

        if (response.data.timing) {
          _this8.timings = response.data.timing;
        }
      });
    },
    getVitals: function getVitals() {
      var _this9 = this;

      axios.post('/api/patient_vitals', {
        id: this.appointment.patient.id
      }).then(function (response) {
        _this9.vitalsHistory = response.data;
      });
    },
    getMedicalHistory: function getMedicalHistory() {
      var _this10 = this;

      axios.post('/api/patient_medical_history', {
        id: this.appointment.patient.id
      }).then(function (response) {
        _this10.medicaHistory = response.data;
      });
    },
    calculateVitalsBMI: function calculateVitalsBMI(weight, height) {
      if (weight && height) {
        var height_in_meters = height / 100;
        var height_squared = height_in_meters * height_in_meters;
        var bmi = weight / height_squared;
        return bmi.toFixed(1);
      } else {
        return 'N/A';
      }
    },
    view_prescription: function view_prescription(item) {
      this.prescription_dialog = true;
      this.map_prescriptions(item.prescriptions);
    },
    map_prescriptions: function map_prescriptions(data) {
      this.prescription_items = data.map(function (item) {
        return {
          'afternoon_time': item.afternoon_time,
          'dosage': item.dosage,
          'end_course': item.end_course,
          'start_course': item.start_course,
          'evening_time': item.evening_time,
          'morning_time': item.morning_time,
          'drug_name': item.drug_name.split(" ")
        };
      });
    },
    refer_patient: function refer_patient() {
      this.$router.push({
        name: 'patient_referrals_form',
        params: {
          id: this.appointment.patient.id
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
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c(
            "v-card",
            { staticClass: "px-3", attrs: { outlined: "" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "success darken-2 mr-2",
                      attrs: { dark: "", fab: "", elevation: "15", small: "" },
                      on: { click: _vm.goback }
                    },
                    [
                      _c("v-icon", { attrs: { size: "16" } }, [
                        _vm._v("mdi-chevron-double-left")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "title font-weight-bold grey--text darken-3"
                    },
                    [_vm._v("Medical Examination")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticClass:
                          "subtitle-2 font-weight-bold grey--text darken-4"
                      },
                      [
                        _c(
                          "v-icon",
                          { staticClass: "mr-1", attrs: { size: "18" } },
                          [_vm._v("mdi-calendar-month")]
                        ),
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.getTodayDate) +
                            "\n                    "
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _vm.appointment
                    ? _c(
                        "v-card",
                        {
                          staticClass: "pa-3",
                          staticStyle: { "border-top": "4px solid green" },
                          attrs: { elevation: "20" }
                        },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "9", lg: "9" } },
                                [
                                  _c(
                                    "v-row",
                                    { staticClass: "px-3 text-center" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Full Name")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment.patient.title
                                                ) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.appointment.patient
                                                      .firstname
                                                  ) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.appointment.patient
                                                      .lastname
                                                  )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Sex")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment.patient.gender
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Email")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment.patient.email
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Contact Number")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment.patient.phone
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Job Title")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment.patient
                                                    .job_title
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.appointment.patient.department
                                        ? _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                md: "3",
                                                lg: "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                                },
                                                [_vm._v("Department")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.appointment.patient
                                                        .department
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.appointment.patient.employee_type
                                        ? _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                md: "3",
                                                lg: "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                                },
                                                [_vm._v("Type of Employee")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.appointment.patient
                                                        .employee_type
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Weight")]
                                          ),
                                          _vm._v(" "),
                                          _vm.vitals
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.vitals.weight) +
                                                      "kg"
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                                },
                                                [_vm._v("N/A")]
                                              )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Body Mass Index")]
                                          ),
                                          _vm._v(" "),
                                          _vm.vitals
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.calculateBMI) +
                                                      " BMI"
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                                },
                                                [_vm._v("N/A")]
                                              )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "3",
                                            lg: "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 black--text darken-4 font-weight-bold text-uppercase"
                                            },
                                            [_vm._v("Age")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-uppercase font-weight-bold grey--text darken-4 d-block caption"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment.patient.age
                                                ) + " years"
                                              )
                                            ]
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
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "3", lg: "3" } },
                                [
                                  _c(
                                    "v-responsive",
                                    [
                                      _c("v-img", {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          src: _vm.getPatientImage,
                                          width: "70%"
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
                            "div",
                            { staticClass: "mt-3 mx-6" },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 grey--text font-weight-bold darken-3 text-uppercase"
                                    },
                                    [_vm._v("Latest Vital Summary")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass:
                                        "ml-auto px-5 success darken-2",
                                      attrs: {
                                        small: "",
                                        tile: "",
                                        depressed: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          _vm.vital_history_dialog = true
                                        }
                                      }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("vital history")
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "my-3" }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        md: "3",
                                        sm: "6",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "teal",
                                          attrs: { dark: "", outlined: "" }
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase d-flex mx-auto font-weight-bold"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-center" },
                                                [_vm._v("Body Temperature")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "mx-auto",
                                                  attrs: { size: "40" }
                                                },
                                                [_vm._v("mdi-thermometer")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-text",
                                            { staticClass: "text-center" },
                                            [
                                              _vm.vitals
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass: "display-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.vitals.temperature
                                                        ) + " ℃"
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "span",
                                                    {
                                                      staticClass: "display-1"
                                                    },
                                                    [_vm._v("0")]
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
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        md: "3",
                                        sm: "6",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "teal",
                                          attrs: { dark: "", outlined: "" }
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase d-flex mx-auto font-weight-bold"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-center" },
                                                [_vm._v("Blood Pressure ")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "mx-auto",
                                                  attrs: { size: "40" }
                                                },
                                                [_vm._v("mdi-heart-flash")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-text",
                                            {
                                              staticClass:
                                                "text-center display-1"
                                            },
                                            [
                                              _vm.vitals
                                                ? _c(
                                                    "span",
                                                    { staticClass: "mx-1" },
                                                    [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.vitals.systolic
                                                          ) +
                                                          " /"
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.vitals
                                                ? _c(
                                                    "span",
                                                    { staticClass: "mx-1" },
                                                    [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.vitals.diastolic
                                                          ) +
                                                          " "
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "span",
                                                    { staticClass: "mx-1" },
                                                    [_vm._v("0")]
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
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        md: "3",
                                        sm: "6",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "teal",
                                          attrs: { dark: "", outlined: "" }
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase d-flex mx-auto font-weight-bold"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-center" },
                                                [_vm._v("Heart Rate Pulse")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "mx-auto",
                                                  attrs: { size: "40" }
                                                },
                                                [_vm._v("mdi-heart-pulse")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-text",
                                            { staticClass: "text-center" },
                                            [
                                              _vm.vitals
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass: "display-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.vitals
                                                              .pulse_rate
                                                          ) +
                                                          " BPM"
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "span",
                                                    {
                                                      staticClass: "display-1"
                                                    },
                                                    [_vm._v("0")]
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
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        md: "3",
                                        sm: "6",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "teal",
                                          attrs: { dark: "", outlined: "" }
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            {
                                              staticClass:
                                                "subtitle-2 text-uppercase d-flex mx-auto font-weight-bold"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-center" },
                                                [_vm._v("Respiration")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "mx-auto",
                                                  attrs: { size: "40" }
                                                },
                                                [_vm._v("mdi-head-flash")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-text",
                                            { staticClass: "text-center" },
                                            [
                                              _vm.vitals
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass: "display-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.vitals
                                                            .respiratory_rate
                                                        ) + " BPM"
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "span",
                                                    {
                                                      staticClass: "display-1"
                                                    },
                                                    [_vm._v("0")]
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
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-toolbar",
                { attrs: { flat: "" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-dialog",
                    {
                      attrs: {
                        scrollable: "",
                        "max-width": "600px",
                        persistent: ""
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
                                    staticClass: "px-8 mx-2",
                                    attrs: {
                                      tile: "",
                                      color: "info darken-2",
                                      dark: "",
                                      depressed: ""
                                    }
                                  },
                                  on
                                ),
                                [
                                  _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [_vm._v("Book for Lab Test")]
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.appointmentdialog,
                        callback: function($$v) {
                          _vm.appointmentdialog = $$v
                        },
                        expression: "appointmentdialog"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "transparent" },
                            [
                              _c("v-icon", { staticClass: "mr-2" }, [
                                _vm._v("mdi-briefcase-clock")
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Book Appointment")])
                            ],
                            1
                          ),
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
                                        "subtitle-1 font-weight-bold d-block text-center"
                                    },
                                    [_vm._v("Clinical Laboratory Test")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    {
                                      attrs: {
                                        justify: "center",
                                        align: "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "d-flex justify-center",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "v-avatar",
                                            { attrs: { size: "80" } },
                                            [
                                              _c("v-img", {
                                                staticClass: "mx-auto",
                                                attrs: {
                                                  src: "/app_asset/lab tech.jpg"
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
                                                      attrs: {
                                                        pill: "",
                                                        value: doctor.id
                                                      }
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
                                                            _vm._s(
                                                              doctor.firstname
                                                            )
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
                                                    expression:
                                                      "appointment_time"
                                                  }
                                                },
                                                [
                                                  _vm.timings.length
                                                    ? _vm._l(
                                                        _vm.timings,
                                                        function(timing) {
                                                          return _c(
                                                            "v-chip",
                                                            {
                                                              key: timing.id,
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
                                                  expression:
                                                    "appointment_reason"
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
                            { staticClass: "d-flex justify-content-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "info darken-1 px-6 mr-2",
                                    dark: "",
                                    depressed: "",
                                    rounded: ""
                                  },
                                  on: { click: _vm.close_appointment_dialog }
                                },
                                [
                                  _c("span", { staticClass: "caption" }, [
                                    _vm._v("cancel")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "success darken-2 px-6",
                                  attrs: {
                                    rounded: "",
                                    dark: "",
                                    elevation: "15"
                                  },
                                  on: { click: _vm.book_appointment }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "caption font-weight-light"
                                    },
                                    [_vm._v("book")]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-7",
                      attrs: {
                        tile: "",
                        color: "red darken-2",
                        dark: "",
                        depressed: ""
                      },
                      on: { click: _vm.refer_patient }
                    },
                    [
                      _c("span", { staticClass: "caption font-weight-bold" }, [
                        _vm._v("Refer patient")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-7 mx-2",
                      attrs: {
                        tile: "",
                        color: "success darken-2",
                        dark: "",
                        depressed: ""
                      },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.medical_history_dialog = true
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "caption font-weight-bold" }, [
                        _vm._v("Medical History")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "mt-4" },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "subtitle-2 grey--text font-weight-bold darken-3 text-uppercase"
                    },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "mr-1", attrs: { size: "25" } },
                        [_vm._v("mdi-library")]
                      ),
                      _vm._v(
                        "\n                    Specialist Assessment\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-2" }),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-7 pa-4 mt-4",
                          attrs: { outlined: "" }
                        },
                        [
                          _c(
                            "v-form",
                            { ref: "medicForm" },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-centent-space-between"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold text-center"
                                        },
                                        [_vm._v("Problem Description")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "ml-auto" },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-checkbook")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "success",
                                      rules: _vm.medicRules
                                    },
                                    model: {
                                      value: _vm.medical.problem,
                                      callback: function($$v) {
                                        _vm.$set(_vm.medical, "problem", $$v)
                                      },
                                      expression: "medical.problem"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-centent-space-between"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold text-center"
                                        },
                                        [_vm._v("Allergies")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "ml-auto" },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-account-alert")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "success",
                                      rules: _vm.medicRules
                                    },
                                    model: {
                                      value: _vm.medical.allergies,
                                      callback: function($$v) {
                                        _vm.$set(_vm.medical, "allergies", $$v)
                                      },
                                      expression: "medical.allergies"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-centent-space-between"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold text-center"
                                        },
                                        [_vm._v("Diagnosis")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "ml-auto" },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-telescope")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-textarea", {
                                    attrs: {
                                      color: "success",
                                      height: "100",
                                      rules: _vm.medicRules
                                    },
                                    model: {
                                      value: _vm.medical.Diagnosis,
                                      callback: function($$v) {
                                        _vm.$set(_vm.medical, "Diagnosis", $$v)
                                      },
                                      expression: "medical.Diagnosis"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mt-5" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-centent-space-between"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold text-center"
                                        },
                                        [_vm._v("Medication")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "ml-auto" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "red darken-2",
                                              attrs: {
                                                dark: "",
                                                rounded: "",
                                                elevation: "15"
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  _vm.drug_dialog = true
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    size: "17",
                                                    left: ""
                                                  }
                                                },
                                                [_vm._v("mdi-pill")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "caption" },
                                                [_vm._v("Drug Prescription")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "mx-2",
                                              attrs: {
                                                fab: "",
                                                dark: "",
                                                small: "",
                                                color: "teal"
                                              },
                                              on: {
                                                click: _vm.clearPrescriptions
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    dark: "",
                                                    size: "18"
                                                  }
                                                },
                                                [_vm._v("mdi-close")]
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
                                  _vm.allPrescribedDrugs
                                    ? [
                                        _c(
                                          "v-row",
                                          _vm._l(
                                            _vm.allPrescribedDrugs.drugs,
                                            function(data, index) {
                                              return _c(
                                                "v-col",
                                                {
                                                  key: index,
                                                  attrs: { cols: "6", md: "3" }
                                                },
                                                [
                                                  _c(
                                                    "v-card",
                                                    {
                                                      staticClass:
                                                        "success darken-2 text-center pa-2",
                                                      attrs: {
                                                        dark: "",
                                                        outlined: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-card-actions",
                                                        {
                                                          staticClass:
                                                            "d-flex justify-content-center"
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                color: "white"
                                                              }
                                                            },
                                                            [_vm._v("mdi-pill")]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-card-text",
                                                        { staticClass: "pa-0" },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold text-uppercase"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(data)
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            }
                                          ),
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-divider"),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                          },
                                          [
                                            _c("i", [
                                              _vm._v("Dosage: "),
                                              _c(
                                                "span",
                                                { staticClass: "black--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.allPrescribedDrugs
                                                        .dosage
                                                    )
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                          },
                                          [
                                            _c("i", [
                                              _vm._v("Starting Course: "),
                                              _c(
                                                "span",
                                                { staticClass: "black--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("formatDate")(
                                                        _vm.allPrescribedDrugs
                                                          .start_course
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                          },
                                          [
                                            _c("i", [
                                              _vm._v("Ending Course: "),
                                              _c(
                                                "span",
                                                { staticClass: "black--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("formatDate")(
                                                        _vm.allPrescribedDrugs
                                                          .end_course
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-divider"),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "ml-5" }, [
                                          _c("i", [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "ml-5 black--text font-weight-bold text-uppercase caption"
                                              },
                                              [_vm._v("Drug Intake Interval")]
                                            ),
                                            _vm._v(" "),
                                            _vm.allPrescribedDrugs.morning_time
                                              ? _c(
                                                  "p",
                                                  { staticClass: "ml-7" },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                                      },
                                                      [
                                                        _vm._v("Morning"),
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            staticClass: "ml-1",
                                                            attrs: {
                                                              color: "warning"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-brightness-7"
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(
                                                      ":\n                                                    "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "black--text font-weight-bold text-uppercase caption"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm
                                                              .allPrescribedDrugs
                                                              .morning_time
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.allPrescribedDrugs
                                              .afternoon_time
                                              ? _c(
                                                  "p",
                                                  { staticClass: "ml-7" },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                                      },
                                                      [
                                                        _vm._v("Afternoon"),
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            staticClass: "ml-1",
                                                            attrs: {
                                                              color:
                                                                "warning darken-2"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-brightness-5"
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(
                                                      ":\n                                                    "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "black--text font-weight-bold text-uppercase caption"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm
                                                              .allPrescribedDrugs
                                                              .afternoon_time
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.allPrescribedDrugs.evening_time
                                              ? _c(
                                                  "p",
                                                  { staticClass: "ml-7" },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                                      },
                                                      [
                                                        _vm._v("Evening"),
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            staticClass: "ml-1",
                                                            attrs: {
                                                              color:
                                                                "success darken-2"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-brightness-2"
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(
                                                      ":\n                                                    "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "black--text font-weight-bold text-uppercase caption"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm
                                                              .allPrescribedDrugs
                                                              .evening_time
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ])
                                        ])
                                      ]
                                    : [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "ml-5 grey--text font-weight-bold text-uppercase darken-5"
                                          },
                                          [
                                            _c("i", [
                                              _vm._v("No Drug(s) Prescribed")
                                            ])
                                          ]
                                        )
                                      ]
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mt-8" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-centent-space-between"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold text-center"
                                        },
                                        [_vm._v("Specialist Note")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "ml-auto" },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-note-text")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-textarea", {
                                    attrs: { color: "success", height: "100" },
                                    model: {
                                      value: _vm.medical.notes,
                                      callback: function($$v) {
                                        _vm.$set(_vm.medical, "notes", $$v)
                                      },
                                      expression: "medical.notes"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                {
                                  staticClass: "d-flex justify-content-center"
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "success darken-2 px-5",
                                      attrs: {
                                        elevation: "20",
                                        rounded: "",
                                        dark: "",
                                        large: ""
                                      },
                                      on: { click: _vm.submit }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold"
                                        },
                                        [_vm._v("Submit")]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-dialog",
                    {
                      attrs: {
                        persistent: "",
                        "max-width": "500",
                        scrollable: ""
                      },
                      model: {
                        value: _vm.drug_dialog,
                        callback: function($$v) {
                          _vm.drug_dialog = $$v
                        },
                        expression: "drug_dialog"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "subtitle-2 font-weight-bold" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold text-uppercase"
                                },
                                [_vm._v("Drug Prescription")]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", color: "success darken-2" }
                                },
                                [_c("v-icon", [_vm._v("mdi-hospital-box")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            {
                              staticClass: "px-10",
                              staticStyle: { height: "500px" }
                            },
                            [
                              _c(
                                "v-form",
                                { ref: "prescriptionForm" },
                                [
                                  _c(
                                    "section",
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-weight-bold caption text-uppercase text-center"
                                        },
                                        [
                                          _vm._v("Drug "),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "ml-2",
                                              attrs: {
                                                color: "success darken-2"
                                              }
                                            },
                                            [_vm._v("mdi-pill")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-combobox", {
                                        attrs: {
                                          items: _vm.items,
                                          label: "Drugs Prescribed",
                                          multiple: "",
                                          chips: "",
                                          rules: _vm.pillRules,
                                          attach: ""
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(data) {
                                              return [
                                                _c(
                                                  "v-chip",
                                                  _vm._b(
                                                    {
                                                      key: JSON.stringify(
                                                        data.item
                                                      ),
                                                      attrs: {
                                                        "input-value":
                                                          data.selected,
                                                        disabled: data.disabled
                                                      },
                                                      on: {
                                                        "click:close": function(
                                                          $event
                                                        ) {
                                                          return data.parent.selectItem(
                                                            data.item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "v-chip",
                                                    data.attrs,
                                                    false
                                                  ),
                                                  [
                                                    _c("v-avatar", {
                                                      staticClass:
                                                        "accent white--text",
                                                      attrs: { left: "" },
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          data.item
                                                            .slice(0, 1)
                                                            .toUpperCase()
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(
                                                      "\n                                        " +
                                                        _vm._s(data.item) +
                                                        "\n                                        "
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.data.drugs,
                                          callback: function($$v) {
                                            _vm.$set(_vm.data, "drugs", $$v)
                                          },
                                          expression: "data.drugs"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "section",
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-weight-bold caption text-uppercase text-center"
                                        },
                                        [
                                          _vm._v("Drug Dosage "),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "ml-2",
                                              attrs: {
                                                color: "success darken-2"
                                              }
                                            },
                                            [_vm._v("mdi-briefcase-plus")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { rules: _vm.pillRules },
                                        model: {
                                          value: _vm.data.dosage,
                                          callback: function($$v) {
                                            _vm.$set(_vm.data, "dosage", $$v)
                                          },
                                          expression: "data.dosage"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "section",
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-weight-bold caption text-uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            "Course Duration\n                                    "
                                          ),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "ml-2",
                                              attrs: {
                                                color: "success darken-2"
                                              }
                                            },
                                            [_vm._v("mdi-calendar")]
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
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _c(
                                                "v-menu",
                                                {
                                                  ref: "start_course_dialog",
                                                  attrs: {
                                                    "close-on-content-click": false,
                                                    transition:
                                                      "scale-transition",
                                                    "offset-y": "",
                                                    "max-width": "290px",
                                                    "min-width": "290px"
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
                                                                  rules:
                                                                    _vm.pillRules
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.data
                                                                      .start_course,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.data,
                                                                      "start_course",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "data.start_course"
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
                                                    value:
                                                      _vm.start_course_dialog,
                                                    callback: function($$v) {
                                                      _vm.start_course_dialog = $$v
                                                    },
                                                    expression:
                                                      "start_course_dialog"
                                                  }
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c("v-date-picker", {
                                                    attrs: { "no-title": "" },
                                                    on: {
                                                      input: function($event) {
                                                        _vm.start_course_dialog = false
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.data.start_course,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.data,
                                                          "start_course",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "data.start_course"
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
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _c(
                                                "v-menu",
                                                {
                                                  ref: "end_course_dialog",
                                                  attrs: {
                                                    "close-on-content-click": false,
                                                    transition:
                                                      "scale-transition",
                                                    "offset-y": "",
                                                    "max-width": "290px",
                                                    "min-width": "290px"
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
                                                                  rules:
                                                                    _vm.pillRules
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.data
                                                                      .end_course,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.data,
                                                                      "end_course",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "data.end_course"
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
                                                    value:
                                                      _vm.end_course_dialog,
                                                    callback: function($$v) {
                                                      _vm.end_course_dialog = $$v
                                                    },
                                                    expression:
                                                      "end_course_dialog"
                                                  }
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c("v-date-picker", {
                                                    attrs: { "no-title": "" },
                                                    on: {
                                                      input: function($event) {
                                                        _vm.end_course_dialog = false
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.data.end_course,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.data,
                                                          "end_course",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "data.end_course"
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
                                              staticClass: "mt-7",
                                              attrs: { cols: "12", md: "3" }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "grey--text darken-5 text-uppercase subtitle-2"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.getDaysLeft)
                                                  )
                                                ]
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
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-space-between"
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-weight-bold caption text-uppercase"
                                            },
                                            [_vm._v("Time Details")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "mb-2 ml-auto" },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color: "success darken-2"
                                                  }
                                                },
                                                [_vm._v("mdi-clock-alert")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider"),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "mt-3",
                                              attrs: { cols: "12", md: "4" }
                                            },
                                            [
                                              _c("span", [_vm._v("Morning")]),
                                              _vm._v(" "),
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "ml-1",
                                                  attrs: {
                                                    color: "warning darken-2"
                                                  }
                                                },
                                                [_vm._v("mdi-brightness-7")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "8" } },
                                            [
                                              _c(
                                                "v-menu",
                                                {
                                                  ref: "morning_time_menu",
                                                  attrs: {
                                                    "close-on-content-click": false,
                                                    "nudge-right": 40,
                                                    "return-value":
                                                      _vm.data.morning_time,
                                                    transition:
                                                      "scale-transition",
                                                    "offset-y": "",
                                                    "max-width": "290px",
                                                    "min-width": "290px"
                                                  },
                                                  on: {
                                                    "update:returnValue": function(
                                                      $event
                                                    ) {
                                                      return _vm.$set(
                                                        _vm.data,
                                                        "morning_time",
                                                        $event
                                                      )
                                                    },
                                                    "update:return-value": function(
                                                      $event
                                                    ) {
                                                      return _vm.$set(
                                                        _vm.data,
                                                        "morning_time",
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
                                                                  dense: "",
                                                                  label:
                                                                    "Time to be taken",
                                                                  rules:
                                                                    _vm.pillRules
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.data
                                                                      .morning_time,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.data,
                                                                      "morning_time",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "data.morning_time"
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
                                                    value: _vm.morning_menu,
                                                    callback: function($$v) {
                                                      _vm.morning_menu = $$v
                                                    },
                                                    expression: "morning_menu"
                                                  }
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _vm.morning_menu
                                                    ? _c("v-time-picker", {
                                                        attrs: {
                                                          "full-width": ""
                                                        },
                                                        on: {
                                                          "click:minute": function(
                                                            $event
                                                          ) {
                                                            return _vm.$refs.morning_time_menu.save(
                                                              _vm.data
                                                                .morning_time
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.data
                                                              .morning_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.data,
                                                              "morning_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "data.morning_time"
                                                        }
                                                      })
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
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "mt-3",
                                              attrs: { cols: "12", md: "4" }
                                            },
                                            [
                                              _c("span", [_vm._v("Afternoon")]),
                                              _vm._v(" "),
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "ml-1",
                                                  attrs: { color: "warning" }
                                                },
                                                [_vm._v("mdi-brightness-5")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "8" } },
                                            [
                                              _c(
                                                "v-menu",
                                                {
                                                  ref: "afternoon_time_menu",
                                                  attrs: {
                                                    "close-on-content-click": false,
                                                    "nudge-right": 40,
                                                    "return-value":
                                                      _vm.data.afternoon_time,
                                                    transition:
                                                      "scale-transition",
                                                    "offset-y": "",
                                                    "max-width": "290px",
                                                    "min-width": "290px"
                                                  },
                                                  on: {
                                                    "update:returnValue": function(
                                                      $event
                                                    ) {
                                                      return _vm.$set(
                                                        _vm.data,
                                                        "afternoon_time",
                                                        $event
                                                      )
                                                    },
                                                    "update:return-value": function(
                                                      $event
                                                    ) {
                                                      return _vm.$set(
                                                        _vm.data,
                                                        "afternoon_time",
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
                                                                  dense: "",
                                                                  label:
                                                                    "Time to be taken",
                                                                  rules:
                                                                    _vm.pillRules
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.data
                                                                      .afternoon_time,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.data,
                                                                      "afternoon_time",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "data.afternoon_time"
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
                                                    value: _vm.afternoon_menu,
                                                    callback: function($$v) {
                                                      _vm.afternoon_menu = $$v
                                                    },
                                                    expression: "afternoon_menu"
                                                  }
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _vm.afternoon_menu
                                                    ? _c("v-time-picker", {
                                                        attrs: {
                                                          "full-width": ""
                                                        },
                                                        on: {
                                                          "click:minute": function(
                                                            $event
                                                          ) {
                                                            return _vm.$refs.afternoon_time_menu.save(
                                                              _vm.data
                                                                .afternoon_time
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.data
                                                              .afternoon_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.data,
                                                              "afternoon_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "data.afternoon_time"
                                                        }
                                                      })
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
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "mt-3",
                                              attrs: { cols: "12", md: "4" }
                                            },
                                            [
                                              _c("span", [_vm._v("Evening")]),
                                              _vm._v(" "),
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "ml-1",
                                                  attrs: {
                                                    color: "success darken-3"
                                                  }
                                                },
                                                [_vm._v("mdi-brightness-2")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "8" } },
                                            [
                                              _c(
                                                "v-menu",
                                                {
                                                  ref: "evening_time_menu",
                                                  attrs: {
                                                    "close-on-content-click": false,
                                                    "nudge-right": 40,
                                                    "return-value":
                                                      _vm.data.evening_time,
                                                    transition:
                                                      "scale-transition",
                                                    "offset-y": "",
                                                    "max-width": "290px",
                                                    "min-width": "290px"
                                                  },
                                                  on: {
                                                    "update:returnValue": function(
                                                      $event
                                                    ) {
                                                      return _vm.$set(
                                                        _vm.data,
                                                        "evening_time",
                                                        $event
                                                      )
                                                    },
                                                    "update:return-value": function(
                                                      $event
                                                    ) {
                                                      return _vm.$set(
                                                        _vm.data,
                                                        "evening_time",
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
                                                                  dense: "",
                                                                  label:
                                                                    "Time to be taken",
                                                                  rules:
                                                                    _vm.pillRules
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.data
                                                                      .evening_time,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.data,
                                                                      "evening_time",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "data.evening_time"
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
                                                    value: _vm.evening_menu,
                                                    callback: function($$v) {
                                                      _vm.evening_menu = $$v
                                                    },
                                                    expression: "evening_menu"
                                                  }
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _vm.evening_menu
                                                    ? _c("v-time-picker", {
                                                        attrs: {
                                                          "full-width": ""
                                                        },
                                                        on: {
                                                          "click:minute": function(
                                                            $event
                                                          ) {
                                                            return _vm.$refs.evening_time_menu.save(
                                                              _vm.data
                                                                .evening_time
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.data
                                                              .evening_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.data,
                                                              "evening_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "data.evening_time"
                                                        }
                                                      })
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
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            { staticClass: "d-flex justify-content-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "success darken-2",
                                  attrs: {
                                    rounded: "",
                                    dark: "",
                                    elevation: "15"
                                  },
                                  on: { click: _vm.prescribe }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [_vm._v("save")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.drug_dialog = false
                                    }
                                  }
                                },
                                [_vm._v("Close")]
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
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.medical_history_dialog,
            callback: function($$v) {
              _vm.medical_history_dialog = $$v
            },
            expression: "medical_history_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "success darken-2", flat: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.medical_history_dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-title",
                    { staticClass: "subtitle-1 font-weight-bold" },
                    [_vm._v("Medical History")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: {
                            click: function($event) {
                              _vm.medical_history_dialog = false
                            }
                          }
                        },
                        [_vm._v("Close")]
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
                { staticClass: "mb-0" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-responsive",
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: "/app_asset/medix_full.png",
                                  width: "15%"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "h6",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold text-center text-uppercase"
                            },
                            [_vm._v("Medical History Information")]
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
              _c("v-divider", { staticClass: "mt-0" }),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-card",
                    { staticClass: "pa-3", attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _c(
                            "span",
                            { staticClass: "subtitle-2 font-weight-bold" },
                            [
                              _vm._v(
                                _vm._s(_vm.appointment.patient.firstname) +
                                  " " +
                                  _vm._s(_vm.appointment.patient.lastname)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.medical_search,
                              callback: function($$v) {
                                _vm.medical_search = $$v
                              },
                              expression: "medical_search"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.medicaHistory,
                          search: _vm.medical_search
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.created_at",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatDate")(item.created_at)
                                    )
                                  )
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
                                    staticClass: "px-5",
                                    attrs: {
                                      rounded: "",
                                      elevation: "15",
                                      color: "info darken-2"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.view_prescription(item)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { left: "" } }, [
                                      _vm._v("mdi-format-list-text")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "caption" }, [
                                      _vm._v("Prescriptions")
                                    ])
                                  ],
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
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.vital_history_dialog,
            callback: function($$v) {
              _vm.vital_history_dialog = $$v
            },
            expression: "vital_history_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "success darken-2", flat: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.vital_history_dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-title",
                    { staticClass: "subtitle-1 font-weight-bold" },
                    [_vm._v("Vitals History")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: {
                            click: function($event) {
                              _vm.vital_history_dialog = false
                            }
                          }
                        },
                        [_vm._v("Close")]
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
                { staticClass: "mb-0" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-responsive",
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: "/app_asset/medix_full.png",
                                  width: "15%"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "h6",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold text-center text-uppercase"
                            },
                            [_vm._v("Vitals History Information")]
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
              _c("v-divider", { staticClass: "mt-0" }),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-card",
                    { staticClass: "pa-3", attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _c(
                            "span",
                            { staticClass: "subtitle-2 font-weight-bold" },
                            [
                              _vm._v(
                                _vm._s(_vm.appointment.patient.firstname) +
                                  " " +
                                  _vm._s(_vm.appointment.patient.lastname)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.vital_search,
                              callback: function($$v) {
                                _vm.vital_search = $$v
                              },
                              expression: "vital_search"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.vital_headers,
                          items: _vm.vitalsHistory,
                          search: _vm.vital_search
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.created_at",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatVitalDate")(item.created_at)
                                    )
                                  )
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.user",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(item.user.firstname) +
                                      " " +
                                      _vm._s(item.user.lastname)
                                  )
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.pressure",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(item.systolic) +
                                      " / " +
                                      _vm._s(item.diastolic) +
                                      " mmHg"
                                  )
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.temperature",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(_vm._s(item.temperature) + " ℃")
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.respiratory_rate",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(_vm._s(item.respiratory_rate) + " BPM")
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.pulse_rate",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(_vm._s(item.pulse_rate) + " BPM")
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.weight",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(_vm._s(item.weight) + " Kg")
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.height",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.calculateVitalsBMI(
                                        item.weight,
                                        item.height
                                      )
                                    ) + " BMI"
                                  )
                                ])
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600" },
          model: {
            value: _vm.prescription_dialog,
            callback: function($$v) {
              _vm.prescription_dialog = $$v
            },
            expression: "prescription_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "subtitle-1 font-weight-bold grey--text darken-5"
                },
                [_vm._v("Medical Prescriptions")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _vm.prescription_items
                    ? _vm._l(_vm.prescription_items, function(data, index) {
                        return _c(
                          "div",
                          { key: index },
                          [
                            _c(
                              "v-row",
                              _vm._l(data.drug_name, function(drug, index) {
                                return _c(
                                  "v-col",
                                  { key: index },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass:
                                          "success darken-2 text-center pa-2",
                                        attrs: { dark: "", outlined: "" }
                                      },
                                      [
                                        _c(
                                          "v-card-actions",
                                          {
                                            staticClass:
                                              "d-flex justify-content-center"
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "white" } },
                                              [_vm._v("mdi-pill")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          { staticClass: "pa-0" },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "subtitle-2 font-weight-bold text-uppercase"
                                              },
                                              [_vm._v(_vm._s(drug))]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              1
                            ),
                            _vm._v(" "),
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                              },
                              [
                                _c("i", [
                                  _vm._v("Dosage: "),
                                  _c("span", { staticClass: "black--text" }, [
                                    _vm._v(_vm._s(data.dosage))
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                              },
                              [
                                _c("i", [
                                  _vm._v("Starting Course: "),
                                  _c("span", { staticClass: "black--text" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(data.start_course)
                                      )
                                    )
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                              },
                              [
                                _c("i", [
                                  _vm._v("Ending Course: "),
                                  _c("span", { staticClass: "black--text" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(data.end_course)
                                      )
                                    )
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-divider"),
                            _vm._v(" "),
                            _c("div", { staticClass: "ml-5" }, [
                              _c("i", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "ml-5 black--text font-weight-bold text-uppercase caption"
                                  },
                                  [_vm._v("Drug Intake Interval")]
                                ),
                                _vm._v(" "),
                                data.morning_time
                                  ? _c("p", { staticClass: "ml-7" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                        },
                                        [
                                          _vm._v("Morning"),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "ml-1",
                                              attrs: { color: "warning" }
                                            },
                                            [_vm._v("mdi-brightness-7")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(
                                        ":\n                                    "
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "black--text font-weight-bold text-uppercase caption"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatTime")(
                                                data.morning_time
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                data.afternoon_time
                                  ? _c("p", { staticClass: "ml-7" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                        },
                                        [
                                          _vm._v("Afternoon"),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "ml-1",
                                              attrs: {
                                                color: "warning darken-2"
                                              }
                                            },
                                            [_vm._v("mdi-brightness-5")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(
                                        ":\n                                    "
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "black--text font-weight-bold text-uppercase caption"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatTime")(
                                                data.afternoon_time
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                data.evening_time
                                  ? _c("p", { staticClass: "ml-7" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "ml-5 grey--text font-weight-bold text-uppercase caption darken-5"
                                        },
                                        [
                                          _vm._v("Evening"),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "ml-1",
                                              attrs: {
                                                color: "success darken-2"
                                              }
                                            },
                                            [_vm._v("mdi-brightness-2")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(
                                        ":\n                                    "
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "black--text font-weight-bold text-uppercase caption"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatTime")(
                                                data.evening_time
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ])
                          ],
                          1
                        )
                      })
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-5",
                      attrs: {
                        color: "green darken-2",
                        dark: "",
                        rounded: "",
                        elevation: "15"
                      },
                      on: {
                        click: function($event) {
                          _vm.prescription_dialog = false
                        }
                      }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("close")])]
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
            { attrs: { color: "sucess darken-1", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("span", { staticClass: "caption font-italic" }, [
                    _vm._v("updating data...")
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

/***/ "./resources/js/components/MedicalAssessmentDetails.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/MedicalAssessmentDetails.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MedicalAssessmentDetails_vue_vue_type_template_id_ebbf830c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true& */ "./resources/js/components/MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true&");
/* harmony import */ var _MedicalAssessmentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicalAssessmentDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/MedicalAssessmentDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MedicalAssessmentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MedicalAssessmentDetails_vue_vue_type_template_id_ebbf830c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MedicalAssessmentDetails_vue_vue_type_template_id_ebbf830c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ebbf830c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MedicalAssessmentDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MedicalAssessmentDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/MedicalAssessmentDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessmentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MedicalAssessmentDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessmentDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessmentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessmentDetails_vue_vue_type_template_id_ebbf830c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessmentDetails.vue?vue&type=template&id=ebbf830c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessmentDetails_vue_vue_type_template_id_ebbf830c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessmentDetails_vue_vue_type_template_id_ebbf830c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);