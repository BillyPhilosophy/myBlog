<template>
  <nav class="navbar">
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4">
          <Logo/>
        </el-col>
        <el-col :span="16">
          <Nav/>
        </el-col>
        <el-col :span="4">
          施工中
        </el-col>
      </el-row>
    </el-header>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
