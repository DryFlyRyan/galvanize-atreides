angular.module('atreides')
.factory('errorService', ['errorRepositoryENG', function(errorRepositoryENG){
  return {
    throwNewError: function(error){
      var errorLookup = errorRepositoryENG[error];
      this.errorStatus = errorRepositoryENG[error].errorCode;
      this.errorMessage = errorRepositoryENG[error].errorMessage;
    }
  }
}])
