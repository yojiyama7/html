# css tutorial

## 構文

タグごとに設定
```css
h1 {
	color: #123456;
	font-size: 20px;
}
```

クラス(htmlファイルで設定する)内のタグだけに設定
```css
.footer-logo li {
	color: #fff;
}
```

特定の状態にだけ設定
```css
.login a :hover {
	color: #f6f
}
```

## ブロック要素、インライン要素

- ブロック要素
	- `width`, `height` 可能
	- `margin`, `padding` 可能
	- 縦に並ぶ
	- 親要素の幅と同じだけ広がる
	- 改行する

- インラインブロック要素
	- `width`, `height` 可能
	- `margin`, `padding` 可能
	- 横に並ぶ

- インライン要素
	- `width`, `height` 不可能
	- `margin`, `padding` 左右のみ可能
	- 横に並ぶ
	- 改行しない
