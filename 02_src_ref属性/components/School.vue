<template>
    <div>
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'SchoolVue',
    data() {
        return {
            name: '台东小学',
            address: '台东'
        }
    }
}
</script>