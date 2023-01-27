<template>
	 <div>
        <h2>Мои заметки</h2>
       
        <router-link style="text-decoration: none !important; color: #D77206;" to="/">Домой</router-link>
        
        <hr>
        <AddTodo 
            @add-todo="addTodo"
        />
        <select v-model="filter">
            <option value="all">Все заметки</option>
            <option value="completed">Завершено</option>
            <option value="not-completed">Не завершено</option>
        </select>
        <hr>
        <Loader v-if="loading" />
        <TodoList
            v-if="!loading"
            v-bind:todos="filteredTodo()"
            @remove-todo="removeTodo"
        />
        <p v-if="loading">Нет заметок!</p>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
export default {
    name: 'app',
    data() {
        return {
            todos: [],
            loading: true,
            filter: 'all'
        }
    },

    mounted() {
        this.loadTodo();
    },

    watch: {

        todos: function () {
            if (!this.todos.length) {
                this.loading = true;
            } else {
                this.loading = false;
            }
        },

        filter: function () {
            this.filteredTodo();
            console.log('filteredTodo: ', this.filteredTodo());
        }
    },

    computed: {
        
    },

    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },

        addTodo(todo) {
            console.log(this.todos);
            this.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(this.todos));
            this.loading = false;
        },

        loadTodo() {
            let todo = JSON.parse(localStorage.getItem('todos'));
            if (todo != undefined) {
                this.todos = todo;
            }
        },

        filteredTodo() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            if(this.filter === 'all') {
                return this.todos;
            }

            if(this.filter === 'completed') {
                return this.todos.filter(t => t.completed);
            }

            if(this.filter === 'not-completed') {
                return this.todos.filter(t => !t.completed);
            }
            
        }
    },
    components: {
    TodoList, AddTodo, Loader
  }
}
</script>

<style>
select { 
    font-size: 18px;
    text-decoration: none;
    padding: 2px 3px;
    color: white;
    border-style: solid none;
    border-color: #FDBE33 #000 #D77206;
    border-radius: 6px;
    background: linear-gradient(#F3AE0F, #E38916) #E38916;
    transition: 0.2s;
    margin-left: 40px;
}

h2 {
    font-style: italic;
}

</style>