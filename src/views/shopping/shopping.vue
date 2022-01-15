
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
    <!-- 导航栏 -->
    <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <div class="nav-block">
          <a href=""><img src="@/assets/img/community/notes/com_note1.jpeg"></a>
        </div>
      </el-menu-item>
      <el-menu-item index="2">
        <div class="nav-block">
          <a href=""><img src="@/assets/img/community/notes/com_note1.jpeg"></a>
        </div>
      </el-menu-item>
      <el-menu-item index="3">
        <div class="nav-block">
          <a href=""><img src="@/assets/img/community/notes/com_note1.jpeg"></a>
        </div>
      </el-menu-item>
      <el-menu-item index="4">
        <div class="nav-block">
          <a href=""><img src="@/assets/img/community/notes/com_note1.jpeg"></a>
        </div>
      </el-menu-item>
    </el-menu>
    </div>
    <!-- 商品图片 -->
    <div class="container-water-fall" >
      <waterfall :col="2" :data="goods">
        <template>
          <div class="cell-item" v-for="(item,index) in goods" :key="index">
            <img v-if="item.img" :src="item.img" alt="加载错误">
            <div class="item-body">
                <div class="item-title">{{item.title}}</div>
              <div class="item-footer">
                <div
                  class="avatar"
                  :style="{backgroundImage : `url(${item.avatar})` }"
                ></div>
                <span class="name">{{item.user}}</span>
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
          { title:"1",
            user:"1",
            img:require("@/assets/img/community/notes/com_note1.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"2",
            user:"1",
            img:require("@/assets/img/community/notes/com_note4.png"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"3",
            user:"1",
            img:require("@/assets/img/community/notes/com_note3.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"4",
            user:"1",
            img:require("@/assets/img/community/notes/com_note5.jpg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"1",
            user:"1",
            img:require("@/assets/img/community/notes/com_note1.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"2",
            user:"1",
            img:require("@/assets/img/community/notes/com_note4.png"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"3",
            user:"1",
            img:require("@/assets/img/community/notes/com_note3.jpeg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},
          { title:"4",
            user:"1",
            img:require("@/assets/img/community/notes/com_note5.jpg"),
            avatar:require("@/assets/img/community/notes/com_note2.jpeg")},

        ]
      }
    },
    methods: {
      
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
  width: 96vw;
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
  padding: 2px;}
.item-title {
  font-size: 15px;
  color: #333333;
  line-height: 15px;
  font-weight: bold;
  align-content: center;
  alignment: center;
}
.item-footer {
  margin-top: 22px;
  position: relative;
  display: flex;
  align-items: center;}
.avatar {
  width: 30px;
  height: 30px;
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

.el-menu-item{
  padding:0px 19px;
  border: 0px;
}

.nav{
  margin: 15px 0px;
}

.nav img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

</style>