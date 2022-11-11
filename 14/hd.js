const app = Vue.createApp({
    data() {
        return {
            num: 1,
            error: '',
        }
    },
    watch:{
        num(newValue,oldValue){
            console.log(newValue,oldValue);
            this.error=(newValue==0)?'不能小于0':(newValue==10)?'不能大于10':'';
        }
        
    },
    methods: {
        add() {
            if (this.num < 10) this.num++;
        },
        desc() {
            if (this.num > 0) this.num--;
        }
    },
})
const vm = app.mount('#app')