angular.module('atreides')
  .filter('userFilter', function(){
    return function(array, campus, name, title) {
      var filteredArray = [];
      array.forEach(function(element) {
        if (campus) {
          if (element.campuses[0].label === campus) {
            if (name) {

            } else if (title) {
              
            }
          }
        } else if (name) {

        } else if (title) {

        }
      })
      return array;
    }
  })
