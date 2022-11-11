const app = Vue.createApp({
    data() {
        return {
            name: 'wann',
        }
    },
    template: `
    <div>{{name}}</div>
    <yy/>
    `,
})

app.component('yy', {
    data() {
        return {
            name: "yueyue",
        }
    },
    template: `<div>{{name}}</div>`,
})
const vm = app.mount('#app')
// console.log(vm);