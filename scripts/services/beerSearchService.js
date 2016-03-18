angular.module('atreides')
  .factory('BeerSearchFactory',
  function($http) {
  return {
    searchBeers: function(searchQuery) {
      return $http.post('./api/v1/beersearch', {search: searchQuery})
    },
    test: function() {
      return "Test String"
    }
    }
  });
