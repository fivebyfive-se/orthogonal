/**
 * Helper function for adding a new getter-method to an object.
 * @function
 * @param {any} obj 
 * @param {string} name 
 * @param {function} handler
 */
export const addGetter = (obj, name, handler) => Object.defineProperty(obj, name, { get: handler });

/**
 * Wrap an value in a Proxy which sets a property, `isDirty` when the property
 * named in `dirtyProperty` is modified.
 * @function
 * @param {any} baseObj 
 * @param {string} dirtyProperty 
 * @returns {any} Proxied version of `baseObj`
 */
export const dirtyable = (baseObj = { value: undefined }, dirtyProperty = 'value') => {
    return new Proxy({ ...baseObj, isDirty: false }, {
        set: (obj, propertyName, value) => {
            if (propertyName === dirtyProperty) {
                obj.isDirty = true;
            }
            obj[propertyName] = value;

            return true;
        },
        get: (obj, propertyName) => obj[propertyName]
    });
};


