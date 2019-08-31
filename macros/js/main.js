window.addEventListener('load', event => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('service-worker.js');
      console.log('service worker registered!')
    } catch (error) {
      console.log('service worker failed.')
    }
  }
});


function displayNotification(title, body) {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      var options = {
        body: body,
        icon: './img/icons/icon-72x72.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [{
            action: 'explore',
            title: 'Explore this new world',
            icon: './img/icons/icon-72x72.png'
          },
          {
            action: 'close',
            title: 'Close notification',
            icon: './img/icons/icon-72x72.png'
          },
        ]
      };
      reg.showNotification(title, options);
    });
  }
}

// document.querySelector('#push').addEventListener('click', function( event ) {
//   displayNotification("head", "body")
// });

var startTime = moment('07:00:00', 'HH:mm:ss');
var endTime = moment('22:00:00', 'HH:mm:ss');
var goalAmount = 200;

var goalData = [{
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

var userData = [{
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
    y: 63
  },
  {
    x: moment('11:47:00', 'HH:mm:ss'),
    y: 63
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
        borderColor: "#0065ad",
        label: "now"
      }]
    }
  }
});


window.setInterval(function () {
  myChart.options.annotation.annotations[0].value = moment().format();
  myChart.data.datasets[1].data[myChart.data.datasets[1].data.length].x = moment();
  myChart.update();
}, 60000);


document.querySelector('.entry-btn').addEventListener('click', function (event) {
  var row = document.querySelector('.entry-tbl').insertRow(0);
  var cell = row.insertCell();
  cell.innerHTML = '<td><input type="number" name="amount"></td>';
  var cell = row.insertCell();
  cell.innerHTML = '<td><input type="time" name="time"></td>';
  var cell = row.insertCell();
  cell.innerHTML = '<td><button class="row-delete">X</td>';


  var cell = row.insertCell();
  cell.innterHTML = '<td><input type="number" name="amount"></td>';
});