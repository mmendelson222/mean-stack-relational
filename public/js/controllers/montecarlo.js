angular.module('mean.demo')
    .controller('MontecarloController', ['$scope', '$stateParams', 'Global', 'Montecarlo', '$state', function ($scope, $stateParams, Global, Montecarlo, $state) {
    $scope.global = Global;
        console.log("init montecarlo");
        $scope.inputs = {
            script: "service-run.sh",
            bucket: "fanniehpcpoc",
            configkey: "nick/benchmark_40.cfg"
        };

    $scope.save = function() {
        console.log("running montecarlo ");
        $scope.reqTime = new Date();
        var demo = new Montecarlo({
            script: this.inputs.script,
            bucket: this.inputs.bucket,
            configkey: this.inputs.configkey
        });

        demo.$save(function(response) {
            console.log($scope);
            if (response.error) {
                console.log(response.error);
                $scope.result = response;
            } else {
                console.log(response);
                $scope.result = response;
            }
        });
    };


}]);
