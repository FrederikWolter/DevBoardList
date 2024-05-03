/*
 * File containing functionality about tabulator integration.
 */


// // @ts-check
// import { Tabulator } from "tabulator-tables";


function loadBoardTable(){
    // Initialize Tabulator
    var table = new Tabulator("#board-table", {
        // Define table configuration options here
        layout: "fitColumns", // Automatically fit columns to width of container
        pagination: true, // Enable pagination
        paginationSize: 5, // Set number of rows per page
        data: [ // Example data
            {id: 1, name: "John", age: 30},
            {id: 2, name: "Jane", age: 25},
            {id: 3, name: "Doe", age: 40},
            {id: 4, name: "Alice", age: 35},
            {id: 5, name: "Bob", age: 28},
            // Add more data objects as needed
        ],
        columns: [ // Define table columns
            {title: "ID", field: "id"},
            {title: "Name", field: "name", width: 200},
            {title: "Age", field: "age", hozAlign: "left", sorter: "number"},
            // Add more columns as needed
        ],
    });
}
