<template>
  <nav class="navbar">
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4">
          <Logo @openPollup="isShow = true" />
        </el-col>
        <el-col :span="16">
          <Nav />
        </el-col>
        <el-col :span="4">

        </el-col>
      </el-row>
    </el-header>
  </nav>
</template>

<script setup lang="ts">
import { isRef } from 'vue'
import { useStore } from '@/store/main';
import { useUserStore } from '@/store/user';
import { getBaseUserInfo } from "@/api/user";
const store = useStore();
const userStore = useUserStore();
const { user } = store;
const { userInfo,setBaseInfo } = userStore;
// console.log(isRef(userInfo));
const isShow = ref(false);
const queryBaseUserInfo = () => {
  if (user.token) {
    getBaseUserInfo().then((res: any) => {
      const { data } = res;
      if(data.returnCode==0){
        setBaseInfo(data.body)
      }
    })
  }
};
queryBaseUserInfo();

</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
