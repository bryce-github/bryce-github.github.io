// register the service worker
window.addEventListener('load', event => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('service-worker.js');
    } catch (error) {
      console.log('service worker failed.')
    }
  }
});

// register the database
const db = new Dexie('macro-data');
db.version(1).stores({ info: '++id, time, amount' });
var currentDay = moment().startOf('day');

// define instance variables
var startTime = '07:00:00';
var endTime = '22:00:00';
var goalAmount = 200;

function getStartTime() {
  date = currentDay.format('YYYY-MM-DD');
  return moment(date + " " + startTime);
}

function getEndTime() {
  date = currentDay.format('YYYY-MM-DD');
  return moment(date + " " + endTime);
}

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
