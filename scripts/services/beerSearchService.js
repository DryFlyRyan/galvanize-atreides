angular.module('atreides')
  .factory('BeerSearchFactory',
  function($http) {
  return {
    searchBeers: function(searchQuery) {
      return $http.post('./api/v1/beersearch', {search: searchQuery})
    },
    searchBeer: function(BID) {
      return $http.get('./api/v1/beersearch/' + BID)
    },
    test: function() {
      return "Test String"
    }
    }
  });
