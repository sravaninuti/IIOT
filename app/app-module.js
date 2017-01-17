/**
 * Created by sravaninuti on 1/11/17.
 */
(function() {
    'use strict';

    angular.module('IIOT', ['ui.router', 'IIOT.header', 'IIOT.filter', 'IIOT.tiles', 'IIOT.article']);

    angular.module('IIOT').config(AppConfig);

    function AppConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home/articles');

        $stateProvider
            .state('home', {
                url: '/home',
                abstract: true
            });
    }

})();