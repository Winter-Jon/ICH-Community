<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="修改个性签名">
      </el-page-header>
    </div>
    
    <div class="text">
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="50"
        show-word-limit
      >
      </el-input>
    </div>
    
    <p style="font-size: 15px; color: #666666;">写个有趣的签名吧</p>
    <p style="font-size: 10px; color: darkgrey">
      好看的皮囊太多，有趣的灵魂太少。
      <br>
      无趣的人，只是活着；有趣的人，才在生活~
    </p>
    
    <button style="
      width: 100%; bottom: 0; position: absolute; 
      height: 10%; left: 0; right: 0;border-style: none;
      background-color: #ff8198;" @click="goBack"
    >
      完成
    </button>
  </div>
</template>

<script>
export default {
  name: "modify_signature",
  data(){
    return{
      textarea:''
    }
  },
  methods:{
    goBack(){
      this.$router.push('/profile')
    },
  }
}
</script>

<style lang="scss" scoped>
.top-bar{
  .el-page-header{
    margin-bottom: 20px;
  }
}

</style>