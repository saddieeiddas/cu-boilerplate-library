(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BoilerplateModule = (function () {
  function BoilerplateModule() {
    _classCallCheck(this, BoilerplateModule);
  }

  _createClass(BoilerplateModule, [{
    key: 'sayHello',
    value: function sayHello() {
      console.log('sayHello from cu-ui-boilerplate-library');
    }
  }], [{
    key: 'staticSayHello',
    value: function staticSayHello() {
      console.log('staticSayHello from cu-ui-boilerplate-library');
    }
  }]);

  return BoilerplateModule;
})();

exports.BoilerplateModule = BoilerplateModule;

},{}],2:[function(require,module,exports){
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _library = require('./library');

var library = _interopRequireWildcard(_library);

window.BoilerplateLibrary = library;

},{"./library":3}],3:[function(require,module,exports){
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

var _boilerplateModuleBoilerplateModule = require('./boilerplate-module/boilerplate-module');

module.exports = {
  BoilerplateModule: _boilerplateModuleBoilerplateModule.BoilerplateModule
};

},{"./boilerplate-module/boilerplate-module":1}]},{},[2])


//# sourceMappingURL=cu-ui-boilerplate-library.js.map