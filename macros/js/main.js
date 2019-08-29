window.isUpdateAvailable = new Promise(function(resolve, reject) {
	// lazy way of disabling service workers while developing
	if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
		// register service worker file
		navigator.serviceWorker.register('service-worker.js')
			.then(reg => {
				reg.onupdatefound = () => {
					const installingWorker = reg.installing;
					installingWorker.onstatechange = () => {
						switch (installingWorker.state) {
							case 'installed':
								if (navigator.serviceWorker.controller) {
									// new update available
									resolve(true);
								} else {
									// no update available
									resolve(false);
								}
								break;
						}
					};
				};
			})
			.catch(err => console.error('[SW ERROR]', err));
	}
});

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

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

function displayNotification(message) {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'message',
        icon: './img/icons/icon-72x72.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification('Hello world!', options);
    });
  }
}

window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			displayNotification('update available!')
		}
	});

document.querySelector('#push').addEventListener('click', function( event ) {
  displayNotification()
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
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: moment().format(),
          borderColor: "#0065ad",
          label: "now"
        }
      ]
    }
  }
});


window.setInterval(function() {
  myChart.options.annotation.annotations[0].value = moment().format();
  myChart.data.datasets[1].data[myChart.data.datasets[1].data.length].x = moment();
  myChart.update();
}, 30000);
