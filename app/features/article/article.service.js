/**
 * Created by sravaninuti on 1/16/17.
 */
(function() {
    'use strict';

    angular.module('IIOT.article').service('articleDataService',articleDataServiceFn);

    function articleDataServiceFn() {

        var self = this;

        self.setData = setData;
        self.getData = getData;


        function setData(article) {
            self.article = article;
        }

        function getData() {
            return self.article;
        }
    }
})();