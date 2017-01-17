/**
 * Created by sravaninuti on 1/15/17.
 */
(function() {
    'use strict';

    angular.module('IIOT.header').controller('HeaderController',HeaderControllerFn);

    HeaderControllerFn.$inject = ['$rootScope'];
    function HeaderControllerFn($rootScope) {
        var headerVm = this;
        headerVm.filterTag = false;

        $rootScope.$on('date selected', function(e,data) {
            headerVm.filterTag = false;
        });
    }
})();