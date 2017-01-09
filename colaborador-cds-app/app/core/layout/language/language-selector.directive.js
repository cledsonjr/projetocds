"use strict";

angular.module('app').directive('languageSelector', function(Language){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/core/layout/language/language-selector.tpl.html",
        scope: true
    }
});