'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.header',
    'sp-io.templates',

    //pages
    'sp-io.pages.landing',

    //external libs
    'angular-loading-bar',
    'ngAnimate',
    'ngMaterial',
    'ui.router'
])

    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    })
;
