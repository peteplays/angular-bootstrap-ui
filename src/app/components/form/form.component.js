module.exports = angular.module('Form', [])
  .factory('formService', require('./form.service.js'))
  .component('formComponent', {
    template: require('./form.html'),
    controller: function ($routeParams, $location, formService, listService) {
      that = this;
      patientId = $routeParams.patientId;
      this.showAddFields = ($location.path() == '/new') ? true : false;
      this.drugs = [];
      this.reactions = [];
      
      this.getPatient = function(patientId)  {
        formService.getPatient(patientId)
          .then(function(d) {
            that.formData = d.data.data;
          }).catch(function(e){
            console.log({'error': e, 'on': 'getPatient-controller'});
          });
      };

      this.submitBtn = function(record)  {
        listService.updateAddPatient(record)
          .then(function(d) {
            that.formData = d.data.data;
            $location.path('/');
          });
      };

      this.addDrugFields = function() {
        var ob = {
          'autorizationNumber': '',
          'DosageText': '',
          'medicinalProduct': '',
          'drugIndication': ''
        };
        that.drugs.push(ob);
      };

      this.addReactionField = function() {
        var ob = {'meddraPrimaryTerm': ''};
        that.reactions.push(ob);
      };

      this.getPatient(patientId);
    }
  }).name;
