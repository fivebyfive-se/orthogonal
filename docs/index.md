## Modules

<dl>
<dt><a href="#module_se/fivebyfive/ortho/core">se/fivebyfive/ortho/core</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho">se/fivebyfive/ortho</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/core/services">se/fivebyfive/ortho/core/services</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/core/helpers">se/fivebyfive/ortho/core/helpers</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/lib/color">se/fivebyfive/ortho/lib/color</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/lib/color/services">se/fivebyfive/ortho/lib/color/services</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/lib/extensions">se/fivebyfive/ortho/lib/extensions</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/lib/extensions/services">se/fivebyfive/ortho/lib/extensions/services</a></dt>
<dd></dd>
</dl>


<br><a name="module_se/fivebyfive/ortho/core"></a>

## se/fivebyfive/ortho/core

<br><a name="module_se/fivebyfive/ortho"></a>

## se/fivebyfive/ortho

<br><a name="module_se/fivebyfive/ortho..Orthogonal"></a>

### se/fivebyfive/ortho~Orthogonal ⇐ <code>OrthoInjector</code>
> The main entry point

**Extends**: <code>OrthoInjector</code>  

<br><a name="module_se/fivebyfive/ortho/core/services"></a>

## se/fivebyfive/ortho/core/services

* [se/fivebyfive/ortho/core/services](#module_se/fivebyfive/ortho/core/services)
    * [.$ortho](#module_se/fivebyfive/ortho/core/services.$ortho) : [<code>Orthogonal</code>](#module_se/fivebyfive/ortho..Orthogonal)
    * [.$cache](#module_se/fivebyfive/ortho/core/services.$cache) : <code>module:se/fivebyfive/ortho/core~OrthoCache</code>
    * [.$expressionParser](#module_se/fivebyfive/ortho/core/services.$expressionParser) : <code>module:se/fivebyfive/ortho/core~OrthoExpressionParser</code>
    * [.$injector](#module_se/fivebyfive/ortho/core/services.$injector) : <code>module:se/fivebyfive/ortho/core~OrthoInjector</code>
    * [.$store](#module_se/fivebyfive/ortho/core/services.$store) : <code>module:se/fivebyfive/ortho/core~OrthoStore</code>


<br><a name="module_se/fivebyfive/ortho/core/services.$ortho"></a>

### se/fivebyfive/ortho/core/services.$ortho : [<code>Orthogonal</code>](#module_se/fivebyfive/ortho..Orthogonal)

<br><a name="module_se/fivebyfive/ortho/core/services.$cache"></a>

### se/fivebyfive/ortho/core/services.$cache : <code>module:se/fivebyfive/ortho/core~OrthoCache</code>

<br><a name="module_se/fivebyfive/ortho/core/services.$expressionParser"></a>

### se/fivebyfive/ortho/core/services.$expressionParser : <code>module:se/fivebyfive/ortho/core~OrthoExpressionParser</code>

<br><a name="module_se/fivebyfive/ortho/core/services.$injector"></a>

### se/fivebyfive/ortho/core/services.$injector : <code>module:se/fivebyfive/ortho/core~OrthoInjector</code>

<br><a name="module_se/fivebyfive/ortho/core/services.$store"></a>

### se/fivebyfive/ortho/core/services.$store : <code>module:se/fivebyfive/ortho/core~OrthoStore</code>

<br><a name="module_se/fivebyfive/ortho/core/helpers"></a>

## se/fivebyfive/ortho/core/helpers

* [se/fivebyfive/ortho/core/helpers](#module_se/fivebyfive/ortho/core/helpers)
    * [.exports.addGetter(obj, name, handler)](#module_se/fivebyfive/ortho/core/helpers.exports.addGetter)
    * [.exports.dirtyable(baseObj, dirtyProperty)](#module_se/fivebyfive/ortho/core/helpers.exports.dirtyable) ⇒ <code>any</code>


<br><a name="module_se/fivebyfive/ortho/core/helpers.exports.addGetter"></a>

### se/fivebyfive/ortho/core/helpers.exports.addGetter(obj, name, handler)
> Helper function for adding a new getter-method to an object.


| Param | Type |
| --- | --- |
| obj | <code>any</code> | 
| name | <code>string</code> | 
| handler | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/core/helpers.exports.dirtyable"></a>

### se/fivebyfive/ortho/core/helpers.exports.dirtyable(baseObj, dirtyProperty) ⇒ <code>any</code>
> Wrap an value in a Proxy which sets a property, `isDirty` when the property
> named in `dirtyProperty` is modified.

**Returns**: <code>any</code> - Proxied version of `baseObj`  

| Param | Type |
| --- | --- |
| baseObj | <code>any</code> | 
| dirtyProperty | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color"></a>

## se/fivebyfive/ortho/lib/color

* [se/fivebyfive/ortho/lib/color](#module_se/fivebyfive/ortho/lib/color)
    * [.ColorHarmony](#module_se/fivebyfive/ortho/lib/color.ColorHarmony)
    * [.ColorHelper](#module_se/fivebyfive/ortho/lib/color.ColorHelper)
        * [.hex_to_rgb(hex)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hex_to_rgb) ⇒ <code>ColorRGB</code>
        * [.hex_to_hsl(hex)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hex_to_hsl) ⇒ <code>ColorHSL</code>
        * [.hsl_to_rgb(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_rgb) ⇒ <code>ColorRGB</code>
        * [.hsl_to_hex(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_hex) ⇒ <code>string</code>
        * [.hsl_to_hsv(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_hsv) ⇒ <code>ColorHSV</code>
        * [.hsv_to_hsl(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsv_to_hsl) ⇒ <code>ColorHSL</code>
        * [.rgb_to_hex(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+rgb_to_hex) ⇒ <code>string</code>
        * [.rgb_to_hsl(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+rgb_to_hsl) ⇒ <code>ColorHSL</code>
        * [.rybhue_to_hslhue(hue)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+rybhue_to_hslhue) ⇒ <code>number</code>
        * [.hslhue_to_rybhue(hue)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hslhue_to_rybhue) ⇒ <code>number</code>
        * [.any_to_string(source, type)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+any_to_string) ⇒ <code>string</code>
        * [.any_to_hsl(source)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+any_to_hsl) ⇒ <code>ColorHSL</code>
    * [.ColorWheel](#module_se/fivebyfive/ortho/lib/color.ColorWheel)
        * [new ColorWheel(canvas)](#new_module_se/fivebyfive/ortho/lib/color.ColorWheel_new)
        * [.color_at(mouseEvent)](#module_se/fivebyfive/ortho/lib/color.ColorWheel+color_at) ⇒ <code>ColorHSL</code>
        * [.color_to_pos(param0)](#module_se/fivebyfive/ortho/lib/color.ColorWheel+color_to_pos) ⇒ <code>Object</code>
        * [.draw()](#module_se/fivebyfive/ortho/lib/color.ColorWheel+draw)
    * [.ColorRGB](#module_se/fivebyfive/ortho/lib/color.ColorRGB) : <code>Object</code>
    * [.ColorHSV](#module_se/fivebyfive/ortho/lib/color.ColorHSV) : <code>Object</code>
    * [.ColorHSL](#module_se/fivebyfive/ortho/lib/color.ColorHSL) : <code>Object</code>


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHarmony"></a>

### se/fivebyfive/ortho/lib/color.ColorHarmony
> Color-harmony generator


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper"></a>

### se/fivebyfive/ortho/lib/color.ColorHelper
> Helpers for converting colors among color-spaces


* [.ColorHelper](#module_se/fivebyfive/ortho/lib/color.ColorHelper)
    * [.hex_to_rgb(hex)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hex_to_rgb) ⇒ <code>ColorRGB</code>
    * [.hex_to_hsl(hex)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hex_to_hsl) ⇒ <code>ColorHSL</code>
    * [.hsl_to_rgb(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_rgb) ⇒ <code>ColorRGB</code>
    * [.hsl_to_hex(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_hex) ⇒ <code>string</code>
    * [.hsl_to_hsv(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_hsv) ⇒ <code>ColorHSV</code>
    * [.hsv_to_hsl(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hsv_to_hsl) ⇒ <code>ColorHSL</code>
    * [.rgb_to_hex(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+rgb_to_hex) ⇒ <code>string</code>
    * [.rgb_to_hsl(param0)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+rgb_to_hsl) ⇒ <code>ColorHSL</code>
    * [.rybhue_to_hslhue(hue)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+rybhue_to_hslhue) ⇒ <code>number</code>
    * [.hslhue_to_rybhue(hue)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+hslhue_to_rybhue) ⇒ <code>number</code>
    * [.any_to_string(source, type)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+any_to_string) ⇒ <code>string</code>
    * [.any_to_hsl(source)](#module_se/fivebyfive/ortho/lib/color.ColorHelper+any_to_hsl) ⇒ <code>ColorHSL</code>


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hex_to_rgb"></a>

#### colorHelper.hex\_to\_rgb(hex) ⇒ <code>ColorRGB</code>
> Convert Hex to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hex_to_hsl"></a>

#### colorHelper.hex\_to\_hsl(hex) ⇒ <code>ColorHSL</code>
> Convert hex string to HSL


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_rgb"></a>

#### colorHelper.hsl\_to\_rgb(param0) ⇒ <code>ColorRGB</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_hex"></a>

#### colorHelper.hsl\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hsl_to_hsv"></a>

#### colorHelper.hsl\_to\_hsv(param0) ⇒ <code>ColorHSV</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hsv_to_hsl"></a>

#### colorHelper.hsv\_to\_hsl(param0) ⇒ <code>ColorHSL</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSV</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+rgb_to_hex"></a>

#### colorHelper.rgb\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorRGB</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+rgb_to_hsl"></a>

#### colorHelper.rgb\_to\_hsl(param0) ⇒ <code>ColorHSL</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorRGB</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+rybhue_to_hslhue"></a>

#### colorHelper.rybhue\_to\_hslhue(hue) ⇒ <code>number</code>
> Translate from RYB color space to HSL


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+hslhue_to_rybhue"></a>

#### colorHelper.hslhue\_to\_rybhue(hue) ⇒ <code>number</code>
> Translate from HSL color space to RYN


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+any_to_string"></a>

#### colorHelper.any\_to\_string(source, type) ⇒ <code>string</code>
> Convert from any color space to any string format


| Param | Type | Description |
| --- | --- | --- |
| source | <code>any</code> |  |
| type | <code>string</code> | `"hex"`, `"rgb"`, `"hsl"`, or `"hsv"` |


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHelper+any_to_hsl"></a>

#### colorHelper.any\_to\_hsl(source) ⇒ <code>ColorHSL</code>
> Convert from any color space (include string representations), to HSL.


| Param | Type |
| --- | --- |
| source | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorWheel"></a>

### se/fivebyfive/ortho/lib/color.ColorWheel
> Class for creating color-wheels that can be drawn on an HTML canvas.


* [.ColorWheel](#module_se/fivebyfive/ortho/lib/color.ColorWheel)
    * [new ColorWheel(canvas)](#new_module_se/fivebyfive/ortho/lib/color.ColorWheel_new)
    * [.color_at(mouseEvent)](#module_se/fivebyfive/ortho/lib/color.ColorWheel+color_at) ⇒ <code>ColorHSL</code>
    * [.color_to_pos(param0)](#module_se/fivebyfive/ortho/lib/color.ColorWheel+color_to_pos) ⇒ <code>Object</code>
    * [.draw()](#module_se/fivebyfive/ortho/lib/color.ColorWheel+draw)


<br><a name="new_module_se/fivebyfive/ortho/lib/color.ColorWheel_new"></a>

#### new ColorWheel(canvas)
> Create new instance of `ColorWheel`, do be drawn in `canvas`


| Param | Type |
| --- | --- |
| canvas | <code>external:HTMLCanvas</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorWheel+color_at"></a>

#### colorWheel.color\_at(mouseEvent) ⇒ <code>ColorHSL</code>
> Calculate the color at the given mouse position


| Param | Type |
| --- | --- |
| mouseEvent | <code>external:MouseEvent</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorWheel+color_to_pos"></a>

#### colorWheel.color\_to\_pos(param0) ⇒ <code>Object</code>
> Calculate the position of the given color in the color wheel.


| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorWheel+draw"></a>

#### colorWheel.draw()
> Draw the color wheel.


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorRGB"></a>

### se/fivebyfive/ortho/lib/color.ColorRGB : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHSV"></a>

### se/fivebyfive/ortho/lib/color.ColorHSV : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| v | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color.ColorHSL"></a>

### se/fivebyfive/ortho/lib/color.ColorHSL : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| l | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/color/services"></a>

## se/fivebyfive/ortho/lib/color/services

* [se/fivebyfive/ortho/lib/color/services](#module_se/fivebyfive/ortho/lib/color/services)
    * _static_
        * [.$colorHarmony](#module_se/fivebyfive/ortho/lib/color/services.$colorHarmony) : <code>module:se/fivebyfive/ortho/lib/color~ColorHarmony</code>
        * [.$colorHelper](#module_se/fivebyfive/ortho/lib/color/services.$colorHelper) : <code>module:se/fivebyfive/ortho/lib/color~ColorHelper</code>
        * [.$colorWheel](#module_se/fivebyfive/ortho/lib/color/services.$colorWheel) : <code>module:se/fivebyfive/ortho/lib/color~ColorWheel</code>
    * _inner_
        * [~initColor($ortho)](#module_se/fivebyfive/ortho/lib/color/services..initColor)


<br><a name="module_se/fivebyfive/ortho/lib/color/services.$colorHarmony"></a>

### se/fivebyfive/ortho/lib/color/services.$colorHarmony : <code>module:se/fivebyfive/ortho/lib/color~ColorHarmony</code>

<br><a name="module_se/fivebyfive/ortho/lib/color/services.$colorHelper"></a>

### se/fivebyfive/ortho/lib/color/services.$colorHelper : <code>module:se/fivebyfive/ortho/lib/color~ColorHelper</code>

<br><a name="module_se/fivebyfive/ortho/lib/color/services.$colorWheel"></a>

### se/fivebyfive/ortho/lib/color/services.$colorWheel : <code>module:se/fivebyfive/ortho/lib/color~ColorWheel</code>

<br><a name="module_se/fivebyfive/ortho/lib/color/services..initColor"></a>

### se/fivebyfive/ortho/lib/color/services~initColor($ortho)

| Param | Type |
| --- | --- |
| $ortho | [<code>Orthogonal</code>](#module_se/fivebyfive/ortho..Orthogonal) | 


<br><a name="module_se/fivebyfive/ortho/lib/extensions"></a>

## se/fivebyfive/ortho/lib/extensions

<br><a name="module_se/fivebyfive/ortho/lib/extensions.init"></a>

### se/fivebyfive/ortho/lib/extensions.init($injector)
> Register all extensions services


| Param | Type |
| --- | --- |
| $injector | <code>module:se/fivebyfive/ortho/services~OrthoInjector</code> | 


<br><a name="module_se/fivebyfive/ortho/lib/extensions/services"></a>

## se/fivebyfive/ortho/lib/extensions/services

* [se/fivebyfive/ortho/lib/extensions/services](#module_se/fivebyfive/ortho/lib/extensions/services)
    * [.$array](#module_se/fivebyfive/ortho/lib/extensions/services.$array) : <code>module:se/fivebyfive/ortho/lib/extensions~ArrayHelper</code>
    * [.$object](#module_se/fivebyfive/ortho/lib/extensions/services.$object) : <code>module:se/fivebyfive/ortho/lib/extensions~ObjectHelper</code>
    * [.$string](#module_se/fivebyfive/ortho/lib/extensions/services.$string) : <code>module:se/fivebyfive/ortho/lib/extensions~StringHelper</code>
    * [.$query](#module_se/fivebyfive/ortho/lib/extensions/services.$query) : <code>module:se/fivebyfive/ortho/lib/extensions~QueryHelper</code>
    * [.$css](#module_se/fivebyfive/ortho/lib/extensions/services.$css) : <code>module:se/fivebyfive/ortho/lib/extensions~CssHelper</code>
    * [.$linear](#module_se/fivebyfive/ortho/lib/extensions/services.$linear) : <code>module:se/fivebyfive/ortho/lib/extensions~LinearInterpolationHelper</code>


<br><a name="module_se/fivebyfive/ortho/lib/extensions/services.$array"></a>

### se/fivebyfive/ortho/lib/extensions/services.$array : <code>module:se/fivebyfive/ortho/lib/extensions~ArrayHelper</code>

<br><a name="module_se/fivebyfive/ortho/lib/extensions/services.$object"></a>

### se/fivebyfive/ortho/lib/extensions/services.$object : <code>module:se/fivebyfive/ortho/lib/extensions~ObjectHelper</code>

<br><a name="module_se/fivebyfive/ortho/lib/extensions/services.$string"></a>

### se/fivebyfive/ortho/lib/extensions/services.$string : <code>module:se/fivebyfive/ortho/lib/extensions~StringHelper</code>

<br><a name="module_se/fivebyfive/ortho/lib/extensions/services.$query"></a>

### se/fivebyfive/ortho/lib/extensions/services.$query : <code>module:se/fivebyfive/ortho/lib/extensions~QueryHelper</code>

<br><a name="module_se/fivebyfive/ortho/lib/extensions/services.$css"></a>

### se/fivebyfive/ortho/lib/extensions/services.$css : <code>module:se/fivebyfive/ortho/lib/extensions~CssHelper</code>

<br><a name="module_se/fivebyfive/ortho/lib/extensions/services.$linear"></a>

### se/fivebyfive/ortho/lib/extensions/services.$linear : <code>module:se/fivebyfive/ortho/lib/extensions~LinearInterpolationHelper</code>
