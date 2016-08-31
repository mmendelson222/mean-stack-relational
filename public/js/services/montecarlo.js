//Demo service used for demo REST endpoint
angular.module('mean.demo').factory("Montecarlo", ['$resource', function($resource) {
    return $resource('montecarlo', {
    });
}]);