/*
* @Author: 虚竹
* @Date:   2016-09-26 13:30:48
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-26 22:58:20
*/



;(function() {
	'use strict';

  /**
   * Definition of the main app module and its dependencies
   */
  angular.module('renren', ['ngRoute'])
    .config([
    	'$routeProvider', 
    	'$locationProvider', 
    	'$httpProvider', 
    	'$compileProvider', 
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
			.otherwise({
				redirectTo: '/in_theathers'
			});

    }]);

 
})();