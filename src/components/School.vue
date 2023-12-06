<template>
    <div class="school">
        <h2>学校名：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="sendSchoolName"></button>
    </div>
</template>

<script>
export default {
    name: 'SchoolVue',
    data() {
        return {
            name: "台东xiao学",
            address: "台东"
        }
    },
    methods: {
        sendSchoolName() {
            this.$emit('wsy', this.name);
        }
    }
}
</script>

<style scoped>
.school {
    background-color: rgb(168, 219, 41);
}
</style>