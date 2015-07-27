'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.header',
    'sp-io.templates',
    'sp-io.contacts_list',
    'sp-io.avatar',

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

angular.module('sp-io.avatar', [])

    .directive('avatar', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'landing/avatar/avatar.html',
            link: function (scope) {
                //
            }
        };
    })
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
                    {icon: 'fa fa-stack-overflow', link: 'http://stackoverflow.com/users/930170/sergey-panfilov', title: 'Stack Overflow'},
                    {icon: 'fa fa-facebook', link: 'https://www.facebook.com/sergey.panfilov.75', title: 'Facebook'},
                    {icon: 'fa fa-vk', link: 'https://vk.com/se_panfilov', title: 'VK'},
                    {icon: 'fa fa-linkedin', link: 'https://ru.linkedin.com/in/sepanfilov', title: 'LinkedIn'}
                ];
                
            }
        };
    })
;
angular.module("sp-io.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("landing/landing.html","<div class=landing_page><div layout=row layout-align=\"center center\" class=label_photo><avatar></avatar></div><main-header></main-header><div class=page_content><div class=container><h3>Hi there. It\'s still under construction yet.</h3><contacts-list></contacts-list></div></div></div>");
$templateCache.put("landing/avatar/avatar.html","<div class=avatar><h1 title=\"Sergey Panfilov\" class=a_label>S.P.</h1><span class=a_description>No avatar yet</span></div>");
$templateCache.put("landing/contacts_list/contacts_list.html","<section class=contacts><ul class=contacts_list><li ng-repeat=\"contact in ::contacts track by $index\" class=contact_item><md-button type=button ng-href={{::contact.link}} aria-label={{::contact.title}} class=md-fab><i ng-class=::contact.icon class=contact_icon></i></md-button>&nbsp;<a ng-href={{::contact.link}} ng-bind=::contact.title class=contact_link></a></li></ul></section>");
$templateCache.put("header/header.html","<nav class=header_bar><div class=container><ul><li><a href=\"\">Sergey Panfilov</a></li></ul></div></nav>");}]);