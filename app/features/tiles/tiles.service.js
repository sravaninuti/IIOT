/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    'use strict';

    angular.module('IIOT.tiles').service('getTilesData', getTilesDataFn);

    getTilesDataFn.$inject = ['$http','$q'];
    function getTilesDataFn($http,$q) {
        var self = this;

        self.getData = function(dateId) {
            var defer = $q.defer();

            var params= {
                token : 'c70b9f7c-5c13-4f7d-93de-b8618ac67f27',
                format: 'json',
                q: 'IIOT language:(english)',
                ts: dateId
            };


            $http.get('https://webhose.io/search', {
                params: params
            })
                .then(function(success) {
                    return defer.resolve(success.data);
                }, function(error) {
                    return defer.reject(error.data);
                });
            return defer.promise;
        }
    }

})();

