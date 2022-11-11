<template>
  <div class="lesson">
    <Lesson
      v-for="item in db"
      :key="item.id"
      :lesson="item"
      @del="show"
      v-model:title.toupper.substr_5="item.title"
      v-model:price="item.price"
    />
  </div>
  <!-- <WaInput :value="title" @update:value="title = $event" />
  <WaInput v-model:value="title" />
  <hr /> -->
</template>
<script>
import Lesson from "./components/Lesson.vue";
import db from "../data/db";
import WaInput from "./components/WaInput.vue";
export default {
  components: {
    Lesson,
    WaInput,
  },
  data() {
    return {
      db,
      title: "wann",
    };
  },
  methods: {
    show(id) {
      const index = this.db.findIndex((i) => i.id == id);
      this.db.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}
</style>
