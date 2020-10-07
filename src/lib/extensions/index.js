import { arrayFactory } from './helpers/array';
import { objectFactory } from './helpers/object';
import { stringFactory } from './helpers/string';
import { queryFactory } from './helpers/query';
import { cssFactory } from './helpers/css';
import { linearFactory } from './helpers/linear-interpolation';
import { domFactory } from './helpers/dom';


/**
 * @module orthogonal/lib/extensions
 */

 /**
  * @module orthogonal/lib/extensions/services
  */
export const extensionsServices = {
    /**
     * @const {module:orthogonal/lib/extensions~ArrayHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $array: arrayFactory, 
    
    /**
     * @const {module:orthogonal/lib/extensions~CssHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $css: cssFactory,
    
    /**
     * @const {module:orthogonal/lib/extensions~DomHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $dom: domFactory,
    
    /**
     * @const {module:orthogonal/lib/extensions~LinearInterpolationHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $linear: linearFactory,

    /**
     * @const {module:orthogonal/lib/extensions~ObjectHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $object: objectFactory,
    
    /**
     * @const {module:orthogonal/lib/extensions~QueryHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $query: queryFactory,
    
    /**
     * @const {module:orthogonal/lib/extensions~StringHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $string: stringFactory,
};

