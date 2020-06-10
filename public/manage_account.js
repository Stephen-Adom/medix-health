(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage_account"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageAccount.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingTable: false,
      loading_dialog: false,
      dob_modal: false,
      valid: false,
      loadingData: false,
      search: '',
      dialog: false,
      genderOptions: ['Male', 'Female'],
      titleOptions: ['Mr', 'Mrs', 'Miss', 'Dr'],
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      ageRules: [function (v) {
        return !!v || 'Age is required';
      }],
      statusRules: [function (v) {
        return !!v || 'Status is required';
      }],
      dobRules: [function (v) {
        return !!v || 'Dob is required';
      }],
      roleRules: [function (v) {
        return !!v || 'Role is required';
      }],
      jobRules: [function (v) {
        return !!v || 'Job Title is required';
      }],
      addressRules: [function (v) {
        return !!v || 'Address Title is required';
      }],
      genderRules: [function (v) {
        return !!v || 'Gender is required';
      }],
      titleRules: [function (v) {
        return !!v || 'Title is required';
      }],
      phoneRules: [function (v) {
        return !!v || 'Phone number is required';
      }, function (v) {
        return v && v.length === 10 || 'Phone Number must be equal to 10 characters';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }],
      rolesOptions: [],
      headers: [{
        text: 'Profile',
        align: 'start',
        value: 'image'
      }, {
        text: 'Full Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Email',
        value: 'email',
        align: 'center'
      }, {
        text: 'Phone Number',
        value: 'phone'
      }, {
        text: 'Age',
        value: 'age'
      }, {
        text: 'Genger',
        value: 'gender'
      }, {
        text: 'Job Title',
        value: 'role.name'
      }, {
        text: 'Status',
        value: 'status',
        align: 'center'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }],
      staff: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        age: '',
        dob: '',
        gender: '',
        address: '',
        role: null,
        status: null,
        job_title: ''
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['allStaff', 'getAllRoles']), {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Staff' : 'Edit Staff Info';
    },
    filteredStaff: function filteredStaff() {
      var _this = this;

      return this.allStaff.filter(function (staff) {
        return staff.firstname.toLowerCase().match(_this.search.toLowerCase()) || staff.lastname.toLowerCase().match(_this.search.toLowerCase());
      });
    }
  }),
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    allStaff: function allStaff() {
      if (this.allStaff) {
        this.$refs.topProgress.done();
        this.loadingTable = false;
      } else {
        this.$refs.topProgress.done();
        this.loadingTable = false;
      }
    },
    getAllRoles: function getAllRoles() {
      if (this.getAllRoles) {
        this.rolesOptions = this.getAllRoles;
      }
    }
  },
  created: function created() {
    this.fetchStaff();
    this.getRoles();
    this.loadingTable = true;
  },
  mounted: function mounted() {
    this.$refs.topProgress.start();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['fetchStaff', 'getRoles', 'newStaff', 'fetch_doctors', 'fetch_nurses', 'fetch_lab_techs', 'fetch_managers', 'fetch_pharmacists']), {
    getid: function getid(item) {
      this.$router.push({
        name: 'useraccount',
        params: {
          id: item.id
        }
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.staff.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
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
          axios["delete"]('/api/delete_staff/' + item.id).then(function (response) {
            var index = _this2.allStaff.indexOf(item);

            _this2.allStaff.splice(index, 1);

            Swal.fire('Deleted!', 'The account has been deleted.', 'success');
          });
        }
      });
    },
    close: function close() {
      this.dialog = false;
      this.$refs.staffform.reset();
      this.$refs.staffform.resetValidation();
    },
    save: function save() {
      var _this3 = this;

      if (this.$refs.staffform.validate()) {
        this.$refs.topProgress.start();
        this.loading_dialog = true;
        axios.post('/api/store_staff', {
          staff: this.editedItem
        }).then(function (response) {
          if (response.data.success) {
            _this3.$refs.topProgress.done();

            _this3.loading_dialog = false;

            _this3.fetchStaff(); // this.newStaff(response.data.user);


            _this3.dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'success',
              title: 'New Staff Account Created'
            });
          }

          if (response.data.username_error) {
            _this3.$refs.topProgress.fail();

            _this3.loading_dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'error',
              title: response.data.username_error
            });
          }

          if (response.data.email_error) {
            _this3.$refs.topProgress.fail();

            _this3.loading_dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'error',
              title: response.data.email_error
            });
          }

          if (response.data.contact_error) {
            _this3.$refs.topProgress.fail();

            _this3.loading_dialog = false;
            _app__WEBPACK_IMPORTED_MODULE_0__["Toast"].fire({
              icon: 'error',
              title: response.data.contact_error
            });
          }
        });
      } else {
        Swal.fire('No Data!', 'Enter Data before submission', 'info');
      }
    },
    getColor: function getColor(status) {
      if (status === 1) {
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
      if (status === 1) {
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
    getImage: function getImage(item) {
      if (item.image) {
        return '/staff/profiles/' + item.image;
      } else {
        if (item.gender === "Male") {
          return '/app_asset/male-profile-2.jpg';
        } else {
          return '/app_asset/female-avatar.jpg';
        }
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.status_chip[data-v-ed281ea6]{\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10);\n}\n.cancelAccount[data-v-ed281ea6]{\n\ttext-decoration: line-through;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true& ***!
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
      _c("v-row", { staticClass: "px-5" }, [
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c("h5", { staticClass: "title font-weight-bold" }, [
            _vm._v("All Staff")
          ]),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "subtitle-2 font-weight-regular grey--text" },
            [
              _vm._v(
                "Compiled list of All Staff Records available at one place"
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ml-auto d-flex flex-column justify-end" },
          [
            _vm.allStaff
              ? _c(
                  "span",
                  { staticClass: "subtitle-2" },
                  [
                    _c("v-icon", { attrs: { color: "success darken-2" } }, [
                      _vm._v("mdi-account-group")
                    ]),
                    _vm._v(" Number of Staff: "),
                    _c(
                      "span",
                      { staticClass: "font-weight-bold black--text" },
                      [_vm._v(_vm._s(_vm.allStaff.length))]
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
                      { on: { click: _vm.fetch_doctors } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Doctor")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetch_nurses } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Nurse")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetch_lab_techs } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Lab Technician")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetch_pharmacists } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Pharmacist")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetch_managers } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("Clinic Manager")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { on: { click: _vm.fetchStaff } },
                      [
                        _c("v-list-item-title", { staticClass: "caption" }, [
                          _vm._v("All")
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
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mt-10 px-5" },
        [
          _c(
            "v-btn",
            {
              staticClass: "success darken-2 px-5",
              attrs: { tile: "", depressed: "" },
              on: {
                click: function($event) {
                  _vm.dialog = true
                }
              }
            },
            [
              _c("v-icon", { attrs: { left: "", size: "20" } }, [
                _vm._v("mdi-account")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "caption" }, [_vm._v("New Staff")])
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
              label: "Staff Info",
              outlined: "",
              clearable: "",
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
      _vm.allStaff.length
        ? _c(
            "v-row",
            { staticClass: "mt-3" },
            _vm._l(_vm.filteredStaff, function(staff) {
              return _c(
                "v-col",
                {
                  key: staff.id,
                  staticClass: "staff_col",
                  attrs: { cols: "6", md: "3", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      attrs: { outlined: "", hover: "", "max-height": "100vh" }
                    },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "px-3 py-5" },
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
                                        attrs: { src: _vm.getImage(staff) }
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
                                        "subtitle-2 font-weight-bold black--text text-no-wrap d-inline-block text-truncate"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(staff.title) +
                                          " " +
                                          _vm._s(staff.firstname) +
                                          " " +
                                          _vm._s(staff.lastname)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-1 d-flex flex-column" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "subtitle-2 font-weight-bold"
                                        },
                                        [_vm._v(_vm._s(staff.role.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "caption font-weight-bold mt-1"
                                        },
                                        [
                                          _vm._v("Status: "),
                                          _c(
                                            "span",
                                            { staticClass: "success--text" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatStatus(staff.status)
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
                              _c(
                                "v-col",
                                { staticClass: "px-2", attrs: { cols: "7" } },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "subtitle-2 font-weight-light black--text text-no-wrap d-inline-block text-truncate"
                                    },
                                    [_vm._v(_vm._s(staff.job_title))]
                                  )
                                ]
                              ),
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
                                    [_vm._v(_vm._s(staff.gender))]
                                  ),
                                  _vm._v(" "),
                                  _c("v-icon", { attrs: { color: "pink" } }, [
                                    _vm._v(
                                      _vm._s(_vm.formatGender(staff.gender))
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
                            "v-btn",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                color: "info darken-2",
                                depressed: "",
                                small: "",
                                dark: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.getid(staff)
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                { attrs: { size: "14", left: "" } },
                                [_vm._v("mdi-account-details")]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("Details")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                color: "red darken-3",
                                depressed: "",
                                small: "",
                                dark: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.deleteItem(staff)
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                { attrs: { size: "14", left: "" } },
                                [_vm._v("mdi-close")]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "caption" }, [
                                _vm._v("delete")
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
                            [_vm._v("No Staff(s) Data Available !!!")]
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
                        "subtitle-2 font-weight-bold font-italic white--text"
                    },
                    [_vm._v("Adding staff account...")]
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
          attrs: { width: "700", scrollable: "", persistent: "" },
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
                [_vm._v("New Staff")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "mt-4", staticStyle: { height: "600px" } },
                [
                  _c(
                    "v-form",
                    {
                      ref: "staffform",
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
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  dense: "",
                                  color: "success darken-1",
                                  rules: _vm.titleRules,
                                  items: _vm.titleOptions,
                                  label: "Title",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.editedItem.title,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "title",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.nameRules,
                                  label: "First Name"
                                },
                                model: {
                                  value: _vm.editedItem.firstname,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "firstname",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.firstname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.nameRules,
                                  label: "Last Name"
                                },
                                model: {
                                  value: _vm.editedItem.lastname,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "lastname",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.lastname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.nameRules,
                                  label: "Username"
                                },
                                model: {
                                  value: _vm.editedItem.username,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "username",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.username"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c(
                                "v-dialog",
                                {
                                  ref: "dob_dialog",
                                  attrs: {
                                    "return-value": _vm.editedItem.dob,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.editedItem,
                                        "dob",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.editedItem,
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
                                                  color: "success",
                                                  rules: _vm.dobRules
                                                },
                                                model: {
                                                  value: _vm.editedItem.dob,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "dob",
                                                      typeof $$v === "string"
                                                        ? $$v.trim()
                                                        : $$v
                                                    )
                                                  },
                                                  expression: "editedItem.dob"
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
                                      _vm.dob_modal =
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
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
                                        value: _vm.editedItem.dob,
                                        callback: function($$v) {
                                          _vm.$set(_vm.editedItem, "dob", $$v)
                                        },
                                        expression: "editedItem.dob"
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
                                          attrs: { text: "", color: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.dob_dialog.save(
                                                _vm.editedItem.dob
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
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.emailRules,
                                  label: "Email"
                                },
                                model: {
                                  value: _vm.editedItem.email,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "email",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.phoneRules,
                                  counter: 10,
                                  label: "Phone Number"
                                },
                                model: {
                                  value: _vm.editedItem.phone,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "phone",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.phone"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.ageRules,
                                  label: "Age"
                                },
                                model: {
                                  value: _vm.editedItem.age,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "age",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.age"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  dense: "",
                                  color: "success darken-1",
                                  rules: _vm.genderRules,
                                  items: _vm.genderOptions,
                                  label: "Gender",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.editedItem.gender,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "gender",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.gender"
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
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.addressRules,
                                  label: "Address"
                                },
                                model: {
                                  value: _vm.editedItem.address,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "address",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.address"
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
                                  color: "success darken-1",
                                  outlined: "",
                                  dense: "",
                                  rules: _vm.jobRules,
                                  label: "Job Title"
                                },
                                model: {
                                  value: _vm.editedItem.job_title,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "job_title",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "editedItem.job_title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "d-flex", attrs: { cols: "12" } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "mt-7 mr-3 subtitle-1 font-weight-bold",
                                  attrs: { for: "status" }
                                },
                                [_vm._v("Role:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "", rules: _vm.roleRules },
                                  model: {
                                    value: _vm.editedItem.role,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedItem, "role", $$v)
                                    },
                                    expression: "editedItem.role"
                                  }
                                },
                                [
                                  _vm._l(_vm.getAllRoles, function(item) {
                                    return [
                                      _c("v-radio", {
                                        key: item.id,
                                        staticClass: "ma-2",
                                        attrs: {
                                          value: item.id,
                                          color: "success darken-1"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "label",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "mt-1 subtitle-2 font-weight-bold"
                                                    },
                                                    [_vm._v(_vm._s(item.name))]
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ]
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "d-flex",
                              attrs: { cols: "12", sm: "12", md: "12" }
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "mt-5 mr-3 subtitle-1 font-weight-bold",
                                  attrs: { for: "status" }
                                },
                                [_vm._v("Status:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "", rules: _vm.statusRules },
                                  model: {
                                    value: _vm.editedItem.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedItem, "status", $$v)
                                    },
                                    expression: "editedItem.status"
                                  }
                                },
                                [
                                  _c("v-radio", {
                                    staticClass: "font-weight-bold subtitle-2",
                                    attrs: {
                                      label: "Active",
                                      value: "1",
                                      color: "success darken-1"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    staticClass: "font-weight-bold subtitle-2",
                                    attrs: {
                                      label: "Inactive",
                                      value: "0",
                                      color: "red"
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
                      staticClass: "px-4 ma-2",
                      attrs: {
                        color: "success darken-2",
                        depressed: "",
                        dark: "",
                        tile: ""
                      },
                      on: { click: _vm.save }
                    },
                    [_c("span", { staticClass: "caption" }, [_vm._v("save")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-4 ma-2",
                      attrs: {
                        color: "red darken-3",
                        depressed: "",
                        dark: "",
                        tile: ""
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

/***/ "./resources/js/components/ManageAccount.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ManageAccount.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageAccount_vue_vue_type_template_id_ed281ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true& */ "./resources/js/components/ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true&");
/* harmony import */ var _ManageAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageAccount.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css& */ "./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ManageAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageAccount_vue_vue_type_template_id_ed281ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageAccount_vue_vue_type_template_id_ed281ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed281ea6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageAccount.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ManageAccount.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=style&index=0&id=ed281ea6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_style_index_0_id_ed281ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_template_id_ed281ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageAccount.vue?vue&type=template&id=ed281ea6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_template_id_ed281ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageAccount_vue_vue_type_template_id_ed281ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);