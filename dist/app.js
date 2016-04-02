angular.module("sp-io.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("contacts_list/contacts_list.html","<section aria-label=\"Contact list\" class=\"contacts\"><ul flex=\"\" layout-gt-md=\"row\" layout-md=\"col\" layout-margin=\"layout-margin\" layout-fill=\"layout-fill\" layout-padding=\"layout-padding\" layout-wrap=\"layout-wrap\" class=\"contacts_list\"><li flex=\"30\" ng-repeat=\"contact in ::contacts track by $index\" class=\"contact_item\"><div class=\"contact_item_text\"><md-button type=\"button\" ng-href=\"{{::contact.link}}\" aria-label=\"{{::contact.title}}\" class=\"md-fab md-primary\"><i ng-class=\"::contact.icon\" class=\"contact_icon\"></i><!--i.material-icons.md-48 face--></md-button>&nbsp;<a ng-href=\"{{::contact.link}}\" ng-bind=\"::contact.title\" class=\"contact_link\"></a></div></li></ul></section>");
$templateCache.put("avatar/avatar.html","<div class=\"avatar\"><h1 title=\"Sergey Panfilov\" class=\"a_label\">S.P.</h1><span class=\"a_description\">No avatar yet</span></div>");}]);
'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.templates',
    'sp-io.contacts_list',
    'sp-io.avatar',

    'sp-io.index.page',

    //external libs
    'ngAnimate',
    'ngMaterial'
])

;

'use strict';

angular.module('sp-io.contacts_list', [])

    .directive('contactsList', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'contacts_list/contacts_list.html',
            link: function (scope) {

                scope.contacts = [
                    {icon: 'fa fa-envelope', link: 'mailto:se-panfilov@ya.ru', title: 'se-panfilov@ya.ru'} ,
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
'use strict';

angular.module('sp-io.avatar', [])

    .directive('avatar', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'avatar/avatar.html',
            link: function (scope) {
                //
            }
        };
    })
;
'use strict';

angular.module('sp-io.index.page', [])

    .controller('IndexPageCtrl', ['$scope', function ($scope) {
        //
    }])


;