var LunchCheck = angular.module('LunchCheck',[]);

function LunchCheckController($scope){

	$scope.somefunction = function(){
		if($scope.lunchMenu == '' || $scope.lunchMenu == undefined){
			$scope.order = 'please order something';
		}else{
			$scope.order = "Thank you for ordering "+ $scope.lunchMenu +".  Your order processing and we will reach as lunch ready.";
		}
	};
}

LunchCheckController.$inject = ['$scope'];
LunchCheck.controller('LunchCheckController', LunchCheckController);