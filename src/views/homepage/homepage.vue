<template>
  <div>
    这里是首页面
    <el-footer>
      <buttom_tabbar></buttom_tabbar>
    </el-footer>
  </div>
</template>

<script>
import buttom_tabbar from "../../components/content/ButtomTabbar/buttom_tabbar";
export default {
  name: "homepage",
  components:{
    buttom_tabbar
  }
}
</script>

<style scoped>

</style>