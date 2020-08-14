<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>v-for练习</title>
    <style>
      p {
        display: inline;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div>
        <label>时间：</label
        ><input type="text" placeholder="时间" v-model="newList.time" />
      </div>
      <div>
        <label>事件：</label
        ><input type="text" placeholder="事件" v-model="newList.thing" />
      </div>
      <button @click="addNewList">添加计划</button>

      <div>今日计划：</div>
      <div v-for="(list, key) in lists">
        <p>{{ list.time }}</p>
        <p>{{ list.thing }}</p>
        <button @click="deleteList(key)">删除</button>
      </div>
    </div>
    <script src="js/vue.min.js"></script>
    <script>
      let vm = new Vue({
        el: "#app",
        data: {
          lists: [{ time: "8点", thing: "起床" }],
          newList: { time: "", thing: "" },
        },
        methods: {
          addNewList: function () {
            if (this.newList.time === "") {
              alert("请输入时间");
              return;
            }

            if (this.newList.thing === "") {
              alert("请输入事件");
              return;
            }

            this.lists.unshift(this.newList);
            this.newList = { time: "", thing: "" };
          },
          deleteList: function (key) {
            console.log(key);
            this.lists.splice(key, 1);
          },
        },
      });
    </script>
  </body>
</html>
