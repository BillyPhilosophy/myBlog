<template>
  <div class="cotainer" ref="body">
    <div class="filter"></div>
    <!-- 头部 -->
    <TopNavBar/>
    <!-- main主要的模块入口 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setConfig } from '@/theme/theme';
onMounted(() => {
  setConfig();
})
</script>
<style scoped  lang="scss">
@import '@/assets/style/layout/layout.scss';
</style>
