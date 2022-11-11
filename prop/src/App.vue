<template>
  <div class="main">
    <template v-for="bti in bt">
      <ButtonVue v-bind="bti" style="margin-right: 10px;"/>
    </template>
    <hr>
    <ButtonVue :content="btContent" type="success" @click="test"/>
    <hr>
    <button @click="btContent='wann'">父组件</button>{{btContent}}
  </div>
</template>

<script>
import ButtonVue from './components/Button.vue';
export default {
  data() {
    return {
      btContent:'反馈',
      bt: [
        {
          tip:'@',
          type: 'primary',
          content: '保存'
        },
        {
          type: 'success',
          content: '成功'
        },
        {
          type: 'info',
          content: '提示'
        },
        {
          type: 'danger',
          content: '删除'
        },
        {
          content:'编辑',
          disabled:true
        }
      ]
    }
  },
  components: {
    ButtonVue,
  },
  methods:{
test(){
  console.log(1);
}
  }
}
</script>

<style lang="scss" scoped>
.mian {
  width: 1000px;
  display: flex;
  justify-content: space-between;
}

ButtonVue {
  margin-right: 10px;
}
</style>