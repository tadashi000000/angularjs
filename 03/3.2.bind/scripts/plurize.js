angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.favs = [
			'aaa',
			'bbb',
			'ccc',
			'ddd',
			'eee'
		];
	}]);

