'use strict';

angular.module('myApp', ['ngRoute','ui.bootstrap','app.controllers', 'app.services'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
            templateUrl : 'partials/google-charts.html',
            controller  : 'mainController'});
  $routeProvider.when('/google-charts', {
            templateUrl : 'partials/google-charts.html',
            controller  : 'mainController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);