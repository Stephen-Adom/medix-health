(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["excuse_duty"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExcuseDuty/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      getYear: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'),
      display_dialog: false,
      excuse_duty_search: "",
      excuse_history_dialog: false,
      items: [],
      search_patient: '',
      comment: '',
      recommendation: '',
      headers: [{
        text: 'Patient Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Job Title',
        value: 'job_title'
      }, {
        text: 'Reason',
        value: 'reason'
      }, {
        text: 'Start Date',
        value: 'start_date'
      }, {
        text: 'End Date',
        value: 'end_date'
      }, {
        text: 'Processed By',
        value: 'approved_by'
      }, {
        text: 'Status',
        value: 'recommendation'
      }, {
        text: 'Action',
        value: 'actions'
      }],
      patients: [],
      display_data: null,
      colors: ['red darken-2', 'success darken-2', 'warning darken-1', 'primary']
    };
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('MMMM Do YYYY');
    },
    formatTime: function formatTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('LT');
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allExcuses', 'ExcusesLength', 'allPrevious']), {
    filteredPatients: function filteredPatients() {
      var _this = this;

      return this.items.filter(function (data) {
        return data.firstname.toLowerCase().match(_this.search_patient.toLowerCase()) || data.lastname.toLowerCase().match(_this.search_patient.toLowerCase());
      });
    },
    formatApprovedDate: function formatApprovedDate() {
      if (this.display_data.approved_date) {
        return moment__WEBPACK_IMPORTED_MODULE_2___default()(this.display_data.approved_date).format('MMMM Do YYYY');
      }
    },
    formatStartDate: function formatStartDate() {
      if (this.display_data.start_date) {
        return moment__WEBPACK_IMPORTED_MODULE_2___default()(this.display_data.start_date).format('MMMM Do YYYY');
      }
    },
    formatEndDate: function formatEndDate() {
      if (this.display_data.end_date) {
        return moment__WEBPACK_IMPORTED_MODULE_2___default()(this.display_data.end_date).format('MMMM Do YYYY');
      }
    },
    getDaysLeft: function getDaysLeft() {
      if (this.display_data.start_date && this.display_data.end_date) {
        var a = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.display_data.start_date);
        var b = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.display_data.end_date);
        var result = b.diff(a, 'days') + " " + "days"; // 1

        return result;
      }
    }
  }),
  watch: {
    allPrevious: function allPrevious() {
      if (this.allPrevious) {
        this.patients = this.allPrevious;
      }
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatients', 'fetchExcuses', 'fetchPrevious']), {
    print_form: function print_form() {
      window.print();
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    patients_dashboard: function patients_dashboard() {
      this.$router.push({
        name: 'patients'
      });
    },
    applyNow: function applyNow() {
      this.$router.push({
        name: 'excuse_duty_form'
      });
    },
    getInitials: function getInitials(data) {
      var first = data.firstname.slice(0, 1).toUpperCase();
      var last = data.lastname.slice(0, 1).toUpperCase();
      var ini = first + '' + last;
      return ini;
    },
    getRandomColor: function getRandomColor(data) {
      return this.colors[Math.floor(Math.random(0, 1) * this.colors.length)];
    },
    goToLink: function goToLink(item) {
      this.$router.push({
        name: 'excuse_duty_form',
        params: {
          id: item.id
        }
      });
    },
    view_applicants: function view_applicants() {
      this.$router.push({
        name: 'excuse_duty_applicants'
      });
    },
    display: function display(item) {
      this.display_data = this.allPrevious.find(function (data) {
        return data.id === item.id;
      });

      if (this.display_data) {
        this.comment = this.display_data.additional_comment;
        this.recommendation = this.display_data.recommendation;
        this.display_dialog = true;
      }
    },
    processed_recommendation: function processed_recommendation(item) {
      if (item.recommendation === 0) {
        return 'Disapproved';
      } else {
        return 'Approved';
      }
    },
    remove: function remove(item) {
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "This Application will be deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.post('/api/delete_excuseduty_application', {
            id: item.id
          }).then(function (response) {
            if (response.data.success) {
              swalWithBootstrapButtons.fire('Deleted!', 'The Application have been deleted.', 'success');
            }
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', 'The Application is safe', 'info');
        }
      });
    },
    print: function print() {}
  }),
  created: function created() {
    this.fetchExcuses();
    this.fetchPrevious();
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$refs.topProgress.start(); // Use setTimeout for demo

    setTimeout(function () {
      _this2.$refs.topProgress.done();
    }, 2000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/index.vue?vue&type=template&id=3cad9f9b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExcuseDuty/index.vue?vue&type=template&id=3cad9f9b&scoped=true& ***!
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
        { attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-btn",
                {
                  staticClass: "success darken-3 px-6",
                  attrs: { dark: "", depressed: "", tile: "" },
                  on: { click: _vm.patients_dashboard }
                },
                [_c("span", { staticClass: "caption" }, [_vm._v("Apply Now")])]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "red darken-3 px-6",
                  attrs: { dark: "", depressed: "", tile: "" },
                  on: { click: _vm.goback }
                },
                [_c("span", { staticClass: "caption" }, [_vm._v("Back")])]
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
                              src: "/app_asset/undraw_upload_87y9.svg",
                              width: "80%"
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
                      staticClass:
                        "d-flex flex-column align-center justify-center",
                      attrs: { cols: "12", md: "5" }
                    },
                    [
                      _c(
                        "h2",
                        {
                          staticClass: "display-1 font-weight-bold black--text"
                        },
                        [
                          _vm._v("Welcome to "),
                          _c(
                            "span",
                            { staticClass: "success--text darken-10" },
                            [_vm._v("Excuse Duty")]
                          ),
                          _vm._v(" Application Dashboard")
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "my-2",
                        attrs: {
                          inset: "",
                          color: "success darken-5",
                          width: "100%",
                          height: "15px"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-7" },
                        [
                          _vm.$gate.isManager()
                            ? _c(
                                "v-badge",
                                {
                                  attrs: {
                                    bordered: "",
                                    color: "info darken-1",
                                    content: _vm.ExcusesLength,
                                    value: _vm.ExcusesLength,
                                    overlap: "",
                                    left: ""
                                  }
                                },
                                [
                                  _vm.$gate.isManager()
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass: "success ma-2 px-5",
                                          attrs: {
                                            rounded: "",
                                            elevation: "15",
                                            dark: ""
                                          },
                                          on: { click: _vm.view_applicants }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("view applicants")]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "info ma-2 px-5",
                              attrs: { rounded: "", elevation: "15", dark: "" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  _vm.excuse_history_dialog = true
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("Application History")
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
          _c("v-divider"),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "text-right" }, [
            _c(
              "span",
              { staticClass: "subtitle-2 font-weight-bold grey--text" },
              [_vm._v(_vm._s(_vm.getYear) + " © Medix Digital Application")]
            )
          ])
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
            value: _vm.excuse_history_dialog,
            callback: function($$v) {
              _vm.excuse_history_dialog = $$v
            },
            expression: "excuse_history_dialog"
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
                          _vm.excuse_history_dialog = false
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
                      staticClass: "subtitle-2 font-weight-bold text-uppercase"
                    },
                    [_vm._v("Excuse Duty Forms")]
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
                              _vm.excuse_history_dialog = false
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
                { staticClass: "mb-0 pa-0" },
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
                            [_vm._v("Excuse Forms List")]
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
                    "v-card-title",
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "subtitle-2 font-weight-bold grey--text darken-8"
                        },
                        [_vm._v("All List")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          "append-icon": "mdi-magnify",
                          label: "Search",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.excuse_duty_search,
                          callback: function($$v) {
                            _vm.excuse_duty_search = $$v
                          },
                          expression: "excuse_duty_search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.patients,
                      search: _vm.excuse_duty_search
                    },
                    scopedSlots: _vm._u([
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
                        key: "item.department",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(item.patient.department))
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.job_title",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [_vm._v(_vm._s(item.patient.job_title))])
                          ]
                        }
                      },
                      {
                        key: "item.start_date",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.start_date))
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.end_date",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.end_date))
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.recommendation",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(_vm.processed_recommendation(item)))
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
                                    return _vm.display(item)
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
                                attrs: { icon: "", color: "red darken-2" },
                                on: {
                                  click: function($event) {
                                    return _vm.remove(item)
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
          _c("html", { attrs: { id: "print_body_form" } }, [
            _c(
              "body",
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-toolbar",
                      {
                        staticClass: "print_preview_toolbar",
                        attrs: { flat: "" }
                      },
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
                          [_vm._v("Excuse Duty Form")]
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
                                attrs: { icon: "", color: "success darken-2" },
                                on: { click: _vm.print_form }
                              },
                              [_c("v-icon", [_vm._v("mdi-printer")])],
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
                        staticClass: "mx-auto pa-3",
                        staticStyle: { width: "80%" },
                        attrs: { outlined: "" }
                      },
                      [
                        _vm.display_data
                          ? _c(
                              "v-card-text",
                              { staticClass: "pa-2 px-8" },
                              [
                                _c(
                                  "v-row",
                                  {
                                    staticClass: "flex-column",
                                    attrs: { align: "center" }
                                  },
                                  [
                                    _c("v-img", {
                                      attrs: {
                                        src: "/app_asset/medix_full.png",
                                        width: "200"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "h6",
                                      {
                                        staticClass:
                                          "subtitle-2 mt-2 text-uppercase font-weight-bold"
                                      },
                                      [_vm._v("Staff Excuse Duty Form")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  { staticClass: "mt-3", attrs: { flat: "" } },
                                  [
                                    _c(
                                      "v-card-title",
                                      {
                                        staticClass:
                                          "subtitle-1 font-weight-bold success--text darken-2"
                                      },
                                      [_vm._v("Staff Information")]
                                    ),
                                    _vm._v(" "),
                                    _vm.display_data
                                      ? _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        value:
                                                          _vm.display_data
                                                            .patient.firstname,
                                                        label:
                                                          "Staff First Name",
                                                        outlined: "",
                                                        rounded: "",
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
                                                    attrs: {
                                                      cols: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        value:
                                                          _vm.display_data
                                                            .patient.lastname,
                                                        label:
                                                          "Staff Last Name",
                                                        outlined: "",
                                                        rounded: "",
                                                        readonly: ""
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
                                                      cols: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        value:
                                                          _vm.display_data
                                                            .patient.phone,
                                                        label:
                                                          "Patient's Contact",
                                                        outlined: "",
                                                        rounded: "",
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
                                                    attrs: {
                                                      cols: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        value:
                                                          _vm.display_data
                                                            .patient.email,
                                                        label:
                                                          "Patient's Email",
                                                        outlined: "",
                                                        rounded: "",
                                                        readonly: ""
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
                                                      cols: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        value:
                                                          _vm.display_data
                                                            .patient.gender,
                                                        label: "Gender",
                                                        outlined: "",
                                                        rounded: "",
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
                                                    attrs: {
                                                      cols: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        value:
                                                          _vm.display_data
                                                            .patient.job_title,
                                                        label:
                                                          "Staff Job Title",
                                                        outlined: "",
                                                        rounded: "",
                                                        readonly: ""
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
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-divider", { attrs: { inset: "" } }),
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    _c(
                                      "v-card-title",
                                      {
                                        staticClass:
                                          "subtitle-1 font-weight-bold success--text darken-2"
                                      },
                                      [_vm._v("Staff Occupational Information")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "no-gutters" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pl-5",
                                                attrs: { cols: "5", lg: "5" }
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  { staticClass: "pt-4" },
                                                  [
                                                    _vm._v(
                                                      "Department / Unit :"
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "7", lg: "7" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    outlined: "",
                                                    rounded: "",
                                                    readonly: "",
                                                    value:
                                                      _vm.display_data.patient
                                                        .department
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
                                          { staticClass: "no-gutters" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pl-5",
                                                attrs: { cols: "5", lg: "5" }
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  { staticClass: "pt-1" },
                                                  [
                                                    _vm._v(
                                                      "Have you already taken your annual leave?"
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "7", lg: "7" } },
                                              [
                                                _c(
                                                  "v-radio-group",
                                                  {
                                                    staticClass: "mt-0 pl-3",
                                                    attrs: {
                                                      row: "",
                                                      readonly: "",
                                                      value:
                                                        _vm.display_data
                                                          .annual_leave
                                                    }
                                                  },
                                                  [
                                                    _c("v-radio", {
                                                      attrs: {
                                                        label:
                                                          "Have taken part",
                                                        value: "Part",
                                                        color:
                                                          "success darken-2"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-radio", {
                                                      attrs: {
                                                        label: "Have taken all",
                                                        value: "Full",
                                                        color:
                                                          "success darken-2"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-radio", {
                                                      attrs: {
                                                        label:
                                                          "Have not taken any",
                                                        value: "None",
                                                        color:
                                                          "success darken-2"
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
                                _c("v-divider", { attrs: { inset: "" } }),
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    _c(
                                      "v-card-title",
                                      {
                                        staticClass:
                                          "subtitle-1 font-weight-bold success--text darken-2"
                                      },
                                      [_vm._v("Patient Request Information")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "no-gutters" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pl-5 pt-3",
                                                attrs: { cols: "3", lg: "3" }
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  { staticClass: "pt-1" },
                                                  [_vm._v("Reason of Request")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "9", lg: "9" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    placeholder:
                                                      "Type here....",
                                                    readonly: "",
                                                    outlined: "",
                                                    rounded: "",
                                                    label: "Reason",
                                                    value:
                                                      _vm.display_data.reason
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
                                              { attrs: { cols: "4", lg: "4" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Start Date",
                                                    readonly: "",
                                                    outlined: "",
                                                    rounded: "",
                                                    value: _vm.formatStartDate
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "4", lg: "4" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "End Date",
                                                    readonly: "",
                                                    outlined: "",
                                                    rounded: "",
                                                    value: _vm.formatEndDate
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "4", lg: "4" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Number of Days",
                                                    outlined: "",
                                                    rounded: "",
                                                    value: _vm.getDaysLeft,
                                                    readonly: ""
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
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    _c(
                                      "v-card-title",
                                      {
                                        staticClass:
                                          "subtitle-1 font-weight-bold success--text darken-2"
                                      },
                                      [
                                        _vm._v(
                                          "Recommendation by Clinic Manager"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-text",
                                      [
                                        _c("v-textarea", {
                                          attrs: {
                                            label: "Comments",
                                            outlined: "",
                                            placeholder:
                                              "Include comments here....",
                                            readonly: ""
                                          },
                                          model: {
                                            value: _vm.comment,
                                            callback: function($$v) {
                                              _vm.comment = $$v
                                            },
                                            expression: "comment"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Manager's Full Name",
                                                    outlined: "",
                                                    rounded: "",
                                                    readonly: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.display_data
                                                        .approved_by,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.display_data,
                                                        "approved_by",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "display_data.approved_by"
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
                                              { attrs: { cols: "6", lg: "6" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Date",
                                                    placeholder:
                                                      "26th, January 2030",
                                                    outlined: "",
                                                    rounded: "",
                                                    value:
                                                      _vm.formatApprovedDate,
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
                                                attrs: {
                                                  cols: "6",
                                                  lg: "6",
                                                  align: "center"
                                                }
                                              },
                                              [
                                                _vm.display_data
                                                  .recommendation === 1
                                                  ? _c(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "mt-5 font-weight-bold"
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              size: "20",
                                                              color:
                                                                "success darken-3"
                                                            }
                                                          },
                                                          [_vm._v("mdi-check")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "success--text darken-3 subtitle-2"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Application Approved by the Hospital"
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.display_data
                                                  .recommendation === 0
                                                  ? _c(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "mt-5 font-weight-bold"
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              size: "20",
                                                              color:
                                                                "red darken-3"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-alert-rhombus"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "red--text darken-3 subtitle-2"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Application Disapproved by the Hospital"
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "6", md: "6" } },
                                              [
                                                _c("v-textarea", {
                                                  attrs: {
                                                    label:
                                                      "Supervisor Signature",
                                                    readonly: "",
                                                    height: "50"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "6", md: "6" } },
                                              [
                                                _c("v-textarea", {
                                                  attrs: {
                                                    label: "Date",
                                                    readonly: "",
                                                    height: "50"
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
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ExcuseDuty/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3cad9f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3cad9f9b&scoped=true& */ "./resources/js/components/ExcuseDuty/index.vue?vue&type=template&id=3cad9f9b&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/ExcuseDuty/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3cad9f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3cad9f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cad9f9b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExcuseDuty/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExcuseDuty/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExcuseDuty/index.vue?vue&type=template&id=3cad9f9b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ExcuseDuty/index.vue?vue&type=template&id=3cad9f9b&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3cad9f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3cad9f9b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExcuseDuty/index.vue?vue&type=template&id=3cad9f9b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3cad9f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3cad9f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);