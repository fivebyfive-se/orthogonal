import { $colorHelper } from './helper';
import { $colorHarmony } from './harmony';
import { $colorWheel } from './wheel';

/**
 * @module se/fivebyfive/ortho/lib/color 
 */

 /**
  * @module se/fivebyfive/ortho/lib/color/services
  */
export const colorServices = {
    /** 
     * @const {module:se/fivebyfive/ortho/lib/color~ColorHarmony} $colorHarmony
     * @memberof module:se/fivebyfive/ortho/lib/color/services
     */
    $colorHarmony,

    /** 
     * @const {module:se/fivebyfive/ortho/lib/color~ColorHelper} $colorHelper
     * @memberof module:se/fivebyfive/ortho/lib/color/services
     */
    $colorHelper,

    /** 
     * @const {module:se/fivebyfive/ortho/lib/color~ColorWheel} $colorWheel
     * @memberof module:se/fivebyfive/ortho/lib/color/services
     */
    $colorWheel
};

/**
 * @function initColor
 * @param {module:se/fivebyfive/ortho~Orthogonal} $ortho 
 */
export default function($ortho) {
    $ortho.registerAll(colorServices);
}
