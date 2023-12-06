<template>
    <div class="student">
        <h2>姓名：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
        <button @click="sendStudentName"></button>
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
    props: ['getStudentName'],
    methods: {
        sendStudentName() {
            this.getStudentName(this.name);
        }
    }
}
</script>

<style scoped>
.student {
    background-color: skyblue;
}
</style>