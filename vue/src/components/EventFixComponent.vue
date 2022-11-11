<template>
    <div @scroll.passive="d1" style="border: 5px solid green;height: 200px;overflow-y:auto;">
        <div @click="d2" style="background-color:red;height: 1000px;">d2</div>    
    </div>
    <a href="https://www.baidu.com" @click.passive="link">百度</a>
</template>

<script>
    export default {
        methods:{
            d1(){
                console.log('d1');
            },
            d2(){
                console.log('d2');
            },
            link(){
                console.log("link...");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>