// 宣言的レンダリング
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})

var app2 = new Vue ({
	el: "#app-2",
	data: {
		message: "You loaded this page on " + new Date().toLocaleString()
	}
})

// 条件分岐とループ
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})

// ユーザー入力の制御
var app5 = new Vue({
	el: '#app-5',
	data: {
	  	message: 'Hello Vue.js!'
	},
	methods: {
	  	reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// コンポーネントによる構成
// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})