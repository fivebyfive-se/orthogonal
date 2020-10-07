/**
 * @class ArrayHelper
 * @hideconstructor
 * @memberof module:se/fivebyfive/ortho/lib/extensions
 */
export function $array() {
    /**
      * @param {any|any[]} arrOrItem 
      * @return {any[]} `arrOrItem` if it is an array, or `[arrOrItem]` if not.
      * @memberof module:se/fivebyfive/ortho/lib/extensions~ArrayHelper
      */
    const ensureArray = (arrOrItem) => !arrOrItem ? [] : Array.isArray(arrOrItem) ? [...arrOrItem] : [arrOrItem];

    /**
     * 
     * @param {any} value 
     * @param {number} length
     * @returns {any[]} An array containing `value` `length` times. 
     * @memberof module:se/fivebyfive/ortho/lib/extensions~ArrayHelper
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

