<template>
  <ul class="todo-main">
    <li :style="{background:bgColor}" @mouseenter="changBgColor(true)" @mouseleave="changBgColor(false)">
      <label>
        <input type="checkbox" v-model="todo.isDone"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteHandle">删除</button>
      <button class="btn btn-danger" v-show="isShow" @click="deleteHandle2">删除2</button>
      <button class="btn btn-danger" v-show="isShow" @click="deleteHandle3">删除3</button>
      <button class="btn btn-danger" v-show="isShow" @click="deleteHandle4">删除4</button>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['todo','deleteItem'],
    data () {
      return {
        bgColor :'#fff',
        isShow:false
      }
    },
    methods:{
      changBgColor(isChange){
        if(isChange){
          this.bgColor = '#eee'
        }else {
          this.bgColor = '#fff'
        }
        this.isShow = isChange
      },
      deleteHandle (){
        //直接收集
        const {deleteItem,todo} = this
        if(confirm(`确定删除${todo.title}吗`)){
          deleteItem(todo)
        }
      },
      deleteHandle2 () {
        // 触发事件
        this.$dispatch('deleteTodo',this.todo)
      },
      deleteHandle3 () {
        // 触发事件

        this.$dispatch('deleteTodo3',this.todo)
      },
      deleteHandle4 () {
        console.log(1);
        // 触发事件
        this.$dispatch('delete',this.todo)
      }

    }


  }
</script>

<style>


  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
