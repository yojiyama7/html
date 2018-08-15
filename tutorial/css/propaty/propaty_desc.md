# css desc

基本的なことは[ここ](http://www.htmq.com/style/font-family.shtml) を参照

`/* css comment */`
- コメント

## プロパティ

### 色

`color`
- 文字色を指定

`opacity`
- 要素の透明度(0.0~1.0)を指定

### 背景

`background-color`
- 背景色を指定

`background-image`
- 背景画像を指定
- `url()`を値にする

`background-size`
- 背景画像のサイズを指定
- `cover`を値にすることで画面のサイズに合わせて表示

### フォント

`font-size`
- 文字の大きさを指定

`font-family`
- 文字のフォントの種類を指定
- [font-familyの書き方まとめ：CSSでフォント種類を指定しよう](https://saruwakakun.com/html-css/basic/font-family-how-to)

### テキスト

`text-align`
- 配置の揃え方向を設定
- インラインオブジェクト、インラインブロックオブジェクトに対して設定
```css
{
/* 左揃え:left 中央揃え:center 右揃え:right */
text-align: center;
}
```

`letter-spacing`
- 文字の間の幅を指定

### 幅、高さ

`height`
- 高さ(縦)を指定

`width`
- 長さ(横)を指定

### マージン、パディング

`margin`
- マージンを設定
	- 背景の端 と 隣のものの端 の間
	- 横マージンに`auto`を指定すると中央寄せになる
		- `width`を必ず指定

`margin-top`

`margin-bottom`

`margin-left`

`margin-right`

`padding`
- パディングを指定
	- コンテンツの周りの端 と 背景の端 の間

`padding-top`
- 上パディングを指定

`padding-bottom`
- 下パディングを指定
```css
/* 縦リストの要素などに指定 */
li {
padding-bottom: 20px
}
```

`padding-left`
- 左パディングを指定する

`padding-right`
- 右のパディングを指定する

### ボーダー

`border`
- ボーダーのスタイル、太さ、色を指定する

`border-bottom`
- 下ボーダーの太さ、色を指定する
- `border`と同じようにそれぞれを指定することもできる

`border-radius`
- ボーダーの角を丸くする

### リスト

`list-style`
- リストのマーク(点や数字)に関して指定
```css
/* 点をなくす: none */
{ list-style: none; }
```

### 表示、配置

`display`
- 要素の種類を指定
	- `block`
	- `inline`
	- `inline-block`

`float`
- 要素を横並びにする
- 左右どちらに寄せるか指定
```css
/* 左寄せ: left, 右寄せ: right*/
{ float: left; }
```