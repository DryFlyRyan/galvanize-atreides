angular.module('atreides')
.service('errorREpositoryService', [function(){

  return {

    404: {
      errorCode: 404,
      errorMessage: "File Not Found"
    }
  }

}])
