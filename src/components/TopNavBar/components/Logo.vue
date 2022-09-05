<template>
  <div class="logo" >
    <aside class="icon">
      <router-link to="/welcome">
        <img src="@/assets/img/new-logo.png" />
      </router-link>
      <i @click="openPollup" class="iconfont icon-classification"></i>
    </aside>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['openPollup']);
  const openPollup = ()=>{
    emit('openPollup')
  }
</script>

<style lang="scss" scoped >
  @import '../style/logo.scss';
</style>
