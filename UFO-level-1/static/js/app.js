// from data.js
var tableData = data;


var dataList = data.filter(function (e) {
  return (e.datetime || e.city || e.state || e.country || e.shape || e.comments);
})
console.table(dataList);
var tbody =  d3.select("tbody");


 // BONUS: Refactor to use Arrow Functions!

dataList.forEach((element) => {
  var row = tbody.append("tr");
  Object.entries(element).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
}); 


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

var inputValue = "";

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node

  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

 


  // Get the value property of the input element
  if (inputElementDate) {
     inputValue = inputElementDate.property("value");
     console.log(inputValue);
     var filteredData = dataList.filter(element => element.datetime === inputValue);
     console.log(filteredData);

     filteredData.forEach((element) => {
      var row = tbody.append("tr");
      Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };

  if (inputElementCity) {
    inputValue = inputElementCity.property("value");
    console.log(inputValue);
    var filteredData = dataList.filter(element => element.city === inputValue);
    console.log(filteredData);

    filteredData.forEach((element) => {
      var row = tbody.append("tr");
      Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };

  if (inputElementState) {
    inputValue = inputElementState.property("value");
    console.log(inputValue);
    var filteredData = dataList.filter(element => element.state === inputValue);
    console.log(filteredData);

    filteredData.forEach((element) => {
      var row = tbody.append("tr");
      Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };

  if (inputElementCountry) {
    inputValue = inputElementCountry.property("value");
    console.log(inputValue);
    var filteredData = dataList.filter(element => element.country === inputValue);
    console.log(filteredData);

    filteredData.forEach((element) => {
      var row = tbody.append("tr");
      Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };

  if (inputElementShape) {
    inputValue = inputElementShape.property("value");
    console.log(inputValue);
    var filteredData = dataList.filter(element => element.shape === inputValue);
    console.log(filteredData);

    filteredData.forEach((element) => {
      var row = tbody.append("tr");
      Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
}