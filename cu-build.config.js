/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

module.exports = {
  buildType: 'library',
  srcGlob: ['src/**/*.js', 'src/**/*.jsx'],
  bundleDir: 'bundle',
  libDir: 'lib',
  libraryName: 'cu-lib-example',
  libraryFile: 'src/library.js',
  definitionFile: 'src/library.d.ts',
  bundleFile: 'src/bundle.js',
  serverPort: 9000
};
