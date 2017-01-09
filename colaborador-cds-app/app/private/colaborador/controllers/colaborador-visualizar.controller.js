'use strict';

angular.module('app.colaborador').controller('ColaboradorVisualizarController',
		colaboradorVisualizarController);

colaboradorVisualizarController.$inject = [ 'toaster', '$state', 'colaboradorService','$stateParams' ];

function colaboradorVisualizarController(toaster, $state, colaboradorService,$stateParams) {

	var vm = this;
		vm.recuperarTipoContato = recuperarTipoContato;
		vm.montarDescricao = montarDescricao;
		vm.excluir = excluir;
		vm.colaborador = {};
		vm.tiposContatos = [];
		vm.classeCargo = "fa fa-question";
		vm.classeDepartamento = "fa fa-question";
		vm.tipoCargos = [];
		vm.tipoDepartamento = [];
	
	function _inicializar() {
		_inicializarClasseCargo();
		_inicializarClasseDepartamento();
		if($stateParams.id){
			colaboradorService.buscarPorID($stateParams.id).then(function(data) {
				vm.colaborador = data;
				recuperarClasseCargo(vm.colaborador.cargo.id);
				recuperarClasseDepartamento(vm.colaborador.departamento.id);
			}, function(reason) {
				toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
			});
		}
		
		_inicializarTipoContato();
	}

	function recuperarTipoContato(valor) {
		for(var i = 0; i < vm.tiposContatos.length; i++){
			if(valor ===  vm.tiposContatos[i].valor){
				return vm.tiposContatos[i].classe;
			}
		}
	}
	
	function excluir(id) {
		colaboradorService.excluir(id).then(function(data) {
			toaster.success('Excluído com sucesso');
			$state.go('app.lista');
		}, function(reason) {
			toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
		});
	}
	
	function montarDescricao(descricao) {
		vm.descricaoCompleta = descricao;
		if(descricao && descricao.length > 200){
			vm.descricaoCurta = descricao.substring(0, 200);
		}
	}
	
	function _inicializarTipoContato() {

		vm.tiposContatos.push({
			"descricao" : "Telefone fixo",
			"classe" : "fa fa-phone",
			"valor" : "1"
		});
		vm.tiposContatos.push({
			"descricao" : "Celular",
			"classe" : "fa fa-mobile",
			"valor" : "2"
		});
		vm.tiposContatos.push({
			"descricao" : "Facebook",
			"classe" : "fa fa-facebook",
			"valor" : "3"
		});
		vm.tiposContatos.push({
			"descricao" : "E-mail",
			"classe" : "fa fa-inbox",
			"valor" : "4"
		});
		vm.tiposContatos.push({
			"descricao" : "Linkedin",
			"classe" : "fa fa-linkedin",
			"valor" : "5"
		});
		vm.tiposContatos.push({
			"descricao" : "Google+",
			"classe" : "fa fa-google-plus",
			"valor" : "6"
		});

	}
	
	function _inicializarClasseCargo() {
		vm.tipoCargos.push({
			"classe" : "fa fa-code",
			"valor" :1
		});
		vm.tipoCargos.push({
			"classe" : "fa fa-cubes",
			"valor" : 2
		});
		vm.tipoCargos.push({
			"classe" : "fa fa-calendar",
			"valor" :3
		});

	}
	
	function _inicializarClasseDepartamento() {
		vm.tipoDepartamento.push({
			"classe" : "fa fa-lightbulb-o",
			"valor" :1
		});
		vm.tipoDepartamento.push({
			"classe" : "fa fa-building",
			"valor" : 2
		});
		vm.tipoDepartamento.push({
			"classe" : "fa fa-clipboard",
			"valor" :3
		});

	}
	
	function recuperarClasseDepartamento(valor) {
		for (var i = 0; i < vm.tipoDepartamento.length; i++) {
			if (valor === vm.tipoDepartamento[i].valor) {
				vm.classeDepartamento = vm.tipoDepartamento[i].classe;
				return;
			}
		}
		vm.classeDepartamento = "fa fa-question";
	}
	
	function recuperarClasseCargo(valor) {
		for (var i = 0; i < vm.tipoCargos.length; i++) {
			if (valor === vm.tipoCargos[i].valor) {
				vm.classeCargo = vm.tipoCargos[i].classe;
				return;
			}
		}
		vm.classeCargo = "fa fa-question";
	}

	_inicializar();
};