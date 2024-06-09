/**
 * File containing data definition.
 */


/**
 * Class representing a unit of measure.
 */
class UnitOfMeasure {
    /**
     * Creates a unit of measure.
     * @param {string} name name of UOM.
     * @param {number} factor factor of UOM relative to base unit.
     */
    constructor(name, factor) {
        this.name = name;
        this.factor = factor;
    }

    /**
     * Convert UOM to string.
     * @returns {string} name of UOM.
     */
    toString() { return this.name; }

    /**
     * Convert UOM to number.
     * @returns {number} factor of UOM.
     */
    valueOf() { return this.factor; }

    /**
     * Generate a list of predefined UOMs.
     * @returns {Object<string, UnitOfMeasure>} list containing UOMs keyed by their names.
     */
    static getUOMList() {
        const data = [
            // Binary Units
            { name: "B", factor: 1 },
            { name: "KB", factor: 1024 },
            { name: "MB", factor: 1024 ** 2 },
            { name: "GB", factor: 1024 ** 3 },
            { name: "TB", factor: 1024 ** 4 },
            // Frequency Units
            { name: "Hz", factor: 1 },
            { name: "KHz", factor: 1000 },
            { name: "MHz", factor: 1000 ** 2 },
            { name: "GHz", factor: 1000 ** 3 },
            { name: "THz", factor: 1000 ** 4 },
        ]

        return data.reduce((list, item) => {
            list[item.name] = new UnitOfMeasure(item.name, item.factor);
            return list;
        }, {});
    }
}

/**
 * A list of predefined UOMs.
 * @const {Object<string, UnitOfMeasure>}
 */
const UOM = UnitOfMeasure.getUOMList();



// TODO use UOMFactors globally?
// TODO document/comment types https://stackoverflow.com/a/32139970
/**
 * Function returning list of boards.
 * @returns list of boards.
 */
function getBoards() {
    const boards = [
        {
            id: 1,
            name: "Product 1",
            imageSrc: "https://example.com/product1/images/product1.jpg",
            link: "https://example.com/product1",
            price: 10,
            dimX: 1,
            dimY: 20,
            docsSrc: "https://example.com/product1/datasheet/datasheet1.pdf",
            chip: "Controller 1",
            cDocsSrc: "https://example.com/product1/chip/datasheet1.pdf",
            clock: 1 * UOM["GHz"],
            coreCnt: 4,
            coreBit: 64,
            voltOp: 3.3,
            voltIn: 5,
            connector: "Type-A",
            sizeFlash: 1023 * UOM["B"],
            sizeFlashFree: 12 * UOM["GB"],
            sizeRAM: 8 * UOM["GB"],
            sizeEPROM: 4 * UOM["KB"],
            pinoutSrc: "https://example.com/product1/pinout/pinout1.png",
            cntGPIO: 20,
            cntDigital: 16,
            cntAnalog: 4,
            cntPWM: 8,
            analogBit: 12,
            laneUART: 2,
            laneI2C: 1,
            laneSPI: 1,
            protocol: "TCP/IP",
            castellatedEdge: false,
            platform: "Arduino",
            comment: "Sample comment 1"
        },
        {
            id: 2,
            name: "Product 2",
            imageSrc: "https://example.com/product2/images/product2.jpg",
            link: "https://example.com/product2",
            price: 150,
            dimX: 15,
            dimY: 25,
            docsSrc: "https://example.com/product2/datasheet/datasheet2.pdf",
            chip: "Controller 2",
            cDocsSrc: "https://example.com/product1/chip/datasheet2.pdf",
            clock: 2 * UOM["GHz"],
            coreCnt: 8,
            coreBit: 32,
            voltOp: 5,
            voltIn: 12,
            connector: "Type-B",
            sizeFlash: 766,
            sizeFlashFree: 24 * UOM["GB"],
            sizeRAM: 16 * UOM["GB"],
            sizeEPROM: 8 * UOM["MB"],
            pinoutSrc: "https://example.com/product2/pinout/pinout2.png",
            cntGPIO: 30,
            cntDigital: 24,
            cntAnalog: 6,
            cntPWM: 12,
            analogBit: 10,
            laneUART: 4,
            laneI2C: 2,
            laneSPI: 2,
            protocol: "UART",
            castellatedEdge: true,
            platform: "Raspberry Pi",
            comment: "Sample comment 2"
        },
    ];

    return boards;
}