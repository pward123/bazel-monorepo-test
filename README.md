When I run `bazel run //test_app` I get the following error
```
Error: Cannot find module 'test_lib'. Please verify that the package.json has a valid "main" entry
    at Function.module.constructor._resolveFilename (/home/vagrant/.cache/bazel/_bazel_vagrant/7496fcdb99433a7070ef329a079c1cbd/execroot/sql_rest_base/bazel-out/k8-fastbuild/bin/test_app/test_app_loader.js:485:17)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:690:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (test_app/index.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
```