/**
  * @classdesc Cache-handler. Service can be dependency inject as `$cache` from 
  * {@link module:orthogonal~Orthogonal}.
  * @class OrthoCache
  * @memberof module:orthogonal/core
  */
export class OrthoCache {
    constructor() {
        const self = this;
        const cache = {};

        /**
         * @param {string} str 
         * @returns {number} - hash of `str`.
         * @private
         */
        const hash = (str) => {
            let h = 0;
            for (let i = 0; i < str.length; i++) {
                const c = str.charCodeAt(i);
                h = ((h << 5) - h) + c;
                h |= 0; // Convert to 32bit integer
            }
            return h;
        };

        /**
         * @param {string} str 
         * @returns {string} - hash of `str` as `string`.
         * @private
         */
        const hashString = (str) => hash(str).toString();

        /**
         * Convert a bunch of different values into a unique key.
         * @param  {...any} objects 
         * @returns {string}
         */
        this.createKey = (...objects) => {
            return objects.filter((o) => typeof o !== 'undefined' && o !== 'null').map((o) => typeof o === 'string'
                ? hashString(o)
                : Array.isArray(o) ? self.createKey(...o)
                    : typeof o === 'object' ? self.createKey(...Object.keys(o))
                        : hashString(o.toString)
            ).join(',');
        };

        /**
         * Get a value from the cache, as identified by `key` or, if it doesn't exist,
         * call `getter`, store the value as `key` and return it.
         * @param {string} key 
         * @param {function} getter 
         * @returns {any}
         */
        this.get = (key, getter) => {
            const cacheKey = typeof key === 'string' ? key : self.createKey(cacheKey);
            if (!cache[key]) {
                cache[key] = (typeof getter === 'function' ? getter : (() => getter)).call();
            }
            return cache[key];
        };
    }
}