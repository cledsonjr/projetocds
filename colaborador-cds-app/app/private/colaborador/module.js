"use strict";

angular.module('app.colaborador', ['ui.router', 'uiGmapgoogle-maps','ui.select','ngMap'
	])
    .config(function($stateProvider) {

        $stateProvider
            .state('app.colaborador', {
                url: '/colaborador/{id}',
                views: {
                    "content@app": {
                        templateUrl: 'app/private/colaborador/views/colaborador.html',
                        controller: 'ColaboradorController',
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
            .state('app.lista', {
                url: '/lista',
                views: {
                    "content@app": {
                        templateUrl: 'app/private/colaborador/views/colaborador-lista.html',
                        controller: 'ColaboradorListaController',
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
            .state('app.visualizar', {
                url: '/visualizar/{id}',
                views: {
                    "content@app": {
                        templateUrl: 'app/private/colaborador/views/colaborador-visualizar.html',
                        controller: 'ColaboradorVisualizarController',
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
    })
      .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', 
            libraries: 'places'
        });
    })
    .run(['$templateCache', function ($templateCache) {
		  $templateCache.put('searchbox.tpl.html', '<input class="form-control" id="pesquisar" placeholder="Pesquisar" required name="name"  type="text" style="width: 90%">');
	}])
    ;