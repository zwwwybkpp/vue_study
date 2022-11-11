<template>
    <label >
    <div>{{title}}</div>
    <textarea :rows="rows" v-model="content" ></textarea>
    </label>
</template>

<script>
    export default {
        props:{ 
            title:String,
            modelValue:String,
            rows:{
                type:Number,
                default:3
            }
        },
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
    div,textarea{
       
        color: #666;
    }
    div{
        font-size: 16px;
        width: 100px;
    }
    textarea{
        border:solid 2px #ddd;
        border-radius: 5px;
        outline: none;
        padding: 5px 10px;
        resize: none;
    }
}
</style>