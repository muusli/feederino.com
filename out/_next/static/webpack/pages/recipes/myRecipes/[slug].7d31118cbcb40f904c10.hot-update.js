webpackHotUpdate_N_E("pages/recipes/myRecipes/[slug]",{

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: auth, googleAuthProvider, firestore, serverTimestamp, fromMillis, increment, functions, storage, STATE_CHANGED, getUserWithUsername, recipeToJSON, postToJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverTimestamp", function() { return serverTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMillis", function() { return fromMillis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_CHANGED", function() { return STATE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserWithUsername", function() { return getUserWithUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeToJSON", function() { return recipeToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postToJSON", function() { return postToJSON; });
/* harmony import */ var C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var firebaseConfig = {
  apiKey: 'AIzaSyCkaNDeg8Yqfzl4wMvQFWYbUPT50LYj8Y4',
  authDomain: 'muusli.firebaseapp.com',
  projectId: 'muusli',
  storageBucket: 'muusli.appspot.com',
  messagingSenderId: '778128152980',
  appId: '1:778128152980:web:5b265c38fb5e2726ab5781',
  measurementId: 'G-DBKVSKX49Y'
}; // Initialize Firebase

if (!firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].initializeApp(firebaseConfig);
} // Auth exports


var auth = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth();
var googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider(); // Firestore exports

var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
var serverTimestamp = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.serverTimestamp;
var fromMillis = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.fromMillis;
var increment = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.increment;
var functions = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].functions(); // Storage exports

var storage = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].storage();
var STATE_CHANGED = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].storage.TaskEvent.STATE_CHANGED; /// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */

function getUserWithUsername(_x) {
  return _getUserWithUsername.apply(this, arguments);
}
/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */

function _getUserWithUsername() {
  _getUserWithUsername = Object(C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username) {
    var usersRef, query, userDoc;
    return C_Users_Johannes_Desktop_Projekte_Muusli_muusli1_1_1_muusl_recipes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            usersRef = firestore.collection('users');
            query = usersRef.where('username', '==', username).limit(1);
            _context.next = 4;
            return query.get();

          case 4:
            userDoc = _context.sent.docs[0];
            return _context.abrupt("return", userDoc);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUserWithUsername.apply(this, arguments);
}

function recipeToJSON(doc) {
  var data = doc.data();
  return _objectSpread(_objectSpread({}, data), {}, {
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: (data === null || data === void 0 ? void 0 : data.createdAt.toMillis()) || 0,
    updatedAt: (data === null || data === void 0 ? void 0 : data.updatedAt.toMillis()) || 0
  });
}
function postToJSON(doc) {
  var data = doc.data();
  return _objectSpread(_objectSpread({}, data), {}, {
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: (data === null || data === void 0 ? void 0 : data.createdAt.toMillis()) || 0,
    updatedAt: (data === null || data === void 0 ? void 0 : data.updatedAt.toMillis()) || 0
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/firebase/functions/dist/index.esm.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZpcmViYXNlLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZ29vZ2xlQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmlyZXN0b3JlIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSIsImZyb21NaWxsaXMiLCJUaW1lc3RhbXAiLCJpbmNyZW1lbnQiLCJmdW5jdGlvbnMiLCJzdG9yYWdlIiwiU1RBVEVfQ0hBTkdFRCIsIlRhc2tFdmVudCIsImdldFVzZXJXaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsInVzZXJzUmVmIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJsaW1pdCIsImdldCIsInVzZXJEb2MiLCJkb2NzIiwicmVjaXBlVG9KU09OIiwiZG9jIiwiZGF0YSIsImNyZWF0ZWRBdCIsInRvTWlsbGlzIiwidXBkYXRlZEF0IiwicG9zdFRvSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUc7QUFDcEJDLFFBQU0sRUFBYyx5Q0FEQTtBQUVwQkMsWUFBVSxFQUFVLHdCQUZBO0FBR3BCQyxXQUFTLEVBQVcsUUFIQTtBQUlwQkMsZUFBYSxFQUFPLG9CQUpBO0FBS3BCQyxtQkFBaUIsRUFBRyxjQUxBO0FBTXBCQyxPQUFLLEVBQWUsMkNBTkE7QUFPcEJDLGVBQWEsRUFBTztBQVBBLENBQXJCLEMsQ0FTQTs7QUFDQSxJQUFJLENBQUNDLG9EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDMUJGLHNEQUFRLENBQUNHLGFBQVQsQ0FBdUJYLGNBQXZCO0FBQ0EsQyxDQUNEOzs7QUFDTyxJQUFNWSxJQUFJLEdBQUdKLG9EQUFRLENBQUNJLElBQVQsRUFBYjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLElBQUlMLG9EQUFRLENBQUNJLElBQVQsQ0FBY0Usa0JBQWxCLEVBQTNCLEMsQ0FHUDs7QUFDTyxJQUFNQyxTQUFTLEdBQUdQLG9EQUFRLENBQUNPLFNBQVQsRUFBbEI7QUFDQSxJQUFNQyxlQUFlLEdBQUdSLG9EQUFRLENBQUNPLFNBQVQsQ0FBbUJFLFVBQW5CLENBQThCRCxlQUF0RDtBQUNBLElBQU1FLFVBQVUsR0FBR1Ysb0RBQVEsQ0FBQ08sU0FBVCxDQUFtQkksU0FBbkIsQ0FBNkJELFVBQWhEO0FBQ0EsSUFBTUUsU0FBUyxHQUFHWixvREFBUSxDQUFDTyxTQUFULENBQW1CRSxVQUFuQixDQUE4QkcsU0FBaEQ7QUFDQSxJQUFNQyxTQUFTLEdBQUdiLG9EQUFRLENBQUNhLFNBQVQsRUFBbEIsQyxDQUNQOztBQUNPLElBQU1DLE9BQU8sR0FBR2Qsb0RBQVEsQ0FBQ2MsT0FBVCxFQUFoQjtBQUNBLElBQU1DLGFBQWEsR0FBR2Ysb0RBQVEsQ0FBQ2MsT0FBVCxDQUFpQkUsU0FBakIsQ0FBMkJELGFBQWpELEMsQ0FFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFlRSxtQkFBdEI7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7Ozt3V0FWTyxpQkFBbUNDLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyxvQkFERCxHQUNZWixTQUFTLENBQUNhLFVBQVYsQ0FBcUIsT0FBckIsQ0FEWjtBQUVDQyxpQkFGRCxHQUVTRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxVQUFmLEVBQTJCLElBQTNCLEVBQWlDSixRQUFqQyxFQUEyQ0ssS0FBM0MsQ0FBaUQsQ0FBakQsQ0FGVDtBQUFBO0FBQUEsbUJBR2tCRixLQUFLLENBQUNHLEdBQU4sRUFIbEI7O0FBQUE7QUFHQ0MsbUJBSEQsaUJBRytCQyxJQUgvQixDQUdvQyxDQUhwQztBQUFBLDZDQUlFRCxPQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFXQSxTQUFTRSxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUNoQyxNQUFNQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0MsSUFBSixFQUFiO0FBQ0EseUNBQ0tBLElBREw7QUFFRTtBQUNBQyxhQUFTLEVBQUUsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVDLFNBQU4sQ0FBZ0JDLFFBQWhCLE9BQThCLENBSDNDO0FBSUVDLGFBQVMsRUFBRSxDQUFBSCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsU0FBTixDQUFnQkQsUUFBaEIsT0FBOEI7QUFKM0M7QUFNRDtBQUNPLFNBQVNFLFVBQVQsQ0FBb0JMLEdBQXBCLEVBQXlCO0FBQy9CLE1BQU1DLElBQUksR0FBR0QsR0FBRyxDQUFDQyxJQUFKLEVBQWI7QUFDQSx5Q0FDS0EsSUFETDtBQUVFO0FBQ0FDLGFBQVMsRUFBRSxDQUFBRCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsU0FBTixDQUFnQkMsUUFBaEIsT0FBOEIsQ0FIM0M7QUFJRUMsYUFBUyxFQUFFLENBQUFILElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxTQUFOLENBQWdCRCxRQUFoQixPQUE4QjtBQUozQztBQU1EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMvbXlSZWNpcGVzL1tzbHVnXS43ZDMxMTE4Y2JjYjQwZjkwNGMxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuXHRhcGlLZXkgICAgICAgICAgICA6ICdBSXphU3lDa2FORGVnOFlxZnpsNHdNdlFGV1liVVBUNTBMWWo4WTQnLFxyXG5cdGF1dGhEb21haW4gICAgICAgIDogJ211dXNsaS5maXJlYmFzZWFwcC5jb20nLFxyXG5cdHByb2plY3RJZCAgICAgICAgIDogJ211dXNsaScsXHJcblx0c3RvcmFnZUJ1Y2tldCAgICAgOiAnbXV1c2xpLmFwcHNwb3QuY29tJyxcclxuXHRtZXNzYWdpbmdTZW5kZXJJZCA6ICc3NzgxMjgxNTI5ODAnLFxyXG5cdGFwcElkICAgICAgICAgICAgIDogJzE6Nzc4MTI4MTUyOTgwOndlYjo1YjI2NWMzOGZiNWUyNzI2YWI1NzgxJyxcclxuXHRtZWFzdXJlbWVudElkICAgICA6ICdHLURCS1ZTS1g0OVknXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG5cdGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcbi8vIEF1dGggZXhwb3J0c1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuZXhwb3J0IGNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuICBcclxuLy8gRmlyZXN0b3JlIGV4cG9ydHNcclxuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3Qgc2VydmVyVGltZXN0YW1wID0gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wO1xyXG5leHBvcnQgY29uc3QgZnJvbU1pbGxpcyA9IGZpcmViYXNlLmZpcmVzdG9yZS5UaW1lc3RhbXAuZnJvbU1pbGxpcztcclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmluY3JlbWVudDtcclxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IGZpcmViYXNlLmZ1bmN0aW9ucygpXHJcbi8vIFN0b3JhZ2UgZXhwb3J0c1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuZXhwb3J0IGNvbnN0IFNUQVRFX0NIQU5HRUQgPSBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VEO1xyXG5cclxuLy8vIEhlbHBlciBmdW5jdGlvbnNcclxuXHJcbi8qKmBcclxuICogR2V0cyBhIHVzZXJzL3t1aWR9IGRvY3VtZW50IHdpdGggdXNlcm5hbWVcclxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VybmFtZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJXaXRoVXNlcm5hbWUodXNlcm5hbWUpIHtcclxuICBjb25zdCB1c2Vyc1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gdXNlcnNSZWYud2hlcmUoJ3VzZXJuYW1lJywgJz09JywgdXNlcm5hbWUpLmxpbWl0KDEpO1xyXG4gIGNvbnN0IHVzZXJEb2MgPSAoYXdhaXQgcXVlcnkuZ2V0KCkpLmRvY3NbMF07XHJcbiAgcmV0dXJuIHVzZXJEb2M7XHJcbn1cclxuXHJcbi8qKmBcclxuICogQ29udmVydHMgYSBmaXJlc3RvcmUgZG9jdW1lbnQgdG8gSlNPTlxyXG4gKiBAcGFyYW0gIHtEb2N1bWVudFNuYXBzaG90fSBkb2NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWNpcGVUb0pTT04oZG9jKSB7XHJcbiAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICAvLyBHb3RjaGEhIGZpcmVzdG9yZSB0aW1lc3RhbXAgTk9UIHNlcmlhbGl6YWJsZSB0byBKU09OLiBNdXN0IGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXHJcbiAgICBjcmVhdGVkQXQ6IGRhdGE/LmNyZWF0ZWRBdC50b01pbGxpcygpIHx8IDAsXHJcbiAgICB1cGRhdGVkQXQ6IGRhdGE/LnVwZGF0ZWRBdC50b01pbGxpcygpIHx8IDAsXHJcbiAgfTtcclxufVxyXG4gZXhwb3J0IGZ1bmN0aW9uIHBvc3RUb0pTT04oZG9jKSB7XHJcbiAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICAvLyBHb3RjaGEhIGZpcmVzdG9yZSB0aW1lc3RhbXAgTk9UIHNlcmlhbGl6YWJsZSB0byBKU09OLiBNdXN0IGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXHJcbiAgICBjcmVhdGVkQXQ6IGRhdGE/LmNyZWF0ZWRBdC50b01pbGxpcygpIHx8IDAsXHJcbiAgICB1cGRhdGVkQXQ6IGRhdGE/LnVwZGF0ZWRBdC50b01pbGxpcygpIHx8IDAsXHJcbiAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=