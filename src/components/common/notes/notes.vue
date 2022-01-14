<template>
  <!-- 一个笔记块 -->
  <div id="notes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "notes"
}
</script>

<style scoped>
#notes{
  margin-top: 5px;
  display: flex;
  background-color: aliceblue;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>