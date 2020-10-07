import { $array } from './helpers/array';
import { $object } from './helpers/object';
import { $string } from './helpers/string';
import { $query } from './helpers/query';
import { $css } from './helpers/css';
import { $linear } from './helpers/linear-interpolation';
import { OrthoInjector } from '../../core/services/injector';

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
    $array, 

    /**
     * @const {module:orthogonal/lib/extensions~ObjectHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $object,
    
    /**
     * @const {module:orthogonal/lib/extensions~StringHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $string,
    
    /**
     * @const {module:orthogonal/lib/extensions~QueryHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $query,
    
    /**
     * @const {module:orthogonal/lib/extensions~CssHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $css,
    
    /**
     * @const {module:orthogonal/lib/extensions~LinearInterpolationHelper}
     * @memberof module:orthogonal/lib/extensions/services
     */
    $linear
};

/**
 * Register all extensions services
 * @function init
 * @param {module:orthogonal/services~OrthoInjector} $injector 
 * @memberof module:orthogonal/lib/extensions
 */
export default function($injector) {
    $injector.registerAll(extensionsServices);
}
