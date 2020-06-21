//------------------------------------------------
// 初期化時はAngularJS式{{}}でなくng-bindを使う
//------------------------------------------------
angular
.module('myApp',['ngSanitize'])
.controller('controllerA',['$scope', function($scope){
	$scope.m_x = '<a href="http://www.yahoo.co.jp">yahoo</a>';
}]);
