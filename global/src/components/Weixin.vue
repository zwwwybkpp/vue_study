<template>
    <card>
        <template #header>微信</template>
        <div>
            <x-input title="appid" v-model="config.wexin.appid"></x-input>
            <x-textarea title="secret" rows="5" v-model="config.wexin.secret"></x-textarea>
            <x-input title="info" v-model="info"></x-input>
        </div>
    </card>
</template>

<script>
export default {
    inject: ['config'],
    data() {
        return {
            info:'aaaaaaa'
        }
    },
}
</script>

<style lang="scss" scoped>

</style>