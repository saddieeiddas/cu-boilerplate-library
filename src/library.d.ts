/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

declare module 'cu-lib-example' {
  var libraryStatic: LibraryStatic;
  export = libraryStatic;
}

interface LibraryStatic {
  ComponentName: ComponentNameStatic;
}

interface ComponentName {
  sayHello():void;
}

interface ComponentNameStatic {
  new():ComponentName;
  staticSayHello() :void;
}
