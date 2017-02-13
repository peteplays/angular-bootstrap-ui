module.exports = ['$http', '$q',  function ($http, $q) {
  return {
    getPatient: function (patientId) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: DB_URL+'getPatient/'+patientId
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'getPatient'});
        });
      return deferred.promise;
    },
    addPatient: function(record) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: DB_URL+'addPatient/',
        data: record
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'addPatient'});
        });
      return deferred.promise;
    }
  };

}];
