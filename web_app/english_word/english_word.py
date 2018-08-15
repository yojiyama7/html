# Flask などの必要なライブラリをインポートする
from flask import Flask, render_template, request, redirect, url_for
import numpy as np

# 自身の名称を app という名前でインスタンス化する
app = Flask(__name__)

# ここからウェブアプリケーション用のルーティングを記述
# index にアクセスしたときの処理
@app.route('/')
def index():
    with open("words.txt", "r", encoding="utf-8") as f:
        lines = f.read().split("\n")
    return render_template('index.html', lines=lines)

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/packs")
def packs():
    return render_template("packs.html")

if __name__ == '__main__':
    app.debug = True # デバッグモード有効化
    app.run(host='0.0.0.0') # どこからでもアクセス可能に