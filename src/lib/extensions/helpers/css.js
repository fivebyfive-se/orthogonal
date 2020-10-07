 /**
  * Helpers for working with CSS
  * @class CssHelper
  */
export function cssFactory($string, $document) {
    /**
     * Get CSS variable with name `key`, if it exists under `root`
     * @param {string} key 
     * @param {external:HTMLELement} root 
     * @returns {string}
    * @memberof CssHelper
     */
    const getVar = (key, root = null) => getComputedStyle(root || $document.documentElement).getPropertyValue(key);

    /**
     * Get CSS variable with name `key`, if it exists under `root`, converted to RGB.
     * @param {string} key 
     * @param {external:HTMLELement} root 
     * @returns {ColorRgb}
     * @memberof CssHelper
     */
    const getVarAsColor = (key, root = null) => {
        const value = $string.sanitize(getVar(key, root));

        return $string.isEmpty(value) ? null
            : value.match(/^rgb/i) ? $string.rgbaToRgb(value)
                : $string.hexToRgb(value);
    };

    /**
     * Create a list of classnames, consisting of `element` + `element--variant` for every `variants`
     * @param {string} element 
     * @param  {...string} variants 
     * @returns {string[]}
     * @memberof CssHelper
     */
    const classNames = (element, ...variants) => [element, ...variants.map((v) => `${element}--${v}`)];

    return {
        getVar, getVarAsColor,
        classNames
    };
}
