//---------------------------------------------------------
// ホワイトリストを作成することによりtrustAsを使わなくて済む
// self 現在のドメイン
//---------------------------------------------------------

angular.module('myApp', [])
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.wings.msn.to/**'
    ]);
  }])
  .controller('MyController', ['$scope', function($scope) {
    $scope.url = 'http://www.wings.msn.to/';
  }]);