angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', 'SignOut', '$state', function ($scope, Global, SignOut, $state) {
    $scope.global = Global;

    //not sure why I'm finding this in two places.  (also auth.js)
    //perhaps header.js is not used on some pages.
    $scope.menu = [{
        "title": "Articles",
        "state": "articles"
    }, {
        "title": "Create New Article",
        "state": "createArticle"
    },  {
        "title": "Run the demo",
        "state": "runDemo"
    }];
    
    $scope.isCollapsed = false;

    $scope.SignOut = function(){
        SignOut.get(function(response){
            if(response.status === 'success'){
                $scope.global = null;
                $state.go('home');
            }
        });
    }


}]);