/**
 * File containing data definition.
 */


// TODO add UOMFactors
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
            clock: 1*1000**3,
            coreCnt: 4,
            coreBit: 64,
            voltOp: 3.3,
            voltIn: 5,
            connector: "Type-A",
            sizeFlash: 1023,
            sizeFlashFree: 12*2**30,
            sizeRAM: 8*2**30,
            sizeEPROM: 4*2**10,
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
            clock: 2*1000**3,
            coreCnt: 8,
            coreBit: 32,
            voltOp: 5,
            voltIn: 12,
            connector: "Type-B",
            sizeFlash: 766,
            sizeFlashFree: 24*2**30,
            sizeRAM: 16*2**30,
            sizeEPROM: 8*2**10,
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