
var app = angular.module('bento', []);

app.controller('ProductController', function($scope, $http) {
	
    $scope.name = 'Yaki Linguine'
    $scope.prep = '20m';
    $scope.cook = '10m';
    $scope.feeds = '2';
    $scope.price = 16;
    $scope.cal = 235;
    // $scope.image = ;
    
	$scope.myFunction = function(permalink){
	    $http.get('/product/'+ permalink.currentTarget.id +'.json')
	    .then(function(response) {
	        $scope.name = response.data.product.name;
	        $scope.price = response.data.product.price;
	        $scope.image = permalink.target.currentSrc;
	        for(var item in response.data.attributes){ $scope[response.data.attributes[item].key] = response.data.attributes[item].value}
	        // console.dir($scope);
	    });
	}
});
