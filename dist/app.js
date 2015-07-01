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

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    }])
;

'use strict';

angular.module('sp-io.pages.landing', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.html',
                controller: 'LandingPageCtrl'
            })
        ;
    }])

    .controller('LandingPageCtrl', function () {

        console.log('Landing page');


    })


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
angular.module("sp-io.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("landing/landing.html","<main-header></main-header><div class=\"page_content about_page\"><div class=container><h3>Under construction</h3></div></div>");
$templateCache.put("header/header.html","<div class=\"navbar pages_header\"><div class=navbar-inner><div class=container><button type=button ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\" class=navbar-toggle><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><div collapse=isNavbarCollapsed class=navbar-collapse><nav class=hidden-xs><div class=navbar-header><ul class=\"nav navbar-nav\"><li><a ui-sref=macros title=\"На главную\" class=navbar-brand>Sergey Panfilov</a></li></ul></div></nav></div></div></div></div>");}]);