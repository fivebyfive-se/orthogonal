 /**
  * @class ObjectHelper
  * @hideconstructor
 * @memberof module:se/fivebyfive/ortho/lib/extensions
  */
export function $object($array) {
    /**
      * Copy the keys and values from the objects `sources` into `target`, overwriting
      * existing keys.
      * @param {object} target 
      * @param  {...object} sources 
      * @returns {object} `target`
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
      */
    const merge = (target, ...sources) => {
        sources.forEach((source) => Object.keys(source).forEach((k) => target[k] = source[k]));
        return target;
    };

    /**
     * Copy the keys and values from the objects `sources` into `target`.
     * Skip keys that already exist.
     * @param {object} target
     * @param  {...object} sources
     * @returns {object} `target`
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const disjunctMerge = (target, ...sources) => {
        sources.forEach((source) => {
            Object.keys(source).forEach((k) => {
                if (!target.hasOwnProperty(k)) {
                    target[k] = source[k];
                }
            });
        });

        return target;
    };

    /**
     * Combine `objects` into a new `object` -- returning the result 
     * @param  {...object} objects 
     * @returns {object}
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const immutableMerge = (...objects) => merge({}, ...objects);


    /**
     * Get all unique keys from `objects` as an array.
     * @param  {...object} objects 
     * @return {string[]}
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const allKeys = (...objects) => {
        return objects.reduce((keys, obj) => {
            return [
                ...keys,
                ...Object.keys(obj).filter((k) => !keys.includes(k))
            ]
        }, []);
    };

    /**
     * Get all keys that are only in `a` or only in `b`
     * @param {object} a 
     * @param {object} b 
     * @returns {string[]}
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const diffKeys = (a, b) => allKeys(a, b).filter((k) => a[k] !== b[k]);

    /**
     * Return a shallow copy of `obj`, keeping only the values whose keys
     * are in `keys`
     * @param {object} obj 
     * @param  {...string} keys 
     * @returns {object}
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const filterKeys = (obj, ...keys) => {
        const result = {};

        keys.filter((k) => k in obj)
            .forEach((k) => result[k] = obj[k]);

        return result;
    };

    /**
     * 
     * @param {string} key 
     * @param {any} value
     * @returns {object}
     * @example const obj = fromKeyValuePair('foo', 10); // => obj === {foo: 10} 
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const fromKeyValuePair = (key, value) => {
        const result = {};
        result[key] = value;
        return result;
    };

    /**
     * Give an array of arrays, `pairs` representing a list of keys and values,
     * create a new object containing those keys and values. 
     * @param  {...(string|any)} pairs 
     * @returns {object}
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const fromKeyValuePairs = (...pairs) => {
        return immutableMerge(...pairs.map((p) => fromKeyValuePair(...p)));
    };

    /**
     * Get all keys and values from `objects`, and return them as an array of key/value pairs
     * @param  {...object} objects 
     * @returns {any}
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const toKeyValuePairs = (...objects) => {
        const pairs = [];
        objects.forEach((o) => Object.keys(o).forEach((k) => pairs.push[k, o[k]]));
        return pairs;
    };

    /**
     * Split an object into as many parts as the most number of items in any array-value
     * contained in the object 
     * @param {object} obj
     * @returns {object[]}
     * @example split({a: [0, 1, 2]}); // => [{a: 0}, {a: 1}, {a: 2}] 
        * @memberof module:se/fivebyfive/ortho/lib/extensions~ObjectHelper
     */
    const split = (obj) => {
        const result = [{}];

        Object.keys(obj).forEach((k) => {
            $array.ensureArray(obj[k]).forEach((v, i) => {
                if (result.length < i) {
                    result.push({});
                }
                result[i][k] = v;
            });
        });

        return result;
    };

    return {
        merge, disjunctMerge, immutableMerge,

        allKeys,
        filterKeys,
        diffKeys,

        fromKeyValuePair, fromKeyValuePairs, toKeyValuePairs,

        split
    };
}
