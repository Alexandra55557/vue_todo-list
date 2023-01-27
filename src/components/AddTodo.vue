<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Внести</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newTodo = {
                    id: new Date(),
                    title: this.title,
                    completed: false
                }

                this.$emit('add-todo', newTodo)
                this.title = ''
            }
        }
    }
}
</script>


<style scoped>
    form {
        display: inline-block;  
    }

    input {
        width: 700px;
        font-size: 18px;
        border-radius: 6px;
        border-color: #FDBE33 #000 #D77206;
    }

    button {
        font-size: 18px;
        text-decoration: none;
        padding: 2px 3px;
        color: white;
        border-style: solid none;
        border-color: #FDBE33 #000 #D77206;
        border-radius: 6px;
        background: linear-gradient(#F3AE0F, #E38916) #E38916;
        transition: 0.2s;
        margin-left: 5px;
    }
</style>