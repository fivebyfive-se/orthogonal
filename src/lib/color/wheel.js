export function colorWheelFactory($colorHelper, $linear, $window) {
    /**
     * @classdesc Class for creating color-wheels that can be drawn on an HTML canvas.
     * @class
     * @memberof module:orthogonal/lib/color
     */
    class ColorWheel {
        /**
         * Create new instance of `ColorWheel`, do be drawn in `canvas`
         * @param {external:HTMLCanvas} canvas 
         */
        constructor(canvas) {
            canvas.height = canvas.width = $window.innerHeight / 2;
            const context = canvas.getContext('2d');
            const middle = { x: canvas.width/2, y: canvas.height/2};
            const radius = Math.min(middle.x, middle.y);

            const angle = (x1, y1, x2, y2) => {
                const a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                return (a + 360) % 360;
            };
            const distance = (x1, y1, x2, y2) => {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            };
            const map_psl = [
                { p:  0, s: 0, l: 100},
                { p: .2, s: 20, l: 65},
                { p: .5, s: 50, l: 50},
                { p:  1, s: 100, l: 0}
            ];
            const map_lp = [
                { p:  1, l: 0},
                { p: .5, l: 50},
                { p: .2, l: 65},
                { p:  0, l: 100},
            ];

            /**
             * Calculate the color at the given mouse position
             * @param {external:MouseEvent} mouseEvent
             * @returns {ColorHSL}
             */
            this.color_at = (mouseEvent) => {
                const x = mouseEvent.offsetX,
                    y = mouseEvent.offsetY;
                const a = angle(middle.x, middle.y, x, y);
                const d = distance(middle.x, middle.y, x, y) /  radius;
                const h = $colorHelper.rybhue_to_hslhue(a);
                const s = $linear.rangeMap(map_psl, 'p', 's', d);
                const l = $linear.rangeMap(map_psl, 'p', 'l', d);

                return { h, s, l };
            };

            /**
             * Calculate the position of the given color in the color wheel.
             * @param {ColorHSL} param0 
             * @returns {{x: number, y: number}}
             */
            this.color_to_pos = ({h, s, l}) => {
                const a = $colorHelper.hslhue_to_rybhue(h) * Math.PI / 180;
                const dS = $linear.rangeMap(map_psl, 's', 'p', s) * radius;
                const dL = $linear.rangeMap(map_lp, 'l', 'p', l) * radius;
                const d = (2* dS + dL) / 3;
                return {
                    x: d * Math.cos(a) + middle.x,
                    y: d * Math.sin(a) + middle.y
                };
            };


            /**
             * Draw the color wheel.
             * @function
             */
            this.draw = () => {
                for(let angle = 0; angle <= 360; angle++) {
                    const startAngle = (angle-2)*Math.PI/180;
                    const endAngle = angle * Math.PI/180;
                    context.beginPath();
                    context.moveTo(middle.x, middle.y);
                    context.arc(middle.x, middle.y, radius, startAngle, endAngle, false);
                    context.closePath();

                    const hue = $colorHelper.rybhue_to_hslhue(angle);
                    const gradient = context.createRadialGradient(middle.x, middle.y, 0, middle.x, middle.y, radius);
                    map_psl.forEach((m) => gradient.addColorStop(m.p, `hsl(${hue}, ${m.s}%, ${m.l}%)`));
                    context.fillStyle = gradient;
                    context.fill();
                }
                context.moveTo(middle.x, middle.y);
                context.beginPath();
                context.arc(middle.x, middle.y, radius, 0, 2 * Math.PI, false);
                context.lineWidth = 2;
                context.strokeStyle= 'white';
                context.stroke();
            };
        }
    }

    return {
        create: (canvas) => new ColorWheel(canvas)
    }
}
