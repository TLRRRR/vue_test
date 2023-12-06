<template>
    <div>
        <StudentVue name="张三" sex="男" :age="18"></StudentVue>
        <hr>
        <StudentVue name="李四" sex="女" :age="18"></StudentVue>
        <hr>
        <StudentVue name="王五" sex="男" :age="19"></StudentVue>
    </div>
</template>

<script>
import StudentVue from './components/Student'

export default {
    name: 'App',
    components: {
        StudentVue
    },
}
</script>