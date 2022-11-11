<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div {
    border: solid 1px #ddd;
    margin-top: 20px;
    border-radius: 5px;
    header{
        color: #3b3b3b;
        background-color: #f3f3f3;
        border-bottom: 1px solid #ddd;
        padding: 10px;
    }
    main{
        padding: 10px;
    }
}
</style>