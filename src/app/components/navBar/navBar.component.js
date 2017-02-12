module.exports = angular.module('NavBar', [])
  .component('navBarComponent', {
    bindings: {
      nav: '<',
      currentPage: '<'
    },
    template: require('./navBar.html'),
    controller: function () {}
  }).name;
