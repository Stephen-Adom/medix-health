(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firstaid"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FirstAid/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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


var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      date: moment().format('Do MMMM, YYYY'),
      display_dialog: false,
      patients: [],
      search: '',
      loadingData: false,
      headers: [{
        text: 'Patient Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Date of Problem',
        value: 'injury_date'
      }, {
        text: 'Time of Problem',
        value: 'injury_time'
      }, {
        text: 'Report Date',
        value: 'initial_report_date'
      }, {
        text: 'Report Time',
        value: 'initial_report_time'
      }, {
        text: 'Attendant',
        value: 'attendant'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      report: null,
      print_func: null
    };
  },
  watch: {
    allAids: function allAids() {
      if (this.allAids.length) {
        this.patients = this.allAids;
        this.loadingData = false;
      } else {
        this.loadingData = false;
      }
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment(value).format('LT');
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allAids']), {
    getDate: function getDate() {
      if (this.report !== null) {
        return moment(this.report.injury_date).format('MMM Do, YYYY');
      }
    },
    getTime: function getTime() {
      if (this.report !== null) {
        return moment(this.report.injury_time).format('LT');
      }
    },
    full_name: function full_name() {
      if (this.report !== null) {
        return this.report.patient.title + " " + this.report.patient.firstname + " " + this.report.patient.lastname;
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
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchAids']), {
    view_report: function view_report(item) {
      this.report = item;

      if (this.report != null) {
        this.display_dialog = true;
      }
    },
    getImage: function getImage() {
      if (this.report !== null) {
        if (this.report.patient.gender === "Male") {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    },
    delete_application: function delete_application(item) {
      var _this = this;

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The Report will be deleted",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var index = _this.patients.indexOf(item);

          _this.patients.splice(index, 1);

          axios.post('/api/delete_aid', {
            id: item.id
          }).then(function (response) {
            if (response.data.success) {
              swalWithBootstrapButtons.fire('Deleted!', 'Your Message(s) have been deleted.', 'success');
            }

            if (response.data.error) {
              swalWithBootstrapButtons.fire('Error', 'An error has occured', 'error');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', 'The Application process cancelled :)', 'info');
        }
      });
    },
    print: function print() {
      window.print();
    }
  }),
  mounted: function mounted() {
    this.fetchAids();
    this.loadingData = true;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid/index.vue?vue&type=template&id=4142f91a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FirstAid/index.vue?vue&type=template&id=4142f91a& ***!
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
          _c("v-card-title", [
            _c(
              "span",
              { staticClass: "subtitle-1 font-weight-bold text-uppercase" },
              [_vm._v("First Aid Information")]
            )
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-data-table", {
                ref: "firstAidData",
                staticClass: "elevation-0",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.patients,
                  "sort-by": "full_name",
                  search: _vm.search,
                  loading: _vm.loadingData,
                  "loading-text": "Loading... Please wait"
                },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c(
                          "v-toolbar",
                          { attrs: { flat: "", color: "white" } },
                          [
                            _c(
                              "v-toolbar-title",
                              {
                                staticClass:
                                  "subtitle-2 font-weight-bold text-uppercase"
                              },
                              [_vm._v("Patients")]
                            ),
                            _vm._v(" "),
                            _c("v-divider", {
                              staticClass: "mx-4",
                              attrs: { inset: "", vertical: "" }
                            }),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c("v-text-field", {
                              staticClass: "mx-4 mt-2",
                              attrs: {
                                color: "success",
                                label: "Who are you looking for?",
                                "append-icon": "mdi-magnify"
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
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "item.name",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            _vm._s(item.patient.title) +
                              " " +
                              _vm._s(item.patient.firstname) +
                              " " +
                              _vm._s(item.patient.lastname)
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
                          _vm._v(_vm._s(_vm._f("formatTime")(item.injury_time)))
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.injury_date",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(_vm._s(_vm._f("formatDate")(item.injury_date)))
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.initial_report_date",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatDate")(item.initial_report_date)
                            )
                          )
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.initial_report_time",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatTime")(item.initial_report_time)
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
                            attrs: { icon: "", color: "info darken-1" },
                            on: {
                              click: function($event) {
                                return _vm.view_report(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-flash-circle")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "red darken-3" },
                            on: {
                              click: function($event) {
                                return _vm.delete_application(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-delete")])],
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
                                  _vm.report
                                    ? _c("v-text-field", {
                                        staticClass: "pt-0",
                                        attrs: {
                                          value: _vm.report.patient.job_title,
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

/***/ "./resources/js/components/FirstAid/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/FirstAid/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4142f91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4142f91a& */ "./resources/js/components/FirstAid/index.vue?vue&type=template&id=4142f91a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/FirstAid/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4142f91a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4142f91a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FirstAid/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FirstAid/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FirstAid/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FirstAid/index.vue?vue&type=template&id=4142f91a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FirstAid/index.vue?vue&type=template&id=4142f91a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4142f91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4142f91a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FirstAid/index.vue?vue&type=template&id=4142f91a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4142f91a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4142f91a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);