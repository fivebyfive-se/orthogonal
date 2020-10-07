
/**
 * @module se/fivebyfive/ortho/core
 */
import { OrthoCache } from './core/services/cache';
import { OrthoExpressionParser } from './core/services/expression-parser';
import { OrthoInjector } from './core/services/injector';
import { OrthoStore } from './core/services/store';

/**
 *  @module se/fivebyfive/ortho
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
        const $cache = new OrthoCache();

        /** @private */
        const $expressionParser = new OrthoExpressionParser($cache);

        /** @private */
        const $injector = new OrthoInjector($expressionParser);

        /** @inheritdoc */
        this.register = $injector.register;

        /**
         * Wrap `expression` (which can be either a string containing JavaScript or a function)
         * in a dependency-injecting function.
         * @param {string|function} expression
         * @return {function}
         * @method
         * */
        this.inject = (expression) => typeof expression === 'function'
            ? $injector.injectFunction(expression)
            : $injector.injectExpression(expression);

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
            ? $injector.callFunction(expression, ...args)
            : $injector.callExpression(expression);

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
         * @module se/fivebyfive/ortho/core/services
         */
        const rootDependencies = {
            /**
             * @const {module:se/fivebyfive/ortho~Orthogonal} $ortho
             * @memberof module:se/fivebyfive/ortho/core/services
             */
            $ortho: self,

            /**
             * @const {module:se/fivebyfive/ortho/core~OrthoCache} $cache
             * @memberof module:se/fivebyfive/ortho/core/services
             */
            $cache,

            /**
             * @const {module:se/fivebyfive/ortho/core~OrthoExpressionParser} $expressionParser
             * @memberof module:se/fivebyfive/ortho/core/services
             */
            $expressionParser,

            /**
             * @const {module:se/fivebyfive/ortho/core~OrthoInjector} $injector
             * @memberof module:se/fivebyfive/ortho/core/services
             */
            $injector,

            /**
             * @const {module:se/fivebyfive/ortho/core~OrthoStore} $store
             * @memberof module:se/fivebyfive/ortho/core/services
             */
            $store: () => new OrthoStore()
        };

        $injector.registerAll(rootDependencies);
    }

    /** @private */
    static $instance = null;

    /** @private */
    static create() {
        if (!Orthogonal.$instance) {
            Orthogonal.$instance = new Orthogonal();
        }
        return Orthogonal.$instance;
    }
}

/**
 * Initializes Orthogonal
 * @function orthogonal
 * @memberof module:se/fivebyfive/ortho/core/srvices
 */
export const orthogonal = Orthogonal.create();
