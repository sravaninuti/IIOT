/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    'use strict';

    angular.module('IIOT.tiles').controller('TilesController',TilesControllerFn);

    TilesControllerFn.$inject = ['getTilesData','articleDataService','$state','$rootScope','$stateParams'];
    function TilesControllerFn(getTilesData, articleDataService, $state, $rootScope, $stateParams) {
        var tilesVm = this;


        tilesVm.setArticleData = setArticleData;

        $rootScope.$on('date selected', function(e,date) {
            // $stateParams.epoch = date;
            $state.go('home.articles', { epoch: date });
            // init();
        });

        init();

        function init() {
            var epoch = $stateParams.epoch || (Date.now() -  2*24*60*60*1000);

            getTilesData.getData(epoch)
                .then(function(data) {
                    tilesVm.data = data;
                }, function(error) {
                    console.log(error);
                });
        }

        function setArticleData(artData) {
            articleDataService.setData(artData);
            $state.go('home.article');
        }
    }

})();