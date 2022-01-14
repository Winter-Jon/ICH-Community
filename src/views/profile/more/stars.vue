<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="我的收藏" style="margin-bottom: 2%">
      </el-page-header>
    </div>

    <!-- 导航块   -->
    <div class="tab-nav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="灯火守护者" name="first">
          <div class="customer-item">
            <span><img src="@/assets/img/community/notes/com_note1.jpeg" alt="" style=""></span>
            <span>小佩官方旗舰店</span>
          </div>
          <div class="customer-item">
            <span><img src="@/assets/img/community/notes/com_note1.jpeg" alt="" style=""></span>
            <span>小佩官方旗舰店</span>
          </div>
          <div class="customer-item">
            <span><img src="@/assets/img/community/notes/com_note1.jpeg" alt="" style=""></span>
            <span>小佩官方旗舰店</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="非遗产品" name="second">
          <notes>
            <notes-item path="/community/note1">
              <img slot="note_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                🐱盟主测评加盟
              </p>
            </notes-item>
            <notes-item path="/community/note2">
              <img slot="note_img" src="@/assets/img/community/notes/com_note2.jpeg" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note2.jpeg" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                国会开幕
                🐱盟主测评加盟
              </p>
            </notes-item>
          </notes>
        </el-tab-pane>
        <el-tab-pane label="非遗故事" name="third">
          <notes>
            <notes-item path="/community/note1">
              <img slot="note_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                🐱盟主测评加盟
              </p>
            </notes-item>

            <notes-item path="/community/note2">
              <img slot="note_img" src="@/assets/img/community/notes/com_note2.jpeg" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note2.jpeg" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                国会开幕
                🐱盟主测评加盟
              </p>
            </notes-item>

            <notes-item path="/community">
              <img slot="note_img" src="@/assets/img/community/notes/com_note3.jpeg" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note3.jpeg" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                归还借款立刻脚后跟不能
                🐱盟主测评加盟
              </p>
            </notes-item>

            <notes-item path="/community">
              <img slot="note_img" src="@/assets/img/community/notes/com_note4.png" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note4.png" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                钱钱钱钱钱
                🐱盟主测评加盟
              </p>
            </notes-item>

            <notes-item path="/community">
              <img slot="note_img" src="@/assets/img/community/notes/com_note5.jpg" alt="">
              <img slot="author_img" src="@/assets/img/community/notes/com_note5.jpg" alt="" style="">
              <span slot="author_name">小佩官方旗舰店</span>
              <p slot="note_text">
                心水~~冬暖夏凉好惬意~
                🐱盟主测评加盟
              </p>
            </notes-item>
          </notes>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "more_stars",
  data(){
    return{
      activeName:'second'
    }
  },
  methods:{
    goBack(){
      this.$router.push('/profile')
    },
    handleClick(){
      
    },
  }
}
</script>

<style scoped>

</style>