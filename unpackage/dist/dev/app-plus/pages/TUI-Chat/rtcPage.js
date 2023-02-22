"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/main.js?{"page":"pages%2FTUI-Chat%2FrtcPage"} ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_TUI_Chat_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/TUI-Chat/rtcPage.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_TUI_Chat_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_TUI_Chat_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/TUI-Chat/rtcPage'\n        _pages_TUI_Chat_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_TUI_Chat_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBbUU7QUFDbkUsUUFBUSxnRkFBRztBQUNYLFFBQVEsZ0ZBQUc7QUFDWCxRQUFRLGdGQUFHO0FBQ1gsZ0JBQWdCLGdGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9UVUktQ2hhdC9ydGNQYWdlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL1RVSS1DaGF0L3J0Y1BhZ2UnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/main.js?{"type":"appStyle"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!********************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rtcPage.nvue?vue&type=template&id=318acad2&scoped=true&mpType=page */ 6);\n/* harmony import */ var _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtcPage.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 26);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./rtcPage.nvue?vue&type=style&index=0&id=318acad2&scoped=true&lang=css&mpType=page */ 27).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./rtcPage.nvue?vue&type=style&index=0&id=318acad2&scoped=true&lang=css&mpType=page */ 27).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"318acad2\",\n  \"645d418e\",\n  false,\n  _rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/TUI-Chat/rtcPage.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDRGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNEZBQW9GO0FBQzdJOztBQUVBOztBQUVBO0FBQ3VNO0FBQ3ZNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzE4YWNhZDImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxOGFjYWQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxOGFjYWQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9EZXNrdG9wL0hCdWlsZGVyWC4zLjYuNC4yMDIyMDkyMi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzE4YWNhZDJcIixcbiAgXCI2NDVkNDE4ZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9UVUktQ2hhdC9ydGNQYWdlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?vue&type=template&id=318acad2&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=template&id=318acad2&scoped=true&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_318acad2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?vue&type=template&id=318acad2&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["content"],
          style: {
            width: _vm.windowWidth + "px",
            height: _vm.windowHeight + "px"
          }
        },
        [
          _vm.info.roleChoices == 2 && _vm.peeridInfo.length == 0
            ? _c(
                "view",
                {
                  staticClass: ["hint"],
                  style: {
                    top: _vm.windowHeight / 2 - 60 + "px",
                    width: _vm.windowWidth + "px"
                  }
                },
                [
                  _c("myLoading"),
                  _c(
                    "u-text",
                    {
                      staticClass: ["text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v("暂无主播,请耐心等候主播加入")]
                  )
                ],
                1
              )
            : _vm._e(),
          _c(
            "scroll-view",
            {
              staticClass: ["CanvasView"],
              style: {
                width: _vm.windowWidth + "px",
                height: _vm.windowHeight + "px",
                paddingTop: _vm.peeridInfo.length == 0 ? "0px" : "20px"
              },
              attrs: { scrollY: "true" }
            },
            [
              _vm.info.roleChoices != 2
                ? _c(
                    "view",
                    {
                      class: _vm.peeridInfoStyle,
                      staticStyle: { position: "relative" }
                    },
                    [
                      _c(
                        "view",
                        { staticStyle: { flex: "1" } },
                        [
                          _vm.flag
                            ? _c("AR-CanvasView", {
                                ref: "location",
                                staticStyle: { flex: "1" }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["location-none"],
                          style: {
                            left: _vm.video ? "-800px" : "0px",
                            backgroundColor: _vm.video ? "" : "#0A1621",
                            opacity: _vm.video ? "0" : "1"
                          }
                        },
                        [
                          _c("u-image", {
                            staticStyle: { width: "60px", height: "80px" },
                            attrs: {
                              src: "../../static/icon_launch_logo.png",
                              mode: ""
                            }
                          })
                        ],
                        1
                      ),
                      _c("view", { staticClass: ["user-hint"] })
                    ]
                  )
                : _vm._e(),
              _vm._l(_vm.peeridInfo, function(peerid) {
                return _c(
                  "view",
                  { key: peerid.uid, class: _vm.peeridInfoStyle },
                  [
                    _c(
                      "view",
                      { staticStyle: { flex: "1" } },
                      [
                        _vm.flag
                          ? _c("AR-CanvasView", {
                              ref: "remote" + peerid.uid,
                              refInFor: true,
                              staticStyle: { flex: "1" }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["location-none"],
                        style: {
                          left: peerid.videoStatus ? "-800px" : "0px",
                          backgroundColor: peerid.videoStatus ? "" : "#0A1621",
                          opacity: peerid.videoStatus ? "0" : "1"
                        }
                      },
                      [
                        _c("u-image", {
                          staticStyle: { width: "60px", height: "80px" },
                          attrs: {
                            src: "../../static/icon_launch_logo.png",
                            mode: ""
                          }
                        })
                      ],
                      1
                    ),
                    _c("view", { staticClass: ["user-hint"] })
                  ]
                )
              })
            ],
            2
          ),
          _c(
            "view",
            {
              staticClass: ["options"],
              style: { width: _vm.windowWidth + "px" }
            },
            [
              _vm.info.roleChoices != 2
                ? _c(
                    "view",
                    {
                      staticStyle: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: "20px"
                      }
                    },
                    [
                      _vm.flag
                        ? _c(
                            "view",
                            {
                              staticClass: ["icon"],
                              on: { click: _vm.videoFn }
                            },
                            [
                              _vm.video
                                ? _c("u-image", {
                                    staticClass: ["icon_img"],
                                    attrs: { src: "../../static/vi_on.png" }
                                  })
                                : _c("u-image", {
                                    staticClass: ["icon_img"],
                                    attrs: { src: "../../static/vi_in.png" }
                                  }),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("视频")]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm.info.scenario == 1
                        ? _c(
                            "view",
                            {
                              staticClass: ["icon"],
                              on: { click: _vm.pullFn }
                            },
                            [
                              _c("u-image", {
                                staticStyle: { width: "70px", height: "70px" },
                                attrs: {
                                  src: "../../static/save-fill.png",
                                  mode: ""
                                }
                              }),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("推流")]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm.flag
                        ? _c(
                            "view",
                            {
                              staticClass: ["icon"],
                              on: { click: _vm.cameraFn }
                            },
                            [
                              _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: {
                                  src: "../../static/camera.png",
                                  mode: ""
                                }
                              }),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [
                                  _vm._v(
                                    "摄像" + _vm._s(_vm.camera ? "前" : "后")
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _c(
                "view",
                {
                  style: {
                    flexDirection: "row",
                    justifyContent:
                      _vm.info.roleChoices != 2 ? "space-between" : "center"
                  }
                },
                [
                  _vm.info.roleChoices != 2
                    ? _c(
                        "view",
                        { staticClass: ["icon"], on: { click: _vm.audioFn } },
                        [
                          _vm.audio
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/au_in.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/au_on.png" }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("静音")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["icon"], on: { click: _vm.closeFn } },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img"],
                        attrs: { src: "../../static/over.png" }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("挂断")]
                      )
                    ],
                    1
                  ),
                  _vm.info.roleChoices != 2
                    ? _c(
                        "view",
                        {
                          staticClass: ["icon"],
                          on: { click: _vm.speakerphoneFn }
                        },
                        [
                          _vm.Speakerphone
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/icon_speakers.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/icon_speaker.png" }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("扬声器")]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            ]
          ),
          _vm.liveShow
            ? _c(
                "view",
                {
                  staticClass: ["live"],
                  style: {
                    width: _vm.windowWidth + "px",
                    height: _vm.windowHeight + "px"
                  },
                  on: {
                    click: function($event) {
                      _vm.penetrateFn($event)
                    }
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["live-options"],
                      style: { width: _vm.windowWidth + "px" }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [
                          _vm._v(
                            "注意：请确保当前使用的 appid 开通旁路推流服务，否则将推流失败"
                          )
                        ]
                      ),
                      _c("u-input", {
                        staticClass: ["live-input"],
                        attrs: {
                          type: "text",
                          placeholder: "请输入推流地址",
                          value: _vm.info.liveUrl
                        },
                        on: {
                          input: function($event) {
                            _vm.$set(_vm.info, "liveUrl", $event.detail.value)
                          }
                        }
                      }),
                      _c(
                        "view",
                        {
                          staticStyle: {
                            justifyContent: "space-around",
                            flexDirection: "row",
                            marginTop: "60px"
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticStyle: { width: "80px" },
                              attrs: { type: "default" },
                              on: {
                                click: function($event) {
                                  _vm.liveShow = false
                                }
                              }
                            },
                            [_vm._v("取消")]
                          ),
                          _c(
                            "button",
                            {
                              staticStyle: { width: "80px" },
                              attrs: { type: "primary" },
                              on: { click: _vm.liveTranscoFn }
                            },
                            [_vm._v("确定")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQiwwakJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9EZXNrdG9wL0hCdWlsZGVyWC4zLjYuNC4yMDIyMDkyMi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi9EZXNrdG9wL0hCdWlsZGVyWC4zLjYuNC4yMDIyMDkyMi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvSEJ1aWxkZXJYLjMuNi40LjIwMjIwOTIyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvSEJ1aWxkZXJYLjMuNi40LjIwMjIwOTIyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvSEJ1aWxkZXJYLjMuNi40LjIwMjIwOTIyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vRGVza3RvcC9IQnVpbGRlclguMy42LjQuMjAyMjA5MjIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcnRjUGFnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _until = _interopRequireDefault(__webpack_require__(/*! ../../utils/until.js */ 13));\nvar _rtc = _interopRequireDefault(__webpack_require__(/*! ../../utils/rtc.js */ 15));\nvar _myLoading = _interopRequireDefault(__webpack_require__(/*! @/components/my-loading/my-loading.nvue */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    myLoading: _myLoading.default },\n\n  data: function data() {\n    return {\n      flag: uni.$flag,\n      // RTC 所需信息\n      info: {},\n      // 生成远端视频容器\n      peeridInfo: [],\n      // 远端视频容器样式\n      peeridInfoStyle: \"video_local\",\n\n      windowWidth: 400,\n      windowHeight: 800,\n\n      // 相关操作\n      audio: true, // 音频开关\n      Speakerphone: true, // 免提\n      video: true, // 视频开关\n      camera: true, // 摄像头前后\n\n      // 旁路推流相关\n      liveShow: false,\n      // 开始旁路推流\n      liveState: false };\n\n  },\n  watch: {\n    peeridInfo: function peeridInfo(newName) {\n      // 根据用户数量控制样式\n      var oLength = this.info.roleChoices == 2 ? newName.length : newName.length + 1;\n      if (oLength > 1) {\n        this.peeridInfoStyle = \"video_local_1\";\n      } else {\n        this.peeridInfoStyle = \"video_local\";\n      }\n    } },\n\n  created: function created() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oInfo;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                _until.default.getWidthHeight());case 2:oInfo = _context.sent;\n              _this2.windowWidth = oInfo.windowWidth;\n              _this2.windowHeight = oInfo.windowHeight;\n              // 监测远端用户加入(创建容器)\n              uni.$on(\"peeridJoinChannel\", function (data) {\n                if (data) {\n                  var oa = _this2.peeridInfo.filter(function (item) {\n                    return item.uid == data;\n                  });\n                  if (oa.length == 0) {\n                    _this2.peeridInfo.push({\n                      uid: data,\n                      videoStatus: true });\n\n                    // this.$nextTick(() => {\n                    // \tuni.$emit(\"CanvasView\", {\n                    // \t\tremote: this.$refs['remote' + data],\n                    // \t\tpeerid: data,\n                    // \t})\n                    // })\n                  }\n                }\n              });\n              // 监测远端用户离开(删除容器)\n              uni.$on(\"UserOffline\", function (data) {\n                __f__(\"log\", \"监测远端用户离开\", data, \" at pages/TUI-Chat/rtcPage.nvue:171\");\n                if (data) {\n                  _this2.peeridInfo.splice(_this2.peeridInfo.findIndex(function (item) {return item.uid === data.uid;}), 1);\n                  // 如果推流，需要重新推流\n                  if (_this2.liveState) {\n                    _this2.liveTranscoFn();\n                  }\n                }\n              });\n              // 监测远端用户视频状态\n              uni.$on(\"VideoStateChanged\", function (data) {\n                if (data) {\n                  _this2.peeridInfo.map(function (item) {\n                    if (item.uid == data.uid) {\n                      // 远端用户关闭视频\n                      if (data.reason == 5 && data.state == 0) {\n                        item.videoStatus = false;\n                        // 远端用户开启视频\n                      } else if (data.state == 2 && data.reason == 0) {\n                        item.videoStatus = true;\n                      }\n                    }\n                  });\n                }\n              });case 8:case \"end\":return _context.stop();}}}, _callee);}))();\n  },\n  onLoad: function onLoad(options) {\n    if (options.info) {\n      uni.showLoading({\n        title: '加载中,请稍后' });\n\n      var oInfo = JSON.parse(options.info);\n      this.info = Object.assign(this.info, oInfo);\n      // 初始化\n      this.init();\n    }\n  },\n  mounted: function mounted() {\n    if (this.info.roleChoices != 2) {\n      // 传入本地视频容器\n      uni.$emit(\"CanvasView\", {\n        location: this.$refs.location });\n\n    }\n  },\n  beforeDestroy: function beforeDestroy() {\n    // 移除App级别的所有事件监听器\n    uni.$off();\n  },\n  methods: {\n    // 推流(在直播场景下)\n    pullFn: function pullFn() {\n      var _this = this;\n      uni.showActionSheet({\n        itemList: ['推流', '停止推流'],\n        success: function success(res) {\n          // 推流\n          if (res.tapIndex + 1 == 1) {\n            _this.liveShow = true;\n          } else {\n            _this.removePublishStreamUrl();\n          }\n          __f__(\"log\", '选中了第' + (res.tapIndex + 1) + '个按钮', \" at pages/TUI-Chat/rtcPage.nvue:233\");\n        },\n        fail: function fail(res) {\n          __f__(\"log\", res.errMsg, \" at pages/TUI-Chat/rtcPage.nvue:236\");\n        } });\n\n    },\n    // 停止旁路推流\n    removePublishStreamUrl: function removePublishStreamUrl() {\n      if (this.liveState) {\n        this.liveState = false;\n        _rtc.default.removePublishStreamUrl(this.info.liveUrl);\n      } else {\n        uni.showToast({\n          title: \"请先推流\",\n          icon: \"none\",\n          duration: 2000 });\n\n      }\n    },\n    // 添加旁路推流\n    liveTranscoFn: function liveTranscoFn() {\n      if (this.info.liveUrl) {\n        this.liveShow = false;\n        this.liveState = true;\n        _rtc.default.LiveTransco(this.info.liveUrl);\n      } else {\n        uni.showToast({\n          title: \"请输入推流地址\",\n          icon: \"none\",\n          duration: 2000 });\n\n      }\n    },\n    // 挂断\n    closeFn: function closeFn() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n\n\n                  uni.navigateBack({ url: '/pages/TUI-Chat/chat' }));case 2:_context2.next = 4;return (\n                  _rtc.default.destroyRtc());case 4:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n    // 视频开关\n    videoFn: function videoFn() {\n      this.video = !this.video;\n      _rtc.default.enableLocalVideo(this.video);\n    },\n    // 摄像头前后\n    cameraFn: function cameraFn() {\n      this.camera = !this.camera;\n      _rtc.default.switchCamera();\n    },\n    // 音频开关\n    audioFn: function audioFn() {\n      this.audio = !this.audio;\n      _rtc.default.enableLocalAudio(this.audio);\n    },\n    // 免提\n    speakerphoneFn: function speakerphoneFn() {\n      this.Speakerphone = !this.Speakerphone;\n      _rtc.default.setEnableSpeakerphone(this.Speakerphone);\n    },\n    init: function init() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var oRole;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n\n                  _rtc.default.init(_this3.info));case 2:if (!(\n\n\n                _this3.info.scenario == 1)) {_context3.next = 7;break;}_context3.next = 5;return (\n\n                  _rtc.default.setChannelProfile());case 5:oRole = _context3.sent;\n                __f__(\"log\", '直播场景下设置频道角色', oRole == 0 ? '成功' : '失败', \" at pages/TUI-Chat/rtcPage.nvue:302\");case 7:_context3.next = 9;return (\n\n\n                  _rtc.default.enableVideo());case 9:if (!(\n\n                _this3.info.roleChoices == 2)) {_context3.next = 12;break;}_context3.next = 12;return (\n                  _rtc.default.enableLocalVideo(false));case 12:_context3.next = 14;return (\n\n\n                  _rtc.default.joinChannel());case 14:\n                uni.hideLoading();case 15:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 禁止穿透\n    penetrateFn: function penetrateFn(e) {\n      e.stopPropagation();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvVFVJLUNoYXQvcnRjUGFnZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUdBO0FBQ0E7QUFDQSxnSDtBQUNBO0FBQ0E7QUFDQSxpQ0FEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQSxjQUhBO0FBSUE7QUFDQSxvQkFMQTtBQU1BO0FBQ0Esb0NBUEE7O0FBU0Esc0JBVEE7QUFVQSx1QkFWQTs7QUFZQTtBQUNBLGlCQWJBLEVBYUE7QUFDQSx3QkFkQSxFQWNBO0FBQ0EsaUJBZkEsRUFlQTtBQUNBLGtCQWhCQSxFQWdCQTs7QUFFQTtBQUNBLHFCQW5CQTtBQW9CQTtBQUNBLHNCQXJCQTs7QUF1QkEsR0E1QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBVEEsRUE3QkE7O0FBd0NBLFNBeENBLHFCQXdDQTtBQUNBLCtDQURBLFNBQ0EsS0FEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx1Q0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFsQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQVZBO0FBV0E7QUFDQSxlQWRBLEVBcENBO0FBbURBLEdBM0ZBO0FBNEZBLFFBNUZBLGtCQTRGQSxPQTVGQSxFQTRGQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F0R0E7QUF1R0EsU0F2R0EscUJBdUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7O0FBR0E7QUFDQSxHQTlHQTtBQStHQSxlQS9HQSwyQkErR0E7QUFDQTtBQUNBO0FBQ0EsR0FsSEE7QUFtSEE7QUFDQTtBQUNBLFVBRkEsb0JBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBVkE7QUFXQTtBQUNBO0FBQ0EsU0FiQTs7QUFlQSxLQW5CQTtBQW9CQTtBQUNBLDBCQXJCQSxvQ0FxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsc0JBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBLEtBaENBO0FBaUNBO0FBQ0EsaUJBbENBLDJCQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHNCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQSxLQTlDQTtBQStDQTtBQUNBLFdBaERBLHFCQWdEQTs7O0FBR0EsbUVBSEE7QUFJQSwyQ0FKQTtBQUtBLEtBckRBO0FBc0RBO0FBQ0EsV0F2REEscUJBdURBO0FBQ0E7QUFDQTtBQUNBLEtBMURBO0FBMkRBO0FBQ0EsWUE1REEsc0JBNERBO0FBQ0E7QUFDQTtBQUNBLEtBL0RBO0FBZ0VBO0FBQ0EsV0FqRUEscUJBaUVBO0FBQ0E7QUFDQTtBQUNBLEtBcEVBO0FBcUVBO0FBQ0Esa0JBdEVBLDRCQXNFQTtBQUNBO0FBQ0E7QUFDQSxLQXpFQTtBQTBFQSxRQTFFQSxrQkEwRUE7O0FBRUEsZ0RBRkE7OztBQUtBLHlDQUxBOztBQU9BLGtEQVBBLFNBT0EsS0FQQTtBQVFBLDZHQVJBOzs7QUFXQSw0Q0FYQTs7QUFhQSw0Q0FiQTtBQWNBLHNEQWRBOzs7QUFpQkEsNENBakJBO0FBa0JBLGtDQWxCQTtBQW1CQSxLQTdGQTs7QUErRkE7QUFDQSxlQWhHQSx1QkFnR0EsQ0FoR0EsRUFnR0E7QUFDQTtBQUNBLEtBbEdBLEVBbkhBLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCIgOnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfVwiPlxuXHRcdDwhLS0g6KeC5LyX5Yqg5YWl5oi/6Ze05ZCOIOaaguaXoOS4u+aSre+8iOaPkOekuu+8iSAtLT5cblx0XHQ8dmlldyB2LWlmPVwiaW5mby5yb2xlQ2hvaWNlcyA9PSAyICYmIHBlZXJpZEluZm8ubGVuZ3RoID09IDBcIiBjbGFzcz1cImhpbnRcIlxuXHRcdFx0OnN0eWxlPVwie3RvcDood2luZG93SGVpZ2h0LzItNjApICsgJ3B4Jyx3aWR0aDogd2luZG93V2lkdGggKyAncHgnfVwiPlxuXHRcdFx0PG15TG9hZGluZyAvPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+5pqC5peg5Li75pKtLOivt+iAkOW/g+etieWAmeS4u+aSreWKoOWFpTwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSDop4bpopHmuLLmn5Mo5aSa5Lq6KSAtLT5cblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJDYW52YXNWaWV3XCJcblx0XHRcdDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4JyxwYWRkaW5nVG9wOiBwZWVyaWRJbmZvLmxlbmd0aCA9PSAwID8gJzBweCcgOiAnMjBweCd9XCI+XG5cdFx0XHQ8IS0tIOacrOWcsOinhumikea4suafkyAtLT5cblx0XHRcdDx2aWV3IDpjbGFzcz1cInBlZXJpZEluZm9TdHlsZVwiIHYtaWY9XCJpbmZvLnJvbGVDaG9pY2VzICE9IDJcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdFx0XHRcdDxBUi1DYW52YXNWaWV3IHJlZj1cImxvY2F0aW9uXCIgc3R5bGU9XCJmbGV4OiAxO1wiIHYtaWY9XCJmbGFnXCIgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOWFs+mXreinhumikeWQjuaYvuekuiAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2NhdGlvbi1ub25lXCJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7bGVmdDogdmlkZW8gPyAnLTgwMHB4JyA6ICcwcHgnLGJhY2tncm91bmRDb2xvcjogIHZpZGVvID8gJyc6JyMwQTE2MjEnLG9wYWNpdHk6IHZpZGVvID8gJzAnOicxJ31cIj5cblx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDgwcHg7XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fbGF1bmNoX2xvZ28ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWhpbnRcIj5cblx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwiaGludC10ZXh0XCI+e3tpbmZvLnVpZH19PC90ZXh0PiAtLT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PCEtLSDov5znq6/nlKjmiLfop4bpopHmuLLmn5MgLS0+XG5cdFx0XHQ8dmlldyB2LWZvcj1cInBlZXJpZCBpbiBwZWVyaWRJbmZvXCIgOmtleT1cInBlZXJpZC51aWRcIiA6Y2xhc3M9XCJwZWVyaWRJbmZvU3R5bGVcIj5cblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdFx0XHRcdDxBUi1DYW52YXNWaWV3IDpyZWY9XCIncmVtb3RlJytwZWVyaWQudWlkXCIgc3R5bGU9XCJmbGV4OiAxO1wiIHYtaWY9XCJmbGFnXCIgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOi/nOerr+WFs+mXreinhumikeWQjuaYvuekuiAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2NhdGlvbi1ub25lXCJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7bGVmdDogcGVlcmlkLnZpZGVvU3RhdHVzID8gJy04MDBweCcgOiAnMHB4JyxiYWNrZ3JvdW5kQ29sb3I6ICBwZWVyaWQudmlkZW9TdGF0dXMgPyAnJzonIzBBMTYyMScsb3BhY2l0eTogcGVlcmlkLnZpZGVvU3RhdHVzID8gJzAnOicxJ31cIj5cblx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDgwcHg7XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fbGF1bmNoX2xvZ28ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWhpbnRcIj5cclxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJoaW50LXRleHRcIj57e3BlZXJpZC51aWR9fTwvdGV4dD4gLS0+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3Njcm9sbC12aWV3PlxuXHRcdDwhLS0g55u45YWz5pON5L2cIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwib3B0aW9uc1wiIDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnfVwiPlxuXHRcdFx0PCEtLSDop4bpopHnm7jlhbPmk43kvZwo6Z2e5ri45a6i5pi+56S6KSAtLT5cblx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbTogMjBweDtcIlxuXHRcdFx0XHR2LWlmPVwiaW5mby5yb2xlQ2hvaWNlcyAhPSAyXCI+XG5cdFx0XHRcdDwhLS0g6KeG6aKR5byA5YWzIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJ2aWRlb0ZuXCIgdi1pZj1cImZsYWdcIj5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy92aV9vbi5wbmdcIiB2LWlmPVwidmlkZW9cIj48L2ltYWdlPlxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL3ZpX2luLnBuZ1wiIHYtZWxzZT48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+6KeG6aKRPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwhLS3nm7Tmkq3mqKHlvI8g5re75Yqg5peB6Lev5o6o5rWBICBAY2xpY2s9XCJsaXZlVHJhbnNjb0ZuXCItLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwicHVsbEZuXCIgdi1pZj1cImluZm8uc2NlbmFyaW8gPT0gMVwiPlxuXHRcdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiA3MHB4O2hlaWdodDogNzBweDtcIiBzcmM9XCIuLi8uLi9zdGF0aWMvc2F2ZS1maWxsLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5o6o5rWBPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwhLS0g5YmN5ZCO5pGE5YOP5aS06L2s5o2iIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJjYW1lcmFGblwiIHYtaWY9XCJmbGFnXCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvY2FtZXJhLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5pGE5YOPe3tjYW1lcmE/J+WJjSc6J+WQjid9fTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PCEtLSDpn7PpopHnm7jlhbPmk43kvZwgLS0+XG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7ZmxleERpcmVjdGlvbjogJ3JvdycsanVzdGlmeUNvbnRlbnQ6IGluZm8ucm9sZUNob2ljZXMgIT0gMiA/ICdzcGFjZS1iZXR3ZWVuJzonY2VudGVyJ31cIj5cblx0XHRcdFx0PCEtLSDpn7PpopHlvIDlhbMo6Z2e5ri45a6i5pi+56S6KSAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiYXVkaW9GblwiIHYtaWY9XCJpbmZvLnJvbGVDaG9pY2VzICE9IDJcIj5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9hdV9pbi5wbmdcIiB2LWlmPVwiYXVkaW9cIj48L2ltYWdlPlxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2F1X29uLnBuZ1wiIHYtZWxzZT48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+6Z2Z6Z+zPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwhLS0g5oyC5patIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJjbG9zZUZuXCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvb3Zlci5wbmdcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5oyC5patPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwhLS0g5oms5aOw5Zmo5byA5YWzKOmdnua4uOWuouaYvuekuikgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cInNwZWFrZXJwaG9uZUZuXCIgdi1pZj1cImluZm8ucm9sZUNob2ljZXMgIT0gMlwiPlxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fc3BlYWtlcnMucG5nXCIgdi1pZj1cIlNwZWFrZXJwaG9uZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbl9zcGVha2VyLnBuZ1wiIHYtZWxzZT48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5oms5aOw5ZmoPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0g5peB6Lev5o6o5rWB55u45YWzIC0tPlxuXHRcdDx2aWV3IHYtaWY9XCJsaXZlU2hvd1wiIGNsYXNzPVwibGl2ZVwiIDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4J31cIlxuXHRcdFx0QGNsaWNrPVwicGVuZXRyYXRlRm4oJGV2ZW50KVwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsaXZlLW9wdGlvbnNcIiA6c3R5bGU9XCJ7d2lkdGg6IHdpbmRvd1dpZHRoICsgJ3B4J31cIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj7ms6jmhI/vvJror7fnoa7kv53lvZPliY3kvb/nlKjnmoQgYXBwaWQg5byA6YCa5peB6Lev5o6o5rWB5pyN5Yqh77yM5ZCm5YiZ5bCG5o6o5rWB5aSx6LSlPC90ZXh0PlxuXHRcdFx0XHQ8aW5wdXQgdi1tb2RlbD1cImluZm8ubGl2ZVVybFwiIGNsYXNzPVwibGl2ZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmjqjmtYHlnLDlnYBcIiAvPlxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO2ZsZXgtZGlyZWN0aW9uOiByb3c7bWFyZ2luLXRvcDogNjBweDtcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHN0eWxlPVwid2lkdGg6IDgwcHg7XCIgdHlwZT1cImRlZmF1bHRcIiBAY2xpY2s9XCJsaXZlU2hvdyA9IGZhbHNlXCI+5Y+W5raIPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwibGl2ZVRyYW5zY29GblwiPuehruWumjwvYnV0dG9uPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxyXG5cblxuPHNjcmlwdD5cblx0aW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy91bnRpbC5qc1wiO1xuXHRpbXBvcnQgUlRDIGZyb20gXCIuLi8uLi91dGlscy9ydGMuanNcIjtcblx0aW1wb3J0IG15TG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvbXktbG9hZGluZy9teS1sb2FkaW5nLm52dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHRteUxvYWRpbmdcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZsYWc6dW5pLiRmbGFnLFxuXHRcdFx0XHQvLyBSVEMg5omA6ZyA5L+h5oGvXG5cdFx0XHRcdGluZm86IHt9LFxuXHRcdFx0XHQvLyDnlJ/miJDov5znq6/op4bpopHlrrnlmahcblx0XHRcdFx0cGVlcmlkSW5mbzogW10sXG5cdFx0XHRcdC8vIOi/nOerr+inhumikeWuueWZqOagt+W8j1xuXHRcdFx0XHRwZWVyaWRJbmZvU3R5bGU6IFwidmlkZW9fbG9jYWxcIixcblxuXHRcdFx0XHR3aW5kb3dXaWR0aDogNDAwLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDgwMCxcblxuXHRcdFx0XHQvLyDnm7jlhbPmk43kvZxcblx0XHRcdFx0YXVkaW86IHRydWUsIC8vIOmfs+mikeW8gOWFs1xuXHRcdFx0XHRTcGVha2VycGhvbmU6IHRydWUsIC8vIOWFjeaPkFxuXHRcdFx0XHR2aWRlbzogdHJ1ZSwgLy8g6KeG6aKR5byA5YWzXG5cdFx0XHRcdGNhbWVyYTogdHJ1ZSwgLy8g5pGE5YOP5aS05YmN5ZCOXG5cblx0XHRcdFx0Ly8g5peB6Lev5o6o5rWB55u45YWzXG5cdFx0XHRcdGxpdmVTaG93OiBmYWxzZSxcblx0XHRcdFx0Ly8g5byA5aeL5peB6Lev5o6o5rWBXG5cdFx0XHRcdGxpdmVTdGF0ZTogZmFsc2UsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0cGVlcmlkSW5mbzogZnVuY3Rpb24obmV3TmFtZSkge1xuXHRcdFx0XHQvLyDmoLnmja7nlKjmiLfmlbDph4/mjqfliLbmoLflvI9cblx0XHRcdFx0Y29uc3Qgb0xlbmd0aCA9IHRoaXMuaW5mby5yb2xlQ2hvaWNlcyA9PSAyID8gbmV3TmFtZS5sZW5ndGggOiAobmV3TmFtZS5sZW5ndGggKyAxKTtcblx0XHRcdFx0aWYgKG9MZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0dGhpcy5wZWVyaWRJbmZvU3R5bGUgPSBcInZpZGVvX2xvY2FsXzFcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnBlZXJpZEluZm9TdHlsZSA9IFwidmlkZW9fbG9jYWxcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXN5bmMgY3JlYXRlZCgpIHtcblx0XHRcdGNvbnN0IG9JbmZvID0gYXdhaXQgVXRpbHMuZ2V0V2lkdGhIZWlnaHQoKTtcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSBvSW5mby53aW5kb3dXaWR0aDtcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gb0luZm8ud2luZG93SGVpZ2h0O1xuXHRcdFx0Ly8g55uR5rWL6L+c56uv55So5oi35Yqg5YWlKOWIm+W7uuWuueWZqClcblx0XHRcdHVuaS4kb24oXCJwZWVyaWRKb2luQ2hhbm5lbFwiLCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRjb25zdCBvYSA9IHRoaXMucGVlcmlkSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnVpZCA9PSBkYXRhXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRpZiAob2EubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMucGVlcmlkSW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dWlkOiBkYXRhLFxuXHRcdFx0XHRcdFx0XHR2aWRlb1N0YXR1czogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Ly8gdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gXHR1bmkuJGVtaXQoXCJDYW52YXNWaWV3XCIsIHtcblx0XHRcdFx0XHRcdC8vIFx0XHRyZW1vdGU6IHRoaXMuJHJlZnNbJ3JlbW90ZScgKyBkYXRhXSxcblx0XHRcdFx0XHRcdC8vIFx0XHRwZWVyaWQ6IGRhdGEsXG5cdFx0XHRcdFx0XHQvLyBcdH0pXG5cdFx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyDnm5HmtYvov5znq6/nlKjmiLfnprvlvIAo5Yig6Zmk5a655ZmoKVxuXHRcdFx0dW5pLiRvbihcIlVzZXJPZmZsaW5lXCIsIGRhdGEgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuebkea1i+i/nOerr+eUqOaIt+emu+W8gFwiLCBkYXRhKTtcblx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHR0aGlzLnBlZXJpZEluZm8uc3BsaWNlKHRoaXMucGVlcmlkSW5mby5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnVpZCA9PT0gZGF0YS51aWQpLCAxKTtcblx0XHRcdFx0XHQvLyDlpoLmnpzmjqjmtYHvvIzpnIDopoHph43mlrDmjqjmtYFcblx0XHRcdFx0XHRpZiAodGhpcy5saXZlU3RhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMubGl2ZVRyYW5zY29GbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyDnm5HmtYvov5znq6/nlKjmiLfop4bpopHnirbmgIFcblx0XHRcdHVuaS4kb24oXCJWaWRlb1N0YXRlQ2hhbmdlZFwiLCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHR0aGlzLnBlZXJpZEluZm8ubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0udWlkID09IGRhdGEudWlkKSB7XG5cdFx0XHRcdFx0XHRcdC8vIOi/nOerr+eUqOaIt+WFs+mXreinhumikVxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5yZWFzb24gPT0gNSAmJiBkYXRhLnN0YXRlID09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnZpZGVvU3RhdHVzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0Ly8g6L+c56uv55So5oi35byA5ZCv6KeG6aKRXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS5zdGF0ZSA9PSAyICYmIGRhdGEucmVhc29uID09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnZpZGVvU3RhdHVzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRvbkxvYWQob3B0aW9ucykge1xuXHRcdFx0aWYgKG9wdGlvbnMuaW5mbykge1xuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitLOivt+eojeWQjidcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IG9JbmZvID0gSlNPTi5wYXJzZShvcHRpb25zLmluZm8pO1xuXHRcdFx0XHR0aGlzLmluZm8gPSBPYmplY3QuYXNzaWduKHRoaXMuaW5mbywgb0luZm8pO1xuXHRcdFx0XHQvLyDliJ3lp4vljJZcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0aWYgKHRoaXMuaW5mby5yb2xlQ2hvaWNlcyAhPSAyKSB7XG5cdFx0XHRcdC8vIOS8oOWFpeacrOWcsOinhumikeWuueWZqFxuXHRcdFx0XHR1bmkuJGVtaXQoXCJDYW52YXNWaWV3XCIsIHtcblx0XHRcdFx0XHRsb2NhdGlvbjogdGhpcy4kcmVmcy5sb2NhdGlvblxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XG5cdFx0XHQvLyDnp7vpmaRBcHDnuqfliKvnmoTmiYDmnInkuovku7bnm5HlkKzlmahcblx0XHRcdHVuaS4kb2ZmKCk7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvLyDmjqjmtYEo5Zyo55u05pKt5Zy65pmv5LiLKVxuXHRcdFx0cHVsbEZuKCkge1xuXHRcdFx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xuXHRcdFx0XHRcdGl0ZW1MaXN0OiBbJ+aOqOa1gScsICflgZzmraLmjqjmtYEnXSxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdC8vIOaOqOa1gVxuXHRcdFx0XHRcdFx0aWYgKChyZXMudGFwSW5kZXggKyAxKSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLmxpdmVTaG93ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnJlbW92ZVB1Ymxpc2hTdHJlYW1VcmwoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfpgInkuK3kuobnrKwnICsgKHJlcy50YXBJbmRleCArIDEpICsgJ+S4quaMiemSricpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWBnOatouaXgei3r+aOqOa1gVxuXHRcdFx0cmVtb3ZlUHVibGlzaFN0cmVhbVVybCgpIHtcblx0XHRcdFx0aWYgKHRoaXMubGl2ZVN0YXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5saXZlU3RhdGUgPSBmYWxzZTtcblx0XHRcdFx0XHRSVEMucmVtb3ZlUHVibGlzaFN0cmVhbVVybCh0aGlzLmluZm8ubGl2ZVVybCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7flhYjmjqjmtYFcIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5re75Yqg5peB6Lev5o6o5rWBXG5cdFx0XHRsaXZlVHJhbnNjb0ZuKCkge1xuXHRcdFx0XHRpZiAodGhpcy5pbmZvLmxpdmVVcmwpIHtcblx0XHRcdFx0XHR0aGlzLmxpdmVTaG93ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5saXZlU3RhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdFJUQy5MaXZlVHJhbnNjbyh0aGlzLmluZm8ubGl2ZVVybCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7fovpPlhaXmjqjmtYHlnLDlnYBcIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5oyC5patXG5cdFx0XHRhc3luYyBjbG9zZUZuKCkge1xuXHRcdFx0XHQvLyDplIDmr4Hlrp7kvotcblx0XHRcdFx0Ly8g6L+U5Zue6aaW6aG1XG5cdFx0XHRcdGF3YWl0IHVuaS5uYXZpZ2F0ZUJhY2soe3VybDonL3BhZ2VzL1RVSS1DaGF0L2NoYXQnfSk7XG5cdFx0XHRcdGF3YWl0IFJUQy5kZXN0cm95UnRjKCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g6KeG6aKR5byA5YWzXG5cdFx0XHR2aWRlb0ZuKCkge1xuXHRcdFx0XHR0aGlzLnZpZGVvID0gIXRoaXMudmlkZW87XG5cdFx0XHRcdFJUQy5lbmFibGVMb2NhbFZpZGVvKHRoaXMudmlkZW8pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOaRhOWDj+WktOWJjeWQjlxuXHRcdFx0Y2FtZXJhRm4oKSB7XG5cdFx0XHRcdHRoaXMuY2FtZXJhID0gIXRoaXMuY2FtZXJhO1xuXHRcdFx0XHRSVEMuc3dpdGNoQ2FtZXJhKCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g6Z+z6aKR5byA5YWzXG5cdFx0XHRhdWRpb0ZuKCkge1xuXHRcdFx0XHR0aGlzLmF1ZGlvID0gIXRoaXMuYXVkaW87XG5cdFx0XHRcdFJUQy5lbmFibGVMb2NhbEF1ZGlvKHRoaXMuYXVkaW8pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWFjeaPkFxuXHRcdFx0c3BlYWtlcnBob25lRm4oKSB7XG5cdFx0XHRcdHRoaXMuU3BlYWtlcnBob25lID0gIXRoaXMuU3BlYWtlcnBob25lO1xuXHRcdFx0XHRSVEMuc2V0RW5hYmxlU3BlYWtlcnBob25lKHRoaXMuU3BlYWtlcnBob25lKTtcblx0XHRcdH0sXG5cdFx0XHRhc3luYyBpbml0KCkge1xuXHRcdFx0XHQvLyDliJ3lp4vljJYgUlRDIOWunuS+i1xuXHRcdFx0XHRhd2FpdCBSVEMuaW5pdCh0aGlzLmluZm8pO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6aKR6YGT5Zy65pmv5Lul5Y+K6aKR6YGT6KeS6ImyKOm7mOiupOmAmuS/oeWcuuaZrylcblx0XHRcdFx0aWYgKHRoaXMuaW5mby5zY2VuYXJpbyA9PSAxKSB7XG5cdFx0XHRcdFx0Ly8g55u05pKt5Zy65pmv5LiL6K6+572u6aKR6YGT6KeS6ImyXG5cdFx0XHRcdFx0Y29uc3Qgb1JvbGUgPSBhd2FpdCBSVEMuc2V0Q2hhbm5lbFByb2ZpbGUoKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn55u05pKt5Zy65pmv5LiL6K6+572u6aKR6YGT6KeS6ImyJywgb1JvbGUgPT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOWQr+eUqOinhumikeaooeWdl1xuXHRcdFx0XHRhd2FpdCBSVEMuZW5hYmxlVmlkZW8oKTtcblx0XHRcdFx0Ly8g6KeS6Imy5Li66KeC5LyX5pe2IOWBnOatouacrOWcsOinhumikemHh+mbhlxuXHRcdFx0XHRpZiAodGhpcy5pbmZvLnJvbGVDaG9pY2VzID09IDIpIHtcblx0XHRcdFx0XHRhd2FpdCBSVEMuZW5hYmxlTG9jYWxWaWRlbyhmYWxzZSlcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyDliqDlhaXpopHpgZNcblx0XHRcdFx0YXdhaXQgUlRDLmpvaW5DaGFubmVsKCk7XG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0fSxcclxuXHRcdFx0XG5cdFx0XHQvLyDnpoHmraLnqb/pgI9cblx0XHRcdHBlbmV0cmF0ZUZuKGUpIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0fSxcblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLWJ0bi1pY29ue1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XG5cdC5jb250ZW50IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzMDQxO1xuXHR9XG5cclxuXG5cdC50ZXh0IHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5cblx0Lyog5o+Q56S6ICovXG5cdC5oaW50IHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXG5cdC5sb2NhdGlvbi1ub25lIHtcblx0XHRmbGV4OiAxO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblxuXHQvKiDnlKjmiLfmoIfor4YgKi9cblx0LnVzZXItaGludCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyRjMwNDE7XG5cdFx0b3BhY2l0eTogMC41O1xuXHRcdHBhZGRpbmc6IDRweCAxMHB4O1xuXHR9XG4gICAgXG5cdC5oaW50LXRleHQge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0XG5cdC5DYW52YXNWaWV3IHtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRwYWRkaW5nOiA2MHB4IDAgMDtcblx0fVxuXG5cdC8qIDHkuKrop4bpopEgKi9cblx0LnZpZGVvX2xvY2FsIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0LyogNOS4quinhumikSAqL1xuXHQudmlkZW9fbG9jYWxfMSB7XG5cdFx0d2lkdGg6IDM3NXJweDtcblx0XHRoZWlnaHQ6IDQyMHJweDtcblx0fVxuXG5cdC8qIOebuOWFs+aTjeS9nCAqL1xuXHQub3B0aW9ucyB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMjBweDtcblx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblxuXHQuaWNvbiB7XG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjsgKi9cblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0Lmljb25faW1nIHtcblx0XHR3aWR0aDogNjBweDtcblx0XHRoZWlnaHQ6IDYwcHg7XG5cdH1cblxuXHQuaWNvbl90ZXh0IHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW46IDEwcHg7XG5cdH1cblxuXHQvKiDml4Hot6/mjqjmtYEgKi9cblx0LmxpdmUge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRcdG9wYWNpdHk6IDAuODtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0LmxpdmUtaW5wdXQge1xuXHRcdGhlaWdodDogMTEwcnB4O1xuXHRcdHBhZGRpbmc6IDAgMjZweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzMDQxO1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdC5saXZlLW9wdGlvbnMge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0cGFkZGluZzogMCAyMHB4O1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 11 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 12);

/***/ }),
/* 12 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/utils/until.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));var _permission = _interopRequireDefault(__webpack_require__(/*! ../js_sdk/wa-permission/permission.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar Utils = {\n  // 平台分类查询权限\n  equipment: function equipment() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oa, ob, _oa, _ob;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n              uni.getSystemInfoSync().platform == 'ios')) {_context.next = 11;break;}_context.next = 3;return (\n\n                Utils.requestAndroidPermission(\"camera\", 'ios', '相机'));case 3:oa = _context.sent;_context.next = 6;return (\n\n                Utils.requestAndroidPermission(\"record\", 'ios', '录音'));case 6:ob = _context.sent;_context.next = 9;return (\n                uni.showToast({\n                  title: oa + \";\" + ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 9:_context.next = 18;break;case 11:if (!(\n\n              uni.getSystemInfoSync().platform === 'android')) {_context.next = 18;break;}_context.next = 14;return (\n\n                Utils.requestAndroidPermission(\"android.permission.CAMERA\", 'android', '相机'));case 14:_oa = _context.sent;_context.next = 17;return (\n\n                Utils.requestAndroidPermission(\"android.permission.RECORD_AUDIO\", 'android', '录音'));case 17:_ob = _context.sent;case 18:case \"end\":return _context.stop();}}}, _callee);}))();\n\n\n\n\n\n\n  },\n  // 查询权限封装\n  requestAndroidPermission: function requestAndroidPermission(permisionID, type, libe) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result, strStatus;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              result = 0;\n              strStatus = \"\";if (!(\n              type == 'ios')) {_context2.next = 8;break;}_context2.next = 5;return _permission.default.judgeIosPermission(permisionID);case 5:result = _context2.sent;_context2.next = 11;break;case 8:_context2.next = 10;return _permission.default.\n              requestAndroidPermission(\n              permisionID);case 10:result = _context2.sent;case 11:\n              if (result == 1) {\n                strStatus = \"已获得授权,可正常使用\";\n              } else if (result == 0) {\n                strStatus = \"未获得授权,无法使用\";\n              } else {\n                strStatus = \"被永久拒绝权限,无法使用\";\n              };return _context2.abrupt(\"return\",\n              libe + strStatus);case 14:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  // 获取高度宽度\n  getWidthHeight: function getWidthHeight() {\n    var obj = {\n      windowWidth: 0,\n      windowHeight: 0 };\n\n    uni.getSystemInfo({\n      success: function success(res) {\n        obj = Object.assign(obj, res);\n      } });\n\n    return obj;\n  },\n  // 生成随机字符串（支持自定义字符长度和特征字符集合）\n  randomFn: function randomFn(len, charSet) {\n    charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';\n    var randomString = '';\n    for (var i = 0; i < len; i++) {\n      var randomPoz = Math.floor(Math.random() * charSet.length);\n      randomString += charSet.substring(randomPoz, randomPoz + 1);\n    }\n    return randomString;\n  } };var _default =\n\nUtils;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdW50aWwuanMiXSwibmFtZXMiOlsiVXRpbHMiLCJlcXVpcG1lbnQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwib2EiLCJvYiIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGVybWlzaW9uSUQiLCJ0eXBlIiwibGliZSIsInJlc3VsdCIsInN0clN0YXR1cyIsInBlcm1pc2lvbiIsImp1ZGdlSW9zUGVybWlzc2lvbiIsImdldFdpZHRoSGVpZ2h0Iiwib2JqIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIk9iamVjdCIsImFzc2lnbiIsInJhbmRvbUZuIiwibGVuIiwiY2hhclNldCIsInJhbmRvbVN0cmluZyIsImkiLCJyYW5kb21Qb3oiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiIyTUFBQSwrRztBQUNBLElBQU1BLEtBQUssR0FBRztBQUNiO0FBQ01DLFdBRk8sdUJBRUs7O0FBRWJDLGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixJQUFvQyxLQUZ2Qjs7QUFJREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsRUFBZ0QsSUFBaEQsQ0FKQyxTQUlaQyxFQUpZOztBQU1ETixxQkFBSyxDQUFDSyx3QkFBTixDQUErQixRQUEvQixFQUF5QyxLQUF6QyxFQUFnRCxJQUFoRCxDQU5DLFNBTVpFLEVBTlk7QUFPVkwsbUJBQUcsQ0FBQ00sU0FBSixDQUFjO0FBQ25CQyx1QkFBSyxFQUFFSCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQURDO0FBRW5CRyxzQkFBSSxFQUFFLE1BRmE7QUFHbkJDLDBCQUFRLEVBQUUsSUFIUyxFQUFkLENBUFU7O0FBWU5ULGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixLQUFxQyxTQVovQjs7QUFjREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsMkJBQS9CLEVBQTRELFNBQTVELEVBQXVFLElBQXZFLENBZEMsVUFjWkMsR0FkWTs7QUFnQkROLHFCQUFLLENBQUNLLHdCQUFOLENBQStCLGlDQUEvQixFQUFrRSxTQUFsRSxFQUE2RSxJQUE3RSxDQWhCQyxVQWdCWkUsR0FoQlk7Ozs7Ozs7QUF1QmpCLEdBekJZO0FBMEJiO0FBQ01GLDBCQTNCTyxvQ0EyQmtCTyxXQTNCbEIsRUEyQitCQyxJQTNCL0IsRUEyQnFDQyxJQTNCckMsRUEyQjJDO0FBQ25EQyxvQkFEbUQsR0FDMUMsQ0FEMEM7QUFFbkRDLHVCQUZtRCxHQUV2QyxFQUZ1QztBQUd2REgsa0JBQUksSUFBSSxLQUgrQyx3REFHeEJJLG9CQUFVQyxrQkFBVixDQUE2Qk4sV0FBN0IsQ0FId0IsUUFHdkNHLE1BSHVDLDhFQUdtQ0U7QUFDeEZaLHNDQUR3RjtBQUV4Rk8seUJBRndGLENBSG5DLFNBR29CRyxNQUhwQjtBQU12RCxrQkFBSUEsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDaEJDLHlCQUFTLEdBQUcsYUFBWjtBQUNBLGVBRkQsTUFFTyxJQUFJRCxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUN2QkMseUJBQVMsR0FBRyxZQUFaO0FBQ0EsZUFGTSxNQUVBO0FBQ05BLHlCQUFTLEdBQUcsY0FBWjtBQUNBLGdCQVpzRDtBQWFoREYsa0JBQUksR0FBR0UsU0FieUM7QUFjdkQsR0F6Q1k7QUEwQ2I7QUFDQUcsZ0JBM0NhLDRCQTJDSTtBQUNoQixRQUFJQyxHQUFHLEdBQUc7QUFDVEMsaUJBQVcsRUFBRSxDQURKO0FBRVRDLGtCQUFZLEVBQUUsQ0FGTCxFQUFWOztBQUlBcEIsT0FBRyxDQUFDcUIsYUFBSixDQUFrQjtBQUNqQkMsYUFBTyxFQUFFLGlCQUFTQyxHQUFULEVBQWM7QUFDdEJMLFdBQUcsR0FBR00sTUFBTSxDQUFDQyxNQUFQLENBQWNQLEdBQWQsRUFBbUJLLEdBQW5CLENBQU47QUFDQSxPQUhnQixFQUFsQjs7QUFLQSxXQUFPTCxHQUFQO0FBQ0EsR0F0RFk7QUF1RGI7QUFDQVEsVUF4RGEsb0JBd0RKQyxHQXhESSxFQXdEQ0MsT0F4REQsRUF3RFU7QUFDdEJBLFdBQU8sR0FBR0EsT0FBTyxJQUFJLHNDQUFyQjtBQUNBLFFBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsR0FBcEIsRUFBeUJHLENBQUMsRUFBMUIsRUFBOEI7QUFDN0IsVUFBSUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixPQUFPLENBQUNPLE1BQW5DLENBQWhCO0FBQ0FOLGtCQUFZLElBQUlELE9BQU8sQ0FBQ1EsU0FBUixDQUFrQkwsU0FBbEIsRUFBNkJBLFNBQVMsR0FBRyxDQUF6QyxDQUFoQjtBQUNBO0FBQ0QsV0FBT0YsWUFBUDtBQUNBLEdBaEVZLEVBQWQsQzs7QUFrRWUvQixLIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBlcm1pc2lvbiBmcm9tIFwiLi4vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qc1wiXG5jb25zdCBVdGlscyA9IHtcblx0Ly8g5bmz5Y+w5YiG57G75p+l6K+i5p2D6ZmQXG5cdGFzeW5jIGVxdWlwbWVudCgpIHtcblx0XHQvLyDmn6XnnIvmnYPpmZBcblx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcblx0XHRcdC8v5p+l55yL55u45py65p2D6ZmQXG5cdFx0XHRsZXQgb2EgPSBhd2FpdCBVdGlscy5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oXCJjYW1lcmFcIiwgJ2lvcycsICfnm7jmnLonKTtcblx0XHRcdC8v5p+l55yL5b2V6Z+z5p2D6ZmQXG5cdFx0XHRsZXQgb2IgPSBhd2FpdCBVdGlscy5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oXCJyZWNvcmRcIiwgJ2lvcycsICflvZXpn7MnKTtcblx0XHRcdGF3YWl0IHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogb2EgKyBcIjtcIiArIG9iLFxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT09ICdhbmRyb2lkJykge1xuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcblx0XHRcdGxldCBvYSA9IGF3YWl0IFV0aWxzLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcImFuZHJvaWQucGVybWlzc2lvbi5DQU1FUkFcIiwgJ2FuZHJvaWQnLCAn55u45py6Jyk7XG5cdFx0XHQvL+afpeeci+W9lemfs+adg+mZkFxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJT1wiLCAnYW5kcm9pZCcsICflvZXpn7MnKTtcblx0XHRcdC8vIGF3YWl0IHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0Ly8gXHR0aXRsZTogb2EgKyBcIjtcIiArIG9iLFxuXHRcdFx0Ly8gXHRpY29uOiBcIm5vbmVcIixcblx0XHRcdC8vIFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdC8vIH0pO1xuXHRcdH1cblx0fSxcblx0Ly8g5p+l6K+i5p2D6ZmQ5bCB6KOFXG5cdGFzeW5jIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNpb25JRCwgdHlwZSwgbGliZSkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHRcdGxldCBzdHJTdGF0dXMgPSBcIlwiO1xuXHRcdHR5cGUgPT0gJ2lvcycgPyByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb24uanVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc2lvbklEKSA6IHJlc3VsdCA9IGF3YWl0IHBlcm1pc2lvblxuXHRcdFx0LnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcblx0XHRcdFx0cGVybWlzaW9uSUQpO1xuXHRcdGlmIChyZXN1bHQgPT0gMSkge1xuXHRcdFx0c3RyU3RhdHVzID0gXCLlt7LojrflvpfmjojmnYMs5Y+v5q2j5bi45L2/55SoXCJcblx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PSAwKSB7XG5cdFx0XHRzdHJTdGF0dXMgPSBcIuacquiOt+W+l+aOiOadgyzml6Dms5Xkvb/nlKhcIlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHJTdGF0dXMgPSBcIuiiq+awuOS5heaLkue7neadg+mZkCzml6Dms5Xkvb/nlKhcIlxuXHRcdH07XG5cdFx0cmV0dXJuIGxpYmUgKyBzdHJTdGF0dXNcblx0fSxcblx0Ly8g6I635Y+W6auY5bqm5a695bqmXG5cdGdldFdpZHRoSGVpZ2h0KCkge1xuXHRcdGxldCBvYmogPSB7XG5cdFx0XHR3aW5kb3dXaWR0aDogMCxcblx0XHRcdHdpbmRvd0hlaWdodDogMCxcblx0XHR9XG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdG9iaiA9IE9iamVjdC5hc3NpZ24ob2JqLCByZXMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIG9ialxuXHR9LFxuXHQvLyDnlJ/miJDpmo/mnLrlrZfnrKbkuLLvvIjmlK/mjIHoh6rlrprkuYnlrZfnrKbplb/luqblkoznibnlvoHlrZfnrKbpm4blkIjvvIlcblx0cmFuZG9tRm4obGVuLCBjaGFyU2V0KSB7XG5cdFx0Y2hhclNldCA9IGNoYXJTZXQgfHwgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cdFx0bGV0IHJhbmRvbVN0cmluZyA9ICcnO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGxldCByYW5kb21Qb3ogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyU2V0Lmxlbmd0aCk7XG5cdFx0XHRyYW5kb21TdHJpbmcgKz0gY2hhclNldC5zdWJzdHJpbmcocmFuZG9tUG96LCByYW5kb21Qb3ogKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJhbmRvbVN0cmluZztcblx0fSxcbn1cbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/js_sdk/wa-permission/permission.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FB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QVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*****************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/utils/rtc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));\nvar _classes = __webpack_require__(/*! ./classes.js */ 17);\n\n\n\n\n\n\nvar _code = _interopRequireDefault(__webpack_require__(/*! ./code.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} // rtc 音视频引入\nvar rtcModule = __webpack_provided_uni_dot_requireNativePlugin('AR-RtcModule'); // 错误码\n// 本地暂存\nvar Store = { // 本地视频容器\n  location: null,\n  // 远端食品容器（多人）\n  remoteLits: [] };\n\n\n// rtc 实时音频通话\nvar RTC = {\n  // 初始化\n  init: function () {var _init = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(info) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              Store = Object.assign(Store, info);\n              // 初始化回调 \n              _context.next = 3;return rtcModule.setCallBack(function (res) {\n                RTC.callBack(res);\n              });case 3:_context.next = 5;return (\n\n                rtcModule.create({\n                  \"appId\": Store.appid },\n                function (res) {\n                  __f__(\"log\", '初始化实例 rtc', res, \" at utils/rtc.js:31\");\n                }));case 5:_context.next = 7;return (\n\n\n                rtcModule.setParameters({\n                  Cmd: 'SetForceUseAec',\n                  Enable: true },\n                function (res) {\n                  __f__(\"log\", '私人定制', res, \" at utils/rtc.js:39\");\n                }));case 7:case \"end\":return _context.stop();}}}, _callee);}));function init(_x) {return _init.apply(this, arguments);}return init;}(),\n\n\n  // 相关回调(仅列举常用回调)\n  callBack: function callBack(res) {\n    switch (res.engineEvent) {\n      // 发生警告回调\n      case \"onWarning\":\n        uni.showToast({\n          title: _code.default.warning[res.warningCode] || \"未知警告\",\n          icon: 'none',\n          duration: 2000 });\n\n        break;\n      // 发生错误回调\n      case \"onError\":\n        uni.showToast({\n          title: _code.default.errore[res.errorCode] || \"未知错误\",\n          icon: 'none',\n          duration: 2000 });\n\n        break;\n      // 加入频道成功回调\n      case \"onJoinChannelSuccess\":\n        // 角色为观众时 停止本地视频渲染\n        if (Store.roleChoices != 2) {\n          // 本地渲染\n          RTC.localVideo({\n            \"channel\": Store.channelId + '',\n            \"uid\": Store.uid + '' });\n\n        }\n        break;\n      // 远端用户加入当前频道回调\n      case \"onUserJoined\":\n        uni.showToast({\n          title: '用户' + res.uid + '加入频道',\n          icon: 'none',\n          duration: 2000 });\n\n\n        break;\n      // 远端用户离开当前频道回调\n      case \"onUserOffline\":\n        uni.showToast({\n          title: '远端用户' + res.uid + '离开频道',\n          icon: 'none',\n          duration: 2000 });\n\n        uni.$emit(\"UserOffline\", res);\n        // 清除对应的本地存放\n        Store.remoteLits.splice(Store.remoteLits.findIndex(function (item) {return item.peerid == res.uid;}), 1);\n        break;\n      // 已显示远端视频首帧回调\n      case \"onFirstRemoteVideoDecoded\":\n        __f__(\"log\", \"已显示远端视频首帧回调\", res, \" at utils/rtc.js:95\");\n        uni.$emit(\"peeridJoinChannel\", res.uid);\n        break;\n      // 远端用户视频状态发生已变化回调(当频道内的用户超过 17 时，该回调可能不准确)\n      case \"onRemoteVideoStateChanged\":\n        __f__(\"log\", \"远端用户视频状态发生已变化回调\", res, \" at utils/rtc.js:100\");\n        uni.$emit(\"VideoStateChanged\", res);\n        break;\n      // 旁路推流状态\n      case \"onRtmpStreamingStateChanged\":\n        uni.showToast({\n          title: _code.default.live.state[res.state] + _code.default.live.error[res.errorCode],\n          icon: 'none',\n          duration: 2000 });\n\n        __f__(\"log\", \"旁路推流状态\", res, \" at utils/rtc.js:110\");\n        break;\n      // \t// 网络连接状态已改变回调\n      // case \"onConnectionStateChanged\":\n      // \tbreak;\n      // \t// 已显示远端视频首帧回调\n      // case \"onFirstRemoteVideoFrame\":\n      // \tbreak;\n      // \t// 本地网络类型发生改变回调\n      // case \"onNetworkTypeChanged\":\n      // \tbreak;\n      // \t// 网络连接中断\n      // case \"onConnectionLost\":\n      // \tbreak;\n      // \t// 远端音频状态发生改变回调\n      // case \"onRemoteAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地音频状态发生改变回调\n      // case \"onLocalAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地视频状态发生改变回调\n      // case \"onLocalVideoStateChanged\":\n      // \tbreak;\n      // \t// 重新加入频道回调\n      // case \"onRejoinChannelSuccess\":\n      // \tbreak;\n      // \t// 离开频道回调\n      // case \"onLeaveChannel\":\n      // \tbreak;\n      // 已发送本地音频首帧回调\n      // case \"onFirstLocalAudioFrame\":\n      // \tbreak;\n      // \t// 已显示本地视频首帧回调\n      // case \"onFirstLocalVideoFrame\":\n      // \tbreak;\n      // \t// Token 服务即将过期回调\n      // case \"onTokenPrivilegeWillExpire\":\n      // \tbreak;\n      // \t// Token 过期回调\n      // case \"onRequestToken\":\n      // \tbreak;\n      // \t// 用户角色已切换回调(直播场景下)\n      // case \"onClientRoleChanged\":\n      // \tbreak;\n      // \t// 本地或远端视频大小或旋转信息发生改变回调\n      // case \"onVideoSizeChanged\":\n      // \tbreak;\n      // \t// 通话中远端音频流的统计信息回调\n      // case \"onRemoteAudioStats\":\n      // \tbreak;\n      // \t// 当前通话统计回调。 该回调在通话中每两秒触发一次\n      // case \"onRtcStats\":\n      // \tbreak;\n      // \t// 通话中每个用户的网络上下行 last mile 质量报告回调\n      // case \"onNetworkQuality\":\n      // \tbreak;\n      // \t// 通话中本地视频流的统计信息回调\n      // case \"onLocalVideoStats\":\n      // \tbreak;\n      // \t// 通话中本地音频流的统计信息回调\n      // case \"onLocalAudioStats\":\n      // \tbreak;\n      // \t// 通话中远端视频流的统计信息回调\n      // case \"onRemoteVideoStats\":\n      // \tbreak;\n    }\n  },\n  // 设置频道场景以及频道角色\n  setChannelProfile: function () {var _setChannelProfile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                new Promise(function (resolve, reject) {\n                  __f__(\"log\", \"设置频道场景以及频道角色\", Store, \" at utils/rtc.js:180\");\n                  // 设置频道场景\n                  rtcModule.setChannelProfile({\n                    \"profile\": Number(Store.scenario) },\n                  function (res) {\n                    if (res.code == 0) {\n                      // 设置频道角色\n                      rtcModule.setClientRole({\n                        \"role\": Number(Store.roleChoices) },\n                      function (res) {\n                        resolve(res.code);\n                      });\n                    }\n                  });\n                }));case 2:return _context2.abrupt(\"return\", _context2.sent);case 3:case \"end\":return _context2.stop();}}}, _callee2);}));function setChannelProfile() {return _setChannelProfile.apply(this, arguments);}return setChannelProfile;}(),\n\n\n  // 启用视频（加入房间后自动发布）\n  enableVideo: function () {var _enableVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                rtcModule.enableVideo(function (res) {\n                  __f__(\"log\", 'RTC 启用视频 enableVideo 方法调用', (res.code === 0 ? '成功' : '失败：') +\n                  res, \" at utils/rtc.js:215\");\n                }));case 2:case \"end\":return _context3.stop();}}}, _callee3);}));function enableVideo() {return _enableVideo.apply(this, arguments);}return enableVideo;}(),\n\n  // 加入频道\n  joinChannel: function () {var _joinChannel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (\n\n\n\n                rtcModule.joinChannel({\n                  \"token\": Store.token,\n                  \"channelId\": Store.channel,\n                  \"uid\": Store.uid },\n                function (res) {\n                  __f__(\"log\", 'RTC joinChannel 方法调用', (res.code === 0 ? '成功' : '失败：') + res, \" at utils/rtc.js:229\");\n                }));case 2:_context4.next = 4;return (\n                RTC.setEnableSpeakerphone(true));case 4:case \"end\":return _context4.stop();}}}, _callee4);}));function joinChannel() {return _joinChannel.apply(this, arguments);}return joinChannel;}(),\n\n  // 音频是否免提\n  setEnableSpeakerphone: function setEnableSpeakerphone(enable) {\n    // 默认扬声器播放\n    rtcModule.setEnableSpeakerphone({\n      \"enabled\": enable },\n    function (res) {\n      __f__(\"log\", 'RTC 远端加入房间后设置' + (enable ? '开启' : '关闭') + '扬声器播放', res.code === 0 ? '成功' :\n      '失败：' +\n      res, \" at utils/rtc.js:239\");\n    });\n  },\n  // 音频是否关闭\n  enableLocalAudio: function enableLocalAudio(checked) {\n    rtcModule.enableLocalAudio({\n      \"enabled\": checked },\n    function (res) {\n      __f__(\"log\", 'RTC 音频' + (checked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res, \" at utils/rtc.js:249\");\n    });\n  },\n  // 本地视频是否采集\n  enableLocalVideo: function enableLocalVideo(checked) {\n    rtcModule.enableLocalVideo({\n      \"enabled\": checked },\n    function (res) {\n      __f__(\"log\", 'RTC 视频' + (checked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res, \" at utils/rtc.js:257\");\n    });\n  },\n  // 摄像头（前后）\n  switchCamera: function switchCamera() {\n    // rtcModule.switchCamera((res) => {\n    // \tconsole.log('RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' +\n    // \t\tres);\n    // })\n\n    rtcModule.muteLocalAudioStream({\n      \"view\": Store.location.eval() },\n    function (res) {\n\n    });\n  },\n  // 转语音\n  toSpeech: function toSpeech() {\n    // 关闭视频模块\n    rtcModule.disableVideo(function (res) {\n      __f__(\"log\", 'RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at utils/rtc.js:277\");\n    });\n  },\n  // 本地启用视频后\n  localVideo: function () {var _localVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n              __f__(\"log\", \"本地启用视频后\", Store, \" at utils/rtc.js:283\");\n              // // 渲染视频\n              _context5.next = 3;return Store.location.setupLocalVideo({\n                \"renderMode\": 1,\n                \"channelId\": data.channel,\n                \"uid\": data.uid,\n                \"mirrorMode\": 0 },\n              function (res) {\n                __f__(\"log\", '渲染视频', res, \" at utils/rtc.js:291\");\n              });case 3:_context5.next = 5;return (\n\n                Store.location.startPreview(function (res) {\n                  __f__(\"log\", '本地预览', res, \" at utils/rtc.js:295\");\n                }));case 5:case \"end\":return _context5.stop();}}}, _callee5);}));function localVideo(_x2) {return _localVideo.apply(this, arguments);}return localVideo;}(),\n\n\n\n  // 远端加入房间后进行 (多人)\n  remotenableVideo: function remotenableVideo(data) {\n    __f__(\"log\", \"远端加入房间后进行\", Store.remoteLits, \" at utils/rtc.js:302\");\n    __f__(\"log\", \"远端加入房间后进行\", data, \" at utils/rtc.js:303\");\n    Store.remoteLits.map( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(item) {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:if (!(\n                item.peerid == data.uid)) {_context6.next = 6;break;}\n                __f__(\"log\", \"频道\", Store.channel, \" at utils/rtc.js:306\");_context6.next = 4;return (\n                  item.remote[0].setupRemoteVideo({\n                    \"uid\": item.peerid,\n                    \"channelId\": Store.channel,\n                    \"renderMode\": 0,\n                    \"mirrorMode\": 0 },\n                  function (res) {\n                    __f__(\"log\", '渲染远端视频', res, \" at utils/rtc.js:313\");\n                  }));case 4:_context6.next = 6;return (\n\n                  item.remote[0].startPreview(function (res) {\n                    __f__(\"log\", '远端本地预览', res, \" at utils/rtc.js:317\");\n                  }));case 6:case \"end\":return _context6.stop();}}}, _callee6);}));return function (_x3) {return _ref.apply(this, arguments);};}());\n\n\n  },\n  /**\r\n      * 如果你只在一个页面写 可以直接调 destory \r\n     \t如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel\r\n      */\n  // 挂断\n  leave: function leave() {\n    // 离开频道\n    rtcModule.leaveChannel(function (res) {\n      __f__(\"log\", \"调用离开频道 leaveChannel\", res, \" at utils/rtc.js:330\");\n    });\n  },\n  // 销毁实例\n  destroyRtc: function destroyRtc() {\n    // 销毁实例\n    rtcModule.destroyRtc(function (res) {\n      __f__(\"log\", \"销毁实例\", res, \" at utils/rtc.js:337\");\n      // if (res.code === 0) {\n      // \tRTCUtils.destroyRtc();\n      // }\n    });\n  },\n  /**\r\n      * 旁路推流 \r\n      */\n  LiveTransco: function () {var _LiveTransco = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(urlLive) {var Enabled,oAlls,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:Enabled = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : true;\n              // 默认当前频道所有成员推流\n              // 获取所有成员视频样式\n              oAlls = [];\n              __f__(\"log\", Store, \" at utils/rtc.js:350\");\n              // 角色非观众\n              if (Store.roleChoices != 2) {\n                // 添加本地成员\n                oAlls.push(new _classes.TranscodingUser(Store.uid, {\n                  width: 280,\n                  height: 210,\n                  x: 0,\n                  y: 0 }));\n\n              }\n              // 添加远端成员\n              Store.remoteLits.map(function (item, index) {\n                var oIndex = oAlls.length > 0 ? index + 1 : index;\n                oAlls.push(new _classes.TranscodingUser(item.peerid, {\n                  width: 280,\n                  height: 210,\n                  x: oIndex % 3 * 280,\n                  y: Math.floor(oIndex / 3) * 210 }));\n\n              });\n              __f__(\"log\", oAlls, \" at utils/rtc.js:371\");\n              // 设置旁路推流的视频样式(三列)\n              _context7.next = 8;return rtcModule.setLiveTranscoding({\n                \"transcoding\": new _classes.LiveTranscoding(oAlls, {\n                  width: 840,\n                  height: Math.ceil(oAlls.length / 3) * 210 }) },\n\n              function (ret) {\n                __f__(\"log\", ret, \" at utils/rtc.js:379\");\n              });case 8:_context7.next = 10;return (\n\n                rtcModule.addPublishStreamUrl({\n                  url: urlLive,\n                  transcodingEnabled: Enabled },\n                function (res) {\n                  __f__(\"log\", \"添加旁路推流\", res, \" at utils/rtc.js:386\");\n                }));case 10:case \"end\":return _context7.stop();}}}, _callee7);}));function LiveTransco(_x4) {return _LiveTransco.apply(this, arguments);}return LiveTransco;}(),\n\n  // 取消推流\n  removePublishStreamUrl: function removePublishStreamUrl(urlLive) {\n    // 添加旁路推流\n    rtcModule.removePublishStreamUrl({\n      url: urlLive },\n    function (res) {\n      __f__(\"log\", \"取消旁路推流\", res, \" at utils/rtc.js:395\");\n    });\n  } };\n\n\n// 监测视频容器\nuni.$on(\"CanvasView\", function (data) {\n  // 本地视频容器\n  if (data.location) {\n    Store = Object.assign(Store, {\n      location: data.location });\n\n    // 远端视频容器\n  } else if (data.peerid && data.remote) {\n    var oa = Store.remoteLits.filter(function (item) {\n      return item.peerid == data.peerid;\n    });\n    if (oa.length == 0) {\n      Store.remoteLits.push(data);\n      setTimeout(function () {\n        RTC.remotenableVideo({\n          uid: data.peerid });\n\n      }, 500);\n    }\n  }\n});var _default =\n\nRTC;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 16)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcnRjLmpzIl0sIm5hbWVzIjpbInJ0Y01vZHVsZSIsInVuaSIsIlN0b3JlIiwibG9jYXRpb24iLCJyZW1vdGVMaXRzIiwiUlRDIiwiaW5pdCIsImluZm8iLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRDYWxsQmFjayIsInJlcyIsImNhbGxCYWNrIiwiY3JlYXRlIiwiYXBwaWQiLCJzZXRQYXJhbWV0ZXJzIiwiQ21kIiwiRW5hYmxlIiwiZW5naW5lRXZlbnQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIkNvZGUiLCJ3YXJuaW5nIiwid2FybmluZ0NvZGUiLCJpY29uIiwiZHVyYXRpb24iLCJlcnJvcmUiLCJlcnJvckNvZGUiLCJyb2xlQ2hvaWNlcyIsImxvY2FsVmlkZW8iLCJjaGFubmVsSWQiLCJ1aWQiLCIkZW1pdCIsInNwbGljZSIsImZpbmRJbmRleCIsIml0ZW0iLCJwZWVyaWQiLCJsaXZlIiwic3RhdGUiLCJlcnJvciIsInNldENoYW5uZWxQcm9maWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJOdW1iZXIiLCJzY2VuYXJpbyIsImNvZGUiLCJzZXRDbGllbnRSb2xlIiwiZW5hYmxlVmlkZW8iLCJqb2luQ2hhbm5lbCIsInRva2VuIiwiY2hhbm5lbCIsInNldEVuYWJsZVNwZWFrZXJwaG9uZSIsImVuYWJsZSIsImVuYWJsZUxvY2FsQXVkaW8iLCJjaGVja2VkIiwiZW5hYmxlTG9jYWxWaWRlbyIsInN3aXRjaENhbWVyYSIsIm11dGVMb2NhbEF1ZGlvU3RyZWFtIiwiZXZhbCIsInRvU3BlZWNoIiwiZGlzYWJsZVZpZGVvIiwiZGF0YSIsInNldHVwTG9jYWxWaWRlbyIsInN0YXJ0UHJldmlldyIsInJlbW90ZW5hYmxlVmlkZW8iLCJtYXAiLCJyZW1vdGUiLCJzZXR1cFJlbW90ZVZpZGVvIiwibGVhdmUiLCJsZWF2ZUNoYW5uZWwiLCJkZXN0cm95UnRjIiwiTGl2ZVRyYW5zY28iLCJ1cmxMaXZlIiwiRW5hYmxlZCIsIm9BbGxzIiwicHVzaCIsIlRyYW5zY29kaW5nVXNlciIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJpbmRleCIsIm9JbmRleCIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInNldExpdmVUcmFuc2NvZGluZyIsIkxpdmVUcmFuc2NvZGluZyIsImNlaWwiLCJyZXQiLCJhZGRQdWJsaXNoU3RyZWFtVXJsIiwidXJsIiwidHJhbnNjb2RpbmdFbmFibGVkIiwicmVtb3ZlUHVibGlzaFN0cmVhbVVybCIsIiRvbiIsIm9hIiwiZmlsdGVyIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBT0EsNkUsZ3RCQUhBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyw4Q0FBQSxDQUF3QixjQUF4QixDQUFsQixDLENBQ0E7QUFFQTtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUNYO0FBQ0FDLFVBQVEsRUFBRSxJQUZDO0FBR1g7QUFDQUMsWUFBVSxFQUFFLEVBSkQsRUFBWjs7O0FBT0E7QUFDQSxJQUFNQyxHQUFHLEdBQUc7QUFDWDtBQUNBQyxNQUFJLHFGQUFFLGlCQUFlQyxJQUFmO0FBQ0xMLG1CQUFLLEdBQUdNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxLQUFkLEVBQXFCSyxJQUFyQixDQUFSO0FBQ0E7QUFGSyx1Q0FHQ1AsU0FBUyxDQUFDVSxXQUFWLENBQXNCLFVBQUFDLEdBQUcsRUFBSTtBQUNsQ04sbUJBQUcsQ0FBQ08sUUFBSixDQUFhRCxHQUFiO0FBQ0EsZUFGSyxDQUhEOztBQU9DWCx5QkFBUyxDQUFDYSxNQUFWLENBQWlCO0FBQ3RCLDJCQUFTWCxLQUFLLENBQUNZLEtBRE8sRUFBakI7QUFFSCwwQkFBQUgsR0FBRyxFQUFJO0FBQ1QsK0JBQVksV0FBWixFQUF5QkEsR0FBekI7QUFDQSxpQkFKSyxDQVBEOzs7QUFjQ1gseUJBQVMsQ0FBQ2UsYUFBVixDQUF3QjtBQUMzQkMscUJBQUcsRUFBRSxnQkFEc0I7QUFFM0JDLHdCQUFNLEVBQUUsSUFGbUIsRUFBeEI7QUFHRCwwQkFBQ04sR0FBRCxFQUFT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QUFJLENBQUMxQixNQUFMLElBQWUwQixJQUFJLENBQUNLLE1BQXhCLEVBQWdDO0FBQ3RDLFFBQU02QixFQUFFLEdBQUc5RixLQUFLLENBQUNFLFVBQU4sQ0FBaUI2RixNQUFqQixDQUF3QixVQUFBOUQsSUFBSSxFQUFJO0FBQzFDLGFBQU9BLElBQUksQ0FBQ0MsTUFBTCxJQUFlMEIsSUFBSSxDQUFDMUIsTUFBM0I7QUFDQSxLQUZVLENBQVg7QUFHQSxRQUFJNEQsRUFBRSxDQUFDWixNQUFILElBQWEsQ0FBakIsRUFBb0I7QUFDbkJsRixXQUFLLENBQUNFLFVBQU4sQ0FBaUJ3RSxJQUFqQixDQUFzQmQsSUFBdEI7QUFDQW9DLGdCQUFVLENBQUMsWUFBTTtBQUNoQjdGLFdBQUcsQ0FBQzRELGdCQUFKLENBQXFCO0FBQ3BCbEMsYUFBRyxFQUFFK0IsSUFBSSxDQUFDMUIsTUFEVSxFQUFyQjs7QUFHQSxPQUpTLEVBSVAsR0FKTyxDQUFWO0FBS0E7QUFDRDtBQUNELENBcEJELEU7O0FBc0JlL0IsRyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOaXgei3r+aOqOa1gVxyXG5pbXBvcnQge1xyXG5cdExpdmVUcmFuc2NvZGluZyxcclxuXHRUcmFuc2NvZGluZ1VzZXJcclxufSBmcm9tIFwiLi9jbGFzc2VzLmpzXCJcclxuLy8gcnRjIOmfs+inhumikeW8leWFpVxyXG5jb25zdCBydGNNb2R1bGUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignQVItUnRjTW9kdWxlJyk7XHJcbi8vIOmUmeivr+eggVxyXG5pbXBvcnQgQ29kZSBmcm9tIFwiLi9jb2RlLmpzXCI7XHJcbi8vIOacrOWcsOaaguWtmFxyXG5sZXQgU3RvcmUgPSB7XHJcblx0Ly8g5pys5Zyw6KeG6aKR5a655ZmoXHJcblx0bG9jYXRpb246IG51bGwsXHJcblx0Ly8g6L+c56uv6aOf5ZOB5a655Zmo77yI5aSa5Lq677yJXHJcblx0cmVtb3RlTGl0czogW11cclxufTtcclxuXHJcbi8vIHJ0YyDlrp7ml7bpn7PpopHpgJror51cclxuY29uc3QgUlRDID0ge1xyXG5cdC8vIOWIneWni+WMllxyXG5cdGluaXQ6IGFzeW5jIGZ1bmN0aW9uKGluZm8pIHtcclxuXHRcdFN0b3JlID0gT2JqZWN0LmFzc2lnbihTdG9yZSwgaW5mbyk7XHJcblx0XHQvLyDliJ3lp4vljJblm57osIMgXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuc2V0Q2FsbEJhY2socmVzID0+IHtcclxuXHRcdFx0UlRDLmNhbGxCYWNrKHJlcyk7XHJcblx0XHR9KTtcclxuXHRcdC8vIOWIneWni+WMluWunuS+iyBSVENfQVBQSURcclxuXHRcdGF3YWl0IHJ0Y01vZHVsZS5jcmVhdGUoe1xyXG5cdFx0XHRcImFwcElkXCI6IFN0b3JlLmFwcGlkXHJcblx0XHR9LCByZXMgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5Yid5aeL5YyW5a6e5L6LIHJ0YycsIHJlcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRcclxuXHRcdGF3YWl0IHJ0Y01vZHVsZS5zZXRQYXJhbWV0ZXJzKHtcclxuXHRcdFx0XHRcdENtZDogJ1NldEZvcmNlVXNlQWVjJyxcclxuXHRcdFx0XHRcdEVuYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnp4HkurrlrprliLYnLCByZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHJcblx0fSxcclxuXHQvLyDnm7jlhbPlm57osIMo5LuF5YiX5Li+5bi455So5Zue6LCDKVxyXG5cdGNhbGxCYWNrOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdHN3aXRjaCAocmVzLmVuZ2luZUV2ZW50KSB7XHJcblx0XHRcdC8vIOWPkeeUn+itpuWRiuWbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25XYXJuaW5nXCI6XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogQ29kZS53YXJuaW5nW3Jlcy53YXJuaW5nQ29kZV0gfHwgXCLmnKrnn6XorablkYpcIixcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5Y+R55Sf6ZSZ6K+v5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvbkVycm9yXCI6XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogQ29kZS5lcnJvcmVbcmVzLmVycm9yQ29kZV0gfHwgXCLmnKrnn6XplJnor69cIixcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5Yqg5YWl6aKR6YGT5oiQ5Yqf5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvbkpvaW5DaGFubmVsU3VjY2Vzc1wiOlxyXG5cdFx0XHRcdC8vIOinkuiJsuS4uuinguS8l+aXtiDlgZzmraLmnKzlnLDop4bpopHmuLLmn5NcclxuXHRcdFx0XHRpZiAoU3RvcmUucm9sZUNob2ljZXMgIT0gMikge1xyXG5cdFx0XHRcdFx0Ly8g5pys5Zyw5riy5p+TXHJcblx0XHRcdFx0XHRSVEMubG9jYWxWaWRlbyh7XHJcblx0XHRcdFx0XHRcdFwiY2hhbm5lbFwiOiBTdG9yZS5jaGFubmVsSWQgKyAnJyxcclxuXHRcdFx0XHRcdFx0XCJ1aWRcIjogU3RvcmUudWlkICsgJycsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g6L+c56uv55So5oi35Yqg5YWl5b2T5YmN6aKR6YGT5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvblVzZXJKb2luZWRcIjpcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn55So5oi3JyArIHJlcy51aWQgKyAn5Yqg5YWl6aKR6YGTJyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/nOerr+eUqOaIt+emu+W8gOW9k+WJjemikemBk+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Vc2VyT2ZmbGluZVwiOlxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfov5znq6/nlKjmiLcnICsgcmVzLnVpZCArICfnprvlvIDpopHpgZMnLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1bmkuJGVtaXQoXCJVc2VyT2ZmbGluZVwiLCByZXMpO1xyXG5cdFx0XHRcdC8vIOa4hemZpOWvueW6lOeahOacrOWcsOWtmOaUvlxyXG5cdFx0XHRcdFN0b3JlLnJlbW90ZUxpdHMuc3BsaWNlKFN0b3JlLnJlbW90ZUxpdHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wZWVyaWQgPT0gcmVzLnVpZCksIDEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOW3suaYvuekuui/nOerr+inhumikemmluW4p+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25GaXJzdFJlbW90ZVZpZGVvRGVjb2RlZFwiOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5bey5pi+56S66L+c56uv6KeG6aKR6aaW5bin5Zue6LCDXCIsIHJlcyk7XHJcblx0XHRcdFx0dW5pLiRlbWl0KFwicGVlcmlkSm9pbkNoYW5uZWxcIiwgcmVzLnVpZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g6L+c56uv55So5oi36KeG6aKR54q25oCB5Y+R55Sf5bey5Y+Y5YyW5Zue6LCDKOW9k+mikemBk+WGheeahOeUqOaIt+i2hei/hyAxNyDml7bvvIzor6Xlm57osIPlj6/og73kuI3lh4bnoa4pXHJcblx0XHRcdGNhc2UgXCJvblJlbW90ZVZpZGVvU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLov5znq6/nlKjmiLfop4bpopHnirbmgIHlj5HnlJ/lt7Llj5jljJblm57osINcIiwgcmVzKTtcclxuXHRcdFx0XHR1bmkuJGVtaXQoXCJWaWRlb1N0YXRlQ2hhbmdlZFwiLHJlcyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5peB6Lev5o6o5rWB54q25oCBXHJcblx0XHRcdGNhc2UgXCJvblJ0bXBTdHJlYW1pbmdTdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiBDb2RlLmxpdmUuc3RhdGVbcmVzLnN0YXRlXSArIENvZGUubGl2ZS5lcnJvcltyZXMuZXJyb3JDb2RlXSxcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLml4Hot6/mjqjmtYHnirbmgIFcIiwgcmVzKTtcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdC8vIFx0Ly8g572R57uc6L+e5o6l54q25oCB5bey5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uQ29ubmVjdGlvblN0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDlt7LmmL7npLrov5znq6/op4bpopHpppbluKflm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25GaXJzdFJlbW90ZVZpZGVvRnJhbWVcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5pys5Zyw572R57uc57G75Z6L5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTmV0d29ya1R5cGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOe9kee7nOi/nuaOpeS4reaWrVxyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkNvbm5lY3Rpb25Mb3N0XCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOi/nOerr+mfs+mikeeKtuaAgeWPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblJlbW90ZUF1ZGlvU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOacrOWcsOmfs+mikeeKtuaAgeWPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxvY2FsQXVkaW9TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5pys5Zyw6KeG6aKR54q25oCB5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTG9jYWxWaWRlb1N0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDph43mlrDliqDlhaXpopHpgZPlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZWpvaW5DaGFubmVsU3VjY2Vzc1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDnprvlvIDpopHpgZPlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25MZWF2ZUNoYW5uZWxcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOW3suWPkemAgeacrOWcsOmfs+mikemmluW4p+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkZpcnN0TG9jYWxBdWRpb0ZyYW1lXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOW3suaYvuekuuacrOWcsOinhumikemmluW4p+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkZpcnN0TG9jYWxWaWRlb0ZyYW1lXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIFRva2VuIOacjeWKoeWNs+Wwhui/h+acn+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblRva2VuUHJpdmlsZWdlV2lsbEV4cGlyZVwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyBUb2tlbiDov4fmnJ/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZXF1ZXN0VG9rZW5cIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g55So5oi36KeS6Imy5bey5YiH5o2i5Zue6LCDKOebtOaSreWcuuaZr+S4iylcclxuXHRcdFx0XHQvLyBjYXNlIFwib25DbGllbnRSb2xlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDmnKzlnLDmiJbov5znq6/op4bpopHlpKflsI/miJbml4vovazkv6Hmga/lj5HnlJ/mlLnlj5jlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25WaWRlb1NpemVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmAmuivneS4rei/nOerr+mfs+mikea1geeahOe7n+iuoeS/oeaBr+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblJlbW90ZUF1ZGlvU3RhdHNcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5b2T5YmN6YCa6K+d57uf6K6h5Zue6LCD44CCIOivpeWbnuiwg+WcqOmAmuivneS4reavj+S4pOenkuinpuWPkeS4gOasoVxyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblJ0Y1N0YXRzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmAmuivneS4reavj+S4queUqOaIt+eahOe9kee7nOS4iuS4i+ihjCBsYXN0IG1pbGUg6LSo6YeP5oql5ZGK5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTmV0d29ya1F1YWxpdHlcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YCa6K+d5Lit5pys5Zyw6KeG6aKR5rWB55qE57uf6K6h5L+h5oGv5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTG9jYWxWaWRlb1N0YXRzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmAmuivneS4reacrOWcsOmfs+mikea1geeahOe7n+iuoeS/oeaBr+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxvY2FsQXVkaW9TdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3ov5znq6/op4bpopHmtYHnmoTnu5/orqHkv6Hmga/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZW1vdGVWaWRlb1N0YXRzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIOiuvue9rumikemBk+WcuuaZr+S7peWPiumikemBk+inkuiJslxyXG5cdHNldENoYW5uZWxQcm9maWxlOiBhc3luYyBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6K6+572u6aKR6YGT5Zy65pmv5Lul5Y+K6aKR6YGT6KeS6ImyXCIsIFN0b3JlKTtcclxuXHRcdFx0Ly8g6K6+572u6aKR6YGT5Zy65pmvXHJcblx0XHRcdHJ0Y01vZHVsZS5zZXRDaGFubmVsUHJvZmlsZSh7XHJcblx0XHRcdFx0XCJwcm9maWxlXCI6IE51bWJlcihTdG9yZS5zY2VuYXJpbylcclxuXHRcdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHQvLyDorr7nva7popHpgZPop5LoibJcclxuXHRcdFx0XHRcdHJ0Y01vZHVsZS5zZXRDbGllbnRSb2xlKHtcclxuXHRcdFx0XHRcdFx0XCJyb2xlXCI6IE51bWJlcihTdG9yZS5yb2xlQ2hvaWNlcylcclxuXHRcdFx0XHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuY29kZSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblxyXG5cdH0sXHJcblx0Ly8g5ZCv55So6KeG6aKR77yI5Yqg5YWl5oi/6Ze05ZCO6Ieq5Yqo5Y+R5biD77yJXHJcblx0ZW5hYmxlVmlkZW86IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8g6K6+572u6KeG6aKR57yW56CB5bGe5oCnKOWPr+iHquWumuS5iSkgXHJcblx0XHQvLyDor6bmg4UgaHR0cHM6Ly9kb2NzLmFueXJ0Yy5pby9jbi9WaWRlby9hcGktcmVmL3J0Y191bmlhcHAvdW5pX3J0Y19lbmdpbmUjc2V0dmlkZW9lbmNvZGVyY29uZmlndXJhdGlvblxyXG5cdFx0Ly8gYXdhaXQgcnRjTW9kdWxlLnNldFZpZGVvRW5jb2RlckNvbmZpZ3VyYXRpb24oe1xyXG5cdFx0Ly8gXHRcIndpZHRoXCI6IDI0MCxcclxuXHRcdC8vIFx0XCJoZWlnaHRcIjogMzIwLFxyXG5cdFx0Ly8gXHRcImJpdHJhdGVcIjogMCxcclxuXHRcdC8vIFx0XCJmcmFtZVJhdGVcIjogMTUsXHJcblx0XHQvLyBcdFwib3JpZW50YXRpb25Nb2RlXCI6IDBcclxuXHRcdC8vIH0sIChyZXMpID0+IHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ1JUQyDorr7nva7op4bpopHnvJbnoIHlsZ7mgKcgc2V0VmlkZW9FbmNvZGVyQ29uZmlndXJhdGlvbiDmlrnms5XosIPnlKgnLCByZXNcclxuXHRcdC8vIFx0XHQuY29kZSA9PT1cclxuXHRcdC8vIFx0XHQwID8gJ+aIkOWKnycgOlxyXG5cdFx0Ly8gXHRcdCflpLHotKXvvJonICsgcmVzKTtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8g5ZCv55So6KeG6aKRXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuZW5hYmxlVmlkZW8oKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUlRDIOWQr+eUqOinhumikSBlbmFibGVWaWRlbyDmlrnms5XosIPnlKgnLCAocmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonKSArXHJcblx0XHRcdFx0cmVzKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8g5Yqg5YWl6aKR6YGTXHJcblx0am9pbkNoYW5uZWw6IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8g5byA5ZCv5YWN5o+QXHJcblx0XHRcclxuXHRcdC8vIOWKoOWFpSBydGMg6aKR6YGTXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuam9pbkNoYW5uZWwoe1xyXG5cdFx0XHRcInRva2VuXCI6IFN0b3JlLnRva2VuLFxyXG5cdFx0XHRcImNoYW5uZWxJZFwiOiBTdG9yZS5jaGFubmVsLFxyXG5cdFx0XHRcInVpZFwiOiBTdG9yZS51aWQsXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMgam9pbkNoYW5uZWwg5pa55rOV6LCD55SoJywgKHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJykgKyByZXMpO1xyXG5cdFx0fSk7XHJcblx0XHRhd2FpdCBSVEMuc2V0RW5hYmxlU3BlYWtlcnBob25lKHRydWUpO1xyXG5cdH0sXHJcblx0Ly8g6Z+z6aKR5piv5ZCm5YWN5o+QXHJcblx0c2V0RW5hYmxlU3BlYWtlcnBob25lOiBmdW5jdGlvbihlbmFibGUpIHtcclxuXHRcdC8vIOm7mOiupOaJrOWjsOWZqOaSreaUvlxyXG5cdFx0cnRjTW9kdWxlLnNldEVuYWJsZVNwZWFrZXJwaG9uZSh7XHJcblx0XHRcdFwiZW5hYmxlZFwiOiBlbmFibGVcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDov5znq6/liqDlhaXmiL/pl7TlkI7orr7nva4nICsgKGVuYWJsZSA/ICflvIDlkK8nIDogJ+WFs+mXrScpICsgJ+aJrOWjsOWZqOaSreaUvicsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOlxyXG5cdFx0XHRcdCflpLHotKXvvJonICtcclxuXHRcdFx0XHRyZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDpn7PpopHmmK/lkKblhbPpl61cclxuXHRlbmFibGVMb2NhbEF1ZGlvOiBmdW5jdGlvbihjaGVja2VkKSB7XHJcblx0XHRydGNNb2R1bGUuZW5hYmxlTG9jYWxBdWRpbyh7XHJcblx0XHRcdFwiZW5hYmxlZFwiOiBjaGVja2VkXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg6Z+z6aKRJyArIChjaGVja2VkID8gJ+W8gOWQrycgOiAn5YWz6ZetJyksIChyZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micpICsgcmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDmnKzlnLDop4bpopHmmK/lkKbph4fpm4ZcclxuXHRlbmFibGVMb2NhbFZpZGVvOiBmdW5jdGlvbihjaGVja2VkKSB7XHJcblx0XHRydGNNb2R1bGUuZW5hYmxlTG9jYWxWaWRlbyh7XHJcblx0XHRcdFwiZW5hYmxlZFwiOiBjaGVja2VkXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg6KeG6aKRJyArIChjaGVja2VkID8gJ+W8gOWQrycgOiAn5YWz6ZetJyksIChyZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micpICsgcmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDmkYTlg4/lpLTvvIjliY3lkI7vvIlcclxuXHRzd2l0Y2hDYW1lcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gcnRjTW9kdWxlLnN3aXRjaENhbWVyYSgocmVzKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdSVEMg5pGE5YOP5aS05YmN5ZCOIHN3aXRjaENhbWVyYSDmlrnms5XosIPnlKgnLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgK1xyXG5cdFx0Ly8gXHRcdHJlcyk7XHJcblx0XHQvLyB9KVxyXG5cclxuXHRcdHJ0Y01vZHVsZS5tdXRlTG9jYWxBdWRpb1N0cmVhbSh7XHJcblx0XHRcdFwidmlld1wiOlN0b3JlLmxvY2F0aW9uLmV2YWwoKVxyXG5cdFx0fSwocmVzKSA9PntcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOi9rOivremfs1xyXG5cdHRvU3BlZWNoOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOWFs+mXreinhumikeaooeWdl1xyXG5cdFx0cnRjTW9kdWxlLmRpc2FibGVWaWRlbygocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg5YWz6Zet6KeG6aKR5qih5Z2XIGRpc2FibGVWaWRlbyDmlrnms5XosIPnlKgnLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgK1xyXG5cdFx0XHRcdHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g5pys5Zyw5ZCv55So6KeG6aKR5ZCOXHJcblx0bG9jYWxWaWRlbzogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCLmnKzlnLDlkK/nlKjop4bpopHlkI5cIiwgU3RvcmUpO1xyXG5cdFx0Ly8gLy8g5riy5p+T6KeG6aKRXHJcblx0XHRhd2FpdCBTdG9yZS5sb2NhdGlvbi5zZXR1cExvY2FsVmlkZW8oe1xyXG5cdFx0XHRcInJlbmRlck1vZGVcIjogMSxcclxuXHRcdFx0XCJjaGFubmVsSWRcIjogZGF0YS5jaGFubmVsLFxyXG5cdFx0XHRcInVpZFwiOiBkYXRhLnVpZCxcclxuXHRcdFx0XCJtaXJyb3JNb2RlXCI6IDBcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+a4suafk+inhumikScsIHJlcyk7XHJcblx0XHR9KTtcclxuXHRcdC8vIOacrOWcsOmihOiniFxyXG5cdFx0YXdhaXQgU3RvcmUubG9jYXRpb24uc3RhcnRQcmV2aWV3KChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+acrOWcsOmihOiniCcsIHJlcyk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0XHJcblx0fSxcclxuXHQvLyDov5znq6/liqDlhaXmiL/pl7TlkI7ov5vooYwgKOWkmuS6uilcclxuXHRyZW1vdGVuYWJsZVZpZGVvOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIui/nOerr+WKoOWFpeaIv+mXtOWQjui/m+ihjFwiLCBTdG9yZS5yZW1vdGVMaXRzKTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6L+c56uv5Yqg5YWl5oi/6Ze05ZCO6L+b6KGMXCIsIGRhdGEpO1xyXG5cdFx0U3RvcmUucmVtb3RlTGl0cy5tYXAoYXN5bmMgaXRlbSA9PiB7XHJcblx0XHRcdGlmIChpdGVtLnBlZXJpZCA9PSBkYXRhLnVpZCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6aKR6YGTXCIsIFN0b3JlLmNoYW5uZWwpO1xyXG5cdFx0XHRcdGF3YWl0IGl0ZW0ucmVtb3RlWzBdLnNldHVwUmVtb3RlVmlkZW8oe1xyXG5cdFx0XHRcdFx0XCJ1aWRcIjogaXRlbS5wZWVyaWQsXHJcblx0XHRcdFx0XHRcImNoYW5uZWxJZFwiOiBTdG9yZS5jaGFubmVsLFxyXG5cdFx0XHRcdFx0XCJyZW5kZXJNb2RlXCI6IDAsXHJcblx0XHRcdFx0XHRcIm1pcnJvck1vZGVcIjogMFxyXG5cdFx0XHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmuLLmn5Pov5znq6/op4bpopEnLCByZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIOacrOWcsOmihOiniFxyXG5cdFx0XHRcdGF3YWl0IGl0ZW0ucmVtb3RlWzBdLnN0YXJ0UHJldmlldygocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6L+c56uv5pys5Zyw6aKE6KeIJywgcmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOWmguaenOS9oOWPquWcqOS4gOS4qumhtemdouWGmSDlj6/ku6Xnm7TmjqXosIMgZGVzdG9yeSBcclxuXHRcdOWmguaenOS9oOaYr+eUqOeahOWNleS+iyDnprvlvIDpobXpnaLlvJXmk47kuI3plIDmr4Eg5bCx55SoIGxlYXZlQ2hhbm5lbFxyXG5cdCAqL1xyXG5cdC8vIOaMguaWrVxyXG5cdGxlYXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOemu+W8gOmikemBk1xyXG5cdFx0cnRjTW9kdWxlLmxlYXZlQ2hhbm5lbCgocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6LCD55So56a75byA6aKR6YGTIGxlYXZlQ2hhbm5lbFwiLCByZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDplIDmr4Hlrp7kvotcclxuXHRkZXN0cm95UnRjOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOmUgOavgeWunuS+i1xyXG5cdFx0cnRjTW9kdWxlLmRlc3Ryb3lSdGMoKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIumUgOavgeWunuS+i1wiLCByZXMpO1xyXG5cdFx0XHQvLyBpZiAocmVzLmNvZGUgPT09IDApIHtcclxuXHRcdFx0Ly8gXHRSVENVdGlscy5kZXN0cm95UnRjKCk7XHJcblx0XHRcdC8vIH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5peB6Lev5o6o5rWBIFxyXG5cdCAqL1xyXG5cdExpdmVUcmFuc2NvOiBhc3luYyBmdW5jdGlvbih1cmxMaXZlLCBFbmFibGVkID0gdHJ1ZSkge1xyXG5cdFx0Ly8g6buY6K6k5b2T5YmN6aKR6YGT5omA5pyJ5oiQ5ZGY5o6o5rWBXHJcblx0XHQvLyDojrflj5bmiYDmnInmiJDlkZjop4bpopHmoLflvI9cclxuXHRcdGxldCBvQWxscyA9IFtdO1xyXG5cdFx0Y29uc29sZS5sb2coU3RvcmUpO1xyXG5cdFx0Ly8g6KeS6Imy6Z2e6KeC5LyXXHJcblx0XHRpZiAoU3RvcmUucm9sZUNob2ljZXMgIT0gMikge1xyXG5cdFx0XHQvLyDmt7vliqDmnKzlnLDmiJDlkZhcclxuXHRcdFx0b0FsbHMucHVzaChuZXcgVHJhbnNjb2RpbmdVc2VyKFN0b3JlLnVpZCwge1xyXG5cdFx0XHRcdHdpZHRoOiAyODAsXHJcblx0XHRcdFx0aGVpZ2h0OiAyMTAsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0XHR5OiAwXHJcblx0XHRcdH0pKTtcclxuXHRcdH1cclxuXHRcdC8vIOa3u+WKoOi/nOerr+aIkOWRmFxyXG5cdFx0U3RvcmUucmVtb3RlTGl0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdGxldCBvSW5kZXggPSBvQWxscy5sZW5ndGggPiAwID8gKGluZGV4ICsgMSkgOiBpbmRleDtcclxuXHRcdFx0b0FsbHMucHVzaChuZXcgVHJhbnNjb2RpbmdVc2VyKGl0ZW0ucGVlcmlkLCB7XHJcblx0XHRcdFx0d2lkdGg6IDI4MCxcclxuXHRcdFx0XHRoZWlnaHQ6IDIxMCxcclxuXHRcdFx0XHR4OiAob0luZGV4ICUgMykgKiAyODAsXHJcblx0XHRcdFx0eTogTWF0aC5mbG9vcihvSW5kZXggLyAzKSAqIDIxMCxcclxuXHRcdFx0fSkpXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKG9BbGxzKTtcclxuXHRcdC8vIOiuvue9ruaXgei3r+aOqOa1geeahOinhumikeagt+W8jyjkuInliJcpXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuc2V0TGl2ZVRyYW5zY29kaW5nKHtcclxuXHRcdFx0XCJ0cmFuc2NvZGluZ1wiOiBuZXcgTGl2ZVRyYW5zY29kaW5nKG9BbGxzLCB7XHJcblx0XHRcdFx0d2lkdGg6IDg0MCxcclxuXHRcdFx0XHRoZWlnaHQ6IE1hdGguY2VpbChvQWxscy5sZW5ndGggLyAzKSAqIDIxMCxcclxuXHRcdFx0fSlcclxuXHRcdH0sIChyZXQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmV0KTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g5re75Yqg5peB6Lev5o6o5rWBXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuYWRkUHVibGlzaFN0cmVhbVVybCh7XHJcblx0XHRcdHVybDogdXJsTGl2ZSxcclxuXHRcdFx0dHJhbnNjb2RpbmdFbmFibGVkOiBFbmFibGVkXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5re75Yqg5peB6Lev5o6o5rWBXCIsIHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOWPlua2iOaOqOa1gVxyXG5cdHJlbW92ZVB1Ymxpc2hTdHJlYW1Vcmw6IGZ1bmN0aW9uKHVybExpdmUpIHtcclxuXHRcdC8vIOa3u+WKoOaXgei3r+aOqOa1gVxyXG5cdFx0cnRjTW9kdWxlLnJlbW92ZVB1Ymxpc2hTdHJlYW1Vcmwoe1xyXG5cdFx0XHR1cmw6IHVybExpdmUsXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5Y+W5raI5peB6Lev5o6o5rWBXCIsIHJlcyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIOebkea1i+inhumikeWuueWZqFxyXG51bmkuJG9uKFwiQ2FudmFzVmlld1wiLCBkYXRhID0+IHtcclxuXHQvLyDmnKzlnLDop4bpopHlrrnlmahcclxuXHRpZiAoZGF0YS5sb2NhdGlvbikge1xyXG5cdFx0U3RvcmUgPSBPYmplY3QuYXNzaWduKFN0b3JlLCB7XHJcblx0XHRcdGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uXHJcblx0XHR9KTtcclxuXHRcdC8vIOi/nOerr+inhumikeWuueWZqFxyXG5cdH0gZWxzZSBpZiAoZGF0YS5wZWVyaWQgJiYgZGF0YS5yZW1vdGUpIHtcclxuXHRcdGNvbnN0IG9hID0gU3RvcmUucmVtb3RlTGl0cy5maWx0ZXIoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiBpdGVtLnBlZXJpZCA9PSBkYXRhLnBlZXJpZFxyXG5cdFx0fSk7XHJcblx0XHRpZiAob2EubGVuZ3RoID09IDApIHtcclxuXHRcdFx0U3RvcmUucmVtb3RlTGl0cy5wdXNoKGRhdGEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRSVEMucmVtb3RlbmFibGVWaWRlbyh7XHJcblx0XHRcdFx0XHR1aWQ6IGRhdGEucGVlcmlkXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDUwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUlRDO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 17 */
/*!*********************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/utils/classes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 推流封装\nfunction _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}\nObject.defineProperty(exports, \"__esModule\", {\n  value: true });\n\n\nexports.LiveTranscoding = exports.Color = exports.TranscodingUser = exports.RtcImage = void 0;\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true });\n\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}var\n\nLiveTranscoding =\n\nfunction LiveTranscoding(transcodingUsers, params) {_classCallCheck(this, LiveTranscoding);\n  _defineProperty(this, \"width\", void 0);\n\n  _defineProperty(this, \"height\", void 0);\n\n  _defineProperty(this, \"videoBitrate\", void 0);\n\n  _defineProperty(this, \"videoFramerate\", void 0);\n\n  _defineProperty(this, \"lowLatency\", void 0);\n\n  _defineProperty(this, \"videoGop\", void 0);\n\n  _defineProperty(this, \"watermark\", void 0);\n\n  _defineProperty(this, \"backgroundImage\", void 0);\n\n  _defineProperty(this, \"audioSampleRate\", void 0);\n\n  _defineProperty(this, \"audioBitrate\", void 0);\n\n  _defineProperty(this, \"audioChannels\", void 0);\n\n  _defineProperty(this, \"audioCodecProfile\", void 0);\n\n  _defineProperty(this, \"videoCodecProfile\", void 0);\n\n  _defineProperty(this, \"backgroundColor\", void 0);\n\n  _defineProperty(this, \"userConfigExtraInfo\", void 0);\n\n  _defineProperty(this, \"transcodingUsers\", void 0);\n\n  if (params) {\n    this.width = params.width;\n    this.height = params.height;\n    this.videoBitrate = params.videoBitrate;\n    this.videoFramerate = params.videoFramerate;\n    this.lowLatency = params.lowLatency;\n    this.videoGop = params.videoGop;\n    this.watermark = params.watermark;\n    this.backgroundImage = params.backgroundImage;\n    this.audioSampleRate = params.audioSampleRate;\n    this.audioBitrate = params.audioBitrate;\n    this.audioChannels = params.audioChannels;\n    this.audioCodecProfile = params.audioCodecProfile;\n    this.videoCodecProfile = params.videoCodecProfile;\n    this.backgroundColor = params.backgroundColor;\n    this.userConfigExtraInfo = params.userConfigExtraInfo;\n  }\n\n  this.transcodingUsers = transcodingUsers;\n};\n\n\nexports.LiveTranscoding = LiveTranscoding;var\n\nTranscodingUser =\n\nfunction TranscodingUser(uid, params) {_classCallCheck(this, TranscodingUser);\n  _defineProperty(this, \"uid\", void 0);\n\n  _defineProperty(this, \"x\", void 0);\n\n  _defineProperty(this, \"y\", void 0);\n\n  _defineProperty(this, \"width\", void 0);\n\n  _defineProperty(this, \"height\", void 0);\n\n  _defineProperty(this, \"zOrder\", void 0);\n\n  _defineProperty(this, \"alpha\", void 0);\n\n  _defineProperty(this, \"audioChannel\", void 0);\n\n  this.uid = uid;\n\n  if (params) {\n    this.x = params.x;\n    this.y = params.y;\n    this.width = params.width;\n    this.height = params.height;\n    this.zOrder = params.zOrder;\n    this.alpha = params.alpha;\n    this.audioChannel = params.audioChannel;\n  }\n};\n\n\nexports.TranscodingUser = TranscodingUser;var\n\nColor =\n\nfunction Color(red, green, blue) {_classCallCheck(this, Color);\n  _defineProperty(this, \"red\", void 0);\n\n  _defineProperty(this, \"green\", void 0);\n\n  _defineProperty(this, \"blue\", void 0);\n\n  this.red = red;\n  this.green = green;\n  this.blue = blue;\n};\n\n\nexports.Color = Color;var\n\nRtcImage =\n\nfunction RtcImage(url, params) {_classCallCheck(this, RtcImage);\n  _defineProperty(this, \"url\", void 0);\n\n  _defineProperty(this, \"x\", void 0);\n\n  _defineProperty(this, \"y\", void 0);\n\n  _defineProperty(this, \"width\", void 0);\n\n  _defineProperty(this, \"height\", void 0);\n\n  this.url = url;\n\n  if (params) {\n    this.x = params.x;\n    this.y = params.y;\n    this.width = params.width;\n    this.height = params.height;\n  }\n};\n\n\nexports.RtcImage = RtcImage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY2xhc3Nlcy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkxpdmVUcmFuc2NvZGluZyIsIkNvbG9yIiwiVHJhbnNjb2RpbmdVc2VyIiwiUnRjSW1hZ2UiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ0cmFuc2NvZGluZ1VzZXJzIiwicGFyYW1zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWRlb0JpdHJhdGUiLCJ2aWRlb0ZyYW1lcmF0ZSIsImxvd0xhdGVuY3kiLCJ2aWRlb0dvcCIsIndhdGVybWFyayIsImJhY2tncm91bmRJbWFnZSIsImF1ZGlvU2FtcGxlUmF0ZSIsImF1ZGlvQml0cmF0ZSIsImF1ZGlvQ2hhbm5lbHMiLCJhdWRpb0NvZGVjUHJvZmlsZSIsInZpZGVvQ29kZWNQcm9maWxlIiwiYmFja2dyb3VuZENvbG9yIiwidXNlckNvbmZpZ0V4dHJhSW5mbyIsInVpZCIsIngiLCJ5Iiwiek9yZGVyIiwiYWxwaGEiLCJhdWRpb0NoYW5uZWwiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzVDQyxPQUFLLEVBQUUsSUFEcUMsRUFBN0M7OztBQUlBRCxPQUFPLENBQUNFLGVBQVIsR0FBMEJGLE9BQU8sQ0FBQ0csS0FBUixHQUFnQkgsT0FBTyxDQUFDSSxlQUFSLEdBQTBCSixPQUFPLENBQUNLLFFBQVIsR0FBbUIsS0FBSyxDQUE1Rjs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNQLEtBQW5DLEVBQTBDO0FBQ3pDLE1BQUlPLEdBQUcsSUFBSUQsR0FBWCxFQUFnQjtBQUNmVCxVQUFNLENBQUNDLGNBQVAsQ0FBc0JR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TUFBTSxDQUFDRSxNQUFyQjtBQUNBO0FBQ0QsQzs7O0FBR0ZmLE9BQU8sQ0FBQ0ssUUFBUixHQUFtQkEsUUFBbkIiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmjqjmtYHlsIHoo4VcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5MaXZlVHJhbnNjb2RpbmcgPSBleHBvcnRzLkNvbG9yID0gZXhwb3J0cy5UcmFuc2NvZGluZ1VzZXIgPSBleHBvcnRzLlJ0Y0ltYWdlID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXkgaW4gb2JqKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmpba2V5XSA9IHZhbHVlO1xuXHR9XG5cdHJldHVybiBvYmo7XG59XG5cbmNsYXNzIExpdmVUcmFuc2NvZGluZyB7XG5cblx0Y29uc3RydWN0b3IodHJhbnNjb2RpbmdVc2VycywgcGFyYW1zKSB7XG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2lkdGhcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhlaWdodFwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwidmlkZW9CaXRyYXRlXCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ2aWRlb0ZyYW1lcmF0ZVwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwibG93TGF0ZW5jeVwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwidmlkZW9Hb3BcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndhdGVybWFya1wiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYmFja2dyb3VuZEltYWdlXCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdWRpb1NhbXBsZVJhdGVcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF1ZGlvQml0cmF0ZVwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVkaW9DaGFubmVsc1wiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVkaW9Db2RlY1Byb2ZpbGVcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZpZGVvQ29kZWNQcm9maWxlXCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVzZXJDb25maWdFeHRyYUluZm9cIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRyYW5zY29kaW5nVXNlcnNcIiwgdm9pZCAwKTtcblxuXHRcdGlmIChwYXJhbXMpIHtcblx0XHRcdHRoaXMud2lkdGggPSBwYXJhbXMud2lkdGg7XG5cdFx0XHR0aGlzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQ7XG5cdFx0XHR0aGlzLnZpZGVvQml0cmF0ZSA9IHBhcmFtcy52aWRlb0JpdHJhdGU7XG5cdFx0XHR0aGlzLnZpZGVvRnJhbWVyYXRlID0gcGFyYW1zLnZpZGVvRnJhbWVyYXRlO1xuXHRcdFx0dGhpcy5sb3dMYXRlbmN5ID0gcGFyYW1zLmxvd0xhdGVuY3k7XG5cdFx0XHR0aGlzLnZpZGVvR29wID0gcGFyYW1zLnZpZGVvR29wO1xuXHRcdFx0dGhpcy53YXRlcm1hcmsgPSBwYXJhbXMud2F0ZXJtYXJrO1xuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXJhbXMuYmFja2dyb3VuZEltYWdlO1xuXHRcdFx0dGhpcy5hdWRpb1NhbXBsZVJhdGUgPSBwYXJhbXMuYXVkaW9TYW1wbGVSYXRlO1xuXHRcdFx0dGhpcy5hdWRpb0JpdHJhdGUgPSBwYXJhbXMuYXVkaW9CaXRyYXRlO1xuXHRcdFx0dGhpcy5hdWRpb0NoYW5uZWxzID0gcGFyYW1zLmF1ZGlvQ2hhbm5lbHM7XG5cdFx0XHR0aGlzLmF1ZGlvQ29kZWNQcm9maWxlID0gcGFyYW1zLmF1ZGlvQ29kZWNQcm9maWxlO1xuXHRcdFx0dGhpcy52aWRlb0NvZGVjUHJvZmlsZSA9IHBhcmFtcy52aWRlb0NvZGVjUHJvZmlsZTtcblx0XHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcblx0XHRcdHRoaXMudXNlckNvbmZpZ0V4dHJhSW5mbyA9IHBhcmFtcy51c2VyQ29uZmlnRXh0cmFJbmZvO1xuXHRcdH1cblxuXHRcdHRoaXMudHJhbnNjb2RpbmdVc2VycyA9IHRyYW5zY29kaW5nVXNlcnM7XG5cdH1cblxufVxuZXhwb3J0cy5MaXZlVHJhbnNjb2RpbmcgPSBMaXZlVHJhbnNjb2Rpbmc7XG5cbmNsYXNzIFRyYW5zY29kaW5nVXNlciB7XG5cblx0Y29uc3RydWN0b3IodWlkLCBwYXJhbXMpIHtcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1aWRcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInhcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInlcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpZHRoXCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoZWlnaHRcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInpPcmRlclwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxwaGFcIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF1ZGlvQ2hhbm5lbFwiLCB2b2lkIDApO1xuXG5cdFx0dGhpcy51aWQgPSB1aWQ7XG5cblx0XHRpZiAocGFyYW1zKSB7XG5cdFx0XHR0aGlzLnggPSBwYXJhbXMueDtcblx0XHRcdHRoaXMueSA9IHBhcmFtcy55O1xuXHRcdFx0dGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodDtcblx0XHRcdHRoaXMuek9yZGVyID0gcGFyYW1zLnpPcmRlcjtcblx0XHRcdHRoaXMuYWxwaGEgPSBwYXJhbXMuYWxwaGE7XG5cdFx0XHR0aGlzLmF1ZGlvQ2hhbm5lbCA9IHBhcmFtcy5hdWRpb0NoYW5uZWw7XG5cdFx0fVxuXHR9XG5cbn1cbmV4cG9ydHMuVHJhbnNjb2RpbmdVc2VyID0gVHJhbnNjb2RpbmdVc2VyO1xuXG5jbGFzcyBDb2xvciB7XG5cblx0Y29uc3RydWN0b3IocmVkLCBncmVlbiwgYmx1ZSkge1xuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlZFwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ3JlZW5cIiwgdm9pZCAwKTtcblxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJsdWVcIiwgdm9pZCAwKTtcblxuXHRcdHRoaXMucmVkID0gcmVkO1xuXHRcdHRoaXMuZ3JlZW4gPSBncmVlbjtcblx0XHR0aGlzLmJsdWUgPSBibHVlO1xuXHR9XG5cbn1cbmV4cG9ydHMuQ29sb3IgPSBDb2xvcjtcblxuY2xhc3MgUnRjSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yKHVybCwgcGFyYW1zKSB7XG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXJsXCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ4XCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ5XCIsIHZvaWQgMCk7XG5cblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aWR0aFwiLCB2b2lkIDApO1xuXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGVpZ2h0XCIsIHZvaWQgMCk7XG5cblx0XHR0aGlzLnVybCA9IHVybDtcblxuXHRcdGlmIChwYXJhbXMpIHtcblx0XHRcdHRoaXMueCA9IHBhcmFtcy54O1xuXHRcdFx0dGhpcy55ID0gcGFyYW1zLnk7XG5cdFx0XHR0aGlzLndpZHRoID0gcGFyYW1zLndpZHRoO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnRzLlJ0Y0ltYWdlID0gUnRjSW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!******************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/utils/code.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // RTC 相关状态码\nvar code = {\n  // 警告状态码\n  warning: {\n    8: \"指定的 View 无效，使用视频功能时需要指定 view\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    20: \"请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理\",\n    103: \"没有可用的频道资源。可能是因为服务端没法分配频道资源\",\n    104: \"查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器\",\n    106: \"打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器\",\n    107: \"打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的\",\n    121: \"TICKET 非法，打开频道失败\",\n    122: \"尝试打开另一个服务器\",\n    701: \"打开伴奏出错\",\n    1014: \"音频设备模块：运行时播放设备出现警告\",\n    1016: \"音频设备模块：运行时录音设备出现警告\",\n    1019: \"音频设备模块：没有采集到有效的声音数据\",\n    1025: \"音频播放或采集被系统事件（如来电）打扰\",\n    1033: \"音频设备模块：录制设备被占用\",\n    1051: \"音频设备模块：录音声音检查到啸叫\" },\n\n  // 错误状态码\n  errore: {\n    0: \"没有错误\",\n    1: \"一般性的错误（没有明确归类的错误原因）\",\n    2: \"API 调用了无效的参数。例如指定的频道名含有非法字符\",\n    3: \"SDK 初始化失败\",\n    4: \"SDK 当前状态不支持此操作\",\n    5: \"调用被拒绝\",\n    6: \"传入的缓冲区大小不足以存放返回的数据\",\n    7: \"SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已创建 RtcEngine 对象并完成初始化\",\n    8: \"指定的 View 无效，使用视频功能时需要指定 View\",\n    9: \"没有操作权限。请检查用户是否授予 app 音视频设备使用权限\",\n    10: \"API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理时间过长，超过 10 秒没有返回，会出现此错误\",\n    11: \"请求被取消\",\n    12: \"调用频率太高\",\n    13: \"SDK 内部绑定到网络 Socket 失败\",\n    14: \"网络不可用\",\n    15: \"没有网络缓冲区可用\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    17: \"加入频道被拒绝\",\n    18: \"离开频道失败\",\n    19: \"资源已被占用，不能重复使用\",\n    101: \"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道\",\n    102: \"不是有效的频道名。请更换有效的频道名重新加入频道\",\n    110: \"开启了 token 校验但没有输入 token\",\n    111: \"网络连接中断\",\n    112: \"网络连接丢失\",\n    113: \"在调用 sendStreamMessage 时，用户不在频道内\",\n    114: \"在调用 sendStreamMessage 时，发送的数据长度大于 1024 个字节\",\n    115: \"在调用 sendStreamMessage 时，发送的数据码率超过限制（6KB/s）\",\n    116: \"在调用 createDataStream 时，创建的数据通道过多（超过 5 个通道）\",\n    120: \"解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道\",\n    123: \"此用户被服务器禁止\",\n    125: \"水印文件路径错误\",\n    134: \"无效的 User account\",\n    1001: \"加载媒体引擎失败\",\n    1002: \"启动媒体引擎开始通话失败。请尝试重新进入频道\",\n    1004: \"启动视频渲染模块失败\",\n    1005: \"音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道\",\n    1006: \"音频设备模块：使用 java 资源出现错误\",\n    1007: \"音频设备模块：设置的采样频率出现错误\",\n    1008: \"音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道\",\n    1009: \"音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道\",\n    1010: \"音频设备模块：停止播放设备出现错误\",\n    1011: \"音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1012: \"音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1013: \"音频设备模块：停止录音设备出现错误\",\n    1015: \"音频设备模块：运行时播放出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1017: \"音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1018: \"音频设备模块：录音失败\",\n    1022: \"音频设备模块：初始化 Loopback 设备错误\",\n    1023: \"音频设备模块：启动 Loopback 设备错误\",\n    1030: \"音频路由：连接蓝牙通话失败，默认路由会被启用\",\n    1359: \"音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用\",\n    1501: \"视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限\",\n    1600: \"视频设备模块：未知错误\",\n    1601: \"视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道\",\n    1602: \"视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道\" },\n\n  // 旁路推流相关状态码\n  live: {\n    // 状态码\n    state: {\n      0: \"推流未开始或已结束\",\n      1: \"正在连接 AR 推流服务器和 RTMP 服务器\",\n      2: \"推流正在进行,成功推流后\",\n      3: \"正在恢复推流\",\n      4: \"推流失败\" },\n\n    // 错误码\n    error: {\n      0: \"推流成功\",\n      1: \"参数无效，请检查输入参数是否正确。请确保调用 setLiveTranscoding \",\n      2: \"推流已加密，不能推流\",\n      3: \"推流超时未成功，可重新推流\",\n      4: \"推流服务器出现错误\",\n      5: \"RTMP 服务器出现错误\",\n      6: \"推流请求过于频繁\",\n      7: \"单个主播的推流地址数目达到上线 10\",\n      8: \"主播操作不属于自己的流，请检查 App 逻辑\",\n      9: \"服务器未找到这个流\",\n      10: \"推流地址格式有错误，请检查推流地址格式是否正确\" } } };var _default =\n\n\n\n\n\ncode;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY29kZS5qcyJdLCJuYW1lcyI6WyJjb2RlIiwid2FybmluZyIsImVycm9yZSIsImxpdmUiLCJzdGF0ZSIsImVycm9yIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQSxJQUFNQSxJQUFJLEdBQUc7QUFDWjtBQUNBQyxTQUFPLEVBQUU7QUFDUixPQUFHLDhCQURLO0FBRVIsUUFBSSwrQ0FGSTtBQUdSLFFBQUksaUNBSEk7QUFJUixTQUFLLDRCQUpHO0FBS1IsU0FBSyxvREFMRztBQU1SLFNBQUssaURBTkc7QUFPUixTQUFLLHFDQVBHO0FBUVIsU0FBSyxrQkFSRztBQVNSLFNBQUssWUFURztBQVVSLFNBQUssUUFWRztBQVdSLFVBQU0sb0JBWEU7QUFZUixVQUFNLG9CQVpFO0FBYVIsVUFBTSxxQkFiRTtBQWNSLFVBQU0scUJBZEU7QUFlUixVQUFNLGdCQWZFO0FBZ0JSLFVBQU0sa0JBaEJFLEVBRkc7O0FBb0JaO0FBQ0FDLFFBQU0sRUFBRTtBQUNQLE9BQUcsTUFESTtBQUVQLE9BQUcscUJBRkk7QUFHUCxPQUFHLDZCQUhJO0FBSVAsT0FBRyxXQUpJO0FBS1AsT0FBRyxnQkFMSTtBQU1QLE9BQUcsT0FOSTtBQU9QLE9BQUcsb0JBUEk7QUFRUCxPQUFHLHdEQVJJO0FBU1AsT0FBRyw4QkFUSTtBQVVQLE9BQUcsZ0NBVkk7QUFXUCxRQUFJLGdFQVhHO0FBWVAsUUFBSSxPQVpHO0FBYVAsUUFBSSxRQWJHO0FBY1AsUUFBSSx1QkFkRztBQWVQLFFBQUksT0FmRztBQWdCUCxRQUFJLFdBaEJHO0FBaUJQLFFBQUksK0NBakJHO0FBa0JQLFFBQUksU0FsQkc7QUFtQlAsUUFBSSxRQW5CRztBQW9CUCxRQUFJLGVBcEJHO0FBcUJQLFNBQUssbUNBckJFO0FBc0JQLFNBQUssMEJBdEJFO0FBdUJQLFNBQUsseUJBdkJFO0FBd0JQLFNBQUssUUF4QkU7QUF5QlAsU0FBSyxRQXpCRTtBQTBCUCxTQUFLLGlDQTFCRTtBQTJCUCxTQUFLLDRDQTNCRTtBQTRCUCxTQUFLLDRDQTVCRTtBQTZCUCxTQUFLLDRDQTdCRTtBQThCUCxTQUFLLDZDQTlCRTtBQStCUCxTQUFLLFdBL0JFO0FBZ0NQLFNBQUssVUFoQ0U7QUFpQ1AsU0FBSyxrQkFqQ0U7QUFrQ1AsVUFBTSxVQWxDQztBQW1DUCxVQUFNLHdCQW5DQztBQW9DUCxVQUFNLFlBcENDO0FBcUNQLFVBQU0seURBckNDO0FBc0NQLFVBQU0sdUJBdENDO0FBdUNQLFVBQU0sb0JBdkNDO0FBd0NQLFVBQU0sZ0RBeENDO0FBeUNQLFVBQU0sMENBekNDO0FBMENQLFVBQU0sbUJBMUNDO0FBMkNQLFVBQU0sNENBM0NDO0FBNENQLFVBQU0sMENBNUNDO0FBNkNQLFVBQU0sbUJBN0NDO0FBOENQLFVBQU0seUNBOUNDO0FBK0NQLFVBQU0sdUNBL0NDO0FBZ0RQLFVBQU0sYUFoREM7QUFpRFAsVUFBTSwwQkFqREM7QUFrRFAsVUFBTSx5QkFsREM7QUFtRFAsVUFBTSx3QkFuREM7QUFvRFAsVUFBTSwrQ0FwREM7QUFxRFAsVUFBTSxpQ0FyREM7QUFzRFAsVUFBTSxhQXREQztBQXVEUCxVQUFNLHNDQXZEQztBQXdEUCxVQUFNLG1DQXhEQyxFQXJCSTs7QUErRVo7QUFDQUMsTUFBSSxFQUFFO0FBQ0w7QUFDQUMsU0FBSyxFQUFFO0FBQ04sU0FBRyxXQURHO0FBRU4sU0FBRyx5QkFGRztBQUdOLFNBQUcsY0FIRztBQUlOLFNBQUcsUUFKRztBQUtOLFNBQUcsTUFMRyxFQUZGOztBQVNMO0FBQ0FDLFNBQUssRUFBRTtBQUNOLFNBQUcsTUFERztBQUVOLFNBQUcsNENBRkc7QUFHTixTQUFHLFlBSEc7QUFJTixTQUFHLGVBSkc7QUFLTixTQUFHLFdBTEc7QUFNTixTQUFHLGNBTkc7QUFPTixTQUFHLFVBUEc7QUFRTixTQUFHLG9CQVJHO0FBU04sU0FBRyx3QkFURztBQVVOLFNBQUcsV0FWRztBQVdOLFVBQUkseUJBWEUsRUFWRixFQWhGTSxFQUFiLEM7Ozs7OztBQTJHZUwsSSIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJUQyDnm7jlhbPnirbmgIHnoIFcbmNvbnN0IGNvZGUgPSB7XG5cdC8vIOitpuWRiueKtuaAgeeggVxuXHR3YXJuaW5nOiB7XG5cdFx0ODogXCLmjIflrprnmoQgVmlldyDml6DmlYjvvIzkvb/nlKjop4bpopHlip/og73ml7bpnIDopoHmjIflrpogdmlld1wiLFxuXHRcdDE2OiBcIuWIneWni+WMluinhumikeWKn+iDveWksei0peOAguacieWPr+iDveaYr+WboOinhumikei1hOa6kOiiq+WNoOeUqOWvvOiHtOeahOOAgueUqOaIt+aXoOazleeci+WIsOinhumikeeUu+mdou+8jOS9huS4jeW9seWTjeivremfs+mAmuS/oVwiLFxuXHRcdDIwOiBcIuivt+axguWkhOS6juW+heWumueKtuaAgeOAguS4gOiIrOaYr+eUseS6juafkOS4quaooeWdl+i/mOayoeWHhuWkh+Wlve+8jOivt+axguiiq+W7tui/n+WkhOeQhlwiLFxuXHRcdDEwMzogXCLmsqHmnInlj6/nlKjnmoTpopHpgZPotYTmupDjgILlj6/og73mmK/lm6DkuLrmnI3liqHnq6/msqHms5XliIbphY3popHpgZPotYTmupBcIixcblx0XHQxMDQ6IFwi5p+l5om+6aKR6YGT6LaF5pe244CC5Zyo5Yqg5YWl6aKR6YGT5pe2IFNESyDlhYjopoHmn6Xmib7mjIflrprnmoTpopHpgZPvvIzlh7rnjrDor6XorablkYrkuIDoiKzmmK/lm6DkuLrnvZHnu5zlpKrlt67vvIzov57mjqXkuI3liLDmnI3liqHlmahcIixcblx0XHQxMDY6IFwi5omT5byA6aKR6YGT6LaF5pe244CC5p+l5om+5Yiw5oyH5a6a6aKR6YGT5ZCO77yMU0RLIOaOpeedgOaJk+W8gOivpemikemBk++8jOi2heaXtuS4gOiIrOaYr+WboOS4uue9kee7nOWkquW3ru+8jOi/nuaOpeS4jeWIsOacjeWKoeWZqFwiLFxuXHRcdDEwNzogXCLmiZPlvIDpopHpgZPor7fmsYLooqvmnI3liqHlmajmi5Lnu53jgILmnI3liqHlmajlj6/og73msqHmnInlip7ms5XlpITnkIbor6Xor7fmsYLmiJbor6Xor7fmsYLmmK/pnZ7ms5XnmoRcIixcblx0XHQxMjE6IFwiVElDS0VUIOmdnuazle+8jOaJk+W8gOmikemBk+Wksei0pVwiLFxuXHRcdDEyMjogXCLlsJ3or5XmiZPlvIDlj6bkuIDkuKrmnI3liqHlmahcIixcblx0XHQ3MDE6IFwi5omT5byA5Ly05aWP5Ye66ZSZXCIsXG5cdFx0MTAxNDogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrov5DooYzml7bmkq3mlL7orr7lpIflh7rnjrDorablkYpcIixcblx0XHQxMDE2OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuW9lemfs+iuvuWkh+WHuueOsOitpuWRilwiLFxuXHRcdDEwMTk6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5rKh5pyJ6YeH6ZuG5Yiw5pyJ5pWI55qE5aOw6Z+z5pWw5o2uXCIsXG5cdFx0MTAyNTogXCLpn7PpopHmkq3mlL7miJbph4fpm4booqvns7vnu5/kuovku7bvvIjlpoLmnaXnlLXvvInmiZPmibBcIixcblx0XHQxMDMzOiBcIumfs+mikeiuvuWkh+aooeWdl++8muW9leWItuiuvuWkh+iiq+WNoOeUqFwiLFxuXHRcdDEwNTE6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5b2V6Z+z5aOw6Z+z5qOA5p+l5Yiw5ZW45Y+rXCIsXG5cdH0sXG5cdC8vIOmUmeivr+eKtuaAgeeggVxuXHRlcnJvcmU6IHtcblx0XHQwOiBcIuayoeaciemUmeivr1wiLFxuXHRcdDE6IFwi5LiA6Iis5oCn55qE6ZSZ6K+v77yI5rKh5pyJ5piO56Gu5b2S57G755qE6ZSZ6K+v5Y6f5Zug77yJXCIsXG5cdFx0MjogXCJBUEkg6LCD55So5LqG5peg5pWI55qE5Y+C5pWw44CC5L6L5aaC5oyH5a6a55qE6aKR6YGT5ZCN5ZCr5pyJ6Z2e5rOV5a2X56ymXCIsXG5cdFx0MzogXCJTREsg5Yid5aeL5YyW5aSx6LSlXCIsXG5cdFx0NDogXCJTREsg5b2T5YmN54q25oCB5LiN5pSv5oyB5q2k5pON5L2cXCIsXG5cdFx0NTogXCLosIPnlKjooqvmi5Lnu51cIixcblx0XHQ2OiBcIuS8oOWFpeeahOe8k+WGsuWMuuWkp+Wwj+S4jei2s+S7peWtmOaUvui/lOWbnueahOaVsOaNrlwiLFxuXHRcdDc6IFwiU0RLIOWwmuacquWIneWni+WMlu+8jOWwseiwg+eUqOWFtiBBUEnjgILor7fnoa7orqTlnKjosIPnlKggQVBJIOS5i+WJjeW3suWIm+W7uiBSdGNFbmdpbmUg5a+56LGh5bm25a6M5oiQ5Yid5aeL5YyWXCIsXG5cdFx0ODogXCLmjIflrprnmoQgVmlldyDml6DmlYjvvIzkvb/nlKjop4bpopHlip/og73ml7bpnIDopoHmjIflrpogVmlld1wiLFxuXHRcdDk6IFwi5rKh5pyJ5pON5L2c5p2D6ZmQ44CC6K+35qOA5p+l55So5oi35piv5ZCm5o6I5LqIIGFwcCDpn7Pop4bpopHorr7lpIfkvb/nlKjmnYPpmZBcIixcblx0XHQxMDogXCJBUEkg6LCD55So6LaF5pe244CC5pyJ5LqbIEFQSSDosIPnlKjpnIDopoEgU0RLIOi/lOWbnue7k+aenO+8jOWmguaenCBTREsg5aSE55CG5pe26Ze06L+H6ZW/77yM6LaF6L+HIDEwIOenkuayoeaciei/lOWbnu+8jOS8muWHuueOsOatpOmUmeivr1wiLFxuXHRcdDExOiBcIuivt+axguiiq+WPlua2iFwiLFxuXHRcdDEyOiBcIuiwg+eUqOmikeeOh+WkqumrmFwiLFxuXHRcdDEzOiBcIlNESyDlhoXpg6jnu5HlrprliLDnvZHnu5wgU29ja2V0IOWksei0pVwiLFxuXHRcdDE0OiBcIue9kee7nOS4jeWPr+eUqFwiLFxuXHRcdDE1OiBcIuayoeaciee9kee7nOe8k+WGsuWMuuWPr+eUqFwiLFxuXHRcdDE2OiBcIuWIneWni+WMluinhumikeWKn+iDveWksei0peOAguacieWPr+iDveaYr+WboOinhumikei1hOa6kOiiq+WNoOeUqOWvvOiHtOeahOOAgueUqOaIt+aXoOazleeci+WIsOinhumikeeUu+mdou+8jOS9huS4jeW9seWTjeivremfs+mAmuS/oVwiLFxuXHRcdDE3OiBcIuWKoOWFpemikemBk+iiq+aLkue7nVwiLFxuXHRcdDE4OiBcIuemu+W8gOmikemBk+Wksei0pVwiLFxuXHRcdDE5OiBcIui1hOa6kOW3suiiq+WNoOeUqO+8jOS4jeiDvemHjeWkjeS9v+eUqFwiLFxuXHRcdDEwMTogXCLkuI3mmK/mnInmlYjnmoQgQVBQIElE44CC6K+35pu05o2i5pyJ5pWI55qEIEFQUCBJRCDph43mlrDliqDlhaXpopHpgZNcIixcblx0XHQxMDI6IFwi5LiN5piv5pyJ5pWI55qE6aKR6YGT5ZCN44CC6K+35pu05o2i5pyJ5pWI55qE6aKR6YGT5ZCN6YeN5paw5Yqg5YWl6aKR6YGTXCIsXG5cdFx0MTEwOiBcIuW8gOWQr+S6hiB0b2tlbiDmoKHpqozkvYbmsqHmnInovpPlhaUgdG9rZW5cIixcblx0XHQxMTE6IFwi572R57uc6L+e5o6l5Lit5patXCIsXG5cdFx0MTEyOiBcIue9kee7nOi/nuaOpeS4ouWksVwiLFxuXHRcdDExMzogXCLlnKjosIPnlKggc2VuZFN0cmVhbU1lc3NhZ2Ug5pe277yM55So5oi35LiN5Zyo6aKR6YGT5YaFXCIsXG5cdFx0MTE0OiBcIuWcqOiwg+eUqCBzZW5kU3RyZWFtTWVzc2FnZSDml7bvvIzlj5HpgIHnmoTmlbDmja7plb/luqblpKfkuo4gMTAyNCDkuKrlrZfoioJcIixcblx0XHQxMTU6IFwi5Zyo6LCD55SoIHNlbmRTdHJlYW1NZXNzYWdlIOaXtu+8jOWPkemAgeeahOaVsOaNrueggeeOh+i2hei/h+mZkOWItu+8iDZLQi9z77yJXCIsXG5cdFx0MTE2OiBcIuWcqOiwg+eUqCBjcmVhdGVEYXRhU3RyZWFtIOaXtu+8jOWIm+W7uueahOaVsOaNrumAmumBk+i/h+Wkmu+8iOi2hei/hyA1IOS4qumAmumBk++8iVwiLFxuXHRcdDEyMDogXCLop6Plr4blpLHotKXvvIzlj6/og73mmK/nlKjmiLfliqDlhaXpopHpgZPnlKjkuobkuI3lkIznmoTlr4bnoIHjgILor7fmo4Dmn6XliqDlhaXpopHpgZPml7bnmoTorr7nva7vvIzmiJblsJ3or5Xph43mlrDliqDlhaXpopHpgZNcIixcblx0XHQxMjM6IFwi5q2k55So5oi36KKr5pyN5Yqh5Zmo56aB5q2iXCIsXG5cdFx0MTI1OiBcIuawtOWNsOaWh+S7tui3r+W+hOmUmeivr1wiLFxuXHRcdDEzNDogXCLml6DmlYjnmoQgVXNlciBhY2NvdW50XCIsXG5cdFx0MTAwMTogXCLliqDovb3lqpLkvZPlvJXmk47lpLHotKVcIixcblx0XHQxMDAyOiBcIuWQr+WKqOWqkuS9k+W8leaTjuW8gOWni+mAmuivneWksei0peOAguivt+WwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxuXHRcdDEwMDQ6IFwi5ZCv5Yqo6KeG6aKR5riy5p+T5qih5Z2X5aSx6LSlXCIsXG5cdFx0MTAwNTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrpn7PpopHorr7lpIflh7rnjrDplJnor6/vvIjmnKrmmI7noa7mjIfmmI7kuLrkvZXnp43plJnor6/vvInjgILor7fmo4Dmn6Xpn7PpopHorr7lpIfmmK/lkKbooqvlhbbku5blupTnlKjljaDnlKjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcblx0XHQxMDA2OiBcIumfs+mikeiuvuWkh+aooeWdl++8muS9v+eUqCBqYXZhIOi1hOa6kOWHuueOsOmUmeivr1wiLFxuXHRcdDEwMDc6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya6K6+572u55qE6YeH5qC36aKR546H5Ye6546w6ZSZ6K+vXCIsXG5cdFx0MTAwODogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrliJ3lp4vljJbmkq3mlL7orr7lpIflh7rnjrDplJnor6/jgILor7fmo4Dmn6Xmkq3mlL7orr7lpIfmmK/lkKbooqvlhbbku5blupTnlKjljaDnlKjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcblx0XHQxMDA5OiBcIumfs+mikeiuvuWkh+aooeWdl++8muWQr+WKqOaSreaUvuiuvuWkh+WHuueOsOmUmeivr+OAguivt+ajgOafpeaSreaUvuiuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxuXHRcdDEwMTA6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5YGc5q2i5pKt5pS+6K6+5aSH5Ye6546w6ZSZ6K+vXCIsXG5cdFx0MTAxMTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrliJ3lp4vljJblvZXpn7Porr7lpIfml7blh7rnjrDplJnor6/jgILor7fmo4Dmn6XlvZXpn7Porr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcblx0XHQxMDEyOiBcIumfs+mikeiuvuWkh+aooeWdl++8muWQr+WKqOW9lemfs+iuvuWkh+WHuueOsOmUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxuXHRcdDEwMTM6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5YGc5q2i5b2V6Z+z6K6+5aSH5Ye6546w6ZSZ6K+vXCIsXG5cdFx0MTAxNTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrov5DooYzml7bmkq3mlL7lh7rnjrDplJnor6/jgILor7fmo4Dmn6XlvZXpn7Porr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcblx0XHQxMDE3OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuW9lemfs+mUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxuXHRcdDEwMTg6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5b2V6Z+z5aSx6LSlXCIsXG5cdFx0MTAyMjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrliJ3lp4vljJYgTG9vcGJhY2sg6K6+5aSH6ZSZ6K+vXCIsXG5cdFx0MTAyMzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlkK/liqggTG9vcGJhY2sg6K6+5aSH6ZSZ6K+vXCIsXG5cdFx0MTAzMDogXCLpn7PpopHot6/nlLHvvJrov57mjqXok53niZnpgJror53lpLHotKXvvIzpu5jorqTot6/nlLHkvJrooqvlkK/nlKhcIixcblx0XHQxMzU5OiBcIumfs+mikeiuvuWkh+aooeWdl++8muaXoOW9leWItuiuvuWkh+OAguivt+ajgOafpeaYr+WQpuacieWPr+eUqOeahOW9leaUvumfs+iuvuWkh+aIluiAheW9leaUvumfs+iuvuWkh+aYr+WQpuW3sue7j+iiq+WFtuS7luW6lOeUqOWNoOeUqFwiLFxuXHRcdDE1MDE6IFwi6KeG6aKR6K6+5aSH5qih5Z2X77ya5rKh5pyJ5pGE5YOP5aS05L2/55So5p2D6ZmQ44CC6K+35qOA5p+l5piv5ZCm5bey57uP5omT5byA5pGE5YOP5aS05p2D6ZmQXCIsXG5cdFx0MTYwMDogXCLop4bpopHorr7lpIfmqKHlnZfvvJrmnKrnn6XplJnor69cIixcblx0XHQxNjAxOiBcIuinhumikeiuvuWkh+aooeWdl++8muinhumikee8lueggeWZqOWIneWni+WMlumUmeivr+OAguivpemUmeivr+S4uuS4pemHjemUmeivr++8jOivt+WwneivlemHjeaWsOWKoOWFpemikemBk1wiLFxuXHRcdDE2MDI6IFwi6KeG6aKR6K6+5aSH5qih5Z2X77ya6KeG6aKR57yW56CB5Zmo6ZSZ6K+v44CC6K+l6ZSZ6K+v5Li65Lil6YeN6ZSZ6K+v77yM6K+35bCd6K+V6YeN5paw5Yqg5YWl6aKR6YGTXCIsXG5cdH0sXG5cdC8vIOaXgei3r+aOqOa1geebuOWFs+eKtuaAgeeggVxuXHRsaXZlOiB7XG5cdFx0Ly8g54q25oCB56CBXG5cdFx0c3RhdGU6IHtcblx0XHRcdDA6IFwi5o6o5rWB5pyq5byA5aeL5oiW5bey57uT5p2fXCIsXG5cdFx0XHQxOiBcIuato+WcqOi/nuaOpSBBUiDmjqjmtYHmnI3liqHlmajlkowgUlRNUCDmnI3liqHlmahcIixcblx0XHRcdDI6IFwi5o6o5rWB5q2j5Zyo6L+b6KGMLOaIkOWKn+aOqOa1geWQjlwiLFxuXHRcdFx0MzogXCLmraPlnKjmgaLlpI3mjqjmtYFcIixcblx0XHRcdDQ6IFwi5o6o5rWB5aSx6LSlXCJcblx0XHR9LFxuXHRcdC8vIOmUmeivr+eggVxuXHRcdGVycm9yOiB7XG5cdFx0XHQwOiBcIuaOqOa1geaIkOWKn1wiLFxuXHRcdFx0MTogXCLlj4LmlbDml6DmlYjvvIzor7fmo4Dmn6XovpPlhaXlj4LmlbDmmK/lkKbmraPnoa7jgILor7fnoa7kv53osIPnlKggc2V0TGl2ZVRyYW5zY29kaW5nIFwiLFxuXHRcdFx0MjogXCLmjqjmtYHlt7LliqDlr4bvvIzkuI3og73mjqjmtYFcIixcblx0XHRcdDM6IFwi5o6o5rWB6LaF5pe25pyq5oiQ5Yqf77yM5Y+v6YeN5paw5o6o5rWBXCIsXG5cdFx0XHQ0OiBcIuaOqOa1geacjeWKoeWZqOWHuueOsOmUmeivr1wiLFxuXHRcdFx0NTogXCJSVE1QIOacjeWKoeWZqOWHuueOsOmUmeivr1wiLFxuXHRcdFx0NjogXCLmjqjmtYHor7fmsYLov4fkuo7popHnuYFcIixcblx0XHRcdDc6IFwi5Y2V5Liq5Li75pKt55qE5o6o5rWB5Zyw5Z2A5pWw55uu6L6+5Yiw5LiK57q/IDEwXCIsXG5cdFx0XHQ4OiBcIuS4u+aSreaTjeS9nOS4jeWxnuS6juiHquW3seeahOa1ge+8jOivt+ajgOafpSBBcHAg6YC76L6RXCIsXG5cdFx0XHQ5OiBcIuacjeWKoeWZqOacquaJvuWIsOi/meS4qua1gVwiLFxuXHRcdFx0MTA6IFwi5o6o5rWB5Zyw5Z2A5qC85byP5pyJ6ZSZ6K+v77yM6K+35qOA5p+l5o6o5rWB5Zyw5Z2A5qC85byP5piv5ZCm5q2j56GuXCIsXG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29kZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!******************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-loading.nvue?vue&type=template&id=0e75eaba& */ 20);\n/* harmony import */ var _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-loading.nvue?vue&type=script&lang=js& */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 26);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./my-loading.nvue?vue&type=style&index=0&lang=scss& */ 24).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./my-loading.nvue?vue&type=style&index=0&lang=scss& */ 24).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"fc36aa1e\",\n  false,\n  _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/my-loading/my-loading.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZEQUFxRDtBQUN6RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkRBQXFEO0FBQzlHOztBQUVBOztBQUVBO0FBQ3VNO0FBQ3ZNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbXktbG9hZGluZy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlNzVlYWJhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXktbG9hZGluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9teS1sb2FkaW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9teS1sb2FkaW5nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL215LWxvYWRpbmcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvSEJ1aWxkZXJYLjMuNi40LjIwMjIwOTIyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJmYzM2YWExZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL215LWxvYWRpbmcvbXktbG9hZGluZy5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue?vue&type=template&id=0e75eaba& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-loading.nvue?vue&type=template&id=0e75eaba& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue?vue&type=template&id=0e75eaba& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["loading"], style: "margin-top: " + _vm.mt + "rpx;" },
    [
      _c("view", {
        ref: "obj1",
        staticClass: ["obj"],
        style: "background-color: " + _vm.color + ";"
      }),
      _c("view", {
        ref: "obj2",
        staticClass: ["obj"],
        style:
          "margin-left: 12rpx; margin-right: 12rpx; background-color: " +
          _vm.color +
          ";"
      }),
      _c("view", {
        ref: "obj3",
        staticClass: ["obj"],
        style: "background-color: " + _vm.color + ";"
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-loading.nvue?vue&type=script&lang=js& */ 23);\n/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNoQixDQUFnQixrakJBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRGVza3RvcC9IQnVpbGRlclguMy42LjQuMjAyMjA5MjIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vRGVza3RvcC9IQnVpbGRlclguMy42LjQuMjAyMjA5MjIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9EZXNrdG9wL0hCdWlsZGVyWC4zLjYuNC4yMDIyMDkyMi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teS1sb2FkaW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRGVza3RvcC9IQnVpbGRlclguMy42LjQuMjAyMjA5MjIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vRGVza3RvcC9IQnVpbGRlclguMy42LjQuMjAyMjA5MjIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9EZXNrdG9wL0hCdWlsZGVyWC4zLjYuNC4yMDIyMDkyMi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teS1sb2FkaW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');var _default =\n\n{\n  name: 'my-loading',\n  props: {\n    // 小球颜色\n    color: {\n      type: String,\n      default: '#0081FF' },\n\n    // 距离顶部高度\n    mt: {\n      type: [String, Number],\n      default: 40 } },\n\n\n  created: function created() {var _this = this;\n    // 定时器执行前，先执行一次，让整个动画过程更流畅\n    setTimeout(function () {\n      _this.createAnimation();\n    }, 50);\n    // 执行定时器\n    setInterval(function () {\n      _this.createAnimation();\n    }, 1100);\n  },\n  methods: {\n    createAnimation: function createAnimation() {var _this2 = this;\n      this.run(this.$refs.obj1);\n      setTimeout(function () {\n        _this2.run(_this2.$refs.obj2);\n      }, 300);\n      setTimeout(function () {\n        _this2.run(_this2.$refs.obj3);\n      }, 600);\n    },\n    transition: function transition(el, options, duration) {var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      return new Promise(function (resolve) {\n        animation.transition(el, _objectSpread({\n          duration: duration,\n          delay: delay,\n          timingFunction: 'linear',\n          needLayout: false },\n        options),\n        resolve);\n      });\n    },\n    run: function run(el) {var _this3 = this;\n      this.transition(el, {\n        styles: {\n          transform: 'scale(0.5)' } },\n\n      500, 0).then(function () {\n        _this3.transition(el, {\n          styles: {\n            transform: 'scale(1)' } },\n\n        500, 0);\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9teS1sb2FkaW5nL215LWxvYWRpbmcubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTQSxnRDs7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBUEEsRUFGQTs7O0FBY0EsU0FkQSxxQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxFQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLElBRkE7QUFHQSxHQXZCQTtBQXdCQTtBQUNBLG1CQURBLDZCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQVRBO0FBVUEsY0FWQSxzQkFVQSxFQVZBLEVBVUEsT0FWQSxFQVVBLFFBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHNCQUZBO0FBR0Esa0NBSEE7QUFJQSwyQkFKQTtBQUtBLGVBTEE7QUFNQSxlQU5BO0FBT0EsT0FSQTtBQVNBLEtBcEJBO0FBcUJBLE9BckJBLGVBcUJBLEVBckJBLEVBcUJBO0FBQ0E7QUFDQTtBQUNBLGlDQURBLEVBREE7O0FBSUEsU0FKQSxFQUlBLENBSkEsRUFJQSxJQUpBLENBSUE7QUFDQTtBQUNBO0FBQ0EsaUNBREEsRUFEQTs7QUFJQSxXQUpBLEVBSUEsQ0FKQTtBQUtBLE9BVkE7QUFXQSxLQWpDQSxFQXhCQSxFIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImxvYWRpbmdcIiA6c3R5bGU9XCJgbWFyZ2luLXRvcDogJHttdH1ycHg7YFwiPlxuXHRcdDx2aWV3IGNsYXNzPVwib2JqXCIgOnN0eWxlPVwiYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O2BcIiByZWY9XCJvYmoxXCI+PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwib2JqXCIgOnN0eWxlPVwiYG1hcmdpbi1sZWZ0OiAxMnJweDsgbWFyZ2luLXJpZ2h0OiAxMnJweDsgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07YFwiIHJlZj1cIm9iajJcIj48L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJvYmpcIiA6c3R5bGU9XCJgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07YFwiIHJlZj1cIm9iajNcIj48L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ215LWxvYWRpbmcnLFxuXHRcdHByb3BzOiB7XG5cdFx0XHQvLyDlsI/nkIPpopzoibJcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJyMwMDgxRkYnXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6Led56a76aG26YOo6auY5bqmXG5cdFx0XHRtdDoge1xuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuXHRcdFx0XHRkZWZhdWx0OiA0MFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdC8vIOWumuaXtuWZqOaJp+ihjOWJje+8jOWFiOaJp+ihjOS4gOasoe+8jOiuqeaVtOS4quWKqOeUu+i/h+eoi+abtOa1geeVhVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKClcblx0XHRcdH0sIDUwKVxuXHRcdFx0Ly8g5omn6KGM5a6a5pe25ZmoXG5cdFx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKClcblx0XHRcdH0sIDExMDApXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjcmVhdGVBbmltYXRpb24oKSB7XG5cdFx0XHRcdHRoaXMucnVuKHRoaXMuJHJlZnMub2JqMSlcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ydW4odGhpcy4kcmVmcy5vYmoyKVxuXHRcdFx0XHR9LCAzMDApXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucnVuKHRoaXMuJHJlZnMub2JqMylcblx0XHRcdFx0fSwgNjAwKVxuXHRcdFx0fSxcblx0XHRcdHRyYW5zaXRpb24oZWwsIG9wdGlvbnMsIGR1cmF0aW9uLCBkZWxheSA9IDApIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oZWwsIHtcblx0XHRcdFx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0ZGVsYXksXG5cdFx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG5cdFx0XHRcdFx0XHRuZWVkTGF5b3V0OiBmYWxzZSxcblx0XHRcdFx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHRcdFx0fSwgcmVzb2x2ZSlcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRydW4oZWwpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9uKGVsLCB7XG5cdFx0XHRcdFx0c3R5bGVzOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgNTAwLCAwKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnRyYW5zaXRpb24oZWwsIHtcblx0XHRcdFx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdzY2FsZSgxKSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA1MDAsIDApXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdC5sb2FkaW5nIHtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdGhlaWdodDogMzBycHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0Lm9iaiB7XG5cdFx0d2lkdGg6IDMwcnB4O1xuXHRcdGhlaWdodDogMzBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xuXHR9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-loading.nvue?vue&type=style&index=0&lang=scss& */ 25);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/components/my-loading/my-loading.nvue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".loading": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        16
      ],
      "height": [
        "30rpx",
        0,
        0,
        16
      ],
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".obj": {
    "": {
      "width": [
        "30rpx",
        0,
        0,
        17
      ],
      "height": [
        "30rpx",
        0,
        0,
        17
      ],
      "borderRadius": [
        "100rpx",
        0,
        0,
        17
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 26 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 27 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?vue&type=style&index=0&id=318acad2&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_318acad2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Desktop/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=style&index=0&id=318acad2&scoped=true&lang=css&mpType=page */ 28);
/* harmony import */ var _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_318acad2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_318acad2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_318acad2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_318acad2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Desktop_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_318acad2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/23188/Documents/HBuilderProjects/qq/pages/TUI-Chat/rtcPage.nvue?vue&type=style&index=0&id=318acad2&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-btn-icon": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        0
      ]
    }
  },
  ".content": {
    "": {
      "backgroundColor": [
        "#2F3041",
        0,
        0,
        1
      ]
    }
  },
  ".text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        2
      ],
      "marginTop": [
        "20",
        0,
        0,
        2
      ]
    }
  },
  ".hint": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".location-none": {
    "": {
      "flex": [
        1,
        0,
        0,
        5
      ],
      "position": [
        "absolute",
        0,
        0,
        5
      ],
      "top": [
        0,
        0,
        0,
        5
      ],
      "bottom": [
        0,
        0,
        0,
        5
      ],
      "right": [
        0,
        0,
        0,
        5
      ],
      "justifyContent": [
        "center",
        0,
        0,
        5
      ],
      "alignItems": [
        "center",
        0,
        0,
        5
      ]
    }
  },
  ".user-hint": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        7
      ],
      "bottom": [
        0,
        0,
        0,
        7
      ],
      "left": [
        0,
        0,
        0,
        7
      ],
      "backgroundColor": [
        "#2F3041",
        0,
        0,
        7
      ],
      "opacity": [
        0.5,
        0,
        0,
        7
      ],
      "paddingTop": [
        "4",
        0,
        0,
        7
      ],
      "paddingRight": [
        "10",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "4",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        7
      ]
    }
  },
  ".hint-text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        8
      ],
      "opacity": [
        1,
        0,
        0,
        8
      ]
    }
  },
  ".CanvasView": {
    "": {
      "flexWrap": [
        "wrap",
        0,
        0,
        9
      ],
      "flexDirection": [
        "row",
        0,
        0,
        9
      ],
      "paddingTop": [
        "60",
        0,
        0,
        9
      ],
      "paddingRight": [
        0,
        0,
        0,
        9
      ],
      "paddingBottom": [
        0,
        0,
        0,
        9
      ],
      "paddingLeft": [
        0,
        0,
        0,
        9
      ]
    }
  },
  ".video_local": {
    "": {
      "flex": [
        1,
        0,
        0,
        11
      ]
    }
  },
  ".video_local_1": {
    "": {
      "width": [
        "375rpx",
        0,
        0,
        13
      ],
      "height": [
        "420rpx",
        0,
        0,
        13
      ]
    }
  },
  ".options": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        15
      ],
      "bottom": [
        "20",
        0,
        0,
        15
      ],
      "paddingTop": [
        0,
        0,
        0,
        15
      ],
      "paddingRight": [
        "20",
        0,
        0,
        15
      ],
      "paddingBottom": [
        0,
        0,
        0,
        15
      ],
      "paddingLeft": [
        "20",
        0,
        0,
        15
      ],
      "width": [
        100,
        0,
        0,
        15
      ],
      "flexDirection": [
        "column",
        0,
        0,
        15
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        15
      ]
    }
  },
  ".icon": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".icon_img": {
    "": {
      "width": [
        "60",
        0,
        0,
        17
      ],
      "height": [
        "60",
        0,
        0,
        17
      ]
    }
  },
  ".icon_text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        18
      ],
      "marginTop": [
        "10",
        0,
        0,
        18
      ],
      "marginRight": [
        "10",
        0,
        0,
        18
      ],
      "marginBottom": [
        "10",
        0,
        0,
        18
      ],
      "marginLeft": [
        "10",
        0,
        0,
        18
      ]
    }
  },
  ".live": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        20
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        20
      ],
      "opacity": [
        0.8,
        0,
        0,
        20
      ],
      "justifyContent": [
        "center",
        0,
        0,
        20
      ],
      "alignItems": [
        "center",
        0,
        0,
        20
      ]
    }
  },
  ".live-input": {
    "": {
      "height": [
        "110rpx",
        0,
        0,
        21
      ],
      "paddingTop": [
        0,
        0,
        0,
        21
      ],
      "paddingRight": [
        "26",
        0,
        0,
        21
      ],
      "paddingBottom": [
        0,
        0,
        0,
        21
      ],
      "paddingLeft": [
        "26",
        0,
        0,
        21
      ],
      "backgroundColor": [
        "#2F3041",
        0,
        0,
        21
      ],
      "borderRadius": [
        "6",
        0,
        0,
        21
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        21
      ],
      "opacity": [
        1,
        0,
        0,
        21
      ],
      "textAlign": [
        "center",
        0,
        0,
        21
      ]
    }
  },
  ".live-options": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        22
      ],
      "paddingTop": [
        0,
        0,
        0,
        22
      ],
      "paddingRight": [
        "20",
        0,
        0,
        22
      ],
      "paddingBottom": [
        0,
        0,
        0,
        22
      ],
      "paddingLeft": [
        "20",
        0,
        0,
        22
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);