<script setup lang="ts">
const count1 = ref<String>('0')
const props = defineProps({
  
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div class="tw-container tw-mx-auto">
          <p class="test">{{count1}}</p>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped  lang="scss">
@import url('@/assets/style/layout/layout.scss');
</style>
