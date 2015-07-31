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