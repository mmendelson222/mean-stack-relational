//Demo service used for demo REST endpoint
angular.module('mean.demo').factory("Demo", ['$resource', function($resource) {
    return $resource('demo', {
    });
}]);