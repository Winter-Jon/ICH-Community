<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar">
      <el-page-header @back="goBack" content="">
      </el-page-header>
    </div>

    <!-- 搜索栏   -->
    <div class="top-search">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="小佩"
        @select="handleSelect"
        prefix-icon="el-icon-search"
        type="text"
        hide-loading="true"
        @focus="goSearch"
      >
        <el-button type="primary" icon="el-icon-close" slot="suffix" @click="goBack"></el-button>
      </el-autocomplete>
    </div>
   
    <!-- 导航块   -->
    <div class="tab-nav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="灯火守护者" name="first">
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
          <div class="fans-item" style="width: 100%; display: inline-flex; ">
            <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
                 style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
            <span style=" margin: auto;margin-left: 15px;"><b>小佩官方旗舰店</b></span>
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
import notes from "../../components/common/notes/notes";
import notesItem from "../../components/common/notes/notesItem";
export default {
  name: "com_search",
  data() {
    return {
      activeName: 'first',
      restaurants: [],
      state: '',
      timeout:  null,
    };
  },
  methods:{
    // 返回社区主页
    goBack(){
      this.$router.push('/community')
    },

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
  },
  components:{
    notes,
    notesItem
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
}
</script>

<style scoped>

</style>

<style lang="scss" scoped>
.top-search{
  margin: 3px;

  /deep/.el-input__inner{
    border-radius: 30px;
    width: 100%;
  }

  /deep/.el-autocomplete{
    width: 100%;
  }

  /deep/.el-autocomplete .el-button--primary {
    color: #666666;
    background-color: transparent;
    border: 0px;
  }
}

.top-bar{
  margin: 5px;
}

.tab-nav span img{
  width: 5%;
  border-radius: 10px;
}
</style>