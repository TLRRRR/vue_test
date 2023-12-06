<template>
    <div class="app">
        <h1>{{ hello }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <StudentVue :getStudentName="getStudentName"></StudentVue>
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <!-- <SchoolVue @wsy="getSchoolName"></SchoolVue> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <SchoolVue ref="student"></SchoolVue>
    </div>
</template>

<script>
import StudentVue from './components/Student';
import SchoolVue from './components/School';

export default {
    name: 'App',
    components: {
        StudentVue, SchoolVue
    },
    data() {
        return {
            hello: '你好',
        }
    },
    methods: {
        getStudentName(name) {
            console.log("给app学生姓名：", name);
        },
        getSchoolName(name) {
            console.log("给app学校名称：", name);
        }
    },
    mounted() {
        this.$refs.student.$on('wsy', this.getSchoolName);
    }
}
</script>

<style>
.app {
    background-color: gray;
}
</style>