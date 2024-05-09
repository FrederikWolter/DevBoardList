/**
 * File containing tabulator definition.
 */

/**
 * Function loading board tabulator table into given div element.
 * @param {HTMLDivElement} element div into which table will be loaded.
 * @returns {Tabulator} tabulator instance representing loaded table.
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
// TODO add column grouping https://tabulator.info/docs/6.2/columns#groups
// TODO implement nested data e.g. for controllers https://tabulator.info/docs/6.2/columns#field-nesting
// TODO custom formatter for human readable storageSpace

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


// // @ts-check
// import { Tabulator } from "tabulator-tables";