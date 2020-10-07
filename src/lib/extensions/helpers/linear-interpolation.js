/**
 * Useful interpolation helpers for converting between scales
 * @class LinearInterpolationHelper
 */
export function linearFactory() {
    /**
     * @param x {Number}
     * @param y {Number}
     * @param a {Number} Ratio -- between `0.0` and `1.0` (inclusive)
     * @return {Number} A value between `x` and `y` at the decimal point `a`. 
     * @example $linear->lerp(0, 10, .5); // => 5
    * @memberof LinearInterpolationHelper
     */
    const lerp = (x, y, a) => x * (1 - a) + y * a;

    /**
     * @param a {Number}
     * @param min {Number} (default: `0`)
     * @param max {Number} (default: `1`)
     * @return {Number} `a` or `min` if `a < min`, or `max` if `a > max`. 
     * @example $linear->clamp(10, 2, 5); // => 5
    * @memberof LinearInterpolationHelper
     */
    const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a))

    /**
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} a
     * @return {Number} Where `a` falls between `x` and `y` as a ratio
     * between `0.0` and `1.0`. @see lerp
    * @memberof LinearInterpolationHelper
     */
    const invlerp = (x, y, a) => clamp((a - x) / (y - x));

    /**
     * Converts a number from one range to another
     * @param {Number} x1 
     * @param {Number} y1 
     * @param {Number} x2 
     * @param {Number} y2 
     * @param {Number} a 
     * @return {Number} The value `a` converted to the value at the same place in `[x2 ... y2]`
     * as `a` has in `[x1 ... y1]`
    * @memberof LinearInterpolationHelper
     */
    const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

    /**
     * 
     * @param {Array<Map<string,Number[]>>} map s
     * @param {string} from 
     * @param {string} to 
     * @param {Number} val 
     * @return {Number} If `maps` is an array of maps containing at least the keys
     * from the string `from` and `to`, representing corresponding values in two ranges,
     * return `val` from range `from` fitted to the range `b`.
    * @memberof LinearInterpolationHelper
     */
    const rangeMap = (maps, from, to, val) => {
        const min = maps[0][from];
        if (val < min) {
            val += maps[maps.length - 1][from] - min;
        }
        for (let i = 0; i < maps.length - 1; i++) {
            const fromA = maps[i][from],
                fromB = maps[i + 1][from],
                toA = maps[i][to],
                toB = maps[i + 1][to];
            if (val >= fromA && val < fromB) {
                return range(fromA, fromB, toA, toB, val);
            }
        }
        return maps[0][to];
    };

    /**
     * Return `num` limited to between `0` and `max`, using modulo
     * logic
     * @param {number} num 
     * @param {number} max 
     * @returns {number}
    * @memberof LinearInterpolationHelper
     */
    const modLimit = (num, max) => {
        if (num > max) {
            return num % max;
        }
        let res = max;
        while (num < 0) {
            res = res - num;
        }
        return res;
    }


    return {
        lerp, clamp, invlerp, range, rangeMap, modLimit
    };
}
