<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll" />
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos', 'checkAllTodo', 'clearAllTodo'],
    computed: {
        // 已完成
        doneTotal() {
            return this.todos.reduce((pre, curr) => pre + (curr.done ? 1 : 0), 0);

            // let i = 0;
            // this.todos.forEach(todo => {
            //     if (todo.done) i++
            // });
            // return i;
        },
        // 全部
        total() {
            return this.todos.length;
        },
        // 全选/全不选
        isAll: {
            get() {
                return this.doneTotal === this.total && this.todos > 0;
            },
            set(value) {
                this.checkAllTodo(value);
            }
        }
    },
    methods: {
        // 全选/全不选
        checkAll(e) {
            console.log("111: ", e.target.checked);
            this.checkAllTodo(e.target.checked);
        },
        clearAll() {
            this.clearAllTodo();
        }
    }
}
</script>

<style>
/*footer*/
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