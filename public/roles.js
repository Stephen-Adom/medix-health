(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading_dialog: false,
      loadingData: false,
      valid: false,
      search_role: '',
      dialog: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        description: ''
      },
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getAllRoles']), {
    filteredRoles: function filteredRoles() {
      var _this = this;

      return this.getAllRoles.filter(function (role) {
        return role.name.toLowerCase().match(_this.search_role.toLowerCase());
      });
    }
  }),
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    getAllRoles: function getAllRoles() {
      if (this.getAllRoles) {
        this.$refs.topProgress.done();
        this.loadingData = false;
      } else {
        this.$refs.topProgress.done();
      }
    }
  },
  created: function created() {
    this.loadingData = true;
    this.getRoles();
  },
  mounted: function mounted() {
    this.$refs.topProgress.start();
  },
  methods: _objectSpread({
    new_role: function new_role() {
      this.dialog = true;
    },
    editItem: function editItem(item) {
      this.editedIndex = 0;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    updateRole: function updateRole() {
      var _this2 = this;

      if (this.$refs.Roleform.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.post('/api/edit_role', {
          roles: this.editedItem
        }).then(function (response) {
          if (response.data.success) {
            _this2.$refs.topProgress.done();

            _this2.loading_dialog = false;

            _this2.getRoles();

            _this2.$refs.Roleform.reset();

            _this2.dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: 'Role Updated'
            });
          }
        });
      }
    },
    deleteItem: function deleteItem(item) {
      var _this3 = this;

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
          _this3.$refs.topProgress.start();

          var index = _this3.roles.indexOf(item);

          _this3.roles.splice(index, 1);

          axios["delete"]('/api/delete_role/' + item.id).then(function (response) {
            _this3.$refs.topProgress.done();
          });
          Swal.fire('Deleted!', 'The Role has been deleted.', 'success');
        }
      });
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      this.$refs.Roleform.reset();
      this.$refs.Roleform.resetValidation();
      setTimeout(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    },
    getColor: function getColor(status) {
      if (status === 'Active') {
        return 'success';
      } else {
        return 'red';
      }
    },
    getGenderColor: function getGenderColor(gender) {
      if (gender === 'Male') {
        return 'primary';
      } else {
        return 'success';
      }
    },
    formatStatus: function formatStatus(status) {
      if (status === 'Active') {
        return 'Active';
      } else {
        return 'Inactive';
      }
    },
    formatGender: function formatGender(gender) {
      if (gender == 'Male') {
        return 'mdi-gender-male';
      } else {
        return 'mdi-gender-female';
      }
    },
    deactivateUser: function deactivateUser(status) {
      if (status === 'Inactive') {
        return true;
      }
    },
    submitRole: function submitRole() {
      var _this5 = this;

      if (this.$refs.Roleform.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.post('/api/create_role', {
          roles: this.editedItem
        }).then(function (response) {
          if (response.data.error) {
            _this5.$refs.topProgress.fail();

            _this5.loading_dialog = false;
            _this5.dialog = true;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'error',
              title: 'Error found'
            });
          }

          if (response.data.success) {
            _this5.$refs.topProgress.done();

            _this5.loading_dialog = false;

            _this5.getRoles();

            _this5.$refs.Roleform.reset();

            _this5.$refs.Roleform.resetValidation();

            _this5.dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: 'New Role Added'
            });
          }
        });
      }

      ;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['getRoles']), {
    getImage: function getImage(item) {
      if (item.id === 1) {
        return '/app_asset/doctor.jpg';
      } else if (item.id === 2) {
        return '/app_asset/nurse.jpg';
      } else if (item.id === 3) {
        return '/app_asset/pharmacist.jpg';
      } else if (item.id === 4) {
        return '/app_asset/lab tech.jpg';
      } else if (item.id === 5) {
        return '/app_asset/manager.png';
      } else {
        return '/app_asset/image placeholder.png';
      }
    },
    detail_page: function detail_page(role) {
      this.$router.push({
        name: 'roles_details',
        params: {
          id: role.id
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles_details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles_details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: [Number]
  },
  data: function data() {
    return {
      search: '',
      headers: [{
        text: 'Staff Profile',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Contact',
        value: 'phone'
      }, {
        text: 'Job Title',
        value: 'job_title'
      }, {
        text: 'Age',
        value: 'age'
      }, {
        text: 'Sex',
        value: 'gender'
      }],
      staff: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getAllRoles']), {
    role: function role() {
      var _this = this;

      return this.getAllRoles.find(function (item) {
        return item.id == _this.id;
      });
    }
  }),
  methods: {
    goback: function goback() {
      this.$router.go(-1);
    },
    getImage: function getImage(item) {
      if (item.id === 1) {
        return '/app_asset/doctor.jpg';
      } else if (item.id === 2) {
        return '/app_asset/nurse.jpg';
      } else if (item.id === 3) {
        return '/app_asset/pharmacist.jpg';
      } else if (item.id === 4) {
        return '/app_asset/lab tech.jpg';
      } else if (item.id === 5) {
        return '/app_asset/manager.png';
      } else {
        return '/app_asset/image placeholder.png';
      }
    },
    deleteItem: function deleteItem(item) {
      var _this2 = this;

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
          axios["delete"]('/api/delete_role/' + item.id).then(function (response) {
            _this2.goback();
          });
          Swal.fire('Deleted!', 'The Role has been deleted.', 'success');
        }
      });
    },
    getStaffImage: function getStaffImage(item) {
      if (item.image) {
        return '/storage/profiles/' + item.image;
      } else {
        if (item.gender === 'Male') {
          return '/app_asset/male-profile-2.jpg';
        } else {
          return '/app_asset/female-avatar.jpg';
        }
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$refs.topProgress.start();
    setInterval(function () {
      _this3.$refs.topProgress.done();
    }, 1000);

    if (this.role) {
      this.staff = this.role.users;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.status_chip[data-v-312d3e3c]{\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10);\n}\n.cancelAccount[data-v-312d3e3c]{\n\ttext-decoration: line-through;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=template&id=312d3e3c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles.vue?vue&type=template&id=312d3e3c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-row",
        { staticClass: "px-5" },
        [
          _c("div", { staticClass: "d-flex flex-column" }, [
            _c("h5", { staticClass: "title font-weight-bold" }, [
              _vm._v("All Active Roles")
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "subtitle-2 font-weight-regular grey--text" },
              [
                _vm._v(
                  "Compiled list of All Role Records available at one place"
                )
              ]
            ),
            _vm._v(" "),
            _vm.getAllRoles
              ? _c(
                  "span",
                  { staticClass: "subtitle-2 mt-1" },
                  [
                    _c("v-icon", { attrs: { color: "success darken-2" } }, [
                      _vm._v("mdi-account-group")
                    ]),
                    _vm._v(" Number of Roles: "),
                    _c(
                      "span",
                      { staticClass: "font-weight-bold black--text" },
                      [_vm._v(_vm._s(_vm.getAllRoles.length))]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "success darken-2 px-7",
              attrs: { tile: "", depressed: "" },
              on: { click: _vm.new_role }
            },
            [
              _c("v-icon", { attrs: { left: "", size: "18" } }, [
                _vm._v("mdi-account-tie")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "caption" }, [_vm._v("Add Role")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mt-10 px-5" },
        [
          _c("span", { staticClass: "subtitle-1 mt-3" }, [
            _vm._v("Looking for a role?")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "subtitle-2",
            staticStyle: { width: "5% !important" },
            attrs: {
              color: "success darken-2",
              placeholder: "Search by Name...",
              label: "Role Info",
              outlined: "",
              clearable: "",
              dense: ""
            },
            model: {
              value: _vm.search_role,
              callback: function($$v) {
                _vm.search_role = $$v
              },
              expression: "search_role"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { attrs: { inset: "" } }),
      _vm._v(" "),
      _vm.getAllRoles.length
        ? _c(
            "v-row",
            { staticClass: "mt-3" },
            _vm._l(_vm.filteredRoles, function(role) {
              return _c(
                "v-col",
                { key: role.id, attrs: { cols: "6", md: "3", sm: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { outlined: "", hover: "" } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "px-3 d-flex py-2 justify-center" },
                        [
                          _c(
                            "v-avatar",
                            { attrs: { size: "70" } },
                            [
                              _c("v-img", {
                                attrs: { src: _vm.getImage(role) }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        {
                          staticClass:
                            "pa-1 d-flex flex-column justify-center align-center"
                        },
                        [
                          _c(
                            "h5",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold primary--text darken-5"
                            },
                            [_vm._v(_vm._s(role.name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "h5",
                            { staticClass: "subtitle-2 grey--text darken-5" },
                            [
                              _vm._v("Number of Users: "),
                              _c(
                                "span",
                                { staticClass: "font-weight-bold black--text" },
                                [_vm._v(_vm._s(role.users.length))]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "d-flex justify-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "info darken-2 px-5 ma-2",
                              attrs: {
                                fab: "",
                                depressed: "",
                                dark: "",
                                small: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.detail_page(role)
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { size: "18" } }, [
                                _vm._v("mdi-account-details")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "warning darken-1 px-5 ma-2",
                              attrs: {
                                fab: "",
                                depressed: "",
                                dark: "",
                                small: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.editItem(role)
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { size: "18" } }, [
                                _vm._v("mdi-pencil")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "red darken-3 px-5 ma-2",
                              attrs: {
                                fab: "",
                                depressed: "",
                                dark: "",
                                small: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.deleteItem(_vm.item)
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { size: "18" } }, [
                                _vm._v("mdi-close")
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
                            [_vm._v("No Role(s) Data Available !!!")]
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
                    [_vm._v("Updating Roles...")]
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
          attrs: { width: "550" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "subtitle-1 font-weight-bold",
                  attrs: { "primary-title": "" }
                },
                [_vm._v("New Role")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "mt-3" },
                [
                  _c(
                    "v-form",
                    {
                      ref: "Roleform",
                      attrs: { "lazy-validation": "" },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c("v-text-field", {
                        staticClass: "subtitle-2",
                        attrs: {
                          name: "name",
                          rules: _vm.nameRules,
                          label: "Name of Role",
                          placeholder: "Doctor",
                          outlined: ""
                        },
                        model: {
                          value: _vm.editedItem.name,
                          callback: function($$v) {
                            _vm.$set(_vm.editedItem, "name", $$v)
                          },
                          expression: "editedItem.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-textarea", {
                        staticClass: "subtitle-2",
                        attrs: {
                          outlined: "",
                          name: "description",
                          rules: _vm.nameRules,
                          label: "Role Description",
                          placeholder: "Input additional Information about Role"
                        },
                        model: {
                          value: _vm.editedItem.description,
                          callback: function($$v) {
                            _vm.$set(_vm.editedItem, "description", $$v)
                          },
                          expression: "editedItem.description"
                        }
                      })
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
                  _vm.editedIndex === -1
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "px-4",
                          attrs: {
                            color: "success darken-2",
                            dark: "",
                            tile: "",
                            depressed: ""
                          },
                          on: { click: _vm.submitRole }
                        },
                        [
                          _c("span", { staticClass: "caption" }, [
                            _vm._v("add")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editedIndex === 0
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "px-4",
                          attrs: {
                            color: "info darken-2",
                            dark: "",
                            tile: "",
                            depressed: ""
                          },
                          on: { click: _vm.updateRole }
                        },
                        [
                          _c("span", { staticClass: "caption" }, [
                            _vm._v("update")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4",
                      attrs: {
                        color: "red darken-2",
                        dark: "",
                        tile: "",
                        depressed: ""
                      },
                      on: { click: _vm.close }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles_details.vue?vue&type=template&id=3641d665&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles_details.vue?vue&type=template&id=3641d665& ***!
  \****************************************************************************************************************************************************************************************************************/
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
          height: "5",
          errorColor: "#CC0000"
        }
      }),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { outlined: "" } },
        [
          _vm.role
            ? _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "success darken-3 px-6",
                      attrs: { dark: "", depressed: "", tile: "" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(_vm.role)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "caption" }, [
                        _vm._v("delete role")
                      ])
                    ]
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
              )
            : _vm._e(),
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
                    {
                      staticClass:
                        "d-flex flex-column align-center justify-center",
                      attrs: { cols: "12", md: "3", sm: "6" }
                    },
                    [
                      _vm.role
                        ? _c(
                            "v-avatar",
                            { attrs: { size: "120" } },
                            [
                              _c("v-img", {
                                attrs: { src: _vm.getImage(_vm.role) }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.role
                        ? _c("p", { staticClass: "subtitle-2 mt-5 mb-1" }, [
                            _vm._v("Role Name: "),
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.role.name))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", { staticClass: "caption" }, [
                        _vm._v("Number of Staff: "),
                        _vm.role
                          ? _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.role.users.length))
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "9", sm: "6" } },
                    [
                      _c(
                        "v-responsive",
                        [
                          _c("v-img", {
                            staticClass: "mx-auto",
                            attrs: {
                              src: "/app_asset/undraw_multitasking_hqg3.svg",
                              width: "30%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.role
                        ? _c(
                            "p",
                            {
                              staticClass:
                                "subtitle-1 black--text mt-5 text-center"
                            },
                            [_vm._v(_vm._s(_vm.role.description))]
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
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-5", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "span",
                {
                  staticClass:
                    "subtitle-2 font-weight-regular text-uppercase mt-2"
                },
                [_vm._v("Staff Lists")]
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
          _c("v-divider"),
          _vm._v(" "),
          _vm.role
            ? _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.staff,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "item.name",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-avatar",
                                { attrs: { size: "30" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.getStaffImage(item) }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold mx-2"
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
                              )
                            ]
                          }
                        },
                        {
                          key: "item.email",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "span",
                                { staticClass: "subtitle-2 font-weight-bold" },
                                [_vm._v(_vm._s(item.email))]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.phone",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "span",
                                { staticClass: "subtitle-2 font-weight-bold" },
                                [_vm._v(_vm._s(item.phone))]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.job_title",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "span",
                                { staticClass: "subtitle-2 font-weight-bold" },
                                [_vm._v(_vm._s(item.job_title))]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.age",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "span",
                                { staticClass: "subtitle-2 font-weight-bold" },
                                [_vm._v(_vm._s(item.age) + " years")]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.gender",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "span",
                                { staticClass: "subtitle-2 font-weight-bold" },
                                [_vm._v(_vm._s(item.gender))]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      2277789161
                    )
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Roles.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Roles.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_312d3e3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=312d3e3c&scoped=true& */ "./resources/js/components/Roles.vue?vue&type=template&id=312d3e3c&scoped=true&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/components/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css& */ "./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_312d3e3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_312d3e3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "312d3e3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Roles.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Roles.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=style&index=0&id=312d3e3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_id_312d3e3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Roles.vue?vue&type=template&id=312d3e3c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Roles.vue?vue&type=template&id=312d3e3c&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_312d3e3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=312d3e3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles.vue?vue&type=template&id=312d3e3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_312d3e3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_312d3e3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Roles_details.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Roles_details.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_details_vue_vue_type_template_id_3641d665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles_details.vue?vue&type=template&id=3641d665& */ "./resources/js/components/Roles_details.vue?vue&type=template&id=3641d665&");
/* harmony import */ var _Roles_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles_details.vue?vue&type=script&lang=js& */ "./resources/js/components/Roles_details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_details_vue_vue_type_template_id_3641d665___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_details_vue_vue_type_template_id_3641d665___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Roles_details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Roles_details.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Roles_details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Roles_details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles_details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Roles_details.vue?vue&type=template&id=3641d665&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Roles_details.vue?vue&type=template&id=3641d665& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_details_vue_vue_type_template_id_3641d665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Roles_details.vue?vue&type=template&id=3641d665& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles_details.vue?vue&type=template&id=3641d665&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_details_vue_vue_type_template_id_3641d665___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_details_vue_vue_type_template_id_3641d665___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);