
Fork of [marko-express], but with stateful marko widget component [click-count] packaged as a node module. Thanks @philidem for fixing this.

[marko-express]: https://github.com/marko-js-samples/marko-express
[click-count]: http://markojs.com/marko-widgets/try-online/#Stateful_Click_Count.


---

I have another problem.

I'm trying to include `socket.io-client` library in the click-count widget:

    var io = require('socket.io-client');

[click-count/index.js](https://github.com/laggingreflex/marko-express-modular-widget/blob/master/node_modules/click-count/components/click-count/index.js#L3)


but it throws errors like not finding "url" or "http" modules. Do modules that depend on node's native module not work in client-side widgets? I guess it would make sense because of the distinction between server and client env. [Webpack has some modules][node-libs-browser] that mimic node's native modules so that they can work in browser env.

[node-libs-browser]: https://github.com/webpack/node-libs-browser

But I don't get why `socket.io-client` is using node's server-side modules in the first place. It's supposed to be a client-side module.

Even the usual way to include socket.io-client (which is to include the [js file][socket.io-cdn]) throws similar errors (not finding http module).

Any way to solve this?

[socket.io-cdn]: http://cdnjs.com/libraries/socket.io

---

Errors:


    events.js:141
          throw er; // Unhandled 'error' event
          ^

    Error: Async fragment failed (lasso-slot:head). Exception: Error: Unable to resolve required module "url" (fromDir "C:\…\node_modules\ws\lib") referenced in "C:\…\node_modules\ws\lib\WebSocket.js". Exception: Error: Module not found: url (from: C:\…\node_modules\ws\lib)
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:61:49)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
        at series (C:\…\node_modules\raptor-async\series.js:39:13)
        at Object.resolveInspectedRequires (C:\…\node_modules\lasso-require\lib\util\resolve.js:121:9)
        at C:\…\node_modules\lasso-require\lib\dependency-require.js:468:34
        at C:\…\node_modules\lasso-require\lib\inspect-cache.js:110:21
        at CacheEntry.proto.readValue (C:\…\node_modules\raptor-cache\lib\CacheEntry.js:54:16)
        at C:\…\node_modules\raptor-cache\lib\Cache.js:251:28
        at C:\…\node_modules\raptor-cache\lib\Cache.js:84:20
        at Object.DiskStore.get (C:\…\node_modules\raptor-cache\lib\DiskStore.js:560:13)
    Caused by: Error: Module not found: url (from: C:\…\node_modules\ws\lib)
        at Object.resolveRequire (C:\…\node_modules\raptor-modules\resolver\lib\resolveRequire.js:153:17)
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:53:33)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
        at series (C:\…\node_modules\raptor-async\series.js:39:13)
        at Object.resolveInspectedRequires (C:\…\node_modules\lasso-require\lib\util\resolve.js:121:9)
        at C:\…\node_modules\lasso-require\lib\dependency-require.js:468:34
        at C:\…\node_modules\lasso-require\lib\inspect-cache.js:110:21
        at CacheEntry.proto.readValue (C:\…\node_modules\raptor-cache\lib\CacheEntry.js:54:16)
        at C:\…\node_modules\raptor-cache\lib\Cache.js:251:28
        at C:\…\node_modules\raptor-cache\lib\Cache.js:84:20
        at AsyncWriter.error (C:\…\node_modules\async-writer\lib\AsyncWriter.js:423:17)
        at Object.<anonymous> (C:\…\node_modules\lasso\taglib\slot-tag.js:52:30)
        at notifyCallbacks (C:\…\node_modules\raptor-async\AsyncValue.js:76:35)
        at Object.AsyncValue.reject (C:\…\node_modules\raptor-async\AsyncValue.js:240:9)
        at done (C:\…\node_modules\lasso\taglib\page-tag.js:65:39)
        at done (C:\…\node_modules\lasso\lib\Lasso.js:654:21)
        at C:\…\node_modules\raptor-cache\lib\Cache.js:247:24
        at C:\…\node_modules\raptor-cache\lib\Cache.js:111:25
        at C:\…\node_modules\lasso\lib\Lasso.js:271:24
        at C:\…\node_modules\raptor-async\series.js:22:33


I did `npm install url` but then it can't find `http` module:

    events.js:141
          throw er; // Unhandled 'error' event
          ^

    Error: Async fragment failed (lasso-slot:head). Exception: Error: Unable to resolve required module "http" (fromDir "C:\…\node_modules\ws\lib") referenced in "C:\…\node_modules\ws\lib\WebSocket.js". Exception: Error: Module not found: http (from: C:\…\node_modules\ws\lib)
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:61:49)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
        at C:\…\node_modules\raptor-async\series.js:33:28
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:106:21
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:80:16)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
        at C:\…\node_modules\raptor-async\series.js:33:28
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:106:21
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:80:16)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
    Caused by: Error: Module not found: http (from: C:\…\node_modules\ws\lib)
        at Object.resolveRequire (C:\…\node_modules\raptor-modules\resolver\lib\resolveRequire.js:153:17)
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:53:33)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
        at C:\…\node_modules\raptor-async\series.js:33:28
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:106:21
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:80:16)
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:94:17
        at C:\…\node_modules\raptor-async\series.js:33:28
        at C:\…\node_modules\lasso-require\lib\util\resolve.js:106:21
        at resolveRequire (C:\…\node_modules\lasso-require\lib\util\resolve.js:80:16)
        at AsyncWriter.error (C:\…\node_modules\async-writer\lib\AsyncWriter.js:423:17)
        at Object.<anonymous> (C:\…\node_modules\lasso\taglib\slot-tag.js:52:30)
        at notifyCallbacks (C:\…\node_modules\raptor-async\AsyncValue.js:76:35)
        at Object.AsyncValue.reject (C:\…\node_modules\raptor-async\AsyncValue.js:240:9)
        at done (C:\…\node_modules\lasso\taglib\page-tag.js:65:39)
        at done (C:\…\node_modules\lasso\lib\Lasso.js:654:21)
        at C:\…\node_modules\raptor-cache\lib\Cache.js:247:24
        at C:\…\node_modules\raptor-cache\lib\Cache.js:111:25
        at C:\…\node_modules\lasso\lib\Lasso.js:271:24
        at C:\…\node_modules\raptor-async\series.js:22:33

There's an http on npm registry but it's an empty module and it doesn't work, also it doesn't seem to be officially by nodejs so I'm concerned using it.


And here's the error when including socket.io-client the usual way (include the `http://localhost:8080/socket.io/socket.io.js`)


    C:\…\node_modules\lasso\lib\dependencies\DependencyRegistry.js:422
                throw new Error('Dependency of type "' + type + '" is not supported. (dependency=' + require('util').inspect(config) + ', package="' + filename + '"). Registered types:\n' + Object.keys(this.registeredTypes).join(', '));
                ^

    Error: Dependency of type "http" is not supported. (dependency={ type: 'http',
      path: '//localhost:8080/socket.io/socket.io.js' }, package="C:\…\node_modules\click-count\components\click-count\browser.json"). Registered types:
    css, js, comment, loader-metadata, package, intersection, es6, commonjs-def, commonjs-run, commonjs-dep, commonjs-main, commonjs-remap, commonjs-resolved, commonjs-ready, commonjs-search-path, commonjs-runtime, require, png, jpeg, jpg, gif, svg, webp, marko
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