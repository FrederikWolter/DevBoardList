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
                        formatter: formatterUOM,
                        formatterParams: formatterParamsEUR,
                    },
                    {
                        title: "Width",
                        field: "dimX",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: formatterParamsPin,
                    },
                    {
                        title: "Height",
                        field: "dimY",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: formatterParamsPin,
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
                        formatterParams: formatterParamsFreq,
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
                        formatterParams: formatterParamsVolt,
                    },
                    {
                        title: "VoltIn",
                        field: "voltIn",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: formatterParamsVolt,
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
                        formatterParams: formatterParamsMem,
                    },
                    {
                        title: "FlashFree",
                        field: "sizeFlashFree",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: formatterParamsMem,
                    },
                    {
                        title: "RAM",
                        field: "sizeRAM",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: formatterParamsMem,
                    },
                    {
                        title: "EPROM",
                        field: "sizeEPROM",
                        visible: true,
                        formatter: formatterUOM,
                        formatterParams: formatterParamsMem,
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

// TODO remove unnecessary values like visible: true

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
    el.loading = loading;
    el.className = cssClass;
    el.sizes = sizes;

    el.style.width = width;
    el.style.height = height;

    if (alt)
        el.alt = alt;
    if (srcset)
        el.srcset = srcset;  

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
    const {
        base = 0,
        cut = base,
        symbols = [""],
        locale = "en-US",
        thousand = true,
        minIntegerDigits = 1,
        minFractionDigits = 2,
        maxFractionDigits = 2,
    } = params;

    let value = parseFloat(cell.getValue());
    if (isNaN(value))
        return "NaN";

    let symbol = symbols[0];
    // singular / plural
    if (base === 1)
        symbol = value === 1 ? symbols[0] : symbols[1];
    // order of magnitude
    if (base > 1) {
        let index = 0;
        while (value >= base && index < symbols.length - 1) {
            value /= base;
            index++;
        }
        if (value >= cut && index < symbols.length - 1) {
            value /= base;
            index++;
        }
        symbol = symbols[index];
    }

    value = value.toLocaleString(locale, {
        minimumIntegerDigits: minIntegerDigits,
        minimumFractionDigits: minFractionDigits,
        maximumFractionDigits: maxFractionDigits,
        useGrouping: thousand,
    })

    return value + symbol;
}
// #endregion


// #region formatter params
/**
 * Formatter parameters for Pin UOM.
 */
const formatterParamsPin = {
    base: 1,
    symbols: ["Pin", "Pins"],
    minFractionDigits: 0,
}

/**
 * Formatter parameters for Memory UOM.
 */
const formatterParamsMem = {
    base: 1024,
    cut: 768,
    symbols: ["B", "KB", "MB", "GB", "TB"],
    thousand: true,
    minFractionDigits: 0,
    maxFractionDigits: 1,
}

/**
 * Formatter parameters for Voltage UOM.
 */
const formatterParamsVolt = {
    base: 0,
    symbols: ["V"],
    thousand: true,
    minFractionDigits: 0,
    maxFractionDigits: 1,
}

/**
 * Formatter parameters for Frequency UOM.
 */
const formatterParamsFreq = {
    base: 1000,
    cut: 750,
    symbols: ["Hz", "KHz", "MHz", "GHz"],
    thousand: true,
    minFractionDigits: 0,
    maxFractionDigits: 1,
}

/**
 * Formatter parameters for currency in Euro UOM.
 */
const formatterParamsEUR = {
    base: 0,
    symbols: ["€"],
    thousand: true,
    minFractionDigits: 0,
    maxFractionDigits: 1,
}
// #endregion

// // @ts-check
// import { Tabulator } from "tabulator-tables";