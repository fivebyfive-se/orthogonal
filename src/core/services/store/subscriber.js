import { addGetter } from '../../helpers';

/**
 * @classdesc representing a subscriber in `OrthoStore`
 * @class OrthoStoreSubscriber
 * @memberof module:se/fivebyfive/ortho/core/internal
 */
export class OrthoStoreSubscriber {
    /**
     * @param {function} handler - Called when subscribed value changes
     * @param {boolean} repeat - If `true`, keep triggering handler every time value changes
     */
   constructor(handler, repeat = true) {
       const opts = {
           handler,
           repeat: repeat === true ? -1 : +repeat
       };

       /**
        * @param {any} context 
        * @param  {...any} args 
        * @instance
        */
       this.trigger = (context = {}, ...args) => {
           opts.handler.call(context, ...args);
           if (opts.repeat >= 0) {
               opts.repeat--;
           }
       };

       /**
        * @function
        * @instance
        */
       this.unsubscribe = () => opts.repeat = 0;

       /**
        * @property {boolean} shouldRepeat
        */
       addGetter(this, 'shouldRepeat', () => opts.repeat !== 0);
   }
}