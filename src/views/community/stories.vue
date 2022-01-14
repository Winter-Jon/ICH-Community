<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="写故事">
      </el-page-header>
    </div>

  </div>
</template>

<script>
export default {
  name: "com_stories",
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