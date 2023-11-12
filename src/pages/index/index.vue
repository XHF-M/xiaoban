<template>
  <div class="container">
    <view>
      <view v-if="hasGrades" class="grades-info">
        <image class="image" :src="grades.avatar" />
        <view class="info">
          <text>{{ grades.name }}</text>
          <text>创建者：{{ grades.creator }}</text>
        </view>
      </view>
      <view v-else class="grades-list">
        <view class="grades-item" v-for="(item, index) in createGradesMap" :key="index">
          <text>{{ item.text }}</text>
        </view>
      </view>

      <view>
        <view v-if="hasGrades" class="people-info">
          <view class="people-item" v-for="(item, index) in peopleProp" :key="index">
            <text class="title">{{ item.label }}</text>
            <text class="people-num">{{ item.value }}</text>
          </view>
          <view class="people-item">
            <image class="icon" src="../../assets/svg/add_user.svg" mode="aspectFit"></image>
            <text class="title mt6">邀请老师/家长</text>
          </view>
        </view>
      </view>

      <view class="application-list">
        <view
          class="application-item"
          v-for="(item, index) in applicationList"
          :key="index"
          @click="handleClick(item)"
        >
          <image class="application-image" :src="item.icon" mode="aspectFit"></image>
          <text>{{ item.label }}</text>
        </view>
      </view>
    </view>

    <view class="swiper-container">
      <nut-swiper :pagination-visible="true" pagination-color="#478ef2" auto-play="3000">
        <nut-swiper-item v-for="(image, index) in swiperImages" :key="index">
          <img :src="image" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>

    <nut-dialog
      no-cancel-btn
      title="温馨提示"
      :content="dialogContent"
      v-model:visible="visible"
      @ok="onOk"
    />
  </div>
</template>

<script lang="ts" setup>
// import Taro from '@tarojs/taro'
import Taro from '@tarojs/taro'
import { ref, onMounted, computed } from 'vue'

// const goRequest = () => {
//   Taro.navigateTo({ url: '/pages/featureA/request/index' })
// }
// const goCss = () => {
//   Taro.navigateTo({ url: '/pages/featureA/css/index' })
// }
// const goPinia = () => {
//   Taro.navigateTo({ url: '/pages/featureA/index/index' })
// }
// const goNutUi = () => {
//   Taro.navigateTo({ url: '/pages/featureA/nutui/index' })
// }

const grades = ref({
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  name: '小班',
  creator: 'admin',
  stuNumber: 0,
  teaNumber: 0,
})

const createGradesMap = [
  {
    text: '我是老师/家长',
    role: 'teacher',
  },
  {
    text: '我是学生',
    role: 'studes',
  },
]

const peopleNumMap = {
  学生: 'stuNumber',
  家长: 'teaNumber',
}

const applicationList = [
  {
    icon: require('../../assets/svg/clock.svg'),
    label: '打卡',
    isOpen: true,
    toPageUrl: '/pages/task/clockInTask/clockInTask',
  },
  {
    icon: require('../../assets/svg/notifications.svg'),
    label: '通知',
    isOpen: false,
  },
  {
    icon: require('../../assets/svg/Information.svg'),
    label: '信息收集',
    isOpen: false,
  },
  {
    icon: require('../../assets/svg/seniority.svg'),
    label: '接龙',
    isOpen: false,
  },
  {
    icon: require('../../assets/svg/slang.svg'),
    label: '红花榜',
    isOpen: false,
  },
]

const swiperImages = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]

const visible = ref(false)
const dialogContent = ref('')

const hasGrades = computed(() => {
  return grades.value
})

const peopleProp = computed(() => {
  const map = Object.keys(peopleNumMap).map((key) => {
    return { label: key, value: grades.value[peopleNumMap[key]] }
  })
  return map
})

const onOk = () => {
  visible.value = false
}

const handleClick = (item) => {
  if (!item.isOpen) {
    dialogContent.value = `${item.label}功能暂未开通，敬请期待！`
    visible.value = true
  } else {
    Taro.navigateTo({
      url: item.toPageUrl,
    })
  }

  return
}

onMounted(() => {
  // Taro.login({
  //   success: function (res) {
  //     if (res.code) {
  //       console.log('res', res)
  //       //发起网络请求
  //       // Taro.request({
  //       //   url: 'https://test.com/onLogin',
  //       //   data: {
  //       //     code: res.code,
  //       //   },
  //       // })
  //     } else {
  //       console.log('登录失败！' + res.errMsg)
  //     }
  //   },
  // })
})
</script>

<style lang="scss">
.container {
  height: 100vh;
  background: #f2f6fa;
}

.grades-info {
  display: flex;
  flex-direction: row;
  padding: 32rpx 64rpx;
  background-color: #fff;
  font-size: 36rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 44rpx;

  .image {
    width: 160rpx;
    height: 160rpx;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 32rpx;

    & text:first-child {
      margin-bottom: 16rpx;
    }
  }
}

.people-info {
  display: flex;
  justify-content: space-evenly;
  margin: 32rpx;
  border-radius: 16rpx;
  background-color: #478ef2;
  padding: 16rpx 0;
  color: #ffff;

  .people-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .title {
      font-size: 28rpx;
      color: #f9f8f8;
    }

    .people-num {
      margin-top: 12rpx;
      font-size: 32rpx;
    }

    &:not(:last-child)::before {
      content: '';
      width: 4rpx;
      height: 60rpx;
      background: #f9f8f8;
      position: absolute;
      top: 10rpx;
      left: 106rpx;
      margin: auto;
    }
  }
}

.icon {
  width: 36rpx;
  height: 36rpx;
}

.grades-list {
  display: flex;
  flex-direction: row;
}

.grades-item {
  flex: 1;
  margin: 32rpx;
  padding: 64rpx 32rpx;
  border-radius: 16rpx;
  text-align: center;
  color: #ffff;
  background-color: #478ef2;
}

.application-list {
  display: flex;
  flex-wrap: wrap;
  margin: 32rpx;
  background-color: #fff;
  border-radius: 24rpx;
  padding: 24rpx;

  .application-item {
    width: 20%;
    height: 120rpx;
    text-align: center;
    font-size: 24rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .application-image {
    width: 90rpx;
    height: 90rpx;
    margin-bottom: 16rpx;
  }
}
.swiper-container {
  padding: 0 32rpx;

  .nut-swiper {
    border-radius: 24rpx;
  }

  .nut-swiper-item {
    width: 100%;
    line-height: 150rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
