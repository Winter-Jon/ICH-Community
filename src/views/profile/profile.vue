<template>
  <div class="profile">
    <!--  顶栏   -->
    <div class="top-bar">
      <el-page-header>
        <el-button icon="el-icon-s-fold" slot="title" @click="drawer=true"></el-button>
        <span slot="content"> ROMY_F</span>
      </el-page-header>
    </div>
    
    <!-- 侧边栏：更多   -->
    <div class="drawer">
      <el-drawer
        title="更多"
        direction="ltr"
        :visible.sync="drawer"
        style="width: 200%"
      >
        <div class="drawer_item" style="display:flex; padding: 10px;" @click="goMoreMessage">
          <span style="width: 20%; margin-left: 5%;"><i class="el-icon-bell"></i></span>
          <span style="width: 60%;">消息通知</span>
        </div>
        <div class="drawer_item" style="display:flex; padding: 10px;" @click="goMoreWallet">
          <span style="width: 20%; margin-left: 5%;"><i class="el-icon-wallet"></i></span>
          <span style="width: 60%;">我的钱包</span>
        </div>
        <div class="drawer_item" style="display:flex; padding: 10px;" @click="goMoreStars">
          <span style="width: 20%; margin-left: 5%;"><i class="el-icon-collection"></i></span>
          <span style="width: 60%;">我的收藏</span>
        </div>

        <br><br><br>
        <div class="drawer_item" style="display:flex; padding: 10px;">
          <span style="width: 20%; margin-left: 5%;"><i class="el-icon-truck"></i></span>
          <span style="width: 60%;">订单信息</span>
        </div>
        <div class="drawer_item" style="display:flex; padding: 10px;">
          <span style="width: 20%; margin-left: 5%;"><i class="el-icon-location-information"></i></span>
          <span style="width: 60%;">收货地址</span>
        </div>

        <br><br><br>
        <div class="drawer_item" style="display:flex; padding: 10px;">
          <span style="width: 20%; margin-left: 5%;"><i class="el-icon-lollipop"></i></span>
          <span style="width: 60%;">关于我们</span>
        </div>
        
        <div class="share" style="bottom: 0;position: absolute;">
          <p style="margin-left: 20px;">分享</p>
          <el-button icon="el-icon-share" style="border-style: none;"></el-button>
        </div>
        
      </el-drawer>
    </div>
    
    <!--  个人信息  -->
    <div class="information" style=" display: inline-flex; width: 100%;">
      <el-avatar :src="photo"></el-avatar>
      <span style="width: 60%;  margin-left: 10%; right: 0; margin-top: 10px;">
        <div style="display: inline-flex; justify-content: space-around; width: 100%">
          <div style="text-align: center;">{{num_stories}} <div style="text-align: center;">故事</div></div>
          <div style="text-align: center;" @click="goFollow">{{num_follow}} <div style="text-align: center;">关注</div></div>
          <div style="text-align: center;" @click="goFans">{{ num_fans }} <div style="text-align: center;">粉丝</div></div>
        </div>
        <div style="vertical-align: middle; margin-top: 10px;">
          <button style="border-style: none; font-size: 16px;" @click="modifyInformation">查看并编辑资料</button>
        </div>
      </span>
    </div>
    
    <p style="font-size: 14px;" @click="modifySignature">
      {{ signature }}
    </p>
    
    <p style="font-size: 18px;"><b>我的故事</b></p>
    <div class="all_stories">
      <notes>
        <notes-item path="/profile/note1">
          <img slot="note_img" src="@/assets/img/profile/notes/profile_note1.jpeg" alt="">
          <img slot="author_img" src="@/assets/img/profile/notes/profile_note1.jpeg" alt="" style="">
          <span slot="author_name">小佩官方旗舰店</span>
          <p slot="note_text">
            心水~~冬暖夏凉好惬意~
            🐱盟主测评加盟
          </p>
        </notes-item>

        <notes-item path="/profile/note2">
          <img slot="note_img" src="@/assets/img/profile/notes/profile_note2.jpeg" alt="">
          <img slot="author_img" src="@/assets/img/profile/notes/profile_note2.jpeg" alt="" style="">
          <span slot="author_name">小佩官方旗舰店</span>
          <p slot="note_text">
            心水~~冬暖夏凉好惬意~
            国会开幕
            🐱盟主测评加盟
          </p>
        </notes-item>

        <notes-item path="/profile/note1">
          <img slot="note_img" src="@/assets/img/profile/notes/profile_note3.jpeg" alt="">
          <img slot="author_img" src="@/assets/img/profile/notes/profile_note3.jpeg" alt="" style="">
          <span slot="author_name">小佩官方旗舰店</span>
          <p slot="note_text">
            心水~~冬暖夏凉好惬意~
            归还借款立刻脚后跟不能
            🐱盟主测评加盟
          </p>
        </notes-item>

        <notes-item path="/profile/note1">
          <img slot="note_img" src="@/assets/img/profile/notes/profile_note4.jpeg" alt="">
          <img slot="author_img" src="@/assets/img/profile/notes/profile_note4.jpeg" alt="" style="">
          <span slot="author_name">小佩官方旗舰店</span>
          <p slot="note_text">
            心水~~冬暖夏凉好惬意~
            钱钱钱钱钱
            🐱盟主测评加盟
          </p>
        </notes-item>
      </notes>
    </div>

    <!-- 底部导航栏  -->
    <el-footer>
      <buttom_tabbar></buttom_tabbar>
    </el-footer>
    
  </div>
</template>

<script>
import photo from "@/assets/img/profile/photo.png"
import notes from "../../components/common/notes/notes";
import notesItem from "../../components/common/notes/notesItem";
import buttom_tabbar from "../../components/content/ButtomTabbar/buttom_tabbar";

export default {
  name: "profile",
  data(){
    return{
      num_stories:4,
      num_follow:31,
      num_fans:33,
      drawer:false,
      photo:photo,
      signature:'请叫我小山，一座雄伟的山峰，孤独的树立在遥远的外太空！PLZ·Go to home》·《来自喵星球的我》喵喵~'
    }
  },
  components:{
    notes,
    notesItem,
    buttom_tabbar
  },
  methods:{
    modifyInformation(){
      // 跳转到修改个人信息页面
      this.$router.push('/profile/modify/information')
    },
    modifySignature(){
      // 修改个性签名页面
      this.$router.push('/profile/modify/signature')
    },
    goMoreMessage(){
      this.$router.push('/profile/more/messages')
    },
    goMoreStars(){
      this.$router.push('/profile/more/stars')
    },
    goMoreWallet(){
      this.$router.push('/profile/more/wallet')
    },
    goFollow(){
      this.$router.push('/profile/follow')
    },
    goFans(){
      this.$router.push('/profile/fans')
    },
  }
}
</script>

<style scoped>

</style>

<style lang="scss" scoped>
.top-bar{
  /deep/.el-page-header__left .el-icon-back{
    display: none;
  }
  
  /deep/ .el-button{
    border: 0;
  }
  
  /deep/ .el-page-header__content{
    margin-left: 15%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}

.information{
  margin: 5px;
  
  /deep/ .el-avatar{
    width: 80px;
    height: 80px;
  }
  
}
</style>