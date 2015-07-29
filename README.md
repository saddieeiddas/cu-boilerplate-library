cu-ui-boilerplate-library
=========================

> example CU-UI library structure

---

Installation
------------

Clone the Repository and run:

```
npm install
```

---


Structure
---------

The structure of this example library is as follows:

#### src

This is the directory where all the javascript and stylus is located.
This will build to the dist folder via gulp.


#### src/js/library.js

This is the entry point for the library. It determines what gets imported and exported by this library.
The example `library.js` is exporting `boilerplate-module/boilerplate-module.js`


#### src/js/library.d.ts

This is the TypeScript definition file for the library. This is also referenced in `package.json` under the `typescript`
property (note this can point to the `dist/lib/library.d.ts` as it will be copied there during a build.


#### src/js/bundle.js

This is the entry point for the web bundle of the library. This is where things should be bound to the `window` object
so that standard ui modules can just include this script and get access to the library.


---

#### dist/bundle

This is where the `browserify` and `babelify` bundles will be located. They are built from `src/bundle.js`.
These are also the files which should be included as scripts in basic ui modules which don't use gulp or typescript.

#### dist/lib

This is where the `es5` compiled `src` will be located. It is also the main entry point for `package.json`.
This is what would be imported by `TypeScript` or another library which requires this one.

#### dist/css

This is where the `styl` is compiled to from `src/style`

#### test

This is a testing/development/playground area which can be used to help develop the module and test things work.
Would potentially change this to a testing framework, so as things can be automated.


---

Developing
----------

The build process is provided by [cu-ui-build-tools](https://github.com/saddieeiddas/cu-ui-build-tools#library-builder)

The build can be configured in `cu-build.config.js`

You can view the gulp tasks here https://github.com/saddieeiddas/cu-ui-build-tools#library-builder
