<template>
    <div>
        <!-- <div>{{obj.name}}</div> -->
        <div v-for="(a,index) in arr" :key="index">{{a}}</div>
    </div>
</template>

<script>
const obj = { name: 'wann' }
const arr =['Mysql','JavaScript']
export default {
    data() {
        return {
            obj,
            arr,
        }
    },
    mounted() {
         setTimeout(()=>{
            // this.obj.name="yy"
            this.arr.push('CSS')
         },3000)
    },
}
</script>

<style lang="scss" scoped>

</style>