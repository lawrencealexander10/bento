(function(){
var app = angular.module('bento', []);

app.controller('ProductController', function($scope, $http) {
	$scope.myFunction = function(permalink){
	    $http.get('/product/'+ permalink.currentTarget.id +'.json')
	    .then(function(response) {
	        $scope.name = response.data.product.name;
	        $scope.price = response.data.product.price;
	        for(var item in response.data.attributes){ $scope[response.data.attributes[item].key] = response.data.attributes[item].value}
	        // console.dir($scope);
	    });
	}

	// $scope.tab = 1;

 //        $scope.setTab = function (tabId) {
 //            $scope.tab = tabId;
 //            console.log('hey');
 //        };

 //        $scope.isSet = function (tabId) {
 //            return $scope.tab === tabId;
 //            console.log('to');
 //        };

});

    app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
            console.log('hey');
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
            console.log('to');
        };
    });

})();