'use strict';
angular.module('App').controller('salesController', [
'$scope',
'Sales',
'HIGHCHARTS',
function($scope, Sales, HIGHCHARTS) {

  Sales.getter().then(function(result){
    let options = HIGHCHARTS.baseOptions;
    options.xAxis.categories = result.data.categories;
    options.series = result.data.series;
    Highcharts.chart('container-unit-sales-italy', options);
  });

}]);
