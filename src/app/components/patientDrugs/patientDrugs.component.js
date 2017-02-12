module.exports = angular.module('PatientDrugs', [])
  .component('patientDrugsComponent', {
    bindings: {
      data: '<',
      title: '@'
    },
    template: require('./patientDrugs.html'),
    controller: function () {}
  }).name;
