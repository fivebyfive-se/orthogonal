(($o) => {
    //#region Helpers
    //#region $array
    $o.register('$array', () => {
        const ensureArray = (arrOrItem) => !arrOrItem ? [] : Array.isArray(arrOrItem) ? [...arrOrItem] : [arrOrItem];
        const repeat = (value, length) => {
            const result = [];
            for (let i = 0; i < length; i++) {
                result.push(value);
            }
            return result;
        };
        return { ensureArray, repeat };
    });
    //#endregion

    //#region $object
    $o.register('$object', ($array) => {
        const merge = (target, ...sources) => {
            sources.forEach((source) => Object.keys(source).forEach((k) => target[k] = source[k]));
            return target;
        };
        const disjunctMerge = (...sources) => {
            const [target] = sources;

            sources.forEach((source) => {
                Object.keys(source).forEach((k) => {
                    if (!target.hasOwnProperty(k)) {
                        target[k] = source[k];
                    }
                });
            });

            return target;
        };
        const immutableMerge = (...objects) => merge({}, ...objects);


        const allKeys = (...objects) => {
            return objects.reduce((keys, obj) => {
                return [
                    ...keys,
                    ...Object.keys(obj).filter((k) => !keys.includes(k))
                ]
            }, []);
        };

        const diffKeys = (a, b) => allKeys(a, b).filter((k) => a[k] !== b[k]);

        const filterKeys = (obj, ...keys) => {
            const result = {};

            keys.filter((k) => k in obj)
                .forEach((k) => result[k] = obj[k]);

            return result;
        };

        const fromKeyValuePair = (key, value) => {
            const result = {};
            result[key] = value;
            return result;
        };

        const fromKeyValuePairs = (...pairs) => {
            return immutableMerge(...pairs.map((p) => fromKeyValuePair(...p)));
        };

        const toKeyValuePairs = (...objects) => {
            const pairs = [];
            objects.forEach((o) => Object.keys(o).forEach((k) => pairs.push[k, o[k]]));
            return pairs;
        };

        const split = (obj) => {
            const result = [{}];

            Object.keys(obj).forEach((k) => {
                $array.ensureArray(obj[k]).forEach((v, i) => {
                    if (result.length < i) {
                        result.push({});
                    }
                    result[i][k] = v;
                });
            });

            return result;
        };

        return {
            merge, disjunctMerge, immutableMerge,

            allKeys,
            filterKeys,
            diffKeys,

            fromKeyValuePair, fromKeyValuePairs, toKeyValuePairs,

            split
        };
    });
    //#endregion

    //#region $string
    $o.register('$string', ($object) => {
        // #region Internal
        const defaultColor = { r: 0, g: 0, b: 0, a: 1.0 };
        const colorOrDefault = (col) => $object.immutableMerge(defaultColor, col || {});
        // #endregion

        const sanitize = (str) => (str || '').trim();
        const isEmpty = (str) => sanitize(str) === '';

        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2}$)/i.exec(hex),
                factor = hex.length < 6 ? 0x11 : 1;
            return colorOrDefault(result ? {
                r: parseInt(result[1], 16) * factor,
                g: parseInt(result[2], 16) * factor,
                b: parseInt(result[3], 16) * factor
            } : null);
        };
        const rgbaToRgb = (rgba) => {
            const result = /^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(\s*,\s*((\d+)?(\.\d+)?))?\s*\)$/i.exec(rgba);

            return colorOrDefault(result ? {
                r: parseInt(result[1]),
                g: parseInt(result[2]),
                b: parseInt(result[3]),
                a: result.length > 5 ? parseFloat(result[5], 16) : 1.0
            } : null);
        };

        const snakeToCamel = (str) => str.replace(
            /([-_][a-z])/g,
            (group) => group.toUpperCase()
                .replace('-', '')
                .replace('_', '')
        );
        const camelToSnake = (str, sep = '-') => str.split(/(?=[A-Z])/).join(sep).toLowerCase();

        return {
            hexToRgb, rgbaToRgb,

            snakeToCamel, camelToSnake,

            sanitize, isEmpty
        };
    });
    //#endregion
    

    //#region $dom
    $o.register('$dom', ($array, $document, $window, $string) => {
        const onEvents = (element, eventNames, ...callbacks) => {
            $array.ensureArray(eventNames).forEach((eventName) => {
                if (eventName === 'now') {
                    callbacks.forEach((c) => c.call(element));
                } else {
                    callbacks.forEach((c) => element.addEventListener(eventName, c));
                }
            });
        };

        const onEventsWithoutDefault = (element, events, ...callbacks) => {
            onEvents(element, events, ...callbacks.map((cb) => (ev) => {
                ev.preventDefault();
                cb(ev);
            }));
        };

        const getPosition = (element) => {
            const { top, left } = element.getBoundingClientRect();
            const { scrollY, scrollX } = $window;

            return { x: top + scrollX, y: left + scrollY };
        };
        const getSize = (element) => {
            const [{ height, width }] = element.getClientRects();
            return { height, width };
        };

        const getValue = (element) => $string.sanitize(element.value);
        const setValue = (element, value) => element.value = $string.sanitize(value);

        const createTag = (tagName, attributes, ...children) => {
            const tag = $document.createElement(tagName);
            Object.keys(attributes).forEach((k) => tag.setAttribute(k, attributes[k]));
            children.forEach((c) => typeof c === 'string' ? $document.createTextNode(c) : tag.appendChild(c));

            return tag;
        };

        const ensureElement = (selectorOrElement) => {
            if (typeof selectorOrElement === 'string') {
                return $document.querySelector(selectorOrElement);
            }
            return selectorOrElement;
        };

        return {
            createTag,

            ensureElement,

            onEvents, onEventsWithoutDefault,

            getPosition, getSize,

            getValue, setValue,
        };
    }, false);
    //#endregion

    //#region $query
    $o.register('$query', ($object, $string, $document) => {
        const map = (root, selector, callback) => {
            const result = [];
            (root || $document).querySelectorAll(selector).forEach((element, index, all) => result.push(callback(element, index, all)));
            return result;
        };

        const queryByAttribute = (root, attribute) => map(
            root, `[${attribute}]`,
            (element, index, all) => ({ element, attributeName, index, all })
        );

        const dataSelectorAll = (root, attribute, ...otherAttributes) => {
            const attributeName = $string.camelToSnake(attribute).replace('data-'),
                attributeKey = $string.snakeToCamel(attributeName),
                otherAttributeKeys = [attributeKey, ...otherAttributes.map($string.snakeToCamel)];

            return map(root, `[data-${attributeName}]`, (element, index, all) => {
                return $object.merge(
                    { element, index, all, attributeValue: element.dataset[attributeKey] },
                    $object.filterKeys(element.dataset, ...otherAttributeKeys)
                );
            });
        };
        return {
            map,
            dataSelectorAll,
            queryByAttribute
        };
    });
    //#endregion

    //#region $css
    $o.register('$css', ($string, $document) => {
        const getVar = (key, root = null) => getComputedStyle(root || $document.documentElement).getPropertyValue(key);
        const getVarAsColor = (key, root = null) => {
            const value = $string.sanitize(getVar(key, root));

            return $string.isEmpty(value) ? null
                : value.match(/^rgb/i) ? $string.rgbaToRgb(value)
                    : $string.hexToRgb(value);
        };
        const classNames = (element, ...variants) => [element, ...variants.map((v) => `${element}--${v}`)];

        return {
            getVar, getVarAsColor,
            classNames
        };
    });
    //#endregion

    //#region $linear
    $o.register('$linear', () => {
        const lerp = (x, y, a) => x * (1 - a) + y * a,
            clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a)),
            invlerp = (x, y, a) => clamp((a - x) / (y - x)),
            range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

        const rangeMap = (map, from, to, val, reverse = false) => {
            const min = map[0][from];
            if (val < min) {
                val += map[map.length - 1][from] - min;
            }
            for (let i = 0; i < map.length - 1; i++) {
                const fromA = map[i][from],
                    fromB = map[i+1][from],
                    toA = map[i][to],
                    toB = map[i+1][to];
                if (val >= fromA && val < fromB) {
                    return range(fromA, fromB, toA, toB, val);
                }
            }
            return map[0][to];
        };

        return {
            lerp, clamp, invlerp, range, rangeMap
        };
    });
    //#endregion
})(orthogonal);
