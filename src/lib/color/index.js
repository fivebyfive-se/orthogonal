import { $colorHelper } from './helper';
import { $colorHarmony } from './harmony';
import { $colorWheel } from './wheel';

/**
 * @module orthogonal/lib/color 
 */

 /**
  * @module orthogonal/lib/color/services
  */
export const colorServices = {
    /** 
     * @const {module:orthogonal/lib/color~ColorHarmony} $colorHarmony
     * @memberof module:orthogonal/lib/color/services
     */
    $colorHarmony,

    /** 
     * @const {module:orthogonal/lib/color~ColorHelper} $colorHelper
     * @memberof module:orthogonal/lib/color/services
     */
    $colorHelper,

    /** 
     * @const {module:orthogonal/lib/color~ColorWheel} $colorWheel
     * @memberof module:orthogonal/lib/color/services
     */
    $colorWheel
};

/**
 * @function initColor
 * @param {module:orthogonal~Orthogonal} $ortho 
 */
export default function($ortho) {
    $ortho.registerAll(colorServices);
}
