Vue.createApp({
    data() {
        return {
            title: "Hello World",
        }
    },
   template:/*html*/ 
    `
    <h1>{{title}}</h1>
    <div>wann</div>
    `
}).mount('#app')