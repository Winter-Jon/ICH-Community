<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="我的钱包" style="margin-bottom: 2%; background-color: white;">
      </el-page-header>
    </div>
    
    <div class="withdraw" style="margin-top: 30px; background-color: white;">
      <div style="margin-top: 10px; margin-left: 10px; font-size: 16px; color: gray;">提现金额</div>
      <div style="font-size: 40px; color: darkgrey;">
        <b>￥</b>
      </div>
      <br>
      <div style="margin-left: 10px; font-size: 14px; color: gray;">可用余额0.00元</div>
    </div>
    
    <div>
      <button style="width: 100%; background-color: green; color: white; height: 50px; 
              border-radius: 5px; border-style: none; margin-top: 30px;">
        预计72小时到账，提现到账户</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "wallet_withdraw",
  methods:{
    goBack(){
      this.$router.push('/profile/more/wallet')
    },
  }
}
</script>

<style scoped>

</style>