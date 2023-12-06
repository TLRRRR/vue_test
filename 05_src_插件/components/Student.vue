<template>
    <div>
        <h2>姓名：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
        <input type="text" v-fbind:value="name">
        <button @click="test">hello</button>
    </div>
</template>

<script>
export default {
    name: 'StudentVue',
    data() {
        return {
            name: "张三",
            sex: "男"
        }
    },
    methods: {
        test() {
            this.hello()
        }
    }
}
</script>