angular.module('app', ['ngResource']);

angular.module('app').controller('userCtrl', function($scope, $resource) {
    $scope.users = $resource('/api/users').query();
});