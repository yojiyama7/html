# vue tutorial

## vue 環境用意

`vue`を使用可能にする

どちらかを`<head></head>`に入力

```js
<!-- 開発バージョン、便利なコンソールの警告が含まれています -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 本番バージョン、サイズと速度のために最適化されています -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

自分の書いたソースコードを適応

`<body></body>`の一番下に入力(例では`index.js`)

```js
<script src="index.js"></script>
```

## new Vue()

Vueオブジェクトの作成

```js
var app = new Vue({
	propaty : value,
	propaty2: value2
})
```

## v-value

vーvalueの書き方(例では`<button></button>`)

```html
<button v-___:value></button>
```

### コンポーネント

あらかじめ定義されたオプションを持つvueインスタンス

```js
// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```