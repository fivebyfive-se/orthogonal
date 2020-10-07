# orthogonal
Orthogonal is a JavaScript library providing:
 
 1) dependency injection,
 1) a store,
 1) a cache, &
 1) a bunch of utility methods

The variable `orthogonal` is added to the global scope (I know! I know!),
which exposes the functionality. 
 
## Some examples:

See, e.g., [klr-monster](https://github.com/fivebyfive-se/klr-monster/blob/master/client/src/js/main.js)
for a real-world example.

### Inject a dependency into a function:
```js
function do_expensive_stuff($cache) {
  return $cache.get('cache-key', () => {
    // do the stuff
  });
}
orthogonal.call(do_expensive_stuff); // injects $cache
```

### Inject store into an onload-handler:
```js
    // onReady is a utility method, which calls a dependency-injected version
    // of the function you pass it either directly, if the DOM is loaded, or
    // on window.load. 
    orthogonal.onReady(($css, $store) => { // inject $css $store
        const menuStore = $store.create('menu') // create a new store
            .state({
                header: {
                    isDetached: false,
                    height: 0
                },
                isMobile: false
            })
            .actions({
                updateHeader: (state, {isDetached, height}) => ({...state, header: { isDetached, height }}),
                updateIsMobile: (state, isMobile) => ({ ...state, isMobile }),
            });

        // $css contains helpers for working with $css, see `./orthogonal.extensions.js`
        const [headerClass, detachedClass] = $css.classNames('header', 'detached'); // => ['header', 'header--detached']
        const header = document.querySelector(`.${headerClass}`);
        // => $css.getVar() parses and returns css variables
        const mobileBreakpoint = +$css.getVar('--breakpoint-mobile').replace('px', '');

        // subscribe to changes of the value at the path `header.isDetached` in the store
        menuStore.select('header.isDetached')
            .subscribe((detached) => header.classList.toggle(detachedClass, detached));
    });
```

## Further reading
Check the [API-documentation](https://fivebyfive-se.github.io/orthogonal/) for more information.
