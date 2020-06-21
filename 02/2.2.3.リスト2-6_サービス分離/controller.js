//------------------------------------------------
// サービス
//------------------------------------------------
angular
.module('myApp',[])
.controller('myController',function($scope, XXXList){
	$scope.m_xxxlist = XXXList();
})
.value('XXXList', function(){
	return[
		{
			isbn: 'isbn001',
			title: 'title001',
			price: 100,
			publish: 'publish001',
			published: new Date(2015,0,7)
		},
		{
			isbn: 'isbn002',
			title: 'title002',
			price: 200,
			publish: 'publish002',
			published: new Date(2015,0,9)
		},
		{
			isbn: 'isbn003',
			title: 'title003',
			price: 300,
			publish: 'publish003',
			published: new Date(2015,0,10)
		}
	];
});
