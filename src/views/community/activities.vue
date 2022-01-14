<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="">
      </el-page-header>
    </div>
    
    <div class="activities">
      <notes-item path="/community/note1">
        <img slot="note_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="">
        <p slot="note_text">
          心水~~冬暖夏凉好惬意~
          🐱盟主测评加盟
        </p>
      </notes-item>

      <notes-item path="/community/note2">
        <img slot="note_img" src="@/assets/img/community/notes/com_note2.jpeg" alt="">
        <p slot="note_text">
          心水~~冬暖夏凉好惬意~
          国会开幕
          🐱盟主测评加盟
        </p>
      </notes-item>

      <notes-item path="/community/note1">
        <img slot="note_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="">
        <p slot="note_text">
          心水~~冬暖夏凉好惬意~
          🐱盟主测评加盟
        </p>
      </notes-item>

      <notes-item path="/community/note1">
        <img slot="note_img" src="@/assets/img/community/notes/com_note1.jpeg" alt="">
        <p slot="note_text">
          心水~~冬暖夏凉好惬意~
          🐱盟主测评加盟
        </p>
      </notes-item>
    </div>

  </div>
</template>

<script>
// import notes from "../../components/common/notes/notes";
import notesItem from "../../components/common/notes/notesItem";

export default {
  name: "com_activities",
  methods:{
    // 返回社区主页
    goBack(){
      this.$router.push('/community')
    },
  },
  components:{
    notesItem
  }
}
</script>

<style scoped>
.notes-item{
  width: 100%;
}
</style>