module.exports = ['$http', '$q',  function($http, $q) {
  return {
    listPatients: function(pageNumber, perPage) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: DB_URL+'listPatients/'+pageNumber+'/'+perPage,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'listPatients'});
        });
      return deferred.promise;
    },
    updateAddPatient: function(record) {
      console.log(record);
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: DB_URL+'updateAddPatient/',
        data: {"find": {"_id": record._id},"update": record},
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
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
        url: DB_URL+'count',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
        .then(function(d) {
          return deferred.resolve(d);
        }).catch(function(e) {
          console.log({'error': e, 'on': 'countPatients'});
        });
      return deferred.promise;
    }
  };

}];
