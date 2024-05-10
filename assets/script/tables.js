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
        initialSort: [{ column: "name", dir: "asc" }],
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
                field: "id",
                visible: true,
                resizable: false,
                frozen: true,
                rowHandle: true,
                headerSort: false,
                hozAlign: "center",
                formatter: "image",
                formatterParams: {
                    height: "50px",
                    width: "100px",
                    urlPrefix: "./assets/boards/",
                    urlSuffix: "_1.jpg",
                },
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
                resizable: false,
                headerSort: false,
                hozAlign: "center",
                formatter: formatterLink,
                formatterParams: {
                    urlPrefix: "",
                    urlSuffix: "",
                    target: "_blank",
                    label: "<i class='bi bi-box-arrow-up-right'></i>",
                    // cssClass: "btn",
                }
            },
            {
                title: "Price",
                field: "price",
                visible: true,
                formatter: "money",
                formatterParams: {
                    decimal: ",",
                    thousand: ".",
                    symbol: "€",
                    symbolAfter: true,
                    negativeSign: "-",
                    precision: 1,
                }
            },
            {
                title: "Width",
                field: "dimX",
                visible: true,
                formatter: formatterUOM,
                formatterParams: {
                    precision: 0,
                    symbol: [" Pin", " Pins"],
                    base: 1,
                }
            },
            {
                title: "Height",
                field: "dimY",
                visible: true,
                formatter: formatterUOM,
                formatterParams: {
                    precision: 0,
                    symbol: [" Pin", " Pins"],
                    base: 1,
                }
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
                formatter: formatterUOM,
                formatterParams: {
                    precision: false,
                    decimal: ",",
                    symbol: "V",
                }
            },
            {
                title: "VoltIn",
                field: "voltIn",
                visible: true,
                formatter: formatterUOM,
                formatterParams: {
                    precision: false,
                    decimal: ",",
                    symbol: "V",
                }
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
                formatter: formatterUOM,
                formatterParams: {
                    precision: 1,
                    thousand: ".",
                    decimal: ",",
                    symbol: ["B", "KB", "MB", "GB", "TB"],
                    base: 1024,
                    cut: 768,
                }
            },
            {
                title: "FlashFree",
                field: "sizeFlashFree",
                visible: true,
                formatter: formatterUOM,
                formatterParams: {
                    precision: 1,
                    thousand: ".",
                    decimal: ",",
                    symbol: ["B", "KB", "MB", "GB", "TB"],
                    base: 1024,
                    cut: 768,
                }
            },
            {
                title: "RAM",
                field: "sizeRAM",
                visible: true,
                formatter: formatterUOM,
                formatterParams: {
                    precision: 1,
                    thousand: ".",
                    decimal: ",",
                    symbol: ["B", "KB", "MB", "GB", "TB"],
                    base: 1024,
                    cut: 768,
                }
            },
            {
                title: "EPROM",
                field: "sizeEPROM",
                visible: true,
                formatter: formatterUOM,
                formatterParams: {
                    precision: 1,
                    thousand: ".",
                    decimal: ",",
                    symbol: ["B", "KB", "MB", "GB", "TB"],
                    base: 1024,
                    cut: 768,
                }
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
                title: "Castl.",
                field: "castellatedEdge",
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
                formatter: "textarea",
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
// TODO fix image scaling https://getbootstrap.com/docs/5.3/utilities/object-fit/
// TODO add bit image view (possibly with multiple images) https://stackoverflow.com/a/76806304


// TODO https://tabulator.info/docs/6.2/options#print
// TODO https://tabulator.info/docs/6.2/options#menu
// TODO https://tabulator.info/docs/6.2/options#popup
// TODO https://tabulator.info/docs/6.2/options#find-table
// TODO https://tabulator.info/docs/6.2/options#default

// #region formatters

/**
 * Custom Formatter for handling advanced links (e.g. icons).
 * @param {CellComponent} cell component of cell.
 * @param {{}} formatterParams parameters set for formatter.
 * @param {EmptyCallback} onRendered function to call when formatter has been rendered.
 * @returns {HTMLAnchorElement} formatted link element.
 */
const formatterLink = function (cell, formatterParams, onRendered) {
    let urlPrefix = formatterParams.urlPrefix || "";
    let urlSuffix = formatterParams.urlSuffix || "";
    let download = formatterParams.download;
    let target = formatterParams.target;
    let type = formatterParams.type;
    let label = formatterParams.label;
    let cssClass = formatterParams.cssClass;

    let el = document.createElement("a")
    el.href = urlPrefix + cell.getValue() + urlSuffix;
    el.innerHTML = label;

    if (target)
        el.target = target;

    if (type)
        el.type = type;

    if (download)
        el.download = download === true ? "" : download;

    if (cssClass)
        el.className = cssClass;

    return el;
}


/**
 * Custom Formatter for handling measured values and their order of magnitude.
 * @param {CellComponent} cell component of cell.
 * @param {{}} formatterParams parameters set for formatter.
 * @param {EmptyCallback} onRendered function to call when formatter has been rendered.
 * @returns {string} formatted string.
 */
const formatterUOM = function (cell, formatterParams, onRendered) {
    let value = parseFloat(cell.getValue());
    let base = formatterParams.base;
    let cut = formatterParams.cut || base;
    let precision = formatterParams.precision || false;
    let decimal = formatterParams.decimal || ".";
    let thousand = formatterParams.thousand || ",";
    let symbol = formatterParams.symbol || "";

    if (isNaN(value))
        return "ERROR";

    if (base === 1)
        symbol = value === 1 ? symbol[0] : symbol[1];

    if (base > 1) {
        let index = 0;
        while (value >= base && index < symbol.length - 1) {
            value /= base;
            index++;
        }
        if (value >= cut && index < symbol.length - 1) {
            value /= base;
            index++;
        }
        symbol = symbol[index];
    }

    if (precision !== false)
        value = value.toFixed(precision)

    if (decimal !== false)
        value = String(value).replace(".", decimal);

    if (thousand !== false) {
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(value))
            value = value.replace(rgx, "$1" + thousand + "$2");
    }

    return value + symbol;
}

// #endregion

// // @ts-check
// import { Tabulator } from "tabulator-tables";