### class (設計図)

- オブジェクトの量産のための枠を作るときに使かう

#### 構文

```javascript
class Animal {
    constructor(name, age) {
        // プロパティ
        this.name = name
        this.age = age
    }
    
    // メソッド
    greet() {
    console.log("こんにちは");
    }
    info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
```

```javascript
const animal = new Animal("ポチ", 7);
```