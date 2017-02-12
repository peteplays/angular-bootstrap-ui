module.exports = ['$http', '$q',  function ($http, $q) {
  return {
    getPatient: function (patientId) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: DB_URL+'getPatient/'+patientId,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'getPatient'});
        });
      return deferred.promise;
    }
  };

}];
