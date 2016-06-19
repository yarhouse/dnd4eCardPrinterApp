'use strict';

/**
 * @ngdoc overview
 * @name dnd4eCardPrinterApp
 * @description
 * # dnd4eCardPrinterApp
 *
 * Main module of the application.
 */
angular
.module('dnd4eCardPrinterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ngStorage'
])
.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            redirectTo: '/'
        });
});
