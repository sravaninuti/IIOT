/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    angular.module('IIOT.filter').directive('dirFilter', dirFilterFn);

    function dirFilterFn() {
        return {
            scope: {},
            templateUrl: 'features/header/filter/filter.html',
            controller: 'FilterController',
            controllerAs: 'filterVm'
        };
    }
})();