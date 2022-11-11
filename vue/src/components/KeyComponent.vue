<template>
    <div>
        键盘事件
    </div>
    <input type="text" :value=text @keyup.enter="key" />
    <div @click.ctrl.exact="wa" style="background-color:red;width:100px;height:100px"></div>
</template>1

<script>
export default {

    data(){
        return {
            text:'',
        }
    },
    methods: {
        key(event) {
            console.log(this.text);
        },
        wa(){
            console.log('wann');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>