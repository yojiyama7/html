# vue desc

## Vue propatys

`el`
- 適応するタグのidを指定
	- `"#id名"`で指定する

`data`
- htmlから参照できるプロパティを指定
	- `seen`: bool
		- `true`で表示
		- `false`で非表示

## v-value

`v-bind`
- タグの属性に、`data`内の値を指定
	- タグの属性を指定

`v-on`
- 特定の入力に対するメソッドを指定(例ではクリックに対して`reverseMessage`メソッドを実行する)
```html
<button v-on:click="reverseMessage">Reverse Message</button>
```

`v-if`
- `data`内の値の真偽で、要素の有無を決定するように指定

`v-for`
- `data`内の配列をfor文的に処理できる

## コンポーネント

`props`

`template`

```html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```