'use strict';

angular.module('sp-io', [
    //modules
    'app.header',
    'app.templates',

    //pages
    'app.pages.about',

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
