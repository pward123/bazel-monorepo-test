Works:
```
cd packages
bazel run //test_app:works
```

Fails with `Error: Cannot find module 'test_lib'. Please verify that the package.json has a valid "main" entry`
```
cd packages
bazel run //test_app:broke
```