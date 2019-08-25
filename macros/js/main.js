var startTime = moment('07:00:00', 'HH:mm:ss');
var endTime = moment('22:00:00', 'HH:mm:ss');
var goalAmount = 200;

var goalData = [];
var currentAmount = 0;
var totalHours = moment.duration(endTime.diff(startTime)).asHours();
var thisTime = moment('00:00:00', 'HH:mm:ss');
for (i = 0; i <= 24; i++) {
  if (thisTime.isAfter(startTime) && (thisTime.isBefore(endTime) || thisTime.isSame(endTime))) {
    currentAmount += goalAmount / totalHours;
  }
  goalData.push({
    x: thisTime.format(),
    y: currentAmount
  });
  thisTime.add(1, 'hour');
}

var ctx = document.getElementById('dailyProteinChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      data: goalData,
      lineTension: 0,
      fill: false,
      label: "goal"
    }]
  },
  options: {
    scales: {
      xAxes: [{
          type: 'time'
      }]
    },
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: moment().format(),
          borderColor: "red",
          label: "now"
        }
      ]
    }
  }
});

window.setInterval(function() {
  myChart.options.annotation.annotations[0].value = moment().format();
  myChart.update();
}, 10000);