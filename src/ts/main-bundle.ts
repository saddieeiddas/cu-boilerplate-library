/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import library = require('./main');

interface LibraryWindow extends Window {
    BoilerplateLibrary: any;
}

declare var window: LibraryWindow;

window.BoilerplateLibrary = library.BoilerplateLibrary;
