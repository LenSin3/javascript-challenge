// from data.js
var tableData = data;

// Extract data for the table columns `date/time`, `city`, `state`, `country`, `shape`, and `comment`
var dataList = []
data.map(element => {
    dataList.push(element.datetime);
    
    dataList.push(element.city);
    dataList.push(element.state);
    dataList.push(element.country);
    dataList.push(element.shape);
    dataList.push(element.comment);
    
});

dataList.forEach(element => {console.table(element);});

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.table each UFO sighting
data.forEach(element => {
    
    // // Append 'tr' elements to the tbody
    var row = tbody.append('tr');
    // // Use `Object.entries` to console.log each UFO Sighting
    Object.entries(element).forEach((key, value) => {


        var cell = row.append("td");
        // update each cell text with UFO sighting values `date/time`, `city`, `state`, `country`, `shape`, and `comment`
        cell.text(value);


    }
    
    
    );
    

});


/* // BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
}); */