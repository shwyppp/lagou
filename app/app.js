/*
* @Author: 虚竹
* @Date:   2016-09-26 13:30:48
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-26 22:41:13
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
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.when('/setup', {
				templateUrl: 'views/setup.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.otherwise({
				redirectTo: '/'
			});

    }]);

 
})();