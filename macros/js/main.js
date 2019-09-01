window.addEventListener('load', event => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('service-worker.js');
    } catch (error) {
      console.log('service worker failed.')
    }
  }
});

const db = new Dexie('macro-data');
db.version(1).stores({ info: '++id, time, amount' });
//db.info.put({'time': new Date().valueOf(), 'amount': 50});

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

// var userData = getUserData();
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
      data: [],
      lineTension: 0,
      fill: false,
      label: "actual",
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

function updateChart() {
  var start = moment().startOf('day').valueOf();
  var end = moment().endOf('day').valueOf();
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
      userData.push({x: moment(), y: lastValue})
      myChart.data.datasets[1].data = userData;
      myChart.update();
  });
};
updateChart();

function updateDbValue(id, amount, time) {
  info = {};
  if (amount == -1 && time == -1) {
    return;
  }
  if (amount != -1) {
    info.amount = amount;
  }
  if (time != -1) {
    info.time = time;
  }
  db.info.update(id, info).then( function() {
    updateChart();
  });
};

function addNewRow(time, amount=0) {
  db.info.add({time: time.valueOf(), amount: amount})
    .then( function(index) {
      var row = document.querySelector('.entry-tbl').insertRow(0);
      row.id = `row${index}`
      var cell = row.insertCell();
      cell.innerHTML = '<td><input type="number" name="amount"></td>';
      if (amount) { cell.children[0].value = amount; }
      var cell = row.insertCell();
      cell.innerHTML = '<td><input type="time" name="time"></td>';
      cell.children[0].value = time.format('HH:mm');
      var cell = row.insertCell();
      cell.innerHTML = '<td><button class="del-btn">X</td>';
      document.querySelector('.del-btn').addEventListener('dblclick', function (event) {
        row = event.target.parentNode.parentNode;
        db.info.delete(Number(row.id.slice(3, row.id.length)))
        row.remove();
        updateChart();
      })
      row.children[0].children[0].addEventListener('input', function (event) {
        updateDbValue(index, amount=event.target.value, time=-1);
      })
      row.children[1].children[0].addEventListener('input', function (event) {
        time = moment(event.target.value, 'HH:mm').valueOf();
        updateDbValue(index, amount=-1, time=time);
      })
    });
}

function initTable() {
  var start = moment().startOf('day').valueOf();
  var end = moment().endOf('day').valueOf();
  db.info.where('time').between(start, end).toArray()
    .then( function(data) {
      for (i=0; i<data.length; i++) {
        var amount = data[i].amount;
        var time = moment(data[i].time);
        var index = data[i].id;
        var row = document.querySelector('.entry-tbl').insertRow(0);
        row.id = `row${index}`
        var cell = row.insertCell();
        cell.innerHTML = '<td><input type="number" name="amount"></td>';
        if (amount) { cell.children[0].value = amount; }
        var cell = row.insertCell();
        cell.innerHTML = '<td><input type="time" name="time"></td>';
        cell.children[0].value = time.format('HH:mm');
        var cell = row.insertCell();
        cell.innerHTML = '<td><button class="del-btn">X</td>';
        document.querySelector('.del-btn').addEventListener('dblclick', function (event) {
          row = event.target.parentNode.parentNode;
          db.info.delete(Number(row.id.slice(3, row.id.length)))
          row.remove();
          updateChart();
        })
        row.children[0].children[0].addEventListener('input', function (event) {
          var rowId = event.target.parentNode.parentNode.id;
          thisIndex = Number(rowId.slice(3, rowId.length));
          updateDbValue(thisIndex, amount=event.target.value, time=-1);
        })
        row.children[1].children[0].addEventListener('input', function (event) {
          var rowId = event.target.parentNode.parentNode.id;
          thisIndex = Number(rowId.slice(3, rowId.length));
          time = moment(event.target.value, 'HH:mm').valueOf();
          updateDbValue(thisIndex, amount=-1, time=time);
        })
      }
    });
};
initTable();

window.setInterval(function () {
  myChart.options.annotation.annotations[0].value = moment().format();
  myChart.data.datasets[1].data[myChart.data.datasets[1].data.length].x = moment();
  myChart.update();
}, 60000);

var rownum = 1;
document.querySelector('.entry-btn').addEventListener('click', function (event) {
  addNewRow(moment(new Date()));
});
