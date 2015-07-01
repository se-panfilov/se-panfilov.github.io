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
    'anim-in-out',
    'ui.router',
    'ui.bootstrap'
])

    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    })
;
