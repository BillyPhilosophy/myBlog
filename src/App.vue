<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup >
  // import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
  import resize from '@/utils/resize';
  onMounted(() => {
    resize();
  })
</script>
