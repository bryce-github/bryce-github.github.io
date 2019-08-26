if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
  // Registration was successful
  console.log('Registered!');
  }, function(err) {
  // registration failed :(
  console.log('ServiceWorker registration failed: ', err);
  }).catch(function(err) {
  console.log(err);
  });
  });
  } else {
  console.log('service worker is not supported');
  }

  self.addEventListener('install', function() {
  console.log('Install!');
});
self.addEventListener("activate", event => {
  console.log('Activate!');
});
self.addEventListener('fetch', function(event) {
  console.log('Fetch!', event.request);
});

var startTime = moment('07:00:00', 'HH:mm:ss');
var endTime = moment('22:00:00', 'HH:mm:ss');
var goalAmount = 200;

var goalData = [
  {
    x: moment('00:00:00', 'HH:mm:ss'),
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
    x: moment('24:00:00', 'HH:mm:ss'),
    y: goalAmount
  },
];

var userData = document.cookie ? JSON.parse(document.cookie) : [];
document.cookie = JSON.stringify(userData)

var userData = [
  {
    x: moment('00:00:00', 'HH:mm:ss'),
    y: 0
  },
  {
    x: moment('08:05:00', 'HH:mm:ss'),
    y: 0
  },
  {
    x: moment('08:10:00', 'HH:mm:ss'),
    y: 24
  },
  {
    x: moment('08:40:00', 'HH:mm:ss'),
    y: 24
  },
  {
    x: moment('08:45:00', 'HH:mm:ss'),
    y: 62
  },
  {
    x: moment('11:47:00', 'HH:mm:ss'),
    y: 62
  },
  {
    x: moment('11:52:00', 'HH:mm:ss'),
    y: 96
  },
  {
    x: moment('13:15:00', 'HH:mm:ss'),
    y: 96
  },
  {
    x: moment('13:20:00', 'HH:mm:ss'),
    y: 113
  },
  {
    x: moment(),
    y: 113
  },
];

var ctx = document.getElementById('dailyProteinChart').getContext('2d');
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
      borderWidth: 5
    }, {
      data: userData,
      lineTension: 0,
      fill: false,
      label: "goal",
      pointRadius: 0,
      pointHitRadius: 0,
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      xAxes: [{
          type: 'time',
          ticks: {
            fontSize: 18
          }
      }],
      yAxes: [{
        ticks: {
          fontSize: 18
        }
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
  myChart.data.datasets[1].data[myChart.datasets[1].data.length].x = moment();
  myChart.update();
  Push.create('Hello World!')
}, 30000);