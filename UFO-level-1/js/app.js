// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildtable(data) {
  tbody.html("")
  data.forEach((datarow) => {
    var row = tbody.append("tr");
    console.log(datarow);
    Object.values(datarow).forEach((item, i) => {
      console.log(item);
      var cell = row.append("td");
      cell.text(item);
    });

  });
}

buildtable(tableData);
