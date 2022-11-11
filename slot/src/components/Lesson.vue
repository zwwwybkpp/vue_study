<template>
    <div>
        {{ lesson.title }}
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['lesson']
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border: solid 1px #ddd;
}
</style>