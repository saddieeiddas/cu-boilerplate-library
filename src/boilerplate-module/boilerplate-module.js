/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export class BoilerplateModule {
  constructor() {

  }
  sayHello() {
    console.log('sayHello from cu-ui-boilerplate-library');
  }
  static staticSayHello() {
    console.log('staticSayHello from cu-ui-boilerplate-library');
  }
}
