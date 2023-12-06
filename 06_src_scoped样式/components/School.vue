<template>
    <div class="demo">
        <h2>学校名：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'SchoolVue',
    data() {
        return {
            name: "台东xiao小学",
            address: "台东"
        }
    },
}
</script>

<style scoped>
.demo {
    background-color: rgb(168, 219, 41);
}
</style>