(function () {
  'use strict';

  var app = angular.module('csv');

  app.filter('csvFilter', function() {
    return function(data, delimiter) { 
      return data
        .map(function(i) { return i.join(delimiter); }).join('\n');
    }; 
  });

}());