export default {
    install(Vue) {
        console.log("plugins...")
        // 全局过滤器
        Vue.filter('mySlice', function (val) {
            return val.slice(0, 4)
        })
        // 自定义指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        })
        // 混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        // Vue原型上添加一个方法
        Vue.prototype.hello = () => { alert('hello') }

    }
}