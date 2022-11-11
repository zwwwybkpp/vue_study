<template>
    <div style="color:red" v-bind:style="styles">
        abc
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styles:{backgroundColor: 'green'}
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>