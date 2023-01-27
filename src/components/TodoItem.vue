<template>
    <li>
        <span v-bind:class="{'done': todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{index + 1}}</strong>
            {{uppercase(todo.title)}}
            <!-- <div class="text">
                <button>Раскрыть</button>
                <p v-if="open"><input name="name" maxlength="25" size="40"></p>
            </div> -->
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        uppercase(value) {
            return value.toUpperCase();
        }
    },
    name: 'open',
    data() {
        return {
            open: false
        }
    }
}

</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background: linear-gradient(#F3AE0F, #E38916) #E38916;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>
