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
    var cardKeys = ['name', 'category', 'price', 'weight', 'description'];

    function _htmlWrapping(string){
        if (string.indexOf('\:') > -1) {
            var splitString = string.split('\:');
            var tag = splitString.shift();
            string = '<strong>'+tag+':</strong> '+splitString.join(':');
        }
        return string;
    }
    function _makeDescription(arr){
        return arr.join('<br />');
    }

    function _stringToObject(string){
        console.log(string);
        var seperated = string.replace(/(\r\n|\n|\r)/ig, '\n').split('\n');
        seperated = _.without(seperated, '');
        var completed = [];
        var description  = [];
        console.log(seperated);

        angular.forEach(seperated, function (ele, i, arr){
            if (i < cardKeys.length - 1) {
               completed[i] = _htmlWrapping(seperated[i]);
            } else if (i >= cardKeys.length - 1) {
                description.push(_htmlWrapping(seperated[i]));
            } else {
                completed[i] = _htmlWrapping(seperated[i]);
            }
        });

        completed.push(_makeDescription(description));
        return _.object(cardKeys, completed);
    }

    return {
        createObject: function (string) {
            return _stringToObject(string);
            // return html.split('/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g', '')
            // return html.replace('/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g', '')
            //             .replace(/\<\!\-\- [\w\d\s\!\$\{\}\:\'\-]+ \-\-\>/g, '')
            //             .replace(/\<\!\-\- \-\-\>/g, '')
            //             .replace(/\sng\-[\w\d\s\-]+\=\"[\w\d\s\!\$\{\}\:\'\-]+\"/g, '')
        },
    };
});
