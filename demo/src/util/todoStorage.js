const TODOSKEY = 'todos'
export default {
    get(){
      return JSON.parse(localStorage.getItem(TODOSKEY) || '[]')
    },
    set(todos){
      localStorage.setItem(TODOSKEY,JSON.stringify(todos))
    },
    remove(){
      localStorage.removeItem(TODOSKEY)
    }

}
