document.querySelector('.bck-btn').addEventListener('click', function(event) {
  currentDay = currentDay.subtract(1, 'day');
  updateTable();
  updateTimeline();
  updateChart();
});

document.querySelector('.fwd-btn').addEventListener('click', function(event) {
  currentDay = currentDay.add(1, 'day');
  updateTable();
  updateTimeline();
  updateChart();
});

function updateTimeline() {
  document.querySelector('.time').innerHTML =currentDay.format('ddd, MMM Do');
};

updateTimeline();