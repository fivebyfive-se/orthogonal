/**
 * Array manipulation
 * @constructs ArrayHelper
 * @hideconstructor
 */
export function arrayFactory() {
    /**
      * @param {any|any[]} arrOrItem 
      * @return {any[]} `arrOrItem` if it is an array, or `[arrOrItem]` if not.
      * @memberof ArrayHelper
      */
    const ensureArray = (arrOrItem) => !arrOrItem ? [] : Array.isArray(arrOrItem) ? [...arrOrItem] : [arrOrItem];

    /**
     * 
     * @param {any} value 
     * @param {number} length
     * @returns {any[]} An array containing `value` `length` times. 
     * @memberof ArrayHelper
     */
    const repeat = (value, length) => {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(value);
        }
        return result;
    };

    return {
        ensureArray,
        repeat
    };
}

