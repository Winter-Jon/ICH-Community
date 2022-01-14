<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="我的钱包" style="margin-bottom: 2%">
      </el-page-header>
    </div>
  </div>
</template>

<script>
export default {
  name: "more_wallet",
  methods:{
    goBack(){
      this.$router.push('/profile')
    },
  }
}
</script>

<style scoped>

</style>