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
        * [.hex_to_rgb(hex)](#module_se/fivebyfive/ortho/color..ColorUtil+hex_to_rgb)
    * [~ColorWheel](#module_se/fivebyfive/ortho/color..ColorWheel)
    * [~ColorHSV](#module_se/fivebyfive/ortho/color..ColorHSV) : <code>Object</code>


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


<br><a name="module_se/fivebyfive/ortho/color..ColorUtil+hex_to_rgb"></a>

#### colorUtil.hex\_to\_rgb(hex)
> Convert Hex to RGB.


| Param | Type |
| --- | --- |
| hex | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho/color..ColorWheel"></a>

### se/fivebyfive/ortho/color~ColorWheel
> Class for creating color-wheels that can be drawn on an HTML canvas.


<br><a name="module_se/fivebyfive/ortho/color..ColorHSV"></a>

### se/fivebyfive/ortho/color~ColorHSV : <code>Object</code>

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

