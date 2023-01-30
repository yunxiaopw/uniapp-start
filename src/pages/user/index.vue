<template>
  <view class="user">
    <van-button type="primary">默认按钮</van-button>
  </view>
  <Tabbar :current-tab="1" />
</template>

<script setup lang="ts">
import Tabbar from '@/components/tabbar.vue';
</script>

<style scoped></style>