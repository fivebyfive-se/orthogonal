import { colorHelperFactory } from './helper';
import { colorHarmonyFactory } from './harmony';
import { colorWheelFactory } from './wheel';

 /**
  * Injectable services
  * @namespace colorServices
  */
export const colorServices = {
    /** 
     * @const {ColorHarmony} $colorHarmony
     */
    $colorHarmony: colorHarmonyFactory,

    /** 
     * @const {ColorHelper} $colorHelper
     */
    $colorHelper: colorHelperFactory,

    /** 
     * @const {ColorWheelFactory} $colorWheel
     */
    $colorWheel: colorWheelFactory
};

