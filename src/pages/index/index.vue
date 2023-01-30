<template>
  <view class="title">{{ title }}
    <van-button type="primary">primary</van-button>
  </view>
  <Tabbar :current-tab="0" />
</template>

<script setup lang="ts">
import Tabbar from '@/components/tabbar.vue';
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style lang="scss">
.title {
  font-size: 36rpx;
  color: red;
}
</style>
