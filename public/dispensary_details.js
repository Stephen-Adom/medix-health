(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispensary_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DispensaryDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DispensaryDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      prescription_dialog: false,
      medicaHistory: null,
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
      medical_search: '',
      medical_history_dialog: false,
      prescription_items: null,
      show_prescription_items: null
    };
  },
  props: {
    id: [String, Number]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allData']), {
    medicInfo: function medicInfo() {
      var _this = this;

      return this.allData.find(function (item) {
        return item.id == _this.id;
      });
    },
    getImage: function getImage() {
      if (this.medicInfo.patient.image) {
        return '/patient/profiles/' + this.medicInfo.patient.image;
      } else {
        if (this.medicInfo.patient.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchDispensary']), {
    formatPrescription: function formatPrescription() {
      this.prescription_items = this.medicInfo.drug_name.split(" ");
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getMedicalHistory: function getMedicalHistory() {
      var _this2 = this;

      axios.post('/api/patient_medical_history', {
        id: this.medicInfo.patient.id
      }).then(function (response) {
        _this2.medicaHistory = response.data;
      });
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
    goToProfile: function goToProfile() {
      this.$router.push({
        name: 'patient_details',
        params: {
          id: this.medicInfo.patient.id
        }
      });
    },
    completeMedication: function completeMedication() {
      axios.patch('/api/update_prescription/' + this.medicInfo.id).then(function (response) {
        if (response.data.success) {
          Swal.fire('Success', 'Medical Prescription Completed', 'success');
        }
      });
    }
  }),
  created: function created() {
    if (this.medicInfo) {
      this.formatPrescription();
    }
  },
  mounted: function mounted() {
    this.getMedicalHistory();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true& ***!
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
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "3", md: "3", lg: "4" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "pa-3 d-flex justify-center flex-column",
                  attrs: { elevation: "6" }
                },
                [
                  _c("v-card-title", { staticClass: "d-flex mx-auto pa-1" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "subtitle-2 font-weight-bold success--text darken-5 text-uppercase"
                      },
                      [_vm._v("PROFILE")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "section",
                    { staticClass: "mx-auto" },
                    [
                      _c(
                        "v-avatar",
                        { attrs: { size: "100" } },
                        [_c("v-img", { attrs: { src: _vm.getImage } })],
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
                    { staticClass: "mx-auto" },
                    [
                      _c(
                        "h6",
                        {
                          staticClass:
                            "subtitle-2 text-uppercase success--text darken-3 font-weight-bold"
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.medicInfo.patient.title) +
                              " " +
                              _vm._s(_vm.medicInfo.patient.firstname) +
                              " "
                          ),
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-weight-light grey--text darken-5"
                            },
                            [_vm._v(_vm._s(_vm.medicInfo.patient.lastname))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "success darken-2", label: "" },
                          on: { click: _vm.goToProfile }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-account-circle-outline")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "caption" }, [
                            _vm._v("view profile")
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
                "v-card",
                {
                  staticClass: "pa-3 d-flex justify-center flex-column mt-6",
                  attrs: { elevation: "6" }
                },
                [
                  _c("v-card-title", { staticClass: "d-flex mx-auto pa-1" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "subtitle-2 font-weight-bold success--text darken-5 text-uppercase"
                      },
                      [_vm._v("BIO DATA")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "4", md: "4" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Gender")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase success--text darken-3 mb-1"
                            },
                            [_vm._v(_vm._s(_vm.medicInfo.patient.gender))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "4", md: "4" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase success--text darken-3 mb-1"
                            },
                            [_vm._v(_vm._s(_vm.medicInfo.patient.email))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "4", md: "4" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Contact")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase success--text darken-3 mb-1"
                            },
                            [_vm._v(_vm._s(_vm.medicInfo.patient.phone))]
                          )
                        ]
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
                          staticClass: "text-center",
                          attrs: { cols: "4", md: "4" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Job Title")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase success--text darken-3 mb-1"
                            },
                            [_vm._v(_vm._s(_vm.medicInfo.patient.job_title))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "4", md: "4" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Age")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase success--text darken-3 mb-1"
                            },
                            [_vm._v(_vm._s(_vm.medicInfo.patient.age))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "4", md: "4" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Department")]
                          ),
                          _vm._v(" "),
                          _vm.medicInfo.patient.department
                            ? _c(
                                "p",
                                {
                                  staticClass:
                                    "caption text-uppercase success--text darken-3 mb-1"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.medicInfo.patient.department)
                                  )
                                ]
                              )
                            : _c(
                                "p",
                                {
                                  staticClass:
                                    "caption text-uppercase success--text darken-3 mb-1"
                                },
                                [_vm._v("N/A")]
                              )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "6", md: "6" }
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                            },
                            [_vm._v("Type of Employee")]
                          ),
                          _vm._v(" "),
                          _vm.medicInfo.patient.employee_type
                            ? _c(
                                "p",
                                {
                                  staticClass:
                                    "caption text-uppercase success--text darken-3 mb-1"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.medicInfo.patient.employee_type)
                                  )
                                ]
                              )
                            : _c(
                                "p",
                                {
                                  staticClass:
                                    "caption text-uppercase success--text darken-3 mb-1"
                                },
                                [_vm._v("N/A")]
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
            "v-col",
            { attrs: { cols: "12", sm: "9", md: "9", lg: "8" } },
            [
              _c(
                "v-toolbar",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "red darken-3 px-6 ml-auto",
                      attrs: { rounded: "", elevation: "15", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.medical_history_dialog = true
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "font-weight-bold text-uppercase caption"
                        },
                        [_vm._v("Medical History")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "success darken-2 px-6 ml-auto",
                      attrs: { rounded: "", elevation: "15", dark: "" },
                      on: { click: _vm.goback }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "font-weight-bold text-uppercase caption"
                        },
                        [_vm._v("back")]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "pa-3 d-flex justify-center flex-column mt-6",
                  attrs: { elevation: "6" }
                },
                [
                  _c("v-card-title", { staticClass: "d-flex mx-auto pa-1" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "subtitle-2 font-weight-bold success--text darken-5 text-uppercase"
                      },
                      [_vm._v("Medical Data")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "px-8" },
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                          },
                          [_vm._v("Patient Problem")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "caption success--text darken-3 mb-1"
                          },
                          [_vm._v(_vm._s(_vm.medicInfo.medical.problem))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                          },
                          [_vm._v("Medical Diagnosis")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "caption success--text darken-3 mb-1"
                          },
                          [_vm._v(_vm._s(_vm.medicInfo.medical.diagnosis))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "caption text-uppercase grey--text font-weight-bold darken-5 mb-1"
                          },
                          [_vm._v("Additional Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "caption success--text darken-3 mb-1"
                          },
                          [_vm._v(_vm._s(_vm.medicInfo.medical.notes))]
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
                "v-card",
                {
                  staticClass: "pa-3 d-flex justify-center flex-column mt-6",
                  attrs: { elevation: "6" }
                },
                [
                  _c("v-card-title", { staticClass: "d-flex mx-auto pa-1" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "subtitle-2 font-weight-bold success--text darken-5 text-uppercase"
                      },
                      [_vm._v("Patient Prescription")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.prescription_items
                        ? [
                            _c(
                              "v-row",
                              _vm._l(_vm.prescription_items, function(
                                drug,
                                index
                              ) {
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
                                    _vm._v(_vm._s(_vm.medicInfo.dosage))
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
                                        _vm._f("formatDate")(
                                          _vm.medicInfo.start_course
                                        )
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
                                        _vm._f("formatDate")(
                                          _vm.medicInfo.end_course
                                        )
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
                                _vm.medicInfo.morning_time
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
                                                _vm.medicInfo.morning_time
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.medicInfo.afternoon_time
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
                                                _vm.medicInfo.afternoon_time
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.medicInfo.evening_time
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
                                                _vm.medicInfo.evening_time
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ])
                          ]
                        : _vm._e()
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
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-toolbar",
            { staticClass: "d-flex justify-center", attrs: { flat: "" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "success darken-2 px-6 ml-auto",
                  attrs: { rounded: "", elevation: "15", dark: "" },
                  on: { click: _vm.completeMedication }
                },
                [
                  _c(
                    "span",
                    { staticClass: "font-weight-bold text-uppercase caption" },
                    [_vm._v("Medication Complete")]
                  ),
                  _vm._v(" "),
                  _c("v-icon", { attrs: { right: "" } }, [
                    _vm._v("mdi-check-all")
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
                                _vm._s(_vm.medicInfo.patient.firstname) +
                                  " " +
                                  _vm._s(_vm.medicInfo.patient.lastname)
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
                  _vm.show_prescription_items
                    ? _vm._l(_vm.show_prescription_items, function(
                        data,
                        index
                      ) {
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DispensaryDetails.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/DispensaryDetails.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DispensaryDetails_vue_vue_type_template_id_ac3b8632_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true& */ "./resources/js/components/DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true&");
/* harmony import */ var _DispensaryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispensaryDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/DispensaryDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DispensaryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DispensaryDetails_vue_vue_type_template_id_ac3b8632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DispensaryDetails_vue_vue_type_template_id_ac3b8632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ac3b8632",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DispensaryDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DispensaryDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DispensaryDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispensaryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DispensaryDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DispensaryDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispensaryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispensaryDetails_vue_vue_type_template_id_ac3b8632_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DispensaryDetails.vue?vue&type=template&id=ac3b8632&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispensaryDetails_vue_vue_type_template_id_ac3b8632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispensaryDetails_vue_vue_type_template_id_ac3b8632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);