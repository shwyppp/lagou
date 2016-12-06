;(function() {
	'use strict';
	angular.module('renren').controller('jianliController', ['$scope',
	  function($scope) {
	  	// jason个人信息
	  	$scope.ul_show = true;
	    $scope.jason = function(){
	    	$scope.ul_show = !$scope.ul_show;
	    };
	}]);

})();