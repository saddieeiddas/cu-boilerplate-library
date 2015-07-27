cu-lib-example
==============

> example CU library structure

===

Installation
------------

Clone the Repository and run:

```
npm install
```

===


Structure
---------

The structure of this example library is as follows:

---

#### src

This is the directory where all the library code is located.


#### src/library.js

This is the entry point for the library. It determines what gets imported and exported by this library.
The example `library.js` is exporting everything from `component-name/component-name.js`


#### src/library.d.ts

This is the TypeScript definition file for the library. This is also referenced in `package.json` under the `typescript`
property (note this can point to the `lib/library.d.ts` as it will be copied there during a build.


#### src/bundle.js

This is the entry point for the web bundle of the library. This is where things should be bound to the `window` object
so that standard ui modules can just include this script and get access to the library.


---

#### bundle

This is where the `browserify` and `babelify` bundles will be located. They are built from `src/bundle.js`.
These are also the files which should be included as scripts in basic ui modules which don't use gulp or typescript.


#### lib

This is where the `es5` compiled `src` will be located. It is also the main entry point for `package.json`.
This is what would be imported by `TypeScript` or another library which requires this one.

#### example

This is a testing/development/playground area which can be used to help develop the module and test things work.


===

Gulp Configuration
------------------

There is a `config` variable in `gulpfile.js` which can be used to easily configure the build process and file names .


Developing
----------

To develop there are a number of `gulp` tasks configured:


#### gulp server

This will create a connect server, you can then access this server via at http://localhost:9000/example/
This will serve the `example/index.html` file which can be used to test/develop the library.


#### gulp watch

This will watch the src directory and compile the development bundle file on changes.
This paired with the server and `example/index.html` should allow for easy testing/development.


#### gulp build

This will build the `bundle` and `lib` directories based on the `src` contents.


#### gulp lint

This will lint the `src` directory using `eslint`.
