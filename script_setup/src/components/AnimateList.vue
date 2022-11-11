<script setup>
import gsap from "gsap";

const props = defineProps({
  duration: {
    default: 0.6,
  },
  delay: {
    default: 0.2,
  },
  tag: {
    default: null,
  },
});
const beforeEnter = (el, done) => {
  gsap.set(el, {
    opacity: 0,
  });
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<template>
  <transition-group :tag="tag" name="todo" @before-enter="beforeEnter" @enter="enter">
    <slot />
  </transition-group>
</template>

<style lang="scss" scoped>
.todo-leave-active {
  transition: 1s ease;
  position: absolute;
}

.todo-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

.todo-move {
  transition: all 1s ease;
}
</style>
