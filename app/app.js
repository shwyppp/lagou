/*
* @Author: 虚竹
* @Date:   2016-09-26 13:30:48
* @Last Modified by:   饶鹏飞
* @Last Modified time: 2016-10-12 15:41:58
*/



;(function() {
	'use strict';

  /**
   * Definition of the main app module and its dependencies
   */
    var renren = angular.module('renren', ['ngRoute']);
    renren.config([
    	'$routeProvider', 
    	// '$locationProvider', 
    	// '$httpProvider', 
    	// '$compileProvider', 
    	function($routeProvider) {

			$routeProvider
			.when('/in_theathers', {
				templateUrl: '../views/in_theathers/view.html',
				controller: 'TheathersController'
			})
			.when('/coming_soon', {
				templateUrl: '../views/coming_soon/view.html',
				controller: 'ComingController'
			})
			.when('/top250', {
				templateUrl: '../views/top250/view.html',
				controller: 'TopController'
			})
			.when('/jianli', {
                templateUrl: '../views/jianli/view.html',
                controller: 'jianliController'
            })
            .otherwise({
				redirectTo: '/in_theathers'
			});

    }]);
    renren.controller('mainController',['$scope',function($scope) {
    	$scope.li_click = function(index){
    		$scope.li_show = [];
    		$scope.li_show[index] = true;
    	}
    	$scope.li_click(0);
    	$scope.login_click = function(){
    		$scope.login_show = "display:block";
    		console.log(1);
    	}    	
    	$scope.login_hidden = function(){
    		$scope.login_show = "";
    	}    	
    	$scope.login_clear = function(){
    		event.stopPropagation();
    	}
    }]);

 
})();