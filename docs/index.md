## Classes

<dl>
<dt><a href="#Orthogonal">Orthogonal</a> ⇐ <code><a href="#OrthoInjector">OrthoInjector</a></code></dt>
<dd><p>The main entry point</p>
</dd>
<dt><a href="#OrthoCache">OrthoCache</a></dt>
<dd><p>Cache-handler. Service can be injected as <code>$cache</code> from <a href="#Orthogonal">Orthogonal</a>.</p>
</dd>
<dt><a href="#OrthoExpressionParser">OrthoExpressionParser</a></dt>
<dd><p>Primarily used for dependency injection. Contains
methods for reflection -- parsing functions to see
which parameters it has and what they&#39;re called.
Can be dependency injected as a service via <code>Orthogonal</code> as <code>$expressionParser</code>.</p>
</dd>
<dt><a href="#OrthoInjector">OrthoInjector</a></dt>
<dd><p>Dependency injector. Itself injected as <code>$injector</code> from <a href="#Orthogonal">Orthogonal</a>.</p>
</dd>
<dt><a href="#OrthoStoreAction">OrthoStoreAction</a></dt>
<dd><p>Represents an action in <code>OrthoStore</code></p>
</dd>
<dt><a href="#OrthoStore">OrthoStore</a></dt>
<dd><p>Simple state-management. Dependency-injected as <code>$store</code> from <a href="#Orthogonal">Orthogonal</a>.</p>
</dd>
<dt><a href="#OrthoStoreSelector">OrthoStoreSelector</a></dt>
<dd><p>Class representing a selector in <a href="#OrthoStore">OrthoStore</a>.</p>
</dd>
<dt><a href="#OrthoStoreSubscriber">OrthoStoreSubscriber</a></dt>
<dd><p>representing a subscriber in <code>OrthoStore</code></p>
</dd>
<dt><a href="#ColorHarmony">ColorHarmony</a></dt>
<dd><p>Color-harmony generator</p>
</dd>
<dt><a href="#ColorHelper">ColorHelper</a></dt>
<dd><p>Helpers for converting colors among color-spaces</p>
</dd>
<dt><a href="#ColorWheel">ColorWheel</a></dt>
<dd><p>Class for creating color-wheels that can be drawn on an HTML canvas.</p>
</dd>
<dt><a href="#ArrayHelper">ArrayHelper</a></dt>
<dd></dd>
<dt><a href="#CssHelper">CssHelper</a></dt>
<dd></dd>
<dt><a href="#DomHelper">DomHelper</a></dt>
<dd></dd>
<dt><a href="#LinearInterpolationHelper">LinearInterpolationHelper</a></dt>
<dd></dd>
<dt><a href="#ObjectHelper">ObjectHelper</a></dt>
<dd></dd>
<dt><a href="#QueryHelper">QueryHelper</a></dt>
<dd></dd>
<dt><a href="#StringHelper">StringHelper</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#rootServices">rootServices</a> : <code>object</code></dt>
<dd><p>Injectable services</p>
</dd>
<dt><a href="#colorServices">colorServices</a> : <code>object</code></dt>
<dd><p>Injectable services</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#$ortho">$ortho</a> : <code><a href="#Orthogonal">Orthogonal</a></code></dt>
<dd></dd>
<dt><a href="#$cache">$cache</a> : <code><a href="#OrthoCache">OrthoCache</a></code></dt>
<dd></dd>
<dt><a href="#$expressionParser">$expressionParser</a> : <code><a href="#OrthoExpressionParser">OrthoExpressionParser</a></code></dt>
<dd></dd>
<dt><a href="#$injector">$injector</a> : <code><a href="#OrthoInjector">OrthoInjector</a></code></dt>
<dd></dd>
<dt><a href="#$store">$store</a> : <code><a href="#OrthoStore">OrthoStore</a></code></dt>
<dd></dd>
<dt><a href="#$window">$window</a> : <code>external:Window</code></dt>
<dd></dd>
<dt><a href="#$document">$document</a> : <code>external:Document</code></dt>
<dd></dd>
<dt><a href="#$colorHarmony">$colorHarmony</a> : <code><a href="#ColorHarmony">ColorHarmony</a></code></dt>
<dd></dd>
<dt><a href="#$colorHelper">$colorHelper</a> : <code><a href="#ColorHelper">ColorHelper</a></code></dt>
<dd></dd>
<dt><a href="#$colorWheel">$colorWheel</a> : <code>ColorWheelFactory</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#orthogonal">orthogonal()</a></dt>
<dd><p>Initializes Orthogonal</p>
</dd>
<dt><a href="#registerExtensions">registerExtensions(extensions)</a></dt>
<dd></dd>
<dt><a href="#addGetter">addGetter(obj, name, handler)</a></dt>
<dd><p>Helper function for adding a new getter-method to an object.</p>
</dd>
<dt><a href="#dirtyable">dirtyable(baseObj, dirtyProperty)</a> ⇒ <code>any</code></dt>
<dd><p>Wrap an value in a Proxy which sets a property, <code>isDirty</code> when the property
named in <code>dirtyProperty</code> is modified.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ColorRGB">ColorRGB</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ColorHSV">ColorHSV</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ColorHSL">ColorHSL</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PartialColor">PartialColor</a> : <code>Object</code></dt>
<dd><p>An object representing parts of a color in RGBA colorspace</p>
</dd>
<dt><a href="#RgbColor">RgbColor</a> : <code>Object</code></dt>
<dd><p>An object representing a color in RGB colorspace</p>
</dd>
<dt><a href="#RgbaColor">RgbaColor</a> : <code>Object</code></dt>
<dd><p>An object representing a color in RGBA colorspace</p>
</dd>
</dl>


<br><a name="ColorHarmony"></a>

## ColorHarmony
> Color-harmony generator


* [ColorHarmony](#ColorHarmony)
    * [.harmonize(harmony, color)](#ColorHarmony+harmonize) ⇒ [<code>Array.&lt;ColorHSL&gt;</code>](#ColorHSL)
    * [.harmonyNames()](#ColorHarmony+harmonyNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [.harmonies()](#ColorHarmony+harmonies) ⇒ <code>Object</code>


<br><a name="ColorHarmony+harmonize"></a>

### colorHarmony.harmonize(harmony, color) ⇒ [<code>Array.&lt;ColorHSL&gt;</code>](#ColorHSL)
> Calculate colors for `harmony`, starting from `color`

**Returns**: [<code>Array.&lt;ColorHSL&gt;</code>](#ColorHSL) - - Resulting harmonized list of colors  

| Param | Type |
| --- | --- |
| harmony | <code>string</code> | 
| color | [<code>ColorHSL</code>](#ColorHSL) | 


<br><a name="ColorHarmony+harmonyNames"></a>

### colorHarmony.harmonyNames() ⇒ <code>Array.&lt;string&gt;</code>
> Get a list of all available harmonies' names


<br><a name="ColorHarmony+harmonies"></a>

### colorHarmony.harmonies() ⇒ <code>Object</code>
> Get a list of all available harmonies


<br><a name="ColorHelper"></a>

## ColorHelper
> Helpers for converting colors among color-spaces


* [ColorHelper](#ColorHelper)
    * [.hex_to_rgb(hex)](#ColorHelper+hex_to_rgb) ⇒ [<code>ColorRGB</code>](#ColorRGB)
    * [.hex_to_hsl(hex)](#ColorHelper+hex_to_hsl) ⇒ [<code>ColorHSL</code>](#ColorHSL)
    * [.hsl_to_rgb(param0)](#ColorHelper+hsl_to_rgb) ⇒ [<code>ColorRGB</code>](#ColorRGB)
    * [.hsl_to_hex(param0)](#ColorHelper+hsl_to_hex) ⇒ <code>string</code>
    * [.hsl_to_hsv(param0)](#ColorHelper+hsl_to_hsv) ⇒ [<code>ColorHSV</code>](#ColorHSV)
    * [.hsv_to_hsl(param0)](#ColorHelper+hsv_to_hsl) ⇒ [<code>ColorHSL</code>](#ColorHSL)
    * [.rgb_to_hex(param0)](#ColorHelper+rgb_to_hex) ⇒ <code>string</code>
    * [.rgb_to_hsl(param0)](#ColorHelper+rgb_to_hsl) ⇒ [<code>ColorHSL</code>](#ColorHSL)
    * [.rybhue_to_hslhue(hue)](#ColorHelper+rybhue_to_hslhue) ⇒ <code>number</code>
    * [.hslhue_to_rybhue(hue)](#ColorHelper+hslhue_to_rybhue) ⇒ <code>number</code>
    * [.any_to_string(source, type)](#ColorHelper+any_to_string) ⇒ <code>string</code>
    * [.any_to_hsl(source)](#ColorHelper+any_to_hsl) ⇒ [<code>ColorHSL</code>](#ColorHSL)


<br><a name="ColorHelper+hex_to_rgb"></a>

### colorHelper.hex\_to\_rgb(hex) ⇒ [<code>ColorRGB</code>](#ColorRGB)
> Convert Hex to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="ColorHelper+hex_to_hsl"></a>

### colorHelper.hex\_to\_hsl(hex) ⇒ [<code>ColorHSL</code>](#ColorHSL)
> Convert hex string to HSL


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="ColorHelper+hsl_to_rgb"></a>

### colorHelper.hsl\_to\_rgb(param0) ⇒ [<code>ColorRGB</code>](#ColorRGB)

| Param | Type |
| --- | --- |
| param0 | [<code>ColorHSL</code>](#ColorHSL) | 


<br><a name="ColorHelper+hsl_to_hex"></a>

### colorHelper.hsl\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | [<code>ColorHSL</code>](#ColorHSL) | 


<br><a name="ColorHelper+hsl_to_hsv"></a>

### colorHelper.hsl\_to\_hsv(param0) ⇒ [<code>ColorHSV</code>](#ColorHSV)

| Param | Type |
| --- | --- |
| param0 | [<code>ColorHSL</code>](#ColorHSL) | 


<br><a name="ColorHelper+hsv_to_hsl"></a>

### colorHelper.hsv\_to\_hsl(param0) ⇒ [<code>ColorHSL</code>](#ColorHSL)

| Param | Type |
| --- | --- |
| param0 | [<code>ColorHSV</code>](#ColorHSV) | 


<br><a name="ColorHelper+rgb_to_hex"></a>

### colorHelper.rgb\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | [<code>ColorRGB</code>](#ColorRGB) | 


<br><a name="ColorHelper+rgb_to_hsl"></a>

### colorHelper.rgb\_to\_hsl(param0) ⇒ [<code>ColorHSL</code>](#ColorHSL)

| Param | Type |
| --- | --- |
| param0 | [<code>ColorRGB</code>](#ColorRGB) | 


<br><a name="ColorHelper+rybhue_to_hslhue"></a>

### colorHelper.rybhue\_to\_hslhue(hue) ⇒ <code>number</code>
> Translate from RYB color space to HSL


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="ColorHelper+hslhue_to_rybhue"></a>

### colorHelper.hslhue\_to\_rybhue(hue) ⇒ <code>number</code>
> Translate from HSL color space to RYN


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="ColorHelper+any_to_string"></a>

### colorHelper.any\_to\_string(source, type) ⇒ <code>string</code>
> Convert from any color space to any string format


| Param | Type | Description |
| --- | --- | --- |
| source | <code>any</code> |  |
| type | <code>string</code> | `"hex"`, `"rgb"`, `"hsl"`, or `"hsv"` |


<br><a name="ColorHelper+any_to_hsl"></a>

### colorHelper.any\_to\_hsl(source) ⇒ [<code>ColorHSL</code>](#ColorHSL)
> Convert from any color space (include string representations), to HSL.


| Param | Type |
| --- | --- |
| source | <code>any</code> | 


<br><a name="ColorWheel"></a>

## ColorWheel
> Class for creating color-wheels that can be drawn on an HTML canvas.


* [ColorWheel](#ColorWheel)
    * [.set_canvas(canvas)](#ColorWheel+set_canvas)
    * [.color_at(mouseEvent)](#ColorWheel+color_at) ⇒ [<code>ColorHSL</code>](#ColorHSL)
    * [.color_to_pos(param0)](#ColorWheel+color_to_pos) ⇒ <code>Object</code>
    * [.draw(canvas)](#ColorWheel+draw)


<br><a name="ColorWheel+set_canvas"></a>

### colorWheel.set\_canvas(canvas)

| Param | Type |
| --- | --- |
| canvas | <code>any</code> | 


<br><a name="ColorWheel+color_at"></a>

### colorWheel.color\_at(mouseEvent) ⇒ [<code>ColorHSL</code>](#ColorHSL)
> Calculate the color at the given mouse position


| Param | Type |
| --- | --- |
| mouseEvent | <code>external:MouseEvent</code> | 


<br><a name="ColorWheel+color_to_pos"></a>

### colorWheel.color\_to\_pos(param0) ⇒ <code>Object</code>
> Calculate the position of the given color in the color wheel.


| Param | Type |
| --- | --- |
| param0 | [<code>ColorHSL</code>](#ColorHSL) | 


<br><a name="ColorWheel+draw"></a>

### colorWheel.draw(canvas)
> Draw the color wheel.


| Param | Type |
| --- | --- |
| canvas | <code>any</code> | 


<br><a name="ArrayHelper"></a>

## ArrayHelper
**Alias:** `ArrayHelper`


* [ArrayHelper](#ArrayHelper)
    * [new exports.arrayFactory()](#new_ArrayHelper_new)
    * [.ensureArray(arrOrItem)](#ArrayHelper.ensureArray) ⇒ <code>Array.&lt;any&gt;</code>
    * [.repeat(value, length)](#ArrayHelper.repeat) ⇒ <code>Array.&lt;any&gt;</code>


<br><a name="new_ArrayHelper_new"></a>

### new exports.arrayFactory()
> Array manipulation


<br><a name="ArrayHelper.ensureArray"></a>

### ArrayHelper.ensureArray(arrOrItem) ⇒ <code>Array.&lt;any&gt;</code>
**Returns**: <code>Array.&lt;any&gt;</code> - `arrOrItem` if it is an array, or `[arrOrItem]` if not.  

| Param | Type |
| --- | --- |
| arrOrItem | <code>any</code>, <code>Array.&lt;any&gt;</code> | 


<br><a name="ArrayHelper.repeat"></a>

### ArrayHelper.repeat(value, length) ⇒ <code>Array.&lt;any&gt;</code>
**Returns**: <code>Array.&lt;any&gt;</code> - An array containing `value` `length` times.  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| length | <code>number</code> | 


<br><a name="CssHelper"></a>

## CssHelper

* [CssHelper](#CssHelper)
    * [new CssHelper()](#new_CssHelper_new)
    * [.getVar(key, root)](#CssHelper.getVar) ⇒ <code>string</code>
    * [.getVarAsColor(key, root)](#CssHelper.getVarAsColor) ⇒ <code>ColorRgb</code>
    * [.classNames(element, ...variants)](#CssHelper.classNames) ⇒ <code>Array.&lt;string&gt;</code>


<br><a name="new_CssHelper_new"></a>

### new CssHelper()
> Helpers for working with CSS


<br><a name="CssHelper.getVar"></a>

### CssHelper.getVar(key, root) ⇒ <code>string</code>
> Get CSS variable with name `key`, if it exists under `root`


| Param | Type | Default |
| --- | --- | --- |
| key | <code>string</code> |  | 
| root | <code>external:HTMLELement</code> | <code></code> | 


<br><a name="CssHelper.getVarAsColor"></a>

### CssHelper.getVarAsColor(key, root) ⇒ <code>ColorRgb</code>
> Get CSS variable with name `key`, if it exists under `root`, converted to RGB.


| Param | Type | Default |
| --- | --- | --- |
| key | <code>string</code> |  | 
| root | <code>external:HTMLELement</code> | <code></code> | 


<br><a name="CssHelper.classNames"></a>

### CssHelper.classNames(element, ...variants) ⇒ <code>Array.&lt;string&gt;</code>
> Create a list of classnames, consisting of `element` + `element--variant` for every `variants`


| Param | Type |
| --- | --- |
| element | <code>string</code> | 
| ...variants | <code>string</code> | 


<br><a name="DomHelper"></a>

## DomHelper

* [DomHelper](#DomHelper)
    * [new DomHelper()](#new_DomHelper_new)
    * [.onEvents(element, eventNames, ...callbacks)](#DomHelper.onEvents)
    * [.onEventsWithoutDefault(element, eventNames, ...callbacks)](#DomHelper.onEventsWithoutDefault)
    * [.dispatchOnEvent(element, eventNames, store, action, payloadSelector)](#DomHelper.dispatchOnEvent)
    * [.getPosition(element)](#DomHelper.getPosition) ⇒ <code>Object</code>
    * [.getSize(element)](#DomHelper.getSize) ⇒ <code>Object</code>
    * [.getValue(element)](#DomHelper.getValue) ⇒ <code>string</code>
    * [.setValue(element, value)](#DomHelper.setValue) ⇒ <code>string</code>
    * [.createTag(tagName, attributes, ...children)](#DomHelper.createTag) ⇒ <code>external:HTMLElement</code>
    * [.ensureElement(selectorOrElement)](#DomHelper.ensureElement) ⇒ <code>external:Element</code>


<br><a name="new_DomHelper_new"></a>

### new DomHelper()
> Helpers for handling DOM


<br><a name="DomHelper.onEvents"></a>

### DomHelper.onEvents(element, eventNames, ...callbacks)
> Connect`callbacks` to the list of events in `eventNames` on`element`.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| eventNames | <code>Array.&lt;string&gt;</code> | 
| ...callbacks | <code>function</code> | 


<br><a name="DomHelper.onEventsWithoutDefault"></a>

### DomHelper.onEventsWithoutDefault(element, eventNames, ...callbacks)
> Connect `callbacks` to the list of events in `eventNames` on `element`.
> Also wraps all callbacks in a function that calls `e.preventDefault()' on
> all trigger events.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| eventNames | <code>Array.&lt;string&gt;</code> | 
| ...callbacks | <code>function</code> | 


<br><a name="DomHelper.dispatchOnEvent"></a>

### DomHelper.dispatchOnEvent(element, eventNames, store, action, payloadSelector)
> Dispatch `action` on `store` when the given `eventNames` occur.
> `payloadSelector` is a callback-function, which transforms an element into a payload.


| Param | Type |
| --- | --- |
| element | <code>external:Node</code> | 
| eventNames | <code>string</code>, <code>Array.&lt;string&gt;</code> | 
| store | [<code>OrthoStore</code>](#OrthoStore) | 
| action | <code>string</code> | 
| payloadSelector | <code>function</code> | 


<br><a name="DomHelper.getPosition"></a>

### DomHelper.getPosition(element) ⇒ <code>Object</code>
> Get x and y coordinates of `element`


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="DomHelper.getSize"></a>

### DomHelper.getSize(element) ⇒ <code>Object</code>
> Get dimensions of `element`


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="DomHelper.getValue"></a>

### DomHelper.getValue(element) ⇒ <code>string</code>
> Get sanitized value from `element` (assumed to be an input element),
> or empty string if there is no value.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 


<br><a name="DomHelper.setValue"></a>

### DomHelper.setValue(element, value) ⇒ <code>string</code>
> Set sanitized `value` on `element` (assumed to be an input element),
> or empty string if there is no value.


| Param | Type |
| --- | --- |
| element | <code>external:Element</code> | 
| value | <code>string</code> | 


<br><a name="DomHelper.createTag"></a>

### DomHelper.createTag(tagName, attributes, ...children) ⇒ <code>external:HTMLElement</code>
> Create an HTML element.


| Param | Type |
| --- | --- |
| tagName | <code>string</code> | 
| attributes | <code>Object</code> | 
| ...children | <code>any</code> | 


<br><a name="DomHelper.ensureElement"></a>

### DomHelper.ensureElement(selectorOrElement) ⇒ <code>external:Element</code>
> If `selectOrElement` is an `Element`, return it, otherwise try to find it
> treating `selectOrElement` as a dom query.


| Param | Type |
| --- | --- |
| selectorOrElement | <code>string</code>, <code>exernal:Element</code> | 


<br><a name="LinearInterpolationHelper"></a>

## LinearInterpolationHelper

* [LinearInterpolationHelper](#LinearInterpolationHelper)
    * [new LinearInterpolationHelper()](#new_LinearInterpolationHelper_new)
    * [.lerp(x, y, a)](#LinearInterpolationHelper.lerp) ⇒ <code>Number</code>
    * [.clamp(a, min, max)](#LinearInterpolationHelper.clamp) ⇒ <code>Number</code>
    * [.invlerp(x, y, a)](#LinearInterpolationHelper.invlerp) ⇒ <code>Number</code>
    * [.range(x1, y1, x2, y2, a)](#LinearInterpolationHelper.range) ⇒ <code>Number</code>
    * [.rangeMap(map, from, to, val)](#LinearInterpolationHelper.rangeMap) ⇒ <code>Number</code>
    * [.modLimit(num, max)](#LinearInterpolationHelper.modLimit) ⇒ <code>number</code>


<br><a name="new_LinearInterpolationHelper_new"></a>

### new LinearInterpolationHelper()
> Useful interpolation helpers for converting between scales


<br><a name="LinearInterpolationHelper.lerp"></a>

### LinearInterpolationHelper.lerp(x, y, a) ⇒ <code>Number</code>
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

<br><a name="LinearInterpolationHelper.clamp"></a>

### LinearInterpolationHelper.clamp(a, min, max) ⇒ <code>Number</code>
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

<br><a name="LinearInterpolationHelper.invlerp"></a>

### LinearInterpolationHelper.invlerp(x, y, a) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - Where `a` falls between `x` and `y` as a ratio
between `0.0` and `1.0`. @see lerp  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| y | <code>Number</code> | 
| a | <code>Number</code> | 


<br><a name="LinearInterpolationHelper.range"></a>

### LinearInterpolationHelper.range(x1, y1, x2, y2, a) ⇒ <code>Number</code>
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


<br><a name="LinearInterpolationHelper.rangeMap"></a>

### LinearInterpolationHelper.rangeMap(map, from, to, val) ⇒ <code>Number</code>
**Returns**: <code>Number</code> - If `maps` is an array of maps containing at least the keys
from the string `from` and `to`, representing corresponding values in two ranges,
return `val` from range `from` fitted to the range `b`.  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>Array.&lt;Map.&lt;string, Array.&lt;Number&gt;&gt;&gt;</code> | s |
| from | <code>string</code> |  |
| to | <code>string</code> |  |
| val | <code>Number</code> |  |


<br><a name="LinearInterpolationHelper.modLimit"></a>

### LinearInterpolationHelper.modLimit(num, max) ⇒ <code>number</code>
> Return `num` limited to between `0` and `max`, using modulo
> logic


| Param | Type |
| --- | --- |
| num | <code>number</code> | 
| max | <code>number</code> | 


<br><a name="ObjectHelper"></a>

## ObjectHelper

<br><a name="new_ObjectHelper_new"></a>

### new ObjectHelper()
> Object manipulation


<br><a name="QueryHelper"></a>

## QueryHelper

* [QueryHelper](#QueryHelper)
    * [new QueryHelper()](#new_QueryHelper_new)
    * [.map(root, selector, callback)](#QueryHelper.map) ⇒ <code>Array.&lt;any&gt;</code>
    * [.queryByAttribute(root, attribute)](#QueryHelper.queryByAttribute) ⇒ <code>Object</code>
    * [.dataSelectorAll(root, attribute, ...otherAttributes)](#QueryHelper.dataSelectorAll) ⇒ <code>Array.&lt;any&gt;</code>


<br><a name="new_QueryHelper_new"></a>

### new QueryHelper()
> Helpers for querying the dom


<br><a name="QueryHelper.map"></a>

### QueryHelper.map(root, selector, callback) ⇒ <code>Array.&lt;any&gt;</code>
> Wrapper around `querySelectorAll` allowing you to pass along a callback to call on all elements found

**Returns**: <code>Array.&lt;any&gt;</code> - The mapped list  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| selector | <code>string</code> | 
| callback | <code>function</code> | 


<br><a name="QueryHelper.queryByAttribute"></a>

### QueryHelper.queryByAttribute(root, attribute) ⇒ <code>Object</code>
> Query by attribute name.

**Returns**: <code>Object</code> - all matching elements, plus metadata.  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| attribute | <code>string</code> | 


<br><a name="QueryHelper.dataSelectorAll"></a>

### QueryHelper.dataSelectorAll(root, attribute, ...otherAttributes) ⇒ <code>Array.&lt;any&gt;</code>
> Query by data-attribute. Optionally adds other attributes to result

**Returns**: <code>Array.&lt;any&gt;</code> - List of elements, along with index, and attribute values.  

| Param | Type |
| --- | --- |
| root | <code>external:HTMLElement</code> | 
| attribute | <code>string</code> | 
| ...otherAttributes | <code>any</code> | 


<br><a name="StringHelper"></a>

## StringHelper

* [StringHelper](#StringHelper)
    * [new StringHelper()](#new_StringHelper_new)
    * [.sanitize(str)](#StringHelper.sanitize) ⇒ <code>string</code>
    * [.isEmpty(str)](#StringHelper.isEmpty) ⇒ <code>boolean</code>
    * [.hexToRgb(hex)](#StringHelper.hexToRgb) ⇒ [<code>RgbColor</code>](#RgbColor)
    * [.rgbaToRgb(rgba)](#StringHelper.rgbaToRgb) ⇒ [<code>RgbaColor</code>](#RgbaColor)
    * [.snakeToCamel(str)](#StringHelper.snakeToCamel) ⇒ <code>string</code>
    * [.camelToSnake(str)](#StringHelper.camelToSnake) ⇒ <code>string</code>


<br><a name="new_StringHelper_new"></a>

### new StringHelper()
> String manipulation


<br><a name="StringHelper.sanitize"></a>

### StringHelper.sanitize(str) ⇒ <code>string</code>
> Make sure argument is stringy


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="StringHelper.isEmpty"></a>

### StringHelper.isEmpty(str) ⇒ <code>boolean</code>
> Check if argument is empty, i.e. `undefined`, `null`, `''` &c.


| Param | Type |
| --- | --- |
| str | <code>string</code>, <code>any</code> | 


<br><a name="StringHelper.hexToRgb"></a>

### StringHelper.hexToRgb(hex) ⇒ [<code>RgbColor</code>](#RgbColor)
> Convert a color in hex format (e.g. `#fff`, `#00ffee`) to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="StringHelper.rgbaToRgb"></a>

### StringHelper.rgbaToRgb(rgba) ⇒ [<code>RgbaColor</code>](#RgbaColor)
> Parse a color in RGBA string format.


| Param | Type |
| --- | --- |
| rgba | <code>string</code> | 


<br><a name="StringHelper.snakeToCamel"></a>

### StringHelper.snakeToCamel(str) ⇒ <code>string</code>
> Convert a string from `snake-case` to `camelCase`.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="StringHelper.camelToSnake"></a>

### StringHelper.camelToSnake(str) ⇒ <code>string</code>
> Convert a string from `camelCase` to `snake-case`.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="rootServices"></a>

## rootServices : <code>object</code>
> Injectable services


<br><a name="colorServices"></a>

## colorServices : <code>object</code>
> Injectable services


<br><a name="$ortho"></a>

## $ortho : [<code>Orthogonal</code>](#Orthogonal)

<br><a name="$cache"></a>

## $cache : [<code>OrthoCache</code>](#OrthoCache)

<br><a name="$expressionParser"></a>

## $expressionParser : [<code>OrthoExpressionParser</code>](#OrthoExpressionParser)

<br><a name="$injector"></a>

## $injector : [<code>OrthoInjector</code>](#OrthoInjector)

<br><a name="$store"></a>

## $store : [<code>OrthoStore</code>](#OrthoStore)

<br><a name="$window"></a>

## $window : <code>external:Window</code>

<br><a name="$document"></a>

## $document : <code>external:Document</code>

<br><a name="$colorHarmony"></a>

## $colorHarmony : [<code>ColorHarmony</code>](#ColorHarmony)

<br><a name="$colorHelper"></a>

## $colorHelper : [<code>ColorHelper</code>](#ColorHelper)

<br><a name="$colorWheel"></a>

## $colorWheel : <code>ColorWheelFactory</code>

<br><a name="orthogonal"></a>

## orthogonal()
> Initializes Orthogonal


<br><a name="registerExtensions"></a>

## registerExtensions(extensions)

| Param | Type |
| --- | --- |
| extensions | <code>any</code> | 


<br><a name="addGetter"></a>

## addGetter(obj, name, handler)
> Helper function for adding a new getter-method to an object.


| Param | Type |
| --- | --- |
| obj | <code>any</code> | 
| name | <code>string</code> | 
| handler | <code>function</code> | 


<br><a name="dirtyable"></a>

## dirtyable(baseObj, dirtyProperty) ⇒ <code>any</code>
> Wrap an value in a Proxy which sets a property, `isDirty` when the property
> named in `dirtyProperty` is modified.

**Returns**: <code>any</code> - Proxied version of `baseObj`  

| Param | Type |
| --- | --- |
| baseObj | <code>any</code> | 
| dirtyProperty | <code>string</code> | 


<br><a name="ColorRGB"></a>

## ColorRGB : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 


<br><a name="ColorHSV"></a>

## ColorHSV : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| v | <code>number</code> | 


<br><a name="ColorHSL"></a>

## ColorHSL : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| l | <code>number</code> | 


<br><a name="PartialColor"></a>

## PartialColor : <code>Object</code>
> An object representing parts of a color in RGBA colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |
| a | <code>number</code> | Alpha |


<br><a name="RgbColor"></a>

## RgbColor : <code>Object</code>
> An object representing a color in RGB colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |


<br><a name="RgbaColor"></a>

## RgbaColor : <code>Object</code>
> An object representing a color in RGBA colorspace

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red |
| g | <code>number</code> | Green |
| b | <code>number</code> | Blue |
| a | <code>number</code> | Alpha |

