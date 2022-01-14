<template>
  <div class="notes-item" @click="itemClick">
    <slot name="note_img"></slot>
    <div class="description">
      <div class="author">  
        <span class="a_img">
          <slot name="author_img"></slot>
        </span>
        <slot name="author_name"></slot>
      </div>
      <div>
        <slot name="note_text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notesItem",
  props: {
    path: String,
  },
  data () {
    return {
      
    }
  },
  methods: {
    itemClick () {
      // 跳转到详情页面
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .notes-item{
    position: relative;
    width: 48%;
    padding-bottom: 10%;
  }
  
  .notes-item img{
    width: 100%;
    height: 90%;
    border-radius: 5px;
  }
  
  .notes-item span img{
    width: 8%;
    border-radius: 5px;
  }
  .description{
    left: 0;
    right: 0;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    text-align: center;
  }
  
  .description p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
 
</style>