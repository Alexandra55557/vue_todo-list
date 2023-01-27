<template>
	 <div id="app">
        <h1>Список заметок</h1>
        <hr>

		<router-view />
    </div>
</template>

<script>

import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
    name: 'app',
    data() {
        return {
            todos: [
                {id: 1, title: 'Купить хлеб', completed: false},
                {id: 2, title: 'Купить масло', completed: false},
                {id: 3, title: 'Купить чипсы', completed: false},
            ]
        }
    },
    mounted() {
        // fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.todos = json
        //     })
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(todo) {
            this.todos.push(todo)
        }
    },
    components: {
    TodoList, AddTodo
  }
}
</script>

<style>
#app {
  max-width: 1100px;
  display: block;
  margin: 0 auto 40px;
  background-color: rgb(248, 219, 186);
  padding: 30px;
  border-radius: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

</style>
