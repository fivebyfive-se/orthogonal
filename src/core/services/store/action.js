import { addGetter } from '../../helpers';

 /**
 * @classdesc Represents an action in `OrthoStore`
 * @class
 */
export class OrthoStoreAction {
    /**
     * 
     * @param {string} label 
     * @param {function} transformCallback 
     */
   constructor(label, transformCallback = null) {
       /**
        * @property {string} label
        * @instance
        */
       addGetter(this, 'label', () => label);
       /**
        * @property {function} transform
        * @instance
        */
       addGetter(this, 'transform', () => transformCallback);
   }
}