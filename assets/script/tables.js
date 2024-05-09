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
        layout: "fitColumns",               // ## auto fit columns to width of container
        pagination: true,                   // ## enable pagination
        paginationSize: 10,                 // ## set number of rows per page
        index: "id",                        // set unique index (see https://tabulator.info/docs/6.2/data#row-index)
        placeholder: TBL_PLACEHOLDER,       // set empty table text (see https://tabulator.info/docs/6.2/layout#placeholder)
        data: getBoards(),                  // set data (see https://tabulator.info/docs/6.2/data#array)
        columns: [                          // set columns (see https://tabulator.info/docs/6.2/columns)
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
            },
            {
                title: "Image",
                field: "image",
                visible: true,
                hozAlign: "center",
                resizable: false,
                frozen: true,
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


// // @ts-check
// import { Tabulator } from "tabulator-tables";