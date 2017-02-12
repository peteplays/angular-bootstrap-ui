module.exports = angular.module('FormNestedArr', [])
  .component('formNestedArrComponent', {
    bindings: {
      record: '=',
      type: '@',
      arrIndex: '@'
    },
    template: require('./formNestedArr.html'),
    controller: function () {

      this.addSpacesToCamelCase = function(val) {
        var output = val.replace( /([A-Z])/g, " $1" ).trim();
        return output.charAt(0).toUpperCase() + output.slice(1);
      };

    }
  }).name;
