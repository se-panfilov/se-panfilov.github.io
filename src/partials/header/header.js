'use strict';

angular.module('sp-io.header', [])

    .directive('mainHeader', function ($window, $stateParams, $state) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'header/header.html',
            link: function (scope) {
                (function _init() {
                    $scope.$state = $state;
                    $scope.isNavbarCollapsed = true;
                })();
            }
        };
    })
;