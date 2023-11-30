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
  import { useStore } from '@/store/main'
  const store = useStore()
  const { user, setCancel } = store
  const isShow = ref(false)

  const getBaseUserInfo = () => {

  }
  
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
