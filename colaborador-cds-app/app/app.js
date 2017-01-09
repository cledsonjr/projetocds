'use strict';

angular.module('app', [
    'ngSanitize',
    'ngCookies',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'angularModalService',
    'toaster',
    'base64',
    
    // Modulos padrão da aplicação
    'app.core.template',
    'app.core.ambiente',
    'app.core.config',
    'app.core.auth',
    'app.core.layout',
    'app.core.acesso',

    // App
    'app.colaborador',
    'app.login'

])
//.config(function ($provide, $httpProvider) {
//
//
//    $provide.factory('ErrorHttpInterceptor', function ($q, $rootScope, CONSTANTES_SISTEMA, REDIRECIONAR_NAO_AUTORIZADO) {
//            return {
//                requestError: function (rejection) {
//                    notifyError(rejection);
//                    return $q.reject(rejection);
//                },
//
//                responseError: function (rejection) {
//
//                     rejection.tipo = 'error';
//
//                     var responseInterceptors = {
//                        '-1': function (rejection) { // ERR_CONNECTION_REFUSED
//                            $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
//                        },
//                        400: function (rejection) { // BAD REQUEST
//                            $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
//                        },
//                        401: function (rejection) { // UNAUTHORIZED
//                           $rootScope.$broadcast(REDIRECIONAR_NAO_AUTORIZADO.notificar, rejection);
//                           // $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
//                        },
//                        403: function (rejection) { // FORBIDDEN
//                            $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
//                        },
//                        404: function (rejection) { // PAGE NOT FOUND
//                            $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
//                        },
//                        500: function (rejection) { // INTERNAL SERVER ERROR
//                            $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
//                        }
//                    };
//
//                    if (responseInterceptors[rejection.status]) {
//                        responseInterceptors[rejection.status](rejection);
//                    }
//
//                    return $q.reject(rejection);
//                }
//            };
//        });
//
//        $httpProvider.interceptors.push('ErrorHttpInterceptor');
//
//})

.factory('httpRequestInterceptor', function ($cookies, $window, $q, $rootScope, CONSTANTES_SISTEMA, REDIRECIONAR_NAO_AUTORIZADO) {
    return {
      request: function (config) {
        var access_token = $cookies.get('auth.access_token');
        if(access_token !== undefined && (config.url.indexOf('/oauth/token') === -1))
          config.headers['Authorization'] = 'Bearer ' + access_token;
        return config;
      },
      responseError: function (rejection) {
//        if(rejection.status === 401) { // UNAUTHORIZED
//          $window.location.href = '#/';
//        }
//        rejection.tipo = 'error';
    	  
    	                       var responseInterceptors = {
    	                          '-1': function (rejection) { // ERR_CONNECTION_REFUSED
    	                              $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
    	                          },
    	                          400: function (rejection) { // BAD REQUEST
    	                              $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
    	                          },
    	                          401: function (rejection) { // UNAUTHORIZED
    	                             $rootScope.$broadcast(REDIRECIONAR_NAO_AUTORIZADO.notificar, rejection);
    	                             // $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
    	                          },
    	                          403: function (rejection) { // FORBIDDEN
    	                              $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
    	                          },
    	                          404: function (rejection) { // PAGE NOT FOUND
    	                              $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
    	                          },
    	                          500: function (rejection) { // INTERNAL SERVER ERROR
    	                              $rootScope.$broadcast(CONSTANTES_SISTEMA.notificar, rejection);
    	                          }
    	                      };
    	  
    	                      if (responseInterceptors[rejection.status]) {
    	                          responseInterceptors[rejection.status](rejection);
    	                      }
    	  
    	  
        return $q.reject(rejection);
      }
    };
  }).config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('httpRequestInterceptor');
}])

.constant('CONSTANTES_SISTEMA', {
    notificar : 'colaborador.notificar'
})
//
//.run(function ($rootScope, CONSTANTES_SISTEMA, notificar) {
//    $rootScope.$on(CONSTANTES_SISTEMA.notificar, function (event, message) {
//         notificar.mostrar(message);
//    });
//})

.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});