var angular = require('angular');

require('angular-route');
require('angular-ui-bootstrap');
require('angular-animate');
require('angular-touch');

angular.module('app', [
  'ui.bootstrap',
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  require('./components/components')
])
.constant(DB_URL = 'http://localhost:4444/')
.config(function ($routeProvider, $locationProvider, $provide) {

  $routeProvider
    .when('/', {
      template: '<main></main>'
    })
    .when('/edit/:patientId', {
      template: '<main></main>'
    })
    .when('/new', {
      template: '<main></main>'
    })
    .otherwise({
      template: '<not-found page-title="\'Missing the FUN...\'"></not-found>'
    });

  $locationProvider.html5Mode({
      enabled: true
    });
});
