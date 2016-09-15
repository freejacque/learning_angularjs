app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Jacki\'s Angular App';
  $scope.promo = 'promo text';
  $scope.product =  {
                      name: 'The Books of Trees',
                      price: 19,
                      pubdate: new Date('2014', '03', '08')
                    };
}]);
