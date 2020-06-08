(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports_medicals"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsMedical.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_2__);
var _objectSpread2;

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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pdf_loading_dialog: false,
      loading_dialog: false,
      search_patient: '',
      medical_dialog: false,
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
      medicaHistory: [],
      colors: ['red darken-2', 'success darken-2', 'warning darken-1', 'primary'],
      report: null,
      show_prescription_items: null,
      report_dialog: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['patient_medicals']), {
    filteredPatients: function filteredPatients() {
      var _this = this;

      return this.patient_medicals.filter(function (data) {
        return data.firstname.toLowerCase().match(_this.search_patient.toLowerCase()) || data.lastname.toLowerCase().match(_this.search_patient.toLowerCase());
      });
    },
    formatContact: function formatContact() {
      if (this.report !== null) {
        var phone = this.report.patient.phone;
        var new_str = phone.slice(1);
        return '(+233)' + ' ' + new_str;
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchPatientMedicals']), (_objectSpread2 = {
    openRecords: function openRecords() {
      this.medical_dialog = true;
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    getInitials: function getInitials(item) {
      var first = item.firstname.slice(0, 1).toUpperCase();
      var last = item.lastname.slice(0, 1).toUpperCase();
      var ini = first + '' + last;
      return ini;
    },
    getRandomColor: function getRandomColor(item) {
      if (item) {
        var item = this.colors[Math.floor(Math.random(0, 1) * this.colors.length)];
        return item;
      }
    },
    formatStatus: function formatStatus(item) {
      if (item.referred === 0) {
        return 'mdi-star';
      } else {
        return 'mdi-cached';
      }
    },
    formatStatusColor: function formatStatusColor(item) {
      if (item.referred === 0) {
        return 'warning darken-1';
      } else {
        return 'red darken-3';
      }
    }
  }, _defineProperty(_objectSpread2, "openRecords", function openRecords(item) {
    var _this2 = this;

    this.loading_dialog = true;
    axios.post('/api/patient_medical_history', {
      id: item.id
    }).then(function (response) {
      _this2.medicaHistory = response.data;
    });

    if (this.medicaHistory) {
      this.loading_dialog = false;
      this.medical_dialog = true;
    }
  }), _defineProperty(_objectSpread2, "map_prescriptions", function map_prescriptions(data) {
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
  }), _defineProperty(_objectSpread2, "generate_report", function generate_report(item) {
    this.report = item;
    this.map_prescriptions(item);

    if (this.report) {
      this.report_dialog = true;
    }
  }), _defineProperty(_objectSpread2, "print_form", function print_form() {
    var _this3 = this;

    this.pdf_loading_dialog = true;
    document.getElementById('print_preview_toolbar').style.display = "none";
    var ele = document.getElementById('form_html');
    /** WITH CSS */

    dom_to_image__WEBPACK_IMPORTED_MODULE_2___default.a.toJpeg(ele).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a({
        orientation: "portrait",
        // unit: "pt",
        format: [1000, 1400]
      });
      doc.addImage(img, "JPEG", 10, 5);
      var filename = "Medical Record.pdf";
      doc.save(filename);
      _this3.pdf_loading_dialog = false;
      document.getElementById('print_preview_toolbar').style.display = "block";
    })["catch"](function (error) {
      console.error("oops, something went wrong!", error);
      this.pdf_loading_dialog = false;
      document.getElementById('print_preview_toolbar').style.display = "block";
    });
  }), _objectSpread2)),
  created: function created() {
    this.fetchPatientMedicals();
  },
  filters: {
    formatDate: function formatDate(value) {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#info[data-v-1602edfd] {\n  text-align: center !important;\n}\n.border-line[data-v-1602edfd] {\n  border-bottom: 2px solid rgba(0, 126, 46, 1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto", staticStyle: { width: "95%" } },
    [
      _c(
        "v-card",
        { staticClass: "pa-4", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "span",
                {
                  staticClass:
                    "subtitle-1 text-uppercase font-weight-bold grey--text darken-9"
                },
                [_vm._v("Patient Medical Records")]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "px-5 py-2",
                  attrs: {
                    color: "success darken-2",
                    dark: "",
                    depressed: "",
                    tile: ""
                  },
                  on: { click: _vm.goback }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-chevron-double-left")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "caption font-weight-bold text-uppercase" },
                    [_vm._v("back")]
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
            { staticClass: "pa-2" },
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
                            staticClass: "mr-auto",
                            attrs: {
                              src:
                                "/app_asset/undraw_detailed_analysis_xn7y.svg",
                              width: "35%"
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
                      staticClass: "d-flex ml-auto mt-10",
                      attrs: { cols: "12", md: "5" }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          rounded: "",
                          outlined: "",
                          color: "success darken-2",
                          label: "Search",
                          placeholder: "Looking for a patient..."
                        },
                        model: {
                          value: _vm.search_patient,
                          callback: function($$v) {
                            _vm.search_patient = $$v
                          },
                          expression: "search_patient"
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
            "v-card-text",
            [
              _vm.patient_medicals
                ? _c(
                    "v-row",
                    _vm._l(_vm.filteredPatients, function(item, index) {
                      return _c(
                        "v-col",
                        { key: index, attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "pa-3 d-flex flex-row",
                              staticStyle: { "border-left": "4px solid green" },
                              attrs: { outlined: "" }
                            },
                            [
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-avatar",
                                    {
                                      attrs: {
                                        color: _vm.getRandomColor(item),
                                        elevation: "10"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "white--text" },
                                        [_vm._v(_vm._s(_vm.getInitials(item)))]
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticClass: "d-flex flex-column" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 grey--text darken-10 font-weight-bold text-uppercase"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(item.title) +
                                          " " +
                                          _vm._s(item.firstname) +
                                          " " +
                                          _vm._s(item.lastname)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "caption font-weight-bold" },
                                    [
                                      _vm._v(
                                        "Job Title: " + _vm._s(item.job_title)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  item
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold"
                                        },
                                        [
                                          _vm._v("Status: "),
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: _vm.formatStatusColor(
                                                  item
                                                ),
                                                size: "20"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.formatStatus(item))
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "ml-auto flex-row d-flex" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "px-5 py-2 mx-2",
                                      attrs: {
                                        color: "success darken-2",
                                        dark: "",
                                        depressed: "",
                                        tile: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openRecords(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { left: "", size: "20" } },
                                        [_vm._v("mdi-format-align-right")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold text-uppercase"
                                        },
                                        [_vm._v("Reports")]
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
                    }),
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
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.medical_dialog,
            callback: function($$v) {
              _vm.medical_dialog = $$v
            },
            expression: "medical_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "info darken-1", flat: "" } },
                [
                  _c(
                    "v-toolbar-title",
                    {
                      staticClass: "subtitle-2 font-weight-bold text-uppercase"
                    },
                    [
                      _vm._v(
                        "\n            Medical Records Analysis\n            "
                      ),
                      _c("v-icon", { staticClass: "ml-3" }, [
                        _vm._v("mdi-medical-bag")
                      ])
                    ],
                    1
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
                              _vm.medical_dialog = false
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
                "v-row",
                { staticClass: "flex-column", attrs: { align: "center" } },
                [
                  _c("v-img", {
                    attrs: { src: "/app_asset/medix_full.png", width: "200" }
                  }),
                  _vm._v(" "),
                  _c(
                    "h3",
                    {
                      staticClass:
                        "subtitle-2 mt-2 text-uppercase font-weight-bold"
                    },
                    [_vm._v("All Medical Records")]
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
                    { attrs: { flat: "" } },
                    [
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
                                    {
                                      staticClass: "subtitle-2 font-weight-bold"
                                    },
                                    [_vm._v("Medical Report List")]
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
                                          "v-btn",
                                          {
                                            staticClass: "px-5",
                                            attrs: {
                                              dark: "",
                                              color: "info darken-1",
                                              tile: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.generate_report(item)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "caption" },
                                              [_vm._v("generate")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { right: "", size: "20" }
                                              },
                                              [_vm._v("mdi-flash-circle")]
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
            { attrs: { color: "teal", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("Loading data. Please wait...")]
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
            id: "print_dialog"
          },
          model: {
            value: _vm.report_dialog,
            callback: function($$v) {
              _vm.report_dialog = $$v
            },
            expression: "report_dialog"
          }
        },
        [
          _c(
            "html",
            {
              staticStyle: { width: "100%", margin: "0 auto" },
              attrs: { id: "form_html" }
            },
            [
              _c(
                "body",
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        {
                          attrs: {
                            dark: "",
                            color: "info darken-1",
                            flat: "",
                            id: "print_preview_toolbar"
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.report_dialog = false
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
                                "subtitle-2 font-weight-bold text-uppercase"
                            },
                            [_vm._v("Medical Assessment Reports")]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-items",
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                attrs: { icon: "" },
                                                on: { click: _vm.print_form }
                                              },
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-download")
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
                                  _c("span", { staticClass: "caption" }, [
                                    _vm._v("Download form as pdf")
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
                        "v-container",
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
                                "h3",
                                { staticClass: "headline mt-5 text-uppercase" },
                                [_vm._v("Medical Report")]
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
                                  staticClass: "pa-3 overline font-weight-bold",
                                  staticStyle: {
                                    "background-color": "#a4a4a4b8",
                                    "font-size": "15px !important"
                                  }
                                },
                                [_vm._v("Patient Information")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticClass: "pa-7" },
                                [
                                  _vm.report
                                    ? _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4", lg: "4" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        First Name\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient
                                                      .firstname,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Last Name\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient.lastname,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Gender\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient.gender,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                  _vm.report
                                    ? _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4", lg: "4" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Email\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient.email,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Contact\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value: _vm.formatContact,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Age\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value: _vm.report.patient.age,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                  _vm.report
                                    ? _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4", lg: "4" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Job Title\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient
                                                      .job_title,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Department\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient
                                                      .department,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-no-wrap border-line text-uppercase mb-3",
                                                  staticStyle: { width: "20px" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Type of Employee\n                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                staticClass: "mt-0",
                                                attrs: {
                                                  value:
                                                    _vm.report.patient
                                                      .employee_type,
                                                  outlined: "",
                                                  readonly: "",
                                                  dense: "",
                                                  color: "success"
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
                                  _c(
                                    "v-row",
                                    { staticClass: "d-block pl-5" },
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "text-no-wrap border-line text-uppercase mb-3",
                                          staticStyle: {
                                            width: "20px",
                                            "margin-right": "80px"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Referred?\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.report
                                        ? _c("div", [
                                            _vm.report.patient.referred === 1
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold text-uppercase"
                                                  },
                                                  [_vm._v("yes")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.report.patient.referred === 0
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-1 font-weight-bold text-uppercase"
                                                  },
                                                  [_vm._v("no")]
                                                )
                                              : _vm._e()
                                          ])
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
                            "v-card",
                            { attrs: { outlined: "" } },
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass: "pa-3 overline font-weight-bold",
                                  staticStyle: {
                                    "background-color": "#a4a4a4b8",
                                    "font-size": "15px !important"
                                  }
                                },
                                [_vm._v("Doctor's Report")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticClass: "pa-7" },
                                [
                                  _vm.report
                                    ? _c("v-form", [
                                        _c(
                                          "div",
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-centent-space-between"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Problem Description"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "ml-auto" },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v("mdi-checkbook")
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
                                            _c("v-text-field", {
                                              attrs: {
                                                color: "success",
                                                readonly: "",
                                                value: _vm.report.problem
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-centent-space-between"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-center"
                                                  },
                                                  [_vm._v("Allergies")]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "ml-auto" },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "mdi-account-alert"
                                                      )
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
                                            _c("v-text-field", {
                                              attrs: {
                                                color: "success",
                                                readonly: "",
                                                value: _vm.report.allergies
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-centent-space-between"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-center"
                                                  },
                                                  [_vm._v("Diagnosis")]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "ml-auto" },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v("mdi-telescope")
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
                                            _c("v-textarea", {
                                              attrs: {
                                                color: "success",
                                                height: "100",
                                                readonly: "",
                                                value: _vm.report.diagnosis
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "mt-5" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-centent-space-between"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-center"
                                                  },
                                                  [_vm._v("Medication")]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer")
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-divider"),
                                            _vm._v(" "),
                                            _vm.show_prescription_items
                                              ? _vm._l(
                                                  _vm.show_prescription_items,
                                                  function(data, index) {
                                                    return _c(
                                                      "div",
                                                      { key: index },
                                                      [
                                                        _c(
                                                          "v-row",
                                                          _vm._l(
                                                            data.drug_name,
                                                            function(
                                                              drug,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "v-col",
                                                                {
                                                                  key: index,
                                                                  attrs: {
                                                                    cols: "3"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-card",
                                                                    {
                                                                      staticClass:
                                                                        "grey lighten-2 text-center pa-2",
                                                                      attrs: {
                                                                        outlined:
                                                                          ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-card-text",
                                                                        {
                                                                          staticClass:
                                                                            "pa-2"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "subtitle-2 font-weight-bold text-uppercase"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  drug
                                                                                )
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-card-text",
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "d-block text-center grey--text font-weight-bold text-uppercase caption darken-5"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "i",
                                                                                [
                                                                                  _vm._v(
                                                                                    "Dosage: "
                                                                                  ),
                                                                                  _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "black--text"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          data.dosage
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            }
                                                          ),
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  }
                                                )
                                              : [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "ml-5 grey--text font-weight-bold text-uppercase darken-5"
                                                    },
                                                    [
                                                      _c("i", [
                                                        _vm._v(
                                                          "No Drug(s) Prescribed"
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                ]
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "mt-8" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-centent-space-between"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "subtitle-2 font-weight-bold text-center"
                                                  },
                                                  [_vm._v("Specialist Note")]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "ml-auto" },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v("mdi-note-text")
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
                                            _c("v-textarea", {
                                              attrs: {
                                                color: "success",
                                                height: "100",
                                                readonly: "",
                                                value: _vm.report.notes
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ])
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
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "hide-overlay": "", persistent: "", width: "300" },
          model: {
            value: _vm.pdf_loading_dialog,
            callback: function($$v) {
              _vm.pdf_loading_dialog = $$v
            },
            expression: "pdf_loading_dialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { color: "teal", dark: "", outlined: "", flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "span",
                    { staticClass: "subtitle-2 font-weight-light font-italic" },
                    [_vm._v("preparing pdf, please wait...")]
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

/***/ "./resources/js/components/ReportsMedical.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ReportsMedical.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportsMedical_vue_vue_type_template_id_1602edfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true& */ "./resources/js/components/ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true&");
/* harmony import */ var _ReportsMedical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsMedical.vue?vue&type=script&lang=js& */ "./resources/js/components/ReportsMedical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css& */ "./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportsMedical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsMedical_vue_vue_type_template_id_1602edfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportsMedical_vue_vue_type_template_id_1602edfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1602edfd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReportsMedical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReportsMedical.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ReportsMedical.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsMedical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=style&index=0&id=1602edfd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_style_index_0_id_1602edfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_template_id_1602edfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportsMedical.vue?vue&type=template&id=1602edfd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_template_id_1602edfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsMedical_vue_vue_type_template_id_1602edfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);