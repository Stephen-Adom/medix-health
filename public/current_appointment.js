(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current_appointment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Canceled.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Canceled.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
      loading_dialog: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['canceled_appointments'])),
  mounted: function mounted() {
    var _this = this;

    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this.$refs.topProgress.done();
    }, 1000);
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('YY-MMM-Do');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchCanceledAppointment']), {
    getImage: function getImage(patient) {
      if (patient.gender === 'Male') {
        return '/app_asset/male_avatar.png';
      } else {
        return '/app_asset/undraw_female_avatar_l3ey.png';
      }
    },
    appontment_details: function appontment_details(appointment) {
      this.$router.push({
        name: 'appointment_canceled_details',
        params: {
          id: appointment.id
        }
      });
    },
    delete_appointment: function delete_appointment(appointment) {
      var _this2 = this;

      this.$refs.topProgress.start();
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The selected appointment will be deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this2.loading_dialog = true;
          axios["delete"]('/api/delete_appointment/' + appointment.id).then(function (response) {
            if (response.data.success) {
              _this2.fetchCanceledAppointment();

              _this2.$refs.topProgress.done();

              _this2.loading_dialog = false;

              var index = _this2.canceled_appointments.indexOf(appointment);

              _this2.canceled_appointments.splice(index, 1);

              swalWithBootstrapButtons.fire('Deleted!', 'Appointment Deleted.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel) {
          _this2.$refs.topProgress.fail();

          _this2.loading_dialog = false;
          swalWithBootstrapButtons.fire('Reverted', 'The Application Process is reversed :)', 'info');
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Completed.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Completed.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  created: function created() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['completed_appointments'])),
  watch: {},
  filters: {
    formatDate: function formatDate(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('YY-MMM-Do');
    },
    formatTime: function formatTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('LT');
    },
    formatFullTime: function formatFullTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('LT');
    }
  },
  methods: {
    appontment_details: function appontment_details(appointment) {
      this.$router.push({
        name: 'appointment_completed_details',
        params: {
          id: appointment.id
        }
      });
    },
    getImage: function getImage(patient) {
      if (patient.gender === 'Male') {
        return '/app_asset/male_avatar.png';
      } else {
        return '/app_asset/undraw_female_avatar_l3ey.png';
      }
    },
    getGenderColor: function getGenderColor(gender) {
      if (gender === 'Male') {
        return 'primary';
      } else {
        return 'success';
      }
    },
    formatGender: function formatGender(gender) {
      if (gender == 'Male') {
        return 'mdi-gender-male';
      } else {
        return 'mdi-gender-female';
      }
    },
    deleteItem: function deleteItem(item) {
      var index = this.appointments.indexOf(item);
      this.appointments.splice(index, 1);
      axios["delete"]('/api/delete_appointment/' + item.id).then(function (response) {
        if (response.data.success) {
          _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
            icon: 'success',
            title: 'Appointment removed'
          });
        }
      });
    },
    clearAll: function clearAll() {
      this.appointments = [];
      axios.post('/clear_all').then(function (response) {
        if (response.data.success) {
          _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
            icon: 'success',
            title: 'All Appointment cleared'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Canceled.vue?vue&type=template&id=4deb2079&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Canceled.vue?vue&type=template&id=4deb2079& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        { staticClass: "px-5" },
        [
          _c("section", [
            _c("span", { staticClass: "subtitle-2 font-weight-bold" }, [
              _vm._v("Canceled "),
              _c("span", { staticClass: "caption" }, [
                _vm._v(
                  "(" +
                    _vm._s(_vm.canceled_appointments.length) +
                    " appointments)"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-icon", { attrs: { color: "info darken-1" } }, [
            _vm._v("mdi-account-group")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.canceled_appointments.length
        ? _c(
            "v-row",
            _vm._l(_vm.canceled_appointments, function(appointment) {
              return _c(
                "v-col",
                { key: appointment.id, attrs: { cols: "6", md: "3", sm: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "pa-1" },
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
                                    { attrs: { size: "60" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.getImage(appointment.patient)
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
                                  staticClass: "d-flex flex-column",
                                  attrs: { cols: "8" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold black--text"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(appointment.patient.title) +
                                          " " +
                                          _vm._s(
                                            appointment.patient.firstname
                                          ) +
                                          " " +
                                          _vm._s(appointment.patient.lastname)
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
                                    [
                                      _vm._v(
                                        _vm._s(appointment.patient.job_title)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "d-flex mt-1" },
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
                                                            color:
                                                              "red darken-2",
                                                            depressed: "",
                                                            fab: "",
                                                            "x-small": "",
                                                            dark: "",
                                                            width: "30",
                                                            height: "30"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.delete_appointment(
                                                                appointment
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
                                                              size: "14"
                                                            }
                                                          },
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
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("delete")]
                                          )
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
                        { staticClass: "pa-1 px-5" },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-1 font-weight-light black--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatTime")(
                                          appointment.timing.start_time
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-2 font-weight-bold grey--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(
                                          appointment.schedule.schedule_date
                                        )
                                      )
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "my-0" }),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text-center" }, [
                        _c(
                          "span",
                          { staticClass: "subtitle-2 font-weight-bold" },
                          [
                            _c(
                              "a",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.appontment_details(appointment)
                                  }
                                }
                              },
                              [_vm._v("View Details")]
                            )
                          ]
                        )
                      ])
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
                            [_vm._v("No Appointment(s) Data Available !!!")]
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
            { attrs: { color: "primary", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("span", { staticClass: "caption font-italic" }, [
                    _vm._v("updating...")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Completed.vue?vue&type=template&id=02c7669b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointments/Completed.vue?vue&type=template&id=02c7669b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "px-5" },
        [
          _c("section", [
            _c("span", { staticClass: "subtitle-2 font-weight-bold" }, [
              _vm._v("Completed "),
              _c("span", { staticClass: "caption" }, [
                _vm._v(
                  "(" +
                    _vm._s(_vm.completed_appointments.length) +
                    " appointments)"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-icon", { attrs: { color: "info darken-1" } }, [
            _vm._v("mdi-account-group")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.completed_appointments.length
        ? _c(
            "v-row",
            _vm._l(_vm.completed_appointments, function(appointment) {
              return _c(
                "v-col",
                { key: appointment.id, attrs: { cols: "6", md: "3", sm: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { outlined: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "pa-1" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "60" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.getImage(appointment.patient)
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
                                  staticClass: "d-flex flex-column",
                                  attrs: { cols: "9" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-bold black--text"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(appointment.patient.title) +
                                          " " +
                                          _vm._s(
                                            appointment.patient.firstname
                                          ) +
                                          " " +
                                          _vm._s(appointment.patient.lastname)
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
                                    [
                                      _vm._v(
                                        _vm._s(appointment.patient.job_title)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "d-flex mt-1" },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "14",
                                            color: "success darken-3 mr-1"
                                          }
                                        },
                                        [_vm._v("mdi-check-bold")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "grey--text caption font-weight-bold darken-10"
                                        },
                                        [
                                          _vm._v(
                                            "Completed at " +
                                              _vm._s(
                                                _vm._f("formatFullTime")(
                                                  appointment.completed_time
                                                )
                                              )
                                          )
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
                        { staticClass: "pa-1 px-5" },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-1 font-weight-light black--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatTime")(
                                          appointment.timing.start_time
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "subtitle-2 font-weight-bold grey--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(
                                          appointment.schedule.schedule_date
                                        )
                                      )
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "my-0" }),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text-center" }, [
                        _c(
                          "span",
                          { staticClass: "subtitle-2 font-weight-bold" },
                          [
                            _c(
                              "a",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.appontment_details(appointment)
                                  }
                                }
                              },
                              [_vm._v("View Details")]
                            )
                          ]
                        )
                      ])
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
                            [_vm._v("No Appointment(s) Data Available !!!")]
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

/***/ "./resources/js/components/appointments/Canceled.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/appointments/Canceled.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Canceled_vue_vue_type_template_id_4deb2079___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canceled.vue?vue&type=template&id=4deb2079& */ "./resources/js/components/appointments/Canceled.vue?vue&type=template&id=4deb2079&");
/* harmony import */ var _Canceled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canceled.vue?vue&type=script&lang=js& */ "./resources/js/components/appointments/Canceled.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Canceled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Canceled_vue_vue_type_template_id_4deb2079___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Canceled_vue_vue_type_template_id_4deb2079___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointments/Canceled.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointments/Canceled.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/appointments/Canceled.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Canceled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Canceled.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Canceled.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Canceled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointments/Canceled.vue?vue&type=template&id=4deb2079&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/appointments/Canceled.vue?vue&type=template&id=4deb2079& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Canceled_vue_vue_type_template_id_4deb2079___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Canceled.vue?vue&type=template&id=4deb2079& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Canceled.vue?vue&type=template&id=4deb2079&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Canceled_vue_vue_type_template_id_4deb2079___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Canceled_vue_vue_type_template_id_4deb2079___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/appointments/Completed.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/appointments/Completed.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Completed_vue_vue_type_template_id_02c7669b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Completed.vue?vue&type=template&id=02c7669b&scoped=true& */ "./resources/js/components/appointments/Completed.vue?vue&type=template&id=02c7669b&scoped=true&");
/* harmony import */ var _Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Completed.vue?vue&type=script&lang=js& */ "./resources/js/components/appointments/Completed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Completed_vue_vue_type_template_id_02c7669b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Completed_vue_vue_type_template_id_02c7669b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02c7669b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointments/Completed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointments/Completed.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/appointments/Completed.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Completed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Completed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointments/Completed.vue?vue&type=template&id=02c7669b&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/appointments/Completed.vue?vue&type=template&id=02c7669b&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_template_id_02c7669b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Completed.vue?vue&type=template&id=02c7669b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointments/Completed.vue?vue&type=template&id=02c7669b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_template_id_02c7669b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_template_id_02c7669b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/manage_appointments/manage_canceled.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/manage_appointments/manage_canceled.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/manage_appointments/manage_canceled.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/manage_appointments/manage_completed.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/manage_appointments/manage_completed.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/manage_appointments/manage_completed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);