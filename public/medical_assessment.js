(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical_assessment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabAssessment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
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
      report: null,
      report_dialog: false,
      loadingData: false,
      search: '',
      medical_headers: [{
        text: 'Patient Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'App Date',
        value: 'date'
      }, {
        text: 'App Reason',
        value: 'reason'
      }, {
        text: 'App Time',
        value: 'time'
      }, {
        text: 'Completed On',
        value: 'completed_on'
      }, {
        text: 'Status',
        value: 'completed'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }],
      show_prescription_items: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['all_Accepted_Appointment']), {
    formatContact: function formatContact() {
      if (this.report !== null) {
        var phone = this.report.patient.phone;
        var new_str = phone.slice(1);
        return '(+233)' + ' ' + new_str;
      }
    }
  }),
  created: function created() {
    this.loadingData = true;
    this.fetch_Accepted_Appointment();
  },
  mounted: function mounted() {
    this.$refs.topProgress.start();
  },
  watch: {
    all_Accepted_Appointment: function all_Accepted_Appointment() {
      if (this.all_Accepted_Appointment.length) {
        this.$refs.topProgress.done();
        this.loadingData = false;
      } else {
        this.$refs.topProgress.done();
        this.loadingData = false;
      }
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetch_Accepted_Appointment', 'fetchCompletedAppointment']), {
    lab_access: function lab_access(item) {
      this.$router.push({
        name: 'lab-tests-result',
        params: {
          id: item.id
        }
      });
    },
    complete_examination: function complete_examination(item) {
      var _this = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The selected appointment will marked as Complete!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'End Session!',
        cancelButtonText: 'No, Continue!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this.loading_dialog = true;
          axios.patch('/api/complete_appointment/' + item.id).then(function (response) {
            if (response.data.success) {
              _this.fetchCompletedAppointment();

              _this.$refs.topProgress.done();

              _this.loading_dialog = false;

              var index = _this.all_Accepted_Appointment.indexOf(item);

              _this.all_Accepted_Appointment.splice(index, 1);

              swalWithBootstrapButtons.fire('Success!', 'Appointment has been Completed.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this.$refs.topProgress.fail();

          _this.loading_dialog = false;
          swalWithBootstrapButtons.fire('Canceled', 'The Appointment Process is Canceled :)', 'info');
        }
      });
    },
    view_prescription: function view_prescription(item) {
      this.prescription_dialog = true;
      this.map_prescriptions(item.prescriptions);
    },
    getImage: function getImage(item) {
      if (item.patient.image) {
        return '/storage/patients/profiles/' + item.patient.image;
      } else {
        if (item.patient.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    },
    formatCompleteDate: function formatCompleteDate(item) {
      if (item.completed_time) {
        return moment(item.completed_time).format('LT');
      } else {
        return 'Not Set';
      }
    },
    formatComplete: function formatComplete(item) {
      if (item.completed === 0) {
        return 'Pending';
      } else {
        return 'Completed';
      }
    },
    map_prescriptions: function map_prescriptions(data) {
      this.show_prescription_items = data.prescriptions.map(function (item) {
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
    generate_report: function generate_report(item) {
      this.report = item;
      this.map_prescriptions(item);

      if (this.report) {
        this.report_dialog = true;
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM-Do-YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MedicalAssessment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
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
      report: null,
      report_dialog: false,
      loadingData: false,
      search: '',
      medical_headers: [{
        text: 'Patient Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'App Date',
        value: 'date'
      }, {
        text: 'App Reason',
        value: 'reason'
      }, {
        text: 'App Time',
        value: 'time'
      }, {
        text: 'Completed On',
        value: 'completed_on'
      }, {
        text: 'Status',
        value: 'completed'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }],
      show_prescription_items: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['all_Accepted_Appointment']), {
    formatContact: function formatContact() {
      if (this.report !== null) {
        var phone = this.report.patient.phone;
        var new_str = phone.slice(1);
        return '(+233)' + ' ' + new_str;
      }
    }
  }),
  created: function created() {
    this.loadingData = true;
    this.fetch_Accepted_Appointment();
  },
  mounted: function mounted() {
    this.$refs.topProgress.start();
  },
  watch: {
    all_Accepted_Appointment: function all_Accepted_Appointment() {
      if (this.all_Accepted_Appointment.length) {
        this.$refs.topProgress.done();
        this.loadingData = false;
      } else {
        this.$refs.topProgress.done();
        this.loadingData = false;
      }
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetch_Accepted_Appointment', 'fetchCompletedAppointment']), {
    medical_examination: function medical_examination(item) {
      this.$router.push({
        name: 'medical_assessment_details',
        params: {
          id: item.id
        }
      });
    },
    complete_examination: function complete_examination(item) {
      var _this = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The selected appointment will marked as Complete!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'End Session!',
        cancelButtonText: 'No, Continue!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this.loading_dialog = true;
          axios.patch('/api/complete_appointment/' + item.id).then(function (response) {
            if (response.data.success) {
              _this.fetchCompletedAppointment();

              _this.$refs.topProgress.done();

              _this.loading_dialog = false;

              var index = _this.all_Accepted_Appointment.indexOf(item);

              _this.all_Accepted_Appointment.splice(index, 1);

              swalWithBootstrapButtons.fire('Success!', 'Appointment has been Completed.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this.$refs.topProgress.fail();

          _this.loading_dialog = false;
          swalWithBootstrapButtons.fire('Canceled', 'The Appointment Process is Canceled :)', 'info');
        }
      });
    },
    view_prescription: function view_prescription(item) {
      this.prescription_dialog = true;
      this.map_prescriptions(item.prescriptions);
    },
    getImage: function getImage(item) {
      if (item.patient.image) {
        return '/storage/patients/profiles/' + item.patient.image;
      } else {
        if (item.patient.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    },
    formatCompleteDate: function formatCompleteDate(item) {
      if (item.completed_time) {
        return moment(item.completed_time).format('LT');
      } else {
        return 'Not Set';
      }
    },
    formatComplete: function formatComplete(item) {
      if (item.completed === 0) {
        return 'Pending';
      } else {
        return 'Completed';
      }
    },
    map_prescriptions: function map_prescriptions(data) {
      this.show_prescription_items = data.prescriptions.map(function (item) {
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
    generate_report: function generate_report(item) {
      this.report = item;
      this.map_prescriptions(item);

      if (this.report) {
        this.report_dialog = true;
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM-Do-YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#info[data-v-89075758] {\n  text-align: center !important;\n}\n.border-line[data-v-89075758] {\n  border-bottom: 2px solid rgba(0, 126, 46, 1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#info[data-v-114e67d8] {\n  text-align: center !important;\n}\n.border-line[data-v-114e67d8] {\n  border-bottom: 2px solid rgba(0, 126, 46, 1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=template&id=89075758&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LabAssessment.vue?vue&type=template&id=89075758&scoped=true& ***!
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
        "v-card",
        { staticClass: "pa-4", attrs: { outlined: "" } },
        [
          _c("v-card-title", [
            _c(
              "span",
              { staticClass: "subtitle-1 black--text font-weight-bold" },
              [_vm._v("Laboratory Examination")]
            )
          ]),
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
                    { attrs: { cols: "12" } },
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
                                { staticClass: "pa-0" },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold"
                                        },
                                        [_vm._v("Appointment Lists")]
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
                                          value: _vm.search,
                                          callback: function($$v) {
                                            _vm.search = $$v
                                          },
                                          expression: "search"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.all_Accepted_Appointment
                                    ? _c("v-data-table", {
                                        attrs: {
                                          headers: _vm.medical_headers,
                                          items: _vm.all_Accepted_Appointment,
                                          search: _vm.search,
                                          loading: _vm.loadingData
                                        },
                                        scopedSlots: _vm._u(
                                          [
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
                                              key: "item.actions",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
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
                                                                _vm.$gate.isLab()
                                                                  ? _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          staticClass:
                                                                            "ma-2",
                                                                          attrs: {
                                                                            fab:
                                                                              "",
                                                                            dark:
                                                                              "",
                                                                            color:
                                                                              "info darken-2",
                                                                            "x-small":
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.lab_access(
                                                                                item
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
                                                                              size:
                                                                                "18"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-account-search"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : _vm._e()
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
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "begin examination"
                                                          )
                                                        ]
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
                                                                _vm.$gate.isLab()
                                                                  ? _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          staticClass:
                                                                            "ma-2",
                                                                          attrs: {
                                                                            fab:
                                                                              "",
                                                                            dark:
                                                                              "",
                                                                            color:
                                                                              "success darken-2",
                                                                            "x-small":
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.complete_examination(
                                                                                item
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
                                                                              size:
                                                                                "18"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-check"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : _vm._e()
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
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "end appointment"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.name",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        {
                                                          attrs: { size: "50" }
                                                        },
                                                        [
                                                          _c("v-img", {
                                                            attrs: {
                                                              src: _vm.getImage(
                                                                item
                                                              )
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
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
                                                                "subtitle-2 font-weight-bold black--text mt-3 ml-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.patient
                                                                    .title
                                                                ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    item.patient
                                                                      .firstname
                                                                  ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    item.patient
                                                                      .lastname
                                                                  )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption font-weight-bold grey--text ml-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.patient
                                                                    .job_title
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.date",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("formatDate")(
                                                            item.scheduled_date
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.time",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("formatTime")(
                                                            item.scheduled_time
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.completed_on",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.formatCompleteDate(
                                                            item
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.completed",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.formatComplete(
                                                            item
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.reason",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(item.reason)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          285496300
                                        )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true& ***!
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
        "v-card",
        { staticClass: "pa-4", attrs: { outlined: "" } },
        [
          _c("v-card-title", [
            _c(
              "span",
              { staticClass: "subtitle-1 black--text font-weight-bold" },
              [_vm._v("Patient Medical Examination")]
            )
          ]),
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
                    { attrs: { cols: "12" } },
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
                                { staticClass: "pa-0" },
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold"
                                        },
                                        [_vm._v("Appointment Lists")]
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
                                          value: _vm.search,
                                          callback: function($$v) {
                                            _vm.search = $$v
                                          },
                                          expression: "search"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.all_Accepted_Appointment
                                    ? _c("v-data-table", {
                                        attrs: {
                                          headers: _vm.medical_headers,
                                          items: _vm.all_Accepted_Appointment,
                                          search: _vm.search,
                                          loading: _vm.loadingData
                                        },
                                        scopedSlots: _vm._u(
                                          [
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
                                              key: "item.actions",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
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
                                                                      staticClass:
                                                                        "ma-2",
                                                                      attrs: {
                                                                        fab: "",
                                                                        dark:
                                                                          "",
                                                                        color:
                                                                          "info darken-2",
                                                                        "x-small":
                                                                          ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.medical_examination(
                                                                            item
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
                                                                          size:
                                                                            "18"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-account-search"
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
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "begin examination"
                                                          )
                                                        ]
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
                                                                      staticClass:
                                                                        "ma-2",
                                                                      attrs: {
                                                                        fab: "",
                                                                        dark:
                                                                          "",
                                                                        color:
                                                                          "success darken-2",
                                                                        "x-small":
                                                                          ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.complete_examination(
                                                                            item
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
                                                                          size:
                                                                            "18"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-check"
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
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "end appointment"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.name",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        {
                                                          attrs: { size: "50" }
                                                        },
                                                        [
                                                          _c("v-img", {
                                                            attrs: {
                                                              src: _vm.getImage(
                                                                item
                                                              )
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
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
                                                                "subtitle-2 font-weight-bold black--text mt-3 ml-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.patient
                                                                    .title
                                                                ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    item.patient
                                                                      .firstname
                                                                  ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    item.patient
                                                                      .lastname
                                                                  )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption font-weight-bold grey--text ml-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.patient
                                                                    .job_title
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.date",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("formatDate")(
                                                            item.scheduled_date
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.time",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("formatTime")(
                                                            item.scheduled_time
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.completed_on",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.formatCompleteDate(
                                                            item
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.completed",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.formatComplete(
                                                            item
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item.reason",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 font-weight-regular black--text mt-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(item.reason)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          1115559719
                                        )
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

/***/ "./resources/js/components/LabAssessment.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/LabAssessment.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabAssessment_vue_vue_type_template_id_89075758_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabAssessment.vue?vue&type=template&id=89075758&scoped=true& */ "./resources/js/components/LabAssessment.vue?vue&type=template&id=89075758&scoped=true&");
/* harmony import */ var _LabAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabAssessment.vue?vue&type=script&lang=js& */ "./resources/js/components/LabAssessment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css& */ "./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LabAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LabAssessment_vue_vue_type_template_id_89075758_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LabAssessment_vue_vue_type_template_id_89075758_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "89075758",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LabAssessment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LabAssessment.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LabAssessment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LabAssessment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=style&index=0&id=89075758&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_style_index_0_id_89075758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/LabAssessment.vue?vue&type=template&id=89075758&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/LabAssessment.vue?vue&type=template&id=89075758&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_template_id_89075758_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LabAssessment.vue?vue&type=template&id=89075758&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LabAssessment.vue?vue&type=template&id=89075758&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_template_id_89075758_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LabAssessment_vue_vue_type_template_id_89075758_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MedicalAssessment.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/MedicalAssessment.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MedicalAssessment_vue_vue_type_template_id_114e67d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true& */ "./resources/js/components/MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true&");
/* harmony import */ var _MedicalAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicalAssessment.vue?vue&type=script&lang=js& */ "./resources/js/components/MedicalAssessment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css& */ "./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MedicalAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MedicalAssessment_vue_vue_type_template_id_114e67d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MedicalAssessment_vue_vue_type_template_id_114e67d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "114e67d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MedicalAssessment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MedicalAssessment.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/MedicalAssessment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MedicalAssessment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=style&index=0&id=114e67d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_style_index_0_id_114e67d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_template_id_114e67d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MedicalAssessment.vue?vue&type=template&id=114e67d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_template_id_114e67d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicalAssessment_vue_vue_type_template_id_114e67d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);