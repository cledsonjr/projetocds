'use strict';

angular
    .module('app.colaborador')
    .factory('colaboradorService', colaboradorService);

colaboradorService.$inject = ['$log', '$resource', 'CONTEXTO'];

function colaboradorService($log, $resource, CONTEXTO) {

    var resource = $resource(CONTEXTO + 'rest/colaboradores/:id', {id: '@id'}, {
         buscarDepartamentos: {
             method: 'GET',
             url: CONTEXTO + 'rest/colaboradores/departamentos',
             isArray: true
         },
         buscarCargos: {
             method: 'GET',
             url: CONTEXTO + 'rest/colaboradores/cargos',
             isArray: true
         },
         buscarCompetencias: {
             method: 'GET',
             url: CONTEXTO + 'rest/colaboradores/competencias',
             isArray: true
         },
         alterar: {
             method: 'PUT',
             url: CONTEXTO + 'rest/colaboradores',
             isArray: false
         },
         paginacao: {
             method: 'GET',
             url: CONTEXTO + 'rest/colaboradores/paginacao',
             isArray: false
         }
    });

    var service = {
		buscarTodos: buscarTodos,
        buscarPorID: buscarPorID,
        alterar: alterar,
        excluir: excluir,
        salvar: salvar,
        
        buscarDepartamentos : buscarDepartamentos,
        buscarCargos : buscarCargos,
        buscarCompetencias : buscarCompetencias,
        paginacao : paginacao
    };

    return service;

    function buscarTodos() {
        return resource.query({}, '',
            function(data) {
                return data;
            },
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }
    
    function paginacao(paginacao) {
        return resource.paginacao({
        	size : paginacao.size,
        	page : paginacao.page,
        	sort : paginacao.sort,
 			nome : paginacao.nome
        }, '',
            function(data) {
                return data;
            },
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }
    
    //separar para outro service
    function buscarDepartamentos() {
        return resource.buscarDepartamentos({}, '',
            function(data) {
                return data;
            },
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }
    
    //separar para outro service
    function buscarCompetencias() {
        return resource.buscarCompetencias({}, '',
            function(data) {
                return data;
            },
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }

  //separar para outro service
    function buscarCargos() {
        return resource.buscarCargos({}, '',
            function(data) {
                return data;
            },
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }
    
    function buscarPorID(id) {
        return resource.get({id}, '',
            function(data) {
                return data;
            },
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }

  	function alterar(data) {
        return resource.alterar([], data,
            function() {},
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }

    function salvar(data) {
        return resource.save([], data,
            function() {},
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }

    function excluir(id) {
        return resource.delete({id : id},
            function() {},
            function(error) {
                $log.error(error.data.mensagem);
            }
        ).$promise;
    }

};