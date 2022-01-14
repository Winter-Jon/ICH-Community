<template>
  <div>
    <!--  顶栏   -->
    <div class="top-bar">
      <!--  项目标志图片(最后统一切换)   -->
      <img src="@/assets/img/home/home.png" alt="">
    </div>
    
    <!--  顶部搜索框，需要从服务器端返回对应的数据数组  -->
    <!--  这里之后需要添加按钮点击事件，进行页面间跳转  -->
    <div class="top-search">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="搜索"
        @select="handleSelect"
        prefix-icon="el-icon-search"
        type="text"
        hide-loading="true"
        @focus="goSearch"
      ></el-autocomplete>
    </div>
    
    <!--  发布故事 与 更多活动 -->
    <!--  这里之后需要添加按钮点击事件，进行页面间跳转  -->
    <div class="story">
      <el-button type="primary" @click="goStory">说出你的故事<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-button type="primary" @click="goActivities">更多活动<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    
    <!--  社区图片显示(仿小红书)，左右两列  -->
    <div class="all-notes">
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

        <notes-item path="/community">
          <img slot="note_img" src="@/assets/img/community/notes/com_note6.jpg" alt="">
          <img slot="author_img" src="@/assets/img/community/notes/com_note6.jpg" alt="" style="">
          <span slot="author_name">小佩官方旗舰店</span>
          <p slot="note_text">
            心水~~冬暖夏凉好惬意~
            欢迎欢迎~~~~~
            欢迎光临
            🐱盟主测评加盟
          </p>
        </notes-item>
        
      </notes>
    </div>
    
    
  </div>
</template>

<script>
import notes from "../../components/common/notes/notes";
import notesItem from "../../components/common/notes/notesItem";

export default {
  name:'community',
  data() {
    return {
      restaurants: [],
      state: '',
      timeout:  null,
      
    };
  },
  methods: {
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
      ];
    },
    querySearchAsync(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    // 筛选符合条件的内容
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    },

    // 去往搜索首页面
    goSearch(){
      this.$router.push('/community/search')
    },

    goStory(){
      this.$router.push('/community/stories')
    },
    
    goActivities(){
      this.$router.push('/community/activities')

    }
    
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  
  components:{
    notes,
    notesItem
  }
};
</script>

<style scoped>
  .top-bar{
    height: 30px;
    text-align: center;
    margin: 5px;
  }
  
  .top-bar img{
    width: 24px;
    height: 24px;
  }
  
  .story{
    margin: 5px;
    display: flex;
    justify-content: space-around;
  }
</style>

<style lang="scss" scoped>
  .top-bar{
    /deep/ .el-header{
      height: 30px;
    }
  }
  
  .top-search{
    margin: 3px;
    
    /deep/.el-input__inner{
      border-radius: 30px;
      width: 100%;
    }
    
    /deep/.el-autocomplete{
      width: 100%;
    }
  }
  
  .story{
    /deep/ .el-button{
      width: 47%;
    }
  }
</style>
