//------------------------------------------------
// モジュールの依存関係
//------------------------------------------------
angular
.module('myApp.modSub',['ngMessages','ngCookies'])
.controller('controllerSub',function($scope){
	$scope.m_msg = 'helloSub';
});

angular
.module('myApp.modMain',['myApp.modSub'])
.controller('controllerMain',function($scope){
	$scope.m_msg = 'helloMain';
});
