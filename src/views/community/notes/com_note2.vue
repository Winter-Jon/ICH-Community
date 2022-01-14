<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="">
      </el-page-header>
    </div>
    
    <h2>这里是第2个笔记</h2>
  </div>
</template>

<script>
export default {
  name: "com_note2",
  methods:{
    // 返回社区主页
    goBack(){
      this.$router.push('/community')
    },
  }
}
</script>

<style scoped>

</style>