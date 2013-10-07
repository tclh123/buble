
使用 r.js 将 gamejs 转化成了 AMD 兼容的，其实就是包一层 

``` javascript
define(function (require, exports, module) {
    //...
});
```

但是， r.js 无法处理原先 CommonJS 风格的模块里的 循环依赖，所以我手动进行了处理，

使用的是 gamejs commit:7fb5111999 的版本，经观察发现，`:Ack "require\('../gamejs'\)\."`可以搜索到代码中3处循环依赖的地方（都是循环依赖了gamejs.js里的Surface...其实可以考虑把这个循环依赖干掉，虽然CJS可以这么用...但是也不太好吧？...）

```
require(['gamejs'], function(gamejs) {
    var Surface = gamejs.Surface;
    //...
});
```

变成这样。
