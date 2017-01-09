'use strict';

angular.module('app.colaborador').controller('ColaboradorController',
		colaboradorController);

colaboradorController.$inject = [ 'toaster', '$state', 'colaboradorService',
		'$stateParams', 'NgMap' ];

function colaboradorController(toaster, $state, colaboradorService,
		$stateParams, NgMap) {

	var vm = this;
	vm.departamentos = [];
	vm.cargos = [];
	vm.salvar = salvar;
	vm.adicionarContato = adicionarContato;
	vm.recuperarTipoContato = recuperarTipoContato;
	vm.excluirContato = excluirContato;
	vm.recuperarClasseCargo  = recuperarClasseCargo;
	vm.recuperarClasseDepartamento = recuperarClasseDepartamento;
	vm.tiposContatos = [];
	vm.tipoCargos = [];
	vm.tipoDepartamento = [];
	vm.competenciasDisponiveis = [];
	
	vm.classeCargo = "fa fa-question";
	vm.classeDepartamento = "fa fa-question";
	
	vm.colaborador = {};
	vm.colaborador.contatos = [];
	
	function _inicializar() {
		_buscarDepartamentos();
		_buscarCargos();
		_inicializarMap();
		_inicializarTipoContato();
		_inicializarClasseCargo();
		_inicializarClasseDepartamento();
		_buscarCompetencias();
		if ($stateParams.id) {
			colaboradorService.buscarPorID($stateParams.id).then(
					function(data) {
						vm.colaborador = data;
						recuperarClasseCargo(vm.colaborador.idCargo);
						recuperarClasseDepartamento(vm.colaborador.idDepartamento);
					}, function(reason) {
						toaster.error('Ocorreu um error ao recuperar'); // toaster
						// padrão
					});
		}
	}

	function _buscarCargos() {
		colaboradorService.buscarCargos().then(function(data) {
			vm.cargos = data;
		}, function(reason) {
			toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
		});
	}

	function _buscarDepartamentos() {
		colaboradorService.buscarDepartamentos().then(function(data) {
			vm.departamentos = data;
		}, function(reason) {
			toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
		});
	}

	function salvar() {
		if (vm.colaborador.contatos.length < 1) {
			toaster.warning('Informar ao menos um contato');
			return;
		}

		if (vm.colaborador.descricao.length > 1000) {
			toaster.warning('Descrição deve ter menosde 1000 caracteres');
			return;
		}

		for (var int = 0; int < vm.colaborador.contatos.length; int++) {
			vm.colaborador.contatos[int].tipo = vm.colaborador.contatos[int].tipo.valor;
		}

		if (vm.colaborador.id) {
			colaboradorService.alterar(vm.colaborador).then(function() {
				toaster.success('Adicionado com sucesso'); // toaster padrão
				$state.go('app.lista');
			}, function(reason) {
				toaster.error('Ocorreu um error ao adicioanr'); // toaster
				// padrão
			});
		} else {
			colaboradorService.salvar(vm.colaborador).then(function() {
				toaster.success('Adicionado com sucesso'); // toaster padrão
				$state.go('app.lista');
			}, function(reason) {
				toaster.error('Ocorreu um error ao adicioanr'); // toaster
				// padrão
			});
		}

	}

	function adicionarContato() {
		vm.colaborador.contatos.push({
			"descricao" : "",
			"tipo" : ""
		});
	}

	function _inicializarMap() {
		vm.map = {
			"center" : {
				"latitude" : 52.47491894326404,
				"longitude" : -1.8684210293371217
			},
			"zoom" : 15
		};

		var options = {
			center : new google.maps.LatLng(-15.7990489, -47.8629576),
			zoom : 13,
			disableDefaultUI : true
		}
		if (document.getElementById("map") != null) {
			vm.map = new google.maps.Map(document.getElementById("map"),
					options);

			vm.places = new google.maps.places.PlacesService(vm.map);
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

	function _buscarCompetencias() {
		colaboradorService.buscarCompetencias().then(function(data) {
			vm.competenciasDisponiveis = data;
		}, function(reason) {
			toaster.error('Ocorreu um error ao recuperar'); // toaster padrão
		});

	}

	function recuperarTipoContato(valor) {
		for (var i = 0; i < vm.tiposContatos.length; i++) {
			if (valor === vm.tiposContatos[i].valor) {
				return vm.tiposContatos[i].classe;
			}
		}
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

	function excluirContato(contato) {
		var index = vm.colaborador.contatos.indexOf(contato);
		vm.colaborador.contatos.splice(index, 1);
	}

	vm.placeChanged = function() {
		vm.place = this.getPlace();
		vm.map.setCenter(vm.place.geometry.location);
	}

	NgMap.getMap().then(function(map) {
		vm.map = map;
	});

	_inicializar();
};