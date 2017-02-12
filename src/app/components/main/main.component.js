module.exports = angular.module('Main', [])
  .component('main', {
    template: require('./main.html'),
    controller: function ($location) {
      this.displaying = ($location.path() == '/') ? 'list' : 'form';
      this.currentPage = $location.path();

      this.navButtonRefs = [
        {
          display: 'List Patients',
          link: '/'
        },
        {
          display: 'Add New Patient',
          link: '/new'
        }
      ];

    }
  }).name;
