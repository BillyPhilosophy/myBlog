<template>
  <div class="cotainer" ref="body">
    <div class="filter"></div>
    <TopNavBar/>
  </div>
</template>
<script setup lang="ts">
import { setConfig } from '@/theme/theme';
onMounted(()=>{
  setConfig()
})
</script>
<style scoped  lang="scss">
@import url('@/assets/style/layout/layout.scss');
</style>
