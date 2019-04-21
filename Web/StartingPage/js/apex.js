function createStandardGraph(){
  var options = {
    chart: {
      type: "area",
      height: 500,
      foreColor: "#999",
      scroller: {
        enabled: true,
        track: {
          height: 7,
          background: '#e0e0e0'
        },
        thumb: {
          height: 10,
          background: '#94E3FF'
        },
        scrollButtons: {
          enabled: true,
          size: 9,
          borderWidth: 2,
          borderColor: '#008FFB',
          fillColor: '#008FFB'
        },
        padding: {
          left: 30,
          right: 20
        }
      },
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: ['#00E396', '#0090FF'],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Amount of cost',
      data: generateDayWiseTimeSeries(0, 500)
    }, {
      name: 'Paid by cash',
      data: generateDayWiseTimeSeries(1, 500)
    }],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      min: 0,
      labels: {
        offsetX: 24,
        offsetY: -5
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };

  var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

  chart.render();
}
