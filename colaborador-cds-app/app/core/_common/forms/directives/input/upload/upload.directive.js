"use strict";

angular.module('app.core.template.forms').directive('arquivo', function($base64) {

    var ddo = {};

    ddo.scope = {
        arquivo: "="
    };

    ddo.link = function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
            var reader = new FileReader();
            reader.onload = function(loadEvent) {
                scope.$apply(function() {
                    scope.arquivo = {
                        ultimoModificador: changeEvent.target.files[0].lastModified,
                        ultimaDataDeModificacao: changeEvent.target.files[0].lastModifiedDate,
                        nome: changeEvent.target.files[0].name,
                        tamanho: changeEvent.target.files[0].size,
                        tipo: changeEvent.target.files[0].type,
                        bytes: loadEvent.target.result.replace("data:application/pdf;base64,", "")
                    };
                });
            }
            reader.readAsDataURL(changeEvent.target.files[0]);
        });
    }

    return ddo;
});