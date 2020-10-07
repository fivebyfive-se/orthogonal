/**
 * The Window interface represents a window containing a DOM document
 * @external Window
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window
 */

 /**
  * The Document interface represents any web page loaded in the browser 
  * @external Document
  * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
  */

/** @private */
const win = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this;

/** @private */
const doc = win.document || { };

/**
 * @module orthogonal/core
 */
import { OrthoCache } from './core/services/cache';
import { OrthoExpressionParser } from './core/services/expression-parser';
import { OrthoInjector } from './core/services/injector';
import { OrthoStore } from './core/services/store';

/**
 *  @module orthogonal
 */

/**
 * @classdesc The main entry point
 * @class Orthogonal
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
         * @method
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
        * @method
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
         * @module orthogonal/core/services
         */
        const rootDependencies = {
            /**
             * @const {module:orthogonal~Orthogonal} $ortho
             * @memberof module:orthogonal/core/services
             */
            $ortho: () => self,

            /**
             * @const {module:orthogonal/core~OrthoCache} $cache
             * @memberof module:orthogonal/core/services
             */
            $cache: () => _cache,

            /**
             * @const {module:orthogonal/core~OrthoExpressionParser} $expressionParser
             * @memberof module:orthogonal/core/services
             */
            $expressionParser: () => _expressionParser,

            /**
             * @const {module:orthogonal/core~OrthoInjector} $injector
             * @memberof module:orthogonal/core/services
             */
            $injector: () => _injector,

            /**
             * @const {module:orthogonal/core~OrthoStore} $store
             * @memberof module:orthogonal/core/services
             */
            $store: () => new OrthoStore(),

            /**
             * @const {external:Window} $window
             * @memberof module:ortho/core/services
             */
            $window: () => win,

            /**
             * @const {external:Document} $document
             * @memberof module:ortho/core/services
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
 * @memberof module:orthogonal
 */
export const orthogonal = Orthogonal.getInstance();

/**
* @function registerExtensions
* @param {any} extensions
* @memberof module:orthogonal
*/
export const registerExtensions = (extensions) => orthogonal.registerAll(extensions);

