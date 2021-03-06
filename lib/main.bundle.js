/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _main = require('./main');

var library = _interopRequireWildcard(_main);

// bind library to window
window.BoilerplateLibrary = library.BoilerplateLibrary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4uYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztvQkFNeUIsUUFBUTs7SUFBckIsT0FBTzs7O0FBV25CLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMiLCJmaWxlIjoidHMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBsaWJyYXJ5IGZyb20gJy4vbWFpbic7XG5cbi8vIGludGVyZmFjZSB0byBhbGxvdyB1cyB0byBiaW5kIGxpYnJhcnkgdG8gd2luZG93XG5pbnRlcmZhY2UgV2luZG93SW50ZXJmYWNlIGV4dGVuZHMgV2luZG93IHtcbiAgQm9pbGVycGxhdGVMaWJyYXJ5OiBhbnk7XG59XG5cbi8vIGRlY2xhcmUgd2luZG93IGltcGxlbWVudHMgV2luZG93SW50ZXJmYWNlXG5kZWNsYXJlIHZhciB3aW5kb3c6IFdpbmRvd0ludGVyZmFjZTtcblxuLy8gYmluZCBsaWJyYXJ5IHRvIHdpbmRvd1xud2luZG93LkJvaWxlcnBsYXRlTGlicmFyeSA9IGxpYnJhcnkuQm9pbGVycGxhdGVMaWJyYXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==