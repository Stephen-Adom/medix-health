(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/Detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Patients/Detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
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


var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      upload_loading_dialog: false,
      user_avatar: null,
      max: 100,
      min: 0,
      profile_zoom_value: 0,
      croppa: {},
      upload_dialog: false,
      dob_modal: false,
      loading_patient_dialog: false,
      loading_dialog: false,
      attach: true,
      patient: {
        title: null,
        firstname: null,
        lastname: null,
        contact: null,
        age: null,
        email: null,
        job_title: null,
        sex: null,
        employee: false,
        department: null,
        employee_type: null
      },
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
        return !!v || 'DOB is required';
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
      valid: false,
      patient_form_dialog: false,
      selection: null,
      prescription_dialog: false,
      medicaHistory: [],
      first_aid_search: '',
      appointmentdialog: false,
      search: '',
      searchVitals: '',
      loadingData: false,
      medical_headers: [{
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
      medical_search: '',
      headers: [{
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'reason'
      }, {
        text: 'Scheduled Day',
        value: 'schedule'
      }, {
        text: 'Time Duration',
        value: 'timing'
      }, {
        text: 'Appointment to',
        value: 'user'
      }, {
        text: 'Completed Status',
        value: 'completed'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
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
      patient_tab: null,
      appointment_history: [],
      vitals: null,
      appointment_time: null,
      appointment_day: null,
      speciality: null,
      schedules: [],
      timings: [],
      appointment_reason: ''
    }, _defineProperty(_ref, "reasonRules", [function (v) {
      return !!v || 'Appointment reason is required';
    }]), _defineProperty(_ref, "first_aid_headers", [{
      text: 'Cause of Injury',
      align: 'start',
      sortable: false,
      value: 'cause'
    }, {
      text: 'Injury Details',
      value: 'details',
      align: 'center'
    }, {
      text: 'Time of Injury',
      value: 'injury_time',
      align: 'center'
    }, {
      text: 'Date Occured',
      value: 'injury_date',
      align: 'center'
    }, {
      text: 'Treatment',
      value: 'treatment',
      align: 'center'
    }, {
      text: 'Actions',
      value: 'actions'
    }]), _defineProperty(_ref, "firstAids", []), _defineProperty(_ref, "show_prescription_items", null), _defineProperty(_ref, "doctors", []), _ref;
  },
  props: {
    id: [Number, String]
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
    },
    avatar: function avatar() {
      if (this.avatar === null) {
        this.getImage;
      }
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('dddd, MMMM Do YYYY');
    },
    formatVitalDate: function formatVitalDate(value) {
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
    },
    formateDob: function formateDob(value) {
      return moment(value).format('MMMM Do, YYYY');
    }
  },
  created: function created() {
    this.getHistory();
    this.getVitals();
    this.getFirstAids();
    this.fetchPatients();
    this.getMedicalHistory();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['Patients']), {
    patientInfo: function patientInfo() {
      var _this = this;

      return this.Patients.find(function (patient) {
        return patient.id == _this.id;
      });
    },
    getPatientImage: function getPatientImage() {
      if (this.patientInfo) {
        if (this.patientInfo.image) {
          return '/storage/patients/profiles/' + this.patientInfo.image;
        } else {
          if (this.patientInfo.gender === 'Male') {
            return "/app_asset/male_avatar.png";
          } else {
            return "/app_asset/undraw_female_avatar_l3ey.png";
          }
        }
      }
    },
    getActive: function getActive() {
      if (this.patientInfo) {
        if (this.patientInfo.referred === 1) {
          return 'Referred';
        } else {
          return 'Active';
        }
      }
    },
    formatPhone: function formatPhone() {
      if (this.patientInfo) {
        return '(+233)' + ' ' + this.patientInfo.phone.slice(1, 10);
      }
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this2.$refs.topProgress.done();
    }, 2000);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatients']), {
    refer: function refer(item) {
      this.$router.push({
        name: 'patient_referrals_form',
        params: {
          id: item.id
        }
      });
    },
    start_excuse_duty: function start_excuse_duty(item) {
      this.$router.push({
        name: 'excuse_duty_form',
        params: {
          id: item.id
        }
      });
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getDoctors: function getDoctors() {
      var _this3 = this;

      axios.get('/api/all_doctors').then(function (response) {
        _this3.doctors = response.data;
      });
    },
    getLabs: function getLabs() {
      var _this4 = this;

      axios.get('/api/all_labs').then(function (response) {
        _this4.doctors = response.data;
      });
    },
    getHistory: function getHistory() {
      var _this5 = this;

      if (this.patientInfo) {
        axios.post('/api/patient_appointment', {
          id: this.patientInfo.id
        }).then(function (response) {
          _this5.appointment_history = response.data;
        });
      }
    },
    deleteItem: function deleteItem(item) {
      var _this6 = this;

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var index = _this6.appointment_history.indexOf(item);

          _this6.appointment_history.splice(index, 1);

          axios["delete"]('/api/delete_appointment/' + item.id).then(function (response) {
            if (response.data.success) {
              swalWithBootstrapButtons.fire('Deleted!', 'Appointment Deleted.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', 'The Application Process is reverted :)', 'info');
        }
      });
    },
    getVitals: function getVitals() {
      var _this7 = this;

      if (this.patientInfo) {
        axios.post('/api/patient_vitals', {
          id: this.patientInfo.id
        }).then(function (response) {
          _this7.vitals = response.data;
        });
      }
    },
    getFirstAids: function getFirstAids() {
      var _this8 = this;

      if (this.patientInfo) {
        axios.post('/api/patient_first_aids', {
          id: this.patientInfo.id
        }).then(function (response) {
          _this8.firstAids = response.data;
        });
      }
    },
    getDoctorSchedule: function getDoctorSchedule(id) {
      var _this9 = this;

      axios.post('/api/doctor_schedule', {
        id: id
      }).then(function (response) {
        if (response.data.schedule) {
          _this9.schedules = [];
          _this9.schedules = response.data.schedule;
        }

        if (response.data.no_schedules) {
          _this9.schedules = [];
          Toast.fire({
            icon: 'info',
            title: 'No Available Schedules'
          });
        }
      });
    },
    getDoctorTime: function getDoctorTime(id) {
      var _this10 = this;

      axios.post('/api/doctor_time', {
        id: id
      }).then(function (response) {
        if (response.data.timing) {
          _this10.timings = [];
          _this10.timings = response.data.timing;
        }

        if (response.data.no_timings) {
          _this10.timings = [];
          Toast.fire({
            icon: 'info',
            title: 'No Available Timings'
          });
        }
      });
    },
    book_appointment: function book_appointment() {
      var _this11 = this;

      if (this.$refs.appointmentform.validate()) {
        this.loading_dialog = true;
        axios.post('/book_appointment', {
          id: this.id,
          speciality: this.selection,
          appointment_time: this.appointment_time,
          appointment_day: this.appointment_day,
          reason: this.appointment_reason
        }).then(function (response) {
          if (response.data.success) {
            _this11.loading_dialog = false;

            _this11.getHistory();

            _this11.appointmentdialog = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
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
    calculateBMI: function calculateBMI(weight, height) {
      if (weight && height) {
        var height_in_meters = height / 100;
        var height_squared = height_in_meters * height_in_meters;
        var bmi = weight / height_squared;
        return bmi.toFixed(1);
      } else {
        return 'N/A';
      }
    },
    getMedicalHistory: function getMedicalHistory() {
      var _this12 = this;

      if (this.patientInfo) {
        axios.post('/api/patient_medical_history', {
          id: this.patientInfo.id
        }).then(function (response) {
          _this12.medicaHistory = response.data;
        });
      }
    },
    view_prescription: function view_prescription(item) {
      this.prescription_dialog = true;
      this.map_prescriptions(item.prescriptions);
    },
    map_prescriptions: function map_prescriptions(data) {
      this.show_prescription_items = data.map(function (item) {
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
    close_dialog: function close_dialog() {
      this.selection = null;
      this.speciality = null;
      this.appointment_time = null;
      this.appointment_day = null;
      this.doctors = [];
      this.schedules = [];
      this.timings = [];
      this.appointmentdialog = false;
      this.$refs.appointmentform.reset();
      this.$refs.appointmentform.resetValidation();
    },
    formatGender: function formatGender(gender) {
      if (gender == 'Male') {
        return 'mdi-gender-male';
      } else {
        return 'mdi-gender-female';
      }
    },
    edit_account: function edit_account() {
      this.patient.title = this.patientInfo.title;
      this.patient.firstname = this.patientInfo.firstname;
      this.patient.lastname = this.patientInfo.lastname;
      this.patient.contact = this.patientInfo.phone;
      this.patient.age = this.patientInfo.age;
      this.patient.job_title = this.patientInfo.job_title;
      this.patient.sex = this.patientInfo.gender;
      this.patient.email = this.patientInfo.email;
      this.patient.employee = this.patientInfo.employee;
      this.patient.department = this.patientInfo.department;
      this.patient.employee_type = this.patientInfo.employee_type;
      this.patient.dob = moment(this.patientInfo.dob).format('YYYY-MM-DD');
      this.patient_form_dialog = true;
    },
    update_patient: function update_patient() {
      var _this13 = this;

      if (this.$refs.patientform.validate()) {
        this.loading_patient_dialog = true;
        axios.patch('/api/update_patient/' + this.patientInfo.id, this.patient).then(function (response) {
          if (response.data.success) {
            _this13.loading_patient_dialog = false;

            _this13.fetchPatients();

            _this13.patient_form_dialog = false;
            swalWithBootstrapButtons.fire('Success', 'Patient Information Updated', 'success');
          }

          if (response.data.error) {
            _this13.loading_patient_dialog = false;
            swalWithBootstrapButtons.fire('Error!', 'There is an error', 'error');
          }
        });
      }
    },
    upload_image_dialog: function upload_image_dialog() {
      this.upload_dialog = true;
    },
    onSliderChange: function onSliderChange(e) {
      var increment = e;
      this.croppa.scaleRatio = +increment;
    },
    onNewImage: function onNewImage() {
      this.profile_zoom_value = this.croppa.scaleRatio;
      this.min = this.croppa.scaleRatio / 2;
      this.max = this.croppa.scaleRatio * 2;
    },
    onZoom: function onZoom() {
      this.profile_zoom_value = this.croppa.scaleRatio;
    },
    onFileTypeMismatch: function onFileTypeMismatch(file) {
      Toast.fire({
        icon: 'error',
        title: 'Invalid file type. Please choose a jpeg or png file.'
      });
    },
    onFileSizeExceed: function onFileSizeExceed(file) {
      Toast.fire({
        icon: 'error',
        title: 'File size exceeds. Please choose a file smaller than 2mb.'
      });
    },
    handleImageRemove: function handleImageRemove() {
      this.user_avatar = null;
    },
    save_image: function save_image() {
      var _this14 = this;

      this.$refs.topProgress.start();
      this.croppa.generateBlob(function (blob) {
        _this14.read(blob);
      }, 'image/*', 0.8); // 80% compressed image file
    },
    upload_image: function upload_image() {
      var _this15 = this;

      this.$refs.topProgress.start();
      this.upload_loading_dialog = true;
      axios.patch('/api/upload_patient_profile/' + this.patientInfo.id, {
        image: this.user_avatar
      }).then(function (response) {
        if (response.data.success) {
          _this15.upload_dialog = false;

          _this15.$refs.topProgress.done();

          _this15.upload_loading_dialog = false;

          _this15.fetchPatients();

          swalWithBootstrapButtons.fire('Profile Uploaded', 'Your Profile image has been updated :)', 'success');
        }
      });
    },
    read: function read(image) {
      var _this16 = this;

      var reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = function (e) {
        _this16.user_avatar = e.target.result;

        _this16.$refs.topProgress.done();
      };
    },
    delete_profile: function delete_profile() {
      var _this17 = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "Your Profile image will be removed",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/api/delete_patient_profile/' + _this17.patientInfo.id).then(function (response) {
            if (response.data.success) {
              _this17.fetchPatients();

              _this17.$refs.topProgress.done();

              swalWithBootstrapButtons.fire('Deleted!', 'Profile Image Deleted.', 'success');
            }

            if (response.data.info) {
              _this17.fetchUser();

              _this17.$refs.topProgress.fail();

              swalWithBootstrapButtons.fire('Deleted!', response.data.info, 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
          _this17.$refs.topProgress.fail();

          _this17.loading_dialog = false;
          swalWithBootstrapButtons.fire('Reverted', 'Your Profile image is saved :)', 'info');
        }
      });
    },
    cancel_upload: function cancel_upload() {
      this.user_avatar = null;
      this.upload_dialog = false;
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
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/Detail.vue?vue&type=template&id=61b3d212&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Patients/Detail.vue?vue&type=template&id=61b3d212&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5" },
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
            "v-row",
            { staticClass: "px-5 d-flex flex-column mt-3" },
            [
              _c("section", { staticClass: "d-flex justify-space-between" }, [
                _c(
                  "span",
                  { staticClass: "subtitle-1 font-weight-bold mt-4" },
                  [_vm._v("User Profile")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "red darken-2 px-5 ml-auto ma-2",
                        attrs: { tile: "", depressed: "", dark: "" },
                        on: { click: _vm.goback }
                      },
                      [_c("span", { staticClass: "caption" }, [_vm._v("back")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "success darken-2 px-5 ml-auto ma-2",
                        attrs: { tile: "", depressed: "", dark: "" },
                        on: {
                          click: function($event) {
                            _vm.appointmentdialog = true
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "caption" }, [
                          _vm._v("new appointment")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
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
                                "v-btn",
                                {
                                  staticClass: "red darken-3 px-4 mb-2",
                                  attrs: {
                                    rounded: "",
                                    small: "",
                                    depressed: "",
                                    dark: ""
                                  },
                                  on: { click: _vm.delete_profile }
                                },
                                [
                                  _c("span", { staticClass: "overline" }, [
                                    _vm._v("remove image")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-avatar",
                                { attrs: { size: "120" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.getPatientImage }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.patientInfo
                                ? _c(
                                    "h5",
                                    {
                                      staticClass:
                                        "subtitle-1 font-weight-bold mt-2 "
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.patientInfo.title) +
                                          " " +
                                          _vm._s(_vm.patientInfo.firstname) +
                                          " " +
                                          _vm._s(_vm.patientInfo.lastname)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "h5",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold grey--text"
                                },
                                [_vm._v("Status: " + _vm._s(_vm.getActive))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  staticClass: "ma-2",
                                  attrs: {
                                    close: "",
                                    color: "teal",
                                    "text-color": "white",
                                    "close-icon": "mdi-pencil"
                                  },
                                  on: { click: _vm.upload_image_dialog }
                                },
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { left: "" } },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-account-circle")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit Profile Pic")])
                                ],
                                1
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
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-space-between mb-3"
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "grey--text darken-5 font-weight-light subtitle-2 mb-1 mt-2"
                                    },
                                    [_vm._v("User Profile")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "success darken-2 px-7",
                                      attrs: {
                                        rounded: "",
                                        elevation: "10",
                                        dark: "",
                                        small: ""
                                      },
                                      on: { click: _vm.edit_account }
                                    },
                                    [
                                      _c("span", { staticClass: "overline" }, [
                                        _vm._v("edit account")
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
                                "v-row",
                                { staticClass: "mt-4" },
                                [
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Gender: "),
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patientInfo.gender)
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
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("formateDob")(
                                                    _vm.patientInfo.dob
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
                                      _vm.patientInfo
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
                                { staticClass: "mt-4" },
                                [
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Email: "),
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patientInfo.email)
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
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.patientInfo.job_title
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
                                      _vm._v("No of Visitation: "),
                                      _vm.appointment_history
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.appointment_history.length
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
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Department: "),
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.patientInfo.department
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
                                      _vm._v("Type of Employee: "),
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.patientInfo.employee_type
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
                                      _vm._v("Age: "),
                                      _vm.patientInfo
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.patientInfo.age) +
                                                  " years"
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
                              _c(
                                "v-row",
                                { staticClass: "mt-4" },
                                [
                                  _vm.patientInfo
                                    ? _c(
                                        "v-col",
                                        {
                                          staticClass: "d-flex justify-end",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _vm.$gate.isDoctor()
                                            ? _c(
                                                "v-btn",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        _vm.patientInfo
                                                          .referred === 0,
                                                      expression:
                                                        "patientInfo.referred === 0"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "red darken-3 px-6 ma-2",
                                                  attrs: {
                                                    dark: "",
                                                    depressed: "",
                                                    tile: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.refer(
                                                        _vm.patientInfo
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    { staticClass: "caption" },
                                                    [_vm._v("Refer Patient")]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.$gate.isDoctor()
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "warning darken-1 px-6 ma-2",
                                                  attrs: {
                                                    dark: "",
                                                    depressed: "",
                                                    tile: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.start_excuse_duty(
                                                        _vm.patientInfo
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    { staticClass: "caption" },
                                                    [_vm._v("Excuse Duty")]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
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
                  _c("v-divider", { attrs: { inset: "" } }),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { staticClass: "px-5 d-flex flex-column mt-5" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold mt-4 black--text"
                            },
                            [_vm._v("Additional Details")]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-sheet",
                        [
                          [
                            _c(
                              "v-tabs",
                              {
                                attrs: {
                                  left: "",
                                  "slider-color": "info darken-2",
                                  color: "info darken-2"
                                },
                                model: {
                                  value: _vm.patient_tab,
                                  callback: function($$v) {
                                    _vm.patient_tab = $$v
                                  },
                                  expression: "patient_tab"
                                }
                              },
                              [
                                _c(
                                  "v-tab",
                                  {
                                    staticClass: "caption font-weight-light",
                                    attrs: { color: "red darken-1" }
                                  },
                                  [
                                    _c("v-icon", { staticClass: "mr-1" }, [
                                      _vm._v("mdi-clipboard-pulse")
                                    ]),
                                    _vm._v("Medical Reports ")
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab",
                                  { staticClass: "caption font-weight-light" },
                                  [
                                    _c("v-icon", { staticClass: "mr-1" }, [
                                      _vm._v("mdi-layers-triple")
                                    ]),
                                    _vm._v(" Appointment History")
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab",
                                  { staticClass: "caption font-weight-light" },
                                  [
                                    _c("v-icon", { staticClass: "mr-1" }, [
                                      _vm._v("mdi-heart-pulse")
                                    ]),
                                    _vm._v("Vitals")
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab",
                                  { staticClass: "caption font-weight-light" },
                                  [
                                    _c("v-icon", { staticClass: "mr-1" }, [
                                      _vm._v("mdi-medical-bag")
                                    ]),
                                    _vm._v("First Aid Reports")
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.patient_tab,
                                callback: function($$v) {
                                  _vm.patient_tab = $$v
                                },
                                expression: "patient_tab"
                              }
                            },
                            [
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-card",
                                            {
                                              staticClass: "pa-3",
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
                                                        "subtitle-2 font-weight-bold grey--text darken-5"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Medical History List"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "append-icon":
                                                        "mdi-magnify",
                                                      label: "Search",
                                                      "single-line": "",
                                                      "hide-details": ""
                                                    },
                                                    model: {
                                                      value: _vm.medical_search,
                                                      callback: function($$v) {
                                                        _vm.medical_search = $$v
                                                      },
                                                      expression:
                                                        "medical_search"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-data-table", {
                                                attrs: {
                                                  headers: _vm.medical_headers,
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
                                                              _vm._f(
                                                                "formatDate"
                                                              )(item.created_at)
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
                                                            attrs: {
                                                              icon: "",
                                                              color:
                                                                "info darken-2"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.view_prescription(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("v-icon", [
                                                              _vm._v(
                                                                "mdi-format-list-text"
                                                              )
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
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-card",
                                            {
                                              staticClass: "pa-3",
                                              attrs: { outlined: "" }
                                            },
                                            [
                                              _c("v-data-table", {
                                                staticClass: "elevation-1",
                                                attrs: {
                                                  headers: _vm.headers,
                                                  "sort-by": "full_name",
                                                  items:
                                                    _vm.appointment_history,
                                                  search: _vm.search,
                                                  loading: _vm.loadingData,
                                                  "loading-text":
                                                    "Loading... Please wait"
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "top",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              color: "white"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-toolbar-title",
                                                              {
                                                                staticClass:
                                                                  "subtitle-2 font-weight-bold grey--text darken-5"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Appointment History"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("v-divider", {
                                                              staticClass:
                                                                "mx-4",
                                                              attrs: {
                                                                inset: "",
                                                                vertical: ""
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("v-text-field", {
                                                          staticClass: "mx-4",
                                                          attrs: {
                                                            color: "success",
                                                            label: "search",
                                                            "append-icon":
                                                              "mdi-magnify"
                                                          },
                                                          model: {
                                                            value: _vm.search,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.search = $$v
                                                            },
                                                            expression: "search"
                                                          }
                                                        })
                                                      ]
                                                    },
                                                    proxy: true
                                                  },
                                                  {
                                                    key: "item.user",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      return [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.user
                                                                .firstname
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                item.user
                                                                  .lastname
                                                              )
                                                          )
                                                        ])
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    key: "item.timing",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      return [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "formatTime"
                                                              )(
                                                                item.timing
                                                                  .start_time
                                                              )
                                                            ) +
                                                              "-" +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "formatTime"
                                                                )(
                                                                  item.timing
                                                                    .end_time
                                                                )
                                                              )
                                                          )
                                                        ])
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    key: "item.completed",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      return [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "Completed"
                                                              )(item.completed)
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    key: "item.schedule",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      return [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "formatDate"
                                                              )(
                                                                item.schedule
                                                                  .schedule_date
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
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              icon: "",
                                                              color:
                                                                "red darken-2"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.deleteItem(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("v-icon", [
                                                              _vm._v(
                                                                " mdi-delete"
                                                              )
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
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-card",
                                            {
                                              staticClass: "pa-3",
                                              attrs: { outlined: "" }
                                            },
                                            [
                                              _c("v-data-table", {
                                                staticClass: "elevation-1",
                                                attrs: {
                                                  headers: _vm.vital_headers,
                                                  "sort-by": "full_name",
                                                  items: _vm.vitals,
                                                  search: _vm.searchVitals,
                                                  loading: _vm.loadingData,
                                                  "loading-text":
                                                    "Loading... Please wait"
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "top",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              color: "white"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-toolbar-title",
                                                              {
                                                                staticClass:
                                                                  "subtitle-2 font-weight-bold grey--text darken-5"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Vitals History"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("v-divider", {
                                                              staticClass:
                                                                "mx-4",
                                                              attrs: {
                                                                inset: "",
                                                                vertical: ""
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("v-text-field", {
                                                          staticClass: "mx-4",
                                                          attrs: {
                                                            color: "success",
                                                            label: "search",
                                                            "append-icon":
                                                              "mdi-magnify"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.searchVitals,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.searchVitals = $$v
                                                            },
                                                            expression:
                                                              "searchVitals"
                                                          }
                                                        })
                                                      ]
                                                    },
                                                    proxy: true
                                                  },
                                                  {
                                                    key: "item.created_at",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      return [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "formatVitalDate"
                                                              )(item.created_at)
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
                                                            _vm._s(
                                                              item.user
                                                                .firstname
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                item.user
                                                                  .lastname
                                                              )
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
                                                            _vm._s(
                                                              item.systolic
                                                            ) +
                                                              " / " +
                                                              _vm._s(
                                                                item.diastolic
                                                              ) +
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
                                                            _vm._s(
                                                              item.temperature
                                                            ) + " ℃"
                                                          )
                                                        ])
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    key:
                                                      "item.respiratory_rate",
                                                    fn: function(ref) {
                                                      var item = ref.item
                                                      return [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.respiratory_rate
                                                            ) + " BPM"
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
                                                            _vm._s(
                                                              item.pulse_rate
                                                            ) + " BPM"
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
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.weight
                                                            ) + " Kg"
                                                          )
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
                                                              _vm.calculateBMI(
                                                                item.weight,
                                                                item.height
                                                              )
                                                            ) + " BMI"
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
                                                        _vm.$gate.isManager()
                                                          ? _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  icon: "",
                                                                  color:
                                                                    "red darken-2"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.deleteItem(
                                                                      item
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    " mdi-delete"
                                                                  )
                                                                ])
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass:
                                                              "teal darken-1 px-5",
                                                            attrs: {
                                                              rounded: "",
                                                              small: "",
                                                              elevation: "15",
                                                              dark: ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  left: "",
                                                                  size: "20"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-flash-circle"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "caption"
                                                              },
                                                              [_vm._v("view")]
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "pa-3",
                                      attrs: { flat: "", outlined: "" }
                                    },
                                    [
                                      _c(
                                        "v-card-title",
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold grey--text darken-5"
                                            },
                                            [_vm._v("Report List")]
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
                                              value: _vm.first_aid_search,
                                              callback: function($$v) {
                                                _vm.first_aid_search = $$v
                                              },
                                              expression: "first_aid_search"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-data-table", {
                                        attrs: {
                                          headers: _vm.first_aid_headers,
                                          items: _vm.firstAids,
                                          search: _vm.first_aid_search
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "item.injury_date",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("formatDate")(
                                                        item.injury_date
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.injury_time",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("formatTime")(
                                                        item.injury_date
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
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      icon: "",
                                                      color: "red darken-2"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteItem(
                                                          item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(" mdi-delete")
                                                    ])
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass:
                                                      "teal darken-1 px-5",
                                                    attrs: {
                                                      rounded: "",
                                                      small: "",
                                                      elevation: "15",
                                                      dark: ""
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          left: "",
                                                          size: "20"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-flash-circle"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "caption"
                                                      },
                                                      [_vm._v("view")]
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
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "600px", persistent: "" },
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
              _c("v-card-title", { staticClass: "transparent" }, [
                _c(
                  "span",
                  { staticClass: "subtitle-1 font-weight-bold text-uppercase" },
                  [_vm._v("Book Appointment")]
                )
              ]),
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
                                        { attrs: { size: "18", right: "" } },
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
                                        { attrs: { size: "18", right: "" } },
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
                        { staticClass: "subtitle-1 font-weight-bold d-block" },
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
                                    _vm._l(_vm.doctors, function(doctor) {
                                      return _c(
                                        "v-chip",
                                        {
                                          key: doctor.id,
                                          staticClass: "ma-2",
                                          attrs: { value: doctor.id, pill: "" }
                                        },
                                        [
                                          _c(
                                            "v-avatar",
                                            { attrs: { left: "" } },
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  src: _vm.getImage(doctor)
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
                                  _c("i", [_vm._v("Select Speciality type")])
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
                        color: "red darken-3",
                        dark: "",
                        depressed: "",
                        tile: ""
                      },
                      on: { click: _vm.close_dialog }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("Close")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "success darken-2 px-4",
                      attrs: { dark: "", depressed: "", tile: "" },
                      on: { click: _vm.book_appointment }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("book")])]
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
          attrs: { persistent: "", "max-width": "630px", scrollable: "" },
          model: {
            value: _vm.patient_form_dialog,
            callback: function($$v) {
              _vm.patient_form_dialog = $$v
            },
            expression: "patient_form_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c(
                  "span",
                  { staticClass: "subtitle-1 text-uppercase font-weight-bold" },
                  [_vm._v("Patient Profile")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "500px" } },
                [
                  _c(
                    "v-container",
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
                            { staticClass: "pa-4", attrs: { flat: "" } },
                            [
                              _c(
                                "v-row",
                                { staticClass: "mb-0" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          attach: _vm.attach,
                                          dense: "",
                                          color: "success darken-2",
                                          rules: _vm.titleRules,
                                          items: _vm.titleOptions,
                                          label: "Title",
                                          outlined: ""
                                        },
                                        model: {
                                          value: _vm.patient.title,
                                          callback: function($$v) {
                                            _vm.$set(_vm.patient, "title", $$v)
                                          },
                                          expression: "patient.title"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "First Name",
                                          color: "success darken-2",
                                          rules: _vm.namedRules
                                        },
                                        model: {
                                          value: _vm.patient.firstname,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.patient,
                                              "firstname",
                                              $$v
                                            )
                                          },
                                          expression: "patient.firstname"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "Last Name",
                                          color: "success darken-2",
                                          rules: _vm.namedRules
                                        },
                                        model: {
                                          value: _vm.patient.lastname,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.patient,
                                              "lastname",
                                              $$v
                                            )
                                          },
                                          expression: "patient.lastname"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "6", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          attach: _vm.attach,
                                          dense: "",
                                          color: "success darken-2",
                                          rules: _vm.genderRules,
                                          items: _vm.genderOptions,
                                          label: "Sex",
                                          outlined: ""
                                        },
                                        model: {
                                          value: _vm.patient.sex,
                                          callback: function($$v) {
                                            _vm.$set(_vm.patient, "sex", $$v)
                                          },
                                          expression: "patient.sex"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "Email",
                                          color: "success darken-2",
                                          rules: _vm.emailRules
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "Phone/Contact",
                                          color: "success darken-2",
                                          type: "number",
                                          rules: _vm.phoneRules,
                                          counter: 10
                                        },
                                        model: {
                                          value: _vm.patient.contact,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.patient,
                                              "contact",
                                              $$v
                                            )
                                          },
                                          expression: "patient.contact"
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
                                      attrs: { cols: "12", sm: "6", md: "6" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "Job Title",
                                          color: "success darken-2",
                                          rules: _vm.jobRules
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "Age",
                                          color: "success darken-2",
                                          type: "number",
                                          rules: _vm.ageRules
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
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-dialog",
                                        {
                                          ref: "dob_dialog",
                                          attrs: {
                                            "return-value": _vm.patient.dob,
                                            persistent: "",
                                            width: "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.patient,
                                                "dob",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.patient,
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
                                                          dense: "",
                                                          outlined: "",
                                                          label: "DOB",
                                                          color:
                                                            "success darken-2",
                                                          rules: _vm.dobRules
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.patient.dob,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.patient,
                                                              "dob",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "patient.dob"
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
                                            callback: function($$v) {
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
                                              attrs: { scrollable: "" },
                                              model: {
                                                value: _vm.patient.dob,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.patient,
                                                    "dob",
                                                    $$v
                                                  )
                                                },
                                                expression: "patient.dob"
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
                                                    click: function($event) {
                                                      return _vm.$refs.dob_dialog.save(
                                                        _vm.patient.dob
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
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-switch", {
                                        scopedSlots: _vm._u([
                                          {
                                            key: "label",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "grey--text font-weight-bold darken-5 mt-3"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Are you an Employee?"
                                                    )
                                                  ]
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ]),
                                        model: {
                                          value: _vm.patient.employee,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.patient,
                                              "employee",
                                              $$v
                                            )
                                          },
                                          expression: "patient.employee"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-combobox", {
                                        attrs: {
                                          attach: _vm.attach,
                                          disabled: !_vm.patient.employee,
                                          items: _vm.departmentOptions,
                                          label: "Department",
                                          color: "success darken-2",
                                          chips: ""
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "d-flex",
                                      attrs: { cols: "12", sm: "6", md: "6" }
                                    },
                                    [
                                      _c("v-combobox", {
                                        attrs: {
                                          attach: _vm.attach,
                                          disabled: !_vm.patient.employee,
                                          items: _vm.employee_typeOptions,
                                          label: "Employee Type",
                                          color: "success darken-2",
                                          chips: ""
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
                                          expression: "patient.employee_type"
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
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4",
                      attrs: {
                        color: "red darken-3",
                        dark: "",
                        depressed: "",
                        tile: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.patient_form_dialog = false
                        }
                      }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("Close")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4",
                      attrs: {
                        color: "success darken-2",
                        dark: "",
                        depressed: "",
                        tile: ""
                      },
                      on: { click: _vm.update_patient }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("Save")])]
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
                    _vm._v("booking appointment...")
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "hide-overlay": "", persistent: "", width: "300" },
          model: {
            value: _vm.loading_patient_dialog,
            callback: function($$v) {
              _vm.loading_patient_dialog = $$v
            },
            expression: "loading_patient_dialog"
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
                    _vm._v("updating profile...")
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600", scrollable: "" },
          model: {
            value: _vm.upload_dialog,
            callback: function($$v) {
              _vm.upload_dialog = $$v
            },
            expression: "upload_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "subtitle-2 font-weight-bold" },
                [_vm._v("Upload User Profile Image")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c(
                            "croppa",
                            {
                              staticClass: "mx-auto",
                              attrs: {
                                width: 200,
                                height: 200,
                                placeholder: "Choose an image",
                                "placeholder-color": "#000",
                                "placeholder-font-size": 16,
                                "canvas-color": "transparent",
                                "show-remove-button": true,
                                "remove-button-color": "black",
                                "remove-button-size": 30,
                                "prevent-white-space": true,
                                "initial-size": "contain",
                                "initial-position": "center",
                                "show-loading": true,
                                "loading-size": 50,
                                accept: "image/*",
                                "file-size-limit": 2000000,
                                "loading-color": "#606060"
                              },
                              on: {
                                "new-image-drawn": _vm.onNewImage,
                                "image-remove": _vm.handleImageRemove,
                                zoom: _vm.onZoom,
                                "file-type-mismatch": _vm.onFileTypeMismatch,
                                "file-size-exceed": _vm.onFileSizeExceed
                              },
                              model: {
                                value: _vm.croppa,
                                callback: function($$v) {
                                  _vm.croppa = $$v
                                },
                                expression: "croppa"
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  slot: "placeholder",
                                  src: "/app_asset/upload_image.png",
                                  width: "100%"
                                },
                                slot: "placeholder"
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex justify-center align-center",
                          attrs: { cols: "6" }
                        },
                        [
                          _c("v-slider", {
                            staticClass:
                              "caption grey--text font-italic font-weight-bold",
                            attrs: {
                              min: _vm.min,
                              max: _vm.max,
                              step: ".001",
                              "thumb-label": "",
                              "thumb-color": "pink",
                              vertical: "",
                              label: "Slide to Resize"
                            },
                            on: { input: _vm.onSliderChange },
                            model: {
                              value: _vm.profile_zoom_value,
                              callback: function($$v) {
                                _vm.profile_zoom_value = $$v
                              },
                              expression: "profile_zoom_value"
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
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "subtitle-2",
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.cancel_upload }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _vm.user_avatar == null
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "subtitle-2 font-weight-bold",
                          attrs: { color: "green darken-1", text: "" },
                          on: { click: _vm.save_image }
                        },
                        [_vm._v("Save Changes")]
                      )
                    : _c(
                        "v-btn",
                        {
                          staticClass: "subtitle-2 font-weight-bold",
                          attrs: { color: "green darken-1", text: "" },
                          on: { click: _vm.upload_image }
                        },
                        [_vm._v("Upload")]
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
            value: _vm.upload_loading_dialog,
            callback: function($$v) {
              _vm.upload_loading_dialog = $$v
            },
            expression: "upload_loading_dialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { color: "success darken-2", dark: "", flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "subtitle-2 font-weight-regular font-italic white--text"
                    },
                    [_vm._v("Updating Profile...")]
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

/***/ "./resources/js/components/Patients/Detail.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Patients/Detail.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_61b3d212_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=61b3d212&scoped=true& */ "./resources/js/components/Patients/Detail.vue?vue&type=template&id=61b3d212&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/components/Patients/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_61b3d212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_61b3d212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61b3d212",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Patients/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Patients/Detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Patients/Detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Patients/Detail.vue?vue&type=template&id=61b3d212&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Patients/Detail.vue?vue&type=template&id=61b3d212&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_61b3d212_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=61b3d212&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/Detail.vue?vue&type=template&id=61b3d212&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_61b3d212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_61b3d212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);