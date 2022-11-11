<template>
    <div @click="ev(1,$event)">
        {{ num }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1
        }
    },
    methods: {
        sum(){
            this.num++
        },
        ev(a,event){
            console.log(a);
            console.log(event);
        },
    },
}
</script>

<style lang="scss" scoped>

</style>