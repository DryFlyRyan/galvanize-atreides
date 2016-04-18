angular.module('atreides')
  .factory('BeerSearchFactory', ['$modal', '$http',
  function($modal, $http) {
    return {
      searchBeers: function(searchQuery) {
        console.log("Search Query ", searchQuery, " Passed to beerSearchService");
        return new Promise(function(resolve, reject){
          $http.post('./api/v1/beersearch', {search: searchQuery})
          .then(function(data){
            console.log("Beer Search Data = ", data);
            var beers = data.data.body.response.beers.items
            var beerArray = [];
            beers.forEach(function(element) {
              var squishedElement = {};
              for (var key in element.beer) {
                squishedElement[key] = element.beer[key]
              }
              for (var key in element.brewery) {
                squishedElement[key] = element.brewery[key]
              }
              beerArray.push(squishedElement)
            })
            resolve(beerArray)
          })
          .catch(function(err){
            reject(err)
          })
        })
      },
      searchBeer: function(BID) {
        return $http.get('./api/v1/beersearch/' + BID)
      }
    }
  }]);
