angular.module('atreides')
.factory('LinkedinAuthFactory',['$http', 'errorService', function($http, errorService){
  return {
    login: function() {

      return new Promise(function(resolve, reject){
        $http.get('./api/v1/auth/linkedin')
        .then(function(results){
          console.log(results);
          if (!results) {
            reject(404)
          }
          resolve(results)
        })
        .catch(function(err) {
          throw new errorService.throwNewError(404)
        })
      })

    },
    logout: function() {

    }
  };
}]);
