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
        <el-tab-pane label="故事-1" name="first">
          <div class="fans-item" style="width: 100%; display: inline-flex; ">
            <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
                 style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
            <span style=" margin: auto;margin-left: 15px;"><b>小佩官方旗舰店</b></span>
          </div>
          <div class="fans-item" style="width: 100%; display: inline-flex; ">
            <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
                 style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
            <span style=" margin: auto;margin-left: 15px;"><b>小佩官方旗舰店</b></span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="故事-2" name="second">
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import notes from "../../../components/common/notes/notes";
import notesItem from "../../../components/common/notes/notesItem";

export default {
  name: "more_stars",
  data(){
    return{
      activeName:'second'
    }
  },
  components:{
    notes,
    notesItem
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