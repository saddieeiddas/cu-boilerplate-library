'use strict';

var gulp = require('gulp');

var buildConfig = require('./cu-build.js');

require('cu-ui-build-tools').library(gulp, buildConfig);
