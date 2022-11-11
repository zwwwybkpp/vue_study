<script>
import Pay from "./components/Pay.vue";
import Weixin from "./components/Weixin.vue";
import Site from "./components/Site.vue"
import {computed} from 'vue';
import config from './config'
export default {
  components: {
    Pay,
    Weixin,
    Site,
  },
  provide() {
    return { 
      webname: computed(()=>this.teacher),
      config
    }
  },
  data() {
    return {
      teacher: 'wann',
      currentComponent: "weixin",
      components: [
        { title: "微信管理", name: "weixin" },
        { title: "网站信息", name: "site" },
        { title: "在线支付", name: "pay" },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <main>
    <div v-for="(component, index) of components" :key="index" @click="currentComponent = component.name"
      :class="{ active: component.name == currentComponent }">
      {{ component.title }}
    </div>
  </main>
  <hr />
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <!-- <input type="text" v-model="teacher">{{teacher}} -->
</template>

<style lang="scss" scoped>
main {
  display: flex;

  div {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-right: 20px;
    color: #666;
    cursor: pointer;
    user-select: none;
    transition: 0.5s;

    &.active {
      background-color: #229453;
      color: #fff;
    }
  }
}
</style>
