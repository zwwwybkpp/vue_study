<script>
import Card from "./components/Card.vue";
import Lesson from "./components/Lesson.vue";
import lessons from '../data/db'
export default {
  components: {
    Card,
    Lesson,
  },
  data() {
    return {
      lessons,
    }
  },
  methods: {
    del(id){
      console.log(id);
      const index = this.lessons.findIndex(v=>v.id==id)
      this.lessons.splice(index,1);
      
    }
  },
};
</script>

<template>
  
  <!-- <card>
  <template #header><strong>具名插槽</strong></template>
  <template #main>有时在一个组件中包含多个插槽出口是很有用的。举例来说，在一个组件中，有如下模板：</template>
  <template v-slot:footer>wann</template>
  </card> -->
  <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson">
    <button @click='del(lesson.id)'>删除</button>
  </lesson>
</template>

<style scoped></style>
