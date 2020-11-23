const vm = new Vue({
  el: "#app",
  data: {
    todoList: [
      {
        id: "1",
        comment: "◝(⑅•ᴗ•⑅)◜ ルチル俺の嫁。..°♡",
        completed: false,
      },
    ],
    option: [
      { value: -1, label: "すべて" },
      { value: 0, label: "作業中" },
      { value: 1, label: "完了" },
    ],
    newtodo: "",
    current: -1,
    catImg:
      "https://stickershop.line-scdn.net/sticonshop/v1/sticon/5c023937031a6716d646c169/iPhone/012.png",
    // ★ 編輯留言時，用來暫存的資料
    getTodo: "",
    getComment: "",
  },
  methods: {
    addTodo: function () {
      // ★ .trim() 刪除空白鍵
      let newTodo = this.newtodo.trim();
      // ★ 可以將現在的時間轉為正整數 Math.floor
      let timeToID = Math.floor(Date.now());
      console.log(newTodo, timeToID);
      // ★ 沒輸入內容 他就不會送出內容
      if (!newTodo) {
        return;
      }
      this.todoList.push({
        id: timeToID,
        comment: newTodo,
        completed: false,
      });
      this.newtodo = "";
    },
    // ★ 削除するにゃ　ᐠ(  ᐢ ᵕ ᐢ )ᐟ
    removeTodo: function (key) {
      this.todoList.splice(key, 1);
    },
    editTodo: function (i) {
      // ★ コメントダブルクリックすると、そのobjゲットできるのじゃ！
      console.log(i);
      this.getTodo = i;
      this.getComment = i.comment;
    },
    cancelEdit: function () {
      this.getTodo = {};
    },
    doneEdit: function (i) {
      i.comment = this.getComment;
      this.getComment = "";
      this.getTodo = {};
    },
  },
  computed: {
    filteredTodos: function () {
      if (this.current == -1) {
        return this.todoList;
      } else if (this.current == 0) {
        //★ 切換到作業中，篩選狀態是false 的項目，塞到新todoList並回傳
        let newTodos = [];
        this.todoList.forEach((i) => {
          if (i.completed == false) {
            newTodos.push(i);
          }
        });
        return newTodos;
      } else if (this.current == 1) {
        //★ コピペします。
        let newTodos = [];
        this.todoList.forEach((i) => {
          if (i.completed == true) {
            newTodos.push(i);
          }
        });
        return newTodos;
      }
    },
  },
});
TweenMax.to("#cat", 1, { x: "5px", repeat: -1, yoyo: true });
