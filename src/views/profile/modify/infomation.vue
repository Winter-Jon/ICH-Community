<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="个人信息" style="margin-bottom: 2%">
      </el-page-header>
    </div>
    
    <div class="picture" style="text-align: center; justify-items: center;">
      <div>
        <el-avatar :src="photo"></el-avatar>
      </div>
      <div>
        <button style="border-style: none; color: #ff5777">更换头像</button>
      </div>
    </div>
    
    <div class="details" style="margin-top: 20px">
      <el-descriptions class="margin-top" title="" :column="1" :colon="false">
        <el-descriptions-item label="昵称">Ryanair_Lee</el-descriptions-item>
        <el-descriptions-item label="地区">中国 上海</el-descriptions-item>
        <el-descriptions-item label="个性签名">
            其实我并不是人类，我是一只从石头里蹦出来的葫芦娃，名叫林黛玉，最擅长的是倒拔垂杨柳···🐓
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <p style="font-size: 18px;"><b>收货地址</b></p>
    <button style="width: 100%; padding: 10px; background-color:lightgray; border-style: none;">设置默认收货信息</button>
    
  </div>
</template>

<script>
import photo from "@/assets/img/profile/photo.png"
export default {
  name: "modify_infomation",
  data(){
    return{
      photo:photo
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
.picture{
  /deep/ .el-avatar{
    margin: 5px;
    width: 100px;
    height: 100px;
  }
}

.details{
  /deep/.el-descriptions-item__cell{
    height: 50px;
  }
  
  /deep/.el-descriptions-item__container{
    
  }

  /deep/.el-descriptions-item__label{
    width: 30%;
    font-size: 18px;
  }

  /deep/.el-descriptions-item__content{
    width: 50%;
    font-size: 18px;
  }
}
</style>