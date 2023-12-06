<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">点我显示上个元素DOM</button>
        <SchoolVue ref="school"></SchoolVue>
    </div>
</template>

<script>
import SchoolVue from './components/School'

export default {
    name: 'App',
    components: {
        SchoolVue
    },
    data() {
        return {
            msg: "hello world"
        }
    },
    methods: {
        showDOM() {
            console.log("h1 DOM: ", this.$refs.title);
            console.log("School DOM: ", this.$refs.school);
        }
    }
}
</script>