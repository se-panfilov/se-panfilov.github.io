'use strict';

angular.module('sp-io.pages.landing', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider
            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.html',
                controller: 'LandingPageCtrl'
            })
        ;
    })

    .controller('LandingPageCtrl', function () {

        console.log('Landing page');


    })


;