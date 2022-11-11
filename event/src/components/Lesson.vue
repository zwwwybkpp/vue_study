<template>
  <div>
    <img :src="lesson.preview" alt="" />
    <h3 @dblclick="inputShow = true">
      <input
        v-if="inputShow"
        type="text"
        :value="lesson.title"
        @input="changeTitle"
        @blur="inputShow = false"
        @keyup.enter="inputShow = false"
      />
      <strong v-else>{{ lesson.title }}</strong>
    </h3>
    <h3 @dblclick="inputPriceShow = true">
      <input
        v-if="inputPriceShow"
        type="text"
        v-model="lesson.price"
        @blur="inputPriceShow = false"
        @keyup.enter="inputPriceShow = false"
      />
      <strong v-else>{{ lesson.price }}</strong>
    </h3>
    <span @click="del()">X</span>
  </div>
</template>

<script>
export default {
  // inheritAttrs:false,
  props: ["lesson", "title", "titleModifiers", "price"],
  data() {
    return {
      inputShow: false,
      inputPriceShow: false,
    };
  },
  created() {
    console.log(this.titleModifiers);
  },
  emits: {
    //自定义事件属性
    "update:price": null,
    "update:title": null,
    del(v) {
      if (/^\d+$/.test(v)) {
        return true;
      }
      throw new Error("del emit 需要数值参数");
    },
  },
  methods: {
    changeTitle(event) {
      let value = event.target.value;
      if (this.titleModifiers.toupper) {
        value = value.toUpperCase();
      }
      const substr = Object.keys(this.titleModifiers).find((m) => /^substr_/.test(m));
      if (substr) {
        let info = substr.split("_");
        value = value.substr(0, info[1]);
      }
      this.$emit("update:title", value);
    },
    del() {
      if (confirm("确定删除吗")) this.$emit("del", this.lesson.id);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  border: solid 1px #ddd;
  text-align: center;
  transition: 1s;

  &:hover {
    > span {
      opacity: 1;
    }

    box-shadow: 0 0 20px #aaa;
  }

  h3 {
    padding: 0 0 20px 0;
    margin: 0;
    font-size: 16px;
  }

  img {
    width: 100%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: 8px;
    border: none;
    color: #000;
    font-size: 12px;
    background-color: #ddd;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    cursor: pointer;
    opacity: 0;
    transition: 0.5s;

    &:hover {
      background-color: #aaa;
    }
  }
}
</style>
