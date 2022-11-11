<template>
    <div>{{artical}}</div>
    <div v-for="artical of articals">
      {{artical.title}}
    </div>
</template>

<script setup lang="ts">
import {all,find} from "../apis/artical"
const {response:articals} = await all()
const {response:artical} =await find(1)
</script>

<style scoped>

</style>