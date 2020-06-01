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

function handlesearch() {
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  var filtered_data = tableData;
  if (date !== "" || city !== "" || state !== "" || country !== "" || shape !== "") {
    filtered_data = filtered_data.filter(datarow => datarow.datetime === date || datarow.city === city || datarow.state === state || datarow.country === country || datarow.shape === shape);
  }


  buildtable(filtered_data);
}
d3.selectAll("#filter-btn").on("click", handlesearch);
buildtable(tableData);
