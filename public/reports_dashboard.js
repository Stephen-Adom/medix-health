(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports_dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsDashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsDashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrugChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DrugChart */ "./resources/js/DrugChart.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _DrugChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      items: [],
      available: null,
      expired: null,
      all_out: null,
      datacollection: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['active', 'total', 'getUser', 'Patients']), {
    formatStatus: function formatStatus() {
      if (this.getUser) {
        if (this.getUser.status === 1) {
          return 'Active';
        } else {
          return 'Inactive';
        }
      }
    },
    getImage: function getImage() {
      if (this.getUser) {
        if (this.getUser.image) {
          return '/storage/profiles/' + this.getUser.image;
        } else {
          if (this.getUser.role_id === 1) {
            return '/app_asset/doctor.jpg';
          } else if (this.getUser.role_id === 2) {
            return '/app_asset/nurse.jpg';
          } else if (this.getUser.role_id === 3) {
            return '/app_asset/pharmacist.jpg';
          } else if (this.getUser.role_id === 4) {
            return '/app_asset/lab tech.jpg';
          } else if (this.getUser.role_id === 5) {
            return '/app_asset/manager.png';
          }
        }
      }
    }
  }),
  watch: {
    Patients: function Patients() {
      if (this.Patients) {
        this.formatPatientData();
      }
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['fetchActive', 'fetchPatients']), {
    formatPatientData: function formatPatientData() {
      if (this.Patients) {
        this.items = this.Patients.map(function (data) {
          return {
            name: data.title + " " + data.firstname + " " + data.lastname,
            job_title: data.job_title,
            appointment_count: data.appointments.length,
            gender: data.gender,
            image: data.image
          };
        });
      }
    },
    fillData: function fillData() {
      var _this = this;

      axios.get('/api/drug_analysis').then(function (response) {
        _this.expired = response.data.expired;
        _this.available = response.data.available;
        _this.all_out = response.data.out;
        _this.datacollection = {
          labels: ['Available', 'Expired', 'Out of Stock'],
          datasets: [{
            label: 'Patient Data',
            backgroundColor: ['#0CB33D', '#DC0509', '#DCB105'],
            data: [_this.available, _this.expired, _this.all_out]
          }]
        };
      });
    },
    reports_dashboard: function reports_dashboard() {
      this.$router.push({
        name: 'reports_dashboard'
      });
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getRandomColor: function getRandomColor(appointment) {
      if (appointment) {
        var colors = ['red darken-2', 'success darken-2', 'warning darken-1', 'primary'];
        var item = colors[Math.floor(Math.random(0, 1) * colors.length)];
        return item;
      }
    },
    formatImage: function formatImage(item) {
      if (item.image) {
        return '/storage/patients/profiles/' + item.image;
      } else {
        if (item.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    }
  }),
  created: function created() {
    this.fetchPatients();
    this.fetchActive();
    this.fillData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsVital.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsVital.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _VitalLineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VitalLineChart */ "./resources/js/VitalLineChart.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_3__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _VitalLineChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      pdf_loading_dialog: false,
      vital_report_dialog: false,
      patient_id: null,
      loading_dialog: false,
      search_patient: '',
      hideBackground: true,
      indeterminate: true,
      progress: true,
      start_date: null,
      end_date: null,
      end_date_modal: false,
      start_date_modal: false,
      chart_dialog: false,
      medical_dialog: false,
      medical_headers: [{
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
        text: 'Height',
        value: 'height',
        align: 'center'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      medical_search: '',
      vitalHistory: [],
      patients: null,
      datacollection: null,
      dateCategory: null,
      colors: ['red darken-2', 'success darken-2', 'warning darken-1', 'primary'],
      inputRules: [function (v) {
        return !!v || 'Date is required';
      }],
      backgroundColors: ['#FF0066', '#08900A', '#9933CC', '#FF8800', '#00695c'],
      report: null,
      patient_report: null
    };
  },
  watch: {
    patient_vitals: function patient_vitals() {
      if (this.patient_vitals) {
        this.patients = this.patient_vitals;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['patient_vitals']), {
    filteredPatients: function filteredPatients() {
      var _this = this;

      return this.patients.filter(function (data) {
        return data.firstname.toLowerCase().match(_this.search_patient.toLowerCase()) || data.lastname.toLowerCase().match(_this.search_patient.toLowerCase());
      });
    },
    getImage: function getImage() {
      if (this.patient_report !== null) {
        if (this.patient_report.image) {
          return '/storage/patients/profiles/' + this.patient_report.image;
        } else {
          if (this.patient_report.gender === 'Male') {
            return '/app_asset/male_avatar.png';
          } else {
            return '/app_asset/undraw_female_avatar_l3ey.png';
          }
        }
      }
    },
    calculateBMI: function calculateBMI() {
      if (this.report !== null) {
        if (this.report.weight && this.report.height) {
          var height_in_meters = this.report.height / 100;
          var height_squared = height_in_meters * height_in_meters;
          var bmi = this.report.weight / height_squared;
          return bmi.toFixed(1);
        }
      }
    },
    pressure_analyze: function pressure_analyze() {
      if (this.report !== null) {
        if (this.report.systolic < 120 && this.report.diastolic < 80) {
          return 'Normal';
        } else if (this.report.systolic <= 129 && this.report.systolic >= 120 && this.report.diastolic < 80) {
          return 'Elevated';
        } else if (this.report.systolic <= 139 && this.report.systolic >= 130 || this.report.diastolic <= 89 && this.report.diastolic >= 80) {
          return 'Hypertension Stage 1';
        } else if (this.report.systolic >= 140 || this.report.diastolic >= 90) {
          return 'Hypertension Stage 2';
        } else if (this.report.systolic > 180 && this.report.diastolic > 120) {
          return 'Hypertension Crises';
        } else if (this.report.systolic > 180 || this.report.diastolic > 120) {
          return 'Hypertension Crises';
        }
      }
    },
    temperature_analysis: function temperature_analysis() {
      if (this.report !== null) {
        if (this.report.temperature <= 37.2 && this.report.temperature >= 36.5) {
          return 'Normal';
        } else if (this.report.temperature < 36.5) {
          return 'Hypothermia';
        } else if (this.report.temperature > 37.2) {
          return 'Fever';
        }
      }
    },
    temperature_F: function temperature_F() {
      if (this.report !== null) {
        var fahren = this.report.temperature * 1.8 + 32;
        return fahren;
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatientVitals']), {
    print_form: function print_form() {
      var _this2 = this;

      this.pdf_loading_dialog = true;
      document.getElementById('print_preview_toolbar').style.display = "none";
      var ele = document.getElementById('form_html');
      /** WITH CSS */

      dom_to_image__WEBPACK_IMPORTED_MODULE_3___default.a.toJpeg(ele).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a({
          orientation: "portrait",
          // unit: "pt",
          format: [1000, 1400]
        });
        doc.addImage(img, "JPEG", 10, 5);
        var filename = "Vital Record.pdf";
        doc.save(filename);
        _this2.pdf_loading_dialog = false;
        document.getElementById('print_preview_toolbar').style.display = "block";
      })["catch"](function (error) {
        console.error("oops, something went wrong!", error);
        this.pdf_loading_dialog = false;
        document.getElementById('print_preview_toolbar').style.display = "block";
      });
    },
    fillData: function fillData() {
      this.datacollection = {
        labels: ['Systolic', 'Diastolic', 'Heart Rate', 'Respiratory Rate', 'Temperature'],
        datasets: this.dateCategory
      };
    },
    openChart: function openChart(item) {
      var _this3 = this;

      this.patient_id = item.id, this.loading_dialog = true;
      axios.post('/api/patient_vitals', {
        id: item.id
      }).then(function (response) {
        _this3.vitalHistory = response.data;
        _this3.dateCategory = _this3.vitalHistory.map(function (item) {
          return {
            label: moment(item.created_at).format('MMMM Do, YYYY'),
            backgroundColor: _this3.backgroundColors[Math.floor(Math.random(0, 1) * _this3.backgroundColors.length)],
            data: [item.systolic, item.diastolic, item.pulse_rate, item.respiratory_rate, item.temperature]
          };
        });

        if (_this3.dateCategory) {
          _this3.fillData();

          _this3.loading_dialog = false;
          _this3.chart_dialog = true;
        }
      }); // this.chart_dialog = true;
    },
    openRecords: function openRecords(item) {
      var _this4 = this;

      this.patient_report = item;
      this.loading_dialog = true;
      axios.post('/api/patient_vitals', {
        id: item.id
      }).then(function (response) {
        _this4.vitalHistory = response.data;
      });

      if (this.vitalHistory) {
        this.loading_dialog = false;
        this.medical_dialog = true;
      }
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getInitials: function getInitials(item) {
      var first = item.firstname.slice(0, 1).toUpperCase();
      var last = item.lastname.slice(0, 1).toUpperCase();
      var ini = first + '' + last;
      return ini;
    },
    getRandomColor: function getRandomColor(item) {
      if (item) {
        var item = this.colors[Math.floor(Math.random(0, 1) * this.colors.length)];
        return item;
      }
    },
    formatStatus: function formatStatus(item) {
      if (item.referred === 0) {
        return 'mdi-star';
      } else {
        return 'mdi-cached';
      }
    },
    formatStatusColor: function formatStatusColor(item) {
      if (item.referred === 0) {
        return 'warning darken-1';
      } else {
        return 'red darken-3';
      }
    },
    date_range: function date_range() {
      var _this5 = this;

      this.loading_dialog = true;

      if (this.$refs.daterange_form.validate()) {
        axios.post('/api/vitals_date_range', {
          id: this.patient_id,
          start: this.start_date,
          end: this.end_date
        }).then(function (response) {
          _this5.vitalHistory = response.data;
          _this5.dateCategory = _this5.vitalHistory.map(function (item) {
            return {
              label: moment(item.created_at).format('MMM Do, YYYY'),
              backgroundColor: ['#FF0066', '#08900A', '#9933CC', '#FF8800', '#00695c'],
              data: [item.systolic, item.diastolic, item.pulse_rate, item.respiratory_rate, item.temperature]
            };
          });

          if (_this5.dateCategory) {
            _this5.fillData();

            _this5.loading_dialog = false;
          }
        });
      }
    },
    open_report: function open_report(item) {
      this.report = item;

      if (this.report !== null) {
        this.vital_report_dialog = true;
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do, YYYY');
    },
    Completed: function Completed(value) {
      if (value === 0) {
        return 'not completed';
      } else if (value === 1) {
        return 'completed';
      }
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  created: function created() {
    this.fetchPatientVitals();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true& ***!
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
    "v-container",
    [
      _c(
        "v-card",
        { staticClass: "pa-4", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            { staticClass: "pa-1 subtitle-2 font-weight-bold" },
            [
              _c(
                "section",
                { staticClass: "d-flex flex-row" },
                [
                  _vm.getUser
                    ? _c(
                        "v-avatar",
                        { attrs: { size: "70" } },
                        [_c("v-img", { attrs: { src: _vm.getImage } })],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.getUser
                    ? _c(
                        "section",
                        { staticClass: "ml-4 text-uppercase mt-2" },
                        [
                          _c("p", { staticClass: "mb-1" }, [
                            _c(
                              "span",
                              { staticClass: "success--text darken-3" },
                              [
                                _vm._v(
                                  _vm._s(_vm.getUser.title) +
                                    " " +
                                    _vm._s(_vm.getUser.firstname)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "grey--text darken-8" }, [
                              _vm._v(_vm._s(_vm.getUser.lastname))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-1" }, [
                            _c("span", { staticClass: "grey--text darken-8" }, [
                              _vm._v("Status:")
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "success--text darken-3" },
                              [_vm._v(_vm._s(_vm.formatStatus))]
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("section", [
                _c("p", { staticClass: "mb-1 grey--text darken-8" }, [
                  _vm._v("Number of Active Staff : "),
                  _c("span", { staticClass: "success--text darken-3" }, [
                    _vm._v(_vm._s(_vm.active))
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-1 grey--text darken-8" }, [
                  _vm._v("Total Number of Staff : "),
                  _c("span", { staticClass: "success--text darken-3" }, [
                    _vm._v(_vm._s(_vm.total))
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "pa-2" },
            [
              _c(
                "section",
                { staticClass: "d-flex" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-5 ml-auto",
                      attrs: {
                        tile: "",
                        color: "success darken-2",
                        dark: "",
                        depressed: ""
                      },
                      on: { click: _vm.goback }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-chevron-double-left")
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "caption font-weight-bold text-uppercase"
                        },
                        [_vm._v("Exit Dashboard")]
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
                    { attrs: { cols: "12", md: "4", lg: "4", sm: "6" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "teal pa-3",
                          attrs: {
                            dark: "",
                            elevation: "10",
                            link: "",
                            to: { name: "reports_vitals" }
                          }
                        },
                        [
                          _c(
                            "v-card-actions",
                            { staticClass: "d-flex justify-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", color: "white", large: "" }
                                },
                                [
                                  _c("v-icon", { attrs: { size: "40" } }, [
                                    _vm._v("mdi-heart-pulse")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "d-flex justify-center pa-2" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold text-uppercase"
                                },
                                [_vm._v("Vitals Reports")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "d-flex justify-center pa-1" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "caption font-weight-bold text-uppercase"
                                },
                                [_vm._v("Analysis of Patients vitals")]
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
                    { attrs: { cols: "12", md: "4", lg: "4", sm: "6" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "red darken-3 pa-3",
                          attrs: {
                            dark: "",
                            elevation: "10",
                            link: "",
                            to: { name: "reports_lab_tests" }
                          }
                        },
                        [
                          _c(
                            "v-card-actions",
                            { staticClass: "d-flex justify-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", color: "white", large: "" }
                                },
                                [
                                  _c("v-icon", { attrs: { size: "40" } }, [
                                    _vm._v("mdi-microscope")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "d-flex justify-center pa-2" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold text-uppercase"
                                },
                                [_vm._v("Lab Reports")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "d-flex justify-center pa-1" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "caption font-weight-bold text-uppercase text-center"
                                },
                                [_vm._v("Clinical Laboratory Reports")]
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
                    { attrs: { cols: "12", md: "4", lg: "4", sm: "6" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "warning darken-1 pa-3",
                          attrs: {
                            dark: "",
                            elevation: "10",
                            link: "",
                            to: { name: "reports_medicals" }
                          }
                        },
                        [
                          _c(
                            "v-card-actions",
                            { staticClass: "d-flex justify-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", color: "white", large: "" }
                                },
                                [
                                  _c("v-icon", { attrs: { size: "40" } }, [
                                    _vm._v("mdi-account-group")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "d-flex justify-center pa-2" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold text-uppercase"
                                },
                                [_vm._v("Patient's Medical Reports")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "d-flex justify-center pa-1" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "caption font-weight-bold text-uppercase text-center"
                                },
                                [_vm._v("Patients Health Reports")]
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "5", lg: "5", sm: "4" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "pa-2", attrs: { outlined: "" } },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "pa-2 caption font-weight-bold text-uppercase"
                            },
                            [_vm._v("Drugs Analysis")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "pa-2" },
                            [
                              _c("line-chart", {
                                attrs: {
                                  "chart-data": _vm.datacollection,
                                  height: 300
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
                    "v-col",
                    { attrs: { cols: "12", md: "7", lg: "7", sm: "7" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "pa-2", attrs: { outlined: "" } },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "pa-2 caption font-weight-bold text-uppercase"
                            },
                            [
                              _c("span", [
                                _vm._v("Patient Appointment Analysis")
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _vm.Patients
                                ? _c("span", [
                                    _vm._v(
                                      "Total: " + _vm._s(_vm.Patients.length)
                                    )
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            {
                              staticClass: "pa-2",
                              staticStyle: {
                                height: "300px !important",
                                "overflow-y": "auto !important"
                              }
                            },
                            [
                              _c(
                                "v-list",
                                _vm._l(_vm.items, function(item, index) {
                                  return _c(
                                    "v-list-item",
                                    { key: index },
                                    [
                                      _c(
                                        "v-list-item-avatar",
                                        {
                                          attrs: {
                                            color: _vm.getRandomColor(item),
                                            size: "40"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "caption white--text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(item.appointment_count)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", {
                                            staticClass:
                                              "subtitle-2 font-weight-bold",
                                            domProps: {
                                              textContent: _vm._s(item.name)
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-subtitle",
                                            {
                                              staticClass:
                                                "caption font-weight-regular grey--text darken-9"
                                            },
                                            [
                                              _vm._v(
                                                "Job Title: " +
                                                  _vm._s(item.job_title)
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-avatar",
                                        { attrs: { size: "60" } },
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src: _vm.formatImage(item)
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "mx-auto",
      staticStyle: { width: "95%" },
      attrs: { id: "main_content" }
    },
    [
      _c(
        "v-card",
        { staticClass: "pa-4", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "span",
                {
                  staticClass:
                    "subtitle-1 text-uppercase font-weight-bold grey--text darken-9"
                },
                [_vm._v("Vital Records And Analysis")]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "px-5 py-2",
                  attrs: {
                    color: "success darken-2",
                    dark: "",
                    depressed: "",
                    tile: ""
                  },
                  on: { click: _vm.goback }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-chevron-double-left")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "caption font-weight-bold text-uppercase" },
                    [_vm._v("back")]
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
            "v-card-text",
            { staticClass: "pa-2" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "7" } },
                    [
                      _c(
                        "v-responsive",
                        [
                          _c("v-img", {
                            staticClass: "mr-auto",
                            attrs: {
                              src:
                                "/app_asset/undraw_detailed_analysis_xn7y.svg",
                              width: "35%"
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
                      staticClass: "d-flex ml-auto mt-10",
                      attrs: { cols: "12", md: "5" }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          rounded: "",
                          outlined: "",
                          color: "success darken-2",
                          label: "Search",
                          placeholder: "Looking for a patient..."
                        },
                        model: {
                          value: _vm.search_patient,
                          callback: function($$v) {
                            _vm.search_patient = $$v
                          },
                          expression: "search_patient"
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
            "v-card-text",
            [
              _vm.patients
                ? _c(
                    "v-row",
                    _vm._l(_vm.filteredPatients, function(item, index) {
                      return _c(
                        "v-col",
                        { key: index, attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "pa-3 d-flex flex-row",
                              staticStyle: { "border-left": "4px solid green" },
                              attrs: { outlined: "" }
                            },
                            [
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-avatar",
                                    {
                                      attrs: {
                                        color: _vm.getRandomColor(item),
                                        elevation: "10"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "white--text" },
                                        [_vm._v(_vm._s(_vm.getInitials(item)))]
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticClass: "d-flex flex-column" },
                                [
                                  item
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 grey--text darken-10 font-weight-bold text-uppercase"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(item.title) +
                                              " " +
                                              _vm._s(item.firstname) +
                                              " " +
                                              _vm._s(item.lastname)
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.job_title
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "Job Title: " +
                                              _vm._s(item.job_title)
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold"
                                        },
                                        [
                                          _vm._v("Status: "),
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: _vm.formatStatusColor(
                                                  item
                                                ),
                                                size: "20"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.formatStatus(item))
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "ml-auto flex-row d-flex" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "px-5 py-2 mx-2",
                                      attrs: {
                                        color: "success darken-2",
                                        dark: "",
                                        depressed: "",
                                        tile: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openRecords(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { left: "", size: "20" } },
                                        [_vm._v("mdi-format-align-right")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold text-uppercase"
                                        },
                                        [_vm._v("Reports")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "px-5 py-2 mx-2",
                                      attrs: {
                                        color: "red darken-3",
                                        dark: "",
                                        depressed: "",
                                        tile: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openChart(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { left: "", size: "20" } },
                                        [_vm._v("mdi-chart-areaspline")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold text-uppercase"
                                        },
                                        [_vm._v("Analysis")]
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
                    }),
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
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.chart_dialog,
            callback: function($$v) {
              _vm.chart_dialog = $$v
            },
            expression: "chart_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "teal darken-1", flat: "" } },
                [
                  _c(
                    "v-toolbar-title",
                    {
                      staticClass: "subtitle-2 font-weight-bold text-uppercase"
                    },
                    [
                      _vm._v(
                        "\n            Vital Chart Analysis\n            "
                      ),
                      _c("v-icon", { staticClass: "ml-3" }, [
                        _vm._v("mdi-chart-areaspline")
                      ])
                    ],
                    1
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
                              _vm.chart_dialog = false
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
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-5 d-flex flex-column",
                      attrs: { cols: "12", md: "5" }
                    },
                    [
                      _c("v-img", {
                        staticClass: "mx-auto",
                        attrs: {
                          src: "/app_asset/medix_full.png",
                          width: "30%"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "h3",
                        {
                          staticClass:
                            "subtitle-2 mt-2 text-uppercase font-weight-bold text-center mx-auto"
                        },
                        [_vm._v("Vitals Chart Analysis")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "7" } },
                    [
                      _c(
                        "v-form",
                        { ref: "daterange_form" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "mt-10",
                                  attrs: { cols: "6", md: "4" }
                                },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "dialog",
                                      attrs: {
                                        "return-value": _vm.start_date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          _vm.start_date = $event
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          _vm.start_date = $event
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
                                                      rules: _vm.inputRules,
                                                      label: "Picker in dialog",
                                                      "prepend-icon":
                                                        "mdi-calendar",
                                                      readonly: ""
                                                    },
                                                    model: {
                                                      value: _vm.start_date,
                                                      callback: function($$v) {
                                                        _vm.start_date = $$v
                                                      },
                                                      expression: "start_date"
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
                                        value: _vm.start_date_modal,
                                        callback: function($$v) {
                                          _vm.start_date_modal = $$v
                                        },
                                        expression: "start_date_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.start_date,
                                            callback: function($$v) {
                                              _vm.start_date = $$v
                                            },
                                            expression: "start_date"
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
                                                  _vm.start_date_modal = false
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
                                                    _vm.start_date
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
                                  staticClass: "mt-10",
                                  attrs: { cols: "6", md: "4" }
                                },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "start_dialog",
                                      attrs: {
                                        "return-value": _vm.end_date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          _vm.end_date = $event
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          _vm.end_date = $event
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
                                                      rules: _vm.inputRules,
                                                      label: "Picker in dialog",
                                                      "prepend-icon":
                                                        "mdi-calendar",
                                                      readonly: ""
                                                    },
                                                    model: {
                                                      value: _vm.end_date,
                                                      callback: function($$v) {
                                                        _vm.end_date = $$v
                                                      },
                                                      expression: "end_date"
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
                                        value: _vm.end_date_modal,
                                        callback: function($$v) {
                                          _vm.end_date_modal = $$v
                                        },
                                        expression: "end_date_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.end_date,
                                            callback: function($$v) {
                                              _vm.end_date = $$v
                                            },
                                            expression: "end_date"
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
                                                  _vm.end_date_modal = false
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
                                                  return _vm.$refs.start_dialog.save(
                                                    _vm.end_date
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
                                  staticStyle: { "margin-top": "60px" },
                                  attrs: { cols: "6", md: "4" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "px-5 py-2",
                                      attrs: {
                                        color: "info darken-2",
                                        dark: "",
                                        elevation: "15",
                                        rounded: ""
                                      },
                                      on: { click: _vm.date_range }
                                    },
                                    [
                                      _c("v-icon", { attrs: { left: "" } }, [
                                        _vm._v("mdi-flash-circle")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold text-uppercase"
                                        },
                                        [_vm._v("Genderate Report")]
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
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-card",
                    { staticClass: "pa-2", attrs: { outlined: "" } },
                    [
                      _c("line-chart", {
                        attrs: { "chart-data": _vm.datacollection, height: 120 }
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
            value: _vm.medical_dialog,
            callback: function($$v) {
              _vm.medical_dialog = $$v
            },
            expression: "medical_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "info darken-1", flat: "" } },
                [
                  _c(
                    "v-toolbar-title",
                    {
                      staticClass: "subtitle-2 font-weight-bold text-uppercase"
                    },
                    [
                      _vm._v(
                        "\n            Vitals Records Analysis\n            "
                      ),
                      _c("v-icon", { staticClass: "ml-3" }, [
                        _vm._v("mdi-medical-bag")
                      ])
                    ],
                    1
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
                              _vm.medical_dialog = false
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
                    [_vm._v("All Vitals Records")]
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
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "pa-0" },
                        [
                          _c(
                            "v-card",
                            { staticClass: "pa-0", attrs: { outlined: "" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "subtitle-2 font-weight-bold"
                                    },
                                    [_vm._v("Vital Report List")]
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
                                  headers: _vm.medical_headers,
                                  items: _vm.vitalHistory,
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
                                              _vm._f("formatDate")(
                                                item.created_at
                                              )
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
                                            _vm._s(item.user.title) +
                                              " " +
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
                                          _vm._v(
                                            _vm._s(item.temperature) + " ℃"
                                          )
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
                                          _vm._v(
                                            _vm._s(item.temperature) + " BPM"
                                          )
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
                                          _vm._v(
                                            _vm._s(item.pulse_rate) + " BPM"
                                          )
                                        ])
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.weight",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        item.weight
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(item.weight) + " KG"
                                              )
                                            ])
                                          : _c("span", [_vm._v("N/A")])
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.height",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        item.height
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(item.height) + " cm"
                                              )
                                            ])
                                          : _c("span", [_vm._v("N/A")])
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
                                            attrs: {
                                              rounded: "",
                                              color: "info darken-1",
                                              elevation: "10"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.open_report(item)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { left: "", size: "18" }
                                              },
                                              [_vm._v("mdi-flash-circle")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "caption" },
                                              [_vm._v("generate report")]
                                            )
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
            id: "vital_report_form",
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.vital_report_dialog,
            callback: function($$v) {
              _vm.vital_report_dialog = $$v
            },
            expression: "vital_report_dialog"
          }
        },
        [
          _c(
            "html",
            {
              staticStyle: { width: "100%", margin: "0 auto" },
              attrs: { id: "form_html" }
            },
            [
              _c(
                "body",
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-card",
                            { staticClass: "pa-4", attrs: { outlined: "" } },
                            [
                              _c(
                                "section",
                                { staticClass: "d-flex" },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: "/app_asset/medix_full.png",
                                      "max-width": "200"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "ml-10 subtitle-1 font-weight-bold text-uppercase",
                                      staticStyle: { "padding-top": "63px" }
                                    },
                                    [_vm._v("Vitals Record Report")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { attrs: { id: "print_preview_toolbar" } },
                                    [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
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
                                                        staticClass:
                                                          "px-5 caption d-print-none",
                                                        staticStyle: {
                                                          "margin-top": "60px"
                                                        },
                                                        attrs: {
                                                          color:
                                                            "success darken-2",
                                                          tile: "",
                                                          dark: "",
                                                          depressed: ""
                                                        },
                                                        on: {
                                                          click: _vm.print_form
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { left: "" } },
                                                        [_vm._v("mdi-download")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [_vm._v("pdf")]
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
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("Download form as pdf")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "px-5 ml-5 caption d-print-none",
                                          staticStyle: { "margin-top": "60px" },
                                          attrs: {
                                            color: "red darken-2",
                                            dark: "",
                                            tile: "",
                                            depressed: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.vital_report_dialog = false
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
                              _c("div", {
                                staticStyle: {
                                  width: "100%",
                                  height: "5px",
                                  margin: "10px auto",
                                  "background-color": "grey"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        align: "center",
                                        justify: "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-avatar",
                                        { attrs: { size: "120" } },
                                        [
                                          _c("v-img", {
                                            attrs: { src: _vm.getImage }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "d-flex flex-column" },
                                        [
                                          _vm.patient_report !== null
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "subtitle-2 font-weight-bold"
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "mr-1",
                                                      attrs: {
                                                        color:
                                                          "success darken-1"
                                                      }
                                                    },
                                                    [_vm._v("mdi-account")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                " +
                                                      _vm._s(
                                                        _vm.patient_report.title
                                                      ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm.patient_report
                                                          .firstname
                                                      ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm.patient_report
                                                          .lastname
                                                      ) +
                                                      "\n                            "
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.patient_report !== null
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "subtitle-2 font-weight-bold"
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "mr-1",
                                                      attrs: {
                                                        color:
                                                          "success darken-1"
                                                      }
                                                    },
                                                    [_vm._v("mdi-account-tie")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                " +
                                                      _vm._s(
                                                        _vm.patient_report
                                                          .job_title
                                                      ) +
                                                      "\n                            "
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ]
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
                                "section",
                                {
                                  staticStyle: {
                                    width: "70%",
                                    margin: "0 auto"
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", { attrs: { cols: "3" } }, [
                                        _vm.patient_report !== null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-column justify-center align-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "title font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.patient_report.age
                                                      ) + " "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "caption font-weight-bold"
                                                      },
                                                      [_vm._v("years")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-regular text-uppercase"
                                                  },
                                                  [_vm._v("Age")]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("v-col", { attrs: { cols: "3" } }, [
                                        _vm.report !== null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-column justify-center align-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "title font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.calculateBMI) +
                                                        " "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "caption font-weight-bold"
                                                      },
                                                      [_vm._v("bmi")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-regular text-uppercase"
                                                  },
                                                  [_vm._v("BMI")]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("v-col", { attrs: { cols: "3" } }, [
                                        _vm.report !== null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-column justify-center align-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "title font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.report.height
                                                      ) + " "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "caption font-weight-bold"
                                                      },
                                                      [_vm._v("cm")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-regular text-uppercase"
                                                  },
                                                  [_vm._v("Height")]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("v-col", { attrs: { cols: "3" } }, [
                                        _vm.report !== null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-column justify-center align-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "title font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.report.weight
                                                      ) + " "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "caption font-weight-bold"
                                                      },
                                                      [_vm._v("kg")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-regular text-uppercase"
                                                  },
                                                  [_vm._v("Weight")]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "grey darken-3",
                                      attrs: { dark: "" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold white--text"
                                        },
                                        [_vm._v("Blood Pressure")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-2",
                                          attrs: { color: "white" }
                                        },
                                        [_vm._v("mdi-heart-flash")]
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
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _vm.report !== null
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-column"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "headline font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                _vm.report
                                                                  .systolic
                                                              ) +
                                                              " / " +
                                                              _vm._s(
                                                                _vm.report
                                                                  .diastolic
                                                              ) +
                                                              " "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption font-weight-bold"
                                                            },
                                                            [_vm._v("mmHg")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "subtitle-2 my-3"
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                size: "18"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-clock"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "formatDate"
                                                                )(
                                                                  _vm.report
                                                                    .created_at
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "8" } },
                                            [
                                              _vm.report !== null
                                                ? _c(
                                                    "section",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-column"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "d-flex"
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold subtitle-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Systolic Value (mmHg) :"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold mx-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.report
                                                                    .systolic
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex mt-3"
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold subtitle-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Diastolic Value (mmHg) :"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold mx-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.report
                                                                    .diastolic
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex mt-3"
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold subtitle-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Blood Pressure Category"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-chip",
                                                            {
                                                              staticClass:
                                                                "primary ml-auto px-5",
                                                              attrs: {
                                                                pill: "",
                                                                dark: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.pressure_analyze
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
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
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "grey darken-3",
                                      attrs: { dark: "" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold white--text"
                                        },
                                        [_vm._v("Heart Rate Pulse")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-2",
                                          attrs: { color: "white" }
                                        },
                                        [_vm._v("mdi-heart-pulse")]
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
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _vm.report !== null
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-column"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "headline font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                _vm.report
                                                                  .pulse_rate
                                                              ) +
                                                              " "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption font-weight-bold"
                                                            },
                                                            [_vm._v("bpm")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "subtitle-2 my-3"
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                size: "18"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-clock"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "formatDate"
                                                                )(
                                                                  _vm.report
                                                                    .created_at
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "8" } },
                                            [
                                              _c(
                                                "section",
                                                {
                                                  staticClass:
                                                    "d-flex flex-column"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold subtitle-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Measurement indicate the  heart rhythm and the strength of the pulse "
                                                          )
                                                        ]
                                                      )
                                                    ]
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
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "grey darken-3",
                                      attrs: { dark: "" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold white--text"
                                        },
                                        [_vm._v("Respiratory Rate")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-2",
                                          attrs: { color: "white" }
                                        },
                                        [_vm._v("mdi-head-flash")]
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
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _vm.report !== null
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-column"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "headline font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                _vm.report
                                                                  .respiratory_rate
                                                              ) +
                                                              " "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption font-weight-bold"
                                                            },
                                                            [_vm._v("bpm")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "subtitle-2 my-3"
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                size: "18"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-clock"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "formatDate"
                                                                )(
                                                                  _vm.report
                                                                    .created_at
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "8" } },
                                            [
                                              _c(
                                                "section",
                                                {
                                                  staticClass:
                                                    "d-flex flex-column"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold subtitle-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Measurement indicate the number of breaths per minute "
                                                          )
                                                        ]
                                                      )
                                                    ]
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
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "grey darken-3",
                                      attrs: { dark: "" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold white--text"
                                        },
                                        [_vm._v("Body Temperature")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-2",
                                          attrs: { color: "white" }
                                        },
                                        [_vm._v("mdi-thermometer")]
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
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _vm.report !== null
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-column"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "headline font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                _vm.report
                                                                  .temperature
                                                              ) +
                                                              " "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption font-weight-bold"
                                                            },
                                                            [_vm._v(" ℃")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "subtitle-2 my-3"
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                size: "18"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-clock"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "formatDate"
                                                                )(
                                                                  _vm.report
                                                                    .created_at
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _c(
                                                "section",
                                                {
                                                  staticClass:
                                                    "d-flex flex-column"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold subtitle-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Measurement of body heat "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "d-flex mt-3"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold subtitle-2 mr-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Body Temperature in Degrees Fahrenheit: "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.temperature_F
                                                            ) + " ℉"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "d-flex mt-3"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold subtitle-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Temperature Analysis "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-chip",
                                                        {
                                                          staticClass:
                                                            "primary mx-2 px-5",
                                                          attrs: {
                                                            pill: "",
                                                            dark: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.temperature_analysis
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.report !== null
                                            ? _c(
                                                "v-col",
                                                {
                                                  staticClass: "d-flex",
                                                  attrs: { cols: "4" }
                                                },
                                                [
                                                  _c(
                                                    "v-progress-circular",
                                                    {
                                                      staticClass: "ml-auto",
                                                      attrs: {
                                                        rotate: 180,
                                                        size: 100,
                                                        width: 15,
                                                        value:
                                                          _vm.report
                                                            .temperature,
                                                        color: "pink"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.report.temperature
                                                        )
                                                      )
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
            ]
          )
        ]
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
                    { staticClass: "subtitle-2 font-weight-bold font-italic" },
                    [_vm._v("Loading data. Please wait...")]
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "hide-overlay": "", persistent: "", width: "300" },
          model: {
            value: _vm.pdf_loading_dialog,
            callback: function($$v) {
              _vm.pdf_loading_dialog = $$v
            },
            expression: "pdf_loading_dialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { color: "teal", dark: "", outlined: "", flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("preparing pdf, please wait...")]
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

/***/ "./resources/js/DrugChart.js":
/*!***********************************!*\
  !*** ./resources/js/DrugChart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
      legend: {
        display: true
      },
      title: {
        display: false,
        position: 'top'
      },
      responsive: true
    });
  }
});

/***/ }),

/***/ "./resources/js/VitalLineChart.js":
/*!****************************************!*\
  !*** ./resources/js/VitalLineChart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
      legend: {
        display: true
      },
      title: {
        display: false,
        position: 'top'
      },
      responsive: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/ReportsDashboard.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ReportsDashboard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportsDashboard_vue_vue_type_template_id_2bcdff80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true& */ "./resources/js/components/ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true&");
/* harmony import */ var _ReportsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/ReportsDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsDashboard_vue_vue_type_template_id_2bcdff80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportsDashboard_vue_vue_type_template_id_2bcdff80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bcdff80",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReportsDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReportsDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ReportsDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsDashboard_vue_vue_type_template_id_2bcdff80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsDashboard.vue?vue&type=template&id=2bcdff80&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsDashboard_vue_vue_type_template_id_2bcdff80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsDashboard_vue_vue_type_template_id_2bcdff80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReportsVital.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ReportsVital.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportsVital_vue_vue_type_template_id_3d2f32f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true& */ "./resources/js/components/ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true&");
/* harmony import */ var _ReportsVital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsVital.vue?vue&type=script&lang=js& */ "./resources/js/components/ReportsVital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportsVital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsVital_vue_vue_type_template_id_3d2f32f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportsVital_vue_vue_type_template_id_3d2f32f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d2f32f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReportsVital.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReportsVital.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ReportsVital.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsVital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsVital.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsVital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsVital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsVital_vue_vue_type_template_id_3d2f32f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsVital.vue?vue&type=template&id=3d2f32f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsVital_vue_vue_type_template_id_3d2f32f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsVital_vue_vue_type_template_id_3d2f32f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);