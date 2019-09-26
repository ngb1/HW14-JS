// from data.js
var tableData = data;

// Check for available dates
// A dropdown list of dates could be created
//console.log(tableData);
// Start populating table with all dates, user can look at available dates in this step
d3.select("tbody").selectAll("tr").data(tableData)
.enter().append("tr").html(function(d) {
return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
});

// enable button to filter data by date
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//  console.log(tableData);
// });
  // Apply filter for specific dates
  var filteredData = tableData.filter(table => table.datetime === inputValue);

  console.log(filteredData);

  // remove any children from the table
  d3.select("tbody").html("");

  // Then, select the unordered table element by class name
  d3.select("tbody").selectAll("tr").data(filteredData)
    .enter().append("tr").html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });
});
