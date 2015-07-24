'use strict';

angular.module('sp-io.pages.landing', [
    'ui.router'
])

    .config(function ($stateProvider) {
        //$mdIconProvider.iconSet('avatar', 'icons/avatar-icons.svg', 128);

        //'#673AB7',
        //    '#EDE7F6',
        //    '#D1C4E9',
        //    '#B39DDB',
        //    '#9575CD',
        //    '#7E57C2',
        //    '#673AB7',
        //    '#5E35B1',
        //    '#512DA8',
        //    '#4527A0',
        //    '#311B92'

        $stateProvider
            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.html',
                controller: 'LandingPageCtrl'
            })
        ;
    })

    .controller('LandingPageCtrl', function ($scope) {

        $scope.skills = [
            { title: "JS", name: "JavaScript", bgClass: 'red'},
            { title: "ng", name: "Angularjs", bgClass: 'blue'}
        ];
    })


;