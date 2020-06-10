(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lab-tests-result"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabTestResult.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
/* harmony import */ var _components_labtest_blood_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/labtest/blood.vue */ "./resources/js/components/labtest/blood.vue");
/* harmony import */ var _components_labtest_urine_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/labtest/urine.vue */ "./resources/js/components/labtest/urine.vue");
/* harmony import */ var _components_labtest_faecal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/labtest/faecal.vue */ "./resources/js/components/labtest/faecal.vue");
/* harmony import */ var _components_labtest_saliva_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/labtest/saliva.vue */ "./resources/js/components/labtest/saliva.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Lab_test',
  components: {
    Blood: _components_labtest_blood_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Urine: _components_labtest_urine_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Faecal: _components_labtest_faecal_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Saliva: _components_labtest_saliva_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      vitals: null,
      index: null,
      medical: null
    };
  },
  props: {
    id: [Number, String]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['all_Accepted_Appointment', 'allDrugs', 'allPrescribedDrugs']), {
    appointment: function appointment() {
      var _this = this;

      return this.all_Accepted_Appointment.find(function (data) {
        return data.id == _this.id;
      });
    },
    getImage: function getImage() {
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
    formatContact: function formatContact() {
      if (this.appointment) {
        var contact = this.appointment.patient.phone;
        return contact.slice(1);
      }
    },
    formatGender: function formatGender() {
      if (this.appointment) {
        if (this.appointment.patient.gender == 'Male') {
          return 'mdi-gender-male';
        } else {
          return 'mdi-gender-female';
        }
      }
    },
    pick_color: function pick_color() {
      if (this.index === 1) {
        return 'red darken-3';
      } else if (this.index === 2) {
        return 'success darken-2';
      } else if (this.index === 3) {
        return '#FF8800';
      } else if (this.index === 4) {
        return '#6e40bd';
      }
    },
    pick_title: function pick_title() {
      if (this.index === 1) {
        return 'Blood Test Report';
      } else if (this.index === 2) {
        return 'Urinalysis Test Report';
      } else if (this.index === 3) {
        return 'Faecal Test Report';
      } else if (this.index === 4) {
        return 'Saliva Test Report';
      }
    },
    get_report: function get_report() {
      if (this.index === 1) {
        return 'blood';
      } else if (this.index === 2) {
        return 'urine';
      } else if (this.index === 3) {
        return 'faecal';
      } else if (this.index === 4) {
        return 'saliva';
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchCurrentAppointment']), {
    goback: function goback() {
      this.$router.go(-1);
    },
    getMedical: function getMedical(id) {
      var _this2 = this;

      axios.post('/api/latest_medical', {
        id: id
      }).then(function (response) {
        _this2.medical = response.data;
      });
    },
    getVital: function getVital(id) {
      var _this3 = this;

      axios.post('/api/medic_vital', {
        id: id
      }).then(function (response) {
        _this3.vitals = response.data;

        _this3.calculateBMI();
      });
    },
    calculateBMI: function calculateBMI() {
      if (this.vitals) {
        if (this.vitals.weight && this.vitals.height) {
          var height_in_meters = parseFloat(this.vitals.height) / 100;
          var height_squared = parseFloat(height_in_meters) * parseFloat(height_in_meters);
          var bmi = this.vitals.weight / height_squared;
          return bmi.toFixed(1);
        }
      }
    },
    visit_account: function visit_account() {
      this.$router.push({
        name: 'patient_details',
        params: {
          id: this.appointment.patient.id
        }
      });
    },
    open_blood_test: function open_blood_test() {
      this.index = 1;
      this.dialog = true;
    },
    open_urine_test: function open_urine_test() {
      this.index = 2;
      this.dialog = true;
    },
    open_stool_test: function open_stool_test() {
      this.index = 3;
      this.dialog = true;
    },
    open_saliva_test: function open_saliva_test() {
      this.index = 4;
      this.dialog = true;
    }
  }),
  mounted: function mounted() {
    if (this.appointment) {
      this.getVital(this.appointment.patient.id);
      this.getMedical(this.appointment.patient.id);
    } else {
      this.appointment;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/blood.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/blood.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Blood-Form',
  props: ['appointment'],
  data: function data() {
    return {
      loading_dialog: false,
      collection_time_modal: false,
      received_date_modal: false,
      collection_date_modal: false,
      received_time_modal: false,
      inputRules: [function (v) {
        return !!v || 'Field is required';
      }],
      info: {
        spec: "",
        collection_date: null,
        collection_time: null,
        received_date: null,
        received_time: null,
        ordering_dr: "",
        status: "",
        physician_copy: "",
        specimen: ""
      },
      cbc: {
        white_blood: "",
        red_blood: "",
        hemoglobin: "",
        mcv: "",
        mch: "",
        mchc: "",
        rdw: "",
        platelet: "",
        platelet_volume: ""
      },
      metabolic: {
        glucose: "",
        sodium: "",
        potassium: "",
        calcium: "",
        chloride: "",
        dioxide: "",
        nitrogen: "",
        creatinine: "",
        albumin: "",
        protein: "",
        alp: "",
        alt: "",
        ast: "",
        bilirubin: "",
        thromboplastin: "",
        prothrombin: ""
      },
      lipoprotein: {
        high_density: "",
        low_density: "",
        total: "",
        triglycerides: ""
      },
      enzymes: {
        cpk_1: "",
        cpk_2: "",
        cpk_3: "",
        troponin: ""
      },
      thyroid: _defineProperty({
        t3: "",
        ru: "",
        t4: ""
      }, "t3", ""),
      coagulation: {
        prothrombin: "",
        fibrinogen: ""
      },
      disease: {
        chlamydia: "",
        gonorrhea: "",
        herpes: "",
        hiv: "",
        syphilis: ""
      },
      sulphate_serum_test: "",
      reactive: "",
      patient: null
    };
  },
  computed: {
    patient_name: function patient_name() {
      if (this.appointment) {
        return this.appointment.patient.firstname + " " + this.appointment.patient.lastname;
      }
    },
    current_date: function current_date() {
      return moment().format('MMMM, Do YYYY');
    },
    formateDob: function formateDob() {
      if (this.appointment) {
        return moment(this.appointment.patient.dob).format('YYYY MMMM, Do dddd');
      }
    }
  },
  methods: {
    save_cbc: function save_cbc() {
      var _this = this;

      if (this.$refs.basic_info.validate() && this.$refs.cbc.validate()) {
        this.loading_dialog = true;
        axios.post('/store_blood_cbc', {
          patient: this.appointment,
          info: this.info,
          cbc: this.cbc
        }).then(function (response) {
          if (response.data.success) {
            _this.loading_dialog = false;

            _this.$refs.cbc.resetValidation();

            _this.$refs.cbc.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_cbc: function cancel_cbc() {
      this.$refs.cbc.reset();
      this.$refs.cbc.resetValidation();
    },
    save_metabolic: function save_metabolic() {
      var _this2 = this;

      if (this.$refs.basic_info.validate() && this.$refs.metabolic.validate()) {
        this.loading_dialog = true;
        axios.post('/store_blood_metabolic', {
          patient: this.appointment,
          info: this.info,
          metabolic: this.metabolic
        }).then(function (response) {
          if (response.data.success) {
            _this2.loading_dialog = false;

            _this2.$refs.metabolic.reset();

            _this2.$refs.metabolic.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this2.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_metabolic: function cancel_metabolic() {
      this.$refs.metabolic.reset();
      this.$refs.metabolic.resetValidation();
    },
    save_lipoprotein: function save_lipoprotein() {
      var _this3 = this;

      if (this.$refs.basic_info.validate() && this.$refs.lipoprotein.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_lipoprotein', {
          patient: this.appointment,
          info: this.info,
          lipoprotein: this.lipoprotein
        }).then(function (response) {
          if (response.data.success) {
            _this3.loading_dialog = false;

            _this3.$refs.lipoprotein.reset();

            _this3.$refs.lipoprotein.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this3.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_lipoprotein: function cancel_lipoprotein() {
      this.$refs.lipoprotein.reset();
      this.$refs.lipoprotein.resetValidation();
    },
    save_enzymes: function save_enzymes() {
      var _this4 = this;

      if (this.$refs.basic_info.validate() && this.$refs.enzymes.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_enzymes', {
          patient: this.appointment,
          info: this.info,
          enzymes: this.enzymes
        }).then(function (response) {
          if (response.data.success) {
            _this4.loading_dialog = false;

            _this4.$refs.enzymes.reset();

            _this4.$refs.enzymes.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this4.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_enzymes: function cancel_enzymes() {
      this.$refs.enzymes.reset();
      this.$refs.enzymes.resetValidation();
    },
    save_thyroid: function save_thyroid() {
      var _this5 = this;

      if (this.$refs.basic_info.validate() && this.$refs.thyroid.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_thyroid', {
          patient: this.appointment,
          info: this.info,
          thyroid: this.thyroid
        }).then(function (response) {
          if (response.data.success) {
            _this5.loading_dialog = false;

            _this5.$refs.thyroid.reset();

            _this5.$refs.thyroid.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this5.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_thyroid: function cancel_thyroid() {
      this.$refs.thyroid.reset();
      this.$refs.thyroid.resetValidation();
    },
    save_coagulation: function save_coagulation() {
      var _this6 = this;

      if (this.$refs.basic_info.validate() && this.$refs.coagulation.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_coagulation', {
          patient: this.appointment,
          info: this.info,
          coagulation: this.coagulation
        }).then(function (response) {
          if (response.data.success) {
            _this6.loading_dialog = false;

            _this6.$refs.coagulation.reset();

            _this6.$refs.coagulation.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this6.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_coagulation: function cancel_coagulation() {
      this.$refs.coagulation.reset();
      this.$refs.coagulation.resetValidation();
    },
    save_disease: function save_disease() {
      var _this7 = this;

      if (this.$refs.basic_info.validate() && this.$refs.disease.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_disease', {
          patient: this.appointment,
          info: this.info,
          disease: this.disease
        }).then(function (response) {
          if (response.data.success) {
            _this7.loading_dialog = false;

            _this7.$refs.disease.reset();

            _this7.$refs.disease.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this7.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_disease: function cancel_disease() {
      this.$refs.disease.reset();
      this.$refs.disease.resetValidation();
    },
    save_dea: function save_dea() {
      var _this8 = this;

      if (this.$refs.basic_info.validate() && this.$refs.dea.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_dea', {
          patient: this.appointment,
          info: this.info,
          dea: this.sulphate_serum_test
        }).then(function (response) {
          if (response.data.success) {
            _this8.loading_dialog = false;

            _this8.$refs.dea.reset();

            _this8.$refs.dea.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this8.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_dea: function cancel_dea() {
      this.$refs.dea.reset();
      this.$refs.dea.resetValidation();
    },
    save_reactive: function save_reactive() {
      var _this9 = this;

      if (this.$refs.basic_info.validate() && this.$refs.reactive.validate()) {
        this.loading_dialog = true;
        axios.post('/save_blood_protein', {
          patient: this.appointment,
          info: this.info,
          reactive: this.reactive
        }).then(function (response) {
          if (response.data.success) {
            _this9.loading_dialog = false;

            _this9.$refs.reactive.reset();

            _this9.$refs.reactive.resetValidation();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this9.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_reactive: function cancel_reactive() {
      this.$refs.reactive.reset();
      this.$refs.reactive.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/faecal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/faecal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Faecal",
  props: ['appointment'],
  data: function data() {
    return {
      loading_dialog: false,
      collection_time_modal: false,
      received_date_modal: false,
      collection_date_modal: false,
      received_time_modal: false,
      inputRules: [function (v) {
        return !!v || 'Field is required';
      }],
      info: {
        spec: "",
        collection_date: null,
        collection_time: null,
        received_date: null,
        received_time: null,
        ordering_dr: "",
        status: "",
        physician_copy: "",
        specimen: ""
      },
      faecal: {
        infection: "",
        occult_blood: "",
        bile: "",
        wbc: "",
        rbc: "",
        sugar: "",
        mucus: "",
        ph: ""
      }
    };
  },
  computed: {
    patient_name: function patient_name() {
      if (this.appointment) {
        return this.appointment.patient.firstname + " " + this.appointment.patient.lastname;
      }
    },
    current_date: function current_date() {
      return moment().format('MMMM, Do YYYY');
    },
    formateDob: function formateDob() {
      if (this.appointment) {
        return moment(this.appointment.patient.dob).format('YYYY-MM-DD');
      }
    }
  },
  methods: {
    save_infection: function save_infection() {
      var _this = this;

      if (this.$refs.basic_info.validate() && this.$refs.infection.validate()) {
        this.loading_dialog = true;
        axios.post('/store_faecal', {
          patient: this.appointment,
          info: this.info,
          faecal: this.faecal
        }).then(function (response) {
          if (response.data.success) {
            _this.loading_dialog = false;

            _this.$refs.infection.resetValidation();

            _this.$refs.infection.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_infection: function cancel_infection() {
      this.$refs.infection.reset();
      this.$refs.infection.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/saliva.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/saliva.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['appointment'],
  data: function data() {
    return {
      loading_dialog: false,
      collection_time_modal: false,
      received_date_modal: false,
      collection_date_modal: false,
      received_time_modal: false,
      inputRules: [function (v) {
        return !!v || 'Field is required';
      }],
      info: {
        spec: "",
        collection_date: null,
        collection_time: null,
        received_date: null,
        received_time: null,
        ordering_dr: "",
        status: "",
        physician_copy: "",
        specimen: ""
      },
      steroid: {
        estrogen: "",
        progesterone: "",
        testosterone: "",
        cortisol: "",
        melatonin: "",
        dea: ""
      },
      genetic: {
        dna: "",
        rna: "",
        antibody: "",
        enzymes: ""
      },
      infection: {
        hiv: "",
        cancer: "",
        parasite: "",
        allergies: "",
        ph: ""
      }
    };
  },
  computed: {
    patient_name: function patient_name() {
      if (this.appointment) {
        return this.appointment.patient.firstname + " " + this.appointment.patient.lastname;
      }
    },
    current_date: function current_date() {
      return moment().format('MMMM, Do YYYY');
    },
    formateDob: function formateDob() {
      if (this.appointment) {
        return moment(this.appointment.patient.dob).format('YYYY-MM-DD');
      }
    }
  },
  methods: {
    save_steroid: function save_steroid() {
      var _this = this;

      if (this.$refs.basic_info.validate() && this.$refs.steroid.validate()) {
        this.loading_dialog = true;
        axios.post('/store_saliva_steroid', {
          patient: this.appointment,
          info: this.info,
          steroid: this.steroid
        }).then(function (response) {
          if (response.data.success) {
            _this.loading_dialog = false;

            _this.$refs.steroid.resetValidation();

            _this.$refs.steroid.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_steroid: function cancel_steroid() {
      this.$refs.steroid.reset();
      this.$refs.steroid.resetValidation();
    },
    save_genetic: function save_genetic() {
      var _this2 = this;

      if (this.$refs.basic_info.validate() && this.$refs.genetic.validate()) {
        this.loading_dialog = true;
        axios.post('/store_saliva_genetic', {
          patient: this.appointment,
          info: this.info,
          genetic: this.genetic
        }).then(function (response) {
          if (response.data.success) {
            _this2.loading_dialog = false;

            _this2.$refs.genetic.resetValidation();

            _this2.$refs.genetic.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this2.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_genetic: function cancel_genetic() {
      this.$refs.genetic.reset();
      this.$refs.genetic.resetValidation();
    },
    save_infection: function save_infection() {
      var _this3 = this;

      if (this.$refs.basic_info.validate() && this.$refs.infection.validate()) {
        this.loading_dialog = true;
        axios.post('/store_saliva_infection', {
          patient: this.appointment,
          info: this.info,
          infection: this.infection
        }).then(function (response) {
          if (response.data.success) {
            _this3.loading_dialog = false;

            _this3.$refs.infection.resetValidation();

            _this3.$refs.infection.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this3.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_infection: function cancel_infection() {
      this.$refs.infection.reset();
      this.$refs.infection.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/urine.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/urine.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Urine',
  props: ['appointment'],
  data: function data() {
    return {
      loading_dialog: false,
      collection_time_modal: false,
      received_date_modal: false,
      collection_date_modal: false,
      received_time_modal: false,
      inputRules: [function (v) {
        return !!v || 'Field is required';
      }],
      info: {
        spec: "",
        collection_date: null,
        collection_time: null,
        received_date: null,
        received_time: null,
        ordering_dr: "",
        status: "",
        physician_copy: "",
        specimen: "",
        color: "",
        clarity: ""
      },
      chemical: {
        gravity: "",
        acidity: "",
        concentration: "",
        protein: "",
        sugar: "",
        ketones: "",
        bilirubin: "",
        nitrites: "",
        hemoglobin: "",
        myoglobin: "",
        leukocyte: "",
        ascorbic: ""
      },
      microscopic: {
        rbc: "",
        wbc: "",
        epithelial: "",
        bacteria: "",
        casts: "",
        crystals: ""
      }
    };
  },
  computed: {
    patient_name: function patient_name() {
      if (this.appointment) {
        return this.appointment.patient.firstname + " " + this.appointment.patient.lastname;
      }
    },
    current_date: function current_date() {
      return moment().format('MMMM, Do YYYY');
    },
    formateDob: function formateDob() {
      if (this.appointment) {
        return moment(this.appointment.patient.dob).format('YYYY-MM-DD');
      }
    }
  },
  methods: {
    save_chemical: function save_chemical() {
      var _this = this;

      if (this.$refs.basic_info.validate() && this.$refs.chemical.validate()) {
        this.loading_dialog = true;
        axios.post('/store_urine_chemical', {
          patient: this.appointment,
          info: this.info,
          chemical: this.chemical
        }).then(function (response) {
          if (response.data.success) {
            _this.loading_dialog = false;

            _this.$refs.chemical.resetValidation();

            _this.$refs.chemical.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_chemical: function cancel_chemical() {
      this.$refs.chemical.reset();
      this.$refs.chemical.resetValidation();
    },
    save_microscopic: function save_microscopic() {
      var _this2 = this;

      if (this.$refs.basic_info.validate() && this.$refs.microscopic.validate()) {
        this.loading_dialog = true;
        axios.post('/store_urine_microscopic', {
          patient: this.appointment,
          info: this.info,
          microscopic: this.microscopic
        }).then(function (response) {
          if (response.data.success) {
            _this2.loading_dialog = false;

            _this2.$refs.microscopic.resetValidation();

            _this2.$refs.microscopic.reset();

            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: response.data.success
            });
          }

          if (response.data.error) {
            _this2.loading_dialog = false;
            Swal.fire('Error', response.data.error, 'error');
          }
        });
      } else {
        Swal.fire('No Data', 'Input Data before Submission', 'info');
      }
    },
    cancel_microscopic: function cancel_microscopic() {
      this.$refs.microscopic.reset();
      this.$refs.microscopic.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#info[data-v-4e39d261] {\n  text-align: center !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        {
          staticClass: "pa-0 ma-0",
          staticStyle: { "background-color": "#f5f5f5" },
          attrs: { fluid: "" }
        },
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c(
                "v-toolbar-title",
                {
                  staticClass:
                    "subtitle-2 font-weight-bold grey--text darken-5 text-uppercase"
                },
                [_vm._v("\n              Clinical Tests\n          ")]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "mx-3",
                attrs: { inset: "", vertical: "" }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mx-2",
                  attrs: {
                    fab: "",
                    dark: "",
                    color: "success darken-1",
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "4" } },
                    [
                      _c(
                        "v-list",
                        { attrs: { "three-line": "" } },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-avatar",
                                { attrs: { size: "120" } },
                                [_c("v-img", { attrs: { src: _vm.getImage } })],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _vm.appointment
                                    ? _c(
                                        "v-list-item-title",
                                        { staticClass: "title" },
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
                                                _vm.appointment.patient.lastname
                                              )
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-subtitle",
                                    { staticStyle: { "margin-top": "-45px" } },
                                    [
                                      _vm.appointment
                                        ? _c("span", [
                                            _vm._v(
                                              "Tel: (+233) " +
                                                _vm._s(_vm.formatContact)
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.appointment
                                        ? _c(
                                            "span",
                                            { staticClass: "d-block mt-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "px-5",
                                                  attrs: {
                                                    color: "success darken-2",
                                                    depressed: "",
                                                    tile: "",
                                                    small: ""
                                                  },
                                                  on: {
                                                    click: _vm.visit_account
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Complete Info")]
                                                  )
                                                ]
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
                    { staticClass: "pt-9", attrs: { cols: "12", lg: "8" } },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex" },
                        [
                          _c(
                            "section",
                            { attrs: { id: "info" } },
                            [
                              _c(
                                "v-list",
                                { attrs: { "three-line": "" } },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-subtitle", [
                                            _vm._v("Info")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-title",
                                            { staticClass: "subtitle-2" },
                                            [
                                              _vm.appointment
                                                ? _c(
                                                    "span",
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.appointment
                                                              .patient.age
                                                          ) +
                                                          "years\n                        "
                                                      ),
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "success"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.formatGender
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.vitals !== null
                                                ? _c(
                                                    "span",
                                                    { staticClass: "d-block" },
                                                    [
                                                      _vm._v(
                                                        "\n                        H: "
                                                      ),
                                                      _c("span", [
                                                        _vm.vitals.height
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.vitals
                                                                    .height
                                                                ) + "cm"
                                                              )
                                                            ])
                                                          : _c("span", [
                                                              _vm._v("N/A")
                                                            ])
                                                      ]),
                                                      _vm._v(
                                                        "  \n                        W: "
                                                      ),
                                                      _c("span", [
                                                        _vm.vitals.weight
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.vitals
                                                                    .weight
                                                                ) + "kg"
                                                              )
                                                            ])
                                                          : _c("span", [
                                                              _vm._v("N/A")
                                                            ])
                                                      ])
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            attrs: { inset: "", vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "section",
                            { attrs: { id: "info" } },
                            [
                              _c(
                                "v-list",
                                { attrs: { "three-line": "" } },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-content",
                                        { staticClass: "pt-1" },
                                        [
                                          _c("v-list-item-subtitle", [
                                            _vm._v("Blood Pressure")
                                          ]),
                                          _vm._v(" "),
                                          _vm.vitals
                                            ? _c(
                                                "v-list-item-title",
                                                { staticClass: "subtitle-2" },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.vitals.systolic
                                                      ) +
                                                      "/" +
                                                      _vm._s(
                                                        _vm.vitals.diastolic
                                                      ) +
                                                      " (mmHg)\n                  "
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "v-list-item-title",
                                                { staticClass: "subtitle-2" },
                                                [
                                                  _vm._v(
                                                    "\n                    N/A\n                  "
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
                          _c("v-divider", {
                            attrs: { inset: "", vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "section",
                            { attrs: { id: "info" } },
                            [
                              _c(
                                "v-list",
                                { attrs: { "three-line": "" } },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-content",
                                        { staticClass: "pt-1" },
                                        [
                                          _c("v-list-item-subtitle", [
                                            _vm._v("Allergies")
                                          ]),
                                          _vm._v(" "),
                                          _vm.medical
                                            ? _c(
                                                "v-list-item-title",
                                                { staticClass: "subtitle-2" },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { color: "red" } },
                                                    [_vm._v("mdi-shield-alert")]
                                                  ),
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.medical.allergies
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ],
                                                1
                                              )
                                            : _c(
                                                "v-list-item-title",
                                                { staticClass: "subtitle-2" },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { color: "red" } },
                                                    [_vm._v("mdi-shield-alert")]
                                                  ),
                                                  _vm._v(
                                                    "\n                    N/A\n                  "
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
                          _c("v-divider", {
                            attrs: { inset: "", vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "section",
                            { attrs: { id: "info" } },
                            [
                              _c(
                                "v-list",
                                { attrs: { "three-line": "" } },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-content",
                                        { staticClass: "pt-1" },
                                        [
                                          _c("v-list-item-subtitle", [
                                            _vm._v("Body Mass Index")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-title",
                                            { staticClass: "subtitle-2" },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(_vm.calculateBMI()) +
                                                  " (BMI)\n                  "
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
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-end" },
                      [
                        _c(
                          "section",
                          { attrs: { id: "info" } },
                          [
                            _c(
                              "v-list",
                              { attrs: { "three-line": "" } },
                              [
                                _c(
                                  "v-list-item",
                                  [
                                    _c(
                                      "v-list-item-content",
                                      { staticClass: "pt-1" },
                                      [
                                        _c("v-list-item-subtitle", [
                                          _vm._v("Active Issues")
                                        ]),
                                        _vm._v(" "),
                                        _vm.medical
                                          ? _c(
                                              "v-list-item-title",
                                              { staticClass: "subtitle-2" },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(
                                                      _vm.medical.problem
                                                    ) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
                                          : _c(
                                              "v-list-item-title",
                                              { staticClass: "subtitle-2" },
                                              [
                                                _vm._v(
                                                  "\n                      N/A\n                    "
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
                        _c("v-divider", { attrs: { inset: "", vertical: "" } }),
                        _vm._v(" "),
                        _c(
                          "section",
                          { attrs: { id: "info" } },
                          [
                            _c(
                              "v-list",
                              { attrs: { "three-line": "" } },
                              [
                                _c(
                                  "v-list-item",
                                  [
                                    _c(
                                      "v-list-item-content",
                                      { staticClass: "pt-1" },
                                      [
                                        _c("v-list-item-subtitle", [
                                          _vm._v("Active Issues Diagnosis")
                                        ]),
                                        _vm._v(" "),
                                        _vm.medical
                                          ? _c(
                                              "v-list-item-title",
                                              { staticClass: "subtitle-2" },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(
                                                      _vm.medical.diagnosis
                                                    ) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
                                          : _c(
                                              "v-list-item-title",
                                              { staticClass: "subtitle-2" },
                                              [
                                                _vm._v(
                                                  "\n                      N/A\n                    "
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
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-2",
                          attrs: { shaped: "", color: "red darken-2" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { shaped: "", outlined: "" } },
                            [
                              _c(
                                "div",
                                { staticStyle: { height: "165px" } },
                                [
                                  _c("v-img", {
                                    staticClass: "ml-7",
                                    attrs: {
                                      width: "200",
                                      src: "/app_asset/blood_tests.png"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 pt-0 d-flex justify-center text-uppercase"
                                },
                                [_vm._v("Blood Test")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  _vm._v(
                                    "\n                Input the blood test results of your patients here to keep records of individual tests\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "pa-8" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-7 px-5",
                                      attrs: {
                                        tile: "",
                                        color: "red darken-2",
                                        dark: "",
                                        depressed: ""
                                      },
                                      on: { click: _vm.open_blood_test }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("Input Results")
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-2",
                          attrs: { shaped: "", color: "success darken-2" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { shaped: "", outlined: "" } },
                            [
                              _c(
                                "div",
                                { staticStyle: { height: "165px" } },
                                [
                                  _c("v-img", {
                                    staticClass: "ml-7",
                                    attrs: {
                                      width: "200",
                                      src: "/app_asset/urine_tests.png"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 pt-0 text-uppercase d-flex justify-center"
                                },
                                [_vm._v("Urinalysis Test")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  _vm._v(
                                    "\n                Input the urine test results of your patients here to keep records of individual tests\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "pa-8" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-7 px-5",
                                      attrs: {
                                        tile: "",
                                        color: "success darken-2",
                                        dark: "",
                                        depressed: ""
                                      },
                                      on: { click: _vm.open_urine_test }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("Input Results")
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-2",
                          attrs: { shaped: "", color: "#FF8800" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { shaped: "", outlined: "" } },
                            [
                              _c(
                                "div",
                                { staticStyle: { height: "165px" } },
                                [
                                  _c("v-img", {
                                    staticClass: "ml-7",
                                    attrs: {
                                      width: "200",
                                      src: "/app_asset/stool_tests.png"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 pt-0 d-flex justify-center text-uppercase"
                                },
                                [_vm._v("Faecal Test")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  _vm._v(
                                    "\n                Input the stool test results of your patients here to keep records of individual tests\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "pa-8" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-7 px-5",
                                      attrs: {
                                        tile: "",
                                        color: "#FF8800",
                                        depressed: "",
                                        dark: ""
                                      },
                                      on: { click: _vm.open_stool_test }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("Input Results")
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-2",
                          attrs: { shaped: "", color: "#6e40bd" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { shaped: "", outlined: "" } },
                            [
                              _c(
                                "div",
                                { staticStyle: { height: "165px" } },
                                [
                                  _c("v-img", {
                                    staticClass: "ml-7",
                                    attrs: {
                                      width: "200",
                                      src: "/app_asset/sperm_tests.png"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                {
                                  staticClass:
                                    "subtitle-1 pt-0 d-flex justify-center text-uppercase"
                                },
                                [_vm._v("Saliva Test")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  _vm._v(
                                    "\n                Input the saliva test results of your patients here to keep records of individual tests\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "pa-8" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-7 px-5",
                                      attrs: {
                                        tile: "",
                                        color: "#6e40bd",
                                        dark: "",
                                        depressed: ""
                                      },
                                      on: { click: _vm.open_saliva_test }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("Input Results")
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
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: _vm.pick_color, flat: "" } },
                    [
                      _c(
                        "v-toolbar-title",
                        { staticClass: "subtitle-1 font-weight-bold" },
                        [_vm._v(_vm._s(_vm.pick_title))]
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
                              staticClass: "caption",
                              attrs: { dark: "", text: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
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
                  _vm.appointment
                    ? _c(
                        "v-card-text",
                        [
                          _c(_vm.get_report, {
                            tag: "component",
                            attrs: { appointment: _vm.appointment }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/blood.vue?vue&type=template&id=6c06764f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/blood.vue?vue&type=template&id=6c06764f&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            "v-card",
            { attrs: { outlined: "" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex flex-column",
                          attrs: { cols: "4" }
                        },
                        [
                          _c(
                            "v-responsive",
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: "/app_asset/medix_full.png",
                                  width: "40%"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-center subtitle-2 font-weight-bold"
                            },
                            [_vm._v("Medix Digital Application")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mt-10 text-center",
                          attrs: { cols: "6" }
                        },
                        [
                          _c(
                            "h5",
                            {
                              staticClass:
                                "title font-weight-thin text-uppercase"
                            },
                            [_vm._v("Medix Blood Test Report")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "subtitle-1" }, [
                            _vm._v(_vm._s(_vm.current_date))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-col", { staticClass: "mt-8", attrs: { cols: "2" } })
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
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "success darken-2 subtitle-2" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-2 font-weight-bold text-uppercase white--text"
                            },
                            [_vm._v("Basic Information")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "mt-2" },
                        [
                          _c(
                            "v-form",
                            { ref: "basic_info" },
                            [
                              _vm.appointment
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "4" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "Patient Name",
                                              readonly: "",
                                              value: _vm.patient_name
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "2" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "Age",
                                              readonly: "",
                                              value: _vm.appointment.patient.age
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "3" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "Sex",
                                              readonly: "",
                                              value:
                                                _vm.appointment.patient.gender
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "3" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "DOB",
                                              readonly: "",
                                              value: _vm.formateDob
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
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "5" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Ordering Dr.",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.ordering_dr,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.info,
                                              "ordering_dr",
                                              $$v
                                            )
                                          },
                                          expression: "info.ordering_dr"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "2" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Status",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.status,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "status", $$v)
                                          },
                                          expression: "info.status"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "5" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Physician Copy for",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.physician_copy,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.info,
                                              "physician_copy",
                                              $$v
                                            )
                                          },
                                          expression: "info.physician_copy"
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
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "SPEC #",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.spec,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "spec", $$v)
                                          },
                                          expression: "info.spec"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "collection_date_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.collection_date,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_date",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Collection Date",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .collection_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "collection_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.collection_date"
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
                                            value: _vm.collection_date_modal,
                                            callback: function($$v) {
                                              _vm.collection_date_modal = $$v
                                            },
                                            expression: "collection_date_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: { scrollable: "" },
                                              model: {
                                                value: _vm.info.collection_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "collection_date",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "info.collection_date"
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
                                                      _vm.collection_date_modal = false
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
                                                      return _vm.$refs.collection_date_dialog.save(
                                                        _vm.info.collection_date
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
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "collection_time_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.collection_time,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_time",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_time",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Collection Time",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .collection_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "collection_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.collection_time"
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
                                            value: _vm.collection_time_modal,
                                            callback: function($$v) {
                                              _vm.collection_time_modal = $$v
                                            },
                                            expression: "collection_time_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm.collection_time_modal
                                            ? _c(
                                                "v-time-picker",
                                                {
                                                  attrs: { "full-width": "" },
                                                  model: {
                                                    value:
                                                      _vm.info.collection_time,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.info,
                                                        "collection_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "info.collection_time"
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
                                                          _vm.collection_time_modal = false
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
                                                          return _vm.$refs.collection_time_dialog.save(
                                                            _vm.info
                                                              .collection_time
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("OK")]
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-2 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "SPECIMEN",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.specimen,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "specimen", $$v)
                                          },
                                          expression: "info.specimen"
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
                                    { attrs: { cols: "6" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "received_date_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.received_date,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_date",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Received Date",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .received_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "received_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.received_date"
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
                                            value: _vm.received_date_modal,
                                            callback: function($$v) {
                                              _vm.received_date_modal = $$v
                                            },
                                            expression: "received_date_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: { scrollable: "" },
                                              model: {
                                                value: _vm.info.received_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "received_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "info.received_date"
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
                                                      _vm.received_date_modal = false
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
                                                      return _vm.$refs.received_date_dialog.save(
                                                        _vm.info.received_date
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
                                    { attrs: { cols: "6" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "received_time_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.received_time,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_time",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_time",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Received Time",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .received_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "received_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.received_time"
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
                                            value: _vm.received_time_modal,
                                            callback: function($$v) {
                                              _vm.received_time_modal = $$v
                                            },
                                            expression: "received_time_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm.received_time_modal
                                            ? _c(
                                                "v-time-picker",
                                                {
                                                  attrs: { "full-width": "" },
                                                  model: {
                                                    value:
                                                      _vm.info.received_time,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.info,
                                                        "received_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "info.received_time"
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
                                                          _vm.received_time_modal = false
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
                                                          return _vm.$refs.received_time_dialog.save(
                                                            _vm.info
                                                              .received_time
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("OK")]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey darken-2 subtitle-2" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-2 font-weight-bold text-uppercase white--text"
                            },
                            [_vm._v("Choose Test Type")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c(
                                "v-expansion-panels",
                                { attrs: { accordion: "", focusable: "" } },
                                [
                                  _c(
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "Complete Blood Count [CBC] Test"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "cbc" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "White Blood Cells ( WBC )"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .white_blood,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "white_blood",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.white_blood"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Red Blood Cells ( RBC )"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .red_blood,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "red_blood",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.red_blood"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Hemoglobin ( HB/Hgb )"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .hemoglobin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "hemoglobin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.hemoglobin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Mean Cell Volume ( MCV )"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .mcv,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "mcv",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.mcv"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Mean Cell Hemoglobin (MCH)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .mch,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "mch",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.mch"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Mean Cell Hb Concentration (MCHC)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .mchc,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "mchc",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.mchc"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Red Cell Dist Width (RDW)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .rdw,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "rdw",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.rdw"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Platelet Count"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .platelet,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "platelet",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.platelet"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Mean Platelet Volume"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .cbc
                                                                              .platelet_volume,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.cbc,
                                                                              "platelet_volume",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "cbc.platelet_volume"
                                                                        }
                                                                      }
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
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: { click: _vm.cancel_cbc }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-1 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: { click: _vm.save_cbc }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "Comprehensive Metabolic Panel Test"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "metabolic" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Glucose"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .glucose,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "glucose",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.glucose"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Sodium Salts"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .sodium,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "sodium",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.sodium"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Potassium Salts"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .potassium,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "potassium",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.potassium"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Calcium"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .calcium,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "calcium",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.calcium"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Chloride"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .chloride,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "chloride",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.chloride"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Carbon Dioxide"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .dioxide,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "dioxide",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.dioxide"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Blood Urea Nitrogen"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .nitrogen,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "nitrogen",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.nitrogen"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Creatinine"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .creatinine,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "creatinine",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.creatinine"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Albumin"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .albumin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "albumin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.albumin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Total Protein"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .protein,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "protein",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.protein"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Alkaline Phosphatase (ALP)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .alp,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "alp",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.alp"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Alamine Aminotransferase (ALT)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .alt,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "alt",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.alt"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Asparate Aminotransferase (AST)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .ast,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "ast",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.ast"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Bilirubin"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .bilirubin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "bilirubin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.bilirubin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Activated Partial Thromboplastin Time"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .thromboplastin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "thromboplastin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.thromboplastin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Prothrombin Time"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .metabolic
                                                                              .prothrombin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.metabolic,
                                                                              "prothrombin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "metabolic.prothrombin"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.cancel_metabolic
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_metabolic
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Lipoprotein panel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "lipoprotein" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "low-density lipoprotein (LDL) cholesterol level"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .lipoprotein
                                                                              .low_density,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.lipoprotein,
                                                                              "low_density",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "lipoprotein.low_density"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "high-density lipoprotein (HDL) cholesterol level"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .lipoprotein
                                                                              .high_density,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.lipoprotein,
                                                                              "high_density",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "lipoprotein.high_density"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Total cholesterol level"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .lipoprotein
                                                                              .total,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.lipoprotein,
                                                                              "total",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "lipoprotein.total"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Triglycerides level"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .lipoprotein
                                                                              .triglycerides,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.lipoprotein,
                                                                              "triglycerides",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "lipoprotein.triglycerides"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click:
                                                      _vm.cancel_lipoprotein
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_lipoprotein
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Blood enzyme tests")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "enzymes" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " Creatine Phosphokinase (CPK-1)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .enzymes
                                                                              .cpk_1,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.enzymes,
                                                                              "cpk_1",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "enzymes.cpk_1"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " CPK-2"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .enzymes
                                                                              .cpk_2,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.enzymes,
                                                                              "cpk_2",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "enzymes.cpk_2"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "CPK-3"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .enzymes
                                                                              .cpk_3,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.enzymes,
                                                                              "cpk_3",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "enzymes.cpk_3"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Troponin"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .enzymes
                                                                              .troponin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.enzymes,
                                                                              "troponin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "enzymes.troponin"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.cancel_enzymes
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_enzymes
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Thyroid Panel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "thyroid" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Triiodothyronine (T3)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .thyroid
                                                                              .t3,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.thyroid,
                                                                              "t3",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "thyroid.t3"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "T3 Resin Uptake (RU)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .thyroid
                                                                              .ru,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.thyroid,
                                                                              "ru",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "thyroid.ru"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Thyroxine (T4)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .thyroid
                                                                              .t4,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.thyroid,
                                                                              "t4",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "thyroid.t4"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Thyroid-Stimulating Hormone (TS)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .thyroid
                                                                              .ts,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.thyroid,
                                                                              "ts",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "thyroid.ts"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.cancel_thyroid
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_thyroid
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Coagulation panel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "coagulation" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Prothrombin Time (PT)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .coagulation
                                                                              .prothrombin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.coagulation,
                                                                              "prothrombin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "coagulation.prothrombin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Fibrinogen Activity Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .coagulation
                                                                              .fibrinogen,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.coagulation,
                                                                              "fibrinogen",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "coagulation.fibrinogen"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click:
                                                      _vm.cancel_coagulation
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_coagulation
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Disease Examinations")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "disease" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Chlamydia"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .disease
                                                                              .chlamydia,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.disease,
                                                                              "chlamydia",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "disease.chlamydia"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Gonorrhea"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .disease
                                                                              .gonorrhea,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.disease,
                                                                              "gonorrhea",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "disease.gonorrhea"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Herpes"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .disease
                                                                              .herpes,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.disease,
                                                                              "herpes",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "disease.herpes"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "HIV"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .disease
                                                                              .hiv,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.disease,
                                                                              "hiv",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "disease.hiv"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Syphilis"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .disease
                                                                              .syphilis,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.disease,
                                                                              "syphilis",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "disease.syphilis"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.cancel_disease
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_disease
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("DHEA (Sulfate Serum Test)")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "dea" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.sulphate_serum_test,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.sulphate_serum_test = $$v
                                                                          },
                                                                          expression:
                                                                            "sulphate_serum_test"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: { click: _vm.cancel_dea }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: { click: _vm.save_dea }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("C-Reactive Protein Test")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "reactive" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.reactive,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.reactive = $$v
                                                                          },
                                                                          expression:
                                                                            "reactive"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.cancel_reactive
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_reactive
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
            { attrs: { color: "success darken-2", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("saving data...")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/faecal.vue?vue&type=template&id=08dd8402&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/faecal.vue?vue&type=template&id=08dd8402& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        { attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex flex-column", attrs: { cols: "4" } },
                    [
                      _c(
                        "v-responsive",
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: {
                              src: "/images/medix_full.png",
                              width: "40%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "text-center subtitle-2 font-weight-bold"
                        },
                        [_vm._v("Medix Digital Application")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mt-10 text-center", attrs: { cols: "6" } },
                    [
                      _c(
                        "h5",
                        {
                          staticClass: "title font-weight-thin text-uppercase"
                        },
                        [_vm._v("Medix Faecal Test Report")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "subtitle-1" }, [
                        _vm._v(_vm._s(_vm.current_date))
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-card",
                { attrs: { outlined: "" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "success darken-2 subtitle-2" },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "subtitle-2 font-weight-bold text-uppercase white--text"
                        },
                        [_vm._v("Basic Information")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "mt-2" },
                    [
                      _c(
                        "v-form",
                        { ref: "basic_info" },
                        [
                          _vm.appointment
                            ? _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Patient Name",
                                          readonly: "",
                                          value: _vm.patient_name
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "2" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Age",
                                          readonly: "",
                                          value: _vm.appointment.patient.age
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Sex",
                                          readonly: "",
                                          value: _vm.appointment.patient.gender
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "DOB",
                                          readonly: "",
                                          value: _vm.formateDob
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
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "Ordering Dr.",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.ordering_dr,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "ordering_dr", $$v)
                                      },
                                      expression: "info.ordering_dr"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "2" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "Status",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.status,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "status", $$v)
                                      },
                                      expression: "info.status"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "Physician Copy for",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.physician_copy,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.info,
                                          "physician_copy",
                                          $$v
                                        )
                                      },
                                      expression: "info.physician_copy"
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
                                { attrs: { cols: "3" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "SPEC #",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.spec,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "spec", $$v)
                                      },
                                      expression: "info.spec"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "collection_date_dialog",
                                      attrs: {
                                        "return-value":
                                          _vm.info.collection_date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_date",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_date",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Collection Date",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info
                                                          .collection_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "collection_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.collection_date"
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
                                        value: _vm.collection_date_modal,
                                        callback: function($$v) {
                                          _vm.collection_date_modal = $$v
                                        },
                                        expression: "collection_date_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.info.collection_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.info,
                                                "collection_date",
                                                $$v
                                              )
                                            },
                                            expression: "info.collection_date"
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
                                                  _vm.collection_date_modal = false
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
                                                  return _vm.$refs.collection_date_dialog.save(
                                                    _vm.info.collection_date
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
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "collection_time_dialog",
                                      attrs: {
                                        "return-value":
                                          _vm.info.collection_time,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_time",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_time",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Collection Time",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info
                                                          .collection_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "collection_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.collection_time"
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
                                        value: _vm.collection_time_modal,
                                        callback: function($$v) {
                                          _vm.collection_time_modal = $$v
                                        },
                                        expression: "collection_time_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _vm.collection_time_modal
                                        ? _c(
                                            "v-time-picker",
                                            {
                                              attrs: { "full-width": "" },
                                              model: {
                                                value: _vm.info.collection_time,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "collection_time",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "info.collection_time"
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
                                                      _vm.collection_time_modal = false
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
                                                      return _vm.$refs.collection_time_dialog.save(
                                                        _vm.info.collection_time
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("OK")]
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
                              _c(
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-2 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "SPECIMEN",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.specimen,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "specimen", $$v)
                                      },
                                      expression: "info.specimen"
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
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "received_date_dialog",
                                      attrs: {
                                        "return-value": _vm.info.received_date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_date",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_date",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Received Date",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info.received_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "received_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.received_date"
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
                                        value: _vm.received_date_modal,
                                        callback: function($$v) {
                                          _vm.received_date_modal = $$v
                                        },
                                        expression: "received_date_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.info.received_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.info,
                                                "received_date",
                                                $$v
                                              )
                                            },
                                            expression: "info.received_date"
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
                                                  _vm.received_date_modal = false
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
                                                  return _vm.$refs.received_date_dialog.save(
                                                    _vm.info.received_date
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
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "received_time_dialog",
                                      attrs: {
                                        "return-value": _vm.info.received_time,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_time",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_time",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Received Time",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info.received_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "received_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.received_time"
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
                                        value: _vm.received_time_modal,
                                        callback: function($$v) {
                                          _vm.received_time_modal = $$v
                                        },
                                        expression: "received_time_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _vm.received_time_modal
                                        ? _c(
                                            "v-time-picker",
                                            {
                                              attrs: { "full-width": "" },
                                              model: {
                                                value: _vm.info.received_time,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "received_time",
                                                    $$v
                                                  )
                                                },
                                                expression: "info.received_time"
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
                                                      _vm.received_time_modal = false
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
                                                      return _vm.$refs.received_time_dialog.save(
                                                        _vm.info.received_time
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("OK")]
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
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { attrs: { outlined: "" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "grey darken-2 subtitle-2" },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "subtitle-2 font-weight-bold text-uppercase white--text"
                        },
                        [_vm._v("Infection Examination")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        { ref: "infection" },
                        [
                          _c("v-simple-table", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function() {
                                  return [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v("Analysis")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v("Result")
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tbody", [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [
                                            _vm._v(
                                              "Infections [parasite, virus, bacteria etc]"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.infection,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "infection",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.infection"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Occult Blood")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.occult_blood,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "occult_blood",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "faecal.occult_blood"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Bile")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.bile,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "bile",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.bile"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("White Blood Cells")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.wbc,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "wbc",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.wbc"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Red Blood Cells")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.rbc,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "rbc",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.rbc"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Sugar")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.sugar,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "sugar",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.sugar"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Mucus")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.mucus,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "mucus",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.mucus"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("pH")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("v-text-field", {
                                              staticClass:
                                                "subtitle-2 font-weight-bold",
                                              attrs: {
                                                dense: "",
                                                rules: _vm.inputRules
                                              },
                                              model: {
                                                value: _vm.faecal.ph,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.faecal,
                                                    "ph",
                                                    $$v
                                                  )
                                                },
                                                expression: "faecal.ph"
                                              }
                                            })
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
                          staticClass: "red darken-3 px-5",
                          attrs: { tile: "", depressed: "", dark: "" },
                          on: { click: _vm.cancel_infection }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "caption font-weight-bold" },
                            [_vm._v("Cancel")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "success darken-2 px-5 mx-3",
                          attrs: { tile: "", depressed: "", dark: "" },
                          on: { click: _vm.save_infection }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "caption font-weight-bold" },
                            [_vm._v("Save Result")]
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
            { attrs: { color: "success darken-2", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("saving data...")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/saliva.vue?vue&type=template&id=c9d7469e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/saliva.vue?vue&type=template&id=c9d7469e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        { attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex flex-column", attrs: { cols: "4" } },
                    [
                      _c(
                        "v-responsive",
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: {
                              src: "/images/medix_full.png",
                              width: "40%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "text-center subtitle-2 font-weight-bold"
                        },
                        [_vm._v("Medix Digital Application")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mt-10 text-center", attrs: { cols: "6" } },
                    [
                      _c(
                        "h5",
                        {
                          staticClass: "title font-weight-thin text-uppercase"
                        },
                        [_vm._v("Medix Saliva Test Report")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "subtitle-1" }, [
                        _vm._v(_vm._s(_vm.current_date))
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-card",
                { attrs: { outlined: "" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "success darken-2 subtitle-2" },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "subtitle-2 font-weight-bold text-uppercase white--text"
                        },
                        [_vm._v("Basic Information")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "mt-2" },
                    [
                      _c(
                        "v-form",
                        { ref: "basic_info" },
                        [
                          _vm.appointment
                            ? _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Patient Name",
                                          readonly: "",
                                          value: _vm.patient_name
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "2" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Age",
                                          readonly: "",
                                          value: _vm.appointment.patient.age
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Sex",
                                          readonly: "",
                                          value: _vm.appointment.patient.gender
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "DOB",
                                          readonly: "",
                                          value: _vm.formateDob
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
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "Ordering Dr.",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.ordering_dr,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "ordering_dr", $$v)
                                      },
                                      expression: "info.ordering_dr"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "2" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "Status",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.status,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "status", $$v)
                                      },
                                      expression: "info.status"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "Physician Copy for",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.physician_copy,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.info,
                                          "physician_copy",
                                          $$v
                                        )
                                      },
                                      expression: "info.physician_copy"
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
                                { attrs: { cols: "3" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-1 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "SPEC #",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.spec,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "spec", $$v)
                                      },
                                      expression: "info.spec"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "collection_date_dialog",
                                      attrs: {
                                        "return-value":
                                          _vm.info.collection_date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_date",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_date",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Collection Date",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info
                                                          .collection_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "collection_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.collection_date"
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
                                        value: _vm.collection_date_modal,
                                        callback: function($$v) {
                                          _vm.collection_date_modal = $$v
                                        },
                                        expression: "collection_date_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.info.collection_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.info,
                                                "collection_date",
                                                $$v
                                              )
                                            },
                                            expression: "info.collection_date"
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
                                                  _vm.collection_date_modal = false
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
                                                  return _vm.$refs.collection_date_dialog.save(
                                                    _vm.info.collection_date
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
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "collection_time_dialog",
                                      attrs: {
                                        "return-value":
                                          _vm.info.collection_time,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_time",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "collection_time",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Collection Time",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info
                                                          .collection_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "collection_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.collection_time"
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
                                        value: _vm.collection_time_modal,
                                        callback: function($$v) {
                                          _vm.collection_time_modal = $$v
                                        },
                                        expression: "collection_time_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _vm.collection_time_modal
                                        ? _c(
                                            "v-time-picker",
                                            {
                                              attrs: { "full-width": "" },
                                              model: {
                                                value: _vm.info.collection_time,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "collection_time",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "info.collection_time"
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
                                                      _vm.collection_time_modal = false
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
                                                      return _vm.$refs.collection_time_dialog.save(
                                                        _vm.info.collection_time
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("OK")]
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
                              _c(
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c("v-text-field", {
                                    staticClass: "subtitle-2 font-weight-bold",
                                    attrs: {
                                      dense: "",
                                      label: "SPECIMEN",
                                      rules: _vm.inputRules
                                    },
                                    model: {
                                      value: _vm.info.specimen,
                                      callback: function($$v) {
                                        _vm.$set(_vm.info, "specimen", $$v)
                                      },
                                      expression: "info.specimen"
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
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "received_date_dialog",
                                      attrs: {
                                        "return-value": _vm.info.received_date,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_date",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_date",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Received Date",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info.received_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "received_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.received_date"
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
                                        value: _vm.received_date_modal,
                                        callback: function($$v) {
                                          _vm.received_date_modal = $$v
                                        },
                                        expression: "received_date_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-date-picker",
                                        {
                                          attrs: { scrollable: "" },
                                          model: {
                                            value: _vm.info.received_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.info,
                                                "received_date",
                                                $$v
                                              )
                                            },
                                            expression: "info.received_date"
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
                                                  _vm.received_date_modal = false
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
                                                  return _vm.$refs.received_date_dialog.save(
                                                    _vm.info.received_date
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
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      ref: "received_time_dialog",
                                      attrs: {
                                        "return-value": _vm.info.received_time,
                                        persistent: "",
                                        width: "290px"
                                      },
                                      on: {
                                        "update:returnValue": function($event) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_time",
                                            $event
                                          )
                                        },
                                        "update:return-value": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.info,
                                            "received_time",
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
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold",
                                                    attrs: {
                                                      dense: "",
                                                      label: "Received Time",
                                                      rules: _vm.inputRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.info.received_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.info,
                                                          "received_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "info.received_time"
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
                                        value: _vm.received_time_modal,
                                        callback: function($$v) {
                                          _vm.received_time_modal = $$v
                                        },
                                        expression: "received_time_modal"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _vm.received_time_modal
                                        ? _c(
                                            "v-time-picker",
                                            {
                                              attrs: { "full-width": "" },
                                              model: {
                                                value: _vm.info.received_time,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "received_time",
                                                    $$v
                                                  )
                                                },
                                                expression: "info.received_time"
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
                                                      _vm.received_time_modal = false
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
                                                      return _vm.$refs.received_time_dialog.save(
                                                        _vm.info.received_time
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("OK")]
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
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { attrs: { outlined: "" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "grey darken-2 subtitle-2" },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "subtitle-2 font-weight-bold text-uppercase white--text"
                        },
                        [_vm._v("Choose Test Type")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-expansion-panels",
                        { attrs: { accordion: "", focusable: "" } },
                        [
                          _c(
                            "v-expansion-panel",
                            [
                              _c(
                                "v-expansion-panel-header",
                                { staticClass: "subtitle-1 font-weight-bold" },
                                [_vm._v("Steriod Hormone Analysis")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panel-content",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        { ref: "steroid" },
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
                                                              "text-left"
                                                          },
                                                          [_vm._v("Test")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Result")]
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tbody", [
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Estrogens")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.steroid
                                                                    .estrogen,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.steroid,
                                                                    "estrogen",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "steroid.estrogen"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Progesterone"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.steroid
                                                                    .progesterone,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.steroid,
                                                                    "progesterone",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "steroid.progesterone"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Testosterone"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.steroid
                                                                    .testosterone,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.steroid,
                                                                    "testosterone",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "steroid.testosterone"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Cortisol")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.steroid
                                                                    .cortisol,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.steroid,
                                                                    "cortisol",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "steroid.cortisol"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Melatonin")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.steroid
                                                                    .melatonin,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.steroid,
                                                                    "melatonin",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "steroid.melatonin"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Dehydroepiandrosterone (DHEA)"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.steroid
                                                                    .dea,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.steroid,
                                                                    "dea",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "steroid.dea"
                                                              }
                                                            })
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
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    { staticClass: "d-flex" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "red darken-3 px-5",
                                          attrs: {
                                            tile: "",
                                            depressed: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.cancel_steroid }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption font-weight-bold"
                                            },
                                            [_vm._v("Cancel")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "success darken-1 px-5 mx-3",
                                          attrs: {
                                            tile: "",
                                            depressed: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.save_steroid }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption font-weight-bold"
                                            },
                                            [_vm._v("Save Result")]
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
                            "v-expansion-panel",
                            [
                              _c(
                                "v-expansion-panel-header",
                                { staticClass: "subtitle-1 font-weight-bold" },
                                [_vm._v("Genetic Materials")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panel-content",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        { ref: "genetic" },
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
                                                              "text-left"
                                                          },
                                                          [_vm._v("Test")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Result")]
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tbody", [
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Deoxyribonucleic Acid [DNA]"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.genetic
                                                                    .dna,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.genetic,
                                                                    "dna",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "genetic.dna"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Ribo-Nucleic Acid [RNA]"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.genetic
                                                                    .rna,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.genetic,
                                                                    "rna",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "genetic.rna"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Antibodies")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.genetic
                                                                    .antibody,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.genetic,
                                                                    "antibody",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "genetic.antibody"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Enzymes")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.genetic
                                                                    .enzymes,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.genetic,
                                                                    "enzymes",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "genetic.enzymes"
                                                              }
                                                            })
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
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    { staticClass: "d-flex" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "red darken-3 px-5",
                                          attrs: {
                                            tile: "",
                                            depressed: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.cancel_genetic }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption font-weight-bold"
                                            },
                                            [_vm._v("Cancel")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "success darken-1 px-5 mx-3",
                                          attrs: {
                                            tile: "",
                                            depressed: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.save_genetic }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption font-weight-bold"
                                            },
                                            [_vm._v("Save Result")]
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
                            "v-expansion-panel",
                            [
                              _c(
                                "v-expansion-panel-header",
                                { staticClass: "subtitle-1 font-weight-bold" },
                                [_vm._v("Infection Examination")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panel-content",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        { ref: "infection" },
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
                                                              "text-left"
                                                          },
                                                          [_vm._v("Test")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Result")]
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tbody", [
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("HIV")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.infection
                                                                    .hiv,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.infection,
                                                                    "hiv",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "infection.hiv"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Cancer")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.infection
                                                                    .cancer,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.infection,
                                                                    "cancer",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "infection.cancer"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Parasite [worms, amoeba etc]"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.infection
                                                                    .parasite,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.infection,
                                                                    "parasite",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "infection.parasite"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("Allergies")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.infection
                                                                    .allergies,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.infection,
                                                                    "allergies",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "infection.allergies"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "subtitle-2 font-weight-bold"
                                                          },
                                                          [_vm._v("pH")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "subtitle-2 font-weight-bold",
                                                              attrs: {
                                                                dense: "",
                                                                rules:
                                                                  _vm.inputRules
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.infection
                                                                    .ph,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.infection,
                                                                    "ph",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "infection.ph"
                                                              }
                                                            })
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
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    { staticClass: "d-flex" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "red darken-3 px-5",
                                          attrs: {
                                            tile: "",
                                            depressed: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.cancel_infection }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption font-weight-bold"
                                            },
                                            [_vm._v("Cancel")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "success darken-1 px-5 mx-3",
                                          attrs: {
                                            tile: "",
                                            depressed: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.save_infection }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption font-weight-bold"
                                            },
                                            [_vm._v("Save Result")]
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
            { attrs: { color: "success darken-2", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("saving data...")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/urine.vue?vue&type=template&id=c554c810&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/labtest/urine.vue?vue&type=template&id=c554c810&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            "v-card",
            { attrs: { outlined: "" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex flex-column",
                          attrs: { cols: "4" }
                        },
                        [
                          _c(
                            "v-responsive",
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: "/app_asset/medix_full.png",
                                  width: "40%"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-center subtitle-2 font-weight-bold"
                            },
                            [_vm._v("Medix Digital Application")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mt-10 text-center",
                          attrs: { cols: "6" }
                        },
                        [
                          _c(
                            "h5",
                            {
                              staticClass:
                                "title font-weight-thin text-uppercase"
                            },
                            [_vm._v("Medix Blood Test Report")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "subtitle-1" }, [
                            _vm._v(_vm._s(_vm.current_date))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-col", { staticClass: "mt-8", attrs: { cols: "2" } })
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
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "success darken-2 subtitle-2" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-2 font-weight-bold text-uppercase white--text"
                            },
                            [_vm._v("Basic Information")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "mt-2" },
                        [
                          _c(
                            "v-form",
                            { ref: "basic_info" },
                            [
                              _vm.appointment
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "4" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "Patient Name",
                                              readonly: "",
                                              value: _vm.patient_name
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "2" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "Age",
                                              readonly: "",
                                              value: _vm.appointment.patient.age
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "3" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "Sex",
                                              readonly: "",
                                              value:
                                                _vm.appointment.patient.gender
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "3" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass:
                                              "subtitle-1 font-weight-bold",
                                            attrs: {
                                              dense: "",
                                              label: "DOB",
                                              readonly: "",
                                              value: _vm.formateDob
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
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "5" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Ordering Dr.",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.ordering_dr,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.info,
                                              "ordering_dr",
                                              $$v
                                            )
                                          },
                                          expression: "info.ordering_dr"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "2" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Status",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.status,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "status", $$v)
                                          },
                                          expression: "info.status"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "5" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Physician Copy for",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.physician_copy,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.info,
                                              "physician_copy",
                                              $$v
                                            )
                                          },
                                          expression: "info.physician_copy"
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
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "SPEC #",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.spec,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "spec", $$v)
                                          },
                                          expression: "info.spec"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "collection_date_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.collection_date,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_date",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Collection Date",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .collection_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "collection_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.collection_date"
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
                                            value: _vm.collection_date_modal,
                                            callback: function($$v) {
                                              _vm.collection_date_modal = $$v
                                            },
                                            expression: "collection_date_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: { scrollable: "" },
                                              model: {
                                                value: _vm.info.collection_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "collection_date",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "info.collection_date"
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
                                                      _vm.collection_date_modal = false
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
                                                      return _vm.$refs.collection_date_dialog.save(
                                                        _vm.info.collection_date
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
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "collection_time_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.collection_time,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_time",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "collection_time",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Collection Time",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .collection_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "collection_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.collection_time"
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
                                            value: _vm.collection_time_modal,
                                            callback: function($$v) {
                                              _vm.collection_time_modal = $$v
                                            },
                                            expression: "collection_time_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm.collection_time_modal
                                            ? _c(
                                                "v-time-picker",
                                                {
                                                  attrs: { "full-width": "" },
                                                  model: {
                                                    value:
                                                      _vm.info.collection_time,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.info,
                                                        "collection_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "info.collection_time"
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
                                                          _vm.collection_time_modal = false
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
                                                          return _vm.$refs.collection_time_dialog.save(
                                                            _vm.info
                                                              .collection_time
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("OK")]
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-2 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "SPECIMEN",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.specimen,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "specimen", $$v)
                                          },
                                          expression: "info.specimen"
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
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "received_date_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.received_date,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_date",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Received Date",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .received_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "received_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.received_date"
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
                                            value: _vm.received_date_modal,
                                            callback: function($$v) {
                                              _vm.received_date_modal = $$v
                                            },
                                            expression: "received_date_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: { scrollable: "" },
                                              model: {
                                                value: _vm.info.received_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.info,
                                                    "received_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "info.received_date"
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
                                                      _vm.received_date_modal = false
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
                                                      return _vm.$refs.received_date_dialog.save(
                                                        _vm.info.received_date
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
                                    { attrs: { cols: "3" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "received_time_dialog",
                                          attrs: {
                                            "return-value":
                                              _vm.info.received_time,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_time",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.info,
                                                "received_time",
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
                                                        staticClass:
                                                          "subtitle-1 font-weight-bold",
                                                        attrs: {
                                                          dense: "",
                                                          label:
                                                            "Received Time",
                                                          rules: _vm.inputRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.info
                                                              .received_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.info,
                                                              "received_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "info.received_time"
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
                                            value: _vm.received_time_modal,
                                            callback: function($$v) {
                                              _vm.received_time_modal = $$v
                                            },
                                            expression: "received_time_modal"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm.received_time_modal
                                            ? _c(
                                                "v-time-picker",
                                                {
                                                  attrs: { "full-width": "" },
                                                  model: {
                                                    value:
                                                      _vm.info.received_time,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.info,
                                                        "received_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "info.received_time"
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
                                                          _vm.received_time_modal = false
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
                                                          return _vm.$refs.received_time_dialog.save(
                                                            _vm.info
                                                              .received_time
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("OK")]
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Urine Color",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.color,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "color", $$v)
                                          },
                                          expression: "info.color"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass:
                                          "subtitle-1 font-weight-bold",
                                        attrs: {
                                          dense: "",
                                          label: "Urine Clarity",
                                          rules: _vm.inputRules
                                        },
                                        model: {
                                          value: _vm.info.clarity,
                                          callback: function($$v) {
                                            _vm.$set(_vm.info, "clarity", $$v)
                                          },
                                          expression: "info.clarity"
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
                    "v-card",
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey darken-2 subtitle-2" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-2 font-weight-bold text-uppercase white--text"
                            },
                            [_vm._v("Choose Test Type")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c(
                                "v-expansion-panels",
                                { attrs: { accordion: "", focusable: "" } },
                                [
                                  _c(
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Chemical Examination")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "chemical" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Specific Gravity"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .gravity,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "gravity",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.gravity"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Acidity [pH]"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .acidity,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "acidity",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.acidity"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Concentration"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .concentration,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "concentration",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.concentration"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Protein"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .protein,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "protein",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.protein"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Sugar"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .sugar,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "sugar",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.sugar"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Ketones"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .ketones,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "ketones",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.ketones"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Bilirubin"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .bilirubin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "bilirubin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.bilirubin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Nitrites [Salt]"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .nitrites,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "nitrites",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.nitrites"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Hemoglobin"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .hemoglobin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "hemoglobin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.hemoglobin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Myoglobin"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .myoglobin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "myoglobin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.myoglobin"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Leukocyte Esterase"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .leukocyte,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "leukocyte",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.leukocyte"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Ascorbic Acid (Vitamin C)"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .chemical
                                                                              .ascorbic,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.chemical,
                                                                              "ascorbic",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "chemical.ascorbic"
                                                                        }
                                                                      }
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
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.cancel_chemical
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-1 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_chemical
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
                                    "v-expansion-panel",
                                    [
                                      _c(
                                        "v-expansion-panel-header",
                                        {
                                          staticClass:
                                            "subtitle-1 font-weight-bold"
                                        },
                                        [_vm._v("Microscopic Examination")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-expansion-panel-content",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-form",
                                                { ref: "microscopic" },
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
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Test"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "th",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Result"
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Red blood cells (RBCs) "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .microscopic
                                                                              .rbc,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.microscopic,
                                                                              "rbc",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "microscopic.rbc"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "White blood cells (WBCs) "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .microscopic
                                                                              .wbc,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.microscopic,
                                                                              "wbc",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "microscopic.wbc"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " Epithelial cells "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .microscopic
                                                                              .epithelial,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.microscopic,
                                                                              "epithelial",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "microscopic.epithelial"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Bacteria, yeast and parasites"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .microscopic
                                                                              .bacteria,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.microscopic,
                                                                              "bacteria",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "microscopic.bacteria"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Casts"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .microscopic
                                                                              .casts,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.microscopic,
                                                                              "casts",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "microscopic.casts"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2 font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Crystals"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2 font-weight-bold",
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          rules:
                                                                            _vm.inputRules
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .microscopic
                                                                              .crystals,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.microscopic,
                                                                              "crystals",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "microscopic.crystals"
                                                                        }
                                                                      }
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
                                                  staticClass:
                                                    "red darken-3 px-5",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click:
                                                      _vm.cancel_microscopic
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Cancel")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success darken-2 px-5 mx-3",
                                                  attrs: {
                                                    tile: "",
                                                    depressed: "",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: _vm.save_microscopic
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption font-weight-bold"
                                                    },
                                                    [_vm._v("Save Result")]
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
            { attrs: { color: "success darken-2", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("saving data...")]
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

/***/ "./resources/js/components/LabTestResult.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/LabTestResult.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabTestResult_vue_vue_type_template_id_4e39d261_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true& */ "./resources/js/components/LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true&");
/* harmony import */ var _LabTestResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabTestResult.vue?vue&type=script&lang=js& */ "./resources/js/components/LabTestResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css& */ "./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LabTestResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LabTestResult_vue_vue_type_template_id_4e39d261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LabTestResult_vue_vue_type_template_id_4e39d261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e39d261",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LabTestResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LabTestResult.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LabTestResult.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LabTestResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=style&index=0&id=4e39d261&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_style_index_0_id_4e39d261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_template_id_4e39d261_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabTestResult.vue?vue&type=template&id=4e39d261&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_template_id_4e39d261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabTestResult_vue_vue_type_template_id_4e39d261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/labtest/blood.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/labtest/blood.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blood_vue_vue_type_template_id_6c06764f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blood.vue?vue&type=template&id=6c06764f&scoped=true& */ "./resources/js/components/labtest/blood.vue?vue&type=template&id=6c06764f&scoped=true&");
/* harmony import */ var _blood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blood.vue?vue&type=script&lang=js& */ "./resources/js/components/labtest/blood.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _blood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _blood_vue_vue_type_template_id_6c06764f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _blood_vue_vue_type_template_id_6c06764f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c06764f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/labtest/blood.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/labtest/blood.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/labtest/blood.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./blood.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/blood.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/labtest/blood.vue?vue&type=template&id=6c06764f&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/labtest/blood.vue?vue&type=template&id=6c06764f&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blood_vue_vue_type_template_id_6c06764f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./blood.vue?vue&type=template&id=6c06764f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/blood.vue?vue&type=template&id=6c06764f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blood_vue_vue_type_template_id_6c06764f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blood_vue_vue_type_template_id_6c06764f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/labtest/faecal.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/labtest/faecal.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faecal_vue_vue_type_template_id_08dd8402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faecal.vue?vue&type=template&id=08dd8402& */ "./resources/js/components/labtest/faecal.vue?vue&type=template&id=08dd8402&");
/* harmony import */ var _faecal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faecal.vue?vue&type=script&lang=js& */ "./resources/js/components/labtest/faecal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _faecal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _faecal_vue_vue_type_template_id_08dd8402___WEBPACK_IMPORTED_MODULE_0__["render"],
  _faecal_vue_vue_type_template_id_08dd8402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/labtest/faecal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/labtest/faecal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/labtest/faecal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faecal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./faecal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/faecal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faecal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/labtest/faecal.vue?vue&type=template&id=08dd8402&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/labtest/faecal.vue?vue&type=template&id=08dd8402& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faecal_vue_vue_type_template_id_08dd8402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./faecal.vue?vue&type=template&id=08dd8402& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/faecal.vue?vue&type=template&id=08dd8402&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faecal_vue_vue_type_template_id_08dd8402___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faecal_vue_vue_type_template_id_08dd8402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/labtest/saliva.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/labtest/saliva.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saliva_vue_vue_type_template_id_c9d7469e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saliva.vue?vue&type=template&id=c9d7469e& */ "./resources/js/components/labtest/saliva.vue?vue&type=template&id=c9d7469e&");
/* harmony import */ var _saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saliva.vue?vue&type=script&lang=js& */ "./resources/js/components/labtest/saliva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _saliva_vue_vue_type_template_id_c9d7469e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _saliva_vue_vue_type_template_id_c9d7469e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/labtest/saliva.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/labtest/saliva.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/labtest/saliva.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./saliva.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/saliva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saliva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/labtest/saliva.vue?vue&type=template&id=c9d7469e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/labtest/saliva.vue?vue&type=template&id=c9d7469e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saliva_vue_vue_type_template_id_c9d7469e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./saliva.vue?vue&type=template&id=c9d7469e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/saliva.vue?vue&type=template&id=c9d7469e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saliva_vue_vue_type_template_id_c9d7469e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saliva_vue_vue_type_template_id_c9d7469e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/labtest/urine.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/labtest/urine.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urine_vue_vue_type_template_id_c554c810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urine.vue?vue&type=template&id=c554c810&scoped=true& */ "./resources/js/components/labtest/urine.vue?vue&type=template&id=c554c810&scoped=true&");
/* harmony import */ var _urine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urine.vue?vue&type=script&lang=js& */ "./resources/js/components/labtest/urine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _urine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _urine_vue_vue_type_template_id_c554c810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _urine_vue_vue_type_template_id_c554c810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c554c810",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/labtest/urine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/labtest/urine.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/labtest/urine.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_urine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./urine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/urine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_urine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/labtest/urine.vue?vue&type=template&id=c554c810&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/labtest/urine.vue?vue&type=template&id=c554c810&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_urine_vue_vue_type_template_id_c554c810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./urine.vue?vue&type=template&id=c554c810&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/labtest/urine.vue?vue&type=template&id=c554c810&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_urine_vue_vue_type_template_id_c554c810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_urine_vue_vue_type_template_id_c554c810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);