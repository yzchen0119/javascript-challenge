// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var thead = d3.select("thead");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var theaders = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"]
var button = d3.select("#filter-btn");
var resetbtn = d3.select("#reset-btn");

var renderTable = (dataInput) => {

	var headrow = thead.append("tr");
	theaders.forEach(header => headrow.append("th").text(header));
	
	dataInput.forEach(ufo_sighting => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sighting[column]))
	});
};

renderTable(tableData);


button.on("click", () => {
	d3.event.preventDefault();
	
	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");
	
	// Get the value property of the input element
	var inputDate = inputElement.property("value");
	
	var filteredData = tableData.filter(ufodata => ufodata.datetime === inputDate);
	console.log(filteredData);
	
	// render filtered data to table
	thead.html("");
 	tbody.html("");
	if (filteredData.length !== 0) {
		renderTable(filteredData);
	} else {
		tbody.append("tr").append("td").text("No results found!");
		document.getElementsByTagName("td")[0].style.fontSize = "xx-large";
	}
	

})


resetbtn.on("click",() => {
	thead.html("");
	tbody.html("");
	renderTable(tableData);
})

