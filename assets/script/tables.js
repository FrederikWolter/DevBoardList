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
                resizable: false,
                rowHandle: true,
                headerSort: false,
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
                frozen: true,
                resizable: false,
                rowHandle: true,
                headerSort: false,
                hozAlign: "center",
                formatter: formatterImage,
                formatterParams: {
                    urlPrefix: "./assets/boards/",
                    urlSuffix: "_board_1.jpg",
                    width: "100px",
                    height: "50px",
                    loading: "lazy",
                    cssClass: "object-fit-contain",     // https://getbootstrap.com/docs/5.3/utilities/object-fit/
                },
            },
            {
                title: "ImageSrc",
                field: "imageSrc",
                visible: false,
            },
            {   // GENERAL
                title: "General",
                columns: [
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
                            symbol: ["Pin", "Pins"],
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
                            symbol: ["Pin", "Pins"],
                            base: 1,
                        }
                    },
                    {
                        title: "Connector",
                        field: "connector",
                        visible: true,
                    },
                    {
                        title: "Docs",
                        field: "id",
                        visible: true,
                        resizable: false,
                        headerSort: false,
                        hozAlign: "center",
                        formatter: formatterLink,
                        formatterParams: {
                            urlPrefix: "./assets/boards/",
                            urlSuffix: "_datasheet_1.pdf",
                            target: "_blank",
                            label: "<i class='bi bi-file-earmark-ruled'></i>",
                            // cssClass: "btn",
                        }
                    },
                    {
                        title: "DocsSrc",
                        field: "docsSrc",
                        visible: false,
                    },
                ],
            },
            {   // CONTROLLER
                title: "Controller",
                columns: [
                    {
                        title: "Chip",
                        field: "chip",
                        visible: true,
                    },
                    {
                        title: "Docs",
                        field: "chip",
                        visible: true,
                        resizable: false,
                        headerSort: false,
                        hozAlign: "center",
                        formatter: formatterLink,
                        formatterParams: {
                            urlPrefix: "./assets/chips/",
                            urlSuffix: "_datasheet_1.pdf",
                            target: "_blank",
                            label: "<i class='bi bi-file-earmark-ruled'></i>",
                            // cssClass: "btn",
                        }
                    },
                    {
                        title: "cDocsSrc",
                        field: "cDocsSrc",
                        visible: false,
                    },
                    {
                        title: "Clock",
                        field: "clock",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: {
                            precision: 1,
                            thousand: ".",
                            decimal: ",",
                            symbol: ["Hz", "KHz", "MHz", "GHz"],
                            base: 1000,
                            cut: 750,
                        }
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
                            thousand: ".",
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
                            thousand: ".",
                            decimal: ",",
                            symbol: "V",
                        }
                    },
                ],
            },
            {   // STORAGE
                title: "Storage",
                columns: [
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
                ],
            },
            {   // PINS
                title: "Pins",
                columns: [
                    {
                        title: "Pinout",
                        field: "id",
                        visible: true,
                        resizable: false,
                        headerSort: false,
                        hozAlign: "center",
                        formatter: formatterImage,
                        formatterParams: {
                            urlPrefix: "./assets/boards/",
                            urlSuffix: "_pinout_1.jpg",
                            height: "50px",
                            width: "50px",
                            loading: "lazy",
                            cssClass: "object-fit-contain",     // https://getbootstrap.com/docs/5.3/utilities/object-fit/
                        },
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
                ],
            },
            {   // CONNECTIVITY
                title: "Connectivity",
                columns: [
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
                        field: "castellatedEdge",
                        visible: true,
                        formatter: "tickCross",
                        formatterParams: {
                            allowEmpty: true,
                            allowTruthy: true,
                        }
                    },
                ],
            },
            {   // MISCELLANEOUS
                title: "Miscellaneous",
                columns: [
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
            },
        ],
    });
}
// TODO implement nested data e.g. for controllers https://tabulator.info/docs/6.2/columns#field-nesting
// TODO custom sort icon in header? https://icons.getbootstrap.com/icons/caret-up/ https://icons.getbootstrap.com/icons/caret-up-fill/
// TODO filtering https://tabulator.info/docs/6.2/options#filter
// TODO add row grouping option e.g. for controller column: https://tabulator.info/docs/6.2/options#group
// TODO setup persistance? https://tabulator.info/docs/6.2/persist
// TODO add selection? https://tabulator.info/docs/6.2/range#clipboard
// TODO add big image view (possibly with multiple images) https://stackoverflow.com/a/76806304


// TODO https://tabulator.info/docs/6.2/options#print
// TODO https://tabulator.info/docs/6.2/options#menu
// TODO https://tabulator.info/docs/6.2/options#popup
// TODO https://tabulator.info/docs/6.2/options#find-table
// TODO https://tabulator.info/docs/6.2/options#default

// #region formatters

/**
 * Custom Formatter for handling advanced links (e.g. icons).
 * @param {CellComponent} cell component of cell.
 * @param {object} params parameters set for formatter.
 * @param {Callback} onRendered callback when formatter has been rendered.
 * @returns {HTMLAnchorElement} formatted link element.
 */
const formatterLink = function (cell, params, onRendered) {
    const {
        urlPrefix = "",
        urlSuffix = "",
        download,
        target,
        type,
        label,
        cssClass,
    } = params;

    const el = document.createElement("a")
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

// TODO specify params in jsDocs
// TODO use srcset and sizes https://www.google.com/search?client=firefox-b-d&q=img+srcset
/**
 * Custom Formatter for handling advanced images.
 * @param {CellComponent} cell component of cell.
 * @param {object} params parameters set for formatter.
 * @param {Callback} onRendered callback when formatter has been rendered.
 * @returns {HTMLImageElement} formatted img element.
 */
function formatterImage(cell, params, onRendered) {
    const {
        urlPrefix = "",
        urlSuffix = "",
        width,
        height,
        alt,
        loading = "eager",
        srcset,
        sizes,
        cssClass
    } = params;

    const el = document.createElement("img");
    el.src = urlPrefix + cell.getValue() + urlSuffix;

    if (width)
        el.style.width = width;

    if (height)
        el.style.height = height;

    if (alt)
        el.alt = alt;

    if (loading)
        el.loading = loading;

    if (srcset)
        el.srcset = srcset;

    if (sizes)
        el.sizes = sizes;

    if (cssClass)
        el.className = cssClass;

    el.addEventListener("load", () => cell.getRow().normalizeHeight());

    return el;
}

/**
 * Custom Formatter for handling measured values and their order of magnitude.
 * @param {CellComponent} cell component of cell.
 * @param {object} params parameters set for formatter.
 * @param {Callback} onRendered callback when formatter has been rendered.
 * @returns {string} formatted string.
 */
const formatterUOM = function (cell, params, onRendered) {
    let {
        base = 0,
        cut = base,
        precision = false,
        decimal = ".",
        thousand = ",",
        symbol = "",
    } = params;

    let value = parseFloat(cell.getValue());

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

    value = applyPrecision(value, precision);
    value = applyDecimalSeparator(value, decimal);
    value = applyThousandSeparator(value, thousand, decimal);

    return value + symbol;
}

// #endregion


// #region helpers

/**
 * Applies a given precision to a numeric value.
 * @param {number} value numeric value to which precision will be applied.
 * @param {number|false} precision number of decimal digits (false skips precision).
 * @returns {string} numeric string with specified precision applied.
 */
function applyPrecision(value, precision) {
    if (precision !== false) {
        return value.toFixed(precision);
    }
    return String(value);
}

/**
 * Applies a given decimal separator to a numeric string.
 * @param {string} value numeric string to which separator will be applied.
 * @param {string|false} sep used decimal separator (false skips separator).
 * @returns {string} numeric string with separator applied.
 */
function applyDecimalSeparator(value, sep) {
    if (sep !== false) {
        return value.replace(".", sep);
    }
    return value;
}

/**
 * Applies a given thousand separator to a numeric string.
 * @param {string} value numeric string to which separator will be applied.
 * @param {string|false} sep used thousand separator (false skips separator).
 * @param {string|false} decimal present decimal point in value.
 * @returns {string} numeric string with separator applied.
 */
function applyThousandSeparator(value, sep, decimal) {
    decimal = decimal || ".";
    // see https://stackoverflow.com/a/2901298
    const rgx = new RegExp(`\\B(?<!${"\\" + decimal}\\d*)(?=(\\d{3})+(?!\\d))`, "g");

    if (sep !== false) {
        value = value.replace(rgx, sep);
    }
    return value;
}

// #endregion

// // @ts-check
// import { Tabulator } from "tabulator-tables";