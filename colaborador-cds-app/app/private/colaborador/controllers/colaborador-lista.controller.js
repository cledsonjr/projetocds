'use strict';

angular.module('app.colaborador').controller('ColaboradorListaController',
		colaboradorListaController);

colaboradorListaController.$inject = [ 'toaster', '$state',
		'colaboradorService' ];

function colaboradorListaController(toaster, $state, colaboradorService) {

	var vm = this;
	vm.colaboradores = [];
	vm.carregarMaisItens = carregarMaisItens;
	vm.pesquisar = pesquisar;
	
	vm.paginacao = {};
	vm.paginacao.last = true;
	vm.termoDeBusca = "";
	
	function _inicializar() {
		pesquisar();
	}

	function pesquisar() {
		vm.paginacao = {};
		vm.paginacao.page = 0;
		vm.paginacao.size = 10;
		vm.paginacao.sort = 'nome,ASC';
		vm.paginacao.nome = vm.termoDeBusca;
		vm.colaboradores = [];
		colaboradorService.paginacao(vm.paginacao).then(function(data) {
			for (var i = 0; i < data.content.length; i++) {
				vm.colaboradores.push(data.content[i]);
			}
			vm.paginacao.last = data.last;
		}, function(reason) {
			toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
		});
	}

	function carregarMaisItens() {
		if(vm.paginacao.last){
			return;
		}
		vm.paginacao.page++;
		colaboradorService.paginacao(vm.paginacao).then(function(data) {
			for (var i = 0; i <  data.content.length; i++) {
				vm.colaboradores.push(data.content[i]);
			}
			vm.paginacao.last = data.last;
		}, function(reason) {
			toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
		});
	}

	_inicializar();
};