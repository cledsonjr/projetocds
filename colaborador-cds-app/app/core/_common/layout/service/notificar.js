    'use strict';

    angular
        .module('app.core.template.layout')
        .factory('notificar', notificar);

    notificar.$inject = ['$rootScope','toaster'];

    function notificar($rootScope,toaster) {
        var vm = this;

        var service = {
            mostrar: mostrar            
        };

        function mostrar(objeto) {
            if(objeto.data && objeto.data.descricao){
                toaster[objeto.tipo](objeto.data.descricao);
            }else{
                toaster[objeto.tipo]('Ocorreu um erro');
            }

            
        };

        return service;
    };