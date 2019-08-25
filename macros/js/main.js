var ctx = document.getElementById('dailyProteinChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['12:00AM', '1:00AM', '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM',
      '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM',
      '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM',
      '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM', '12:00PM'
    ],
    datasets: [{
      data: [0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
             110, 120, 130, 140, 150, 160, 170, 180],
      label: "Goal"
    }, {
      data: [0, 0, 0, 0, 0, 0, 25, 25, 25, 60, 60, 70, 70, 100, 100, 100,
             100, 100, 100, 100, 100, 100, 100, 100, 100],
      label: "Achieved"
    }]
  },
  options: {
    annotation: {
      annotations: [{
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: "7:00AM",
        borderColor: "red",
        label: {
          content: "TODAY",
          enabled: true,
          position: "top"
        }
      }]
    }
  }
});