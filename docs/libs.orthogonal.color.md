## Modules

<dl>
<dt><a href="#module_se/fivebyfive/ortho/color">se/fivebyfive/ortho/color</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/color/services">se/fivebyfive/ortho/color/services</a></dt>
<dd><p>All injectable services from <a href="#module_se/fivebyfive/ortho/color">se/fivebyfive/ortho/color</a></p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#ColorUtil">ColorUtil</a></dt>
<dd></dd>
</dl>


<br><a name="module_se/fivebyfive/ortho/color"></a>

## se/fivebyfive/ortho/color

* [se/fivebyfive/ortho/color](#module_se/fivebyfive/ortho/color)
    * [~ColorHarmony](#module_se/fivebyfive/ortho/color..ColorHarmony)
        * [new ColorHarmony(harmony)](#new_module_se/fivebyfive/ortho/color..ColorHarmony_new)
        * [.harmonize(color)](#module_se/fivebyfive/ortho/color..ColorHarmony+harmonize)
        * [.changeHarmony(newHarmony)](#module_se/fivebyfive/ortho/color..ColorHarmony+changeHarmony)
        * [.harmonies()](#module_se/fivebyfive/ortho/color..ColorHarmony+harmonies) ⇒ <code>Array.&lt;string&gt;</code>
    * [~ColorUtil](#module_se/fivebyfive/ortho/color..ColorUtil)
        * [.hex_to_rgb(hex)](#module_se/fivebyfive/ortho/color..ColorUtil+hex_to_rgb) ⇒ <code>ColorRGB</code>
        * [.hex_to_hsl(hex)](#module_se/fivebyfive/ortho/color..ColorUtil+hex_to_hsl) ⇒ <code>ColorHSL</code>
        * [.hsl_to_rgb(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_rgb) ⇒ <code>ColorRGB</code>
        * [.hsl_to_hex(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_hex) ⇒ <code>string</code>
        * [.hsl_to_hsv(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_hsv) ⇒ <code>ColorHSV</code>
        * [.hsv_to_hsl(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsv_to_hsl) ⇒ <code>ColorHSL</code>
        * [.rgb_to_hex(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+rgb_to_hex) ⇒ <code>string</code>
        * [.rgb_to_hsl(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+rgb_to_hsl) ⇒ <code>ColorHSL</code>
        * [.rybhue_to_hslhue(hue)](#module_se/fivebyfive/ortho/color..ColorUtil+rybhue_to_hslhue) ⇒ <code>number</code>
        * [.hslhue_to_rybhue(hue)](#module_se/fivebyfive/ortho/color..ColorUtil+hslhue_to_rybhue) ⇒ <code>number</code>
        * [.any_to_string(source, type)](#module_se/fivebyfive/ortho/color..ColorUtil+any_to_string) ⇒ <code>string</code>
        * [.any_to_hsl(source)](#module_se/fivebyfive/ortho/color..ColorUtil+any_to_hsl) ⇒ <code>ColorHSL</code>
    * [~ColorWheel](#module_se/fivebyfive/ortho/color..ColorWheel)
        * [new ColorWheel(canvas)](#new_module_se/fivebyfive/ortho/color..ColorWheel_new)
        * [.color_at(mouseEvent)](#module_se/fivebyfive/ortho/color..ColorWheel+color_at) ⇒ <code>ColorHSL</code>
        * [.color_to_pos(param0)](#module_se/fivebyfive/ortho/color..ColorWheel+color_to_pos) ⇒ <code>Object</code>
        * [.draw()](#module_se/fivebyfive/ortho/color..ColorWheel+draw)
    * [~ColorHSV](#module_se/fivebyfive/ortho/color..ColorHSV) : <code>Object</code>
    * [~ColorRGB](#module_se/fivebyfive/ortho/color..ColorRGB) : <code>Object</code>
    * [~ColorHSV](#module_se/fivebyfive/ortho/color..ColorHSV) : <code>Object</code>
    * [~ColorHSL](#module_se/fivebyfive/ortho/color..ColorHSL) : <code>Object</code>


<br><a name="module_se/fivebyfive/ortho/color..ColorHarmony"></a>

### se/fivebyfive/ortho/color~ColorHarmony
> Color-harmony generator


* [~ColorHarmony](#module_se/fivebyfive/ortho/color..ColorHarmony)
    * [new ColorHarmony(harmony)](#new_module_se/fivebyfive/ortho/color..ColorHarmony_new)
    * [.harmonize(color)](#module_se/fivebyfive/ortho/color..ColorHarmony+harmonize)
    * [.changeHarmony(newHarmony)](#module_se/fivebyfive/ortho/color..ColorHarmony+changeHarmony)
    * [.harmonies()](#module_se/fivebyfive/ortho/color..ColorHarmony+harmonies) ⇒ <code>Array.&lt;string&gt;</code>


<br><a name="new_module_se/fivebyfive/ortho/color..ColorHarmony_new"></a>

#### new ColorHarmony(harmony)
> Create new instance of `ColorHarmony`


| Param | Type | Default |
| --- | --- | --- |
| harmony | <code>string</code> | <code>&quot;custom&quot;</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorHarmony+harmonize"></a>

#### colorHarmony.harmonize(color)
> Calculate colors for currently chose harmony


| Param | Type |
| --- | --- |
| color | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorHarmony+changeHarmony"></a>

#### colorHarmony.changeHarmony(newHarmony)
> Set harmony to new value


| Param | Type |
| --- | --- |
| newHarmony | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorHarmony+harmonies"></a>

#### colorHarmony.harmonies() ⇒ <code>Array.&lt;string&gt;</code>
> Get a list of all available harmonies


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil"></a>

### se/fivebyfive/ortho/color~ColorUtil
> Helpers for converting colors among color-spaces


* [~ColorUtil](#module_se/fivebyfive/ortho/color..ColorUtil)
    * [.hex_to_rgb(hex)](#module_se/fivebyfive/ortho/color..ColorUtil+hex_to_rgb) ⇒ <code>ColorRGB</code>
    * [.hex_to_hsl(hex)](#module_se/fivebyfive/ortho/color..ColorUtil+hex_to_hsl) ⇒ <code>ColorHSL</code>
    * [.hsl_to_rgb(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_rgb) ⇒ <code>ColorRGB</code>
    * [.hsl_to_hex(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_hex) ⇒ <code>string</code>
    * [.hsl_to_hsv(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_hsv) ⇒ <code>ColorHSV</code>
    * [.hsv_to_hsl(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+hsv_to_hsl) ⇒ <code>ColorHSL</code>
    * [.rgb_to_hex(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+rgb_to_hex) ⇒ <code>string</code>
    * [.rgb_to_hsl(param0)](#module_se/fivebyfive/ortho/color..ColorUtil+rgb_to_hsl) ⇒ <code>ColorHSL</code>
    * [.rybhue_to_hslhue(hue)](#module_se/fivebyfive/ortho/color..ColorUtil+rybhue_to_hslhue) ⇒ <code>number</code>
    * [.hslhue_to_rybhue(hue)](#module_se/fivebyfive/ortho/color..ColorUtil+hslhue_to_rybhue) ⇒ <code>number</code>
    * [.any_to_string(source, type)](#module_se/fivebyfive/ortho/color..ColorUtil+any_to_string) ⇒ <code>string</code>
    * [.any_to_hsl(source)](#module_se/fivebyfive/ortho/color..ColorUtil+any_to_hsl) ⇒ <code>ColorHSL</code>


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hex_to_rgb"></a>

#### colorUtil.hex\_to\_rgb(hex) ⇒ <code>ColorRGB</code>
> Convert Hex to RGB.


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hex_to_hsl"></a>

#### colorUtil.hex\_to\_hsl(hex) ⇒ <code>ColorHSL</code>
> Convert hex string to HSL


| Param | Type |
| --- | --- |
| hex | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_rgb"></a>

#### colorUtil.hsl\_to\_rgb(param0) ⇒ <code>ColorRGB</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_hex"></a>

#### colorUtil.hsl\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hsl_to_hsv"></a>

#### colorUtil.hsl\_to\_hsv(param0) ⇒ <code>ColorHSV</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hsv_to_hsl"></a>

#### colorUtil.hsv\_to\_hsl(param0) ⇒ <code>ColorHSL</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorHSV</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+rgb_to_hex"></a>

#### colorUtil.rgb\_to\_hex(param0) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorRGB</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+rgb_to_hsl"></a>

#### colorUtil.rgb\_to\_hsl(param0) ⇒ <code>ColorHSL</code>

| Param | Type |
| --- | --- |
| param0 | <code>ColorRGB</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+rybhue_to_hslhue"></a>

#### colorUtil.rybhue\_to\_hslhue(hue) ⇒ <code>number</code>
> Translate from RYB color space to HSL


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hslhue_to_rybhue"></a>

#### colorUtil.hslhue\_to\_rybhue(hue) ⇒ <code>number</code>
> Translate from HSL color space to RYN


| Param | Type |
| --- | --- |
| hue | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+any_to_string"></a>

#### colorUtil.any\_to\_string(source, type) ⇒ <code>string</code>
> Convert from any color space to any string format


| Param | Type | Description |
| --- | --- | --- |
| source | <code>any</code> |  |
| type | <code>string</code> | `"hex"`, `"rgb"`, `"hsl"`, or `"hsv"` |


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+any_to_hsl"></a>

#### colorUtil.any\_to\_hsl(source) ⇒ <code>ColorHSL</code>
> Convert from any color space (include string representations), to HSL.


| Param | Type |
| --- | --- |
| source | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorWheel"></a>

### se/fivebyfive/ortho/color~ColorWheel
> Class for creating color-wheels that can be drawn on an HTML canvas.


* [~ColorWheel](#module_se/fivebyfive/ortho/color..ColorWheel)
    * [new ColorWheel(canvas)](#new_module_se/fivebyfive/ortho/color..ColorWheel_new)
    * [.color_at(mouseEvent)](#module_se/fivebyfive/ortho/color..ColorWheel+color_at) ⇒ <code>ColorHSL</code>
    * [.color_to_pos(param0)](#module_se/fivebyfive/ortho/color..ColorWheel+color_to_pos) ⇒ <code>Object</code>
    * [.draw()](#module_se/fivebyfive/ortho/color..ColorWheel+draw)


<br><a name="new_module_se/fivebyfive/ortho/color..ColorWheel_new"></a>

#### new ColorWheel(canvas)
> Create new instance of `ColorWheel`, do be drawn in `canvas`


| Param | Type |
| --- | --- |
| canvas | <code>external:HTMLCanvas</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorWheel+color_at"></a>

#### colorWheel.color\_at(mouseEvent) ⇒ <code>ColorHSL</code>
> Calculate the color at the given mouse position


| Param | Type |
| --- | --- |
| mouseEvent | <code>external:MouseEvent</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorWheel+color_to_pos"></a>

#### colorWheel.color\_to\_pos(param0) ⇒ <code>Object</code>
> Calculate the position of the given color in the color wheel.


| Param | Type |
| --- | --- |
| param0 | <code>ColorHSL</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorWheel+draw"></a>

#### colorWheel.draw()
> Draw the color wheel.


<br><a name="module_se/fivebyfive/ortho/color..ColorHSV"></a>

### se/fivebyfive/ortho/color~ColorHSV : <code>Object</code>

<br><a name="module_se/fivebyfive/ortho/color..ColorRGB"></a>

### se/fivebyfive/ortho/color~ColorRGB : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorHSV"></a>

### se/fivebyfive/ortho/color~ColorHSV : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| v | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorHSL"></a>

### se/fivebyfive/ortho/color~ColorHSL : <code>Object</code>
**Properties**

| Name | Type |
| --- | --- |
| h | <code>number</code> | 
| s | <code>number</code> | 
| l | <code>number</code> | 


<br><a name="module_se/fivebyfive/ortho/color/services"></a>

## se/fivebyfive/ortho/color/services
> All injectable services from [se/fivebyfive/ortho/color](#module_se/fivebyfive/ortho/color)


* [se/fivebyfive/ortho/color/services](#module_se/fivebyfive/ortho/color/services)
    * [.$colorUtil](#module_se/fivebyfive/ortho/color/services.$colorUtil) : [<code>ColorUtil</code>](#module_se/fivebyfive/ortho/color..ColorUtil)
    * [.$colorHarmony](#module_se/fivebyfive/ortho/color/services.$colorHarmony) : [<code>ColorHarmony</code>](#module_se/fivebyfive/ortho/color..ColorHarmony)
    * [.$colorWheel](#module_se/fivebyfive/ortho/color/services.$colorWheel) : [<code>ColorWheel</code>](#module_se/fivebyfive/ortho/color..ColorWheel)


<br><a name="module_se/fivebyfive/ortho/color/services.$colorUtil"></a>

### se/fivebyfive/ortho/color/services.$colorUtil : [<code>ColorUtil</code>](#module_se/fivebyfive/ortho/color..ColorUtil)

<br><a name="module_se/fivebyfive/ortho/color/services.$colorHarmony"></a>

### se/fivebyfive/ortho/color/services.$colorHarmony : [<code>ColorHarmony</code>](#module_se/fivebyfive/ortho/color..ColorHarmony)

<br><a name="module_se/fivebyfive/ortho/color/services.$colorWheel"></a>

### se/fivebyfive/ortho/color/services.$colorWheel : [<code>ColorWheel</code>](#module_se/fivebyfive/ortho/color..ColorWheel)

<br><a name="ColorUtil"></a>

## ColorUtil
**Alias:** `ColorUtil`


<br><a name="new_ColorUtil_new"></a>

### new ColorUtil($linear)

| Param | Type |
| --- | --- |
| $linear | <code>module:se/fivebyfive/ortho/extensions~LinearUtil</code> | 

