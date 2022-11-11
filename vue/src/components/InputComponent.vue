<template>
  <div>
    <input type="text" v-model="form.title" placeholder="请输入"/>
    <hr>
    <textarea v-model="form.content"></textarea>
    <hr>
    <input type="checkbox" v-model="form.isPost">发布
    <hr>
    <input type="checkbox" v-model="form.lessons" value="php">php
    <input type="checkbox" v-model="form.lessons" value="Linux">Linux
    <input type="checkbox" v-model="form.lessons" value="next.js">next.js
    <hr>
    <input type="radio" v-model="form.sex" :value="1">男
    <input type="radio" v-model="form.sex" :value="2">女
    <hr>
    <select v-model="form.city">
      <option value>请选择城市</option>
      <option value="beijing">北京</option>
      <option value="wuhan">武汉</option>
    </select>
    <hr>
    <!-- {{form}} -->
    <hr>
    <input type="text" v-model.lazy="wa">{{ wa }}
    <hr>
    <input v-model.number="num" type="text" />
    {{num+100}}
    <input v-model.trim="title" type="text" />
  </div>
</template>

<script>
const form = {title: '', content: 'adadasda', isPost: false, lessons: [], sex: '', city: ''}
export default {
  data() {
    return {
      form,
      wa: 'wahaha',
      num:1,
      title:"wann",
    }
  },
  watch: {
    wa(n) {
      console.log(n);
    },
    title(n){
      console.log(n.length);
    }
    }
}
</script>

<style lang="scss" scoped>

</style>