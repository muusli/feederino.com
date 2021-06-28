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
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");




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
/*!***********************************************************!*\
  !*** ./node_modules/firebase/functions/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZpcmViYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvZnVuY3Rpb25zL2Rpc3QvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZ29vZ2xlQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmlyZXN0b3JlIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSIsImZyb21NaWxsaXMiLCJUaW1lc3RhbXAiLCJpbmNyZW1lbnQiLCJmdW5jdGlvbnMiLCJzdG9yYWdlIiwiU1RBVEVfQ0hBTkdFRCIsIlRhc2tFdmVudCIsImdldFVzZXJXaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsInVzZXJzUmVmIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJsaW1pdCIsImdldCIsInVzZXJEb2MiLCJkb2NzIiwicmVjaXBlVG9KU09OIiwiZG9jIiwiZGF0YSIsImNyZWF0ZWRBdCIsInRvTWlsbGlzIiwidXBkYXRlZEF0IiwicG9zdFRvSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxjQUFjLEdBQUc7QUFDcEJDLFFBQU0sRUFBYyx5Q0FEQTtBQUVwQkMsWUFBVSxFQUFVLHdCQUZBO0FBR3BCQyxXQUFTLEVBQVcsUUFIQTtBQUlwQkMsZUFBYSxFQUFPLG9CQUpBO0FBS3BCQyxtQkFBaUIsRUFBRyxjQUxBO0FBTXBCQyxPQUFLLEVBQWUsMkNBTkE7QUFPcEJDLGVBQWEs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YmIwNGY5OTI5NWIzOGE5ZDBkYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJ1xyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcblx0YXBpS2V5ICAgICAgICAgICAgOiAnQUl6YVN5Q2thTkRlZzhZcWZ6bDR3TXZRRldZYlVQVDUwTFlqOFk0JyxcclxuXHRhdXRoRG9tYWluICAgICAgICA6ICdtdXVzbGkuZmlyZWJhc2VhcHAuY29tJyxcclxuXHRwcm9qZWN0SWQgICAgICAgICA6ICdtdXVzbGknLFxyXG5cdHN0b3JhZ2VCdWNrZXQgICAgIDogJ211dXNsaS5hcHBzcG90LmNvbScsXHJcblx0bWVzc2FnaW5nU2VuZGVySWQgOiAnNzc4MTI4MTUyOTgwJyxcclxuXHRhcHBJZCAgICAgICAgICAgICA6ICcxOjc3ODEyODE1Mjk4MDp3ZWI6NWIyNjVjMzhmYjVlMjcyNmFiNTc4MScsXHJcblx0bWVhc3VyZW1lbnRJZCAgICAgOiAnRy1EQktWU0tYNDlZJ1xyXG59O1xyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuXHRmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG4vLyBBdXRoIGV4cG9ydHNcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmV4cG9ydCBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbiAgXHJcbi8vIEZpcmVzdG9yZSBleHBvcnRzXHJcbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGNvbnN0IHNlcnZlclRpbWVzdGFtcCA9IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcDtcclxuZXhwb3J0IGNvbnN0IGZyb21NaWxsaXMgPSBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21NaWxsaXM7XHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5pbmNyZW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBmdW5jdGlvbnMgPSBmaXJlYmFzZS5mdW5jdGlvbnMoKVxyXG4vLyBTdG9yYWdlIGV4cG9ydHNcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbmV4cG9ydCBjb25zdCBTVEFURV9DSEFOR0VEID0gZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRDtcclxuXHJcbi8vLyBIZWxwZXIgZnVuY3Rpb25zXHJcblxyXG4vKipgXHJcbiAqIEdldHMgYSB1c2Vycy97dWlkfSBkb2N1bWVudCB3aXRoIHVzZXJuYW1lXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdXNlcm5hbWVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyV2l0aFVzZXJuYW1lKHVzZXJuYW1lKSB7XHJcbiAgY29uc3QgdXNlcnNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKTtcclxuICBjb25zdCBxdWVyeSA9IHVzZXJzUmVmLndoZXJlKCd1c2VybmFtZScsICc9PScsIHVzZXJuYW1lKS5saW1pdCgxKTtcclxuICBjb25zdCB1c2VyRG9jID0gKGF3YWl0IHF1ZXJ5LmdldCgpKS5kb2NzWzBdO1xyXG4gIHJldHVybiB1c2VyRG9jO1xyXG59XHJcblxyXG4vKipgXHJcbiAqIENvbnZlcnRzIGEgZmlyZXN0b3JlIGRvY3VtZW50IHRvIEpTT05cclxuICogQHBhcmFtICB7RG9jdW1lbnRTbmFwc2hvdH0gZG9jXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVjaXBlVG9KU09OKGRvYykge1xyXG4gIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgLy8gR290Y2hhISBmaXJlc3RvcmUgdGltZXN0YW1wIE5PVCBzZXJpYWxpemFibGUgdG8gSlNPTi4gTXVzdCBjb252ZXJ0IHRvIG1pbGxpc2Vjb25kc1xyXG4gICAgY3JlYXRlZEF0OiBkYXRhPy5jcmVhdGVkQXQudG9NaWxsaXMoKSB8fCAwLFxyXG4gICAgdXBkYXRlZEF0OiBkYXRhPy51cGRhdGVkQXQudG9NaWxsaXMoKSB8fCAwLFxyXG4gIH07XHJcbn1cclxuIGV4cG9ydCBmdW5jdGlvbiBwb3N0VG9KU09OKGRvYykge1xyXG4gIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgLy8gR290Y2hhISBmaXJlc3RvcmUgdGltZXN0YW1wIE5PVCBzZXJpYWxpemFibGUgdG8gSlNPTi4gTXVzdCBjb252ZXJ0IHRvIG1pbGxpc2Vjb25kc1xyXG4gICAgY3JlYXRlZEF0OiBkYXRhPy5jcmVhdGVkQXQudG9NaWxsaXMoKSB8fCAwLFxyXG4gICAgdXBkYXRlZEF0OiBkYXRhPy51cGRhdGVkQXQudG9NaWxsaXMoKSB8fCAwLFxyXG4gIH07XHJcbn0iLCJpbXBvcnQgJ0BmaXJlYmFzZS9mdW5jdGlvbnMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==