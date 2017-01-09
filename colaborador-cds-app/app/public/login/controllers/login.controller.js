'use strict';

angular
	.module('app.login')
	.controller('LoginController', loginController);

loginController.$inject = ['toaster', '$state',  '$http', '$window', '$cookies', '$base64', 'CONTEXTO', 'URL'];

function loginController(toaster, $state,  $http, $window, $cookies, $base64, CONTEXTO,URL ) {

	var vm = this;
	
	vm.login = login;

    vm.errorMessage = '';

    function login(){

        var data = "username=" + vm.user + "&password=" + vm.password + "&grant_type=password&scope=read%20write&";
console.info(CONTEXTO);
        $http.post(URL+CONTEXTO+'oauth/token', data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
                "Authorization": "Basic " + $base64.encode("clientapp" + ':' + "springSecurity")
            }
        }).then(function (response) {
            $cookies.put('auth.access_token', response.data.access_token);
            $cookies.put('auth.refresh_token', response.data.refresh_token);
            $state.go('app.lista');
            return false;
        }, function (response) {
        	toaster.warning('Senha ou usuário inválido'); // toaster padrão
        });
        
    }


};