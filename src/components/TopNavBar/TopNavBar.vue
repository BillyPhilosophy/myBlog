<template>
  <nav class="navbar">
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4">
          <Logo @openPollup=" isShow = true"/>
        </el-col>
        <el-col :span="16">
          <Nav/>
        </el-col>
        <el-col :span="4">
          
        </el-col>
      </el-row>
    </el-header>
  </nav>
</template>

<script setup lang="ts">
  const isShow = ref(false);
 
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
