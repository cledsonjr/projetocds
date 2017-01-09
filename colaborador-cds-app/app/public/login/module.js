"use strict";

angular.module('app.login', ['ui.router'])
    .config(function($stateProvider) {

        $stateProvider
            .state('app.login', {
                url: '/',
                views: {
                    "content@app": {
                        templateUrl: 'app/public/login/views/login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    srcipts: function(lazyScript) {
                        return lazyScript.register([
                            'build/vendor.ui.js'
                        ])

                    }
                }
            })
    });