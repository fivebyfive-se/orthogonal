/**
 * @classdesc Primarily used for dependency injection. Contains
 * methods for reflection -- parsing functions to see
 * which parameters it has and what they're called.
 * Can be dependency injected as a service via `Orthogonal` as `$expressionParser`.
 * @class OrthoExpressionParser
  * @memberof module:se/fivebyfive/ortho/core
 */
export class OrthoExpressionParser {
    constructor($cache, testVariableFunction = null) {
        /** @private */
        const self = this;
        /** @private */
        const nameInExpression = testVariableFunction || ((name, expression) => new RegExp(`\\b${name}\\b`).test(expression));

        /**
         * Find all variable names which have keys in `context` in the JavaScript
         * code in `expression`.
         * @param {string} expression 
         * @param {any} context 
         * @returns {Variable[]}
         */
        this.parse = (expression, context) => {
            return $cache.get([expression, context], () => {
                return Object.keys(context)
                    .filter((key) => nameInExpression(key, expression))
                    .reduce(
                        (prev, key) => ([...prev, { key, value: context[key] }]),
                        []
                    );
            });
        };

        /**
         * The javascript code in `expression` and create a new function, whose 
         * parameters are named the same as all the variables referenced in the code
         * which have a value in `context`, and all
         * @param {string} expression 
         * @param {any} context
         * @returns {{variables: Variable[], expressFunction: function}} 
         * @example // returns {variables: [{key: a, value: 3}], expressFunction: (a) => a + 1}; 
         *  $expressionParser.createFunction('a + 1', { a: 3});  
         */
        this.createFunction = (expression, context) => {
            const variables = self.parse(expression, context);
            const expressionFunction = Function(
                ...variables.map((v) => v.key),
                `"use strict"; return (${expression});`
            );
            return { variables, expressionFunction };
        };

        /**
         * Wrap a JavaScript expression in a dependency-injecting function,
         * injecting the values from `context` whose keys match variable-names
         * in `expression`.
         * @param {string} expression 
         * @param {object} context 
         * @returns {function}
         */
        this.createInjectedFunction = (expression, context) => {
            const { variables, expressionFunction } = self.createFunction(expression, context);

            return (...args) => expressionFunction.call(context, ...variables.map((v) => v.value), ...args);
        };

        /**
         * Create and run a dependency-injection wrapped function using the code
         * in `expression`, injecting the values from `context` whose keys match variable-names
         * in `expression`.
         * @param {string} expression 
         * @param {object} context 
         * @param  {...any} args 
         * @returns {function}
         */
        this.run = (expression, context, ...args) => self.createInjectedFunction(expression, context)(...args);
    }
}
