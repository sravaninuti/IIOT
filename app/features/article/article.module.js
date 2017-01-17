/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    'use strict';
    angular.module('IIOT.article',[])

        .config(ArticleConfig);

    function ArticleConfig($stateProvider) {
        $stateProvider
            .state('home.article',{
                url: '/article',
                views : {
                    '@' : {
                        templateUrl: 'features/article/article.html',
                        controller: 'ArticleController',
                        controllerAs: 'articleVm'
                    }
                }
            });
    }


})();