(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/result/steroid-hormone.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/result/steroid-hormone.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Thyroid",
  data: function data() {
    return {
      current_date: moment().format('MMMM Do, YYYY'),
      lab_form_dialog: false,
      search: "",
      loadingData: false,
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
        text: 'DOB',
        value: 'dob'
      }, {
        text: 'Examined By',
        value: 'examined'
      }, {
        text: 'Date of Examination',
        value: 'created_at'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        align: 'center'
      }],
      form: {
        patient_name: '',
        age: '',
        sex: '',
        dob: '',
        ordering_dr: '',
        status: '',
        physician_copy: '',
        spec: '',
        collection_date: '',
        collection_time: '',
        specimen: '',
        received_date: '',
        received_time: '',
        report_time: '',
        report_date: '',
        examined_by: '',
        cortisol: '',
        dea: '',
        estrogen: '',
        melatonin: '',
        progesterone: '',
        testosterone: ''
      }
    };
  },
  watch: {
    allSteroidHormones: function allSteroidHormones() {
      if (this.allSteroidHormones.length) {
        this.loadingData = false;
      } else {
        this.loadingData = false;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allSteroidHormones'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchSteroidHormone']), {
    print_form_report: function print_form_report() {
      window.print();
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getImage: function getImage(item) {
      if (item.patient.image) {
        return '/patients/profiles/' + item.patient.image;
      } else {
        if (item.patient.gender === 'Male') {
          return '/app_asset/male_avatar.png';
        } else {
          return '/app_asset/undraw_female_avatar_l3ey.png';
        }
      }
    },
    print_form: function print_form(item) {
      console.log(item);
      this.form.patient_name = item.patient.title + ' ' + item.patient.firstname + ' ' + item.patient.lastname;
      this.form.age = item.patient.age;
      this.form.sex = item.patient.gender;
      this.form.dob = moment(item.patient.dob).format('MMMM Do, YYYY dddd');
      this.form.ordering_dr = item.saliva.ordering_dr;
      this.form.status = item.saliva.status;
      this.form.physician_copy = item.saliva.physician_copy;
      this.form.spec = item.saliva.spec;
      this.form.collection_date = moment(item.saliva.collection_date).format('MMMM Do, YYYY');
      this.form.collection_time = moment(item.saliva.collection_time).format('LT');
      this.form.specimen = item.saliva.specimen;
      this.form.received_date = moment(item.saliva.received_date).format('MMMM Do, YYYY');
      this.form.received_time = moment(item.saliva.received_time).format('LT');
      this.form.report_time = moment().format('LT');
      this.form.report_date = moment().format('MMMM Do, YYYY');
      this.form.examined_by = item.user.title + ' ' + item.user.firstname + ' ' + item.user.lastname;
      this.form.dea = item.dea;
      this.form.cortisol = item.cortisol;
      this.form.testosterone = item.testosterone;
      this.form.progesterone = item.progesterone;
      this.form.melatonin = item.melatonin;
      this.form.estrogen = item.estrogen;
      this.lab_form_dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          var index = _this.allSalivaInfections.indexOf(item);

          _this.allSalivaInfections.splice(index, 1);

          Swal.fire('Deleted!', 'The Role has been deleted.', 'success');
        }
      });
    }
  }),
  created: function created() {
    this.fetchSteroidHormone();
  },
  filters: {
    formatDob: function formatDob(value) {
      return moment(value).format('MMMM Do, YYYY');
    },
    formatDate: function formatDate(value) {
      return moment(value).format('YYYY-MMMM-DD HH:mm');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/result/steroid-hormone.vue?vue&type=template&id=84043aa8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/result/steroid-hormone.vue?vue&type=template&id=84043aa8& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-container",
        { staticClass: "mt-5 ma-3" },
        [
          _vm.allSteroidHormones
            ? _c(
                "v-card",
                { staticClass: "pa-4", attrs: { outlined: "" } },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      search: _vm.search,
                      items: _vm.allSteroidHormones,
                      loading: _vm.loadingData,
                      "loading-text": "Loading... Please wait"
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "top",
                          fn: function() {
                            return [
                              _c(
                                "v-toolbar",
                                { attrs: { flat: "", color: "white" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v(" Steroid Hormone Analysis")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider", {
                                    staticClass: "mx-4",
                                    attrs: { inset: "", vertical: "" }
                                  }),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "success darken-2 px-7",
                                      attrs: {
                                        rounded: "",
                                        elevation: "15",
                                        dark: ""
                                      },
                                      on: { click: _vm.goback }
                                    },
                                    [
                                      _c("span", { staticClass: "caption" }, [
                                        _vm._v("back")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { attrs: { right: "", size: "20" } },
                                        [_vm._v("mdi-chevron-double-left")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mx-4",
                                attrs: {
                                  color: "success",
                                  label: "Search...",
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
                            ]
                          },
                          proxy: true
                        },
                        {
                          key: "item.image",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-avatar",
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.getImage(item) }
                                  })
                                ],
                                1
                              )
                            ]
                          }
                        },
                        {
                          key: "item.firstname",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm.allSteroidHormones
                                ? _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(item.patient.firstname) +
                                          " " +
                                          _vm._s(item.patient.lastname)
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "item.gender",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm.allSteroidHormones
                                ? _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [_vm._v(_vm._s(item.patient.gender))]
                                  )
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "item.dob",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm.allSteroidHormones
                                ? _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatDob")(item.patient.dob)
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "item.examined",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm.allSteroidHormones
                                ? _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(item.user.title) +
                                          " " +
                                          _vm._s(item.user.lastname) +
                                          ", " +
                                          _vm._s(item.user.firstname)
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "item.created_at",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm.allSteroidHormones
                                ? _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formatDate")(item.created_at)
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
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
                                                  staticClass: "mx-1",
                                                  attrs: {
                                                    icon: "",
                                                    color: "info darken-2",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.print_form(
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
                                                  { attrs: { size: "25" } },
                                                  [_vm._v("mdi-receipt")]
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
                                    _vm._v("print preview")
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
                                                  staticClass: "mx-1",
                                                  attrs: {
                                                    icon: "",
                                                    color: "red darken-3",
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deleteItem(
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
                                                  { attrs: { size: "25" } },
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
                                    _vm._v("delete report")
                                  ])
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      1210088048
                    )
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
              model: {
                value: _vm.lab_form_dialog,
                callback: function($$v) {
                  _vm.lab_form_dialog = $$v
                },
                expression: "lab_form_dialog"
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
                            attrs: {
                              dark: "",
                              color: "info darken-2",
                              flat: ""
                            }
                          },
                          [
                            _c(
                              "v-toolbar-title",
                              {
                                staticClass:
                                  "subtitle-2 font-weight-bold text-uppercase"
                              },
                              [_vm._v("Lab Test Print Form")]
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
                                        _vm.lab_form_dialog = false
                                      }
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "caption" }, [
                                      _vm._v("Close")
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
                        _c(
                          "v-card-text",
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
                                                staticClass:
                                                  "d-flex flex-column",
                                                attrs: { cols: "4" }
                                              },
                                              [
                                                _c(
                                                  "v-responsive",
                                                  [
                                                    _c("v-img", {
                                                      staticClass: "mx-auto",
                                                      attrs: {
                                                        src:
                                                          "/images/medix_full.png",
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
                                                  [
                                                    _vm._v(
                                                      "Medix Digital Application"
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass:
                                                  "mt-10 text-center",
                                                attrs: { cols: "6" }
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  {
                                                    staticClass:
                                                      "title font-weight-thin text-uppercase title--text"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Medix Saliva Analysis Report"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "h5",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-uppercase"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Steroid Hormone Analysis"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 text-uppercase font-weight-light"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.current_date)
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "mt-8",
                                                attrs: { cols: "2" }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass:
                                                      "px-5 success darken-2 print_preview_toolbar",
                                                    attrs: {
                                                      tile: "",
                                                      large: "",
                                                      depressed: ""
                                                    },
                                                    on: {
                                                      click:
                                                        _vm.print_form_report
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "caption font-weight-bold"
                                                      },
                                                      [_vm._v("Print Report")]
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
                                              {
                                                staticClass:
                                                  "success darken-2 subtitle-2"
                                              },
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
                                              [
                                                _c(
                                                  "v-row",
                                                  [
                                                    _c(
                                                      "v-col",
                                                      { attrs: { cols: "4" } },
                                                      [
                                                        _c("v-text-field", {
                                                          staticClass:
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Patient Name"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .patient_name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "patient_name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.patient_name"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "Age"
                                                          },
                                                          model: {
                                                            value: _vm.form.age,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "age",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.age"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "Sex"
                                                          },
                                                          model: {
                                                            value: _vm.form.sex,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "sex",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.sex"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "DOB"
                                                          },
                                                          model: {
                                                            value: _vm.form.dob,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "dob",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.dob"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Ordering Dr."
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .ordering_dr,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "ordering_dr",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.ordering_dr"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "Status"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.status,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "status",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.status"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Physician Copy for"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .physician_copy,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "physician_copy",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.physician_copy"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      { attrs: { cols: "4" } },
                                                      [
                                                        _c("v-text-field", {
                                                          staticClass:
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "Examined By"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .examined_by,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "examined_by",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.examined_by"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "SPEC #"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.spec,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "spec",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.spec"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Collection Date"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .collection_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "collection_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.collection_date"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Collection Time"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .collection_time,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "collection_time",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.collection_time"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "SPECIMEN"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.specimen,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "specimen",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.specimen"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Received Date"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .received_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "received_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.received_date"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label:
                                                              "Received Time"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .received_time,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "received_time",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.received_time"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "Report Date"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .report_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "report_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.report_date"
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
                                                            "subtitle-2 font-weight-bold",
                                                          attrs: {
                                                            readonly: "",
                                                            dense: "",
                                                            label: "Report Time"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .report_time,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "report_time",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.report_time"
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
                                          { attrs: { outlined: "" } },
                                          [
                                            _c(
                                              "v-card-title",
                                              {
                                                staticClass:
                                                  "success darken-2 subtitle-2"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-uppercase white--text"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Steriod Hormone Analysis"
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-card-text",
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
                                                                    "Analysis"
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
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "th",
                                                                {
                                                                  staticClass:
                                                                    "text-left"
                                                                },
                                                                [_vm._v("Unit")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "th",
                                                                {
                                                                  staticClass:
                                                                    "text-left"
                                                                },
                                                                [_vm._v("Flag")]
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
                                                                    "Reference Range"
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
                                                                    "Estrogens"
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
                                                                        readonly:
                                                                          "",
                                                                        dense:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .estrogen,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "estrogen",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "form.estrogen"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
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
                                                                    "Progesterone"
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
                                                                        readonly:
                                                                          "",
                                                                        dense:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .progesterone,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "progesterone",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "form.progesterone"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
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
                                                                    "Testosterone"
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
                                                                        readonly:
                                                                          "",
                                                                        dense:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .testosterone,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "testosterone",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "form.testosterone"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
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
                                                                    "Cortisol"
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
                                                                        readonly:
                                                                          "",
                                                                        dense:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .cortisol,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "cortisol",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "form.cortisol"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
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
                                                                    "Melatonin"
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
                                                                        readonly:
                                                                          "",
                                                                        dense:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .melatonin,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "melatonin",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "form.melatonin"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
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
                                                                    "Dehydroepiandrosterone (DHEA)"
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
                                                                        readonly:
                                                                          "",
                                                                        dense:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .dea,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "dea",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "form.dea"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
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
                                                                          ""
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
                                        _c(
                                          "v-card",
                                          { attrs: { flat: "" } },
                                          [
                                            _c(
                                              "v-card-text",
                                              { staticClass: "py-0" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "d-flex" },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "subtitle-2 font-weight-bold mr-5 mt-3 black--text"
                                                      },
                                                      [_vm._v("Flag Key")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "subtitle-2 font-weight-bold",
                                                        staticStyle: {
                                                          width: "80%"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: { dense: "" }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              ]
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
                                              "v-card-text",
                                              { staticClass: "py-0" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "d-flex" },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "subtitle-2 font-weight-bold mr-5 mt-3 black--text"
                                                      },
                                                      [_vm._v("Comments")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "subtitle-2 font-weight-bold",
                                                        staticStyle: {
                                                          width: "80%"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: { dense: "" }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              ]
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
                                              "v-card-text",
                                              {
                                                staticClass: "pa-3 text-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold mr-5 mt-3 black--text text-uppercase"
                                                  },
                                                  [_vm._v("**End of Report**")]
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
              ])
            ]
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

/***/ "./resources/js/components/result/steroid-hormone.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/result/steroid-hormone.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _steroid_hormone_vue_vue_type_template_id_84043aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steroid-hormone.vue?vue&type=template&id=84043aa8& */ "./resources/js/components/result/steroid-hormone.vue?vue&type=template&id=84043aa8&");
/* harmony import */ var _steroid_hormone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steroid-hormone.vue?vue&type=script&lang=js& */ "./resources/js/components/result/steroid-hormone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _steroid_hormone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _steroid_hormone_vue_vue_type_template_id_84043aa8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _steroid_hormone_vue_vue_type_template_id_84043aa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/result/steroid-hormone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/result/steroid-hormone.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/result/steroid-hormone.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_steroid_hormone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./steroid-hormone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/result/steroid-hormone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_steroid_hormone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/result/steroid-hormone.vue?vue&type=template&id=84043aa8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/result/steroid-hormone.vue?vue&type=template&id=84043aa8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_steroid_hormone_vue_vue_type_template_id_84043aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./steroid-hormone.vue?vue&type=template&id=84043aa8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/result/steroid-hormone.vue?vue&type=template&id=84043aa8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_steroid_hormone_vue_vue_type_template_id_84043aa8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_steroid_hormone_vue_vue_type_template_id_84043aa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);