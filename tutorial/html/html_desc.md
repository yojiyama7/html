# html desc

基本的なことは[ここ](http://www.htmq.com/html5/) を参照

## head

本文ではない部分を記述するものが多い

`<title></title>`
- ページタイトル
- ブラウザのタブ部分に表示される
```html
<title>Pagetitle</title>
```

`<link>`
- cssなどの読み込み
```html
<link rel="stylesheet" href="stylesheet.css">
```

`<meta>`
- 文字コードなどを設定
```html
<meta charset="utf-8">
```

## body

本文の内容を記述するものが多い

`<!-- comment -->`
- ブラウザでは表示されない
```html
<!-- comment -->
```

### セクション

`<h1></h1>`
- 見出し1
```html
<h1>Heading</h1>
```
<h1>Heading</h1>

`<h2></h2>`
- 見出し2
```html
<h2>Heading</h2>
```
<h2>Heading</h2>

`<h3></h3>`
- 見出し3
```html
<h3>Heading</h3>
```
<h3>Heading</h3>

`<h4></h4>`
- 見出し4
```html
<h4>Heading</h4>
```
<h4>Heading</h4>

`<h5></h5>`
- 見出し5
```html
<h5>Heading</h5>
```
<h5>Heading</h5>

`<h6></h6>`
- 見出し6
```html
<h6>Heading</h6>
```
<h6>Heading</h6>

### コンテンツの分類

`<p></p>`
- 段落(Paragraph)として一つにまとめる
- 改行する
```html
<p>Paragraph</p>
```
<p>Paragraph</p>

`<ol></ol>`
- 順序ありリスト
- 内側に`li`タグを持つ
- 先頭に番号がつく
```html
<ol>
  <li>html</li>
  <li>php</li>
  <li>python</li>
</ol>
```
<ol>
  <li>html</li>
  <li>php</li>
  <li>python</li>
</ol>

`<ul></ul>`
- 順序なしリスト
- 内側に`li`タグを持つ
- 先頭に黒点がつく
```html
<ul>
  <li>html</li>
  <li>php</li>
  <li>python</li>
</ul>
```
<ul>
  <li>html</li>
  <li>php</li>
  <li>python</li>
</ul>

`<li></li>`
- リストの中に入る要素
```html
<ul>
  <li>html</li>
  <li>php</li>
  <li>python</li>
</ul>
```
<ul>
  <li>html</li>
  <li>php</li>
  <li>python</li>
</ul>

`<div></div>`
- 塊として一つにまとめる
- cssのために使用することが多い
```html
<div>
  <p>text1</p>
  <p>text2</p>
</div>
<div>
  <p>text3</p>
</div>
```
<div>
  <p>text1</p>
  <p>text2</p>
</div>
<div>
  <p>text3</p>
</div>

### テキストの意味

`<a></a>`
- クリックでURL先へ移動するように紐づける
```html
<a href="https://www.google.co.jp/">Link</a>
```
<a href="https://www.google.co.jp/">Link</a>

`span`
- 範囲を定義
```html
<p>Text text<span>.</span></p>
```
<p>Text text<span>.</span></p>

### コンテンツの埋め込み

`<img>`
- 画像を表示する
```html
<img src="http://bit.ly/2MBvNVe">
```
<img src="http://bit.ly/2MBvNVe">

### フォーム

`<input>`
- 1行の入力欄を表示
```html
<input type="submit" value="ボタン">
```
<input type="submit" value="ボタン">

`<textarea></textarea>`
- 複数行の入力欄を表示
```html
<textarea></textarea>
```