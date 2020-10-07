 /**
  * @class CssHelper
  * @hideconstructor
 * @memberof module:se/fivebyfive/ortho/lib/extensions
  */
export function $css($string, $document) {
    /**
     * Get CSS variable with name `key`, if it exists under `root`
     * @param {string} key 
     * @param {external:HTMLELement} root 
     * @returns {string}
    * @memberof module:se/fivebyfive/ortho/lib/extensions~CssHelper
     */
    const getVar = (key, root = null) => getComputedStyle(root || $document.documentElement).getPropertyValue(key);

    /**
     * Get CSS variable with name `key`, if it exists under `root`, converted to RGB.
     * @param {string} key 
     * @param {external:HTMLELement} root 
     * @returns {ColorRgb}
     * @memberof module:se/fivebyfive/ortho/lib/extensions~CssHelper
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
     * @memberof module:se/fivebyfive/ortho/lib/extensions~CssHelper
     */
    const classNames = (element, ...variants) => [element, ...variants.map((v) => `${element}--${v}`)];

    return {
        getVar, getVarAsColor,
        classNames
    };
}
