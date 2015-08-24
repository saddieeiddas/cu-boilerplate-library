/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../tsd/tsd.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BoilerplateLibrary = (function () {
    function BoilerplateLibrary() {
        _classCallCheck(this, BoilerplateLibrary);
    }

    _createClass(BoilerplateLibrary, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('sayHello');
        }
    }], [{
        key: 'staticSayHello',
        value: function staticSayHello() {
            console.log('staticSayHello');
        }
    }]);

    return BoilerplateLibrary;
})();

exports.BoilerplateLibrary = BoilerplateLibrary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4udHMiXSwibmFtZXMiOlsiQm9pbGVycGxhdGVMaWJyYXJ5IiwiQm9pbGVycGxhdGVMaWJyYXJ5LnNheUhlbGxvIiwiQm9pbGVycGxhdGVMaWJyYXJ5LnN0YXRpY1NheUhlbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBUUEsa0JBQUE7YUFBQSxrQkFBQTs4QkFBQSxrQkFBQTs7O2lCQUFBLGtCQUFBOztlQUlVQSxvQkFBQUE7QUFDTkMsbUJBQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1NBQ3pCQTs7O2VBTG9CRCwwQkFBQUE7QUFDbkJFLG1CQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1NBQy9CQTs7O1dBSEgsa0JBQUEiLCJmaWxlIjoidHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90c2QvdHNkLmQudHNcIiAvPlxuXG5leHBvcnQgY2xhc3MgQm9pbGVycGxhdGVMaWJyYXJ5IHtcbiAgc3RhdGljIHN0YXRpY1NheUhlbGxvKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGF0aWNTYXlIZWxsbycpO1xuICB9XG4gIHNheUhlbGxvKCkge1xuICAgIGNvbnNvbGUubG9nKCdzYXlIZWxsbycpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9