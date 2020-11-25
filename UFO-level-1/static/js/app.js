// from data.js
var tableData = data;

// Filter tabledata to extract values for datetime, city, state, country, shape and comments
var dataList = tableData.filter(function (e) {
  return (e.datetime || e.city || e.state || e.country || e.shape || e.comments);
})
console.table(dataList);
var tbody =  d3.select("tbody");

// Create function to display table
var getData = (dataInput) => {
  dataInput.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  }); 
}
// call getData function
getData(dataList);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node

  var inputElementDate = d3.select("#datetime");
  // var inputElementCity = d3.select("#city");
  // var inputElementState = d3.select("#state");
  // var inputElementCountry = d3.select("#country");
  // var inputElementShape = d3.select("#shape");


  // Get the value property of the input element
  var inputValue = inputValue = inputElementDate.property("value").trim();
  console.log(inputValue);
  var filteredData = dataList.filter(dataList => dataList.datetime === inputValue);
  console.log(filteredData);

  tbody.html("");

  let response = {
    filteredData
  };


  if(response.filteredData.length !== 0) {
      getData(filteredData);
  }
  else {
        tbody.append("tr").append("td").text("There are no sightings for the current search criteria. Please try again!");
  }

}