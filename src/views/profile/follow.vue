<template>
  <div>
    <!--  顶栏  -->
    <div class="top-bar" style="width: 100%;">
      <el-page-header @back="goBack" content="">
      </el-page-header>
    </div>

    <!-- 搜索栏   -->
    <div class="top-search" style="margin-top: 5%;">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="小佩"
        @select="handleSelect"
        prefix-icon="el-icon-search"
        type="text"
        hide-loading="true"
      >
        <el-button type="primary" icon="el-icon-close" slot="suffix" @click="goBack"></el-button>
      </el-autocomplete>
    </div>

    <br>

    <!-- 粉丝列表   -->
    <div class="fans">
      <div class="fans-item" style="width: 100%; display: inline-flex; ">
        <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
             style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
        <span style="margin: auto; margin-left: 15px; width: 50%;"><b>小佩官方旗舰店</b></span>
        <button style="margin: auto; ">已关注</button>
      </div>
      <div class="fans-item" style="width: 100%; display: inline-flex; ">
        <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
             style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
        <span style="margin: auto; margin-left: 15px; width: 50%;"><b>小佩官方旗舰店</b></span>
        <button style="margin: auto; background-color:red; width: 60px;">关注</button>
      </div>
      <div class="fans-item" style="width: 100%; display: inline-flex; ">
        <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
             style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
        <span style="margin: auto; margin-left: 15px; width: 50%;"><b>小佩官方旗舰店</b></span>
        <button style="margin: auto;">已关注</button>
      </div>
      <div class="fans-item" style="width: 100%; display: inline-flex; ">
        <img src="@/assets/img/community/notes/com_note1.jpeg" alt=""
             style="width: 40px; height: 40px; border-radius: 20px; margin-left: 10px;">
        <span style="margin: auto; margin-left: 15px; width: 50%;"><b>小佩官方旗舰店</b></span>
        <button style="margin: auto;">已关注</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "fans",
  data() {
    return {
      activeName: 'first',
      restaurants: [],
      state: '',
      timeout:  null,
    };
  },
  methods:{
    // 返回我的主页
    goBack(){
      this.$router.push('/profile')
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
  mounted() {
    this.restaurants = this.loadAll();
  },
}
</script>

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

</style>