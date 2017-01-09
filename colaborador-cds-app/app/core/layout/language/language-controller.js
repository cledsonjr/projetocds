"use strict";

angular.module('app').controller("LanguagesCtrl",  function LanguagesCtrl($scope, $rootScope, $log, Language, $cookieStore){

    $rootScope.lang = {};

    Language.getLanguages(function(data){
        
         var languageSelected = $cookieStore.get('linguaSelecionada');

         if(languageSelected){
            $rootScope.currentLanguage = languageSelected;
         }else{
            $rootScope.currentLanguage = data[0];
            $cookieStore.put('linguaSelecionada',data[0]);
         }    
        
        $rootScope.languages = data;

        Language.getLang($rootScope.currentLanguage.key,function(data){
            $rootScope.lang = data;
        });

    });

    $scope.selectLanguage = function(language){
        $rootScope.currentLanguage = language;

        $cookieStore.put('linguaSelecionada',language);

        Language.getLang(language.key,function(data){

            $rootScope.lang = data;

        });
    }

    $rootScope.getWord = function(key){
        if(angular.isDefined($rootScope.lang[key])){
            return $rootScope.lang[key];
        }
        else {
            return key;
        }
    }

    $scope.getWord = function(key){
      return $rootScope.getWord(key);
    }

});
