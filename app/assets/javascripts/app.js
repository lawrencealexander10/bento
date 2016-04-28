
var app = angular.module('bento', []);

app.controller('ProductController', function($scope, $http) {
	
    $scope.name = 'yaki'
    $scope.prep = '10m';
    $scope.cook = '15m';
    $scope.feeds = 'four';
    $scope.price = 16;
    $scope.cal = 455;
    $scope.image = 'https://bento-io-ireland.s3.amazonaws.com/attachment/5/IMG_3605.JPG';

	$scope.myFunction = function(permalink){
	    $http.get('/product/'+ permalink.currentTarget.id +'.json')
	    .then(function(response) {
	        $scope.name = response.data.product.name;
	        $scope.price = response.data.product.price;
	        $scope.image = permalink.target.currentSrc;
	        for(var item in response.data.attributes){ $scope[response.data.attributes[item].key] = response.data.attributes[item].value}
	        // console.dir(permalink);
	    });
	}
});
