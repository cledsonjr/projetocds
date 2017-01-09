"use strict";

angular.module('app.core.auth', ['ui.router'])

.constant('REDIRECIONAR_NAO_AUTORIZADO', {
    notificar : 'redirecionar.nao.autorizado'
})

.run(function ($rootScope, REDIRECIONAR_NAO_AUTORIZADO, $state, CONTEXTO) {
    $rootScope.$on(REDIRECIONAR_NAO_AUTORIZADO.notificar, function (event, message) {
    	 $state.go('app.negado')
    });
});
