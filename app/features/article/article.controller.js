/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    'use strict';

    angular.module('IIOT.article').controller('ArticleController',ArticleControllerFn);

    ArticleControllerFn.$inject= ['articleDataService'];
    function ArticleControllerFn(articleDataService) {
        var articleVm = this;

        articleVm.article = articleDataService.getData();
    }
})();