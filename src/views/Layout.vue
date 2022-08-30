<script setup lang="ts">
const count1 = ref<String>('0')
const props = defineProps({
  
})
</script>

<template>
  <div class="cotainer" ref="body">
    <div class="filter"></div>
    <TopNavBar/>
  </div>
</template>

<style scoped  lang="scss">
@import url('@/assets/style/layout/layout.scss');
</style>
