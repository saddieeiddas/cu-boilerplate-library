/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

module.exports = {
  buildType: 'library',
  jsPaths: ['src/js/**/*.js', 'src/js/**/*.jsx'],
  stylePaths: ['src/style/**/*.styl'],
  bundleDir: 'dist/bundle',
  libDir: 'dist/lib',
  cssDir: 'dist/css',
  libraryName: 'cu-ui-boilerplate-library',
  libraryFile: 'src/js/library.js',
  definitionFile: 'src/js/library.d.ts',
  bundleFile: 'src/js/bundle.js',
  serverPort: 9000
};
