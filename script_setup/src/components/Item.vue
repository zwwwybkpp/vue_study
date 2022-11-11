<template>
  <section>
    <div>
      {{ todo.id }}
      <header>{{ todo.title }}</header>
      <main>{{ todo.content }}</main>
      <button @click="del(todo.id)">删除</button>
    </div>
  </section>
</template>

<script setup>
import useTodo from "../composables/useTodo";
const { del } = useTodo();
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  position: relative;
  border: solid 1px #ddd;
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;

  header {
    color: #3b3b3b;
    background-color: #f3f3f3;
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  main {
    padding: 10px;
  }

  button {
    position: absolute;
    right: 5px;
    top: 7px;
    padding: 5px;
    border: none;
    background-color: rgb(221, 221, 221);
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
