<script setup>
import "animate.css";
import Item from "../components/Item.vue";
import Add from "../components/Add.vue";
import useTodo from "../composables/useTodo";
import WButton from "../components/Button.vue";
import Sort from "../components/Sort.vue";
import { ref } from "vue";
import AnimateList from "../components/AnimateList.vue";
const { todos, load } = useTodo();
const show = ref(false);
const addComponent = ref();
load();
const test = () => {
  show.value = !show.value;
};
const onsubmit = () => {
  const data = addComponent.value.data;
  useTodo().add(data);
  data.title = "";
  data.content = "";
  show.value = false;
};
</script>

<template>
  <button @click="test">展开</button>
  <sort></sort>
  <transition
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut"
  >
    <div v-if="show" class="add">
      <add ref="addComponent">
        <w-button content="取消" @click="show = false"></w-button>
        <w-button content="提交" @click="onsubmit"></w-button>
      </add>
    </div>
  </transition>
  <div class="todo" :class="show">
    <animate-list>
      <item
        v-for="(todo, index) of todos.news"
        class="item"
        :key="todo.id"
        :todo="todo"
        :data-index="index"
      >
      </item>
    </animate-list>
  </div>
</template>

<style lang="scss" scoped>
.add {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
}

div > .todo {
  position: relative;

  .item {
    width: 100%;
  }
}
</style>
