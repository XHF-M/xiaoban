<template>
  <cover-view class="tab-bar">
    <cover-view class="tab-bar-border"></cover-view>
    <cover-view
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
      @tap="switchTab(index, item.pagePath)"
    >
      <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath" />
      <cover-view :style="{ color: selected === index ? selectedColor : color }">{{
        item.text
      }}</cover-view>
    </cover-view>
  </cover-view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { computed } from 'vue'
import { useTabs } from '@/stores'

const tabs = useTabs()
const selected = computed(() => tabs.getSelected)

const color = '#999999'
const selectedColor = '#333333'
const list = [
  {
    pagePath: '/pages/index/index',
    selectedIconPath: '../assets/images/grades_on.png',
    iconPath: '../assets/images/grades.png',
    text: '我的班级',
  },
  // {
  //   pagePath: '/pages/cate/index',
  //   selectedIconPath: '../images/tabbar_cate_on.png',
  //   iconPath: '../images/tabbar_cate.png',
  //   text: '分类',
  // },
  // {
  //   pagePath: '/pages/cart/index',
  //   selectedIconPath: '../images/tabbar_cart_on.png',
  //   iconPath: '../images/tabbar_cart.png',
  //   text: '购物车',
  // },
  {
    pagePath: '/pages/my/index',
    selectedIconPath: '../assets/images/my_on.png',
    iconPath: '../assets/images/my.png',
    text: '个人中心',
  },
]

function switchTab(index, url) {
  setSelected(index)
  Taro.switchTab({ url })
}

function setSelected(index) {
  tabs.setSelected(index)
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0rpx -2rpx 10rpx 0rpx rgba(0, 0, 0, 0.04);
}

.tab-bar-border {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  // height: 2rpx;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item cover-image {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 4rpx;
}

.tab-bar-item cover-view {
  font-size: 22rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #999999;
  line-height: 28rpx;
}
</style>
