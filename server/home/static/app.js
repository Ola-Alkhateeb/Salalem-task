angular.module('myApp', [
  'ngRoute',
  'myApp.main'])

.config(function ($routeProvider, $httpProvider ,  $interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
  $routeProvider
    .when('/home', {
      templateUrl: './templates/home/main.html',
      controller: 'MovieController'
    })
     .otherwise({
      redirectTo: '/home'
    });
  })