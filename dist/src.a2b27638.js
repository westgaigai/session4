// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
/**
 * const,let等の変数宣言
 *
 */
// var val1 = "var変数";
// console.log(val1);
// // 　varを上書きしてみる
// val1 = "varを上書きしてみる";
// console.log(val1);
// // var変数は再宣言可能
// var val1 = "varの再宣言";
// console.log(val1);
// let val2 = "let変数";
// console.log(val2);
// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);
// letは再宣言ができない。
// let val2 = "letを再宣言";
// const val3 = "const変数"
// console.log(val3)
// const変数は上書き不可
// val3 = "const上書き"
// constは再宣言も不可
// const val3 = "const再宣言"
// constでもオブジェクトの中身は変更できる。
// const val4 = {
//   name: "るみか",
//   age: "20"
// }
// val4.name = "ゆうと"
// val4.addres ="広島"
// console.log(val4)
// const val5 = ["dog", "cat"]
// val5[0] = "犬"
// val5.push("bird")
// console.log(val5)

/**
 * テンプレート文字列について
 */
// const name = "じゃけぇ";
// const age = 28;
// 出力として私の名前はじゃけぇです。年齢は２８歳です。と出力させる。
// 従来の方法 +で結合していた。。。。
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(msg1);
// 新しい方法
// const msg2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2)
// アロー関数について
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("test関数呼び出し"));
// // アロー関数
// const func2 = str2 => str2;
// //2つの引数を持つアロー関数
// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func2("testアロー関数"));
// console.log(func3(10, 20))

/**
 * 分割代入について
 */
// const myProfile = {
//   name: "じゃけい",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// //  console.log(message1);
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2)
// const myProfile = ["じゃけい", 20];
// // const message3 =`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`
// // console.log(message3);
// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name="ゲスト") =>{
//   return console.log(`こんにちは${name}さん。`)
// }
// sayHello();

/**
 * スプレット構文　...
 */
// 配列の展開？？
// const list1 = [1, 2]
// // console.log(list1)
// console.log(...list1);
// const sum = (num1, num2) => console.log(num1 + num2);
// sum(...list1)
//展開の反対でまとめることができる？？
// const list2 =[1, 2, 3, 4, 5]
// // 分割代入の受け取りをスプレット構文で受け取れる？？
// const [num1, num2, ...num3] = list2
// console.log(num1)
// console.log(num2)
// console.log(num3)
// リストの残りをスプレット構文に渡すことができる。
// 配列のコピーや結合
// const list3 = [10, 20];
// const list4 = [30, 40];
// mapやfirterを使った配列の処理
// const nameArray1 = ["田中", "山田", "ゆうと"];
// 従来はfor分で中身を取得していた
// listの中身の数ぶん回していた。
// for (let index = 0; index < nameArray1.length; index++) {
//   console.log(`${index + 1}番目は${nameArray1[index]}です。`);
// }
// MAPを使ってやるとこう
// const nameArray2 = nameArray1.map((name)=>{
//   return name;
// })
// console.log(nameArray2)
// mapで用を番号を取ろうとすると
// 1つ目の引数は要素、２つ目の引数はインデックスを返してくる。らしい
// nameArray1.map((name, index) => console.log(`${index}番目は${name}です`));
// filterについて
// ある条件に一致する要素を取得してくれる。
// const numberArray1 = [1, 2, 3, 4, 5, 6];
// const newNumberArray1 = numberArray1.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumberArray1)
// 実践的なMapの使い方
// const newNameArray = nameArray1.map((name) =>{
//   if (name ==="ゆうと"){
//     return name;
//   }
//   else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArray)

/**
 * 三項演算子について
 *
 */
// 基本構文　条件? trueの時実行する処理 : falseの時実行する処理
// const val1 = 1 > 0 ? true: false;
// console.log(val1)
// const num = 1300;
// // toLocalStringは４桁以上の数字に区切り位置をつけてくれるメソッド
// // 文字列の数字は対象外
// // typeofメソッドは変数の型をチェックしてくれるメソッド
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください"
// console.log(formattedNum)
// 三項演算子をreturnに使ってみる
// const checSum = (num1, num2) => {
//   return num1 +num2>100 ? "100を超えています":"100以下です"
// };
// console.log(checSum(50,40))

/**
 * 論理演算子の本当の意味を知ろう　|| && これらのこと
 */
// const flag1 = true;
// const flag2 = true;
// ||または
// if (flag1 || flag2) {
//   console.log("1か2がtrueです")
// }
// // ＆＆かつ
// if (flag1 && flag2) {
//   console.log("1も2もtrueです")
// }
// 実はこいつらまたはやかつという意味ではないらしい。。。
var num = true;
var fee = num || "金額未設定です"; // console.log(fee)

var num2 = null;
var fee2 = num2 && "何か設定されました";
console.log(fee2);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44965" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map