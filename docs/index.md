## Modules

<dl>
<dt><a href="#module_se/fivebyfive/ortho">se/fivebyfive/ortho</a></dt>
<dd></dd>
<dt><a href="#module_se/fivebyfive/ortho/_/services">se/fivebyfive/ortho/_/services</a></dt>
<dd><p>This module contains all built in injectable services
from <a href="#module_se/fivebyfive/ortho..Orthogonal">Orthogonal</a>.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#orthogonal">orthogonal</a> : <code>Orthogonal</code></dt>
<dd><p>Globally exported instance of Orthogonal.</p>
</dd>
</dl>


<br><a name="module_se/fivebyfive/ortho"></a>

## se/fivebyfive/ortho

* [se/fivebyfive/ortho](#module_se/fivebyfive/ortho)
    * [~OrthoFactory](#module_se/fivebyfive/ortho..OrthoFactory)
        * [new OrthoFactory(creatorFunc)](#new_module_se/fivebyfive/ortho..OrthoFactory_new)
        * [.create(name, ...args)](#module_se/fivebyfive/ortho..OrthoFactory+create)
    * [~OrthoCache](#module_se/fivebyfive/ortho..OrthoCache)
        * [.createKey(...objects)](#module_se/fivebyfive/ortho..OrthoCache+createKey) ⇒ <code>string</code>
        * [.get(key, getter)](#module_se/fivebyfive/ortho..OrthoCache+get) ⇒ <code>any</code>
    * [~OrthoExpressionParser](#module_se/fivebyfive/ortho..OrthoExpressionParser)
        * [.parse(expression, context)](#module_se/fivebyfive/ortho..OrthoExpressionParser+parse) ⇒ <code>Array.&lt;Variable&gt;</code>
        * [.createFunction(expression, context)](#module_se/fivebyfive/ortho..OrthoExpressionParser+createFunction) ⇒ <code>Object</code>
        * [.createInjectedFunction(expression, context)](#module_se/fivebyfive/ortho..OrthoExpressionParser+createInjectedFunction) ⇒ <code>function</code>
        * [.run(expression, context, ...args)](#module_se/fivebyfive/ortho..OrthoExpressionParser+run) ⇒ <code>function</code>
    * [~OrthoInjector](#module_se/fivebyfive/ortho..OrthoInjector)
        * [.register(name, dependency)](#module_se/fivebyfive/ortho..OrthoInjector+register) ⇒ <code>OrthoInjector</code>
        * [.registerAll(newContext)](#module_se/fivebyfive/ortho..OrthoInjector+registerAll) ⇒ <code>OrthoInjector</code>
        * [.injectExplicit(func, ...injectArgs)](#module_se/fivebyfive/ortho..OrthoInjector+injectExplicit) ⇒ <code>function</code>
        * [.injectFunction(func)](#module_se/fivebyfive/ortho..OrthoInjector+injectFunction) ⇒ <code>function</code>
        * [.callFunction(func)](#module_se/fivebyfive/ortho..OrthoInjector+callFunction) ⇒ <code>any</code>
        * [.injectExpression(expression)](#module_se/fivebyfive/ortho..OrthoInjector+injectExpression) ⇒ <code>function</code>
        * [.callExpression(expression)](#module_se/fivebyfive/ortho..OrthoInjector+callExpression) ⇒ <code>any</code>
    * [~OrthoStore](#module_se/fivebyfive/ortho..OrthoStore)
        * [.state(intialState)](#module_se/fivebyfive/ortho..OrthoStore+state) ⇒ <code>this</code>
        * [.actions(actions)](#module_se/fivebyfive/ortho..OrthoStore+actions) ⇒ <code>this</code>
        * [.dispatch(actions)](#module_se/fivebyfive/ortho..OrthoStore+dispatch) ⇒ <code>this</code>
        * [.select(selectorOrPath)](#module_se/fivebyfive/ortho..OrthoStore+select) ⇒ <code>OrthoStoreSelector</code>
    * [~Orthogonal](#module_se/fivebyfive/ortho..Orthogonal) ⇐ <code>OrthoInjector</code>
        * [.register](#module_se/fivebyfive/ortho..Orthogonal+register)
        * [.inject(expression)](#module_se/fivebyfive/ortho..Orthogonal+inject) ⇒ <code>function</code>
        * [.call(expression, args)](#module_se/fivebyfive/ortho..Orthogonal+call) ⇒ <code>any</code>
        * [.onReady(func)](#module_se/fivebyfive/ortho..Orthogonal+onReady)


<br><a name="module_se/fivebyfive/ortho..OrthoFactory"></a>

### se/fivebyfive/ortho~OrthoFactory
> A simple wrapper around injectables


* [~OrthoFactory](#module_se/fivebyfive/ortho..OrthoFactory)
    * [new OrthoFactory(creatorFunc)](#new_module_se/fivebyfive/ortho..OrthoFactory_new)
    * [.create(name, ...args)](#module_se/fivebyfive/ortho..OrthoFactory+create)


<br><a name="new_module_se/fivebyfive/ortho..OrthoFactory_new"></a>

#### new OrthoFactory(creatorFunc)

| Param | Type |
| --- | --- |
| creatorFunc | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoFactory+create"></a>

#### orthoFactory.create(name, ...args)

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| ...args | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoCache"></a>

### se/fivebyfive/ortho~OrthoCache
> Cache-handler. Service can be dependency inject as `$cache` from 
> [Orthogonal](Orthogonal).


* [~OrthoCache](#module_se/fivebyfive/ortho..OrthoCache)
    * [.createKey(...objects)](#module_se/fivebyfive/ortho..OrthoCache+createKey) ⇒ <code>string</code>
    * [.get(key, getter)](#module_se/fivebyfive/ortho..OrthoCache+get) ⇒ <code>any</code>


<br><a name="module_se/fivebyfive/ortho..OrthoCache+createKey"></a>

#### orthoCache.createKey(...objects) ⇒ <code>string</code>
> Convert a bunch of different values into a unique key.


| Param | Type |
| --- | --- |
| ...objects | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoCache+get"></a>

#### orthoCache.get(key, getter) ⇒ <code>any</code>
> Get a value from the cache, as identified by `key` or, if it doesn't exist,
> call `getter`, store the value as `key` and return it.


| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| getter | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoExpressionParser"></a>

### se/fivebyfive/ortho~OrthoExpressionParser
> Primarily used for dependency injection. Contains
> methods for reflection -- parsing functions to see
> which parameters it has and what they're called.
> Can be dependency injected as a service via `Orthogonal` as `$expressionParser`.


* [~OrthoExpressionParser](#module_se/fivebyfive/ortho..OrthoExpressionParser)
    * [.parse(expression, context)](#module_se/fivebyfive/ortho..OrthoExpressionParser+parse) ⇒ <code>Array.&lt;Variable&gt;</code>
    * [.createFunction(expression, context)](#module_se/fivebyfive/ortho..OrthoExpressionParser+createFunction) ⇒ <code>Object</code>
    * [.createInjectedFunction(expression, context)](#module_se/fivebyfive/ortho..OrthoExpressionParser+createInjectedFunction) ⇒ <code>function</code>
    * [.run(expression, context, ...args)](#module_se/fivebyfive/ortho..OrthoExpressionParser+run) ⇒ <code>function</code>


<br><a name="module_se/fivebyfive/ortho..OrthoExpressionParser+parse"></a>

#### orthoExpressionParser.parse(expression, context) ⇒ <code>Array.&lt;Variable&gt;</code>
> Find all variable names which have keys in `context` in the JavaScript
> code in `expression`.


| Param | Type |
| --- | --- |
| expression | <code>string</code> | 
| context | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoExpressionParser+createFunction"></a>

#### orthoExpressionParser.createFunction(expression, context) ⇒ <code>Object</code>
> The javascript code in `expression` and create a new function, whose 
> parameters are named the same as all the variables referenced in the code
> which have a value in `context`, and all


| Param | Type |
| --- | --- |
| expression | <code>string</code> | 
| context | <code>any</code> | 

**Example**  
```js
// returns {variables: [{key: a, value: 3}], expressFunction: (a) => a + 1}; 
 $expressionParser.createFunction('a + 1', { a: 3});  
```

<br><a name="module_se/fivebyfive/ortho..OrthoExpressionParser+createInjectedFunction"></a>

#### orthoExpressionParser.createInjectedFunction(expression, context) ⇒ <code>function</code>
> Wrap a JavaScript expression in a dependency-injecting function,
> injecting the values from `context` whose keys match variable-names
> in `expression`.


| Param | Type |
| --- | --- |
| expression | <code>string</code> | 
| context | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoExpressionParser+run"></a>

#### orthoExpressionParser.run(expression, context, ...args) ⇒ <code>function</code>
> Create and run a dependency-injection wrapped function using the code
> in `expression`, injecting the values from `context` whose keys match variable-names
> in `expression`.


| Param | Type |
| --- | --- |
| expression | <code>string</code> | 
| context | <code>object</code> | 
| ...args | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector"></a>

### se/fivebyfive/ortho~OrthoInjector
> Dependency injector. Itself injected as `$injector` from [Orthogonal](Orthogonal).


* [~OrthoInjector](#module_se/fivebyfive/ortho..OrthoInjector)
    * [.register(name, dependency)](#module_se/fivebyfive/ortho..OrthoInjector+register) ⇒ <code>OrthoInjector</code>
    * [.registerAll(newContext)](#module_se/fivebyfive/ortho..OrthoInjector+registerAll) ⇒ <code>OrthoInjector</code>
    * [.injectExplicit(func, ...injectArgs)](#module_se/fivebyfive/ortho..OrthoInjector+injectExplicit) ⇒ <code>function</code>
    * [.injectFunction(func)](#module_se/fivebyfive/ortho..OrthoInjector+injectFunction) ⇒ <code>function</code>
    * [.callFunction(func)](#module_se/fivebyfive/ortho..OrthoInjector+callFunction) ⇒ <code>any</code>
    * [.injectExpression(expression)](#module_se/fivebyfive/ortho..OrthoInjector+injectExpression) ⇒ <code>function</code>
    * [.callExpression(expression)](#module_se/fivebyfive/ortho..OrthoInjector+callExpression) ⇒ <code>any</code>


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+register"></a>

#### orthoInjector.register(name, dependency) ⇒ <code>OrthoInjector</code>
> Register a new dependency under the name `name`.
> If `dependency` is a function, it is assumed to
> be a factory for the dependency, which will be called
> once, the first time the dependency is injected, injecting
> its return value insted


| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| dependency | <code>function</code>, <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+registerAll"></a>

#### orthoInjector.registerAll(newContext) ⇒ <code>OrthoInjector</code>
> Register all values in `newContext` with names matching their key.


| Param | Type |
| --- | --- |
| newContext | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+injectExplicit"></a>

#### orthoInjector.injectExplicit(func, ...injectArgs) ⇒ <code>function</code>
> Create a dependency-injected version of `func`, explicity injecting the
> dependencies listed in `injectArgs` only.


| Param | Type |
| --- | --- |
| func | <code>function</code> | 
| ...injectArgs | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+injectFunction"></a>

#### orthoInjector.injectFunction(func) ⇒ <code>function</code>
> Create a dependency-injected version of `func`, automatically injecting all
> the dependencies reference in its argument list.


| Param | Type |
| --- | --- |
| func | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+callFunction"></a>

#### orthoInjector.callFunction(func) ⇒ <code>any</code>
> Create and call a dependency-injected version of `func`, automatically injecting all
> the dependencies reference in its argument list.


| Param | Type |
| --- | --- |
| func | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+injectExpression"></a>

#### orthoInjector.injectExpression(expression) ⇒ <code>function</code>
> Create a function which wraps the code in `expression`, injecting all
> dependencies referenced in the code.


| Param | Type |
| --- | --- |
| expression | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoInjector+callExpression"></a>

#### orthoInjector.callExpression(expression) ⇒ <code>any</code>
> Create and call a function which wraps the code in `expression`, injecting all
> dependencies referenced in the code.


| Param | Type |
| --- | --- |
| expression | <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoStore"></a>

### se/fivebyfive/ortho~OrthoStore
> Simple state-management. Dependency-injected as `$store` from [Orthogonal](Orthogonal).


* [~OrthoStore](#module_se/fivebyfive/ortho..OrthoStore)
    * [.state(intialState)](#module_se/fivebyfive/ortho..OrthoStore+state) ⇒ <code>this</code>
    * [.actions(actions)](#module_se/fivebyfive/ortho..OrthoStore+actions) ⇒ <code>this</code>
    * [.dispatch(actions)](#module_se/fivebyfive/ortho..OrthoStore+dispatch) ⇒ <code>this</code>
    * [.select(selectorOrPath)](#module_se/fivebyfive/ortho..OrthoStore+select) ⇒ <code>OrthoStoreSelector</code>


<br><a name="module_se/fivebyfive/ortho..OrthoStore+state"></a>

#### orthoStore.state(intialState) ⇒ <code>this</code>
> You only want to use this once -- combines existing state with `initialState`,
> but makes no effort to dispatch actions or fire events.


| Param | Type |
| --- | --- |
| intialState | <code>any</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoStore+actions"></a>

#### orthoStore.actions(actions) ⇒ <code>this</code>
> Add `actions` to store. Each action represents a change of state.


| Param | Type |
| --- | --- |
| actions | <code>object</code> | 


<br><a name="module_se/fivebyfive/ortho..OrthoStore+dispatch"></a>

#### orthoStore.dispatch(actions) ⇒ <code>this</code>
> Dispatch `actions`.


| Param | Type | Description |
| --- | --- | --- |
| actions | <code>string</code>, <code>any</code> | list of actions and payloads. |


<br><a name="module_se/fivebyfive/ortho..OrthoStore+select"></a>

#### orthoStore.select(selectorOrPath) ⇒ <code>OrthoStoreSelector</code>
> Select a value from store. returns an


| Param | Type |
| --- | --- |
| selectorOrPath | <code>OrthoStoreSelector</code>, <code>string</code> | 


<br><a name="module_se/fivebyfive/ortho..Orthogonal"></a>

### se/fivebyfive/ortho~Orthogonal ⇐ <code>OrthoInjector</code>
> The main entry point

**Extends**: <code>OrthoInjector</code>  

* [~Orthogonal](#module_se/fivebyfive/ortho..Orthogonal) ⇐ <code>OrthoInjector</code>
    * [.register](#module_se/fivebyfive/ortho..Orthogonal+register)
    * [.inject(expression)](#module_se/fivebyfive/ortho..Orthogonal+inject) ⇒ <code>function</code>
    * [.call(expression, args)](#module_se/fivebyfive/ortho..Orthogonal+call) ⇒ <code>any</code>
    * [.onReady(func)](#module_se/fivebyfive/ortho..Orthogonal+onReady)


<br><a name="module_se/fivebyfive/ortho..Orthogonal+register"></a>

#### orthogonal.register

<br><a name="module_se/fivebyfive/ortho..Orthogonal+inject"></a>

#### orthogonal.inject(expression) ⇒ <code>function</code>
> Wrap `expression` (which can be either a string containing JavaScript or a function)
> in a dependency-injecting function.


| Param | Type |
| --- | --- |
| expression | <code>string</code>, <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho..Orthogonal+call"></a>

#### orthogonal.call(expression, args) ⇒ <code>any</code>
> Wrap `expression` (which can be either a string containing JavaScript or a function)
> in a dependency-injecting function, and call it, passing along `args` as arguments after
> the injected dependencies.


| Param | Type |
| --- | --- |
| expression | <code>string</code>, <code>function</code> | 
| args | <code>Array.&lt;any&gt;</code> | 


<br><a name="module_se/fivebyfive/ortho..Orthogonal+onReady"></a>

#### orthogonal.onReady(func)
> Inject dependencies into the function `func`, and call it once
> the browser window has loaded (or directly if it already has).


| Param | Type |
| --- | --- |
| func | <code>function</code> | 


<br><a name="module_se/fivebyfive/ortho/_/services"></a>

## se/fivebyfive/ortho/\_/services
> This module contains all built in injectable services
> from [Orthogonal](#module_se/fivebyfive/ortho..Orthogonal).


* [se/fivebyfive/ortho/_/services](#module_se/fivebyfive/ortho/_/services)
    * [.$cache](#module_se/fivebyfive/ortho/_/services.$cache) : [<code>OrthoCache</code>](#module_se/fivebyfive/ortho..OrthoCache)
    * [.$expressionParser](#module_se/fivebyfive/ortho/_/services.$expressionParser) : [<code>OrthoExpressionParser</code>](#module_se/fivebyfive/ortho..OrthoExpressionParser)
    * [.$injector](#module_se/fivebyfive/ortho/_/services.$injector) : [<code>OrthoInjector</code>](#module_se/fivebyfive/ortho..OrthoInjector)
    * [.$store](#module_se/fivebyfive/ortho/_/services.$store) : [<code>OrthoStore</code>](#module_se/fivebyfive/ortho..OrthoStore)
    * [.$window](#module_se/fivebyfive/ortho/_/services.$window) : <code>external:Window</code>
    * [.$document](#module_se/fivebyfive/ortho/_/services.$document) : <code>external:Document</code>


<br><a name="module_se/fivebyfive/ortho/_/services.$cache"></a>

### se/fivebyfive/ortho/_/services.$cache : [<code>OrthoCache</code>](#module_se/fivebyfive/ortho..OrthoCache)

<br><a name="module_se/fivebyfive/ortho/_/services.$expressionParser"></a>

### se/fivebyfive/ortho/_/services.$expressionParser : [<code>OrthoExpressionParser</code>](#module_se/fivebyfive/ortho..OrthoExpressionParser)

<br><a name="module_se/fivebyfive/ortho/_/services.$injector"></a>

### se/fivebyfive/ortho/_/services.$injector : [<code>OrthoInjector</code>](#module_se/fivebyfive/ortho..OrthoInjector)

<br><a name="module_se/fivebyfive/ortho/_/services.$store"></a>

### se/fivebyfive/ortho/_/services.$store : [<code>OrthoStore</code>](#module_se/fivebyfive/ortho..OrthoStore)

<br><a name="module_se/fivebyfive/ortho/_/services.$window"></a>

### se/fivebyfive/ortho/_/services.$window : <code>external:Window</code>

<br><a name="module_se/fivebyfive/ortho/_/services.$document"></a>

### se/fivebyfive/ortho/_/services.$document : <code>external:Document</code>

<br><a name="orthogonal"></a>

## orthogonal : <code>Orthogonal</code>
> Globally exported instance of Orthogonal.

