(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drug_inventory"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DrugInventory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading_dialog: false,
      loadingData: false,
      valid: false,
      search: '',
      dialog: false,
      headers: [{
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Quantity',
        value: 'quantity'
      }, {
        text: 'Dosage Info',
        value: 'dosage_info'
      }, {
        text: 'Category/Class',
        value: 'category'
      }, {
        text: 'Expiry Date',
        value: 'expiry_date',
        align: 'center'
      }, {
        text: 'Purchased Date',
        value: 'purchased_date',
        align: 'center'
      }, {
        text: 'Left Until',
        value: 'left_until',
        align: 'center'
      }, {
        text: 'Status',
        value: 'status',
        align: 'center'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      drugs: [],
      editedIndex: -1,
      updateId: null,
      editedItem: {
        category: null,
        dosage_info: null,
        name: null,
        quantity: null,
        expiry_date: null,
        purchased_date: null
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      date_modal: false,
      purchaseddate_modal: false,
      menu2: false,
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      quantityRules: [function (v) {
        return !!v || 'Quantity is required';
      }],
      dosageRules: [function (v) {
        return !!v || 'Dosage Information is required';
      }],
      categoryRules: [function (v) {
        return !!v || 'Category Information is required';
      }],
      dateRules: [function (v) {
        return !!v || 'Date is required';
      }]
    };
  },
  computed: _objectSpread({
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Drug' : 'Edit Drug Info';
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allDrugs'])),
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    allDrugs: function allDrugs() {
      if (this.allDrugs.length) {
        this.drugs = this.allDrugs;
        this.loadingData = false;
        this.$refs.topProgress.done();
      } else {
        this.loadingData = false;
        this.$refs.topProgress.done();
      }
    }
  },
  mounted: function mounted() {
    this.$refs.topProgress.start();
  },
  created: function created() {
    this.fetchDrugs();
    this.loadingData = true;
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMM Do, YYYY');
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchDrugs']), {
    editItem: function editItem(item) {
      this.updateId = item.id;
      this.editedIndex = this.drugs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
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
          axios["delete"]('/api/delete_drug/' + item.id).then(function (response) {});

          var index = _this.drugs.indexOf(item);

          _this.drugs.splice(index, 1);

          Swal.fire('Deleted!', 'The Drug has been deleted.', 'success');
        }
      });
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      this.$refs.drugform.reset();
      this.$refs.drugform.resetValidation();
      setTimeout(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this3 = this;

      if (this.$refs.drugform.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.post('/api/store_drugs', {
          drugs: this.editedItem
        }).then(function (response) {
          if (response.data.success) {
            _this3.$refs.topProgress.done();

            _this3.loading_dialog = false;
            _this3.dialog = false;

            _this3.$refs.drugform.reset();

            _this3.$refs.drugform.resetValidation();

            _this3.fetchDrugs();

            _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
              icon: 'success',
              title: 'New Drug Added'
            });
          }
        });
      }
    },
    getColor: function getColor(quantity) {
      if (quantity >= 100) {
        return 'success darken-2';
      } else if (quantity < 100 && quantity > 0) {
        return 'warning darken-1';
      } else if (quantity == 0) {
        return 'red darken-2';
      }
    },
    formatStatus: function formatStatus(quantity) {
      if (quantity >= 100) {
        return 'in stock';
      } else if (quantity > 0 && quantity < 100) {
        return 'low stock';
      } else if (quantity <= 0) {
        return 'out of stock';
      }
    },
    updateDrug: function updateDrug() {
      var _this4 = this;

      if (this.$refs.drugform.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.patch('/api/update_drug/' + this.updateId, {
          drug: this.editedItem
        }).then(function (response) {
          if (response.data.success) {
            _this4.$refs.topProgress.done();

            _this4.loading_dialog = false;

            _this4.fetchDrugs();

            _this4.$refs.drugform.reset();

            _this4.$refs.drugform.resetValidation();

            _this4.dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
              icon: 'success',
              title: 'Drug updated'
            });
          }
        });
      }
    },
    formatDaysLeft: function formatDaysLeft(expiry_date) {
      return new moment().to(moment(expiry_date));
    },
    getExpiredColor: function getExpiredColor(date) {
      var expired = moment(date);
      var todaysdate = moment();
      var days = expired.diff(todaysdate, 'days');

      if (days <= 0) {
        return 'red darken-2';
      } else {
        return 'success darken-2';
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.status_chip[data-v-a79ee97e]{\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10);\n}\n.cancelAccount[data-v-a79ee97e]{\n\ttext-decoration: line-through;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5 pa-3" },
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.drugs,
          "sort-by": "full_name",
          search: _vm.search,
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
                      _c("v-toolbar-title", [_vm._v("Drug List")]),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "mx-4",
                        attrs: { inset: "", vertical: "" }
                      }),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "700px" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  _vm.$gate.isPharmacy()
                                    ? _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            staticClass: "mb-2 px-5",
                                            attrs: {
                                              color: "success darken-2",
                                              rounded: "",
                                              elevation: "15",
                                              dark: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "caption" },
                                            [_vm._v("Add Drug")]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v(_vm._s(_vm.formTitle))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-form",
                                        {
                                          ref: "drugform",
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
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      color: "success",
                                                      outlined: "",
                                                      rules: _vm.nameRules,
                                                      dense: "",
                                                      label: "Drug Name"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.name"
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
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      color: "success",
                                                      outlined: "",
                                                      dense: "",
                                                      rules: _vm.quantityRules,
                                                      label: "Quantity"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.quantity,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "quantity",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.quantity"
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
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      color: "success",
                                                      outlined: "",
                                                      dense: "",
                                                      rules: _vm.dosageRules,
                                                      label: "Dosage Info"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem
                                                          .dosage_info,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "dosage_info",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.dosage_info"
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
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      color: "success",
                                                      outlined: "",
                                                      dense: "",
                                                      rules: _vm.categoryRules,
                                                      label: "Cateogry/Class"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.category,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "category",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.category"
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
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-dialog",
                                                    {
                                                      ref: "dialog",
                                                      attrs: {
                                                        "return-value":
                                                          _vm.editedItem
                                                            .expiry_date,
                                                        persistent: "",
                                                        width: "290px"
                                                      },
                                                      on: {
                                                        "update:returnValue": function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.editedItem,
                                                            "expiry_date",
                                                            $event
                                                          )
                                                        },
                                                        "update:return-value": function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.editedItem,
                                                            "expiry_date",
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
                                                                      color:
                                                                        "success",
                                                                      outlined:
                                                                        "",
                                                                      dense: "",
                                                                      rules:
                                                                        _vm.dateRules,
                                                                      label:
                                                                        "Expiry Date",
                                                                      "append-icon":
                                                                        "mdi-calendar-edit",
                                                                      readonly:
                                                                        ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .expiry_date,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "expiry_date",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.expiry_date"
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
                                                        value: _vm.date_modal,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.date_modal = $$v
                                                        },
                                                        expression: "date_modal"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-date-picker",
                                                        {
                                                          attrs: {
                                                            scrollable: "",
                                                            color: "success"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .expiry_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "expiry_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.expiry_date"
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
                                                                color: "red"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.date_modal = false
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
                                                                color: "success"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$refs.dialog.save(
                                                                    _vm
                                                                      .editedItem
                                                                      .expiry_date
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
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-dialog",
                                                    {
                                                      ref: "purchased_dialog",
                                                      attrs: {
                                                        "return-value":
                                                          _vm.editedItem
                                                            .purchased_date,
                                                        persistent: "",
                                                        width: "290px"
                                                      },
                                                      on: {
                                                        "update:returnValue": function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.editedItem,
                                                            "purchased_date",
                                                            $event
                                                          )
                                                        },
                                                        "update:return-value": function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.editedItem,
                                                            "purchased_date",
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
                                                                      color:
                                                                        "success",
                                                                      outlined:
                                                                        "",
                                                                      dense: "",
                                                                      rules:
                                                                        _vm.dateRules,
                                                                      label:
                                                                        "Purchased Date",
                                                                      "append-icon":
                                                                        "mdi-calendar-edit",
                                                                      readonly:
                                                                        ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .purchased_date,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "purchased_date",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.purchased_date"
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
                                                        value:
                                                          _vm.purchaseddate_modal,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.purchaseddate_modal = $$v
                                                        },
                                                        expression:
                                                          "purchaseddate_modal"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-date-picker",
                                                        {
                                                          attrs: {
                                                            scrollable: "",
                                                            color: "success"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .purchased_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "purchased_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.purchased_date"
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
                                                                color: "red"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.purchaseddate_modal = false
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
                                                                color: "success"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$refs.purchased_dialog.save(
                                                                    _vm
                                                                      .editedItem
                                                                      .purchased_date
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
                                  _vm.editedIndex === -1
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "success darken-1",
                                            text: "",
                                            disabled: !_vm.valid
                                          },
                                          on: { click: _vm.save }
                                        },
                                        [_vm._v("Save")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "success darken-1",
                                            text: "",
                                            disabled: !_vm.valid
                                          },
                                          on: { click: _vm.updateDrug }
                                        },
                                        [_vm._v("update")]
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "red darken-1",
                                        text: ""
                                      },
                                      on: { click: _vm.close }
                                    },
                                    [_vm._v("Cancel")]
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
                  _c("v-text-field", {
                    staticClass: "mx-4",
                    attrs: {
                      color: "success",
                      label: "Looking for a drug?",
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
            _vm.$gate.isPharmacy()
              ? {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editItem(item)
                            }
                          }
                        },
                        [_vm._v("\n\t        mdi-pencil\n\t      ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "", color: "red" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem(item)
                            }
                          }
                        },
                        [_vm._v("\n\t        mdi-delete\n\t      ")]
                      )
                    ]
                  }
                }
              : null,
            {
              key: "item.status",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("v-chip", {
                    staticClass: "status_chip",
                    attrs: {
                      color: _vm.getColor(item.quantity),
                      dark: "",
                      pill: "",
                      small: ""
                    },
                    domProps: {
                      textContent: _vm._s(_vm.formatStatus(item.quantity))
                    }
                  })
                ]
              }
            },
            {
              key: "item.expiry_date",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("formatDate")(item.expiry_date)))
                  ])
                ]
              }
            },
            {
              key: "item.purchased_date",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("formatDate")(item.purchased_date)))
                  ])
                ]
              }
            },
            {
              key: "item.name",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-icon",
                    { attrs: { size: "20", color: "success darken-2" } },
                    [_vm._v("mdi-pill")]
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(item.name))])
                ]
              }
            },
            {
              key: "item.left_until",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-chip",
                    {
                      class: _vm.getExpiredColor(item.expiry_date),
                      attrs: { dark: "", small: "" }
                    },
                    [_vm._v(_vm._s(_vm.formatDaysLeft(item.expiry_date)))]
                  )
                ]
              }
            }
          ],
          null,
          true
        )
      }),
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
                    [_vm._v("Updating Drug Inventory...")]
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

/***/ "./resources/js/components/DrugInventory.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DrugInventory.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrugInventory_vue_vue_type_template_id_a79ee97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true& */ "./resources/js/components/DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true&");
/* harmony import */ var _DrugInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrugInventory.vue?vue&type=script&lang=js& */ "./resources/js/components/DrugInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css& */ "./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DrugInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DrugInventory_vue_vue_type_template_id_a79ee97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DrugInventory_vue_vue_type_template_id_a79ee97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a79ee97e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DrugInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DrugInventory.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DrugInventory.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DrugInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=style&index=0&id=a79ee97e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_style_index_0_id_a79ee97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_template_id_a79ee97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DrugInventory.vue?vue&type=template&id=a79ee97e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_template_id_a79ee97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrugInventory_vue_vue_type_template_id_a79ee97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);