const app = Vue.createApp({
    data() {
        return {
            name:'wann',
            value: "wa",
            arg: "id"
        }
    },
})
const vm = app.mount('#app')

setTimeout(() => {
    vm.name="ww"
    vm.arg="href"
    vm.value="https://baidu.com"
}, 3000);