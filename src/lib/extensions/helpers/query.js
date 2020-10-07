 /**
  * @class QueryHelper
  * @hideconstructor
 * @memberof module:orthogonal/lib/extensions
  */
export function queryFactory($object, $string, $document) {
    /**
     * Wrapper around `querySelectorAll` allowing you to pass along a callback to call on all elements found
     * @param {external:HTMLElement} root 
     * @param {string} selector 
     * @param {function} callback 
     * @returns {any[]} The mapped list
        * @memberof module:orthogonal/lib/extensions~QueryHelper
     */
    const map = (root, selector, callback) => {
        const result = [];
        (root || $document).querySelectorAll(selector).forEach((element, index, all) => result.push(callback(element, index, all)));
        return result;
    };

    /**
     * Query by attribute name.
     * @param {external:HTMLElement} root 
     * @param {string} attribute 
     * @returns {Object} all matching elements, plus metadata.
        * @memberof module:orthogonal/lib/extensions~QueryHelper
     */
    const queryByAttribute = (root, attribute) => map(
        root, `[${attribute}]`,
        (element, index, all) => ({ element, attributeName, index, all })
    );

    /**
     * Query by data-attribute. Optionally adds other attributes to result
     * @param {external:HTMLElement} root 
     * @param {string} attribute 
     * @param  {...any} otherAttributes 
     * @returns {any[]} List of elements, along with index, and attribute values.
        * @memberof module:orthogonal/lib/extensions~QueryHelper
     */
    const dataSelectorAll = (root, attribute, ...otherAttributes) => {
        const attributeName = $string.camelToSnake(attribute).replace('data-'),
            attributeKey = $string.snakeToCamel(attributeName),
            otherAttributeKeys = [attributeKey, ...otherAttributes.map($string.snakeToCamel)];

        return map(root, `[data-${attributeName}]`, (element, index, all) => {
            return $object.merge(
                { element, index, all, attributeValue: element.dataset[attributeKey] },
                $object.filterKeys(element.dataset, ...otherAttributeKeys)
            );
        });
    };

    return {
        map,
        dataSelectorAll,
        queryByAttribute
    };
}
