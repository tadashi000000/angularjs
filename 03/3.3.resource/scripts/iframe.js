angular.module('myApp', [])
  .controller('MyController', ['$scope', function($scope) {
	// iframeに外部サイトは指定できいないのでこれはエラーになる
	$scope.url = 'http://www.wings.msn.to/';
  }]);