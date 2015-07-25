'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.header',
    'sp-io.templates',
    'sp-io.contacts_list',

    //pages
    'sp-io.pages.landing',

    //external libs
    'ngAnimate',
    'ngMaterial',
    'ui.router'
])

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    }])
;

'use strict';

angular.module('sp-io.pages.landing', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {
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
    }])

    .controller('LandingPageCtrl', ['$scope', function ($scope) {



        $scope.skills = [
            {title: "JS", name: "JavaScript", bgClass: 'red'},
            {title: "ng", name: "Angularjs", bgClass: 'blue'}
        ];
    }])


;
'use strict';

angular.module('sp-io.header', [])

    .directive('mainHeader', ['$window', '$stateParams', '$state', function ($window, $stateParams, $state) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'header/header.html',
            link: function (scope) {
                (function _init() {
                    scope.$state = $state;
                    scope.isNavbarCollapsed = true;
                })();
            }
        };
    }])
;
'use strict';

angular.module('sp-io.contacts_list', [])

    .directive('contactsList', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'landing/contacts_list/contacts_list.html',
            link: function (scope) {

                scope.contacts = [
                    {icon: 'fa fa-envelope', link: 'mailto:se-panfilov@ya.ru', title: 'se-panfilov@ya.ru'} ,
                    {icon: 'fa fa-map-marker', link: 'https://maps.google.com/maps?q=Russia,+Irkutsk', title: 'Russia, Irkutsk'},
                    {icon: 'fa fa-github', link: 'https://github.com/se-panfilov', title: 'GitHub'},
                    {icon: 'fa fa-stack-overflow', link: 'http://stackoverflow.com/users/930170/sergey-panfilov', title: 'StackOverFlow'},
                    {icon: 'fa fa-facebook', link: 'https://www.facebook.com/sergey.panfilov.75', title: 'Facebook'},
                    {icon: 'fa fa-vk', link: 'https://vk.com/se_panfilov', title: 'VK'},
                    {icon: 'fa fa-linkedin', link: 'https://ru.linkedin.com/in/sepanfilov', title: 'linkedin'}
                ];
                
            }
        };
    })
;
angular.module("sp-io.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("landing/landing.html","<div class=landing_page><div layout=row layout-align=\"center center\" class=label_photo><div class=avatar></div></div><main-header></main-header><div class=page_content><div class=container><h3>Hi there. It\'s still under construction yet.</h3><contacts-list></contacts-list></div></div></div>");
$templateCache.put("landing/contacts_list/contacts_list.html","<section class=contacts><ul ng-repeat=\"contact in ::contacts track by $index\" class=contacts_list><li class=contact_item><i ng-class=::contact.icon></i>&nbsp;<a href=::contact.link ng-bind=::contact.title></a></li></ul></section>");
$templateCache.put("header/header.html","<nav class=header_bar><div class=container><ul><li><a href=\"\">Sergey Panfilov</a></li></ul></div></nav>");}]);