<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="我的钱包" style="margin-bottom: 2%">
      </el-page-header>
    </div>
    
    <!--  提现  -->
    <div class="withdraw" style="background-color: aquamarine; height: 180px; width: 100%;">
      <div style="padding-left: 30%; padding-top: 60px; font-size: 30px;"><b>￥</b></div>
      <button style="margin-left: 40%; border-style: none; background-color: transparent;" 
              @click="goWithDraw">提现到零钱</button>
    </div>

    <!--  交易记录  -->
    <div class="tab-nav" style="">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="支出" name="first">
          <span style="color:gray; font-size: 14px;">交易记录</span>
          <div class="message-item" style="width: 100%;">
            <img src="@/assets/img/profile/wallet/wallet1.png" alt="" style="width: 100%;">
          </div>
          <div class="message-item" style="width: 100%;">
            <img src="@/assets/img/profile/wallet/wallet2.png" alt="" style="width: 100%;">
          </div>
        </el-tab-pane>
        <el-tab-pane label="收入" name="second">
        </el-tab-pane>
      </el-tabs>
    </div>
    
    
    
  </div>
</template>

<script>
export default {
  name: "more_wallet",
  data(){
    return{
      activeName:'first'
    }
  },
  methods:{
    goBack(){
      this.$router.push('/profile')
    },
    goWithDraw(){
      this.$router.push('/profile/more/wallet/withdraw')
    }
  }
}
</script>

<style scoped>

</style>