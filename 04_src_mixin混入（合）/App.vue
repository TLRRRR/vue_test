<template>
    <div>
        <StudentVue></StudentVue>
        <hr>
        <SchoolVue></SchoolVue>
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
}
</script>