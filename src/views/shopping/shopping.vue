
<template>
  <div>
    <!-- 走马灯，其中图片在script中 -->
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img :src="img.url" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 商品图片 -->
    <waterfall :line-gap="200" :watch="goods">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in goods"
        :ref="`btn${index}`"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="index"
      >
        <img :src="item.url">
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall';
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';
export default {
  name: "shopping",
  components: {
    Waterfall,
    WaterfallSlot
  },
  props:{
    imgList: {
      type: Array,
      default(){
        return [
          {url:require("@/assets/img/community/notes/com_note1.jpeg")},
          {url:require("@/assets/img/community/notes/com_note2.jpeg")},
        ]
      }
    },
    goods:{
      type: Array,
      default(){
        return [
          {url:require("@/assets/img/community/notes/com_note1.jpeg")},
          {url:require("@/assets/img/community/notes/com_note2.jpeg")},
          {url:require("@/assets/img/community/notes/com_note2.jpeg")},
          {url:require("@/assets/img/community/notes/com_note1.jpeg")},
          {url:require("@/assets/img/community/notes/com_note2.jpeg")},
          {url:require("@/assets/img/community/notes/com_note2.jpeg")},
        ]
      }
    }
  }
}

</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-image {
  max-width: 100%;
  max-height: 100%;
}



</style>