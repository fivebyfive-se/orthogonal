export function colorHarmonyFactory($array, $colorHelper) {
    /**
     * @classdesc Color-harmony generator
     * @class
     * @hideconstructor
     */
    class ColorHarmony {
        constructor() {
            const harmonies = {
                complementary: [0, 180, [0, .7, .7], [180, .7, .7], [0, 2, 2]],
                splitComplementary: [0, 150, 320, [150, .5, .5], [320, .5, .5]],
                splitComplementaryCW: [0, 150, 300, [150, 2, 2], [300, 2, 2]],
                splitComplementaryCCW: [0, 60, 210, [60, .25, .25], [210, .25, .25]],
                triadic: [0, 120, 240, [120, .5, .5], [0, .5, .5]],
                clash: [0, 90, 270, [105, 1.5, 1.5], [205, 1.5, 1.5]],
                tetradic: [0, 90, 180, 270, [0, .5, .5]],
                fourToneCW: [0, 60, 180, 240, [0, .5, .5]],
                fourToneCCW: [0, 120, 180, 300, [180, .5, .5]],
                fiveToneA: [0, 115, 155, 205, 245],
                fiveToneB: [0, 40, 90, 130, 245],
                fiveToneC: [0, 50, 90, 205, 320],
                fiveToneD: [0, 40, 155, 270, 310],
                fiveToneE: [0, 115, 230, 270, 320],
                neutral: [0, 15, 30, 45, 60],
                analogous: [0, 30, 60, 90, 120],
                custom: [0, 0, 0, 0, 0]
            };

            /**
             * @param {number} old 
             * @param {number} change 
             * @param {number} max 
             */
            const modvalue = (old, change, max = 100) => {
                if (!change) {
                    return old;
                }
                let newVal = old;
                if (Math.abs(change) < 3) {
                    newVal *= change;
                } else {
                    newVal += change;
                }
                while (newVal < 0) {
                    newVal += max;
                }
                return newVal % (max + 1);
            }

            /**
             * Calculate colors for `harmony`, starting from `color`
             * @param {string} harmony
             * @param {ColorHSL} color
             * @returns {ColorHSL[]} - Resulting harmonized list of colors
             * @instance
             */
            this.harmonize = (harmony, color) => {
                return harmonies[harmony].map((mod, i) => {
                    if (i === 0) {
                        return color;
                    }
                    let [h, s, l] = $array.ensureArray(mod).concat($array.repeat(0, 3));
                    const newH = h === 0 ? color.h : $colorHelper.rybhue_to_hslhue(modvalue($colorHelper.hslhue_to_rybhue(color.h), h, 360));
                    return {
                        h: +newH,
                        s: +modvalue(color.s, s, 100),
                        l: +modvalue(color.l, l, 100)
                    };
                });
            };

            /**
             * Get a list of all available harmonies' names
             * @returns {string[]}
             */
            this.harmonyNames = () => Object.keys(harmonies);

            /**
             * Get a list of all available harmonies
             * @returns {{name: string, transformations: number[]}}
             */
            this.harmonies = () => this.harmonyNames().map((name) => ({ name, transformations: harmonies[name] }));
        }
    }

    return new ColorHarmony();
}
