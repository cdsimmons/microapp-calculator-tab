'use strict';

angular.module('calculator.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', function($scope) {
	$scope.people = 2;
	$scope.cost = 0;
	$scope.percentage = 0;
}]);