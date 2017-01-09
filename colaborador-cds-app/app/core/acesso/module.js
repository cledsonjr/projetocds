"use strict";


angular.module('app.core.acesso', ['ui.router'])
    .config(function($stateProvider) {

        $stateProvider
            .state('app.sucesso', {
                url: '/sucesso',
                views: {
                    "content@app": {
                        templateUrl: 'app/core/acesso/views/200.html',
                        controller: 'SucessoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.negado', {
                url: '/negado',
                views: {
                    "content@app": {
                        templateUrl: 'app/core/acesso/views/401.html',
                        controller: 'NegadoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.naoencontrado', {
                url: '/naoencontrado',
                views: {
                    "content@app": {
                        templateUrl: 'app/core/acesso/views/404.html',
                        controller: 'NaoEncontradoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.conteudonaoencontrado', {
                url: '/conteudonaoencontrado',
                views: {
                    "content@app": {
                        templateUrl: 'app/core/acesso/views/204.html',
                        controller: 'ConteudoNaoEncontradoController',
                        controllerAs: 'vm'
                    }
                }
            })
    });