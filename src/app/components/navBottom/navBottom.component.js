module.exports = angular.module('NavBottom', [])
  .component('navBottomComponent', {
    bindings: {
      nav: '<',
      currentPage: '<'
    },
    template: require('./navBottom.html'),
    controller: function () {}
  }).name;
