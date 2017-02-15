var _  = require('lodash');
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

      this.sendToUpdatePatient = function(record) {
        listService.updatePatient(record)
          .then(function(d) {
            that.formData = d.data.data;
            $location.path('/');
          }).catch(function(e){
            console.log({'error': e, 'on': 'sendToUpdatePatient-controller'});
          });
      };

      this.sendToAddPatient = function(record) {
        var data = this.convertObjToArr(record);
        formService.addPatient(data)
          .then(function(d) {
            that.formData = d.data.data;
            $location.path('/');
          }).catch(function(e){
            console.log({'error': e, 'on': 'sendToAddPatient-controller'});
          });
      };

      this.submitBtn = function(record)  {
        if(this.showAddFields) {
          this.sendToAddPatient(record);
        }  else {
          this.sendToUpdatePatient(record);
        }
      };

      this.convertObjToArr = function(record) {
        var checks = ['drugs', 'reaction'];
        checks.forEach(function(c){
          var newArr = _.values(record.patient[c]);
          _.unset(record.patient, c);
          record.patient[c] = newArr;
        });
        return record;
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

      if(patientId) { this.getPatient(patientId); }
    }
  }).name;
