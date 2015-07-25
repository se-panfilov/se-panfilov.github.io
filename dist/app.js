'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.header',
    'sp-io.templates',

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
angular.module("sp-io.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("landing/landing.html","<div class=landing_page><div layout=row layout-align=\"center center\" class=label_photo><div class=avatar></div></div><main-header></main-header><div class=page_content><div class=container><h3>Hi there. It\'s still under construction yet.</h3><section class=contacts><ul class=contacts_list><li><i class=\"fa fa-envelope\"></i>&nbsp;<a href=mailto:se-panfilov@ya.ru>se-panfilov@ya.ru</a></li><li><i class=\"fa fa-map-marker\"></i>&nbsp;<a href=\"https://maps.google.com/maps?q=Russia,+Irkutsk\">Russia, Irkutsk</a></li><li><i class=\"fa fa-github\"></i>&nbsp;<a href=https://github.com/se-panfilov>GitHub</a></li><li><i class=\"fa fa-stack-overflow\"></i>&nbsp;<a href=http://stackoverflow.com/users/930170/sergey-panfilov>StackOverFlow</a></li><li><i class=\"fa fa-facebook\"></i>&nbsp;<a href=https://www.facebook.com/sergey.panfilov.75>Facebook</a></li><li><i class=\"fa fa-vk\"></i>&nbsp;<a href=https://vk.com/se_panfilov>VK</a></li><li><i class=\"fa fa-linkedin\"></i>&nbsp;<a href=https://ru.linkedin.com/in/sepanfilov>LinkedIn</a></li></ul></section></div></div></div>");
$templateCache.put("header/header.html","<nav class=header_bar><div class=container><ul><li><a href=\"\">Sergey Panfilov</a></li></ul></div></nav>");}]);