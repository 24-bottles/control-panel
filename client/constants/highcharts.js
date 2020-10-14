angular.module('App').constant('HIGHCHARTS', {
  baseOptions: {
    chart: { type: 'line' },
    credits: { visible: false },
    title: { text: null },
    subtitle: { text: null },
    series: null,
    xAxis: { categories: null },
    yAxis: {
      title: { text: 'Units'}
    },
    plotOptions: {
      line: {
        dataLabels: { enabled: false },
        enableMouseTracking: false
      }
    }
  }
});
