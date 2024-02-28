<template>
  <aside class="right">
    <ul v-if="userInfo.userNo" class="icon-group">
      <li>
        <i class="iconfont icon-mail"></i>
      </li>
      <li @click="router.push('/index/options')">
        <i class="iconfont icon-shezhi"></i>
      </li>
      <li>
        <i class="iconfont icon-changyonggongneng"></i>
      </li>
    </ul>
    <p v-else>
      访客你好 去<RouterLink to="/login" style="color: rgb(124, 12, 226)">登录</RouterLink>
    </p>
    <div class="container" @mouseenter="emit('update:infoShow',true)" @mouseleave="emit('update:infoShow',false)">
      <div class="avatar">
        <MyElimage v-if="userInfo.userNo" :img="userInfo.avatar" :zip="2" />
        <MyElimage v-else :img="Logo" alt="占位图片" :zip="2" />
      </div>
      <transition name="toptodown" mode="out-in">
        <div v-show="infoShow" class="info-box">
          <!-- 显示个人用户设置的背景图 -->
          <div class="imgmask" v-if="userInfo.banner"></div>
          <div class="imgcontainer" v-if="userInfo.banner">
            <MyElimage :img="userInfo.banner" :zip="3" v-if="userInfo.banner" />
          </div>
          <div class="loginbox" v-if="userInfo.userNo">
            <div class="up">
              <div class="info">
                <h2>{{ userInfo.nickname }}</h2>
                <div>{{ userInfo.introduce }}</div>
              </div>
            </div>
            <div class="button">
              <ul>
                <li @click="router.push('/index/home')">
                  <i class="iconfont icon-geren"></i>
                  <span>个人中心</span>
                </li>
                <li @click="router.push('/index/create')">
                  <i class="iconfont icon-edit"></i>
                  <span>我的发布</span>
                </li>
                <li @click="router.push('/index/options')">
                  <i class="iconfont icon-shezhi"></i>
                  <span>设置</span>
                </li>
                <li @click="logout">
                  <i class="iconfont icon-close_circle"></i>
                  退出登录
                </li>
              </ul>
            </div>
          </div>
          <div class="nologin" v-else>
            喵~ 点击这里跳转
            <RouterLink to="/login" style="color: rgb(124, 12, 226)">登录 </RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '@/assets/img/logo.png'
defineProps({
  userInfo: {
    type: Object as PropType<UserEasy>,
    default: () => {
      return {}
    }
  },
  infoShow:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits(['logout','update:infoShow'])
const router = useRouter()
const logout = () => {
  emit('logout')
}

// let infoShow = ref(false)
</script>

<style lang="scss" scoped>
@import '../style/rightInfoBox.scss';
</style>
