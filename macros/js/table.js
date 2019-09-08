document.querySelector('.entry-btn').addEventListener('click', function (event) {
  date = currentDay.format('YYYY-MM-DD');
  time = moment(date + " " + event.target.value);
  addNewRow(time=time, amount=0);
});

function addNewRow(time = moment(new Date()), amount = 0) {
  db.info.add({
      time: time.valueOf(),
      amount: amount
    })
    .then(function (index) {
      var row = document.querySelector('.entry-tbl').insertRow(0);
      row.id = `row${index}`
      var cell = row.insertCell();
      cell.innerHTML = '<td><input type="number" name="amount"></td>';
      if (amount) {
        cell.children[0].value = amount;
      }
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
        updateDbValue(index, amount = event.target.value, time = -1);
      })
      row.children[1].children[0].addEventListener('input', function (event) {
        date = currentDay.format('YYYY-MM-DD');
        time = moment(date + " " + event.target.value).valueOf();
        console.log(time);
        updateDbValue(index, amount = -1, time = time);
      })
    });
}

function updateTable() {
  $('.entry-tbl tr').remove();
  var start = currentDay.startOf('day').valueOf();
  var end = currentDay.endOf('day').valueOf();

  db.info.where('time').between(start, end).toArray()
    .then(function (data) {
      for (i = 0; i < data.length; i++) {
        var amount = data[i].amount;
        var time = moment(data[i].time);
        var index = data[i].id;
        var row = document.querySelector('.entry-tbl').insertRow(0);
        row.id = `row${index}`
        var cell = row.insertCell();
        cell.innerHTML = '<td><input type="number" name="amount"></td>';
        if (amount) {
          cell.children[0].value = amount;
        }
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
          updateDbValue(thisIndex, amount = event.target.value, time = -1);
        })
        row.children[1].children[0].addEventListener('input', function (event) {
          var rowId = event.target.parentNode.parentNode.id;
          thisIndex = Number(rowId.slice(3, rowId.length));
          date = currentDay.format('YYYY-MM-DD');
          time = moment(date + " " + event.target.value).valueOf();
          console.log(time);
          updateDbValue(thisIndex, amount = -1, time = time);
        })
      }
    });
};
updateTable();