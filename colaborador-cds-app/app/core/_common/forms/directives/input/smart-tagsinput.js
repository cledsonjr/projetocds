'use strict';

angular.module('app.core.template.forms').directive('smartTagsinput', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
            tElement.tagsinput();
        }
    }
});