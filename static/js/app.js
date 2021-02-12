// from data.js
var tableData = data;

// YOUR CODE HERE!
const body = d3.select("tbody");

function popData(data) {
body.html("");

data.forEach((dataRow) => {
    const row = body.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
});//End Object.values(dataRow).forEach((val)
});//end data.forEach((dataRow) 
}//end function popData(data) 

function onClick() {
const date = d3.select("#datetime").property("value");
var filteredData = tableData;

if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
}

popData(filteredData);
}//end function onClick() 

d3.selectAll("#filter-btn").on("click", onClick);

popData(tableData);
