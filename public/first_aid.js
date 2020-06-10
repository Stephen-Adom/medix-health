(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first_aid"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FirstAid.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      display_dialog: false,
      submitted: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
      menu6: false,
      timemodal: false,
      datemodal: false,
      reasonRules: [function (v) {
        return !!v || 'Appointment reason is required';
      }, function (v) {
        return v && v.length > 5 || 'Appointment reason must be more than 5 characters';
      }],
      dateRules: [function (v) {
        return !!v || 'Date of injury is required';
      }],
      timeRules: [function (v) {
        return !!v || 'Time of injury is required';
      }],
      dataRules: [function (v) {
        return !!v || 'Field Information is required';
      }],
      date: moment().format('Do MMMM, YYYY'),
      aid: {
        injury_date: '',
        injury_time: '',
        initial_date: '',
        initial_time: '',
        follow_up_date: '',
        follow_up_time: '',
        first_witness: '',
        second_witness: '',
        arrangement: '',
        attendant: '',
        cause: '',
        details: '',
        treatment: ''
      },
      report: null
    };
  },
  filters: {
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    },
    formatDate: function formatDate(value) {
      return moment(value).format('dddd, MMMM Do YYYY');
    }
  },
  methods: {
    goback: function goback() {
      this.$router.go(-1);
    },
    getDoctorSchedule: function getDoctorSchedule() {
      var _this = this;

      axios.get('/api/doctor_schedule').then(function (response) {
        _this.schedules = response.data.schedule;
      });
    },
    getLabSchedule: function getLabSchedule() {
      var _this2 = this;

      axios.get('/api/lab_schedule').then(function (response) {
        _this2.schedules = response.data.schedule;
      });
    },
    getDoctorTime: function getDoctorTime(id) {
      var _this3 = this;

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
          _this3.timings = response.data.timing;
        }
      });
    },
    submit: function submit() {
      var _this4 = this;

      if (this.$refs.first_aid_form.validate()) {
        axios.post('/api/first_aid_report', {
          id: this.id,
          aid: this.aid
        }).then(function (response) {
          if (response.data.success) {
            _this4.report = response.data.aid;

            _this4.$refs.first_aid_form.reset();

            _this4.$refs.first_aid_form.resetValidation();

            Swal.fire('Success', 'First Aid Record Saved', 'success');
          }
        });
      } else {
        Swal.fire('Error Input', 'Form Data Entry Incomplete', 'error');
      }
    },
    display_report: function display_report() {
      if (this.report != null) {
        this.display_dialog = true;
      } else {
        Swal.fire('No Data', 'Enter Report before submission', 'info');
      }
    }
  },
  watch: {},
  props: {
    id: [String, Number]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['Patients']), {
    patient: function patient() {
      var _this5 = this;

      return this.Patients.find(function (patient) {
        return patient.id == _this5.id;
      });
    },
    full_name: function full_name() {
      if (this.patient) {
        return this.patient.title + " " + this.patient.firstname + " " + this.patient.lastname;
      }
    },
    getImage: function getImage() {
      if (this.patient.image) {
        return '/patient/profiles/' + this.patient.image;
      } else {
        if (this.patient.gender === 'Male') {
          return "/app_asset/male_avatar.png";
        } else {
          return "/app_asset/undraw_female_avatar_l3ey.png";
        }
      }
    },
    format_injury_date: function format_injury_date() {
      if (this.report != null) {
        return moment(this.report.injury_date).format('dddd, MMMM Do YYYY');
      }
    },
    format_injury_time: function format_injury_time() {
      if (this.report != null) {
        return moment(this.report.injury_time).format('LT');
      }
    },
    format_follow_date: function format_follow_date() {
      if (this.report != null) {
        return moment(this.report.follow_up_date).format('dddd, MMMM Do YYYY');
      }
    },
    format_follow_time: function format_follow_time() {
      if (this.report != null) {
        return moment(this.report.follow_up_time).format('LT');
      }
    },
    format_initial_date: function format_initial_date() {
      if (this.report != null) {
        return moment(this.report.initial_report_date).format('dddd, MMMM Do YYYY');
      }
    },
    format_initial_time: function format_initial_time() {
      if (this.report != null) {
        return moment(this.report.initial_report_time).format('LT');
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid.vue?vue&type=template&id=4cec2052&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FirstAid.vue?vue&type=template&id=4cec2052&scoped=true& ***!
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
    [
      _c(
        "v-container",
        { attrs: { id: "top_section" } },
        [
          _c(
            "v-form",
            { ref: "first_aid_form" },
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
                      staticClass: "ml-10 headline",
                      staticStyle: { "padding-top": "63px" }
                    },
                    [_vm._v("First Aid Record Report")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "caption",
                      staticStyle: { "margin-top": "60px" },
                      attrs: {
                        color: "success darken-2",
                        depressed: "",
                        tile: ""
                      },
                      on: { click: _vm.display_report }
                    },
                    [_vm._v("Print report")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      staticStyle: { "margin-top": "60px" },
                      attrs: {
                        tile: "",
                        dark: "",
                        color: "red darken-3",
                        depressed: ""
                      },
                      on: { click: _vm.goback }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("back")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mt-5", attrs: { flat: "" } },
                [
                  _c(
                    "v-container",
                    { staticClass: "py-0", attrs: { fluid: "" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Name")
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "pt-0",
                                attrs: { value: _vm.full_name, readonly: "" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Occupation")
                              ]),
                              _vm._v(" "),
                              _vm.patient
                                ? _c("v-text-field", {
                                    staticClass: "pt-0",
                                    attrs: {
                                      value: _vm.patient.job_title,
                                      readonly: ""
                                    }
                                  })
                                : _vm._e()
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
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Date of injury or illness")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  ref: "injury_menu",
                                  attrs: {
                                    "close-on-content-click": false,
                                    "return-value": _vm.aid.injury_date,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.aid,
                                        "injury_date",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.aid,
                                        "injury_date",
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
                                                  rules: _vm.dateRules,
                                                  "prepend-icon":
                                                    "mdi-calendar",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.aid.injury_date,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.aid,
                                                      "injury_date",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "aid.injury_date"
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
                                    value: _vm.menu1,
                                    callback: function($$v) {
                                      _vm.menu1 = $$v
                                    },
                                    expression: "menu1"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-date-picker",
                                    {
                                      attrs: { "no-title": "", scrollable: "" },
                                      model: {
                                        value: _vm.aid.injury_date,
                                        callback: function($$v) {
                                          _vm.$set(_vm.aid, "injury_date", $$v)
                                        },
                                        expression: "aid.injury_date"
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
                                              _vm.menu1 = false
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
                                              return _vm.$refs.injury_menu.save(
                                                _vm.aid.injury_date
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
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Time of injury or illness")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  ref: "menu2",
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    "return-value": _vm.aid.injury_time,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "max-width": "290px",
                                    "min-width": "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.aid,
                                        "injury_time",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.aid,
                                        "injury_time",
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
                                                  rules: _vm.timeRules,
                                                  "prepend-icon": "mdi-clock",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.aid.injury_time,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.aid,
                                                      "injury_time",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "aid.injury_time"
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
                                    value: _vm.menu2,
                                    callback: function($$v) {
                                      _vm.menu2 = $$v
                                    },
                                    expression: "menu2"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _vm.menu2
                                    ? _c("v-time-picker", {
                                        attrs: { "full-width": "" },
                                        on: {
                                          "click:minute": function($event) {
                                            return _vm.$refs.menu2.save(
                                              _vm.aid.injury_time
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.aid.injury_time,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.aid,
                                              "injury_time",
                                              $$v
                                            )
                                          },
                                          expression: "aid.injury_time"
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
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Initial reporting date and time")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        "border-right":
                                          "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu3",
                                          attrs: {
                                            "close-on-content-click": false,
                                            "return-value":
                                              _vm.aid.initial_date,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "initial_date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "initial_date",
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
                                                          rules: _vm.dateRules,
                                                          "prepend-icon":
                                                            "mdi-calendar",
                                                          readonly: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.aid
                                                              .initial_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.aid,
                                                              "initial_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "aid.initial_date"
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
                                            value: _vm.menu3,
                                            callback: function($$v) {
                                              _vm.menu3 = $$v
                                            },
                                            expression: "menu3"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: {
                                                "no-title": "",
                                                scrollable: ""
                                              },
                                              model: {
                                                value: _vm.aid.initial_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.aid,
                                                    "initial_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "aid.initial_date"
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
                                                      _vm.menu3 = false
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
                                                      return _vm.$refs.menu3.save(
                                                        _vm.aid.initial_date
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
                                      staticClass: "pb-0",
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu4",
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            "return-value":
                                              _vm.aid.initial_time,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "max-width": "290px",
                                            "min-width": "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "initial_time",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "initial_time",
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
                                                          rules: _vm.timeRules,
                                                          "prepend-icon":
                                                            "mdi-clock",
                                                          readonly: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.aid
                                                              .initial_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.aid,
                                                              "initial_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "aid.initial_time"
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
                                            value: _vm.menu4,
                                            callback: function($$v) {
                                              _vm.menu4 = $$v
                                            },
                                            expression: "menu4"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm.menu4
                                            ? _c("v-time-picker", {
                                                attrs: { "full-width": "" },
                                                on: {
                                                  "click:minute": function(
                                                    $event
                                                  ) {
                                                    return _vm.$refs.menu4.save(
                                                      _vm.aid.initial_time
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value: _vm.aid.initial_time,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.aid,
                                                      "initial_time",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "aid.initial_time"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Follow-up report date and time")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        "border-right":
                                          "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu5",
                                          attrs: {
                                            "close-on-content-click": false,
                                            "return-value":
                                              _vm.aid.follow_up_date,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "follow_up_date",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "follow_up_date",
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
                                                          rules: _vm.dateRules,
                                                          "prepend-icon":
                                                            "mdi-calendar",
                                                          readonly: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.aid
                                                              .follow_up_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.aid,
                                                              "follow_up_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "aid.follow_up_date"
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
                                            value: _vm.menu5,
                                            callback: function($$v) {
                                              _vm.menu5 = $$v
                                            },
                                            expression: "menu5"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-date-picker",
                                            {
                                              attrs: {
                                                "no-title": "",
                                                scrollable: ""
                                              },
                                              model: {
                                                value: _vm.aid.follow_up_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.aid,
                                                    "follow_up_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "aid.follow_up_date"
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
                                                      _vm.menu5 = false
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
                                                      return _vm.$refs.menu5.save(
                                                        _vm.aid.follow_up_date
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
                                      staticClass: "pb-0",
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu6",
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            "return-value":
                                              _vm.aid.follow_up_time,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "max-width": "290px",
                                            "min-width": "290px"
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "follow_up_time",
                                                $event
                                              )
                                            },
                                            "update:return-value": function(
                                              $event
                                            ) {
                                              return _vm.$set(
                                                _vm.aid,
                                                "follow_up_time",
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
                                                          rules: _vm.timeRules,
                                                          "prepend-icon":
                                                            "mdi-clock",
                                                          readonly: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.aid
                                                              .follow_up_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.aid,
                                                              "follow_up_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "aid.follow_up_time"
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
                                            value: _vm.menu6,
                                            callback: function($$v) {
                                              _vm.menu6 = $$v
                                            },
                                            expression: "menu6"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm.menu6
                                            ? _c("v-time-picker", {
                                                attrs: { "full-width": "" },
                                                on: {
                                                  "click:minute": function(
                                                    $event
                                                  ) {
                                                    return _vm.$refs.menu6.save(
                                                      _vm.aid.follow_up_time
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value: _vm.aid.follow_up_time,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.aid,
                                                      "follow_up_time",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "aid.follow_up_time"
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
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "section",
                { staticClass: "mt-3" },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "h3",
                        { staticClass: "success--text darken-4 subtitle-1" },
                        [
                          _vm._v(
                            "Description of how injury, exposure or illness occurred "
                          ),
                          _c("small", [_vm._v("( What happened?)")])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          name: "input-7-4",
                          rules: _vm.dataRules
                        },
                        model: {
                          value: _vm.aid.cause,
                          callback: function($$v) {
                            _vm.$set(_vm.aid, "cause", $$v)
                          },
                          expression: "aid.cause"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "h3",
                        { staticClass: "success--text darken-4 subtitle-1" },
                        [
                          _vm._v(
                            "Description of the nature of the injury, exposure or illness occurred "
                          ),
                          _c("small", [
                            _vm._v("( What you see -- signs and symptoms?)")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          name: "input-7-4",
                          rules: _vm.dataRules
                        },
                        model: {
                          value: _vm.aid.details,
                          callback: function($$v) {
                            _vm.$set(_vm.aid, "details", $$v)
                          },
                          expression: "aid.details"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "h3",
                        { staticClass: "success--text darken-4 subtitle-1" },
                        [
                          _vm._v("Description of the treatment given "),
                          _c("small", [_vm._v("( What did you do?)")])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          name: "input-7-4",
                          rules: _vm.dataRules
                        },
                        model: {
                          value: _vm.aid.treatment,
                          callback: function($$v) {
                            _vm.$set(_vm.aid, "treatment", $$v)
                          },
                          expression: "aid.treatment"
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
                "section",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "h3",
                        { staticClass: "success--text darken-4 subtitle-1" },
                        [_vm._v("Name of witnesses")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Name of first witness")
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "pt-0",
                                attrs: { rules: _vm.dataRules },
                                model: {
                                  value: _vm.aid.first_witness,
                                  callback: function($$v) {
                                    _vm.$set(_vm.aid, "first_witness", $$v)
                                  },
                                  expression: "aid.first_witness"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Name of second witness")
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "pt-0",
                                attrs: { rules: _vm.dataRules },
                                model: {
                                  value: _vm.aid.second_witness,
                                  callback: function($$v) {
                                    _vm.$set(_vm.aid, "second_witness", $$v)
                                  },
                                  expression: "aid.second_witness"
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
              _c(
                "section",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "h3",
                        { staticClass: "success--text darken-4 subtitle-1" },
                        [
                          _vm._v("Arrangement made relating to the worker "),
                          _c("small", [
                            _vm._v(
                              "( return to work/ medical aid/ ambulance/ follow-up )"
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          name: "input-7-4",
                          rules: _vm.dataRules
                        },
                        model: {
                          value: _vm.aid.arrangement,
                          callback: function($$v) {
                            _vm.$set(_vm.aid, "arrangement", $$v)
                          },
                          expression: "aid.arrangement"
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
                "section",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              staticStyle: {
                                border: "thin solid rgba(0, 0, 0, 0.12)"
                              },
                              attrs: { cols: "12", lg: "12" }
                            },
                            [
                              _c("h3", { staticClass: "subtitle-1" }, [
                                _vm._v("Name of first aid attendant")
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "pt-0",
                                attrs: { rules: _vm.dataRules },
                                model: {
                                  value: _vm.aid.attendant,
                                  callback: function($$v) {
                                    _vm.$set(_vm.aid, "attendant", $$v)
                                  },
                                  expression: "aid.attendant"
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
                            {
                              attrs: {
                                cols: "12",
                                justify: "center",
                                align: "center"
                              }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticStyle: { "margin-top": "60px" },
                                  attrs: {
                                    color: "success darken-2",
                                    disabled: _vm.submitted,
                                    depressed: "",
                                    tile: ""
                                  },
                                  on: { click: _vm.submit }
                                },
                                [_vm._v("Submit")]
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
            value: _vm.display_dialog,
            callback: function($$v) {
              _vm.display_dialog = $$v
            },
            expression: "display_dialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { id: "report" } },
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.display_dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-title",
                    {
                      staticClass:
                        "subtitle-1 font-weight-bold grey--text darken-5"
                    },
                    [_vm._v("First Aid Form")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                { attrs: { id: "top_section" } },
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
                          staticClass: "ml-10 headline",
                          staticStyle: { "padding-top": "63px" }
                        },
                        [_vm._v("First Aid Record Report")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-5",
                          staticStyle: { "margin-top": "60px" },
                          attrs: {
                            color: "success darken-2",
                            tile: "",
                            depressed: ""
                          },
                          on: { click: _vm.print }
                        },
                        [_vm._v("Print")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "mt-5", attrs: { flat: "" } },
                    [
                      _c(
                        "v-container",
                        { staticClass: "py-0", attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pb-0",
                                  staticStyle: {
                                    border: "thin solid rgba(0, 0, 0, 0.12)"
                                  },
                                  attrs: { cols: "12", lg: "6" }
                                },
                                [
                                  _c("h3", { staticClass: "subtitle-1" }, [
                                    _vm._v("Name")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    staticClass: "pt-0",
                                    attrs: {
                                      value: _vm.full_name,
                                      readonly: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pb-0",
                                  staticStyle: {
                                    border: "thin solid rgba(0, 0, 0, 0.12)"
                                  },
                                  attrs: { cols: "12", lg: "6" }
                                },
                                [
                                  _c("h3", { staticClass: "subtitle-1" }, [
                                    _vm._v("Occupation")
                                  ]),
                                  _vm._v(" "),
                                  _vm.patient
                                    ? _c("v-text-field", {
                                        staticClass: "pt-0",
                                        attrs: {
                                          value: _vm.patient.job_title,
                                          readonly: ""
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.report != null
                            ? _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Date of injury or illness")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          "prepend-icon": "mdi-calendar",
                                          readonly: "",
                                          value: _vm.format_injury_date
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Time of injury or illness")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          "prepend-icon": "mdi-clock",
                                          readonly: "",
                                          value: _vm.format_injury_time
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
                          _vm.report != null
                            ? _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v(
                                          "Initial reporting date and time"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "pb-0",
                                              staticStyle: {
                                                "border-right":
                                                  "thin solid rgba(0, 0, 0, 0.12)"
                                              },
                                              attrs: { cols: "12", lg: "6" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  "prepend-icon":
                                                    "mdi-calendar",
                                                  readonly: "",
                                                  value: _vm.format_initial_date
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "pb-0",
                                              attrs: { cols: "12", lg: "6" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  "prepend-icon": "mdi-clock",
                                                  readonly: "",
                                                  value: _vm.format_initial_time
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
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Follow-up report date and time")
                                      ]),
                                      _vm._v(" "),
                                      _vm.report != null
                                        ? _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "pb-0",
                                                  staticStyle: {
                                                    "border-right":
                                                      "thin solid rgba(0, 0, 0, 0.12)"
                                                  },
                                                  attrs: { cols: "12", lg: "6" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "prepend-icon":
                                                        "mdi-calendar",
                                                      readonly: "",
                                                      value:
                                                        _vm.format_follow_date
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "pb-0",
                                                  attrs: { cols: "12", lg: "6" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "prepend-icon":
                                                        "mdi-clock",
                                                      readonly: "",
                                                      value:
                                                        _vm.format_follow_time
                                                    }
                                                  })
                                                ],
                                                1
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
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.report != null
                    ? _c(
                        "section",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "success--text darken-4 subtitle-1"
                                },
                                [
                                  _vm._v(
                                    "Description of how injury, exposure or illness occurred "
                                  ),
                                  _c("small", [_vm._v("( What happened?)")])
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  name: "input-7-4",
                                  readonly: "",
                                  value: _vm.report.cause
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "success--text darken-4 subtitle-1"
                                },
                                [
                                  _vm._v(
                                    "Description of the nature of the injury, exposure or illness occurred "
                                  ),
                                  _c("small", [
                                    _vm._v(
                                      "( What you see -- signs and symptoms?)"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  name: "input-7-4",
                                  readonly: "",
                                  value: _vm.report.details
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "success--text darken-4 subtitle-1"
                                },
                                [
                                  _vm._v("Description of the treatment given "),
                                  _c("small", [_vm._v("( What did you do?)")])
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  name: "input-7-4",
                                  readonly: "",
                                  value: _vm.report.treatment
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
                  _vm.report != null
                    ? _c(
                        "section",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "success--text darken-4 subtitle-1"
                                },
                                [_vm._v("Name of witnesses")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Name of first witness")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        staticClass: "pt-0",
                                        attrs: {
                                          readonly: "",
                                          value: _vm.report.first_witness
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Name of second witness")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        staticClass: "pt-0",
                                        attrs: {
                                          readonly: "",
                                          value: _vm.report.second_witness
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
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.report != null
                    ? _c(
                        "section",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "success--text darken-4 subtitle-1"
                                },
                                [
                                  _vm._v(
                                    "Arrangement made relating to the worker "
                                  ),
                                  _c("small", [
                                    _vm._v(
                                      "( return to work/ medical aid/ ambulance/ follow-up )"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  name: "input-7-4",
                                  readonly: "",
                                  value: _vm.report.arrangement
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
                  _vm.report != null
                    ? _c(
                        "section",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Name of first aid attendant")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        staticClass: "pt-0",
                                        attrs: {
                                          readonly: "",
                                          value: _vm.report.attendant
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "6" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v(
                                          "First aid attendant's signature"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        staticClass: "pt-0"
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
                                    {
                                      staticClass: "pb-0",
                                      staticStyle: {
                                        border: "thin solid rgba(0, 0, 0, 0.12)"
                                      },
                                      attrs: { cols: "12", lg: "12" }
                                    },
                                    [
                                      _c("h3", { staticClass: "subtitle-1" }, [
                                        _vm._v("Patient's signature")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        staticClass: "pt-0"
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

/***/ "./resources/js/components/FirstAid.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/FirstAid.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FirstAid_vue_vue_type_template_id_4cec2052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FirstAid.vue?vue&type=template&id=4cec2052&scoped=true& */ "./resources/js/components/FirstAid.vue?vue&type=template&id=4cec2052&scoped=true&");
/* harmony import */ var _FirstAid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FirstAid.vue?vue&type=script&lang=js& */ "./resources/js/components/FirstAid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FirstAid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FirstAid_vue_vue_type_template_id_4cec2052_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FirstAid_vue_vue_type_template_id_4cec2052_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cec2052",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FirstAid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FirstAid.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FirstAid.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstAid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FirstAid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstAid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FirstAid.vue?vue&type=template&id=4cec2052&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/FirstAid.vue?vue&type=template&id=4cec2052&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstAid_vue_vue_type_template_id_4cec2052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FirstAid.vue?vue&type=template&id=4cec2052&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid.vue?vue&type=template&id=4cec2052&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstAid_vue_vue_type_template_id_4cec2052_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstAid_vue_vue_type_template_id_4cec2052_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);