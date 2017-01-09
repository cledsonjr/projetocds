"use strict";

angular.module('app.core.template.forms').directive('smartDatepicker', function () {
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        link: function (scope, element, attributes) {

            var onSelectCallbacks = [];

            if (attributes.minRestrict) {
                var ids = attributes.minRestrict.split(',');
                onSelectCallbacks.push(function (selectedDate) {
                  for(var i =0; i < ids.length; i++){
                      $(ids[i]).datepicker('option', 'minDate', selectedDate);
                                     }
                 });
            }

            if (attributes.minMaiorRestrict || attributes.mesMaiorRestrict) {
                var idsMin = null;
                var idsMes = null;

                if(attributes.minMaiorRestrict){
                    idsMin = attributes.minMaiorRestrict.split(',');
                }

                if(attributes.mesMaiorRestrict){
                    idsMes = attributes.mesMaiorRestrict.split(',');
                }

                onSelectCallbacks.push(function (selectedDate) {
                if(idsMin){

                        var dataMinimaMaiorQueDataSelecionada = selectedDate.split('/');
                        var data = new Date(dataMinimaMaiorQueDataSelecionada[1] +"/"+ dataMinimaMaiorQueDataSelecionada[0] +"/"+ dataMinimaMaiorQueDataSelecionada[2]);
                              data.setDate(data.getDate() + 1);
                        for(var i =0; i < idsMin.length; i++){
                         $(idsMin[i]).datepicker('option', 'minDate', data);
                      }
                }

                if(idsMes){
                        var dataMesMaiorQueDataSelecionada = selectedDate.split('/');
                        var data = new Date(dataMesMaiorQueDataSelecionada[1] +"/"+ '01' +"/"+ dataMesMaiorQueDataSelecionada[2]);
                              data.setMonth(data.getMonth() + 1);
                        for(var i =0; i < idsMes.length; i++){
                         $(idsMes[i]).datepicker('option', 'minDate', data);
                      }
                }

                 });
            }

            if (attributes.maxRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.maxRestrict).datepicker('option', 'maxDate', selectedDate);
                });
            }

            //Let others know about changes to the data field
            onSelectCallbacks.push(function (selectedDate) {
                //CVB - 07/14/2015 - Update the scope with the selected value
                element.triggerHandler("change");

                //CVB - 07/17/2015 - Update Bootstrap Validator
                var form = element.closest('form');

                if(typeof form.bootstrapValidator == 'function')
                    form.bootstrapValidator('revalidateField', element.attr('name'));
            });

            var options = _.extend({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function (selectedDate) {
                    angular.forEach(onSelectCallbacks, function (callback) {
                        callback.call(this, selectedDate)
                    })
                }
            }, scope.options || {});


            if (attributes.numberOfMonths) options.numberOfMonths = parseInt(attributes.numberOfMonths);

            if (attributes.dateFormat) options.dateFormat = attributes.dateFormat;

            if (attributes.defaultDate) options.defaultDate = attributes.defaultDate;

            if (attributes.changeMonth) options.changeMonth = attributes.changeMonth == "true";

            if (attributes.changeYear) options.changeYear = attributes.changeYear == "true";

            if (attributes.minDate) options.minDate = attributes.minDate;

            if (attributes.maxDate) options.maxDate = attributes.maxDate;

            if (attributes.adicionarData) options.adicionarData = attributes.adicionarData;

            //Observação colocar a opção de pegar o idioma por país
            options.dayNames = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

            options.dayNamesMin= ['D','S','T','Q','Q','S','S','D'];

            options.dayNamesShort= ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];

            options.monthNames= ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

            options.monthNamesShort= ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

            element.datepicker(options)
        }
    }
});
