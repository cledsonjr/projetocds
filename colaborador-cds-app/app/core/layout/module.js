"use strict";

angular.module('app.core.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/core/layout/layout.tpl.html'
                }
            }
        });
        
    $urlRouterProvider.otherwise('/');

})