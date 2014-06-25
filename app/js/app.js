'use strict';

var controllerModule = angular.module('myApp.controllers', []);
var directiveModule = angular.module('myApp.directives', []);
var filtersModule = angular.module('myApp.filters', []);
var serviceModule = angular.module('myApp.service', []);
var templatesModule = angular.module('myApp.templates', []);
var constantsModule = angular.module('myApp.constants', []);
var utilModule = angular.module('myApp.util', []);

angular.module('myApp', [
    'ionic',
    controllerModule.name,
    directiveModule.name,
    filtersModule.name,
    serviceModule.name,
    templatesModule.name,
    constantsModule.name,
    utilModule.name
]);
