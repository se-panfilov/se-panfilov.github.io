'use strict';

angular.module('sp-io', [
    //modules
    'sp-io.header',
    'sp-io.templates',

    //pages
    'sp-io.pages.about',

    //external libs
    'angular-loading-bar',
    'ngAnimate',
    'anim-in-out',
    'ui.router',
    'ui.bootstrap'
])

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');
    }])
;

'use strict';

angular.module('sp-io.pages.about', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html',
                controller: 'AboutPageCtrl'
            })
        ;
    }])

    .controller('AboutPageCtrl', ['$scope', function ($scope) {

        console.log('About page');


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
                    $scope.$state = $state;
                    $scope.isNavbarCollapsed = true;
                })();
            }
        };
    }])
;
angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<main-header></main-header><div class=\"page_content analytics_page\"><div class=container><h3>Аналитика</h3><div class=\"charts_toolbar margin_top_med\"><form id=charts_filter_form name=charts_filter_form ng-submit=getAnalytics()><div class=\"analytics_toolbar btn-group pull_right\"><button type=submit ng-disabled=\"filterParams.params.queries.length == 0 || filterParams.params.macros.length == 0\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i>&nbsp; Построить график</button><button type=button ng-click=filterParams.resetParams() class=\"btn btn-default\"><i class=\"fa fa-times\"></i></button><button type=button ng-click=filterParams.showSaveQueryModal() title=\"Сохранить запрос\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i>&nbsp; Сохранить</button><button type=button ng-click=filterParams.showLoadQueryModal() title=\"Загрузить запрос\" class=\"btn btn-default\"><i class=\"fa fa-arrow-up\"></i>&nbsp; Загрузить</button></div><div class=dates_inputs><div class=form-group><div class=\"input-group required\"><label for=start_date class=\"control-label input-group-addon\">Дата начала</label><input id=start_date type=text ng-model=filterParams.params.startDate datepicker-popup={{datePopups.dateFormat}} datepicker-options={{datePopups.dateOptions}} is-open=datePopups.isStartDatePopupOpened close-text=Закрыть clear-text=Очистить current-text=Сегодня ng-click=datePopups.openStartDatePopup($event) class=form-control><span class=input-group-btn><button type=button ng-click=datePopups.openStartDatePopup($event) class=\"btn btn-default\"><i class=\"fa fa-calendar\"></i></button></span></div></div><div class=form-group><div class=\"input-group required\"><label for=end_date class=\"control-label input-group-addon\">Дата окончания</label><input id=end_date type=text ng-model=filterParams.params.endDate datepicker-popup={{datePopups.dateFormat}} datepicker-options={{datePopups.dateOptions}} is-open=datePopups.isEndDatePopupOpened close-text=Закрыть clear-text=Очистить current-text=Сегодня ng-click=datePopups.openEndDatePopup($event) class=form-control><span class=input-group-btn><button type=button ng-click=datePopups.openEndDatePopup($event) class=\"btn btn-default\"><i class=\"fa fa-calendar\"></i></button></span></div></div></div><div class=\"queries_box margin_top_med controls required\"><label for=analytics_queries class=control-label>Запросы</label><tags-input id=analytics_queries ng-model=filterParams.params.queries max-tags=10 placeholder=\"Добавить запрос\" restrict-to-max-tags=restrict-to-max-tags></tags-input><div class=queries_count>Осталось запросов: &nbsp;<span ng-bind=filterParams.getQueriesLeftCount()></span></div></div><div class=\"macros_box margin_top_med controls required\"><label for=macros_select class=control-label>Сценарии</label><ui-select id=macros_select ng-model=filterParams.params.macros multiple=true theme=bootstrap><ui-select-match placeholder=Сценарии>{{$select.selected[$index].name}}</ui-select-match><ui-select-choices repeat=\"macros as macros in filterParams.dropdownMacrosList | filter: $select.search | orderBy: \'name\'\" refresh=filterParams.searchMacros($select.search)><div><div ng-bind-html=trustAsHtml(macros.name)></div></div></ui-select-choices></ui-select></div></form></div><div id=chartdiv class=margin_top_big></div><h4>Новости</h4><div class=\"feeds_container margin_top_big margin_bottom_big\"><div ng-show=\"FeedsFactory.feeds.length === 0\" class=feeds_placeholder>Нет данных</div><div infinite-scroll-disabled=\"FeedsFactory.feeds == 0\" infinite-scroll=feeds.loadNewFeedsPage() infinite-scroll-distance=0 class=feeds><div ng-repeat=\"feed in FeedsFactory.feeds\" class=feeds_list><h4 ng-bind=::feed.data.title></h4><i ng-show=::feed.is_duplicate class=\"is_duplicate margin_top_big\">Дубль</i><div ng-bind=::feed.data.description class=\"description margin_top_big\"></div><div class=\"feed_footer margin_top_big\"><span ng-show=::feed.published_at class=date>Опубликовано<strong ng-bind=::feed.published_at></strong>&nbsp; | &nbsp;</span><span ng-show=::feed.url class=feed_url><a ng-href={{::feed.url}} ng-bind=::feed.url class=url></a></span></div><hr></div></div></div></div></div>");
$templateCache.put("header/header.html","<div class=\"navbar navbar-inverse navbar-fixed-top pages_header\"><div class=navbar-inner><div class=container><button type=button ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\" class=navbar-toggle><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><div collapse=isNavbarCollapsed class=navbar-collapse><nav class=hidden-xs><div class=navbar-header><ul class=\"nav navbar-nav\"><li><a ui-sref=macros title=\"На главную\" class=navbar-brand>Avalanche</a></li></ul></div></nav><ul class=\"nav navbar-nav\"><li ng-class=\"{active: $state.includes(\'about\')}\"><a href=\"\" ui-sref=about ui-sref-opts=\"{reload: true}\">About</a></li></ul></div></div></div></div>");}]);