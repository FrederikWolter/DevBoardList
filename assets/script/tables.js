/**
 * File containing tabulator integration.
 */

/**
 * Function loading board tabulator table into given div element.
 * 
 * @param {HTMLDivElement} element 
 * @returns {Tabulator}
 */
function loadBoardTable(element) {
    // create tabulator object
    return new Tabulator(element, {
        layout: "fitColumns", // Automatically fit columns to width of container
        pagination: true, // Enable pagination
        paginationSize: 5, // Set number of rows per page
        data: boards,
        columns: [
            { title: "ID", field: "id" },
            { title: "Name", field: "name", width: 200 },
            { title: "Age", field: "age", hozAlign: "left", sorter: "number" },
        ],
    });
}

/**
 * List of boards to be displayed in board table.
 */
const boards = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Doe", age: 40 },
    { id: 4, name: "Alice", age: 35 },
    { id: 5, name: "Bob", age: 28 },
]
