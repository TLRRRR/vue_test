<template>
    <div>
        <h2 @click="showName()">姓名：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
    </div>
</template>

<script>
// import { mixin } from '../mixin';
export default {
    name: 'StudentVue',
    data() {
        return {
            name: "张三",
            sex: "男"
        }
    },
    // 局部引入
    // mixins: [mixin]
}
</script>