<template>
  <nav class="navbar">
    <el-header>
      <el-row :gutter="20">
        <!-- logo -->
        <el-col :span="4">
          <Logo @openPollup="isShow = true" />
        </el-col>
        <!-- titlebar -->
        <el-col :span="16">
          <Nav/>
        </el-col>
        <!-- userinfo -->
        <el-col :span="4">
          <RightInfoBox :userInfo="userInfo" v-model:infoShow="infoShow" @logout="logout" />
        </el-col>
      </el-row>
    </el-header>
  </nav>
</template>

<script setup lang="ts">
import { removeItem } from '@/utils/storage';
import { useStore } from '@/store/main';
import { useUserStore } from '@/store/user';
import { getBaseUserInfo } from "@/api/user";
const store = useStore();
const userStore = useUserStore();
const { user } = store;
const { userInfo, setBaseInfo } = userStore;
const isShow = ref(false);
const infoShow = ref(false);
const queryBaseUserInfo = () => {
  if (user.token) {
    getBaseUserInfo().then((res: any) => {
      const { data } = res;
      if (data.returnCode == 0) {
        setBaseInfo(data.body)
      } else {
        ElMessage.error(data.msg)
        removeItem('user')
      }
    })
  }
};
queryBaseUserInfo();

const logout = () =>{
  store.user.token = ''
  removeItem('user')
  setBaseInfo({
    userNo: '',
    username: '',
    avatar: '',
    role: 0,
    nickname: '',
    banner: '',
    introduce: ''
  })
  ElMessage.success('退出登录成功！')
  isShow.value = false
  infoShow.value = false
}

</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
