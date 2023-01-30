<template>
    <van-tabbar :active="active" @change="onChange">
        <van-tabbar-item v-for="item in tabList" :key="item.pagePath" :icon="item.icon">{{ item.text }}</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
    currentTab: number
}>()
const active = ref<number>(0);
const tabList = [
    {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "icon": "home-o"
    },
    {
        "pagePath": "/pages/user/index",
        "text": "分类",
        "icon": "search"
    }
]

const onChange = (event: any) => {
    const current = event.detail;
    console.log({current})
    uni.switchTab({
        url: tabList[current].pagePath
    })
}

watch(() => props.currentTab, (val: number) => {
    console.log({val})
    active.value = val;
 
}, { immediate: true })
</script>