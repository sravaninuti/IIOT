/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    angular.module('IIOT.tiles',[])

        .config(TilesConfig);

    function TilesConfig($stateProvider) {
        $stateProvider
            .state('home.articles', {
                url: '/articles?epoch',
                views: {
                    '@' : {
                        templateUrl: 'features/tiles/tiles.html',
                        controller: 'TilesController',
                        controllerAs: 'tilesVm'
                    }
                }
            });
    }
})();