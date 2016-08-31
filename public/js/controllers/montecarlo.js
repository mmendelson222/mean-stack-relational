angular.module('mean.demo')
    .controller('MontecarloController', ['$scope', '$stateParams', 'Global', 'Montecarlo', '$state', function ($scope, $stateParams, Global, Montecarlo, $state) {
    $scope.global = Global;
        console.log("init montecarlo");
        $scope.content = "something.something";

    $scope.save = function() {
        console.log("running montecarlo ");
        var demo = new Montecarlo({
            content: this.content
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

        this.content = "";
    };


}]);