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
      >
        <el-button type="primary" icon="el-icon-close" slot="suffix" @click="goBack"></el-button>
      </el-autocomplete>
    </div>

    <div>
      <div class="customer-item">
        <span><img src="@/assets/img/community/notes/com_note1.jpeg" alt="" style=""></span>
        <span>小佩官方旗舰店</span>
      </div>
      <div class="customer-item">
        <span><img src="@/assets/img/community/notes/com_note1.jpeg" alt="" style=""></span>
        <span>小佩官方旗舰店</span>
      </div>
      <div class="customer-item">
        <span><img src="@/assets/img/community/notes/com_note1.jpeg" alt="" style=""></span>
        <span>小佩官方旗舰店</span>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "follow",
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

<style scoped>

</style>