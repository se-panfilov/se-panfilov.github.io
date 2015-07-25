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