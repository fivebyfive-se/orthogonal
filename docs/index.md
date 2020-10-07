## Modules

<dl>
<dt><a href="#module_orthogonal/core">orthogonal/core</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal">orthogonal</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal/core/services">orthogonal/core/services</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal/core/helpers">orthogonal/core/helpers</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal/lib/color">orthogonal/lib/color</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal/lib/color/services">orthogonal/lib/color/services</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal/lib/extensions">orthogonal/lib/extensions</a></dt>
<dd></dd>
<dt><a href="#module_orthogonal/lib/extensions/services">orthogonal/lib/extensions/services</a></dt>
<dd></dd>
</dl>

## External

<dl>
<dt><a href="#external_Window">Window</a></dt>
<dd><p>The Window interface represents a window containing a DOM document</p>
</dd>
<dt><a href="#external_Document">Document</a></dt>
<dd><p>The Document interface represents any web page loaded in the browser</p>
</dd>
</dl>


<br><a name="module_orthogonal/core"></a>

## orthogonal/core

<br><a name="module_orthogonal"></a>

## orthogonal

* [orthogonal](#module_orthogonal)
    * _static_
        * [.orthogonal()](#module_orthogonal.orthogonal)
        * [.registerExtensions(extensions)](#module_orthogonal.registerExtensions)
    * _inner_
        * [~Orthogonal](#module_orthogonal..Orthogonal) ⇐ <code>OrthoInjector</code>


<br><a name="module_orthogonal.orthogonal"></a>

### orthogonal.orthogonal()
> Initializes Orthogonal


<br><a name="module_orthogonal.registerExtensions"></a>

### orthogonal.registerExtensions(extensions)

| Param | Type |
| --- | --- |
| extensions | <code>any</code> | 


<br><a name="module_orthogonal..Orthogonal"></a>

### orthogonal~Orthogonal ⇐ <code>OrthoInjector</code>
> The main entry point

**Extends**: <code>OrthoInjector</code>  

<br><a name="module_orthogonal/core/services"></a>

## orthogonal/core/services

* [orthogonal/core/services](#module_orthogonal/core/services)
    * [.$ortho](#module_orthogonal/core/services.$ortho) : [<code>Orthogonal</code>](#module_orthogonal..Orthogonal)
    * [.$cache](#module_orthogonal/core/services.$cache) : <code>module:orthogonal/core~OrthoCache</code>
    * [.$expressionParser](#module_orthogonal/core/services.$expressionParser) : <code>module:orthogonal/core~OrthoExpressionParser</code>
    * [.$injector](#module_orthogonal/core/services.$injector) : <code>module:orthogonal/core~OrthoInjector</code>
    * [.$store](#module_orthogonal/core/services.$store) : <code>module:orthogonal/core~OrthoStore</code>


<br><a name="module_orthogonal/core/services.$ortho"></a>

### orthogonal/core/services.$ortho : [<code>Orthogonal</code>](#module_orthogonal..Orthogonal)

<br><a name="module_orthogonal/core/services.$cache"></a>

### orthogonal/core/services.$cache : <code>module:orthogonal/core~OrthoCache</code>

<br><a name="module_orthogonal/core/services.$expressionParser"></a>

### orthogonal/core/services.$expressionParser : <code>module:orthogonal/core~OrthoExpressionParser</code>

<br><a name="module_orthogonal/core/services.$injector"></a>

### orthogonal/core/services.$injector : <code>module:orthogonal/core~OrthoInjector</code>

<br><a name="module_orthogonal/core/services.$store"></a>

### orthogonal/core/services.$store : <code>module:orthogonal/core~OrthoStore</code>

<br><a name="module_orthogonal/core/helpers"></a>

## orthogonal/core/helpers

* [orthogonal/core/helpers](#module_orthogonal/core/helpers)
    * [.exports.addGetter(obj, name, handler)](#module_orthogonal/core/helpers.exports.addGetter)
    * [.exports.dirtyable(baseObj, dirtyProperty)](#module_orthogonal/core/helpers.exports.dirtyable) ⇒ <code>any</code>


<br><a name="module_orthogonal/core/helpers.exports.addGetter"></a>

### orthogonal/core/helpers.exports.addGetter(obj, name, handler)
> Helper function for adding a new getter-method to an object.


| Param | Type |
| --- | --- |
| obj | <code>any</code> | 
| name | <code>string</code> | 
| handler | <code>function</code> | 


<br><a name="module_orthogonal/core/helpers.exports.dirtyable"></a>

### orthogonal/core/helpers.exports.dirtyable(baseObj, dirtyProperty) ⇒ <code>any</code>
> Wrap an value in a Proxy which sets a property, `isDirty` when the property
> named in `dirtyProperty` is modified.

**Returns**: <code>any</code> - Proxied version of `baseObj`  

| Param | Type |
| --- | --- |
| baseObj | <code>any</code> | 
| dirtyProperty | <code>string</code> | 


<br><a name="module_orthogonal/lib/color"></a>

## orthogonal/lib/color

* [orthogonal/lib/color](#module_orthogonal/lib/color)
    * [.ColorHarmony](#module_orthogonal/lib/color.ColorHarmony)
    * [.ColorHelper](#module_orthogonal/lib/color.ColorHelper)
        * [.hex_to_rgb(hex)](#module_orthogonal/lib/color.ColorHelper+hex_to_rgb) ⇒ <code>ColorRGB</code>
        * [.hex_to_hsl(hex)](#module_orthogonal/lib/color.ColorHelper+hex_to_hsl) ⇒ <code>ColorHSL</code>
        * [.hsl_to_rgb(param0)](#module_orthogonal/lib/color.ColorHelper+hsl_to_rgb) ⇒ <code>ColorRGB</code>
        * [.hsl_to_hex(param0)](#module_orthogonal/lib/color.ColorHelper+hsl_to_hex) ⇒ <code>string</code>
        * [.hsl_to_hsv(param0)](#module_orthogonal/lib/color.ColorHelper+hsl_to_hsv) ⇒ <code>ColorHSV</code>
        * [.hsv_to_hsl(param0)](#module_orthogonal/lib/color.ColorHelper+hsv_to_hsl) ⇒ <code>ColorHSL</code>
        * [.rgb_to_hex(param0)](#module_orthogonal/lib/color.ColorHelper+rgb_to_hex) ⇒ <code>string</code>
        * [.rgb_to_hsl(param0)](#module_orthogonal/lib/color.ColorHelper+rgb_to_hsl) ⇒ <code>ColorHSL</code>
        * [.rybhue_to_hslhue(hue)](#module_orthogonal/lib/color.ColorHelper+rybhue_to_hslhue) ⇒ <code>number</code>
        * [.hslhue_to_rybhue(hue)](#module_orthogonal/lib/color.ColorHelper+hslhue_to_rybhue) ⇒ <code>number</code>
        * [.any_to_string(source, type)](#module_orthogonal/lib/color.ColorHelper+any_to_string) ⇒ <code>string</code>
        * [.any_to_hsl(source)](#module_orthogonal/lib/color.ColorHelper+any_to_hsl) ⇒ <code>ColorHSL</code>
    * [.ColorWheel](#module_orthogonal/lib/color.ColorWheel)
        * [.set_canvas(canvas)](#module_orthogonal/lib/color.ColorWheel+set_canvas)
        * [.color_at(mouseEvent)](#module_orthogonal/lib/color.ColorWheel+color_at) ⇒ <code>ColorHSL</code>
        * [.color_to_pos(param0)](#module_orthogonal/lib/color.ColorWheel+color_to_pos) ⇒ <code>Object</code>
        * [.draw(canvas)](#module_orthogonal/lib/color.ColorWheel+draw)
    * [.ColorRGB](#module_orthogonal/lib/color.ColorRGB) : <code>Object</code>
    * [.ColorHSV](#module_orthogonal/lib/color.ColorHSV) : <code>Object</code>
    * [.ColorHSL](#module_orthogonal/lib/color.ColorHSL) : <code>Object</code>


<br><a name="module_orthogonal/lib/color.ColorHarmony"></a>

### orthogonal/lib/color.ColorHarmony
> Color-harmony generator


<br><a name="module_orthogonal/lib/color.ColorHelper"></a>

### orthogonal/lib/color.ColorHelper
> Helpers for converting colors among color-spaces


* [.ColorHelper](#module_orthogonal/lib/color.ColorHelper)
    * [.hex_to_rgb(hex)](#module_orthogonal/lib/color.ColorHelper+hex_to_rgb) ⇒ <code>ColorRGB</code>
    * [.hex_to_hsl(hex)](#module_orthogonal/lib/color.ColorHelper+hex_to_hsl) ⇒ <code>ColorHSL</code>
    * [.hsl_to_rgb(param0)](#module_orthogonal/lib/color.ColorHelper+hsl_to_rgb) ⇒ <code>ColorRGB</code>
    * [.hsl_to_hex(param0)](#module_orthogonal/lib/color.ColorHelper+hsl_to_hex) ⇒ <code>string</code>
    * [.hsl_to_hsv(param0)](#module_orthogonal/lib/color.ColorHelper+hsl_to_hsv) ⇒ <code>ColorHSV</code>
    * [.hsv_to_hsl(param0)](#module_orthogonal/lib/color.ColorHelper+hsv_to_hsl) ⇒ <code>ColorHSL</code>
    * [.rgb_to_hex(param0)](#module_orthogonal/lib/color.ColorHelper+rgb_to_hex) ⇒ <code>string</code>
    * [.rgb_to_hsl(param0)](#module_orthogonal/lib/color.ColorHelper+rgb_to_hsl) ⇒ <code>ColorHSL</code>
    * [.rybhue_to_hslhue(hue)](#module_orthogonal/lib/color.ColorHelper+rybhue_to_hslhue) ⇒ <code>number</code>
    * [.hslhue_to_rybhue(hue)](#module_orthogonal/lib/color.ColorHelper+hslhue_to_rybhue) ⇒ <code>number</code>
    * [.any_to_string(source, type)](#module_orthogonal/lib/color.ColorHelper+any_to_string) ⇒ <code>string</code>
    * [.any_to_hsl(source)](#module_orthogonal/lib/color.ColorHelper+any_to_hsl) ⇒ <code>ColorHSL</code>


<br><a name="module_orthogonal/lib/color.ColorHelper+hex_to_rgb"></a>

#### colorHelper.hex\_to\_rgb(hex) ⇒ <code>ColorRGB</code>
> Convert Hex to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+hex_to_hsl"></a>

#### colorHelper.hex\_to\_hsl(hex) ⇒ <code>ColorHSL</code>
> Convert hex string to HSL


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+hsl_to_rgb"></a>

#### colorHelper.hsl\_to\_rgb(param0) ⇒ <code>ColorRGB</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+hsl_to_hex"></a>

#### colorHelper.hsl\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+hsl_to_hsv"></a>

#### colorHelper.hsl\_to\_hsv(param0) ⇒ <code>ColorHSV</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+hsv_to_hsl"></a>

#### colorHelper.hsv\_to\_hsl(param0) ⇒ <code>ColorHSL</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSV</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+rgb_to_hex"></a>

#### colorHelper.rgb\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorRGB</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+rgb_to_hsl"></a>

#### colorHelper.rgb\_to\_hsl(param0) ⇒ <code>ColorHSL</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorRGB</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+rybhue_to_hslhue"></a>

#### colorHelper.rybhue\_to\_hslhue(hue) ⇒ <code>number</code>
> Translate from RYB color space to HSL


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+hslhue_to_rybhue"></a>

#### colorHelper.hslhue\_to\_rybhue(hue) ⇒ <code>number</code>
> Translate from HSL color space to RYN


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="module_orthogonal/lib/color.ColorHelper+any_to_string"></a>

#### colorHelper.any\_to\_string(source, type) ⇒ <code>string</code>
> Convert from any color space to any string format


| Param | Type | Description |
| --- | --- | --- |
| source | <code>any</code> |  |
| type | <code>string</code> | `"hex"`, `"rgb"`, `"hsl"`, or `"hsv"` |


<br><a name="module_orthogonal/lib/color.ColorHelper+any_to_hsl"></a>

#### colorHelper.any\_to\_hsl(source) ⇒ <code>ColorHSL</code>
> Convert from any color space (include string representations), to HSL.


| Param | Type |
| --- | --- |
| source | <code>any</code> | 


<br><a name="module_orthogonal/lib/color.ColorWheel"></a>

### orthogonal/lib/color.ColorWheel
> Class for creating color-wheels that can be drawn on an HTML canvas.


* [.ColorWheel](#module_orthogonal/lib/color.ColorWheel)
    * [.set_canvas(canvas)](#module_orthogonal/lib/color.ColorWheel+set_canvas)
    * [.color_at(mouseEvent)](#module_orthogonal/lib/color.ColorWheel+color_at) ⇒ <code>ColorHSL</code>
    * [.color_to_pos(param0)](#module_orthogonal/lib/color.ColorWheel+color_to_pos) ⇒ <code>Object</code>
    * [.draw(canvas)](#module_orthogonal/lib/color.ColorWheel+draw)


<br><a name="module_orthogonal/lib/color.ColorWheel+set_canvas"></a>

#### colorWheel.set\_canvas(canvas)

| Param | Type |
| --- | --- |
| canvas | <code>any</code> | 


<br><a name="module_orthogonal/lib/color.ColorWheel+color_at"></a>

#### colorWheel.color\_at(mouseEvent) ⇒ <code>ColorHSL</code>
> Calculate the color at the given mouse position


| Param | Type |
| --- | --- |
| mouseEvent | <code>external:MouseEvent</code> | 


<br><a name="module_orthogonal/lib/color.ColorWheel+color_to_pos"></a>

#### colorWheel.color\_to\_pos(param0) ⇒ <code>Object</code>
> Calculate the position of the given color in the color wheel.


| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_orthogonal/lib/color.ColorWheel+draw"></a>

#### colorWheel.draw(canvas)
> Draw the color wheel.


| Param | Type |
| --- | --- |
| canvas | <code>any</code> | 


<br><a name="module_orthogonal/lib/color.ColorRGB"></a>

### orthogonal/lib/color.ColorRGB : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 


<br><a name="module_orthogonal/lib/color.ColorHSV"></a>

### orthogonal/lib/color.ColorHSV : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| v | <code>number</code> | 


<br><a name="module_orthogonal/lib/color.ColorHSL"></a>

### orthogonal/lib/color.ColorHSL : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| l | <code>number</code> | 


<br><a name="module_orthogonal/lib/color/services"></a>

## orthogonal/lib/color/services

* [orthogonal/lib/color/services](#module_orthogonal/lib/color/services)
    * [.$colorHarmony](#module_orthogonal/lib/color/services.$colorHarmony) : <code>module:orthogonal/lib/color~ColorHarmony</code>
    * [.$colorHelper](#module_orthogonal/lib/color/services.$colorHelper) : <code>module:orthogonal/lib/color~ColorHelper</code>
    * [.$colorWheel](#module_orthogonal/lib/color/services.$colorWheel) : <code>module:orthogonal/lib/color~ColorWheelFactory</code>


<br><a name="module_orthogonal/lib/color/services.$colorHarmony"></a>

### orthogonal/lib/color/services.$colorHarmony : <code>module:orthogonal/lib/color~ColorHarmony</code>

<br><a name="module_orthogonal/lib/color/services.$colorHelper"></a>

### orthogonal/lib/color/services.$colorHelper : <code>module:orthogonal/lib/color~ColorHelper</code>

<br><a name="module_orthogonal/lib/color/services.$colorWheel"></a>

### orthogonal/lib/color/services.$colorWheel : <code>module:orthogonal/lib/color~ColorWheelFactory</code>

<br><a name="module_orthogonal/lib/extensions"></a>

## orthogonal/lib/extensions

<br><a name="module_orthogonal/lib/extensions/services"></a>

## orthogonal/lib/extensions/services

* [orthogonal/lib/extensions/services](#module_orthogonal/lib/extensions/services)
    * [.$array](#module_orthogonal/lib/extensions/services.$array) : <code>module:orthogonal/lib/extensions~ArrayHelper</code>
    * [.$css](#module_orthogonal/lib/extensions/services.$css) : <code>module:orthogonal/lib/extensions~CssHelper</code>
    * [.$dom](#module_orthogonal/lib/extensions/services.$dom) : <code>module:orthogonal/lib/extensions~DomHelper</code>
    * [.$linear](#module_orthogonal/lib/extensions/services.$linear) : <code>module:orthogonal/lib/extensions~LinearInterpolationHelper</code>
    * [.$object](#module_orthogonal/lib/extensions/services.$object) : <code>module:orthogonal/lib/extensions~ObjectHelper</code>
    * [.$query](#module_orthogonal/lib/extensions/services.$query) : <code>module:orthogonal/lib/extensions~QueryHelper</code>
    * [.$string](#module_orthogonal/lib/extensions/services.$string) : <code>module:orthogonal/lib/extensions~StringHelper</code>


<br><a name="module_orthogonal/lib/extensions/services.$array"></a>

### orthogonal/lib/extensions/services.$array : <code>module:orthogonal/lib/extensions~ArrayHelper</code>

<br><a name="module_orthogonal/lib/extensions/services.$css"></a>

### orthogonal/lib/extensions/services.$css : <code>module:orthogonal/lib/extensions~CssHelper</code>

<br><a name="module_orthogonal/lib/extensions/services.$dom"></a>

### orthogonal/lib/extensions/services.$dom : <code>module:orthogonal/lib/extensions~DomHelper</code>

<br><a name="module_orthogonal/lib/extensions/services.$linear"></a>

### orthogonal/lib/extensions/services.$linear : <code>module:orthogonal/lib/extensions~LinearInterpolationHelper</code>

<br><a name="module_orthogonal/lib/extensions/services.$object"></a>

### orthogonal/lib/extensions/services.$object : <code>module:orthogonal/lib/extensions~ObjectHelper</code>

<br><a name="module_orthogonal/lib/extensions/services.$query"></a>

### orthogonal/lib/extensions/services.$query : <code>module:orthogonal/lib/extensions~QueryHelper</code>

<br><a name="module_orthogonal/lib/extensions/services.$string"></a>

### orthogonal/lib/extensions/services.$string : <code>module:orthogonal/lib/extensions~StringHelper</code>

<br><a name="external_Window"></a>

## Window
> The Window interface represents a window containing a DOM document

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Window  

<br><a name="external_Document"></a>

## Document
> The Document interface represents any web page loaded in the browser

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document  
