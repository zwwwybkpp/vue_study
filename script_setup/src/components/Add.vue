<template>
  <div class="save clearfix">
    <div class="title">
      <label>标题</label>
      <input type="text" v-model="data.title" />
    </div>
    <div class="content">
      <label>内容</label>
      <textarea type="text" v-model="data.content" />
    </div>
    <div class="button">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({ title: null, content: null });
defineExpose({
  data,
});
</script>

<style lang="scss" scoped>
.save {
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 5px #ddd;
}

.title,
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  margin-top: 10px;
  height: 30px;
}

input {
  height: 30px;
}

.content {
  margin-top: 20px;
  height: 150px;
}

textarea {
  resize: none;
  height: 100%;
}

input,
textarea {
  width: 80%;
  color: rgb(0, 0, 0);
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  outline: none;

  &:focus {
    border: 2px solid rgb(44, 132, 233);
  }
}

label {
  color: #666;
  font-size: 20px;
  margin-right: 10px;
}

w-button {
  width: 50px;
}

.button {
  justify-content: center;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 60px 60px;
  column-gap: 100px;
}
</style>
