module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _media_NewMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media/NewMedia */ \"./client/media/NewMedia.js\");\n/* harmony import */ var _media_PlayMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/PlayMedia */ \"./client/media/PlayMedia.js\");\n/* harmony import */ var _media_EditMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./media/EditMedia */ \"./client/media/EditMedia.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass MainRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ data }) {\n    super();\n    this.data = data;\n  }\n  // Removes the server-side injected CSS when React component mounts\n  componentDidMount() {\n    const jssStyles = document.getElementById('jss-server-side');\n    if (jssStyles && jssStyles.parentNode) {\n      jssStyles.parentNode.removeChild(jssStyles);\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/', component: _core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/users', component: _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/signup', component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/signin', component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { path: '/user/edit/:userId', component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/user/:userId', component: _user_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { path: '/media/new', component: _media_NewMedia__WEBPACK_IMPORTED_MODULE_10__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { path: '/media/edit/:mediaId', component: _media_EditMedia__WEBPACK_IMPORTED_MODULE_12__[\"default\"] }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/media/:mediaId', render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_media_PlayMedia__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _extends({}, props, { data: this.data })) })\n      )\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainRouter);\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nconst PrivateRoute = (_ref) => {\n  let { component: Component } = _ref,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, { render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], { to: {\n        pathname: '/signin',\n        state: { from: props.location }\n      } }) }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrivateRoute);\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Signin extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    }, this.clickSubmit = () => {\n      const user = {\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n\n      Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_10__[\"signin\"])(user).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].authenticate(data, () => {\n            this.setState({ redirectToReferrer: true });\n          });\n        }\n      });\n    }, this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    const { from } = this.props.location.state || {\n      from: {\n        pathname: '/'\n      }\n    };\n    const { redirectToReferrer } = this.state;\n    if (redirectToReferrer) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Redirect\"], { to: from });\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'headline', component: 'h2', className: classes.title },\n          'Sign In'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        ' ',\n        this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.state.error\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n\nSignin.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(Signin));\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! exports provided: signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\nconst signin = user => {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst signout = () => {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n  signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    //optional\n    Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"signout\"])().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _media_MediaList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/MediaList */ \"./client/media/MediaList.js\");\n/* harmony import */ var _media_api_media_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/api-media.js */ \"./client/media/api-media.js\");\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    margin: `${theme.spacing.unit * 5}px 30px`\n  },\n  title: {\n    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px 0px`,\n    color: theme.palette.text.secondary,\n    fontSize: '1em'\n  },\n  media: {\n    minHeight: 330\n  }\n});\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      media: []\n    }, this.componentDidMount = () => {\n      Object(_media_api_media_js__WEBPACK_IMPORTED_MODULE_6__[\"listPopular\"])().then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          this.setState({ media: data });\n        }\n      });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { type: 'headline', component: 'h2', className: classes.title },\n        'Popular Videos'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_media_MediaList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { media: this.state.media })\n    );\n  }\n}\n\nHome.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Home));\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n/* harmony import */ var material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-icons/AddBox */ \"material-ui-icons/AddBox\");\n/* harmony import */ var material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) return { color: '#f99085' };else return { color: '#efdcd5' };\n};\nconst Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"withRouter\"])(({ history }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n  material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a,\n  { position: 'static' },\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a,\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Typography__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { type: 'title', color: 'inherit' },\n      'You-Got-Served'\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n        { to: '/' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { 'aria-label': 'Home', style: isActive(history, \"/\") },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, null)\n        )\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { style: { 'position': 'absolute', 'right': '10px' } },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'span',\n        { style: { 'float': 'right' } },\n        !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: '/signup' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/signup\") },\n              'Sign up'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: '/signin' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/signin\") },\n              'Sign In'\n            )\n          )\n        ),\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: '/media/new' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/media/new\") },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_6___default.a, { style: { marginRight: '8px' } }),\n              ' Add Media'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n            { to: \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { style: isActive(history, \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id) },\n              'My Profile'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,\n            { color: 'inherit', onClick: () => {\n                _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].signout(() => history.push('/'));\n              } },\n            'Sign out'\n          )\n        )\n      )\n    )\n  )\n));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/media/DeleteMedia.js":
/*!*************************************!*\
  !*** ./client/media/DeleteMedia.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_media_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nclass DeleteMedia extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      redirect: false,\n      open: false\n    }, this.clickButton = () => {\n      this.setState({ open: true });\n    }, this.deleteMedia = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isAuthenticated();\n      Object(_api_media_js__WEBPACK_IMPORTED_MODULE_7__[\"remove\"])({\n        mediaId: this.props.mediaId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          this.setState({ redirect: true });\n        }\n      });\n    }, this.handleRequestClose = () => {\n      this.setState({ open: false });\n    }, _temp;\n  }\n\n  render() {\n    const redirect = this.state.redirect;\n    if (redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Redirect\"], { to: '/' });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'span',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a,\n        { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a,\n        { open: this.state.open, onClose: this.handleRequestClose },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogTitle\"],\n          null,\n          \"Delete \" + this.props.mediaTitle\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogContentText\"],\n            null,\n            'Confirm to delete ',\n            this.props.mediaTitle,\n            ' from your account.'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { onClick: this.handleRequestClose, color: 'primary' },\n            'Cancel'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { onClick: this.deleteMedia, variant: 'raised', color: 'secondary', autoFocus: 'autoFocus' },\n            'Confirm'\n          )\n        )\n      )\n    );\n  }\n}\n\nDeleteMedia.propTypes = {\n  mediaId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  mediaTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteMedia);\n\n//# sourceURL=webpack:///./client/media/DeleteMedia.js?");

/***/ }),

/***/ "./client/media/EditMedia.js":
/*!***********************************!*\
  !*** ./client/media/EditMedia.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-icons/FileUpload */ \"material-ui-icons/FileUpload\");\n/* harmony import */ var material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _api_media_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 500,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  title: {\n    margin: theme.spacing.unit * 2,\n    color: theme.palette.protectedTitle,\n    fontSize: '1em'\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  },\n  input: {\n    display: 'none'\n  },\n  filename: {\n    marginLeft: '10px'\n  }\n});\n\nclass EditMedia extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.componentDidMount = () => {\n      Object(_api_media_js__WEBPACK_IMPORTED_MODULE_10__[\"read\"])({ mediaId: this.match.params.mediaId }).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ media: data });\n        }\n      });\n    };\n\n    this.clickSubmit = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated();\n      Object(_api_media_js__WEBPACK_IMPORTED_MODULE_10__[\"update\"])({\n        mediaId: this.state.media._id\n      }, {\n        t: jwt.token\n      }, this.state.media).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ error: '', redirect: true, media: data });\n        }\n      });\n    };\n\n    this.handleChange = name => event => {\n      let updatedMedia = this.state.media;\n      updatedMedia[name] = event.target.value;\n      this.setState({ media: updatedMedia });\n    };\n\n    this.state = {\n      media: { title: '', description: '', genre: '' },\n      redirect: false,\n      error: ''\n    };\n    this.match = match;\n  }\n\n  render() {\n    const { classes } = this.props;\n    if (this.state.redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Redirect\"], { to: '/media/' + this.state.media._id });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_2___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,\n          { type: 'headline', component: 'h1', className: classes.title },\n          'Edit Video Details'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, { id: 'title', label: 'Title', className: classes.textField, value: this.state.media.title, onChange: this.handleChange('title'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          id: 'multiline-flexible',\n          label: 'Description',\n          multiline: true,\n          rows: '2',\n          value: this.state.media.description,\n          onChange: this.handleChange('description'),\n          className: classes.textField,\n          margin: 'normal'\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, { id: 'genre', label: 'Genre', className: classes.textField, value: this.state.media.genre, onChange: this.handleChange('genre'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        ' ',\n        this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_7___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.state.error\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n\nEditMedia.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_9__[\"withStyles\"])(styles)(EditMedia));\n\n//# sourceURL=webpack:///./client/media/EditMedia.js?");

/***/ }),

/***/ "./client/media/Media.js":
/*!*******************************!*\
  !*** ./client/media/Media.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n/* harmony import */ var material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(material_ui_Divider__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _DeleteMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DeleteMedia */ \"./client/media/DeleteMedia.js\");\n/* harmony import */ var _MediaPlayer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MediaPlayer */ \"./client/media/MediaPlayer.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    padding: '20px'\n  },\n  header: {\n    padding: '0px 16px 16px 12px'\n  },\n  action: {\n    margin: '24px 20px 0px 0px',\n    display: 'inline-block',\n    fontSize: '1.15em',\n    color: theme.palette.secondary.dark\n  },\n  avatar: {\n    color: theme.palette.primary.contrastText,\n    backgroundColor: theme.palette.primary.light\n  }\n});\n\nclass Media extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const mediaUrl = this.props.media._id ? `/api/media/video/${this.props.media._id}` : null;\n    const nextUrl = this.props.nextUrl;\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__[\"CardHeader\"], { className: classes.header,\n        title: this.props.media.title,\n        action: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          { className: classes.action },\n          this.props.media.views + ' views'\n        ),\n        subheader: this.props.media.genre\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MediaPlayer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], { srcUrl: mediaUrl, nextUrl: nextUrl, handleAutoplay: this.props.handleAutoplay }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_List__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { dense: true },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Avatar__WEBPACK_IMPORTED_MODULE_7___default.a,\n              { className: classes.avatar },\n              this.props.media.postedBy.name && this.props.media.postedBy.name[0]\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: this.props.media.postedBy.name,\n            secondary: \"Published on \" + new Date(this.props.media.created).toDateString() }),\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id == this.props.media.postedBy._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemSecondaryAction\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"],\n              { to: \"/media/edit/\" + this.props.media._id },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a,\n                { 'aria-label': 'Edit', color: 'secondary' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default.a, null)\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteMedia__WEBPACK_IMPORTED_MODULE_12__[\"default\"], { mediaId: this.props.media._id, mediaTitle: this.props.media.title })\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: this.props.media.description })\n        )\n      )\n    );\n  }\n}\n\nMedia.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  media: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  nextUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  handleAutoplay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Media));\n\n//# sourceURL=webpack:///./client/media/Media.js?");

/***/ }),

/***/ "./client/media/MediaList.js":
/*!***********************************!*\
  !*** ./client/media/MediaList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_GridList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/GridList */ \"material-ui/GridList\");\n/* harmony import */ var material_ui_GridList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_GridList__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    background: theme.palette.background.paper,\n    textAlign: 'left',\n    padding: '8px 16px'\n  },\n  gridList: {\n    width: '100%',\n    minHeight: 180,\n    padding: '0px 0 10px'\n  },\n  title: {\n    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,\n    color: theme.palette.openTitle,\n    width: '100%'\n  },\n  tile: {\n    textAlign: 'center',\n    maxHeight: '100%'\n  },\n  tileBar: {\n    backgroundColor: 'rgba(0, 0, 0, 0.72)',\n    textAlign: 'left',\n    height: '55px'\n  },\n  tileTitle: {\n    fontSize: '1.1em',\n    marginBottom: '5px',\n    color: 'rgb(193, 173, 144)',\n    display: \"block\"\n  },\n  tileGenre: {\n    float: 'right',\n    color: 'rgb(193, 182, 164)',\n    marginRight: '8px'\n  }\n});\n\nclass MediaList extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: classes.root },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_GridList__WEBPACK_IMPORTED_MODULE_3___default.a,\n        { className: classes.gridList, cols: 3 },\n        this.props.media.map((tile, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_GridList__WEBPACK_IMPORTED_MODULE_3__[\"GridListTile\"],\n          { key: i, className: classes.tile },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n            { to: \"/media/\" + tile._id },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, { url: '/api/media/video/' + tile._id, width: '100%', height: 'inherit', style: { maxHeight: '100%' } })\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_GridList__WEBPACK_IMPORTED_MODULE_3__[\"GridListTileBar\"], { className: classes.tileBar,\n            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n              { to: \"/media/\" + tile._id, className: classes.tileTitle },\n              ' ',\n              tile.title,\n              ' '\n            ),\n            subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'span',\n              null,\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                tile.views,\n                ' views'\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                { className: classes.tileGenre },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  'em',\n                  null,\n                  tile.genre\n                )\n              )\n            )\n          })\n        ))\n      )\n    );\n  }\n}\nMediaList.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(MediaList));\n\n//# sourceURL=webpack:///./client/media/MediaList.js?");

/***/ }),

/***/ "./client/media/MediaPlayer.js":
/*!*************************************!*\
  !*** ./client/media/MediaPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ \"screenfull\");\n/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_Progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/Progress */ \"material-ui/Progress\");\n/* harmony import */ var material_ui_Progress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_Progress__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var material_ui_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! material-ui/Input */ \"material-ui/Input\");\n/* harmony import */ var material_ui_Input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_Input__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  flex: {\n    display: 'flex'\n  },\n  primaryDashed: {\n    background: 'none',\n    backgroundColor: theme.palette.secondary.main\n  },\n  primaryColor: {\n    backgroundColor: '#6969694f'\n  },\n  dashed: {\n    animation: 'none'\n  },\n  controls: {\n    position: 'relative',\n    backgroundColor: '#ababab52'\n  },\n  rangeRoot: {\n    position: 'absolute',\n    width: '100%',\n    top: '-7px',\n    zIndex: '3456',\n    '-webkit-appearance': 'none',\n    backgroundColor: 'rgba(0,0,0,0)'\n  },\n  videoError: {\n    width: '100%',\n    textAlign: 'center',\n    color: theme.palette.primary.light\n  }\n});\n\nclass MediaPlayer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      playing: true,\n      volume: 0.8,\n      muted: false,\n      played: 0,\n      loaded: 0,\n      duration: 0,\n      ended: false,\n      playbackRate: 1.0,\n      loop: false,\n      fullscreen: false,\n      videoError: false\n    }, this.componentDidMount = () => {\n      if (screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.enabled) {\n        screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.on('change', () => {\n          let fullscreen = screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.isFullscreen ? true : false;\n          this.setState({ fullscreen: fullscreen });\n        });\n      }\n    }, this.setVolume = e => {\n      this.setState({ volume: parseFloat(e.target.value) });\n    }, this.toggleMuted = () => {\n      this.setState({ muted: !this.state.muted });\n    }, this.playPause = () => {\n      this.setState({ playing: !this.state.playing });\n    }, this.onLoop = () => {\n      this.setState({ loop: !this.state.loop });\n    }, this.onProgress = progress => {\n      // We only want to update time slider if we are not currently seeking\n      if (!this.state.seeking) {\n        this.setState({ played: progress.played, loaded: progress.loaded });\n      }\n    }, this.onClickFullscreen = () => {\n      screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.request(Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"findDOMNode\"])(this.player));\n    }, this.onEnded = () => {\n      if (this.state.loop) {\n        this.setState({ playing: true });\n      } else {\n        this.props.handleAutoplay(() => {\n          this.setState({ ended: true, playing: false });\n        });\n      }\n    }, this.onDuration = duration => {\n      this.setState({ duration });\n    }, this.onSeekMouseDown = e => {\n      this.setState({ seeking: true });\n    }, this.onSeekChange = e => {\n      this.setState({ played: parseFloat(e.target.value), ended: parseFloat(e.target.value) >= 1 });\n    }, this.onSeekMouseUp = e => {\n      this.setState({ seeking: false });\n      this.player.seekTo(parseFloat(e.target.value));\n    }, this.ref = player => {\n      this.player = player;\n    }, this.format = seconds => {\n      const date = new Date(seconds * 1000);\n      const hh = date.getUTCHours();\n      let mm = date.getUTCMinutes();\n      const ss = ('0' + date.getUTCSeconds()).slice(-2);\n      if (hh) {\n        mm = ('0' + date.getUTCMinutes()).slice(-2);\n        return `${hh}:${mm}:${ss}`;\n      }\n      return `${mm}:${ss}`;\n    }, this.videoError = e => {\n      this.setState({ videoError: true });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    const { playing, ended, volume, muted, loop, played, loaded, duration, playbackRate, fullscreen, videoError } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.flex },\n        videoError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'p',\n          { className: classes.videoError },\n          'Video Error. Try again later.'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_8___default.a, {\n          ref: this.ref,\n          width: fullscreen ? '100%' : 'inherit',\n          height: fullscreen ? '100%' : 'inherit',\n          style: fullscreen ? { position: 'relative' } : { maxHeight: '500px' },\n          config: { attributes: { style: { height: '100%', width: '100%' } } },\n          url: this.props.srcUrl,\n          playing: playing,\n          loop: loop,\n          playbackRate: playbackRate,\n          volume: volume,\n          muted: muted,\n          onEnded: this.onEnded,\n          onError: this.videoError,\n          onProgress: this.onProgress,\n          onDuration: this.onDuration }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.controls },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Progress__WEBPACK_IMPORTED_MODULE_9__[\"LinearProgress\"], { color: 'primary', variant: 'buffer', value: played * 100, valueBuffer: loaded * 100, style: { width: '100%' }, classes: {\n            colorPrimary: classes.primaryColor,\n            dashedColorPrimary: classes.primaryDashed,\n            dashed: classes.dashed\n          } }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'range', min: 0, max: 1,\n          value: played, step: 'any',\n          onMouseDown: this.onSeekMouseDown,\n          onChange: this.onSeekChange,\n          onMouseUp: this.onSeekMouseUp,\n          className: classes.rangeRoot }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { color: 'primary', onClick: this.playPause },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default.a,\n            null,\n            playing ? 'pause' : ended ? 'replay' : 'play_arrow'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { disabled: !this.props.nextUrl, color: 'primary' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"],\n            { to: this.props.nextUrl, style: { color: 'inherit' } },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default.a,\n              null,\n              'skip_next'\n            )\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { color: 'primary', onClick: this.toggleMuted },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default.a,\n            null,\n            volume > 0 && !muted && 'volume_up' || muted && 'volume_off' || volume == 0 && 'volume_mute'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'range', min: 0, max: 1, step: 'any', value: muted ? 0 : volume, onChange: this.setVolume, style: { verticalAlign: 'middle' } }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { color: loop ? 'primary' : 'default', onClick: this.onLoop },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default.a,\n            null,\n            'loop'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { color: 'primary', onClick: this.onClickFullscreen },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_4___default.a,\n            null,\n            'fullscreen'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          { style: { float: 'right', padding: '10px', color: '#b83423' } },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'time',\n            { dateTime: `P${Math.round(duration * played)}S` },\n            this.format(duration * played)\n          ),\n          ' / ',\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'time',\n            { dateTime: `P${Math.round(duration)}S` },\n            this.format(duration)\n          )\n        )\n      )\n    );\n  }\n}\n\nMediaPlayer.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,\n  srcUrl: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,\n  nextUrl: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,\n  handleAutoplay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(styles)(MediaPlayer));\n\n//# sourceURL=webpack:///./client/media/MediaPlayer.js?");

/***/ }),

/***/ "./client/media/NewMedia.js":
/*!**********************************!*\
  !*** ./client/media/NewMedia.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-icons/FileUpload */ \"material-ui-icons/FileUpload\");\n/* harmony import */ var material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _api_media_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 500,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  title: {\n    margin: theme.spacing.unit * 2,\n    color: theme.palette.protectedTitle,\n    fontSize: '1em'\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  },\n  input: {\n    display: 'none'\n  },\n  filename: {\n    marginLeft: '10px'\n  }\n});\n\nclass NewMedia extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      title: '',\n      video: '',\n      description: '',\n      genre: '',\n      redirect: false,\n      error: '',\n      mediaId: ''\n    }, this.componentDidMount = () => {\n      this.mediaData = new FormData();\n    }, this.clickSubmit = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAuthenticated();\n      Object(_api_media_js__WEBPACK_IMPORTED_MODULE_10__[\"create\"])({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, this.mediaData).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ redirect: true, mediaId: data._id });\n        }\n      });\n    }, this.handleChange = name => event => {\n      const value = name === 'video' ? event.target.files[0] : event.target.value;\n      this.mediaData.set(name, value);\n      this.setState({ [name]: value });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    if (this.state.redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Redirect\"], { to: '/media/' + this.state.mediaId });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_2___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,\n          { type: 'headline', component: 'h1', className: classes.title },\n          'New Video'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { accept: 'video/*', onChange: this.handleChange('video'), className: classes.input, id: 'icon-button-file', type: 'file' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'label',\n          { htmlFor: 'icon-button-file' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { color: 'secondary', variant: 'raised', component: 'span' },\n            'Upload',\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_FileUpload__WEBPACK_IMPORTED_MODULE_6___default.a, null)\n          )\n        ),\n        ' ',\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          { className: classes.filename },\n          this.state.video ? this.state.video.name : ''\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, { id: 'title', label: 'Title', className: classes.textField, value: this.state.title, onChange: this.handleChange('title'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          id: 'multiline-flexible',\n          label: 'Description',\n          multiline: true,\n          rows: '2',\n          value: this.state.description,\n          onChange: this.handleChange('description'),\n          className: classes.textField,\n          margin: 'normal'\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, { id: 'genre', label: 'Genre', className: classes.textField, value: this.state.genre, onChange: this.handleChange('genre'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        ' ',\n        this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_7___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.state.error\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n\nNewMedia.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_9__[\"withStyles\"])(styles)(NewMedia));\n\n//# sourceURL=webpack:///./client/media/NewMedia.js?");

/***/ }),

/***/ "./client/media/PlayMedia.js":
/*!***********************************!*\
  !*** ./client/media/PlayMedia.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n/* harmony import */ var material_ui_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Grid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_media_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Media */ \"./client/media/Media.js\");\n/* harmony import */ var _RelatedMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RelatedMedia */ \"./client/media/RelatedMedia.js\");\n/* harmony import */ var material_ui_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Form */ \"material-ui/Form\");\n/* harmony import */ var material_ui_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Form__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var material_ui_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui/Switch */ \"material-ui/Switch\");\n/* harmony import */ var material_ui_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_Switch__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: {\n    flexGrow: 1,\n    margin: 30\n  },\n  toggle: {\n    float: 'right',\n    marginRight: '30px',\n    marginTop: ' 10px'\n  }\n});\n\nclass PlayMedia extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.loadMedia = mediaId => {\n      Object(_api_media_js__WEBPACK_IMPORTED_MODULE_4__[\"read\"])({ mediaId: mediaId }).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ media: data });\n          Object(_api_media_js__WEBPACK_IMPORTED_MODULE_4__[\"listRelated\"])({\n            mediaId: data._id }).then(data => {\n            if (data.error) {\n              console.log(data.error);\n            } else {\n              this.setState({ relatedMedia: data });\n            }\n          });\n        }\n      });\n    };\n\n    this.componentDidMount = () => {\n      this.loadMedia(this.match.params.mediaId);\n    };\n\n    this.componentWillReceiveProps = props => {\n      this.loadMedia(props.match.params.mediaId);\n    };\n\n    this.handleChange = event => {\n      this.setState({ autoPlay: event.target.checked });\n    };\n\n    this.handleAutoplay = updateMediaControls => {\n      let playList = this.state.relatedMedia;\n      let playMedia = playList[0];\n      if (!this.state.autoPlay || playList.length == 0) return updateMediaControls();\n\n      if (playList.length > 1) {\n        playList.shift();\n        this.setState({ media: playMedia, relatedMedia: playList });\n      } else {\n        Object(_api_media_js__WEBPACK_IMPORTED_MODULE_4__[\"listRelated\"])({\n          mediaId: playMedia._id }).then(data => {\n          if (data.error) {\n            console.log(data.error);\n          } else {\n            this.setState({ media: playMedia, relatedMedia: data });\n          }\n        });\n      }\n    };\n\n    this.state = {\n      media: { postedBy: {} },\n      relatedMedia: [],\n      autoPlay: false\n    };\n    this.match = match;\n  }\n\n  render() {\n    //render SSR data\n    if (this.props.data && this.props.data[0] != null) {\n      this.state.media = this.props.data[0];\n      this.state.relatedMedia = [];\n    }\n\n    const nextUrl = this.state.relatedMedia.length > 0 ? `/media/${this.state.relatedMedia[0]._id}` : '';\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: classes.root },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,\n        { container: true, spacing: 24 },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { item: true, xs: 8, sm: 8 },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { media: this.state.media, nextUrl: nextUrl, handleAutoplay: this.handleAutoplay })\n        ),\n        this.state.relatedMedia.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { item: true, xs: 4, sm: 4 },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Form__WEBPACK_IMPORTED_MODULE_7__[\"FormControlLabel\"], { className: classes.toggle,\n            control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Switch__WEBPACK_IMPORTED_MODULE_8___default.a, {\n              checked: this.state.autoPlay,\n              onChange: this.handleChange,\n              color: 'primary'\n            }),\n            label: this.state.autoPlay ? 'Autoplay ON' : 'Autoplay OFF'\n          }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RelatedMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { media: this.state.relatedMedia })\n        )\n      )\n    );\n  }\n}\n\nPlayMedia.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(PlayMedia));\n\n//# sourceURL=webpack:///./client/media/PlayMedia.js?");

/***/ }),

/***/ "./client/media/RelatedMedia.js":
/*!**************************************!*\
  !*** ./client/media/RelatedMedia.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_Divider__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    paddingBottom: 24,\n    backgroundColor: '#80808024'\n  }),\n  title: {\n    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,\n    color: theme.palette.openTitle,\n    fontSize: '1em'\n  },\n  card: {\n    width: '100%',\n    display: 'inline-flex'\n  },\n  details: {\n    display: 'inline-block',\n    width: \"100%\"\n  },\n  content: {\n    flex: '1 0 auto',\n    padding: '16px 8px 0px'\n  },\n  controls: {\n    marginTop: '8px'\n  },\n  date: {\n    color: 'rgba(0, 0, 0, 0.4)'\n  },\n  mediaTitle: {\n    whiteSpace: 'nowrap',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    width: '130px',\n    fontSize: '1em',\n    marginBottom: '5px'\n  },\n  subheading: {\n    color: 'rgba(88, 114, 128, 0.67)'\n  },\n  views: {\n    display: 'inline',\n    lineHeight: '3',\n    paddingLeft: '8px',\n    color: theme.palette.text.secondary\n  }\n});\nclass RelatedMedia extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.root, elevation: 4, style: { padding: '16px' } },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { type: 'title', className: classes.title },\n        'Up Next'\n      ),\n      this.props.media.map((item, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          { key: i },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Card__WEBPACK_IMPORTED_MODULE_7___default.a,\n            { className: classes.card },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { style: { marginRight: \"5px\", backgroundColor: \"black\" } },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n                { to: \"/media/\" + item._id },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_8___default.a, { url: '/api/media/video/' + item._id, width: '160px', height: '140px' })\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: classes.details },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_Card__WEBPACK_IMPORTED_MODULE_7__[\"CardContent\"],\n                { className: classes.content },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n                  { to: '/media/' + item._id },\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n                    { type: 'title', component: 'h3', className: classes.mediaTitle, color: 'primary' },\n                    item.title\n                  )\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n                  { type: 'subheading', className: classes.subheading },\n                  item.genre\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n                  { component: 'p', className: classes.date },\n                  new Date(item.created).toDateString()\n                )\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: classes.controls },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n                  { type: 'subheading', component: 'h3', className: classes.views, color: 'primary' },\n                  ' ',\n                  item.views,\n                  ' views'\n                )\n              )\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, null)\n        );\n      })\n    );\n  }\n}\n\nRelatedMedia.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  media: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(RelatedMedia));\n\n//# sourceURL=webpack:///./client/media/RelatedMedia.js?");

/***/ }),

/***/ "./client/media/api-media.js":
/*!***********************************!*\
  !*** ./client/media/api-media.js ***!
  \***********************************/
/*! exports provided: create, listPopular, listByUser, read, update, remove, listRelated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listPopular\", function() { return listPopular; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listByUser\", function() { return listByUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listRelated\", function() { return listRelated; });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\nconst create = (params, credentials, media) => {\n  return fetch('/api/media/new/' + params.userId, {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: media\n  }).then(response => {\n    return response.json();\n  }).catch(err => {\n    console.log(err);\n  });\n};\n\nconst listPopular = params => {\n  return fetch('/api/media/popular', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst listByUser = params => {\n  return fetch('/api/media/by/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst read = params => {\n  return fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].serverUrl + '/api/media/' + params.mediaId, {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst update = (params, credentials, media) => {\n  return fetch('/api/media/' + params.mediaId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(media)\n  }).then(response => {\n    return response.json();\n  }).catch(err => {\n    console.log(err);\n  });\n};\n\nconst remove = (params, credentials) => {\n  return fetch('/api/media/' + params.mediaId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => {\n    console.log(err);\n  });\n};\n\nconst listRelated = params => {\n  return fetch('/api/media/related/' + params.mediaId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n\n//# sourceURL=webpack:///./client/media/api-media.js?");

/***/ }),

/***/ "./client/routeConfig.js":
/*!*******************************!*\
  !*** ./client/routeConfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_PlayMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/PlayMedia */ \"./client/media/PlayMedia.js\");\n/* harmony import */ var _media_api_media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/api-media.js */ \"./client/media/api-media.js\");\n\n\n\nconst routes = [{\n  path: '/media/:mediaId',\n  component: _media_PlayMedia__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  loadData: params => Object(_media_api_media_js__WEBPACK_IMPORTED_MODULE_1__[\"read\"])(params)\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./client/routeConfig.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n/* harmony import */ var material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nclass DeleteUser extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      redirect: false,\n      open: false\n    }, this.clickButton = () => {\n      this.setState({ open: true });\n    }, this.deleteAccount = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isAuthenticated();\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_7__[\"remove\"])({\n        userId: this.props.userId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].signout(() => console.log('deleted'));\n          this.setState({ redirect: true });\n        }\n      });\n    }, this.handleRequestClose = () => {\n      this.setState({ open: false });\n    }, _temp;\n  }\n\n  render() {\n    const redirect = this.state.redirect;\n    if (redirect) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Redirect\"], { to: '/' });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'span',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a,\n        { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a,\n        { open: this.state.open, onClose: this.handleRequestClose },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogTitle\"],\n          null,\n          \"Delete Account\"\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogContentText\"],\n            null,\n            'Confirm to delete your account.'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"DialogActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { onClick: this.handleRequestClose, color: 'primary' },\n            'Cancel'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n            'Confirm'\n          )\n        )\n      )\n    );\n  }\n}\nDeleteUser.propTypes = {\n  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteUser);\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  title: {\n    margin: theme.spacing.unit * 2,\n    color: theme.palette.protectedTitle\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass EditProfile extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.componentDidMount = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated();\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_9__[\"read\"])({\n        userId: this.match.params.userId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ name: data.name, email: data.email });\n        }\n      });\n    };\n\n    this.clickSubmit = () => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated();\n      const user = {\n        name: this.state.name || undefined,\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_9__[\"update\"])({\n        userId: this.match.params.userId\n      }, {\n        t: jwt.token\n      }, user).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ 'userId': data._id, 'redirectToProfile': true });\n        }\n      });\n    };\n\n    this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n    };\n\n    this.state = {\n      name: '',\n      email: '',\n      password: '',\n      redirectToProfile: false,\n      error: ''\n    };\n    this.match = match;\n  }\n\n  render() {\n    const { classes } = this.props;\n    if (this.state.redirectToProfile) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Redirect\"], { to: '/user/' + this.state.userId });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n      { className: classes.card },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { type: 'headline', component: 'h2', className: classes.title },\n          'Edit Profile'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n        ' ',\n        this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n          { component: 'p', color: 'error' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n            { color: 'error', className: classes.error },\n            'error'\n          ),\n          this.state.error\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n          { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n\nEditProfile.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(EditProfile));\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n/* harmony import */ var material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_Divider__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _media_api_media_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media/api-media.js */ \"./client/media/api-media.js\");\n/* harmony import */ var _media_MediaList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../media/MediaList */ \"./client/media/MediaList.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 850,\n    margin: 'auto',\n    padding: theme.spacing.unit * 3,\n    marginTop: theme.spacing.unit * 5\n  }),\n  title: {\n    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,\n    color: theme.palette.protectedTitle\n  },\n  avatar: {\n    color: theme.palette.primary.contrastText,\n    backgroundColor: theme.palette.primary.light\n  }\n});\n\nclass Profile extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor({ match }) {\n    super();\n\n    this.init = userId => {\n      const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__[\"default\"].isAuthenticated();\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_13__[\"read\"])({\n        userId: userId\n      }, { t: jwt.token }).then(data => {\n        if (data.error) {\n          this.setState({ redirectToSignin: true });\n        } else {\n          this.setState({ user: data });\n          Object(_media_api_media_js__WEBPACK_IMPORTED_MODULE_15__[\"listByUser\"])({ userId: data._id }).then(media => {\n            if (media.error) {\n              console.log(media.error);\n            } else {\n              this.setState({ media: media });\n            }\n          });\n        }\n      });\n    };\n\n    this.componentWillReceiveProps = props => {\n      this.init(props.match.params.userId);\n    };\n\n    this.componentDidMount = () => {\n      this.init(this.match.params.userId);\n    };\n\n    this.state = {\n      user: '',\n      redirectToSignin: false,\n      media: []\n    };\n    this.match = match;\n  }\n\n  render() {\n    const { classes } = this.props;\n    const redirectToSignin = this.state.redirectToSignin;\n    if (redirectToSignin) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__[\"Redirect\"], { to: '/signin' });\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.root, elevation: 4 },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default.a,\n        { type: 'title', className: classes.title },\n        'Profile'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_List__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { dense: true },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a,\n              { className: classes.avatar },\n              this.state.user.name && this.state.user.name[0]\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: this.state.user.name, secondary: this.state.user.email }),\n          ' ',\n          _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_12__[\"default\"].isAuthenticated().user._id == this.state.user._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemSecondaryAction\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              react_router_dom__WEBPACK_IMPORTED_MODULE_14__[\"Link\"],\n              { to: \"/user/edit/\" + this.state.user._id },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a,\n                { 'aria-label': 'Edit', color: 'primary' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, null)\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_11__[\"default\"], { userId: this.state.user._id })\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_media_MediaList__WEBPACK_IMPORTED_MODULE_16__[\"default\"], { media: this.state.media })\n      )\n    );\n  }\n}\nProfile.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Profile));\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n/* harmony import */ var material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Icon__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n/* harmony import */ var material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing.unit * 5,\n    paddingBottom: theme.spacing.unit * 2\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing.unit * 2,\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing.unit,\n    marginRight: theme.spacing.unit,\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing.unit * 2\n  }\n});\n\nclass Signup extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    }, this.handleChange = name => event => {\n      this.setState({ [name]: event.target.value });\n    }, this.clickSubmit = () => {\n      const user = {\n        name: this.state.name || undefined,\n        email: this.state.email || undefined,\n        password: this.state.password || undefined\n      };\n      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_8__[\"create\"])(user).then(data => {\n        if (data.error) {\n          this.setState({ error: data.error });\n        } else {\n          this.setState({ error: '', open: true });\n        }\n      });\n    }, _temp;\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default.a,\n        { className: classes.card },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Sign Up'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),\n          ' ',\n          this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Typography__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { component: 'p', color: 'error' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a,\n        { open: this.state.open, disableBackdropClick: true },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogTitle\"],\n          null,\n          'New Account'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogContent\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogContentText\"],\n            null,\n            'New account successfully created.'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          material_ui_Dialog__WEBPACK_IMPORTED_MODULE_9__[\"DialogActions\"],\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"],\n            { to: '/signin' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n              { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n              'Sign In'\n            )\n          )\n        )\n      )\n    );\n  }\n}\n\nSignup.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(Signup));\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n/* harmony import */ var material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n/* harmony import */ var material_ui_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n/* harmony import */ var material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui-icons/ArrowForward */ \"material-ui-icons/ArrowForward\");\n/* harmony import */ var material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n/* harmony import */ var material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing.unit,\n    margin: theme.spacing.unit * 5\n  }),\n  title: {\n    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,\n    color: theme.palette.openTitle\n  }\n});\n\nclass Users extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      users: []\n    }, _temp;\n  }\n\n  componentDidMount() {\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_11__[\"list\"])().then(data => {\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        this.setState({ users: data });\n      }\n    });\n  }\n\n  render() {\n    const { classes } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      material_ui_Paper__WEBPACK_IMPORTED_MODULE_3___default.a,\n      { className: classes.root, elevation: 4 },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,\n        { type: 'title', className: classes.title },\n        'All Users'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        material_ui_List__WEBPACK_IMPORTED_MODULE_4___default.a,\n        { dense: true },\n        this.state.users.map((item, i) => {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"],\n            { to: \"/user/\" + item._id, key: i },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n              { button: true },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"],\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a,\n                  null,\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default.a, null)\n                )\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], { primary: item.name }),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                material_ui_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItemSecondaryAction\"],\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  material_ui_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a,\n                  null,\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default.a, null)\n                )\n              )\n            )\n          );\n        })\n      )\n    );\n  }\n}\n\nUsers.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Users));\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! exports provided: create, list, read, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nconst create = user => {\n  return fetch('/api/users/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst list = () => {\n  return fetch('/api/users/', {\n    method: 'GET'\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst read = (params, credentials) => {\n  return fetch('/api/users/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst update = (params, credentials, user) => {\n  return fetch('/api/users/' + params.userId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(user)\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\nconst remove = (params, credentials) => {\n  return fetch('/api/users/' + params.userId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(response => {\n    return response.json();\n  }).catch(err => console.log(err));\n};\n\n\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  env: \"development\" || 'development',\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mongoat',\n  serverUrl: process.env.serverUrl || 'http://localhost:3000'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\n\n\n\n\nconst signin = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"email\": req.body.email\n  }, (err, user) => {\n\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token,\n      user: { _id: user._id, name: user.name, email: user.email }\n    });\n  });\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n});\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/media.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/media.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_media_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/media.model */ \"./server/models/media.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n//media streaming\n\n//import Grid from 'gridfs-stream'\n/* Temporary fix for Mongoose v5+ and gridfs-stream v1.1.1 bug */\nconst Grid = __webpack_require__(/*! gridfs-stream */ \"gridfs-stream\");\neval(`Grid.prototype.findOne = ${Grid.prototype.findOne.toString().replace('nextObject', 'next')}`);\n/* Until gridfs-stream module is updated */\nGrid.mongo = mongoose__WEBPACK_IMPORTED_MODULE_5___default.a.mongo;\nlet gridfs = null;\nmongoose__WEBPACK_IMPORTED_MODULE_5___default.a.connection.on('connected', () => {\n  gridfs = Grid(mongoose__WEBPACK_IMPORTED_MODULE_5___default.a.connection.db);\n});\n\nconst create = (req, res, next) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Video could not be uploaded\"\n      });\n    }\n    let media = new _models_media_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields);\n    media.postedBy = req.profile;\n    if (files.video) {\n      let writestream = gridfs.createWriteStream({ _id: media._id });\n      fs__WEBPACK_IMPORTED_MODULE_4___default.a.createReadStream(files.video.path).pipe(writestream);\n    }\n    media.save((err, result) => {\n      if (err) {\n        return res.status(400).json({\n          error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n      }\n      res.json(result);\n    });\n  });\n};\n\nconst mediaByID = (req, res, next, id) => {\n  _models_media_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('postedBy', '_id name').exec((err, media) => {\n    if (err || !media) return res.status('400').json({\n      error: \"Media not found\"\n    });\n    req.media = media;\n    next();\n  });\n};\n\nconst video = (req, res) => {\n  gridfs.findOne({\n    _id: req.media._id\n  }, (err, file) => {\n    if (err) {\n      return res.status(400).send({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    if (!file) {\n      return res.status(404).send({\n        error: 'No video found'\n      });\n    }\n\n    if (req.headers['range']) {\n      let parts = req.headers['range'].replace(/bytes=/, \"\").split(\"-\");\n      let partialstart = parts[0];\n      let partialend = parts[1];\n\n      let start = parseInt(partialstart, 10);\n      let end = partialend ? parseInt(partialend, 10) : file.length - 1;\n      let chunksize = end - start + 1;\n\n      res.writeHead(206, {\n        'Accept-Ranges': 'bytes',\n        'Content-Length': chunksize,\n        'Content-Range': 'bytes ' + start + '-' + end + '/' + file.length,\n        'Content-Type': file.contentType\n      });\n\n      gridfs.createReadStream({\n        _id: file._id,\n        range: {\n          startPos: start,\n          endPos: end\n        }\n      }).pipe(res);\n    } else {\n      res.header('Content-Length', file.length);\n      res.header('Content-Type', file.contentType);\n\n      gridfs.createReadStream({\n        _id: file._id\n      }).pipe(res);\n    }\n  });\n};\n\nconst listPopular = (req, res) => {\n  _models_media_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).limit(9).populate('postedBy', '_id name').sort('-views').exec((err, posts) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nconst listByUser = (req, res) => {\n  _models_media_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({ postedBy: req.profile._id }).populate('postedBy', '_id name').sort('-created').exec((err, posts) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nconst read = (req, res) => {\n  return res.json(req.media);\n};\n\nconst incrementViews = (req, res, next) => {\n  _models_media_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.media._id, { $inc: { \"views\": 1 } }, { new: true }).exec((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    next();\n  });\n};\n\nconst update = (req, res, next) => {\n  let media = req.media;\n  media = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(media, req.body);\n  media.updated = Date.now();\n  media.save(err => {\n    if (err) {\n      return res.status(400).send({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(media);\n  });\n};\n\nconst isPoster = (req, res, next) => {\n  let isPoster = req.media && req.auth && req.media.postedBy._id == req.auth._id;\n  if (!isPoster) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nconst remove = (req, res, next) => {\n  let media = req.media;\n  media.remove((err, deletedMedia) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    gridfs.remove({ _id: req.media._id });\n    res.json(deletedMedia);\n  });\n};\n\nconst listRelated = (req, res) => {\n  _models_media_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({ \"_id\": { \"$ne\": req.media }, \"genre\": req.media.genre }).limit(4).sort('-views').populate('postedBy', '_id name').exec((err, posts) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create,\n  mediaByID,\n  video,\n  listPopular,\n  listByUser,\n  read,\n  incrementViews,\n  update,\n  isPoster,\n  remove,\n  listRelated\n});\n\n//# sourceURL=webpack:///./server/controllers/media.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\n\n\n\nconst create = (req, res, next) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\n/**\n * Load user and append to req.\n */\nconst userByID = (req, res, next, id) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec((err, user) => {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst list = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((err, users) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name email updated created');\n};\n\nconst update = (req, res, next) => {\n  let user = req.profile;\n  user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(err => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nconst remove = (req, res, next) => {\n  let user = req.profile;\n  user.remove((err, deletedUser) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  compile\n});\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_media_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/media.routes */ \"./server/routes/media.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var material_ui_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n/* harmony import */ var material_ui_colors__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(material_ui_colors__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _client_routeConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../client/routeConfig */ \"./client/routeConfig.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// modules for server side rendering\n\n\n\n\n\n\n\n\n\n//end\n\n//For SSR with data\n\n\n\n//end\n\n//comment out before building for production\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n//comment out before building for production\n_devBundle__WEBPACK_IMPORTED_MODULE_22__[\"default\"].compile(app);\n\n//For SSR with data\nconst loadBranchData = location => {\n  const branch = Object(react_router_config__WEBPACK_IMPORTED_MODULE_19__[\"matchRoutes\"])(_client_routeConfig__WEBPACK_IMPORTED_MODULE_20__[\"default\"], location);\n  const promises = branch.map(({ route, match }) => {\n    return route.loadData ? route.loadData(branch[0].match.params) : Promise.resolve(null);\n  });\n  return Promise.all(promises);\n};\n\n// parse body params and attache them to req.body\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({ extended: true }));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\n// secure apps by setting various HTTP headers\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\n// enable CORS - Cross Origin Resource Sharing\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\n\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', _routes_media_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n\napp.get('*', (req, res) => {\n  const sheetsRegistry = new react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_15__[\"SheetsRegistry\"]();\n  const theme = Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_17__[\"createMuiTheme\"])({\n    palette: {\n      primary: {\n        light: '#f05545',\n        main: '#b71c1c',\n        dark: '#7f0000',\n        contrastText: '#fff'\n      },\n      secondary: {\n        light: '#fbfffc',\n        main: '#c8e6c9',\n        dark: '#97b498',\n        contrastText: '#37474f'\n      },\n      openTitle: material_ui_colors__WEBPACK_IMPORTED_MODULE_18__[\"red\"]['500'],\n      protectedTitle: material_ui_colors__WEBPACK_IMPORTED_MODULE_18__[\"brown\"]['300'],\n      type: 'light'\n    }\n  });\n  const generateClassName = Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_17__[\"createGenerateClassName\"])();\n  const context = {};\n  loadBranchData(req.url).then(data => {\n    const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_12___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\n      react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_14___default.a,\n      { location: req.url, context: context },\n      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\n        react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_16___default.a,\n        { registry: sheetsRegistry, generateClassName: generateClassName },\n        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\n          material_ui_styles__WEBPACK_IMPORTED_MODULE_17__[\"MuiThemeProvider\"],\n          { theme: theme, sheetsManager: new Map() },\n          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_13__[\"default\"], { data: data })\n        )\n      )\n    ));\n    if (context.url) {\n      return res.redirect(303, context.url);\n    }\n    const css = sheetsRegistry.toString();\n    res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n      markup: markup,\n      css: css\n    }));\n  }).catch(err => {\n    res.status(500).send({ \"error\": \"Could not load React view with data\" });\n  });\n});\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/**\n * Get unique error field name\n */\n\nconst getUniqueErrorMessage = err => {\n    let output;\n    try {\n        let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\n * Get the error message from error object\n */\nconst getErrorMessage = err => {\n    let message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (let errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ getErrorMessage });\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/media.model.js":
/*!**************************************!*\
  !*** ./server/models/media.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MediaSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: 'title is required'\n  },\n  description: String,\n  genre: String,\n  views: { type: Number, default: 0 },\n  postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User' },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Media', MediaSchema));\n\n//# sourceURL=webpack:///./server/models/media.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/media.routes.js":
/*!***************************************!*\
  !*** ./server/routes/media.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/media.controller */ \"./server/controllers/media.controller.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/media/new/:userId').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create);\n\nrouter.route('/api/media/video/:mediaId').get(_controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].video);\n\nrouter.route('/api/media/popular').get(_controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listPopular);\n\nrouter.route('/api/media/related/:mediaId').get(_controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listRelated);\n\nrouter.route('/api/media/by/:userId').get(_controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listByUser);\n\nrouter.route('/api/media/:mediaId').get(_controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].incrementViews, _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isPoster, _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isPoster, _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove);\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nrouter.param('mediaId', _controllers_media_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mediaByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/media.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// Connection URL\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`);\n});\n\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({ markup, css }) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <title>You-Got-Served</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <style>\n              a{\n                text-decoration: none\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/jemimalim/gaprojects/you-got-served/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "gridfs-stream":
/*!********************************!*\
  !*** external "gridfs-stream" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gridfs-stream\");\n\n//# sourceURL=webpack:///external_%22gridfs-stream%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui-icons/AddBox":
/*!*******************************************!*\
  !*** external "material-ui-icons/AddBox" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/AddBox\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/AddBox%22?");

/***/ }),

/***/ "material-ui-icons/ArrowForward":
/*!*************************************************!*\
  !*** external "material-ui-icons/ArrowForward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ArrowForward%22?");

/***/ }),

/***/ "material-ui-icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui-icons/Delete" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Delete\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Delete%22?");

/***/ }),

/***/ "material-ui-icons/Edit":
/*!*****************************************!*\
  !*** external "material-ui-icons/Edit" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Edit\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Edit%22?");

/***/ }),

/***/ "material-ui-icons/FileUpload":
/*!***********************************************!*\
  !*** external "material-ui-icons/FileUpload" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/FileUpload\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/FileUpload%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/Person":
/*!*******************************************!*\
  !*** external "material-ui-icons/Person" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Person\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Person%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Avatar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Card\");\n\n//# sourceURL=webpack:///external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Divider":
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Divider\");\n\n//# sourceURL=webpack:///external_%22material-ui/Divider%22?");

/***/ }),

/***/ "material-ui/Form":
/*!***********************************!*\
  !*** external "material-ui/Form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Form\");\n\n//# sourceURL=webpack:///external_%22material-ui/Form%22?");

/***/ }),

/***/ "material-ui/Grid":
/*!***********************************!*\
  !*** external "material-ui/Grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Grid\");\n\n//# sourceURL=webpack:///external_%22material-ui/Grid%22?");

/***/ }),

/***/ "material-ui/GridList":
/*!***************************************!*\
  !*** external "material-ui/GridList" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/GridList\");\n\n//# sourceURL=webpack:///external_%22material-ui/GridList%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Icon\");\n\n//# sourceURL=webpack:///external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/Input":
/*!************************************!*\
  !*** external "material-ui/Input" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Input\");\n\n//# sourceURL=webpack:///external_%22material-ui/Input%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List\");\n\n//# sourceURL=webpack:///external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Paper\");\n\n//# sourceURL=webpack:///external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/Progress":
/*!***************************************!*\
  !*** external "material-ui/Progress" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Progress\");\n\n//# sourceURL=webpack:///external_%22material-ui/Progress%22?");

/***/ }),

/***/ "material-ui/Switch":
/*!*************************************!*\
  !*** external "material-ui/Switch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Switch\");\n\n//# sourceURL=webpack:///external_%22material-ui/Switch%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/TextField\");\n\n//# sourceURL=webpack:///external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/colors":
/*!*************************************!*\
  !*** external "material-ui/colors" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/colors\");\n\n//# sourceURL=webpack:///external_%22material-ui/colors%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player\");\n\n//# sourceURL=webpack:///external_%22react-player%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "screenfull":
/*!*****************************!*\
  !*** external "screenfull" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"screenfull\");\n\n//# sourceURL=webpack:///external_%22screenfull%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });