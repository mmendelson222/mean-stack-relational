angular.module('mean.auth').controller('socialAuth', ['$scope', 'Global','$state', 'FacebookAuth','TwitterAuth', 'GoogleAuth', function ($scope, Global, $state, FacebookAuth, TwitterAuth, GoogleAuth) {
    $scope.global = Global;

    //not sure why I'm finding this in two places.
    //perhaps header.js is not used on some pages.
    $scope.menu = [{
        "title": "Articles",
        "state": "articles"
    }, {
        "title": "Create New Article",
        "state": "createArticle"
    }, {
        "title": "Run the demo",
        "state": "runDemo"
    }];

    $scope.isCollapsed = false;

    $scope.fbAuth = function(){
        // implement your Facebook login strategy here.
        // FacebookAuth.get();
    }
    $scope.twitterAuth = function(){
        // implement your Twitter login strategy here.
        // TwitterAuth.get();
    }
    $scope.googleAuth = function(){
        // implement your Google login strategy here.
        // GoogleAuth.get();
    }


}]);