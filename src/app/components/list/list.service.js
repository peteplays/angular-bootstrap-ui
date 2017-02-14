module.exports = ['$http', '$q',  function($http, $q) {
  return {
    listPatients: function(pageNumber, perPage) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: DB_URL+'listPatients/'+pageNumber+'/'+perPage
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'listPatients'});
        });
      return deferred.promise;
    },
    updatePatient: function(record) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: DB_URL+'updatePatient/',
        data: {"find": {"_id": record._id}, "update": record}
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'updateAddPatient'});
        });
      return deferred.promise;
    },
    countPatients: function(pageNumber) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: DB_URL+'count'
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'countPatients'});
        });
      return deferred.promise;
    },
    deletePatient: function(patientId) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: DB_URL+'deletePatient/'+patientId
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'deletePatient'});
        });
      return deferred.promise;
    }
  };
}];
