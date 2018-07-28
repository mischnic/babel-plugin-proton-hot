# babel-plugin-proton-hot

Transforms proton-native code to be hot reloadable in an appropriate (webpack) environment. Used by [proton-hot-cli](https://github.com/mischnic/proton-hot-cli).

You can disable hot reloading (for both imported and exported components) on a per-file basis:
```js
// @proton-hot-disable
import ...
```