<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header,main,footer{
  padding: 10px;
}
div{
  border: solid 1px #ddd;
  
}
main{
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color:#ddd;
}
</style>
