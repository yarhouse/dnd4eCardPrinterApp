'use strict';

/**
 * @ngdoc service
 * @name dnd4eCardPrinterApp.cardBuilder
 * @description
 * # cardBuilder
 * Factory in the dnd4eCardPrinterApp.
 */
angular.module('dnd4eCardPrinterApp')
.factory('cardBuilder', function () {

    return {
        stripHTML: function (html) {
            return html.replace('/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g', '')
                        .replace(/\<\!\-\-\-\-\>/g, '')
                        .replace(/\sng\-[\w\d\s\-]+\=\"[\w\d\s\!\$\{\}\:\'\-]+\"/g, '');
        },
        buildLabels: function (string){
            var seperated = string.replace('/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g', '').split('\n');
            for (var i = seperated.length - 1; i >= 0; i--) {
                if (seperated[i].indexOf('\:') > -1) {
                    var splitString = seperated[i].split('\:');
                    seperated[i] = '<strong>'+splitString.shift()+':</strong>'+splitString.join(':');
                }
            }
            return seperated;
        }
    };
});
