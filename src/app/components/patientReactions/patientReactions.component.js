module.exports = angular.module('PatientReactions', [])
  .component('patientReactionsComponent', {
    bindings: {
      data: '<',
      title: '@'
    },
    template: require('./patientReactions.html'),
    controller: function () {}
  }).name;
