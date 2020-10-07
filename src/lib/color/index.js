import { colorHelperFactory } from './helper';
import { colorHarmonyFactory } from './harmony';
import { colorWheelFactory } from './wheel';

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
    $colorHarmony: colorHarmonyFactory,

    /** 
     * @const {module:orthogonal/lib/color~ColorHelper} $colorHelper
     * @memberof module:orthogonal/lib/color/services
     */
    $colorHelper: colorHelperFactory,

    /** 
     * @const {module:orthogonal/lib/color~ColorWheelFactory} $colorWheel
     * @memberof module:orthogonal/lib/color/services
     */
    $colorWheel: colorWheelFactory
};

