//U99350821
// function to load data from the CSV file
function loadData() {
    // Use d3.dsv to fetch data from the CSV file
    d3.dsv(",", "data/purchase_orders.csv").then(function(data) {
        // Selecting the <ul> element to which we will append <li> elements
        const ul = d3.select("#purchaseOrders");

        // Dynamically creating <li> elements for each purchase order
        ul.selectAll("li")
            .data(data)
            .enter()
            .append("li")
            .text(function(d) {
                // Format the text content of each <li> element
                return `${d.customerName} - Order ${d.orderId}: $${d.purchaseAmount}`;
            });
    }).catch(function(error) {
        console.error("Error loading the data:", error);
    });
}

// Calling the loadData function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadData);
