import { arrayFactory } from './helpers/array';
import { objectFactory } from './helpers/object';
import { stringFactory } from './helpers/string';
import { queryFactory } from './helpers/query';
import { cssFactory } from './helpers/css';
import { linearFactory } from './helpers/linear-interpolation';
import { domFactory } from './helpers/dom';


/**
 * Injectable services
 * @namespace extensionsServices
 */
export const extensionsServices = {
    /**
     * @const {ArrayHelper}
     */
    $array: arrayFactory, 
    
    /**
     * @const {CssHelper}
     */
    $css: cssFactory,
    
    /**
     * @const {DomHelper}
     */
    $dom: domFactory,
    
    /**
     * @const {LinearInterpolationHelper}
     */
    $linear: linearFactory,

    /**
     * @const {ObjectHelper}
     */
    $object: objectFactory,
    
    /**
     * @const {QueryHelper}
     */
    $query: queryFactory,
    
    /**
     * @const {StringHelper}
     */
    $string: stringFactory,
};

