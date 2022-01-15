<template>
 <div>
   <!--  顶栏  -->
   <div class="top-bar">
     <el-page-header @back="goBack" content="消息通知" style="margin-bottom: 2%">
     </el-page-header>
   </div>

   <br>
   <div class="messages">
     <div class="message-item" style="width: 100%;">
       <img src="@/assets/img/profile/messages/message1.png" alt="" style="width: 100%;">
     </div>
     <div class="message-item" style="width: 100%;">
       <img src="@/assets/img/profile/messages/message2.png" alt="" style="width: 100%;">
     </div>
     <div class="message-item" style="width: 100%;">
       <img src="@/assets/img/profile/messages/message3.png" alt="" style="width: 100%;">
     </div>
     <div class="message-item" style="width: 100%;">
       <img src="@/assets/img/profile/messages/message4.png" alt="" style="width: 100%;">
     </div>
     
   </div>
 </div>
</template>

<script>
export default {
  name: "more_messages",
  methods:{
    goBack(){
      this.$router.push('/profile')
    },
  }
}
</script>

<style scoped>

</style>