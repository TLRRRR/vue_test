<template>
    <div>
        <h2>学校名：{{ name | mySlice}}</h2>
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