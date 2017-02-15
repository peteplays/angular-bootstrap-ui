var moment = require('moment'),
    _      = require('lodash');

module.exports = angular.module('PatientBlock', [])
  .component('patientBlockComponent', {
    bindings: {
      record: '<'
    },
    template: require('./patientBlock.html'),
    controller: function ($scope, $route, listService) {
      this.names = ['Ashley', 'Bella', 'Charles', 'Dave', 'Elle', 'Frank', 'Gerold', 'Hank', 'Ivan', 'Jimi'];

      $scope.deleteElement = function(id) {
        var docs = document.querySelectorAll('.patient-block');
        docs.forEach(function(el) {
          if(el.id == id) {
            console.log('deleting ' + id);
            el.remove();
          }
        });
      };

      this.deletePatient = function(patientId) {
        listService.deletePatient(patientId)
          .then(function(d) {
            if (d.statusText == "OK") {
              // $route.reload();
              $scope.deleteElement(d.data.data._id);
            }
            return d;
          })
          .catch(function(e) {
            console.log({'error': e, 'on': 'deletePatient-controller'});
          });
      };

      this.createName = function(num) {
        try{
          return (_.isNaN(parseInt([num.slice(-1)]))) ? 'Zena' : this.names[num.slice(-1)];
        } catch(e) {
          return 'Zelda';
        }
      };

      this.convertSexDisplay = function(data) {
        return (data == 'NA') ? 'NA' : (parseInt(data) == 1) ? 'Female' : 'Male';
      };

      this.changeDateFormat = function(date) {
        return (moment(date, 'YYYYMMDD').format('YYYYMMDD') == date) ? moment(date).format('YYYY MMM D') : date;
      };

      this.ageAndNameCheck = function(data) {
        return (_.isNull(data) || _.isUndefined(data) || data.toLowerCase() == 'unknown') ? 'NA' : data;
      };

      this.collapseToggle = function(val) {
        return (_.isUndefined(val)) ? true : (val == true) ? false : true;
      };

    }
  }).name;
