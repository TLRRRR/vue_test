<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
        <h2>年龄：{{ myAge }}</h2>
        <button @click="addAge">点击年龄+1</button>
    </div>
</template>

<script>
export default {
    name: 'StudentVue',
    data() {
        return {
            msg: "hello world!",
            myAge: this.age
        }
    },
    methods: {
        addAge() {
            this.myAge++
        }
    },
    // 简易写法，什么都不限制
    props: ["name", "sex", "age"]
    // 进阶写法，限制类型
    // props:{
    //     name: String,
    //     sex: String,
    //     age: Number
    // }
    // 高级写法，限制类型、限制必要性、设置默认值
    // props: {
    //     name: {
    //         name: String,
    //         required: true
    //     },
    //     sex: {
    //         type: String,
    //         required: true
    //     },
    //     age: {
    //         type: Number,
    //         default: 99
    //     }
    // }
}
</script>