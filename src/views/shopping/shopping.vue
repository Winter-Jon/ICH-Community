
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
    <div class="container-water-fall">
      <waterfall :col="2" :data="goods" @loadmore="loadmore">
        <template>
          <div class="cell-item" v-for="(item,index) in goods" :key="index">
            <img v-if="item.img" :src="item.img" alt="加载错误">
            <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                <div
                  class="avatar"
                  :style="{backgroundImage : `url(${item.avatar})` }"
                ></div>
                <div class="name">{{item.user}}</div>
                </div>
              </div>
            </div>
        </template>
      </waterfall>
    </div>
    <el-footer>
      <buttom_tabbar></buttom_tabbar>
    </el-footer>
  </div>
</template>

<script>
import buttom_tabbar from "../../components/content/ButtomTabbar/buttom_tabbar";
export default {
  name: "shopping",
  components: {
    buttom_tabbar,
  },
  computed:{
    itemWidth(){
      return (138*0.5*(document.documentElement.clientWidth/375))
    },
    gutterWidth(){
      return (8*0.5*(document.documentElement.clientWidth/375))
    }
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
          {img:require("@/assets/img/community/notes/com_note1.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          {img:require("@/assets/img/community/notes/com_note2.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          {img:require("@/assets/img/community/notes/com_note3.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          {img:require("@/assets/img/community/notes/com_note1.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},

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

.container-water-fall {
  padding: 0 0px;
  width: 100vw;
  box-sizing: border-box;
  align-content: center;}

.container-water-fall h4 {
  padding-top: 56px;
  padding-bottom: 28px;
  font-family: PingFangSC-Medium;
  font-size: 36px;
  color: #000000;
  letter-spacing: 1px;
  text-align: justify;
}

.cell-item {
  width: 100%;
  margin-bottom: 18px;
  background: #ffffff;
  border: 2px solid #F0F0F0;
  border-radius: 12px 12px 12px 12px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2px}
.cell-item img {
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: auto;
  display: block;
}
.item-body {
  border: 1px solid #F0F0F0;
  padding: 12px;}
.item-desc {
  font-size: 15px;
  color: #333333;
  line-height: 15px;
  font-weight: bold;
}
.item-footer {
  margin-top: 22px;
  position: relative;
  display: flex;
  align-items: center;}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}
.name {
  max-width: 150px;
  margin-left: 10px;
  font-size: 14px;
  color: #999999;
}

</style>