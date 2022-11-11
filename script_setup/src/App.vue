<template>
  <suspense>
    <template #default>
      <todo />
    </template>
    <template #fallback>Loading...</template>
  </suspense>
</template>

<script setup>
import Todo from "./views/Todo.vue";
</script>

<style lang="scss">
div {
  color: #fff;
}
</style>
