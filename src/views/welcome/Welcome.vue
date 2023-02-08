<template>
  <div class="container-out">
    <div class="top" ref="body" :style="{ perspectiveOrigin: `${581 + xPos}px ${476 + yPos}px` }">
      <div class="container">
112222222222222222222222222222222222222222234
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMouse } from '@vueuse/core';
  import { useMousePointer } from '@/hooks/useMouseDc';
  const { x,y } = useMouse();
  const { xPos, yPos } = useMousePointer(x,y,5);
</script>

<style lang="scss" scoped >
@import './style/index.scss';
</style>
