'use strict';

angular.module('app.pages.analytics', [
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