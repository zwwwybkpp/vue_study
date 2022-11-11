<template>
    <div :class="$attrs.class">123</div>
    <div class="classList">
        <div v-for="(lesson, index) in lessons" :key="index">
            <span :class="{ 'is-delete': lesson.status }">{{ lesson.title }}</span>
            <button @click="lesson.status = !lesson.status">{{ lesson.status ? '取消' : '删除' }}</button>
        </div>
    </div>
</template>

<script>
import lessons from "@/../data/lessons";
export default {
    data() {
        return {
            lessons,
        }
    },
}
</script>

<style lang="scss" scoped>
.classList {
    div {
        display: flex;
        justify-content: space-between;

        span {
            &.is-delete {
                background-color: red;
                text-decoration: line-through;
            }
        }
    }
}
</style>