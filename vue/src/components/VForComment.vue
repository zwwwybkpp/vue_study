<template>
    <div>
        <!-- <div v-for="(value, key, index) in obj" :key="index">
            {{ value }}-{{ key }}-{{ index }}
        </div> -->
    </div>
</template>

<script>
import lessons from '../../data/lessons'
export default {
    data() {
        return {
            lessons,
            obj: {
                name: 'JavaScript',
                url: 'ww.com',
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>