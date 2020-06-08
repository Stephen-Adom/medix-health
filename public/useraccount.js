(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["useraccount"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserAccount.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserAccount.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      UpdateRoledialog: false,
      staffRow: null
    };
  },
  props: {
    id: [Number]
  },
  created: function created() {
    this.getStaffRole;
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['allStaff', 'getAllRoles']), {
    staff: function staff() {
      var _this = this;

      return this.allStaff.find(function (staff) {
        return staff.id == _this.id;
      });
    },
    getStaffRole: function getStaffRole() {
      if (this.staff) {
        this.staffRow = this.staff.role.id;
      }
    },
    formatStatus: function formatStatus() {
      if (this.staff.status === 0) {
        return 'Inactive';
      } else {
        return 'Active';
      }
    },
    getColor: function getColor() {
      if (this.staff.status === 0) {
        return 'red darken-1';
      } else {
        return 'success darken-1';
      }
    },
    getImage: function getImage() {
      if (this.staff) {
        if (this.staff.role_id === 1) {
          return '/app_asset/doctor.jpg';
        } else if (this.staff.role_id === 2) {
          return '/app_asset/nurse.jpg';
        } else if (this.staff.role_id === 3) {
          return '/app_asset/pharmacist.jpg';
        } else if (this.staff.role_id === 4) {
          return '/app_asset/lab tech.jpg';
        } else if (this.staff.role_id === 5) {
          return '/app_asset/manager.png';
        }
      }
    }
  }),
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM Do, YYYY');
    },
    formatContact: function formatContact(value) {
      return '(+233)' + ' ' + value;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchStaff']), {
    formatContact: function formatContact(contact) {
      return '(+233)' + ' ' + contact.slice(1, 10);
    },
    goback: function goback() {
      this.$router.go(-1);
    },
    UpdateRole: function UpdateRole() {
      var _this2 = this;

      if (this.staffRow !== null) {
        axios.patch('/api/updateRole/' + this.id, {
          role: this.staffRow
        }).then(function (response) {
          if (response.data.success) {
            _this2.fetchStaff();

            _this2.UpdateRoledialog = false;
            _app__WEBPACK_IMPORTED_MODULE_1__["Toast"].fire({
              icon: 'success',
              title: 'Role Updated'
            });
          }
        });
      }
    },
    deactivate: function deactivate() {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You are making changes to this account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, deactivate!'
      }).then(function (result) {
        if (result.value) {
          axios.post('/api/deactivate', {
            id: _this3.staff.id
          }).then(function (response) {});

          _this3.fetchStaff();

          Swal.fire('Deactivated!', 'The account has been deactivated.', 'success');
        }
      });
    },
    activate: function activate() {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You are making changes to this account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007E33',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, activate!'
      }).then(function (result) {
        if (result.value) {
          axios.post('/api/activate', {
            id: _this4.staff.id
          }).then(function (response) {});

          _this4.fetchStaff();

          Swal.fire('Activated!', 'The account has been activated.', 'success');
        }
      });
    },
    getProfile: function getProfile(staff) {
      if (staff.image) {
        return '/storage/profiles/' + staff.image;
      } else {
        if (staff.gender === 'Male') {
          return '/app_asset/male-profile-2.jpg';
        } else {
          return '/app_asset/female-avatar.jpg';
        }
      }
    },
    format_status: function format_status(staff) {
      if (staff.status === 1) {
        return 'Active';
      } else {
        return 'Inactive';
      }
    },
    deleteItem: function deleteItem(item) {
      var _this5 = this;

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
            Swal.fire('Deleted!', 'The account has been deleted.', 'success');

            _this5.goback();
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserAccount.vue?vue&type=template&id=df48b472&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserAccount.vue?vue&type=template&id=df48b472& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5" },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "px-5 d-flex flex-column mt-3" },
            [
              _c("section", { staticClass: "d-flex justify-space-between" }, [
                _c(
                  "span",
                  { staticClass: "subtitle-1 font-weight-bold mt-4" },
                  [_vm._v("User Profile")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "red darken-2 px-5 ml-auto ma-2",
                        attrs: { tile: "", depressed: "", dark: "" },
                        on: { click: _vm.goback }
                      },
                      [_c("span", { staticClass: "caption" }, [_vm._v("back")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "success darken-2 px-5 ml-auto ma-2",
                        attrs: { tile: "", depressed: "", dark: "" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.UpdateRoledialog = true
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "caption" }, [
                          _vm._v("update role")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mt-4", attrs: { flat: "" } },
                [
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
                                "d-flex flex-column justify-center align-center",
                              attrs: { cols: "3" }
                            },
                            [
                              _vm.staff
                                ? _c(
                                    "v-avatar",
                                    { attrs: { size: "120" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.getProfile(_vm.staff)
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.staff
                                ? _c(
                                    "h5",
                                    {
                                      staticClass:
                                        "subtitle-1 font-weight-bold mt-2"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.staff.title) +
                                          " " +
                                          _vm._s(_vm.staff.firstname) +
                                          " " +
                                          _vm._s(_vm.staff.lastname)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "h5",
                                {
                                  staticClass:
                                    "subtitle-2 font-weight-bold grey--text"
                                },
                                [_vm._v("Status: " + _vm._s(_vm.formatStatus))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  staticClass: "ma-2",
                                  attrs: {
                                    color: "teal",
                                    "text-color": "white"
                                  }
                                },
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { left: "" } },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-account-circle")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.format_status(_vm.staff)))
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "9" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-space-between mb-3"
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "grey--text darken-5 font-weight-light subtitle-2 mb-1 mt-2"
                                    },
                                    [_vm._v("User Profile")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "red darken-3 px-7",
                                      attrs: {
                                        rounded: "",
                                        elevation: "10",
                                        dark: "",
                                        small: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteItem(_vm.staff)
                                        }
                                      }
                                    },
                                    [
                                      _c("span", { staticClass: "overline" }, [
                                        _vm._v("delete account")
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "mt-4" },
                                [
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Gender: "),
                                      _vm.staff
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [_vm._v(_vm._s(_vm.staff.gender))]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Date of Birth: "),
                                      _vm.staff
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("formatDate")(
                                                    _vm.staff.dob
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Phone Number: "),
                                      _vm.staff
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatContact(
                                                    _vm.staff.phone
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "mt-4" },
                                [
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Email: "),
                                      _vm.staff
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [_vm._v(_vm._s(_vm.staff.email))]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Job Title: "),
                                      _vm.staff
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.staff.job_title)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _c(
                                      "h5",
                                      { staticClass: "subtitle-2" },
                                      [
                                        _vm._v(
                                          "Role: \n                                        "
                                        ),
                                        _vm.staff
                                          ? _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.staff.role.name)
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-avatar",
                                          { attrs: { size: "30" } },
                                          [
                                            _c("v-img", {
                                              attrs: { src: _vm.getImage }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "mt-4" },
                                [
                                  _c("v-col", { attrs: { cols: "4" } }, [
                                    _vm.staff
                                      ? _c(
                                          "h5",
                                          { staticClass: "subtitle-2" },
                                          [
                                            _vm._v("Username: "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.staff.username)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { cols: "3" } }, [
                                    _c("h5", { staticClass: "subtitle-2" }, [
                                      _vm._v("Age: "),
                                      _vm.staff
                                        ? _c(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [_vm._v(_vm._s(_vm.staff.age))]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "d-flex justify-end pa-0",
                                      attrs: { cols: "5" }
                                    },
                                    [
                                      _vm.staff.status === 1
                                        ? _c(
                                            "v-btn",
                                            {
                                              staticClass: "ma-2 px-4",
                                              attrs: {
                                                tile: "",
                                                color: "red darken-2",
                                                depressed: "",
                                                dark: ""
                                              },
                                              on: { click: _vm.deactivate }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-lowercase caption"
                                                },
                                                [_vm._v("Deactivate")]
                                              )
                                            ]
                                          )
                                        : _c(
                                            "v-btn",
                                            {
                                              staticClass: "ma-2 px-4",
                                              attrs: {
                                                tile: "",
                                                color: "success darken-2",
                                                depressed: "",
                                                dark: ""
                                              },
                                              on: { click: _vm.activate }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-lowercase caption"
                                                },
                                                [_vm._v("activate")]
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
                              _c("v-divider")
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "px-5 d-flex flex-column mt-5" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-1 font-weight-bold mt-4 black--text text-uppercase"
                            },
                            [_vm._v("Biography")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _vm.staff
                            ? _c(
                                "div",
                                [
                                  _vm.staff.Biodata
                                    ? [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-regular"
                                          },
                                          [_vm._v(_vm._s(_vm.staff.Biodata))]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold font-italic grey--text darken-5"
                                          },
                                          [
                                            _vm._v(
                                              "Staff Biography Information Not Available!!!"
                                            )
                                          ]
                                        )
                                      ]
                                ],
                                2
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
            "v-dialog",
            {
              attrs: { width: "300" },
              model: {
                value: _vm.UpdateRoledialog,
                callback: function($$v) {
                  _vm.UpdateRoledialog = $$v
                },
                expression: "UpdateRoledialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    {
                      staticClass: "subtitle-1 text-uppercase font-weight-bold",
                      attrs: { "primary-title": "" }
                    },
                    [_vm._v("\n                Update Role\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-radio-group",
                        {
                          model: {
                            value: _vm.staffRow,
                            callback: function($$v) {
                              _vm.staffRow = $$v
                            },
                            expression: "staffRow"
                          }
                        },
                        [
                          _vm._l(_vm.getAllRoles, function(item) {
                            return [
                              _c("v-radio", {
                                key: item.id,
                                attrs: { value: item.id },
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
                                                "font-weight-bold mt-1"
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
                          attrs: { color: "primary", text: "" },
                          on: { click: _vm.UpdateRole }
                        },
                        [_vm._v("update")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "grey", text: "" },
                          on: {
                            click: function($event) {
                              _vm.UpdateRoledialog = false
                            }
                          }
                        },
                        [_vm._v("cancel")]
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

/***/ "./resources/js/components/UserAccount.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/UserAccount.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAccount_vue_vue_type_template_id_df48b472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAccount.vue?vue&type=template&id=df48b472& */ "./resources/js/components/UserAccount.vue?vue&type=template&id=df48b472&");
/* harmony import */ var _UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAccount.vue?vue&type=script&lang=js& */ "./resources/js/components/UserAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAccount_vue_vue_type_template_id_df48b472___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserAccount_vue_vue_type_template_id_df48b472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserAccount.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/UserAccount.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserAccount.vue?vue&type=template&id=df48b472&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UserAccount.vue?vue&type=template&id=df48b472& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_df48b472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserAccount.vue?vue&type=template&id=df48b472& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserAccount.vue?vue&type=template&id=df48b472&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_df48b472___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_df48b472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);