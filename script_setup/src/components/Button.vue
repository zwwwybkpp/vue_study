<template>
    <button :class="[type, { disabled }]">
        <span v-if="tip">{{ tip }}</span>
        {{ text }}
    </button>
</template>

<script>

export default {
    props: {
        content: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "primary",
            validator(v) { //验证器
                return ['info', 'danger', 'success', 'primary'].includes(v)
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tip: {
            type: String,
        }
    },
    data() {
        return {
            text: this.content
        }
    },
    watch: {
        content(newContent) {
            this.text = newContent;
        }
    },
    methods: {
        onClick() {
            this.text = "loading..."
            setTimeout(() => {
                this.text = this.content
            }, 3000)
        }
    },

}
</script>

<style lang="scss" scoped>
button {
    border: none;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 10px;
    opacity: 1;
    transition: 0.7s;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }

    &.info {
        background-color: #bdc3c7;
    }

    &.danger {
        background-color: #ff4d4d;
    }

    &.success {
        background-color: #27ae60;
    }

    &.primary {
        background-color: #409EFF;
    }

    &.disabled {
        background-color: #aaa !important;
        color: #666;
        cursor: default;
    }
}
</style>