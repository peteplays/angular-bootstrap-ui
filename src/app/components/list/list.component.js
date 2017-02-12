module.exports = angular.module('List', [])
  .factory('listService', require('./list.service.js'))
  .component('listComponent', {
    template: require('./list.html'),
    controller: function ($scope, $routeParams, listService) {
      that = this;
      this.paginationNumberDisplay = 5;
      this.paginationCurrentPage = 1;
      this.paginationItemsPerPage = 10;

      this.listPatients = function(pageNumber, perPage)  {
        listService.listPatients(pageNumber, perPage)
          .then(function(d) {
            that.data = d.data.data;
          })
          .then(function() {
            this.countPatients;
          }).catch(function(e){
            console.log({'error': e, 'on': 'listPatients-controller'});
          });
      };

      this.updatePatient = function()  {
        listService.updateAddPatient()
          .then(function(d) {
            that.updatePatientStatus = d.data.data;
          })
          .then(function() {
            this.countPatients;
          }).catch(function(e){
            console.log({'error': e, 'on': 'updatePatient-controller'});
          });
      };

      this.countPatients = function()  {
        listService.countPatients()
          .then(function(d) {
            that.patientCount = d.data.count;
          }).catch(function(e){
            console.log({'error': e, 'on': 'countPatients-controller'});
          });
      };

      this.listPatients(1, that.paginationItemsPerPage);
      this.countPatients();

    }
  }).name;
