'use strict';

utilModule.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'app.html',
        controller: 'AppController'
    })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            }
        }
    });

});
