<template>
    <div class="classComponent">
        <!-- <div class="wa" :class="{ current: active }">wann</div> -->
        <div class="wa" :class="classList">wann</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // active: false,
            // classList: {
            //     current: true,
            //     g: false,
            // }
        }
    },
    computed: {
        classList() {
            return {
                current: true,
                g: true,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.classComponent {
    .wa {
        color: red;
    }

    .current {
        background-color: black;
    }

    .g {
        border: 10px solid pink;
    }
}
</style>