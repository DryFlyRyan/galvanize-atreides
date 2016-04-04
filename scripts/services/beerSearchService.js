angular.module('atreides')
  .factory('BeerSearchFactory', ['$modal', '$http',
  function($modal, $http) {
  return {
    searchBeers: function(searchQuery) {
      return $http.post('./api/v1/beersearch', {search: searchQuery})
    },
    searchBeer: function(BID) {
      return $http.get('./api/v1/beersearch/' + BID)
    },
    openBeerSearchModal: function(size) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/dev/modals/beerSearch.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });

      return modalInstance;
    }
    }
  }]);
