'use strict';

angular.module('sp-io.pages.about', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html',
                controller: 'AboutPageCtrl'
            })
        ;
    })

    .controller('AboutPageCtrl', function ($scope) {

        console.log('About page');


    })


;