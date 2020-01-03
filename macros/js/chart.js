var goalData = [{
  x: currentDay.startOf('day'),
  y: 0
},
{
  x: startTime,
  y: 0
},
{
  x: endTime,
  y: goalAmount
},
{
  x: currentDay.endOf('day'),
  y: goalAmount
},
];

var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      data: goalData,
      lineTension: 0,
      fill: false,
      label: "goal",
      pointRadius: 0,
      pointHitRadius: 0,
      borderWidth: 3,
      borderColor: "rgba(0,0,0,.2)"
    }, {
      data: [],
      lineTension: 0,
      fill: false,
      label: "actual",
      pointRadius: 0,
      pointHitRadius: 0,
      borderWidth: 3,
      borderColor: "rgba(50,50,50,.7)"
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        type: 'time',
        ticks: {
          fontSize: 12
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 12
        }
      }]
    },
    annotation: {
      annotations: [{
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: moment().format(),
        borderColor: "rgba(0,101,173,0.3)",
        label: "now",
        borderWidth: 3
      }]
    }
  }
});

window.setInterval(function () {
    myChart.options.annotation.annotations[0].value = moment().format();
    myChart.data.datasets[1].data[myChart.data.datasets[1].data.length].x = moment();
    myChart.update();
  }, 60000);
  
  function updateChart() {
    var goalData = [{
        x: currentDay.startOf('day').toDate(),
        y: 0
      },
      {
        x: getStartTime(),
        y: 0
      },
      {
        x: getEndTime(),
        y: goalAmount
      },
      {
        x: currentDay.endOf('day'),
        y: goalAmount
      },
    ];
    myChart.data.datasets[0].data = goalData;
    myChart.update();
    var start = currentDay.startOf('day').valueOf();
    var end = currentDay.endOf('day').valueOf();
    if (start == moment().startOf('day')) {
      myChart.options.annotation.drawTime = 'afterDatasetsDraw';
      var lastTime = moment();
    } else {
      myChart.options.annotation.drawTime = null;
      var lastTime = currentDay.endOf('day');
    }
    db.info.where('time').between(start, end).toArray()
      .then( function(data) {
        var lastValue = 0;
        var userData = [{x: start, y: 0}];
        for (i=0; i<data.length; i++) {
          var time = new moment(data[i].time);
          var amnt = Number(data[i].amount);
          userData.push( {'x': time.subtract(5, 'minutes').toDate(), 'y': lastValue} );
          userData.push( {'x': time.add(5, 'minutes').toDate(), 'y': lastValue+amnt} );
          lastValue = lastValue+amnt;
        }

        userData.push({x: lastTime, y: lastValue})
        myChart.data.datasets[1].data = userData;
        myChart.update(0);
    });
  };
  updateChart();