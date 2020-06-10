(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/All.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Patients/All.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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



var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
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
      attach: true,
      dob_modal: false,
      patient: {
        title: null,
        firstname: null,
        lastname: null,
        contact: null,
        age: null,
        email: null,
        job_title: null,
        sex: null,
        address: null,
        department: null,
        employee_type: null,
        dob: null
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
      departmentRules: [function (v) {
        return !!v || 'Department is required';
      }],
      employee_typeRules: [function (v) {
        return !!v || 'Type of Employee Field is required';
      }],
      addressRules: [function (v) {
        return !!v || 'Address is required';
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
      loadingData: false,
      search: '',
      headers: [{
        text: 'Image',
        align: 'start',
        value: 'image'
      }, {
        text: 'Name of Patient',
        align: 'start',
        sortable: false,
        value: 'firstname'
      }, {
        text: 'Sex',
        value: 'gender'
      }, {
        text: 'Phone Number',
        value: 'phone'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Job Title',
        value: 'job_title'
      }, {
        text: 'Status',
        value: 'referred'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        align: 'center'
      }],
      patients: []
    };
  },
  created: function created() {
    this.loadingData = true;
    this.fetchPatients();
  },
  watch: {
    Patients: function Patients() {
      if (this.Patients.length) {
        this.loadingData = false;
        this.$refs.topProgress.done();
      } else {
        this.$refs.topProgress.done();
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['Patients']), {
    filteredPatients: function filteredPatients() {
      var _this = this;

      return this.Patients.filter(function (patient) {
        return patient.firstname.toLowerCase().match(_this.search.toLowerCase()) || patient.lastname.toLowerCase().match(_this.search.toLowerCase());
      });
    }
  }),
  mounted: function mounted() {
    this.$refs.topProgress.start();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatients', 'fetchMalePatients', 'fetchFemalePatients']), {
    formatGender: function formatGender(gender) {
      if (gender == 'Male') {
        return 'mdi-gender-male';
      } else {
        return 'mdi-gender-female';
      }
    },
    viewInfo: function viewInfo(item) {
      this.$router.push({
        name: 'newvitals',
        params: {
          id: item.id
        }
      });
    },
    delete_account: function delete_account(patient) {
      var _this2 = this;

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The Patient Account will be deleted",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete Account!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/api/remove_patient_account/' + patient.id).then(function (response) {
            if (response.data.success) {
              var index = _this2.Patients.indexOf(patient);

              _this2.Patients.splice(index, 1);

              swalWithBootstrapButtons.fire('Deleted', response.data.success, 'success');
            }

            if (response.data.error) {
              swalWithBootstrapButtons.fire('Not Found', response.data.error, 'error');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', 'The Application process cancelled :)', 'info');
        }
      });
    },
    getGenderColor: function getGenderColor(gender) {
      if (gender === 'Male') {
        return 'primary';
      } else {
        return 'success';
      }
    },
    getImage: function getImage(item) {
      if (item.image) {
        return '/patients/profiles/' + item.image;
      } else {
        if (item.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    },
    format_phone: function format_phone(item) {
      return '(+233)' + ' ' + item.phone.slice(1, 9);
    },
    formatStatusText: function formatStatusText(item) {
      if (item === 0) {
        return 'Active';
      } else {
        return 'Referred';
      }
    },
    formatStatus: function formatStatus(item) {
      if (item === 0) {
        return 'mdi-account-arrow-left';
      } else {
        return 'mdi-account-arrow-right';
      }
    },
    getStatusColor: function getStatusColor(item) {
      if (item === 0) {
        return 'info darken-1';
      } else {
        return 'red darken-3';
      }
    },
    refer: function refer(item) {
      this.$router.push({
        name: 'patient_referrals_form',
        params: {
          id: item.id
        }
      });
    },
    new_patient: function new_patient() {
      var _this3 = this;

      if (this.$refs.patientform.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.post('/api/new_patient', {
          patient: this.patient
        }).then(function (response) {
          if (response.data.success) {
            _this3.$refs.topProgress.done();

            _this3.loading_dialog = false;

            _this3.fetchPatients();

            _this3.$refs.patientform.reset();

            _this3.$refs.patientform.resetValidation();

            _this3.patient_form_dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
              icon: 'success',
              title: 'Account Created'
            });
          }

          if (response.data.error) {
            _this3.$refs.topProgress.fail();

            _this3.loading_dialog = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', response.data.error, 'error');
          }

          if (response.data.contact_error) {
            _this3.$refs.topProgress.fail();

            _this3.loading_dialog = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', response.data.contact_error, 'error');
          }
        });
      }
    },
    close_form: function close_form() {
      this.$refs.patientform.reset();
      this.$refs.patientform.resetValidation();
      this.patient_form_dialog = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/All.vue?vue&type=template&id=3ce2dc2a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Patients/All.vue?vue&type=template&id=3ce2dc2a&scoped=true& ***!
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
    { staticClass: "mt-5 ma-3" },
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
      _c("v-row", { staticClass: "px-5" }, [
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c("h5", { staticClass: "title font-weight-bold" }, [
            _vm._v("All Patient Info")
          ]),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "subtitle-2 font-weight-regular grey--text" },
            [
              _vm._v(
                "Compiled list of All Patient Records available at one place"
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ml-auto d-flex flex-column justify-end" },
          [
            _vm.Patients
              ? _c(
                  "span",
                  { staticClass: "subtitle-2" },
                  [
                    _c("v-icon", { attrs: { color: "success darken-2" } }, [
                      _vm._v("mdi-account-group")
                    ]),
                    _vm._v(" Number of Patient: "),
                    _c(
                      "span",
                      { staticClass: "font-weight-bold black--text" },
                      [_vm._v(_vm._s(_vm.Patients.length))]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "v-menu",
              {
                attrs: {
                  transition: "slide-x-transition",
                  bottom: "",
                  right: ""
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
                              staticClass: "ma-2 px-5",
                              attrs: {
                                small: "",
                                outlined: "",
                                color: "success darken-2",
                                dark: ""
                              }
                            },
                            on
                          ),
                          [
                            _c("span", { staticClass: "caption text-center" }, [
                              _vm._v("sort by")
                            ]),
                            _vm._v(" "),
                            _c("v-icon", { attrs: { right: "", size: "15" } }, [
                              _vm._v("mdi-chevron-down")
                            ])
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
                  "v-list",
                  [
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetchPatients } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("All")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { size: "19" } }, [
                              _vm._v("mdi-gender-male-female")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetchMalePatients } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Male")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { size: "19" } }, [
                              _vm._v("mdi-gender-male")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetchFemalePatients } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Female")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { size: "19" } }, [
                              _vm._v("mdi-gender-female")
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
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mt-10 px-5" },
        [
          _c(
            "v-btn",
            {
              staticClass: "success darken-2 px-7",
              attrs: { tile: "", depressed: "", dark: "" },
              on: {
                click: function($event) {
                  _vm.patient_form_dialog = true
                }
              }
            },
            [
              _c("span", { staticClass: "caption" }, [_vm._v("Add Patient")]),
              _vm._v(" "),
              _c("v-icon", { attrs: { right: "", size: "20" } }, [
                _vm._v("mdi-account-multiple-plus")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "subtitle-2",
            staticStyle: { width: "5% !important" },
            attrs: {
              color: "success darken-2",
              placeholder: "Search by Name...",
              label: "Patient Info",
              outlined: "",
              dense: ""
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
      _c("v-divider", { attrs: { inset: "" } }),
      _vm._v(" "),
      _vm.Patients.length
        ? _c(
            "v-row",
            { staticClass: "mt-3" },
            _vm._l(_vm.filteredPatients, function(patient) {
              return _c(
                "v-col",
                { key: patient.id, attrs: { cols: "6", md: "3", sm: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { outlined: "", hover: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "pa-3" },
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
                                    { attrs: { size: "50" } },
                                    [
                                      _c("v-img", {
                                        attrs: { src: _vm.getImage(patient) }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                patient.referred
                                                  ? _c(
                                                      "v-icon",
                                                      _vm._g(
                                                        {
                                                          staticClass:
                                                            "ml-4 mt-3",
                                                          attrs: {
                                                            color: "primary",
                                                            dark: ""
                                                          }
                                                        },
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "mdi-arrange-send-backward"
                                                        )
                                                      ]
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
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("referred")
                                      ])
                                    ]
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
                                        "subtitle-2 font-weight-bold black--text d-inline-block text-truncate"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(patient.title) +
                                          " " +
                                          _vm._s(patient.firstname) +
                                          " " +
                                          _vm._s(patient.lastname)
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
                                    [_vm._v(_vm._s(patient.employee_type))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-1" },
                                    [
                                      _c(
                                        "v-chip",
                                        {
                                          attrs: {
                                            color: "pink",
                                            dark: "",
                                            label: "",
                                            small: ""
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(_vm.format_phone(patient))
                                            )
                                          ])
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
                        { staticClass: "py-1 px-5" },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "7" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-2 font-weight-light black--text"
                                  },
                                  [_vm._v(_vm._s(patient.job_title))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "caption font-weight-bold grey--text"
                                    },
                                    [_vm._v(_vm._s(patient.gender))]
                                  ),
                                  _vm._v(" "),
                                  _c("v-icon", { attrs: { color: "pink" } }, [
                                    _vm._v(
                                      _vm._s(_vm.formatGender(patient.gender))
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
                      _c("v-divider", { staticClass: "my-0" }),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "d-flex justify-center" },
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
                                                color: "info",
                                                depressed: "",
                                                fab: "",
                                                "x-small": "",
                                                dark: "",
                                                width: "30",
                                                height: "30",
                                                to: {
                                                  name: "patient_details",
                                                  params: { id: patient.id }
                                                }
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { size: "14" } },
                                              [_vm._v("mdi-account-details")]
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
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("profile details")
                              ])
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
                                                color: "warning darken-1",
                                                to: {
                                                  name: "first_aid",
                                                  params: { id: patient.id }
                                                },
                                                depressed: "",
                                                fab: "",
                                                "x-small": "",
                                                dark: "",
                                                width: "30",
                                                height: "30"
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { size: "14" } },
                                              [_vm._v("mdi-hospital-box")]
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
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("first aid")
                              ])
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
                                                color: "primary",
                                                depressed: "",
                                                fab: "",
                                                "x-small": "",
                                                dark: "",
                                                width: "30",
                                                height: "30"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.viewInfo(patient)
                                                }
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { size: "14" } },
                                              [_vm._v("mdi-heart-flash")]
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
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("vitals")
                              ])
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
                                                color: "red darken-3",
                                                depressed: "",
                                                fab: "",
                                                "x-small": "",
                                                dark: "",
                                                width: "30",
                                                height: "30"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.delete_account(
                                                    patient
                                                  )
                                                }
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { size: "14" } },
                                              [_vm._v("mdi-delete")]
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
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("delete account")
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
                            [_vm._v("No Patient(s) Data Available !!!")]
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
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
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
                                    {
                                      staticClass: "d-flex",
                                      attrs: { cols: "12", sm: "6", md: "6" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          outlined: "",
                                          label: "Address",
                                          color: "success darken-2",
                                          rules: _vm.addressRules
                                        },
                                        model: {
                                          value: _vm.patient.address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.patient,
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression: "patient.address"
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
                                          items: _vm.departmentOptions,
                                          label: "Department",
                                          rules: _vm.departmentRules,
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
                                          items: _vm.employee_typeOptions,
                                          label: "Employee Type",
                                          rules: _vm.employee_typeRules,
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
                      staticClass: "px-4",
                      attrs: {
                        color: "red darken-3",
                        tile: "",
                        depressed: "",
                        dark: ""
                      },
                      on: { click: _vm.close_form }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("Close")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4",
                      attrs: {
                        color: "success darken-1",
                        tile: "",
                        depressed: "",
                        dark: ""
                      },
                      on: { click: _vm.new_patient }
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
            { attrs: { color: "success darken-2", dark: "", flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "subtitle-2 font-weight-bold font-italic white--text"
                    },
                    [_vm._v("Add New Patient...")]
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

/***/ "./resources/js/components/Patients/All.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Patients/All.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _All_vue_vue_type_template_id_3ce2dc2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./All.vue?vue&type=template&id=3ce2dc2a&scoped=true& */ "./resources/js/components/Patients/All.vue?vue&type=template&id=3ce2dc2a&scoped=true&");
/* harmony import */ var _All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./All.vue?vue&type=script&lang=js& */ "./resources/js/components/Patients/All.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _All_vue_vue_type_template_id_3ce2dc2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _All_vue_vue_type_template_id_3ce2dc2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ce2dc2a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Patients/All.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Patients/All.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Patients/All.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./All.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/All.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Patients/All.vue?vue&type=template&id=3ce2dc2a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Patients/All.vue?vue&type=template&id=3ce2dc2a&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_3ce2dc2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./All.vue?vue&type=template&id=3ce2dc2a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patients/All.vue?vue&type=template&id=3ce2dc2a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_3ce2dc2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_3ce2dc2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);