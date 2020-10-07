import { addGetter } from '../../helpers';

/**
 * @classdesc Dependency injector. Itself injected as `$injector` from {@link module:se/fivebyfive/ortho~Orthogonal}.
 * @class OrthoInjector
 * @memberof module:se/fivebyfive/ortho/core
 */
export class OrthoInjector {
    constructor($expressionParser, container = null, lazyload = true) {
        /** @private */
        const self = this;
        /** @private */
        const injectContainer = container || {};

        /**
         * Get argument names from `func`
         * @param {function} func
         * @private
         */
        const argumentNames = (func) => {
            return typeof func !== 'function' ? [] : (func + '')
                .replace(/[/][/].*$/mg, '') // strip single-line comments
                .replace(/\s+/g, '') // strip white space
                .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
                .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
                .replace(/=[^,]+/g, '') // strip any ES6 defaults  
                .split(',').filter(Boolean); // split & filter [""]
        };

        /**
         * Get all dependencies which have names matching keys
         * in `injectedArgs`. If the dependency is a function, and `lazyload` is `true`,
         * call the function, replacing it in container with its return value.
         * @param {string[]} injectedArgs 
         * @returns {object}
         * @private
         */
        const loadInjections = (injectedArgs) => injectedArgs.map((a) => {
            if (lazyload && typeof injectContainer[a] === 'function') {
                injectContainer[a] = self.callFunction(injectContainer[a]);
            }
            return injectContainer[a];
        });


        /**
         * Register a new dependency under the name `name`.
         * If `dependency` is a function, it is assumed to
         * be a factory for the dependency, which will be called
         * once, the first time the dependency is injected, injecting
         * its return value insted 
         * @param {string} name 
         * @param {function|any} dependency 
         * @returns {OrthoInjector}
         */
        this.register = (name, dependency) => {
            injectContainer[name] = dependency;
            return self;
        };

        /**
         * Register all values in `newContext` with names matching their key.
         * @param {object} newContext 
         * @returns {OrthoInjector}
         */
        this.registerAll = (newContext) => {
            Object.keys(newContext).forEach((k) => self.register(k, newContext[k], injectContainer));
            return self;
        };

        /**
         * Create a dependency-injected version of `func`, explicity injecting the
         * dependencies listed in `injectArgs` only.
         * @param {function} func 
         * @param  {...string} injectArgs 
         * @returns {function}
         */
        this.injectExplicit = (func, ...injectArgs) => (...args) => func.call(injectContainer, ...loadInjections(injectArgs), ...args);

        /**
         * Create a dependency-injected version of `func`, automatically injecting all
         * the dependencies reference in its argument list.
         * @param {function} func 
         * @returns {function}
         */
        this.injectFunction = (func) => {
            const args = argumentNames(func);
            const injectArgs = args.filter((a) => a in injectContainer);

            return self.injectExplicit(func, ...injectArgs);
        };

        /**
         * Create and call a dependency-injected version of `func`, automatically injecting all
         * the dependencies reference in its argument list.
         * @param {function} func 
         * @returns {any}
         */
        this.callFunction = (func, ...args) => self.injectFunction(func)(...args);

        /**
         * Create a function which wraps the code in `expression`, injecting all
         * dependencies referenced in the code.
         * @param {string} expression 
         * @returns {function}
         */
        this.injectExpression = (expression) => () => {
            const { variables, expressionFunction } = $expressionParser.parse(expression, injectContainer);
            return self.injectExplicit(expressionFunction, ...variables.map((v) => v.key));
        };

        /**
         * Create and call a function which wraps the code in `expression`, injecting all
         * dependencies referenced in the code.
         * @param {string} expression 
         * @returns {any}
         */
        this.callExpression = (expression) => self.injectExpression(expression)();

        addGetter(this, 'container', () => injectContainer);
    }
}
