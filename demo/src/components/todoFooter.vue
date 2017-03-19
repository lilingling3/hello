<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone"/>
    </label>
    <span>
          <span>已完成{{doneCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" @click="deleteDoneItem" v-show="doneCount>0">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: ['todos','updateItem','deleteDone'],
    methods:{
      deleteDoneItem (){
        this.deleteDone()
      }
    },
    computed: {
      doneCount () {
        return this.todos.filter(todo => todo.isDone).length
      },
      totalCount () {
        return this.todos.length
      },
      isAllDone:{
        /*双向数据绑定*/
        get () {
          //没有一个未被选中的
          return this.todos.filter(todo => !todo.isDone).length === 0 && this.todos.length >0
        },
        set (value) {
          //改变父组件  父组件传方法
          this.updateItem(value)
        }

        }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
