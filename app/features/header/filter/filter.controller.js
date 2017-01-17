/**
 * Created by sravaninuti on 1/15/17.
 */
(function() {
    angular.module('IIOT.filter').controller('FilterController', FilterControllerFn);

    FilterControllerFn.$inject = ['$rootScope','$stateParams'];
    function FilterControllerFn($rootScope,$stateParams) {
        var filterVm = this;

        filterVm.selectedDate = $stateParams.epoch;
        filterVm.dates = getDates();

        //methods
        filterVm.sendDate = sendDate;


        function sendDate(date) {
            filterVm.selectedDate = date;
            $rootScope.$emit('date selected', date);
        }


        function getDates() {
            var oneday = 24 * 60 * 60 * 1000;
            var arraytag1 = 0, arraytag2 = 1, day2;
            var dateArray = [];

            var day1 = new Date();

            dateArray[0] = {
                epoch: [day1.getTime()]
            };

            for (var i = 1; i < 30; i++) {
                day2 = new Date(day1.getTime() - oneday);
                if (day1.getMonth() == day2.getMonth()) {
                    dateArray[arraytag1].epoch[arraytag2] = day2.getTime();
                    arraytag2 = arraytag2 + 1;
                } else {
                    arraytag1 = arraytag1 + 1;
                    arraytag2 = 1;
                    dateArray[arraytag1] = {
                        epoch: [day2.getTime()]
                    };
                }
                day1 = day2;
            }
            return dateArray;
        }


    }
})();
