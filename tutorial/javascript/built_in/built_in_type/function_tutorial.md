### function (関数定義)

- 一定の機能をまとめて関数にする
- 関数内で定義された変数は関数外から使えない

#### 作成

```javascript
const hello = function() {
    console.log("hello")
    console.log("world")
}
```

```javascript
// アロー関数
const hello = () => {
    console.log("hello")
    console.log("world")
}
```

```javascript
// 引数あり
const hello = (message, name) => {
    console.log(message)
    console.log(name)
}
```

```javascript
// returnあり
const add = (num1, num2) => {
    return num1 + num2
    // return以降は実行されない
    console.log("計算しました")
}
```

#### 処理

- 定義した時点では何も起きない
- `関数名(引数)`とした時点で関数の内容が実行される
- return以降は実行されない