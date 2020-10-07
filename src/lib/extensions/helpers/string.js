/**
  * An object representing parts of a color in RGBA colorspace
  * @typedef {Object} PartialColor
  * @property {?number} r  Red
  * @property {?number} g  Green
  * @property {?number} b  Blue
  * @property {?number} a  Alpha
 * @memberof module:orthogonal/lib/extensions
  */

/**
 * An object representing a color in RGB colorspace
 * @typedef {Object} RgbColor
 * @property {number} r  Red
 * @property {number} g  Green
 * @property {number} b  Blue
 * @memberof module:orthogonal/lib/extensions
 */

/**
 * An object representing a color in RGBA colorspace
 * @typedef {Object} RgbaColor
 * @property {number} r  Red
 * @property {number} g  Green
 * @property {number} b  Blue
 * @property {number} a  Alpha
 * @memberof module:orthogonal/lib/extensions
 */


 /**
  * @class StringHelper
  * @hideconstructor
 * @memberof module:orthogonal/lib/extensions
  */
export function stringFactory($object) {
    /**
     * @private 
     * @const {RgbaColor}
     **/
    const defaultColor = { r: 0, g: 0, b: 0, a: 1.0 };

    /** 
     * @param {PartialColor} col
     * @returns {RgbaColor}
     * @private
     */
    const colorOrDefault = (col) => $object.immutableMerge(defaultColor, col || {});
    /**
     * Make sure argument is stringy
     * @param {string} str
     * @returns {string} 
        * @memberof module:orthogonal/lib/extensions~StringHelper
     */
    const sanitize = (str) => (str || '').trim();

    /**
     * Check if argument is empty, i.e. `undefined`, `null`, `''` &c.
     * @param {string|any} str
     * @returns {boolean} 
        * @memberof module:orthogonal/lib/extensions~StringHelper
     */
    const isEmpty = (str) => sanitize(str) === '';

    /**
     * Convert a color in hex format (e.g. `#fff`, `#00ffee`) to RGB.
     * @param {string} hex
     * @returns {RgbColor}
        * @memberof module:orthogonal/lib/extensions~StringHelper
     */
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2}$)/i.exec(hex),
            factor = hex.length < 6 ? 0x11 : 1;
        return colorOrDefault(result ? {
            r: parseInt(result[1], 16) * factor,
            g: parseInt(result[2], 16) * factor,
            b: parseInt(result[3], 16) * factor
        } : null);
    };

    /**
     * Parse a color in RGBA string format.
     * @param {string} rgba
     * @returns {RgbaColor}
        * @memberof module:orthogonal/lib/extensions~StringHelper
     */
    const rgbaToRgb = (rgba) => {
        const result = /^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(\s*,\s*((\d+)?(\.\d+)?))?\s*\)$/i.exec(rgba);

        return colorOrDefault(result ? {
            r: parseInt(result[1]),
            g: parseInt(result[2]),
            b: parseInt(result[3]),
            a: result.length > 5 ? parseFloat(result[5], 16) : 1.0
        } : null);
    };

    /**
     * Convert a string from `snake-case` to `camelCase`.
     * @param {string} str
     * @returns {string} 
        * @memberof module:orthogonal/lib/extensions~StringHelper
     */
    const snakeToCamel = (str) => str.replace(
        /([-_][a-z])/g,
        (group) => group.toUpperCase()
            .replace('-', '')
            .replace('_', '')
    );

    /**
     * Convert a string from `camelCase` to `snake-case`.
     * @param {string} str
     * @returns {string} 
        * @memberof module:orthogonal/lib/extensions~StringHelper
     */
    const camelToSnake = (str, sep = '-') => str.split(/(?=[A-Z])/).join(sep).toLowerCase();

    return {
        hexToRgb, rgbaToRgb,

        snakeToCamel, camelToSnake,

        sanitize, isEmpty
    };
}
