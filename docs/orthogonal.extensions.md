## Modules

<dl>
<dt><a href="#module_se/fivebyfive/ortho/extensions">se/fivebyfive/ortho/extensions</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/extensions">se/fivebyfive/ortho/extensions</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/extensions/services">se/fivebyfive/ortho/extensions/services</a></dt>
<dd><p>All injectable services from <a href="#module_se/fivebyfive/ortho/extensions">se/fivebyfive/ortho/extensions</a></p>
</dd>
</dl>


<br><a name="module_se/fivebyfive/ortho/extensions"></a>

## se/fivebyfive/ortho/extensions

* [se/fivebyfive/ortho/extensions](#module_se/fivebyfive/ortho/extensions)
    * [~ArrayHelper](#module_se/fivebyfive/ortho/extensions..ArrayHelper)
        * [new ArrayHelper()](#new_module_se/fivebyfive/ortho/extensions..ArrayHelper_new)
        * [.ensureArray(arrOrItem)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+ensureArray) ⇒ <code>Array.&lt;any&gt;</code>
        * [.repeat(value, length)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+repeat) ⇒ <code>Array.&lt;any&gt;</code>
    * [~ObjectHelper](#module_se/fivebyfive/ortho/extensions..ObjectHelper)
        * [new ObjectHelper($array)](#new_module_se/fivebyfive/ortho/extensions..ObjectHelper_new)
        * [.merge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+merge) ⇒ <code>object</code>
        * [.disjunctMerge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+disjunctMerge) ⇒ <code>object</code>
        * [.immutableMerge(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+immutableMerge) ⇒ <code>object</code>
        * [.allKeys(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+allKeys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.diffKeys(a, b)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+diffKeys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.filterKeys(obj, ...keys)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+filterKeys) ⇒ <code>object</code>
        * [.fromKeyValuePair(key, value)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePair) ⇒ <code>object</code>
        * [.fromKeyValuePairs(...pairs)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePairs) ⇒ <code>object</code>
        * [.toKeyValuePairs(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+toKeyValuePairs) ⇒ <code>any</code>
        * [.split(obj)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+split) ⇒ <code>Array.&lt;object&gt;</code>
    * [~StringHelper](#module_se/fivebyfive/ortho/extensions..StringHelper)
        * [new StringHelper($object)](#new_module_se/fivebyfive/ortho/extensions..StringHelper_new)
        * [.sanitize(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+sanitize) ⇒ <code>string</code>
        * [.isEmpty(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+isEmpty) ⇒ <code>boolean</code>
        * [.hexToRgb(hex)](#module_se/fivebyfive/ortho/extensions..StringHelper+hexToRgb) ⇒ <code>RgbColor</code>
        * [.rgbaToRgb(rgba)](#module_se/fivebyfive/ortho/extensions..StringHelper+rgbaToRgb) ⇒ <code>RgbaColor</code>
        * [.snakeToCamel(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+snakeToCamel) ⇒ <code>string</code>
        * [.camelToSnake(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+camelToSnake) ⇒ <code>string</code>
    * [~DomHelper](#module_se/fivebyfive/ortho/extensions..DomHelper)
        * [.onEvents(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEvents)
        * [.onEventsWithoutDefault(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEventsWithoutDefault)
        * [.getPosition(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getPosition) ⇒ <code>Object</code>
        * [.getSize(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getSize) ⇒ <code>Object</code>
        * [.getValue(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getValue) ⇒ <code>string</code>
        * [.setValue(element, value)](#module_se/fivebyfive/ortho/extensions..DomHelper+setValue) ⇒ <code>string</code>
        * [.createTag(tagName, attributes, ...children)](#module_se/fivebyfive/ortho/extensions..DomHelper+createTag) ⇒ <code>external:HTMLElement</code>
        * [.ensureElement(selectorOrElement)](#module_se/fivebyfive/ortho/extensions..DomHelper+ensureElement) ⇒ <code>external:Element</code>
    * [~QueryHelper](#module_se/fivebyfive/ortho/extensions..QueryHelper)
        * [.map(root, selector, callback)](#module_se/fivebyfive/ortho/extensions..QueryHelper+map) ⇒ <code>Array.&lt;any&gt;</code>
        * [.queryByAttribute(root, attribute)](#module_se/fivebyfive/ortho/extensions..QueryHelper+queryByAttribute) ⇒ <code>Object</code>
        * [.dataSelectorAll(root, attribute, ...otherAttributes)](#module_se/fivebyfive/ortho/extensions..QueryHelper+dataSelectorAll) ⇒ <code>Array.&lt;any&gt;</code>
    * [~CssHelper](#module_se/fivebyfive/ortho/extensions..CssHelper)
        * [.getVar(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVar) ⇒ <code>string</code>
        * [.getVarAsColor(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVarAsColor) ⇒ <code>ColorRgb</code>
        * [.classNames(element, ...variants)](#module_se/fivebyfive/ortho/extensions..CssHelper+classNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [~LinearUtils](#module_se/fivebyfive/ortho/extensions..LinearUtils)
        * [.lerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+lerp) ⇒ <code>Number</code>
        * [.clamp(a, min, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+clamp) ⇒ <code>Number</code>
        * [.invlerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+invlerp) ⇒ <code>Number</code>
        * [.range(x1, y1, x2, y2, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+range) ⇒ <code>Number</code>
        * [.rangeMap(map, from, to, val)](#module_se/fivebyfive/ortho/extensions..LinearUtils+rangeMap) ⇒ <code>Number</code>
        * [.modLimit(num, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+modLimit) ⇒ <code>number</code>
    * [~PartialColor](#module_se/fivebyfive/ortho/extensions..PartialColor) : <code>Object</code>
    * [~RgbColor](#module_se/fivebyfive/ortho/extensions..RgbColor) : <code>Object</code>
    * [~RgbaColor](#module_se/fivebyfive/ortho/extensions..RgbaColor) : <code>Object</code>


<br><a name="module_se/fivebyfive/ortho/extensions..ArrayHelper"></a>

### se/fivebyfive/ortho/extensions~ArrayHelper
**Alias:** `module:se/fivebyfive/ortho/extensions~ArrayHelper`


* [~ArrayHelper](#module_se/fivebyfive/ortho/extensions..ArrayHelper)
    * [new ArrayHelper()](#new_module_se/fivebyfive/ortho/extensions..ArrayHelper_new)
    * [.ensureArray(arrOrItem)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+ensureArray) ⇒ <code>Array.&lt;any&gt;</code>
    * [.repeat(value, length)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+repeat) ⇒ <code>Array.&lt;any&gt;</code>


<br><a name="new_module_se/fivebyfive/ortho/extensions..ArrayHelper_new"></a>

#### new ArrayHelper()
> Array utilities. Injectable as `$array` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)


<br><a name="module_se/fivebyfive/ortho/extensions..ArrayHelper+ensureArray"></a>

#### arrayHelper.ensureArray(arrOrItem) ⇒ <code>Array.&lt;any&gt;</code>
**Returns**: <code>Array.&lt;any&gt;</code> - `arrOrItem` if it is an array, or `[arrOrItem]` if not.  

| Param | Type |
| --- | --- |
| arrOrItem | <code>any</code>, <code>Array.&lt;any&gt;</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ArrayHelper+repeat"></a>

#### arrayHelper.repeat(value, length) ⇒ <code>Array.&lt;any&gt;</code>
**Returns**: <code>Array.&lt;any&gt;</code> - An array containing `value` `length` times.  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| length | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper"></a>

### se/fivebyfive/ortho/extensions~ObjectHelper
> Helper for `object`s. Injectable as `$object` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)

**Alias:** `module:se/fivebyfive/ortho/extensions~ObjectHelper`


* [~ObjectHelper](#module_se/fivebyfive/ortho/extensions..ObjectHelper)
    * [new ObjectHelper($array)](#new_module_se/fivebyfive/ortho/extensions..ObjectHelper_new)
    * [.merge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+merge) ⇒ <code>object</code>
    * [.disjunctMerge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+disjunctMerge) ⇒ <code>object</code>
    * [.immutableMerge(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+immutableMerge) ⇒ <code>object</code>
    * [.allKeys(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+allKeys) ⇒ <code>Array.&lt;string&gt;</code>
    * [.diffKeys(a, b)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+diffKeys) ⇒ <code>Array.&lt;string&gt;</code>
    * [.filterKeys(obj, ...keys)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+filterKeys) ⇒ <code>object</code>
    * [.fromKeyValuePair(key, value)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePair) ⇒ <code>object</code>
    * [.fromKeyValuePairs(...pairs)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePairs) ⇒ <code>object</code>
    * [.toKeyValuePairs(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+toKeyValuePairs) ⇒ <code>any</code>
    * [.split(obj)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+split) ⇒ <code>Array.&lt;object&gt;</code>


<br><a name="new_module_se/fivebyfive/ortho/extensions..ObjectHelper_new"></a>

#### new ObjectHelper($array)

| Param | Type |
| --- | --- |
| $array | [<code>ArrayHelper</code>](#module_se/fivebyfive/ortho/extensions..ArrayHelper) | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+merge"></a>

#### objectHelper.merge(target, ...sources) ⇒ <code>object</code>
> Copy the keys and values from the objects `sources` into `target`, overwriting
> existing keys.

**Returns**: <code>object</code> - `target`  

| Param | Type |
| --- | --- |
| target | <code>object</code> | 
| ...sources | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+disjunctMerge"></a>

#### objectHelper.disjunctMerge(target, ...sources) ⇒ <code>object</code>
> Copy the keys and values from the objects `sources` into `target`.
> Skip keys that already exist.

**Returns**: <code>object</code> - `target`  

| Param | Type |
| --- | --- |
| target | <code>object</code> | 
| ...sources | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+immutableMerge"></a>

#### objectHelper.immutableMerge(...objects) ⇒ <code>object</code>
> Combine `objects` into a new `object` -- returning the result


| Param | Type |
| --- | --- |
| ...objects | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+allKeys"></a>

#### objectHelper.allKeys(...objects) ⇒ <code>Array.&lt;string&gt;</code>
> Get all unique keys from `objects` as an array.


| Param | Type |
| --- | --- |
| ...objects | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+diffKeys"></a>

#### objectHelper.diffKeys(a, b) ⇒ <code>Array.&lt;string&gt;</code>
> Get all keys that are only in `a` or only in `b`


| Param | Type |
| --- | --- |
| a | <code>object</code> | 
| b | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+filterKeys"></a>

#### objectHelper.filterKeys(obj, ...keys) ⇒ <code>object</code>
> Return a shallow copy of `obj`, keeping only the values whose keys
> are in `keys`


| Param | Type |
| --- | --- |
| obj | <code>object</code> | 
| ...keys | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePair"></a>

#### objectHelper.fromKeyValuePair(key, value) ⇒ <code>object</code>

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>any</code> | 

**Example**  
```js
const obj = fromKeyValuePair('foo', 10); // => obj === {foo: 10} 
```

<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePairs"></a>

#### objectHelper.fromKeyValuePairs(...pairs) ⇒ <code>object</code>
> Give an array of arrays, `pairs` representing a list of keys and values,
> create a new object containing those keys and values.


| Param | Type |
| --- | --- |
| ...pairs | <code>string</code>, <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+toKeyValuePairs"></a>

#### objectHelper.toKeyValuePairs(...objects) ⇒ <code>any</code>
> Get all keys and values from `objects`, and return them as an array of key/value pairs


| Param | Type |
| --- | --- |
| ...objects | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+split"></a>

#### objectHelper.split(obj) ⇒ <code>Array.&lt;object&gt;</code>
> Split an object into as many parts as the most number of items in any array-value
> contained in the object


| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

**Example**  
```js
split({a: [0, 1, 2]}); // => [{a: 0}, {a: 1}, {a: 2}] 
```

<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper"></a>

### se/fivebyfive/ortho/extensions~StringHelper
> Helper functions for handling strings. Injectable as `$string` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)

**Alias:** `module:se/fivebyfive/ortho/extensions~StringHelper`


* [~StringHelper](#module_se/fivebyfive/ortho/extensions..StringHelper)
    * [new StringHelper($object)](#new_module_se/fivebyfive/ortho/extensions..StringHelper_new)
    * [.sanitize(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+sanitize) ⇒ <code>string</code>
    * [.isEmpty(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+isEmpty) ⇒ <code>boolean</code>
    * [.hexToRgb(hex)](#module_se/fivebyfive/ortho/extensions..StringHelper+hexToRgb) ⇒ <code>RgbColor</code>
    * [.rgbaToRgb(rgba)](#module_se/fivebyfive/ortho/extensions..StringHelper+rgbaToRgb) ⇒ <code>RgbaColor</code>
    * [.snakeToCamel(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+snakeToCamel) ⇒ <code>string</code>
    * [.camelToSnake(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+camelToSnake) ⇒ <code>string</code>


<br><a name="new_module_se/fivebyfive/ortho/extensions..StringHelper_new"></a>

#### new StringHelper($object)

| Param | Type |
| --- | --- |
| $object | [<code>ObjectHelper</code>](#module_se/fivebyfive/ortho/extensions..ObjectHelper) | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+sanitize"></a>

#### stringHelper.sanitize(str) ⇒ <code>string</code>
> Make sure argument is stringy


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+isEmpty"></a>

#### stringHelper.isEmpty(str) ⇒ <code>boolean</code>
> Check if argument is empty, i.e. `undefined`, `null`, `''` &c.


| Param | Type |
| --- | --- |
| str | <code>string</code>, <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+hexToRgb"></a>

#### stringHelper.hexToRgb(hex) ⇒ <code>RgbColor</code>
> Convert a color in hex format (e.g. `#fff`, `#00ffee`) to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+rgbaToRgb"></a>

#### stringHelper.rgbaToRgb(rgba) ⇒ <code>RgbaColor</code>
> Parse a color in RGBA string format.


| Param | Type |
| --- | --- |
| rgba | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+snakeToCamel"></a>

#### stringHelper.snakeToCamel(str) ⇒ <code>string</code>
> Convert a string from `snake-case` to `camelCase`.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+camelToSnake"></a>

#### stringHelper.camelToSnake(str) ⇒ <code>string</code>
> Convert a string from `camelCase` to `snake-case`.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper"></a>

### se/fivebyfive/ortho/extensions~DomHelper
> Helpers for traversing DOM. Injectable as `$dom` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)

**Alias:** `module:se/fivebyfive/ortho/extensions~DomHelper`


* [~DomHelper](#module_se/fivebyfive/ortho/extensions..DomHelper)
    * [.onEvents(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEvents)
    * [.onEventsWithoutDefault(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEventsWithoutDefault)
    * [.getPosition(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getPosition) ⇒ <code>Object</code>
    * [.getSize(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getSize) ⇒ <code>Object</code>
    * [.getValue(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getValue) ⇒ <code>string</code>
    * [.setValue(element, value)](#module_se/fivebyfive/ortho/extensions..DomHelper+setValue) ⇒ <code>string</code>
    * [.createTag(tagName, attributes, ...children)](#module_se/fivebyfive/ortho/extensions..DomHelper+createTag) ⇒ <code>external:HTMLElement</code>
    * [.ensureElement(selectorOrElement)](#module_se/fivebyfive/ortho/extensions..DomHelper+ensureElement) ⇒ <code>external:Element</code>


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+onEvents"></a>

#### domHelper.onEvents(element, eventNames, ...callbacks)
> Connect `callbacks` to the list of events in `eventNames` on `element`.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| eventNames | <code>Array.&lt;string&gt;</code> | 
| ...callbacks | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+onEventsWithoutDefault"></a>

#### domHelper.onEventsWithoutDefault(element, eventNames, ...callbacks)
> Connect `callbacks` to the list of events in `eventNames` on `element`.
> Also wraps all callbacks in a function that calls `e.preventDefault()' on
> all trigger events.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| eventNames | <code>Array.&lt;string&gt;</code> | 
| ...callbacks | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+getPosition"></a>

#### domHelper.getPosition(element) ⇒ <code>Object</code>
> Get x and y coordinates of `element`


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+getSize"></a>

#### domHelper.getSize(element) ⇒ <code>Object</code>
> Get dimensions of `element`


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+getValue"></a>

#### domHelper.getValue(element) ⇒ <code>string</code>
> Get sanitized value from `element` (assumed to be an input element),
> or empty string if there is no value.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+setValue"></a>

#### domHelper.setValue(element, value) ⇒ <code>string</code>
> Set sanitized `value` on `element` (assumed to be an input element),
> or empty string if there is no value.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| value | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+createTag"></a>

#### domHelper.createTag(tagName, attributes, ...children) ⇒ <code>external:HTMLElement</code>
> Create an HTML element.


| Param | Type |
| --- | --- |
| tagName | <code>string</code> | 
| attributes | <code>Object</code> | 
| ...children | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+ensureElement"></a>

#### domHelper.ensureElement(selectorOrElement) ⇒ <code>external:Element</code>
> If `selectOrElement` is an `Element`, return it, otherwise try to find it
> treating `selectOrElement` as a dom query.


| Param | Type |
| --- | --- |
| selectorOrElement | <code>string</code>, <code>exernal:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper"></a>

### se/fivebyfive/ortho/extensions~QueryHelper
> Helper for handling dom querys. Injectable from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal) as `$query`.

**Alias:** `module:se/fivebyfive/ortho/extensions~QueryHelper`


* [~QueryHelper](#module_se/fivebyfive/ortho/extensions..QueryHelper)
    * [.map(root, selector, callback)](#module_se/fivebyfive/ortho/extensions..QueryHelper+map) ⇒ <code>Array.&lt;any&gt;</code>
    * [.queryByAttribute(root, attribute)](#module_se/fivebyfive/ortho/extensions..QueryHelper+queryByAttribute) ⇒ <code>Object</code>
    * [.dataSelectorAll(root, attribute, ...otherAttributes)](#module_se/fivebyfive/ortho/extensions..QueryHelper+dataSelectorAll) ⇒ <code>Array.&lt;any&gt;</code>


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper+map"></a>

#### queryHelper.map(root, selector, callback) ⇒ <code>Array.&lt;any&gt;</code>
> Wrapper around `querySelectorAll` allowing you to pass along a callback to call on all elements found

**Returns**: <code>Array.&lt;any&gt;</code> - The mapped list  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| selector | <code>string</code> | 
| callback | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper+queryByAttribute"></a>

#### queryHelper.queryByAttribute(root, attribute) ⇒ <code>Object</code>
> Query by attribute name.

**Returns**: <code>Object</code> - all matching elements, plus metadata.  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| attribute | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper+dataSelectorAll"></a>

#### queryHelper.dataSelectorAll(root, attribute, ...otherAttributes) ⇒ <code>Array.&lt;any&gt;</code>
> Query by data-attribute. Optionally adds other attributes to result

**Returns**: <code>Array.&lt;any&gt;</code> - List of elements, along with index, and attribute values.  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| attribute | <code>string</code> | 
| ...otherAttributes | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper"></a>

### se/fivebyfive/ortho/extensions~CssHelper
> Helper for getting css-vars and creating classnames. Injected as `$css` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal).

**Alias:** `module:se/fivebyfive/ortho/extensions~CssHelper`


* [~CssHelper](#module_se/fivebyfive/ortho/extensions..CssHelper)
    * [.getVar(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVar) ⇒ <code>string</code>
    * [.getVarAsColor(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVarAsColor) ⇒ <code>ColorRgb</code>
    * [.classNames(element, ...variants)](#module_se/fivebyfive/ortho/extensions..CssHelper+classNames) ⇒ <code>Array.&lt;string&gt;</code>


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper+getVar"></a>

#### cssHelper.getVar(key, root) ⇒ <code>string</code>
> Get CSS variable with name `key`, if it exists under `root`


| Param | Type | Default |
| --- | --- | --- |
| key | <code>string</code> |  | 
| root | <code>external:HTMLELement</code> | <code></code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper+getVarAsColor"></a>

#### cssHelper.getVarAsColor(key, root) ⇒ <code>ColorRgb</code>
> Get CSS variable with name `key`, if it exists under `root`, converted to RGB.


| Param | Type | Default |
| --- | --- | --- |
| key | <code>string</code> |  | 
| root | <code>external:HTMLELement</code> | <code></code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper+classNames"></a>

#### cssHelper.classNames(element, ...variants) ⇒ <code>Array.&lt;string&gt;</code>
> Create a list of classnames, consisting of `element` + `element--variant` for every `variants`


| Param | Type |
| --- | --- |
| element | <code>string</code> | 
| ...variants | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils"></a>

### se/fivebyfive/ortho/extensions~LinearUtils
> Linear interpolation functions. Injected as `$linear` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal).

**Alias:** `module:se/fivebyfive/ortho/extensions~LinearUtils`


* [~LinearUtils](#module_se/fivebyfive/ortho/extensions..LinearUtils)
    * [.lerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+lerp) ⇒ <code>Number</code>
    * [.clamp(a, min, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+clamp) ⇒ <code>Number</code>
    * [.invlerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+invlerp) ⇒ <code>Number</code>
    * [.range(x1, y1, x2, y2, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+range) ⇒ <code>Number</code>
    * [.rangeMap(map, from, to, val)](#module_se/fivebyfive/ortho/extensions..LinearUtils+rangeMap) ⇒ <code>Number</code>
    * [.modLimit(num, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+modLimit) ⇒ <code>number</code>


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+lerp"></a>

#### linearUtils.lerp(x, y, a) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - A value between `x` and `y` at the decimal point `a`.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> |  |
| y | <code>Number</code> |  |
| a | <code>Number</code> | Ratio -- between `0.0` and `1.0` (inclusive) |

**Example**  
```js
$linear->lerp(0, 10, .5); // => 5
```

<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+clamp"></a>

#### linearUtils.clamp(a, min, max) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - `a` or `min` if `a < min`, or `max` if `a > max`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>Number</code> |  |  |
| min | <code>Number</code> | <code>0</code> | (default: `0`) |
| max | <code>Number</code> | <code>1</code> | (default: `1`) |

**Example**  
```js
$linear->clamp(10, 2, 5); // => 5
```

<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+invlerp"></a>

#### linearUtils.invlerp(x, y, a) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - Where `a` falls between `x` and `y` as a ratio
between `0.0` and `1.0`. @see lerp  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| y | <code>Number</code> | 
| a | <code>Number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+range"></a>

#### linearUtils.range(x1, y1, x2, y2, a) ⇒ <code>Number</code>
> Converts a number from one range to another

**Returns**: <code>Number</code> - The value `a` converted to the value at the same place in `[x2 ... y2]`
as `a` has in `[x1 ... y1]`  

| Param | Type |
| --- | --- |
| x1 | <code>Number</code> | 
| y1 | <code>Number</code> | 
| x2 | <code>Number</code> | 
| y2 | <code>Number</code> | 
| a | <code>Number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+rangeMap"></a>

#### linearUtils.rangeMap(map, from, to, val) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - If `maps` is an array of maps containing at least the keys
from the string `from` and `to`, representing corresponding values in two ranges,
return `val` from range `from` fitted to the range `b`.  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>Array.&lt;Map.&lt;string, Array.&lt;Number&gt;&gt;&gt;</code> | s |
| from | <code>string</code> |  |
| to | <code>string</code> |  |
| val | <code>Number</code> |  |


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+modLimit"></a>

#### linearUtils.modLimit(num, max) ⇒ <code>number</code>
> Return `num` limited to between `0` and `max`, using modulo
> logic


| Param | Type |
| --- | --- |
| num | <code>number</code> | 
| max | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..PartialColor"></a>

### se/fivebyfive/ortho/extensions~PartialColor : <code>Object</code>
> An object representing parts of a color in RGBA colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |
| a | <code>number</code> | Alpha |


<br><a name="module_se/fivebyfive/ortho/extensions..RgbColor"></a>

### se/fivebyfive/ortho/extensions~RgbColor : <code>Object</code>
> An object representing a color in RGB colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |


<br><a name="module_se/fivebyfive/ortho/extensions..RgbaColor"></a>

### se/fivebyfive/ortho/extensions~RgbaColor : <code>Object</code>
> An object representing a color in RGBA colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |
| a | <code>number</code> | Alpha |


<br><a name="module_se/fivebyfive/ortho/extensions"></a>

## se/fivebyfive/ortho/extensions

* [se/fivebyfive/ortho/extensions](#module_se/fivebyfive/ortho/extensions)
    * [~ArrayHelper](#module_se/fivebyfive/ortho/extensions..ArrayHelper)
        * [new ArrayHelper()](#new_module_se/fivebyfive/ortho/extensions..ArrayHelper_new)
        * [.ensureArray(arrOrItem)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+ensureArray) ⇒ <code>Array.&lt;any&gt;</code>
        * [.repeat(value, length)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+repeat) ⇒ <code>Array.&lt;any&gt;</code>
    * [~ObjectHelper](#module_se/fivebyfive/ortho/extensions..ObjectHelper)
        * [new ObjectHelper($array)](#new_module_se/fivebyfive/ortho/extensions..ObjectHelper_new)
        * [.merge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+merge) ⇒ <code>object</code>
        * [.disjunctMerge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+disjunctMerge) ⇒ <code>object</code>
        * [.immutableMerge(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+immutableMerge) ⇒ <code>object</code>
        * [.allKeys(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+allKeys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.diffKeys(a, b)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+diffKeys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.filterKeys(obj, ...keys)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+filterKeys) ⇒ <code>object</code>
        * [.fromKeyValuePair(key, value)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePair) ⇒ <code>object</code>
        * [.fromKeyValuePairs(...pairs)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePairs) ⇒ <code>object</code>
        * [.toKeyValuePairs(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+toKeyValuePairs) ⇒ <code>any</code>
        * [.split(obj)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+split) ⇒ <code>Array.&lt;object&gt;</code>
    * [~StringHelper](#module_se/fivebyfive/ortho/extensions..StringHelper)
        * [new StringHelper($object)](#new_module_se/fivebyfive/ortho/extensions..StringHelper_new)
        * [.sanitize(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+sanitize) ⇒ <code>string</code>
        * [.isEmpty(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+isEmpty) ⇒ <code>boolean</code>
        * [.hexToRgb(hex)](#module_se/fivebyfive/ortho/extensions..StringHelper+hexToRgb) ⇒ <code>RgbColor</code>
        * [.rgbaToRgb(rgba)](#module_se/fivebyfive/ortho/extensions..StringHelper+rgbaToRgb) ⇒ <code>RgbaColor</code>
        * [.snakeToCamel(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+snakeToCamel) ⇒ <code>string</code>
        * [.camelToSnake(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+camelToSnake) ⇒ <code>string</code>
    * [~DomHelper](#module_se/fivebyfive/ortho/extensions..DomHelper)
        * [.onEvents(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEvents)
        * [.onEventsWithoutDefault(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEventsWithoutDefault)
        * [.getPosition(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getPosition) ⇒ <code>Object</code>
        * [.getSize(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getSize) ⇒ <code>Object</code>
        * [.getValue(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getValue) ⇒ <code>string</code>
        * [.setValue(element, value)](#module_se/fivebyfive/ortho/extensions..DomHelper+setValue) ⇒ <code>string</code>
        * [.createTag(tagName, attributes, ...children)](#module_se/fivebyfive/ortho/extensions..DomHelper+createTag) ⇒ <code>external:HTMLElement</code>
        * [.ensureElement(selectorOrElement)](#module_se/fivebyfive/ortho/extensions..DomHelper+ensureElement) ⇒ <code>external:Element</code>
    * [~QueryHelper](#module_se/fivebyfive/ortho/extensions..QueryHelper)
        * [.map(root, selector, callback)](#module_se/fivebyfive/ortho/extensions..QueryHelper+map) ⇒ <code>Array.&lt;any&gt;</code>
        * [.queryByAttribute(root, attribute)](#module_se/fivebyfive/ortho/extensions..QueryHelper+queryByAttribute) ⇒ <code>Object</code>
        * [.dataSelectorAll(root, attribute, ...otherAttributes)](#module_se/fivebyfive/ortho/extensions..QueryHelper+dataSelectorAll) ⇒ <code>Array.&lt;any&gt;</code>
    * [~CssHelper](#module_se/fivebyfive/ortho/extensions..CssHelper)
        * [.getVar(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVar) ⇒ <code>string</code>
        * [.getVarAsColor(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVarAsColor) ⇒ <code>ColorRgb</code>
        * [.classNames(element, ...variants)](#module_se/fivebyfive/ortho/extensions..CssHelper+classNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [~LinearUtils](#module_se/fivebyfive/ortho/extensions..LinearUtils)
        * [.lerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+lerp) ⇒ <code>Number</code>
        * [.clamp(a, min, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+clamp) ⇒ <code>Number</code>
        * [.invlerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+invlerp) ⇒ <code>Number</code>
        * [.range(x1, y1, x2, y2, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+range) ⇒ <code>Number</code>
        * [.rangeMap(map, from, to, val)](#module_se/fivebyfive/ortho/extensions..LinearUtils+rangeMap) ⇒ <code>Number</code>
        * [.modLimit(num, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+modLimit) ⇒ <code>number</code>
    * [~PartialColor](#module_se/fivebyfive/ortho/extensions..PartialColor) : <code>Object</code>
    * [~RgbColor](#module_se/fivebyfive/ortho/extensions..RgbColor) : <code>Object</code>
    * [~RgbaColor](#module_se/fivebyfive/ortho/extensions..RgbaColor) : <code>Object</code>


<br><a name="module_se/fivebyfive/ortho/extensions..ArrayHelper"></a>

### se/fivebyfive/ortho/extensions~ArrayHelper
**Alias:** `module:se/fivebyfive/ortho/extensions~ArrayHelper`


* [~ArrayHelper](#module_se/fivebyfive/ortho/extensions..ArrayHelper)
    * [new ArrayHelper()](#new_module_se/fivebyfive/ortho/extensions..ArrayHelper_new)
    * [.ensureArray(arrOrItem)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+ensureArray) ⇒ <code>Array.&lt;any&gt;</code>
    * [.repeat(value, length)](#module_se/fivebyfive/ortho/extensions..ArrayHelper+repeat) ⇒ <code>Array.&lt;any&gt;</code>


<br><a name="new_module_se/fivebyfive/ortho/extensions..ArrayHelper_new"></a>

#### new ArrayHelper()
> Array utilities. Injectable as `$array` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)


<br><a name="module_se/fivebyfive/ortho/extensions..ArrayHelper+ensureArray"></a>

#### arrayHelper.ensureArray(arrOrItem) ⇒ <code>Array.&lt;any&gt;</code>
**Returns**: <code>Array.&lt;any&gt;</code> - `arrOrItem` if it is an array, or `[arrOrItem]` if not.  

| Param | Type |
| --- | --- |
| arrOrItem | <code>any</code>, <code>Array.&lt;any&gt;</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ArrayHelper+repeat"></a>

#### arrayHelper.repeat(value, length) ⇒ <code>Array.&lt;any&gt;</code>
**Returns**: <code>Array.&lt;any&gt;</code> - An array containing `value` `length` times.  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| length | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper"></a>

### se/fivebyfive/ortho/extensions~ObjectHelper
> Helper for `object`s. Injectable as `$object` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)

**Alias:** `module:se/fivebyfive/ortho/extensions~ObjectHelper`


* [~ObjectHelper](#module_se/fivebyfive/ortho/extensions..ObjectHelper)
    * [new ObjectHelper($array)](#new_module_se/fivebyfive/ortho/extensions..ObjectHelper_new)
    * [.merge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+merge) ⇒ <code>object</code>
    * [.disjunctMerge(target, ...sources)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+disjunctMerge) ⇒ <code>object</code>
    * [.immutableMerge(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+immutableMerge) ⇒ <code>object</code>
    * [.allKeys(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+allKeys) ⇒ <code>Array.&lt;string&gt;</code>
    * [.diffKeys(a, b)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+diffKeys) ⇒ <code>Array.&lt;string&gt;</code>
    * [.filterKeys(obj, ...keys)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+filterKeys) ⇒ <code>object</code>
    * [.fromKeyValuePair(key, value)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePair) ⇒ <code>object</code>
    * [.fromKeyValuePairs(...pairs)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePairs) ⇒ <code>object</code>
    * [.toKeyValuePairs(...objects)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+toKeyValuePairs) ⇒ <code>any</code>
    * [.split(obj)](#module_se/fivebyfive/ortho/extensions..ObjectHelper+split) ⇒ <code>Array.&lt;object&gt;</code>


<br><a name="new_module_se/fivebyfive/ortho/extensions..ObjectHelper_new"></a>

#### new ObjectHelper($array)

| Param | Type |
| --- | --- |
| $array | [<code>ArrayHelper</code>](#module_se/fivebyfive/ortho/extensions..ArrayHelper) | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+merge"></a>

#### objectHelper.merge(target, ...sources) ⇒ <code>object</code>
> Copy the keys and values from the objects `sources` into `target`, overwriting
> existing keys.

**Returns**: <code>object</code> - `target`  

| Param | Type |
| --- | --- |
| target | <code>object</code> | 
| ...sources | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+disjunctMerge"></a>

#### objectHelper.disjunctMerge(target, ...sources) ⇒ <code>object</code>
> Copy the keys and values from the objects `sources` into `target`.
> Skip keys that already exist.

**Returns**: <code>object</code> - `target`  

| Param | Type |
| --- | --- |
| target | <code>object</code> | 
| ...sources | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+immutableMerge"></a>

#### objectHelper.immutableMerge(...objects) ⇒ <code>object</code>
> Combine `objects` into a new `object` -- returning the result


| Param | Type |
| --- | --- |
| ...objects | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+allKeys"></a>

#### objectHelper.allKeys(...objects) ⇒ <code>Array.&lt;string&gt;</code>
> Get all unique keys from `objects` as an array.


| Param | Type |
| --- | --- |
| ...objects | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+diffKeys"></a>

#### objectHelper.diffKeys(a, b) ⇒ <code>Array.&lt;string&gt;</code>
> Get all keys that are only in `a` or only in `b`


| Param | Type |
| --- | --- |
| a | <code>object</code> | 
| b | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+filterKeys"></a>

#### objectHelper.filterKeys(obj, ...keys) ⇒ <code>object</code>
> Return a shallow copy of `obj`, keeping only the values whose keys
> are in `keys`


| Param | Type |
| --- | --- |
| obj | <code>object</code> | 
| ...keys | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePair"></a>

#### objectHelper.fromKeyValuePair(key, value) ⇒ <code>object</code>

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>any</code> | 

**Example**  
```js
const obj = fromKeyValuePair('foo', 10); // => obj === {foo: 10} 
```

<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+fromKeyValuePairs"></a>

#### objectHelper.fromKeyValuePairs(...pairs) ⇒ <code>object</code>
> Give an array of arrays, `pairs` representing a list of keys and values,
> create a new object containing those keys and values.


| Param | Type |
| --- | --- |
| ...pairs | <code>string</code>, <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+toKeyValuePairs"></a>

#### objectHelper.toKeyValuePairs(...objects) ⇒ <code>any</code>
> Get all keys and values from `objects`, and return them as an array of key/value pairs


| Param | Type |
| --- | --- |
| ...objects | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..ObjectHelper+split"></a>

#### objectHelper.split(obj) ⇒ <code>Array.&lt;object&gt;</code>
> Split an object into as many parts as the most number of items in any array-value
> contained in the object


| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

**Example**  
```js
split({a: [0, 1, 2]}); // => [{a: 0}, {a: 1}, {a: 2}] 
```

<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper"></a>

### se/fivebyfive/ortho/extensions~StringHelper
> Helper functions for handling strings. Injectable as `$string` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)

**Alias:** `module:se/fivebyfive/ortho/extensions~StringHelper`


* [~StringHelper](#module_se/fivebyfive/ortho/extensions..StringHelper)
    * [new StringHelper($object)](#new_module_se/fivebyfive/ortho/extensions..StringHelper_new)
    * [.sanitize(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+sanitize) ⇒ <code>string</code>
    * [.isEmpty(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+isEmpty) ⇒ <code>boolean</code>
    * [.hexToRgb(hex)](#module_se/fivebyfive/ortho/extensions..StringHelper+hexToRgb) ⇒ <code>RgbColor</code>
    * [.rgbaToRgb(rgba)](#module_se/fivebyfive/ortho/extensions..StringHelper+rgbaToRgb) ⇒ <code>RgbaColor</code>
    * [.snakeToCamel(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+snakeToCamel) ⇒ <code>string</code>
    * [.camelToSnake(str)](#module_se/fivebyfive/ortho/extensions..StringHelper+camelToSnake) ⇒ <code>string</code>


<br><a name="new_module_se/fivebyfive/ortho/extensions..StringHelper_new"></a>

#### new StringHelper($object)

| Param | Type |
| --- | --- |
| $object | [<code>ObjectHelper</code>](#module_se/fivebyfive/ortho/extensions..ObjectHelper) | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+sanitize"></a>

#### stringHelper.sanitize(str) ⇒ <code>string</code>
> Make sure argument is stringy


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+isEmpty"></a>

#### stringHelper.isEmpty(str) ⇒ <code>boolean</code>
> Check if argument is empty, i.e. `undefined`, `null`, `''` &c.


| Param | Type |
| --- | --- |
| str | <code>string</code>, <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+hexToRgb"></a>

#### stringHelper.hexToRgb(hex) ⇒ <code>RgbColor</code>
> Convert a color in hex format (e.g. `#fff`, `#00ffee`) to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+rgbaToRgb"></a>

#### stringHelper.rgbaToRgb(rgba) ⇒ <code>RgbaColor</code>
> Parse a color in RGBA string format.


| Param | Type |
| --- | --- |
| rgba | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+snakeToCamel"></a>

#### stringHelper.snakeToCamel(str) ⇒ <code>string</code>
> Convert a string from `snake-case` to `camelCase`.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..StringHelper+camelToSnake"></a>

#### stringHelper.camelToSnake(str) ⇒ <code>string</code>
> Convert a string from `camelCase` to `snake-case`.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper"></a>

### se/fivebyfive/ortho/extensions~DomHelper
> Helpers for traversing DOM. Injectable as `$dom` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal)

**Alias:** `module:se/fivebyfive/ortho/extensions~DomHelper`


* [~DomHelper](#module_se/fivebyfive/ortho/extensions..DomHelper)
    * [.onEvents(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEvents)
    * [.onEventsWithoutDefault(element, eventNames, ...callbacks)](#module_se/fivebyfive/ortho/extensions..DomHelper+onEventsWithoutDefault)
    * [.getPosition(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getPosition) ⇒ <code>Object</code>
    * [.getSize(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getSize) ⇒ <code>Object</code>
    * [.getValue(element)](#module_se/fivebyfive/ortho/extensions..DomHelper+getValue) ⇒ <code>string</code>
    * [.setValue(element, value)](#module_se/fivebyfive/ortho/extensions..DomHelper+setValue) ⇒ <code>string</code>
    * [.createTag(tagName, attributes, ...children)](#module_se/fivebyfive/ortho/extensions..DomHelper+createTag) ⇒ <code>external:HTMLElement</code>
    * [.ensureElement(selectorOrElement)](#module_se/fivebyfive/ortho/extensions..DomHelper+ensureElement) ⇒ <code>external:Element</code>


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+onEvents"></a>

#### domHelper.onEvents(element, eventNames, ...callbacks)
> Connect `callbacks` to the list of events in `eventNames` on `element`.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| eventNames | <code>Array.&lt;string&gt;</code> | 
| ...callbacks | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+onEventsWithoutDefault"></a>

#### domHelper.onEventsWithoutDefault(element, eventNames, ...callbacks)
> Connect `callbacks` to the list of events in `eventNames` on `element`.
> Also wraps all callbacks in a function that calls `e.preventDefault()' on
> all trigger events.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| eventNames | <code>Array.&lt;string&gt;</code> | 
| ...callbacks | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+getPosition"></a>

#### domHelper.getPosition(element) ⇒ <code>Object</code>
> Get x and y coordinates of `element`


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+getSize"></a>

#### domHelper.getSize(element) ⇒ <code>Object</code>
> Get dimensions of `element`


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+getValue"></a>

#### domHelper.getValue(element) ⇒ <code>string</code>
> Get sanitized value from `element` (assumed to be an input element),
> or empty string if there is no value.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+setValue"></a>

#### domHelper.setValue(element, value) ⇒ <code>string</code>
> Set sanitized `value` on `element` (assumed to be an input element),
> or empty string if there is no value.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| value | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+createTag"></a>

#### domHelper.createTag(tagName, attributes, ...children) ⇒ <code>external:HTMLElement</code>
> Create an HTML element.


| Param | Type |
| --- | --- |
| tagName | <code>string</code> | 
| attributes | <code>Object</code> | 
| ...children | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..DomHelper+ensureElement"></a>

#### domHelper.ensureElement(selectorOrElement) ⇒ <code>external:Element</code>
> If `selectOrElement` is an `Element`, return it, otherwise try to find it
> treating `selectOrElement` as a dom query.


| Param | Type |
| --- | --- |
| selectorOrElement | <code>string</code>, <code>exernal:Element</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper"></a>

### se/fivebyfive/ortho/extensions~QueryHelper
> Helper for handling dom querys. Injectable from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal) as `$query`.

**Alias:** `module:se/fivebyfive/ortho/extensions~QueryHelper`


* [~QueryHelper](#module_se/fivebyfive/ortho/extensions..QueryHelper)
    * [.map(root, selector, callback)](#module_se/fivebyfive/ortho/extensions..QueryHelper+map) ⇒ <code>Array.&lt;any&gt;</code>
    * [.queryByAttribute(root, attribute)](#module_se/fivebyfive/ortho/extensions..QueryHelper+queryByAttribute) ⇒ <code>Object</code>
    * [.dataSelectorAll(root, attribute, ...otherAttributes)](#module_se/fivebyfive/ortho/extensions..QueryHelper+dataSelectorAll) ⇒ <code>Array.&lt;any&gt;</code>


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper+map"></a>

#### queryHelper.map(root, selector, callback) ⇒ <code>Array.&lt;any&gt;</code>
> Wrapper around `querySelectorAll` allowing you to pass along a callback to call on all elements found

**Returns**: <code>Array.&lt;any&gt;</code> - The mapped list  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| selector | <code>string</code> | 
| callback | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper+queryByAttribute"></a>

#### queryHelper.queryByAttribute(root, attribute) ⇒ <code>Object</code>
> Query by attribute name.

**Returns**: <code>Object</code> - all matching elements, plus metadata.  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| attribute | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..QueryHelper+dataSelectorAll"></a>

#### queryHelper.dataSelectorAll(root, attribute, ...otherAttributes) ⇒ <code>Array.&lt;any&gt;</code>
> Query by data-attribute. Optionally adds other attributes to result

**Returns**: <code>Array.&lt;any&gt;</code> - List of elements, along with index, and attribute values.  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| attribute | <code>string</code> | 
| ...otherAttributes | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper"></a>

### se/fivebyfive/ortho/extensions~CssHelper
> Helper for getting css-vars and creating classnames. Injected as `$css` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal).

**Alias:** `module:se/fivebyfive/ortho/extensions~CssHelper`


* [~CssHelper](#module_se/fivebyfive/ortho/extensions..CssHelper)
    * [.getVar(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVar) ⇒ <code>string</code>
    * [.getVarAsColor(key, root)](#module_se/fivebyfive/ortho/extensions..CssHelper+getVarAsColor) ⇒ <code>ColorRgb</code>
    * [.classNames(element, ...variants)](#module_se/fivebyfive/ortho/extensions..CssHelper+classNames) ⇒ <code>Array.&lt;string&gt;</code>


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper+getVar"></a>

#### cssHelper.getVar(key, root) ⇒ <code>string</code>
> Get CSS variable with name `key`, if it exists under `root`


| Param | Type | Default |
| --- | --- | --- |
| key | <code>string</code> |  | 
| root | <code>external:HTMLELement</code> | <code></code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper+getVarAsColor"></a>

#### cssHelper.getVarAsColor(key, root) ⇒ <code>ColorRgb</code>
> Get CSS variable with name `key`, if it exists under `root`, converted to RGB.


| Param | Type | Default |
| --- | --- | --- |
| key | <code>string</code> |  | 
| root | <code>external:HTMLELement</code> | <code></code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..CssHelper+classNames"></a>

#### cssHelper.classNames(element, ...variants) ⇒ <code>Array.&lt;string&gt;</code>
> Create a list of classnames, consisting of `element` + `element--variant` for every `variants`


| Param | Type |
| --- | --- |
| element | <code>string</code> | 
| ...variants | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils"></a>

### se/fivebyfive/ortho/extensions~LinearUtils
> Linear interpolation functions. Injected as `$linear` from [module:se/fivebyfive/ortho~Orthogonal](module:se/fivebyfive/ortho~Orthogonal).

**Alias:** `module:se/fivebyfive/ortho/extensions~LinearUtils`


* [~LinearUtils](#module_se/fivebyfive/ortho/extensions..LinearUtils)
    * [.lerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+lerp) ⇒ <code>Number</code>
    * [.clamp(a, min, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+clamp) ⇒ <code>Number</code>
    * [.invlerp(x, y, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+invlerp) ⇒ <code>Number</code>
    * [.range(x1, y1, x2, y2, a)](#module_se/fivebyfive/ortho/extensions..LinearUtils+range) ⇒ <code>Number</code>
    * [.rangeMap(map, from, to, val)](#module_se/fivebyfive/ortho/extensions..LinearUtils+rangeMap) ⇒ <code>Number</code>
    * [.modLimit(num, max)](#module_se/fivebyfive/ortho/extensions..LinearUtils+modLimit) ⇒ <code>number</code>


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+lerp"></a>

#### linearUtils.lerp(x, y, a) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - A value between `x` and `y` at the decimal point `a`.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> |  |
| y | <code>Number</code> |  |
| a | <code>Number</code> | Ratio -- between `0.0` and `1.0` (inclusive) |

**Example**  
```js
$linear->lerp(0, 10, .5); // => 5
```

<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+clamp"></a>

#### linearUtils.clamp(a, min, max) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - `a` or `min` if `a < min`, or `max` if `a > max`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>Number</code> |  |  |
| min | <code>Number</code> | <code>0</code> | (default: `0`) |
| max | <code>Number</code> | <code>1</code> | (default: `1`) |

**Example**  
```js
$linear->clamp(10, 2, 5); // => 5
```

<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+invlerp"></a>

#### linearUtils.invlerp(x, y, a) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - Where `a` falls between `x` and `y` as a ratio
between `0.0` and `1.0`. @see lerp  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| y | <code>Number</code> | 
| a | <code>Number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+range"></a>

#### linearUtils.range(x1, y1, x2, y2, a) ⇒ <code>Number</code>
> Converts a number from one range to another

**Returns**: <code>Number</code> - The value `a` converted to the value at the same place in `[x2 ... y2]`
as `a` has in `[x1 ... y1]`  

| Param | Type |
| --- | --- |
| x1 | <code>Number</code> | 
| y1 | <code>Number</code> | 
| x2 | <code>Number</code> | 
| y2 | <code>Number</code> | 
| a | <code>Number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+rangeMap"></a>

#### linearUtils.rangeMap(map, from, to, val) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - If `maps` is an array of maps containing at least the keys
from the string `from` and `to`, representing corresponding values in two ranges,
return `val` from range `from` fitted to the range `b`.  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>Array.&lt;Map.&lt;string, Array.&lt;Number&gt;&gt;&gt;</code> | s |
| from | <code>string</code> |  |
| to | <code>string</code> |  |
| val | <code>Number</code> |  |


<br><a name="module_se/fivebyfive/ortho/extensions..LinearUtils+modLimit"></a>

#### linearUtils.modLimit(num, max) ⇒ <code>number</code>
> Return `num` limited to between `0` and `max`, using modulo
> logic


| Param | Type |
| --- | --- |
| num | <code>number</code> | 
| max | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/extensions..PartialColor"></a>

### se/fivebyfive/ortho/extensions~PartialColor : <code>Object</code>
> An object representing parts of a color in RGBA colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |
| a | <code>number</code> | Alpha |


<br><a name="module_se/fivebyfive/ortho/extensions..RgbColor"></a>

### se/fivebyfive/ortho/extensions~RgbColor : <code>Object</code>
> An object representing a color in RGB colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |


<br><a name="module_se/fivebyfive/ortho/extensions..RgbaColor"></a>

### se/fivebyfive/ortho/extensions~RgbaColor : <code>Object</code>
> An object representing a color in RGBA colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |
| a | <code>number</code> | Alpha |


<br><a name="module_se/fivebyfive/ortho/extensions/services"></a>

## se/fivebyfive/ortho/extensions/services
> All injectable services from [se/fivebyfive/ortho/extensions](#module_se/fivebyfive/ortho/extensions)


* [se/fivebyfive/ortho/extensions/services](#module_se/fivebyfive/ortho/extensions/services)
    * [.$array](#module_se/fivebyfive/ortho/extensions/services.$array) : [<code>ArrayHelper</code>](#module_se/fivebyfive/ortho/extensions..ArrayHelper)
    * [.$object](#module_se/fivebyfive/ortho/extensions/services.$object) : [<code>ObjectHelper</code>](#module_se/fivebyfive/ortho/extensions..ObjectHelper)
    * [.$string](#module_se/fivebyfive/ortho/extensions/services.$string) : [<code>StringHelper</code>](#module_se/fivebyfive/ortho/extensions..StringHelper)
    * [.$dom](#module_se/fivebyfive/ortho/extensions/services.$dom) : [<code>DomHelper</code>](#module_se/fivebyfive/ortho/extensions..DomHelper)
    * [.$query](#module_se/fivebyfive/ortho/extensions/services.$query) : [<code>QueryHelper</code>](#module_se/fivebyfive/ortho/extensions..QueryHelper)
    * [.$css](#module_se/fivebyfive/ortho/extensions/services.$css) : [<code>CssHelper</code>](#module_se/fivebyfive/ortho/extensions..CssHelper)
    * [.$linear](#module_se/fivebyfive/ortho/extensions/services.$linear) : [<code>LinearUtils</code>](#module_se/fivebyfive/ortho/extensions..LinearUtils)


<br><a name="module_se/fivebyfive/ortho/extensions/services.$array"></a>

### se/fivebyfive/ortho/extensions/services.$array : [<code>ArrayHelper</code>](#module_se/fivebyfive/ortho/extensions..ArrayHelper)

<br><a name="module_se/fivebyfive/ortho/extensions/services.$object"></a>

### se/fivebyfive/ortho/extensions/services.$object : [<code>ObjectHelper</code>](#module_se/fivebyfive/ortho/extensions..ObjectHelper)

<br><a name="module_se/fivebyfive/ortho/extensions/services.$string"></a>

### se/fivebyfive/ortho/extensions/services.$string : [<code>StringHelper</code>](#module_se/fivebyfive/ortho/extensions..StringHelper)

<br><a name="module_se/fivebyfive/ortho/extensions/services.$dom"></a>

### se/fivebyfive/ortho/extensions/services.$dom : [<code>DomHelper</code>](#module_se/fivebyfive/ortho/extensions..DomHelper)

<br><a name="module_se/fivebyfive/ortho/extensions/services.$query"></a>

### se/fivebyfive/ortho/extensions/services.$query : [<code>QueryHelper</code>](#module_se/fivebyfive/ortho/extensions..QueryHelper)

<br><a name="module_se/fivebyfive/ortho/extensions/services.$css"></a>

### se/fivebyfive/ortho/extensions/services.$css : [<code>CssHelper</code>](#module_se/fivebyfive/ortho/extensions..CssHelper)

<br><a name="module_se/fivebyfive/ortho/extensions/services.$linear"></a>

### se/fivebyfive/ortho/extensions/services.$linear : [<code>LinearUtils</code>](#module_se/fivebyfive/ortho/extensions..LinearUtils)
