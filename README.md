cu-boilerplate-library
======================

> Camelot Unchained UI - Boilerplate Library

Install
-------

Clone the Repository

```sh
git clone https://github.com/CUModSquad/cu-boilerplate-library.git
cd cu-boilerplate-library
```

Install Dependencies

```sh
npm install
gulp install
gulp build
```


Structure
---------

The structure is as follows:

**`src`**

This is where all the code goes.

**`src/ts/main.ts`**

This is the entry point for the library. It determines what gets imported and
exported by this library.

**`src/ts/main.bundle.ts`**

This is the entry point for the web bundle of the library. This is where things
should be bound to the `window` object so that standard ui modules can just
include this script and get access to the library.

**`src/sass/main.scss`**

This is the main stylesheet for the library.

**`lib`**

This is the compiled code that is published to `npm`.

**`dist`**

This is the bundled code that to be included in the published client.

**`test`**

This is a testing/development/playground area which can be used to help develop
the library and test things work. Will ideally contain unit tests.

Developing
----------

The build process is provided by [cu-build-tools][1]

The build can be configured in `cu-build.config.js`

You can view the gulp tasks [here][1]


[1]: https://github.com/CUModSquad/cu-build-tools#modulelibrary---builder
