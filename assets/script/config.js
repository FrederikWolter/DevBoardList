/**
 * File containing configuration.
 */

// #region page config
/**
 * Text for naming the project.
 * @constant {string}
 */
const APP_NAME = "DevBoardList";
document.title = APP_NAME;

/**
 * Path to app icon.
 * @constant {string}
 */
const APP_ICON = "https://stackoverflow.com/favicon.ico";
$("link[rel='icon']")[0].href = APP_ICON;
// #endregion

// #region tabulator config
/**
 * Text for empty tabulator due to no data present.
 * @constant {string}
 * @see [Link](https://tabulator.info/docs/6.2/layout#placeholder)
 */
const tblEMPTY = "No Data Available";

/**
 * Text for empty tabulator due to no matching data.
 * @constant {string}
 * @see [Link](https://tabulator.info/docs/6.2/layout#placeholder)
 */
const tblNO_MATCH = "No Matching Data Available"
// #endregion