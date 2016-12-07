angular.module('sp-io.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('contacts_list/contacts_list.html','<section class=contacts aria-label="Contact list"><ul class=contacts_list><li class=contact_item ng-repeat="contact in ::contacts track by $index"><div class=contact_item_text><div type=button ng-href={{::contact.link}} aria-label={{::contact.title}}><i class=contact_icon ng-class=::contact.icon></i>&nbsp;<a class=contact_link ng-href={{::contact.link}} ng-bind=::contact.title></a></div></div></li></ul></section>');}]);
'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.templates',
    'sp-io.contacts_list',

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

angular.module('sp-io.index.page', [])

    .controller('IndexPageCtrl', ['$scope', function ($scope) {
        //
    }])


;