//------------------------------------------------
// trustAsHtml
//------------------------------------------------
angular
.module('myApp',[])
.controller('controllerA',['$scope','$sce',function($scope,$sce){
	$scope.m_x = $sce.trustAsHtml('<button>aaaaa</button>');
}]);
