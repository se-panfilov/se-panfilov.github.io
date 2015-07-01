'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.header',
    'sp-io.templates',

    //pages
    'sp-io.pages.about',

    //external libs
    'angular-loading-bar',
    'ngAnimate',
    'anim-in-out',
    'ui.router',
    'ui.bootstrap'
])

    .config(function ($urlRouterProvider) {
        //TODO (S.Panfilov) fix this
        //$urlRouterProvider.otherwise('/macros');
    })
;
