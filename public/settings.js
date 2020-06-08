(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Doughnut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Doughnut */ "./resources/js/Doughnut.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Doughnut: _Doughnut__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      males: null,
      females: null,
      referred: null,
      datacollection: null
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['fetchPatientGender']), {
    fillData: function fillData() {
      var _this = this;

      axios.get('/api/patient_category').then(function (response) {
        _this.males = response.data.male;
        _this.females = response.data.female;
        _this.referred = response.data.referred;
        _this.datacollection = {
          labels: ['Females', 'Males', 'Referred'],
          datasets: [{
            backgroundColor: ['#FF0066', '#048ECB', '#F39F19'],
            data: [_this.females, _this.males, _this.referred]
          }]
        };
      });
    },
    getRandomInt: function getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    dashboard: function dashboard() {
      this.$router.push({
        name: 'reports_dashboard'
      });
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    this.fillData();
    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this2.$refs.topProgress.done();
    }, 2000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dob_modal: false,
      loading_dialog: false,
      user_avatar: null,
      max: 100,
      min: 0,
      profile_zoom_value: 0,
      croppa: {},
      upload_dialog: false,
      old_password: '',
      verifying: false,
      resetdialog: false,
      loadingPassword: false,
      editSettingsDialog: false,
      gender: ['Male', 'Female'],
      user: {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        age: '',
        gender: '',
        phone: '',
        biodata: '',
        dob: '',
        address: ''
      },
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      ageRules: [function (v) {
        return !!v || 'Age is required';
      }],
      statusRules: [function (v) {
        return !!v || 'Status is required';
      }],
      dobRules: [function (v) {
        return !!v || 'DOB is required';
      }],
      addressRules: [function (v) {
        return !!v || 'Address is required';
      }],
      roleRules: [function (v) {
        return !!v || 'Role is required';
      }],
      genderRules: [function (v) {
        return !!v || 'Gender is required';
      }],
      phoneRules: [function (v) {
        return !!v || 'Phone number is required';
      }, function (v) {
        return v && v.length === 10 || 'Phone Number must be equal to 10 characters';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }],
      passwordRules: [function (v) {
        return !!v || 'Password is required';
      }, function (v) {
        return v && v.length >= 8 || 'Password must be greater than 8 characters';
      }],
      reset: {
        "new": '',
        confirm: ''
      }
    };
  },
  watch: {
    avatar: function avatar() {
      if (this.avatar === null) {
        this.getImage;
      }
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do, YYYY');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['fetchUser']), {
    formatStatusColor: function formatStatusColor() {
      if (this.getUser) {
        if (this.getUser.status === 1) {
          return 'success--text darken-2';
        } else {
          return 'red--text darken-2';
        }
      }
    },
    editAccount: function editAccount() {
      this.user.firstname = this.getUser.firstname;
      this.user.lastname = this.getUser.lastname;
      this.user.email = this.getUser.email;
      this.user.username = this.getUser.username;
      this.user.age = this.getUser.age;
      this.user.gender = this.getUser.gender;
      this.user.phone = this.getUser.phone;
      this.user.biodata = this.getUser.Biodata;
      this.user.address = this.getUser.address;
      this.user.dob = moment(this.getUser.dob).format('YYYY-MM-DD');
      this.editSettingsDialog = true;
    },
    submitInfo: function submitInfo() {
      var _this = this;

      if (this.$refs.account.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.patch('/update_account/' + this.getUser.id, {
          user: this.user
        }).then(function (response) {
          if (response.data.success) {
            _this.loading_dialog = false;

            _this.$refs.topProgress.done();

            _this.editSettingsDialog = false;

            _this.fetchUser();

            Swal.fire('Success', 'User Account Updated', 'success');
          }
        });
      } else {
        this.$refs.topProgress.fail();
        Swal.fire('Invalid Input', 'Check the form for errors', 'error');
      }
    },
    verify: function verify() {
      var _this2 = this;

      if (this.$refs.verifyPassword.validate()) {
        this.$refs.topProgress.start();
        this.verifying = true;
        this.loadingPassword = true;
        axios.post('/verify_password', {
          password: this.old_password
        }).then(function (response) {
          if (response.data.success) {
            _this2.$refs.topProgress.done();

            _this2.verifying = false;
            _this2.loadingPassword = false;
            _this2.resetdialog = true;
          }

          if (response.data.error) {
            _this2.$refs.topProgress.fail();

            _this2.verifying = false;
            _this2.loadingPassword = false;
            Swal.fire('Password Mismatched', 'Password entered is Incorrect', 'error');
          }
        });
      } else {
        this.$refs.topProgress.fail();
        Swal.fire('Empty Field', 'Enter your current password to verify your account', 'error');
      }
    },
    resetPassword: function resetPassword() {
      var _this3 = this;

      if (this.$refs.reset.validate()) {
        this.$refs.topProgress.start();

        if (this.reset["new"] === this.reset.confirm) {
          axios.post('/reset_password', {
            password: this.reset["new"]
          }).then(function (response) {
            if (response.data.success) {
              _this3.$refs.topProgress.done();

              _this3.resetdialog = false;

              _this3.$refs.reset.reset();

              _this3.$refs.verifyPassword.reset();

              Swal.fire('Success', 'Your password has been updated', 'success');
            }
          });
        } else {
          this.$refs.topProgress.fail();
          Swal.fire('Password mismatched', 'Password entered does not match', 'warning');
        }
      } else {
        this.$refs.topProgress.fail();
        Swal.fire('Empty Field', 'Enter your new password to update', 'error');
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
      _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
        icon: 'error',
        title: 'Invalid file type. Please choose a jpeg or png file.'
      });
    },
    onFileSizeExceed: function onFileSizeExceed(file) {
      _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
        icon: 'error',
        title: 'File size exceeds. Please choose a file smaller than 2mb.'
      });
    },
    handleImageRemove: function handleImageRemove() {
      this.user_avatar = null;
    },
    save_image: function save_image() {
      var _this4 = this;

      this.$refs.topProgress.start();
      this.croppa.generateBlob(function (blob) {
        _this4.read(blob);
      }, 'image/*', 0.8); // 80% compressed image file
    },
    upload_image: function upload_image() {
      var _this5 = this;

      this.$refs.topProgress.start();
      this.loading_dialog = true;
      axios.post('/upload_profile', {
        image: this.user_avatar
      }).then(function (response) {
        if (response.data.success) {
          _this5.upload_dialog = false;

          _this5.$refs.topProgress.done();

          _this5.loading_dialog = false;

          _this5.fetchUser();

          swalWithBootstrapButtons.fire('Profile Uploaded', 'Your Profile image has been updated :)', 'success');
        }
      });
    },
    read: function read(image) {
      var _this6 = this;

      var reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = function (e) {
        _this6.user_avatar = e.target.result;

        _this6.$refs.topProgress.done();
      };
    },
    delete_profile: function delete_profile() {
      var _this7 = this;

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
          axios["delete"]('/delete_profile/' + _this7.getUser.id).then(function (response) {
            if (response.data.success) {
              _this7.fetchUser();

              _this7.$refs.topProgress.done();

              swalWithBootstrapButtons.fire('Deleted!', 'Profile Image Deleted.', 'success');
            }

            if (response.data.info) {
              _this7.fetchUser();

              _this7.$refs.topProgress.fail();

              swalWithBootstrapButtons.fire('Deleted!', response.data.info, 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this7.$refs.topProgress.fail();

          _this7.loading_dialog = false;
          swalWithBootstrapButtons.fire('Reverted', 'Your Profile image is saved :)', 'info');
        }
      });
    },
    cancel_upload: function cancel_upload() {
      this.user_avatar = null;
      this.upload_dialog = false;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getUser']), {
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
    },
    formatStatus: function formatStatus() {
      if (this.getUser) {
        if (this.getUser.status === 1) {
          return 'Active';
        } else {
          return 'Inactive';
        }
      }
    }
  }),
  mounted: function mounted() {
    var _this8 = this;

    this.$refs.topProgress.start();
    setInterval(function () {
      _this8.$refs.topProgress.done();
    }, 1000);
  },
  created: function created() {
    this.fetchUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports.vue?vue&type=template&id=6c52f8b8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports.vue?vue&type=template&id=6c52f8b8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          _c(
            "v-toolbar",
            {
              staticClass: "success darken-2",
              attrs: { dark: "", elevation: "10" }
            },
            [
              _c(
                "v-toolbar-title",
                { staticClass: "subtitle-2 font-weight-bold text-uppercase" },
                [
                  _c("v-icon", { staticClass: "mr-2" }, [_vm._v("mdi-vote")]),
                  _vm._v(
                    "\n                Welcome to Report Dashboard\n            "
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "px-5",
                  attrs: {
                    rounded: "",
                    color: "red darken-3",
                    dark: "",
                    elevation: "15"
                  },
                  on: { click: _vm.dashboard }
                },
                [
                  _c(
                    "span",
                    { staticClass: "caption font-weight-bold text-uppercase" },
                    [_vm._v("Reports")]
                  ),
                  _vm._v(" "),
                  _c("v-icon", { attrs: { right: "" } }, [
                    _vm._v("mdi-chevron-double-right")
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
            "v-card-text",
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
                            staticClass: "mx-auto",
                            attrs: {
                              src: "/app_asset/undraw_report_mx0a.svg",
                              width: "70%"
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
                    { attrs: { cols: "12", md: "5" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-3 justify-center",
                          attrs: { outlined: "" }
                        },
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "pa-1 mx-auto subtitle-2 font-weight-bold text-uppercase"
                            },
                            [_vm._v("Patient Demographic Data")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "pa-1" },
                            [
                              _c("doughnut", {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings.vue?vue&type=template&id=3a09080e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Settings.vue?vue&type=template&id=3a09080e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto mt-5", staticStyle: { width: "95%" } },
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
        "div",
        { staticClass: "d-flex px-3" },
        [
          _c(
            "p",
            { staticClass: "subtitle-2 font-weight-bold grey--text darken-2" },
            [
              _vm._v("How are you today, "),
              _vm.getUser
                ? _c(
                    "span",
                    { staticClass: "font-weight-bold black--text lighten-4" },
                    [
                      _vm._v(
                        _vm._s(_vm.getUser.title) +
                          " " +
                          _vm._s(_vm.getUser.lastname) +
                          " ?"
                      )
                    ]
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "caption font-weight-bold success--text darken-3 text-uppercase mt-2"
            },
            [_vm._v("My Account")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "caption font-weight-bold grey--text darken-5 mx-2",
              attrs: { text: "", color: "info darken-2" },
              on: { click: _vm.upload_image_dialog }
            },
            [
              _vm._v("Upload Image "),
              _c("v-icon", { staticClass: "ml-1", attrs: { size: "15" } }, [
                _vm._v("mdi-pencil")
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
        { attrs: { outlined: "", "pa-4": "" } },
        [
          _c(
            "v-row",
            { staticClass: "px-3" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8", lg: "8", sm: "6" } },
                [
                  _vm.getUser
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "d-md-flex d-lg-flex flex-md-row flex-lg-row flex-sm-column"
                        },
                        [
                          _c(
                            "v-avatar",
                            { staticClass: "mt-2", attrs: { size: "80" } },
                            [_c("v-img", { attrs: { src: _vm.getImage } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "mx-3 mt-6 d-flex flex-column justify-start"
                            },
                            [
                              _vm.getUser
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold text-uppercase"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.getUser.title) +
                                          " " +
                                          _vm._s(_vm.getUser.firstname) +
                                          " " +
                                          _vm._s(_vm.getUser.lastname)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "caption font-weight-bold text-uppercase grey--text darken-2"
                                },
                                [
                                  _vm._v("Status: "),
                                  _vm.getUser
                                    ? _c(
                                        "span",
                                        { class: _vm.formatStatusColor },
                                        [_vm._v(_vm._s(_vm.formatStatus))]
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "red darken-3",
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
                                    _vm._v("delete image")
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "d-flex mt-5",
                  attrs: { cols: "12", md: "4", lg: "4", sm: "6" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "success darken-2 px-6 ml-auto",
                      attrs: { rounded: "", elevation: "15", dark: "" },
                      on: { click: _vm.editAccount }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "font-weight-bold text-uppercase caption"
                        },
                        [_vm._v("Edit Personal Info")]
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "px-3" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "7" } },
                [
                  _c(
                    "p",
                    {
                      staticClass:
                        "subtitle-1 font-weight-bold green--text darken-4 text-uppercase"
                    },
                    [_vm._v("Personal Details")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6", md: "4", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("First Name")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.firstname))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6", md: "4", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Last Name")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.lastname))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6", md: "4", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.email))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6", md: "4", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Date of Birth")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm._f("formatDate")(_vm.getUser.dob))
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6", md: "3", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Contact")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.phone))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6", md: "3", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Sex")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.gender))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6", md: "3", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Username")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.username))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6", md: "3", lg: "3" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Role")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.role.name))]
                            )
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Address")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-4 d-block font-weight-bold subtitle-2"
                              },
                              [_vm._v(_vm._s(_vm.getUser.address))]
                            )
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-4 text-uppercase subtitle-2"
                          },
                          [_vm._v("Biodata")]
                        ),
                        _vm._v(" "),
                        _vm.getUser
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "grey--text darken-3 d-block font-weight-bold"
                              },
                              [
                                _vm.getUser.Biodata
                                  ? _c("span", [
                                      _vm._v(_vm._s(_vm.getUser.Biodata))
                                    ])
                                  : _c("span", [_vm._v("N/A")])
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
              _c("v-col", { attrs: { cols: "12", md: "5" } }, [
                _c(
                  "div",
                  [
                    _c(
                      "v-responsive",
                      [
                        _c("v-img", {
                          attrs: { src: "/app_asset/personal_settings.svg" }
                        })
                      ],
                      1
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
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-card", { staticClass: "pa-3 justify-center" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-center" },
                      [
                        _c(
                          "v-avatar",
                          {
                            attrs: {
                              color: "success darken-2",
                              size: "62",
                              dark: ""
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "white--text",
                                attrs: { size: "25" }
                              },
                              [_vm._v("mdi-lock-open-outline")]
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
                      {
                        staticClass: "text-center mt-4 mx-auto",
                        staticStyle: { width: "50%" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "grey--text darken-5 body-2 font-weight-bold"
                          },
                          [
                            _vm._v(
                              "Enter your current password in the form below and we will send you further instructions on how to reset your password"
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-center mt-5 mx-auto",
                        staticStyle: { width: "50%" }
                      },
                      [
                        _c(
                          "v-form",
                          { ref: "verifyPassword" },
                          [
                            _c("v-text-field", {
                              attrs: {
                                color: "success darken-2",
                                type: "password",
                                rules: _vm.passwordRules,
                                disabled: _vm.verifying,
                                loading: _vm.loadingPassword,
                                label: "Current Password",
                                outlined: "",
                                placeholder:
                                  "Enter your old password for verification"
                              },
                              model: {
                                value: _vm.old_password,
                                callback: function($$v) {
                                  _vm.old_password = $$v
                                },
                                expression: "old_password"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "px-6",
                                attrs: {
                                  rounded: "",
                                  color: "success darken-2",
                                  dark: "",
                                  elevation: "15"
                                },
                                on: { click: _vm.verify }
                              },
                              [
                                !_vm.verifying
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "caption font-weight-bold"
                                      },
                                      [_vm._v("Submit")]
                                    )
                                  : _c(
                                      "span",
                                      {
                                        staticClass: "caption font-weight-bold"
                                      },
                                      [_vm._v("verifying...")]
                                    )
                              ]
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "900", persistent: "", scrollable: "" },
          model: {
            value: _vm.editSettingsDialog,
            callback: function($$v) {
              _vm.editSettingsDialog = $$v
            },
            expression: "editSettingsDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "success darken-2 pa-4", attrs: { dark: "" } },
                [
                  _c(
                    "v-icon",
                    { staticClass: "mr-2 white--text", attrs: { size: "20" } },
                    [_vm._v("mdi-account-cog")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-bold white--text" },
                    [_vm._v("Edit Account")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "pa-6 px-10", staticStyle: { height: "700px" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "text-center", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-responsive",
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: { src: _vm.getImage, width: "10%" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "grey--text darken-7 mt-5 font-weight-bold"
                            },
                            [
                              _vm._v(
                                "Dr " +
                                  _vm._s(_vm.user.firstname) +
                                  " " +
                                  _vm._s(_vm.user.lastname)
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
                    "v-form",
                    { ref: "account" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name",
                                  rules: _vm.nameRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.firstname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "firstname", $$v)
                                  },
                                  expression: "user.firstname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Last Name",
                                  rules: _vm.nameRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.lastname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "lastname", $$v)
                                  },
                                  expression: "user.lastname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Username",
                                  rules: _vm.nameRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.username,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "username", $$v)
                                  },
                                  expression: "user.username"
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
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Age",
                                  rules: _vm.ageRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.age,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "age", $$v)
                                  },
                                  expression: "user.age"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email",
                                  rules: _vm.emailRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email", $$v)
                                  },
                                  expression: "user.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Phone",
                                  rules: _vm.phoneRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.phone,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "phone", $$v)
                                  },
                                  expression: "user.phone"
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
                            { attrs: { cols: "12", md: "4", lg: "4" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.gender,
                                  label: "Sex",
                                  rules: _vm.genderRules
                                },
                                model: {
                                  value: _vm.user.gender,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "gender", $$v)
                                  },
                                  expression: "user.gender"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "mt-5",
                              attrs: { cols: "12", md: "4", lg: "4" }
                            },
                            [
                              _c(
                                "v-dialog",
                                {
                                  ref: "dob_dialog",
                                  attrs: {
                                    "return-value": _vm.user.dob,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(_vm.user, "dob", $event)
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(_vm.user, "dob", $event)
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
                                                  label: "DOB",
                                                  rules: _vm.dobRules,
                                                  dense: ""
                                                },
                                                model: {
                                                  value: _vm.user.dob,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.user,
                                                      "dob",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "user.dob"
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
                                        value: _vm.user.dob,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "dob", $$v)
                                        },
                                        expression: "user.dob"
                                      }
                                    },
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "primary" },
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
                                          attrs: { text: "", color: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.dob_dialog.save(
                                                _vm.user.dob
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
                              staticClass: "mt-5",
                              attrs: { cols: "12", md: "4", lg: "4" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Address",
                                  rules: _vm.addressRules,
                                  dense: ""
                                },
                                model: {
                                  value: _vm.user.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "address", $$v)
                                  },
                                  expression: "user.address"
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  name: "biodata",
                                  label: "Biodata",
                                  hint: "Enter Information about yourself"
                                },
                                model: {
                                  value: _vm.user.biodata,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "biodata", $$v)
                                  },
                                  expression: "user.biodata"
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
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "success darken-2 px-5 mr-3",
                      attrs: { dark: "", rounded: "", elevation: "15" },
                      on: { click: _vm.submitInfo }
                    },
                    [
                      _c("span", { staticClass: "caption font-weight-bold" }, [
                        _vm._v("Update")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-5",
                      attrs: { rounded: "", elevation: "15" },
                      on: {
                        click: function($event) {
                          _vm.editSettingsDialog = false
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "caption font-weight-bold" }, [
                        _vm._v("Cancel")
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
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500" },
          model: {
            value: _vm.resetdialog,
            callback: function($$v) {
              _vm.resetdialog = $$v
            },
            expression: "resetdialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "subtitle-1 success darken-2 pa-4" },
                [
                  _c(
                    "v-icon",
                    { staticClass: "white--text mr-2", attrs: { size: "20" } },
                    [_vm._v("mdi-lock-open-check")]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "white--text" }, [
                    _vm._v("Reset Password")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "px-6" },
                [
                  _c("v-card-text", [
                    _c("span", { staticClass: "black--text darken-5" }, [
                      _vm._v(
                        "Enter your New password and Confirm to change your password"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    { ref: "reset" },
                    [
                      _c("v-text-field", {
                        attrs: {
                          color: "success darken-2",
                          rules: _vm.passwordRules,
                          dense: "",
                          label: "New Password",
                          outlined: "",
                          placeholder: "Enter your New Password",
                          type: "password"
                        },
                        model: {
                          value: _vm.reset.new,
                          callback: function($$v) {
                            _vm.$set(_vm.reset, "new", $$v)
                          },
                          expression: "reset.new"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          color: "success darken-2",
                          type: "password",
                          rules: _vm.passwordRules,
                          dense: "",
                          label: "Confirm Password",
                          outlined: "",
                          placeholder: "Confirm your Password"
                        },
                        model: {
                          value: _vm.reset.confirm,
                          callback: function($$v) {
                            _vm.$set(_vm.reset, "confirm", $$v)
                          },
                          expression: "reset.confirm"
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
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.resetPassword }
                    },
                    [_vm._v("Reset")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.resetdialog = false
                        }
                      }
                    },
                    [_vm._v("cancel")]
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

/***/ "./resources/js/Doughnut.js":
/*!**********************************!*\
  !*** ./resources/js/Doughnut.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["PolarArea"],
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

/***/ "./resources/js/components/Reports.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Reports.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reports_vue_vue_type_template_id_6c52f8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reports.vue?vue&type=template&id=6c52f8b8&scoped=true& */ "./resources/js/components/Reports.vue?vue&type=template&id=6c52f8b8&scoped=true&");
/* harmony import */ var _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reports.vue?vue&type=script&lang=js& */ "./resources/js/components/Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reports_vue_vue_type_template_id_6c52f8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reports_vue_vue_type_template_id_6c52f8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c52f8b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reports.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Reports.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reports.vue?vue&type=template&id=6c52f8b8&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Reports.vue?vue&type=template&id=6c52f8b8&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_6c52f8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reports.vue?vue&type=template&id=6c52f8b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports.vue?vue&type=template&id=6c52f8b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_6c52f8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_6c52f8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Settings.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Settings.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_3a09080e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=3a09080e&scoped=true& */ "./resources/js/components/Settings.vue?vue&type=template&id=3a09080e&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_3a09080e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_3a09080e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a09080e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings.vue?vue&type=template&id=3a09080e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Settings.vue?vue&type=template&id=3a09080e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_3a09080e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=3a09080e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings.vue?vue&type=template&id=3a09080e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_3a09080e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_3a09080e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);