'use strict';

angular.module('sp-io.index.page', [])

    .controller('IndexPageCtrl', function ($scope) {

        $scope.skills = [
            {title: "JS", name: "JavaScript", bgClass: 'red'},
            {title: "ng", name: "Angularjs", bgClass: 'blue'}
        ];
    })


;