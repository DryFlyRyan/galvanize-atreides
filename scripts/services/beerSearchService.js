angular.module('atreides')
  .factory('BeerSearchFactory', ['$modal', '$http',
  function($modal, $http) {
    return {
      searchBeers: function(searchQuery) {
        return $http.post('./api/v1/beers/search', {search: searchQuery})
      },
      searchBeer: function(BID) {
        return $http.post('./api/v1/beers/search', {
          BID: BID
        })
      },
      getPreviouslyPurchasedBeers: function() {
        return $http.get('./api/v1/beers/')
      },
      changeKeg: function(tapID, beerID, sizeID) {
        return http.post('./api/v1/beers/kegchange',
        {
          device_id: tapID,
          untappd_id: beerID,
          size_id: sizeID
        })
      }
    }
  }]);
