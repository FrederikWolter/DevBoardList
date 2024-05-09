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
        data: getBoards(),                  // set data (see https://tabulator.info/docs/6.2/data#array)
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


// // @ts-check
// import { Tabulator } from "tabulator-tables";