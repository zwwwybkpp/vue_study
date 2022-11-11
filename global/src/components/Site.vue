<template>
    <card>
        <template #header>站点信息</template>
        <div>
            <x-input title="网站名称" v-model="config.site.title"></x-input>
            <x-textarea title="站点介绍" rows="5" v-model="config.site.desc"></x-textarea>
        </div>
    </card>
</template>

<script>
export default {
    inject: ['config'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>

</style>