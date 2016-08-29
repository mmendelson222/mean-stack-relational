angular.module('mean.demo')
    .controller('DemoController', ['$scope', '$stateParams', 'Global', 'Demo', '$state', function ($scope, $stateParams, Global, Demo, $state) {
    $scope.global = Global;
        console.log("init democontroller");
        $scope.content = "default content";

    $scope.save = function() {
        console.log("running democontroller ");
        var demo = new Demo({
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