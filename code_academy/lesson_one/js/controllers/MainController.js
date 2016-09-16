app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Jacki\'s Angular App';
  $scope.promo = 'promo text';
  $scope.products = [
                      {
                        name: 'The Book of Trees',
                        price: 19,
                        pubdate: new Date('2014', '03', '08'),
                        cover: 'img/the-book-of-trees.jpg',
                        likes: 0
                      },
                      {
                        name: 'Program or be Programmed',
                        price: 8,
                        pubdate: new Date('2013', '08', '01'),
                        cover: 'img/program-or-be-programmed.jpg',
                        likes: 0
                      },
                      {
                        name: 'Pride and Prejudice',
                        price: 7,
                        pubdate: new Date('1813', '00', '28'),
                        cover: 'http://theoverstuffedbookcase.com/wp-content/uploads/2015/09/0a7c2b7c19db0125c74164c6d0909d53.jpg',
                        likes: 0
                      },
                      {
                        name: 'Boy, Snow, Bird',
                        price: 10,
                        pubdate: new Date('2014', '02', '16'),
                        cover: 'http://melissastacy.com/wp-content/uploads/2014/08/Good-Cover.jpg',
                        likes: 0
                      }
                    ]
}]);
