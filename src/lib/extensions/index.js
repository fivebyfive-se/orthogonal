import { $array } from './helpers/array';
import { $object } from './helpers/object';
import { $string } from './helpers/string';
import { $query } from './helpers/query';
import { $css } from './helpers/css';
import { $linear } from './helpers/linear-interpolation';
import { OrthoInjector } from '../../core/services/injector';

/**
 * @module se/fivebyfive/ortho/lib/extensions
 */

 /**
  * @module se/fivebyfive/ortho/lib/extensions/services
  */
export const extensionsServices = {
    /**
     * @const {module:se/fivebyfive/ortho/lib/extensions~ArrayHelper}
     * @memberof module:se/fivebyfive/ortho/lib/extensions/services
     */
    $array, 

    /**
     * @const {module:se/fivebyfive/ortho/lib/extensions~ObjectHelper}
     * @memberof module:se/fivebyfive/ortho/lib/extensions/services
     */
    $object,
    
    /**
     * @const {module:se/fivebyfive/ortho/lib/extensions~StringHelper}
     * @memberof module:se/fivebyfive/ortho/lib/extensions/services
     */
    $string,
    
    /**
     * @const {module:se/fivebyfive/ortho/lib/extensions~QueryHelper}
     * @memberof module:se/fivebyfive/ortho/lib/extensions/services
     */
    $query,
    
    /**
     * @const {module:se/fivebyfive/ortho/lib/extensions~CssHelper}
     * @memberof module:se/fivebyfive/ortho/lib/extensions/services
     */
    $css,
    
    /**
     * @const {module:se/fivebyfive/ortho/lib/extensions~LinearInterpolationHelper}
     * @memberof module:se/fivebyfive/ortho/lib/extensions/services
     */
    $linear
};

/**
 * Register all extensions services
 * @function init
 * @param {module:se/fivebyfive/ortho/services~OrthoInjector} $injector 
 * @memberof module:se/fivebyfive/ortho/lib/extensions
 */
export default function($injector) {
    $injector.registerAll(extensionsServices);
}
