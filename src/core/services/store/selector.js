import { addGetter, dirtyable } from '../../helpers';

/**
 * @classdesc Class representing a selector in {@link module:se/fivebyfive/ortho/store~OrthoStore}.
 * @class OrthoStoreSelector
 * @memberof module:se/fivebyfive/ortho/core/internal
 */
export class OrthoStoreSelector {
    /**
     * @param {string} valuePath Path to value in state as a string
     */
    constructor(valuePath) {
        const self = this;
        const opts = {
            valuePath,
            path: valuePath.join('.'),
            handlers: [],
            currValue: dirtyable({ value: null }, 'value'),
        };

        const getValueFromState = (state, path) => {
            const [currKey, ...restOfPath] = path;
            const currValue = currKey in state ? state[currKey] : null;
            return restOfPath.length > 0 && currValue ? getValueFromState(currValue, restOfPath) : currValue;
        };
        const addHandler = (subscriber) => {
            opts.handlers = [...opts.handlers, subscriber];
            return self;
        };

        /**
         * Update value, if value has changed
         * @param {any} newState 
         */
        this.update = (newState) => {
            const newValue = getValueFromState(newState, opts.valuePath);
            if (!opts.currValue.isDirty || newValue !== opts.currValue.value) {
                opts.currValue.value = newValue;
                opts.handlers = opts.handlers.filter((h) => h.shouldRepeat);
                opts.handlers.forEach((h) => h.trigger(self, opts.currValue.value));
            }
        };

        /**
         * 
         * @param {function} handler 
         */
        this.subscribe = (handler) => addHandler(new OrthoStoreSubscriber(handler, true));

        /**
         * 
         * @param {function} handler 
         */
        this.then = (handler) => addHandler(new OrthoStoreSubscriber(handler, 1));

        /**
         * 
         * @param {function} handler 
         */
        this.once = (handler) => {
            if (opts.currValue.isDirty) {
                handler.call(self, opts.currValue.value);
                return self;
            }
            return self.then(handler);
        };

        /**
         * @property {string} path
         */
        addGetter(this, 'path', () => opts.path);

        /**
         * @property {any} current
         */
        addGetter(this, 'current', () => opts.currValue.value);
    }
}