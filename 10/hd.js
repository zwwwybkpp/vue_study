const app = Vue.createApp({
    data() {
        return {
            name:'wann',
        }
    },
})
const vm = app.mount('#app') 

setTimeout(() => {
    //vm.$data.name ="yueyue"
    vm.name ="yueyue"
}, 3000);