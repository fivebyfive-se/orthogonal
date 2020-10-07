/** @private */
const win = window || (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this;

/** @private */
const doc = document || window.document || { };

import { OrthoCache } from './core/services/cache';
import { OrthoExpressionParser } from './core/services/expression-parser';
import { OrthoInjector } from './core/services/injector';
import { OrthoStore } from './core/services/store';

/**
 * @classdesc The main entry point
 * @class
 * @augments OrthoInjector
 * @hideconstructor
 */
export class Orthogonal {
    constructor() {
        /** @private */
        const self = this;

        /** @private */
        const _cache = new OrthoCache();

        /** @private */
        const _expressionParser = new OrthoExpressionParser(_cache);

        /** @private */
        const _injector = new OrthoInjector(_expressionParser);

        /** @inheritdoc */
        this.registerAll = _injector.registerAll;

        /** @inheritdoc */
        this.register = _injector.register;

        /**
         * Wrap `expression` (which can be either a string containing JavaScript or a function)
         * in a dependency-injecting function.
         * @param {string|function} expression
         * @return {function}
         * */
        this.inject = (expression) => typeof expression === 'function'
            ? _injector.injectFunction(expression)
            : _injector.injectExpression(expression);

        /**
        * Wrap `expression` (which can be either a string containing JavaScript or a function)
        * in a dependency-injecting function, and call it, passing along `args` as arguments after
        * the injected dependencies.
        * @param {string|function} expression
        * @param {any[]} args
        * @return {any}
        * */
        this.call = (expression, ...args) => typeof expression === 'function'
            ? _injector.callFunction(expression, ...args)
            : _injector.callExpression(expression);

        /**
         * Inject dependencies into the function `func`, and call it once
         * the browser window has loaded (or directly if it already has). 
         * @param {function} func 
         */
        this.onReady = (func) => {
            const callback = self.inject(func);
            if (doc.readyState === 'DOMContentLoaded') {
                callback();
            }
            else {
                win.addEventListener('load', callback);
            }
        };


        /**
         * Injectable services
         * @namespace rootServices
         */
        const rootDependencies = {
            /**
             * @const {Orthogonal} $ortho
             */
            $ortho: () => self,

            /**
             * @const {OrthoCache} $cache
             */
            $cache: () => _cache,

            /**
             * @const {OrthoExpressionParser} $expressionParser
             */
            $expressionParser: () => _expressionParser,

            /**
             * @const {OrthoInjector} $injector
             */
            $injector: () => _injector,

            /**
             * @const {OrthoStore} $store
             */
            $store: () => new OrthoStore(),

            /**
             * @const {external:Window} $window
             */
            $window: () => win,

            /**
             * @const {external:Document} $document
             */
            $document: () => doc,
        };

        _injector.registerAll(rootDependencies);
    }

    /** @private */
    static $instance = null;

    /** @private */
    static getInstance() {
        if (!Orthogonal.$instance) {
            Orthogonal.$instance = new Orthogonal();
        }
        return Orthogonal.$instance;
    }
}

/**
 * Initializes Orthogonal
 * @function orthogonal
 */
export const orthogonal = Orthogonal.getInstance();

/**
* @function registerExtensions
* @param {any} extensions
*/
export const registerExtensions = (extensions) => orthogonal.registerAll(extensions);

