<template>
  <!-- 这里显示顶部图标 -->
  <div id="top_tabbar">
    <tab-bar>
      <tab-bar-item>
        
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "top_tabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>