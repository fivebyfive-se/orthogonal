/**
 * @class DomHelper
 * @hideconstructor
 * @memberof module:se/fivebyfive/ortho/lib/extensions
 */
export function $dom($array, $window, $document) {
    /**
    * Connect`callbacks` to the list of events in `eventNames` on`element`.
    * @param {external:Element} element
    * @param {string[]} eventNames
    * @param  {...function} callbacks
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
    */
    const onEvents = (element, eventNames, ...callbacks) => {
        $array.ensureArray(eventNames).forEach((eventName) => {
            if (eventName === 'now') {
                callbacks.forEach((c) => c.call(element));
            } else {
                callbacks.forEach((c) => element.addEventListener(eventName, c));
            }
        });
    };

    /**
     * Connect `callbacks` to the list of events in `eventNames` on `element`.
     * Also wraps all callbacks in a function that calls `e.preventDefault()' on
     * all trigger events.
     * @param {external:Element} element 
     * @param {string[]} eventNames 
     * @param  {...function} callbacks
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const onEventsWithoutDefault = (element, eventNames, ...callbacks) => {
        onEvents(element, eventNames, ...callbacks.map((cb) => (ev) => {
            ev.preventDefault();
            cb(ev);
        }));
    };

    /**
     * Dispatch `action` on `store` when the given `eventNames` occur.
     * `payloadSelector` is a callback-function, which transforms an element into a payload.
     * @param {external:Node} element 
     * @param {(string|string[])} eventNames 
     * @param {modules:se/fivebyfive/ortho/OrthoStore} store 
     * @param {string} action 
     * @param {function} payloadSelector 
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const dispatchOnEvent = (element, eventNames, store, action, payloadSelector) => {
        onEventsWithoutDefault(element, eventNames, (ev) => store.dispatch(action, payloadSelector(ev)));
    };

    /**
     * Get x and y coordinates of `element`
     * @param {external:Element} element 
     * @returns {{x: number, y: number}}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const getPosition = (element) => {
        const { top, left } = element.getBoundingClientRect();
        const { scrollY, scrollX } = $window;

        return { x: top + scrollX, y: left + scrollY };
    };

    /**
     * Get dimensions of `element`
     * @param {external:Element} element
     * @returns {{height: number, height: number}}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const getSize = (element) => {
        const [{ height, width }] = element.getClientRects();
        return { height, width };
    };

    /**
     * Get sanitized value from `element` (assumed to be an input element),
     * or empty string if there is no value.
     * @param {external:Element} element 
     * @returns {string}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const getValue = (element) => $string.sanitize(element.value);

    /**
     * Set sanitized `value` on `element` (assumed to be an input element),
     * or empty string if there is no value.
     * @param {external:Element} element
     * @param {string} value 
     * @returns {string}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const setValue = (element, value) => element.value = $string.sanitize(value);

    /**
     * Create an HTML element.
     * @param {string} tagName 
     * @param {Object} attributes 
     * @param  {...any} children 
     * @returns {external:HTMLElement}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const createTag = (tagName, attributes, ...children) => {
        const tag = $document.createElement(tagName);
        Object.keys(attributes).forEach((k) => tag.setAttribute(k, attributes[k]));
        children.forEach((c) => typeof c === 'string' ? $document.createTextNode(c) : tag.appendChild(c));

        return tag;
    };

    /**
     * If `selectOrElement` is an `Element`, return it, otherwise try to find it
     * treating `selectOrElement` as a dom query.
     * @param {string|exernal:Element} selectorOrElement 
     * @returns {external:Element}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~DomHelper
     */
    const ensureElement = (selectorOrElement) => {
        if (typeof selectorOrElement === 'string') {
            return $document.querySelector(selectorOrElement);
        }
        return selectorOrElement;
    };

    return {
        createTag,

        ensureElement,

        onEvents, onEventsWithoutDefault,
        dispatchOnEvent,

        getPosition, getSize,

        getValue, setValue,
    }
}
