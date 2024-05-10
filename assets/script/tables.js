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
        /** Set layout to fit columns to data. @see https://tabulator.info/docs/6.2/layout#layout */
        layout: "fitDataFill",
        /** Set responsive behavior of table. @see https://tabulator.info/docs/6.2/layout#responsive */
        responsiveLayout: false,
        /** Set rows to be movable. @see https://tabulator.info/docs/6.2/move */
        movableRows: true,
        /** Set columns to be movable. @see https://tabulator.info/docs/6.2/move */
        movableColumns: true,
        /** Set nested field separator. @see https://tabulator.info/docs/6.2/columns#field-nesting */
        nestedFieldSeparator: ".",
        /** Set row header. @see https://tabulator.info/docs/6.2/layout#row-header */
        rowHeader: false,
        /** Set initial sort. @see https://tabulator.info/docs/6.2/sort#initial */
        initialSort: [{column: "name", dir: "asc"}],
        /** Set header sort icon. @see https://tabulator.info/docs/6.2/sort#icon */
        headerSortElement: "<div class='tabulator-arrow'></div>",
        /** Set clickable element. @see https://tabulator.info/docs/6.2/sort#header */
        headerSortClickElement: "header",
        /** Set multi sort to enable. @see https://tabulator.info/docs/6.2/sort#header */
        columnHeaderSortMulti: true,
        /** Set pagination enabled. @see https://tabulator.info/docs/6.2/page#local */
        pagination: true,
        /** Set initial pagination size. @see https://tabulator.info/docs/6.2/page#local */
        paginationSize: 10,
        /** Set pagination size steps. @see https://tabulator.info/docs/6.2/page#local */
        paginationSizeSelector: [10, 25, 50, true],
        /** Set clipboard behavior. @see https://tabulator.info/docs/6.2/clipboard */
        clipboard: "copy",
        /** Set unique index. @see https://tabulator.info/docs/6.2/data#row-index */
        index: "id",
        /** Set empty table text. @see https://tabulator.info/docs/6.2/layout#placeholder */
        placeholder: tblEMPTY,
        /** Set no filter result text. @see https://tabulator.info/docs/6.2/layout#placeholder */
        placeholderHeaderFilter: tblNO_MATCH,
        /** Set data. @see https://tabulator.info/docs/6.2/data#array */
        data: getBoards(),
        /** Set column defaults. @see https://tabulator.info/docs/6.2/columns#defaults */          
        columnDefaults: {},
        /** Set column definition. @see https://tabulator.info/docs/6.2/columns */               
        columns: [
            {
                title: "ID",
                field: "id",
                visible: false,
                frozen: true,
            },
            {
                title: "Name",
                field: "name",
                visible: true,
                frozen: true,
                rowHandle: true,
            },
            {
                title: "Image",
                field: "image",
                visible: true,
                hozAlign: "center",
                resizable: false,
                frozen: true,
                rowHandle: true,
                headerSort: false,
            },
            {
                title: "ImageSrc",
                field: "imageSrc",
                visible: false,
            },
            {
                title: "Link",
                field: "link",
                visible: true,
            },
            {
                title: "Price",
                field: "price",
                visible: true,
            },
            {
                title: "Width",
                field: "dimX",
                visible: true,
            },
            {
                title: "Height",
                field: "dimY",
                visible: true,
            },
            {
                title: "Datasheet",
                field: "datasheet",
                visible: true,
                hozAlign: "center",
                resizable: false,
            },
            {
                title: "DatasheetSrc",
                field: "datasheetSrc",
                visible: false,
            },
            {
                title: "Controller",
                field: "controller",
                visible: true,
            },
            {
                title: "Datasheet",
                field: "cDatasheet",
                visible: true,
                hozAlign: "center",
                resizable: false,
            },
            {
                title: "DatasheetSrc",
                field: "cDatasheetSrc",
                visible: false,
            },
            {
                title: "Clock",
                field: "clock",
                visible: true,
            },
            {
                title: "Cores",
                field: "coreCnt",
                visible: true,
            },
            {
                title: "CoreBit",
                field: "coreBit",
                visible: true,
            },
            {
                title: "VoltOp",
                field: "voltOp",
                visible: true,
            },
            {
                title: "VoltIn",
                field: "voltIn",
                visible: true,
            },
            {
                title: "Connector",
                field: "connector",
                visible: true,
            },
            {
                title: "Flash",
                field: "sizeFlash",
                visible: true,
            },
            {
                title: "FlashFree",
                field: "sizeFlashFree",
                visible: true,
            },
            {
                title: "RAM",
                field: "sizeRAM",
                visible: true,
            },
            {
                title: "EPROM",
                field: "sizeEPROM",
                visible: true,
            },
            {
                title: "Pinout",
                field: "pinout",
                visible: true,
                hozAlign: "center",
                resizable: false,
            },
            {
                title: "PinoutSrc",
                field: "pinoutSrc",
                visible: false,
            },
            {
                title: "GPIO",
                field: "cntGPIO",
                visible: true,
            },
            {
                title: "Digital",
                field: "cntDigital",
                visible: true,
            },
            {
                title: "Analog",
                field: "cntAnalog",
                visible: true,
            },
            {
                title: "AnalogBit",
                field: "analogBit",
                visible: true,
            },
            {
                title: "PWM",
                field: "cntPWM",
                visible: true,
            },
            {
                title: "UART",
                field: "laneUART",
                visible: true,
            },
            {
                title: "I2C",
                field: "laneI2C",
                visible: true,
            },
            {
                title: "SPI",
                field: "laneSPI",
                visible: true,
            },
            {
                title: "Protocol",
                field: "protocol",
                visible: true,
            },
            {
                title: "Edge",
                field: "edgeCut",
                visible: true,
            },
            {
                title: "Platform",
                field: "platform",
                visible: true,
            },
            {
                title: "Comment",
                field: "comment",
                visible: true,
            },
        ],
    });
}
// TODO add column grouping https://tabulator.info/docs/6.2/columns#groups
// TODO implement nested data e.g. for controllers https://tabulator.info/docs/6.2/columns#field-nesting
// TODO custom formatter for human readable storageSpace
// TODO custom sort icon in header? https://icons.getbootstrap.com/icons/caret-up/ https://icons.getbootstrap.com/icons/caret-up-fill/
// TODO filtering https://tabulator.info/docs/6.2/options#filter
// TODO add grouping option e.g. for controller column: https://tabulator.info/docs/6.2/options#group
// TODO setup persistance? https://tabulator.info/docs/6.2/persist
// TODO add selection? https://tabulator.info/docs/6.2/range#clipboard

// TODO https://tabulator.info/docs/6.2/options#print
// TODO https://tabulator.info/docs/6.2/options#menu
// TODO https://tabulator.info/docs/6.2/options#popup
// TODO https://tabulator.info/docs/6.2/options#find-table
// TODO https://tabulator.info/docs/6.2/options#default

// // @ts-check
// import { Tabulator } from "tabulator-tables";