<template>
    <div>
        <h2 @click="showName()">学校名：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
    </div>
</template>

<script>
// import { mixin } from '../mixin';
export default {
    name: 'SchoolVue',
    data() {
        return {
            name: "台东小学",
            address: "台东"
        }
    },
    // 局部引入
    // mixins: [mixin]
}
</script>