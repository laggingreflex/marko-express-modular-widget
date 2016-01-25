
This is an extension of [marko-js-samples/marko-express](https://github.com/marko-js-samples/marko-express).
But instead of components in the same dir, I'm packaging them as node modules.
Also I'm using stateful marko widget [click-count](http://markojs.com/marko-widgets/try-online/#Stateful_Click_Count).

The homepage uses
[lasso-page taglib](http://markojs.com/docs/marko-widgets/get-started/#server-side-rendering)
to register the widget `<lasso-page package-path="./browser.json" />`

`browser.json` directs to `click-count/browser.json` which ultimately requires

    node_modules\click-count\components\click-count\index.js

where the widget is defiend using `.defineComponent()`

I get the following error:

    Listening on localhost:8080

    C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:422
                throw new Error('Dependency of type "' + type + '" is not supported. (dependency=' + require('util').inspect(config) + ', package="' + filename + '"). Registered types:\n' + Object.keys(this.registeredTypes).join(', '));
                ^

    Error: Dependency of type "marko" is not supported. (dependency={ type: 'marko', path: 'C:\…\marko-express-modular-widget\node_modules\click-count\components\click-count\template.marko' }, package="C:\…\marko-express-modular-widget\node_modules\click-count\components\click-count\browser.json"). Registered types: css, js, comment, loader-metadata, package, intersection, es6, commonjs-def, commonjs-run, commonjs-dep, commonjs-main, commonjs-remap, commonjs-resolved, commonjs-ready, commonjs-search-path, commonjs-runtime, require, png, jpeg, jpg, gif, svg, webp
        at Object.DependencyRegistry.createDependency (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:422:19)
        at C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:507:45
        at applyNextNormalizer (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:442:24)
        at applyNextNormalizer (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:468:17)
        at applyNextNormalizer (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:468:17)
        at C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:459:21
        at globNormalizer (C:\…\node_modules\lasso\lib\dependencies\glob.js:55:9)
        at applyNextNormalizer (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:448:17)
        at Object.DependencyRegistry._normalizeDependency (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:472:9)
        at normalizeNext (C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:495:19)
