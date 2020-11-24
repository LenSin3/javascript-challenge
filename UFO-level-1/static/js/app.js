// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.table each UFO sighting
data.forEach(element => {
    console.table(element);
    // // Append 'tr' elements to the tbody
    var row = tbody.append('tr');
    // // Use `Object.entries` to console.log each UFO Sighting
    Object.entries(data).forEach((key, value) => console.log([key, value]));
    // // Append cell to each row for each value
    var cell = row.append("td");
});