<template>
    <label >
    <div>{{title}}</div>
    <input type="text" v-model="content" >
    </label>
</template>

<script>
    export default {
        props:['title','modelValue'],
        emits:['update:modelValue'],
        // inject:['webname'],
        data() {
            return {
                content: this.modelValue 
            }
        },
        watch: {
            content(v){
                this.$emit('update:modelValue',v)
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
label{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    div,input{
       
        color: #666;
    }
    div{
        font-size: 16px;
        width: 100px;
    }
    input{
        border:solid 2px #ddd;
        border-radius: 5px;
        outline: none;
        padding: 5px 10px;
    }
}
</style>