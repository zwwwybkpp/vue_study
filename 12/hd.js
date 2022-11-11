const app = Vue.createApp({
    data() {
        return {
            num: 0,
            error: '',
        }
    },
    methods: {
        add() {
            this.error = '';
            if (this.num >= 10) {
                this.error = "num不能大于10";
            } else {
                this.num++;
            }
        },
        desc() {
            this.error = '';
            if (this.num <= 0) {
                this.error = "num不能小于0";
            } else {
                this.num--;
            }
        }
    },
})
const vm = app.mount('#app')