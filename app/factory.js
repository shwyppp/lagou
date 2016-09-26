;(function() {


  /**
   * Sample factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   * 
   */
  angular.module('boilerplate')
    .factory('getDataFromAPI', ['$http', 'LocalStorage', function($http, LocalStorage) {
      return {
        loadData: loadData
      };  
    }]);

})();
