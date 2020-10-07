import { addGetter } from '../../helpers';
/**
 * @module se/fivebyfive/ortho/core/internal
 */
import {OrthoStoreAction} from './action';
import {OrthoStoreSelector} from './selector';
import {OrthoStoreSubscriber} from './subscriber';

/**
 * @classdesc Simple state-management. Dependency-injected as `$store` from {@link module:se/fivebyfive/ortho~Orthogonal}.
 * @class OrthoStore
 * @memberof module:se/fivebyfive/ortho/core
 */
export class OrthoStore {
    constructor() {
        /** @private */
        const self = this;
        /** @private */
        const store = {
            state: {},
            actions: [
                new OrthoStoreAction('$set', (state, { key, value }) => {
                    const newState = { ...state };
                    newState[key] = value;
                    return newState;
                }),
                new OrthoStoreAction('$update', (state, update) => ({ ...state, ...update }))
            ],
            selectors: []
        };


        /** @private */
        const addAction = (label, transform) => store.actions.push(new OrthoStoreAction(label, transform));
        /** @private */
        const findActions = (label) => store.actions.filter((action) => label === action.label);
        /** @private */
        const applyActions = (startState, label, payload) => findActions(label).reduce(
            (newState, action) => action.transform(newState, payload, self.dispatch),
            startState
        );

        /** @private */
        const updateStore = (...updates) => {
            store.state = updates
                .map(([a, p]) => ({ action: a, payload: !p ? null : p.length === 1 ? p[0] : p }))
                .reduce(
                    (updatedState, { action, payload }) => applyActions(updatedState, action, payload),
                    store.state
                );
            store.selectors.forEach((sel) => sel.update(store.state));
        };

        /**
         * You only want to use this once -- combines existing state with `initialState`,
         * but makes no effort to dispatch actions or fire events.
         * @param {any} intialState
         * @returns {this}
         */
        this.state = (initialState) => {
            store.state = { ...store.state, ...initialState };
            return self;
        };

        /**
         * Add `actions` to store. Each action represents a change of state.
         * @param {object} actions 
         * @returns {this}
         */
        this.actions = (actions = {}) => {
            Object.keys(actions).forEach((label) => addAction(label, actions[label]));
            return self;
        };

        /**
         * Dispatch `actions`.
         * @param {string|any} actions - list of actions and payloads.
         * @returns {this}
         */
        this.dispatch = (...actions) => {
            const [action, ...payload] = actions;
            if (typeof action === 'string') {
                updateStore([action, payload]);
            } else {
                updateStore(...actions);
            }
            return self;
        };

        /**
         * Select a value from store. returns an 
         * @param {OrthoStoreSelector|string} selectorOrPath
         * @returns {OrthoStoreSelector}
         */
        this.select = (selectorOrPath) => {
            const pathSelector = typeof selectorOrPath === 'string' ? selectorOrPath.split('.') : [...selectorOrPath];
            const path = pathSelector.join('.');
            let selector = store.selectors.find((s) => s.path === path);
            if (!selector) {
                selector = new OrthoStoreSelector(pathSelector);
                store.selectors.push(selector);
            }

            return selector;
        };

        /**
         * Proxy for store state -- automatically dispatches `$set` action
         * when any value is changed.
         * @name stateProxy
         * @member
         * @type {object}
         * @private
         */
        addGetter(this, 'stateProxy', () => new Proxy(store.state, {
            set: (target, key, value) => {
                if (['$scope', '$rootScope'].includes(key)) {
                    self.dispatch('$set', { key, value: { ...value } });
                }
                self.dispatch('$set', { key, value });
                return true;
            }
        }))
    }
}
