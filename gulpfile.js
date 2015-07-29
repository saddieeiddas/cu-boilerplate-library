'use strict';

var gulp = require('gulp');

var buildConfig = require('./build-config.js');

require('cu-ui-build-tools').library(gulp, buildConfig);
