angular.module('myApp', [])
	.controller('MyController', ['$scope', '$sce', function($scope, $sce) {

		// trustAsメソッドによりiframeで外部サイトを使用できる
		$scope.url = $sce.trustAs($sce.RESOURCE_URL, 'http://www.wings.msn.to/');
		// $scope.url = $sce.trustAsResourceUrl('http://www.wings.msn.to/');

	}]);