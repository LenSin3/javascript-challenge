// from data.js
var tableData = data;

// Extract data for the table columns `date/time`, `city`, `state`, `country`, `shape`, and `comment`
// var dataList = []

/* data.forEach((element) => {
  

  dataList.push(element.datetime);
  dataList.push(element.city);
  dataList.push(element.state);
  dataList.push(element.country);
  dataList.push(element.shape);
  dataList.push(element.comments);


  
}); */

var dataList = data.filter(function (e) {
  return (e.datetime || e.city || e.state || e.country || e.shape || e.comments);
})
console.table(dataList);
var tbody =  d3.select("tbody");
/* data.map(element => {
    dataList.push(datetime);
    dataList.push(city);
    dataList.push(state);
    dataList.push(country);
    dataList.push(shape);
    dataList.push(comments);
    
});
console.table(dataList);
// Get a reference to the table body
var tbody = d3.select("tbody");

/* dataList.forEach(function(element) {
  console.log(element);
  
   // // Append 'tr' elements to the tbody
   var row = tbody.append('tr');
   // // Use `Object.entries` to console.log each UFO Sighting
   Object.entries(element).forEach(function([key, value]) {

    console.log(key, value);

    var cell = row.append("td");
       
       // update each cell text with UFO sighting values `date/time`, `city`, `state`, `country`, `shape`, and `comment`
    cell.text(value);


   });
 });
*/
// dataList.forEach(element => {console.table(element);});

// YOUR CODE HERE!
// Get a reference to the table body
// var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.table each UFO sighting
// dataList.forEach(element => {
    
    // // Append 'tr' elements to the tbody
    // var row = tbody.append('tr');
    // // Use `Object.entries` to console.log each UFO Sighting
    // Object.entries(element).forEach(([key, value]) => {


        // var cell = row.append("td");
        // update each cell text with UFO sighting values `date/time`, `city`, `state`, `country`, `shape`, and `comment`
        // cell.text(value);


    // }
    
    
    // );
    

// });


 // BONUS: Refactor to use Arrow Functions!
dataList.forEach((element) => {
  var row = tbody.append("tr");
  Object.entries(element).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
}); 