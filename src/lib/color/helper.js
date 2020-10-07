/**
 * 
 * @typedef {Object} ColorRGB
 * @property {number} r
 * @property {number} g
 * @property {number} b
 */
/**
 * 
 * @typedef {Object} ColorHSV
 * @property {number} h
 * @property {number} s
 * @property {number} v
 */
/**
 * 
 * @typedef {Object} ColorHSL
 * @property {number} h
 * @property {number} s
 * @property {number} l
 */

export function colorHelperFactory($linear) {
    /**
     * @classdesc Helpers for converting colors among color-spaces
     * @class
     * @hideconstructor
     */
    class ColorHelper {
        constructor() {
            /**
             * Convert Hex to RGB.
             * @param {string} hex
             * @returns {ColorRGB} 
             */
            this.hex_to_rgb = (hex) => {
                let r = 0, g = 0, b = 0;
              
                if (hex.length == 4) {
                  r =  "0x" + hex[1] + hex[1];
                  g = "0x" + hex[2] + hex[2];
                  b = "0x" + hex[3] + hex[3];                
                } else if (hex.length == 7) {
                  r = "0x" + hex[1] + hex[2];
                  g = "0x" + hex[3] + hex[4];
                  b = "0x" + hex[5] + hex[6];
                }
                return { r: parseInt(r, 16), g: parseInt(r, 16), b: parseInt(b, 16) };
            };

            /**
             * Convert hex string to HSL
             * @param {string} hex 
             * @returns {ColorHSL}
             */
            this.hex_to_hsl = (hex) => this.rgb_to_hsl(this.hex_to_rgb(hex));

            /**
             * @param {ColorHSL} param0
             * @returns {ColorRGB} 
             */
            this.hsl_to_rgb = ({h, s, l}) => {
                  // Must be fractions of 1
                const sNorm = s / 100;
                const lNorm = l / 100;

                let c = (1 - Math.abs(2 * lNorm - 1)) * sNorm,
                    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
                    m = lNorm - c/2,
                    r = 0,
                    g = 0,
                    b = 0;
                if (0 <= h && h < 60) {
                    r = c; g = x; b = 0;
                } else if (60 <= h && h < 120) {
                    r = x; g = c; b = 0;
                } else if (120 <= h && h < 180) {
                    r = 0; g = c; b = x;
                } else if (180 <= h && h < 240) {
                    r = 0; g = x; b = c;
                } else if (240 <= h && h < 300) {
                    r = x; g = 0; b = c;
                } else if (300 <= h && h < 360) {
                    r = c; g = 0; b = x;
                }
                r = Math.round((r + m) * 255);
                g = Math.round((g + m) * 255);
                b = Math.round((b + m) * 255);

                return {r, g, b};
            };

            /**
             * @param {ColorHSL} param0
             * @returns {string} 
             */
            this.hsl_to_hex = ({h, s, l}) => this.rgb_to_hex(this.hsl_to_rgb({h, s, l}));

            /**
             * @param {ColorHSL} param0
             * @returns {ColorHSV} 
             */
            this.hsl_to_hsv = ({h, s, l}) => {
                let newS = s / 100,
                    normL = l / 100;
                newS *= normL < .5 ? normL : 1 - normL;

                return {
                    h: +h,
                    s: +((2 * newS / (normL + newS)) * 100).toFixed(1), 
                    v: +((normL + newS) * 100).toFixed(1)
                };
            };

            /**
             * @param {ColorHSV} param0
             * @returns {ColorHSL} 
             */
            this.hsv_to_hsl = ({h, s, v}) => {
                const normS = s / 100,
                    normV = v / 100;
                const l = (2 - normS) * normV / 2;
                let newS = 0;

                if (l !== 0) {
                    if (l === 1) {
                        newS = 0;
                    } else if (l < 0.5) {
                        newS = normS * normV / (l * 2)
                    } else {
                        newS = normS * normV / (2 - l * 2)
                    }
                }

                return {h: +h, s: +(newS * 100).toFixed(1), l: +(l * 100).toFixed(1)};
            };

            /**
             * @param {ColorRGB} param0
             * @returns {string} 
             */
            this.rgb_to_hex = ({r, g, b}) => {
                let hexR = (r < 0x10 ? '0' : '') + r.toString(16),
                    hexG = (g < 0x10 ? '0' : '') + g.toString(16),
                    hexB = (b < 0x10 ? '0' : '') + b.toString(16);              
                return `#${hexR}${hexG}${hexB}`;
            };

            /**
             * @param {ColorRGB} param0
             * @returns {ColorHSL} 
             */
            this.rgb_to_hsl = ({r, g, b}) => {
                const rNorm = (r / 255).toFixed(1), 
                    gNorm = (g / 255).toFixed(1),
                    bNorm = (b / 255).toFixed(1);

                const max = Math.max(rNorm, gNorm, bNorm),
                    min = Math.min(rNorm, gNorm, bNorm);
                let h, s, l = (max + min) / 2;
              
                if (max === min) {
                  h = s = 0; // achromatic
                } else {
                  const d = max - min;
                  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              
                  switch (max) {
                    case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
                    case gNorm: h = (bNorm - rNorm) / d + 2; break;
                    case bNorm: h = (rNorm - gNorm) / d + 4; break;
                  }
              
                  h /= 6;
                }
                    
                h = Math.ceil(s * 360);
                s = +(s * 100).toFixed(1);
                l = +(l * 100).toFixed(1);

                return { h, s, l };
            };

            const ryb_to_hsl_map = [
                {ryb: 60, hsl: 35},
                {ryb: 122, hsl: 60},
                {ryb: 165, hsl: 120},
                {ryb: 218, hsl: 180},
                {ryb: 275, hsl: 240},
                {ryb: 330, hsl: 300},
                {ryb: 420, hsl: 395},
            ];

            const doMap = (map, from, to, val) => +($linear.rangeMap(map, from, to, val) % 361).toFixed(1);


            /**
             * Translate from RYB color space to HSL
             * @param {number} hue 
             * @returns {number} 
             */
            this.rybhue_to_hslhue = (hue) => doMap(ryb_to_hsl_map, 'ryb', 'hsl', hue);

            /**
             * Translate from HSL color space to RYN
             * @param {number} hue 
             * @returns {number} 
             */
            this.hslhue_to_rybhue = (hue) => doMap(ryb_to_hsl_map, 'hsl', 'ryb', hue);

            const col_to_string = (col) => {
                return Object.keys(col)
                    .filter((k) => !!col[k] || col[k] === 0)
                    .map((k) => /[svl]/.test(k) ? `${col[k]}%` : col[k])
                    .join(', ');
            };

            /**
             * Convert from any color space to any string format
             * @param {any} source 
             * @param {string} type `"hex"`, `"rgb"`, `"hsl"`, or `"hsv"`
             * @returns {string}
             */
            this.any_to_string = (source, type='hex') => {
                const hsl = this.any_to_hsl(source);
                let res = {};

                switch (type) {
                    case 'hex':
                    case '#':
                        return this.hsl_to_hex(hsl);
                    case 'rgb':
                        res = this.hsl_to_rgb(hsl);
                        break;
                    case 'hsl':
                        res = hsl;
                        break
                    case 'hsv':
                        res = this.hsl_to_hsv(hsl);
                        break;
                }
                return `${type}(${col_to_string(res)})`;
            };

            /**
             * Convert from any color space (include string representations), to HSL.
             * @param {any} source 
             * @returns {ColorHSL}
             */
            this.any_to_hsl = (source) => {
                if (typeof source === 'string') {
                    if (source.startsWith('#')) {
                        return this.hex_to_hsl(source);
                    }
                    const matches = /(rgb|hs[lv])\((\d*\.?\d+)%?\,?\s*(\d*\.?\d+)%?,?\s*(\d*\.?\d+)%?\)/.exec(source);
                    if (matches) {
                        let [m, type, c1, c2, c3] = matches;
                        let res = {};
                        if (c2 <= 1 && c3 <= 1) {
                            c2 = +(c2 * 100).toFixed(1);
                            c3 = +(c3 * 100).toFixed(1);
                            if (c1 <= 1) {
                                c1 = +(c1 * 100).toFixed(1);
                            }
                        }
                        if (type.startsWith('rgb')) {
                            res = this.rgb_to_hsl({r: +c1, g: +c2, b: +c3});
                        } else if (type.startsWith('hsv')) {
                            res = this.hsv_to_hsl({h: +c1, s: +c2, v: +c3});
                        } else {
                            res = {h: +c1, s: +c2, l: +c3};
                        }
                        return res;
                    }
                } else if (source.r) {
                    return this.rgb_to_hsl(source);
                } else if (source.h) {
                    if (source.v) {
                        return this.hsv_to_hsl(source);
                    }
                    return source;
                }
                return {h: 0, s: 0, l: 0};
            }
        }
    };

    return new ColorHelper();
}
