//-----------------------------------------------------
// ng-strict-di(配列アノテーション強制→引数リスト記法禁止)
// controller('myController', function($scope){}
// を
// controller('myController', ['$scope', function($scope){}]
// とすればエラー消える
//-----------------------------------------------------
angular
.module('myApp',[])
.controller('myController', function($scope){
	$scope.m_x='hello';
});