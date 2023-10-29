<template>
  <!-- <view>
    <nut-button @click="goRequest">跳转接口测试页面</nut-button>
    <nut-button @click="goCss">跳转样式测试页面</nut-button>
    <nut-button @click="goPinia">跳转Pinia测试页面</nut-button>
    <nut-button @click="goNutUi">跳转NutUi测试页面</nut-button>
  </view> -->

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
          <text>{{ item.label }}</text>
          <text>{{ item.value }}</text>
        </view>
        <view class="people-item">邀请老师/家长</view>
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

  <nut-dialog
    no-cancel-btn
    title="温馨提示"
    :content="dialogContent"
    v-model:visible="visible"
    @ok="onOk"
  />
</template>

<script lang="ts" setup>
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
  }

  return
}

onMounted(() => {
  Taro.login({
    success: function (res) {
      if (res.code) {
        console.log('res', res)
        //发起网络请求
        // Taro.request({
        //   url: 'https://test.com/onLogin',
        //   data: {
        //     code: res.code,
        //   },
        // })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    },
  })
})
</script>

<style lang="scss">
.grades-info {
  display: flex;
  flex-direction: row;
  padding: 16px 32px;

  .image {
    width: 80px;
    height: 80px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;

    & text:first-child {
      margin-bottom: 8px;
    }
  }
}

.people-info {
  display: flex;
  justify-content: space-evenly;
  margin: 16px;
  border-radius: 8px;
  background-color: #1296db;
  padding: 8px 0;
  color: #ffff;

  .people-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:not(:last-child)::before {
      content: '';
      width: 2px;
      height: 20px;
      background: #eee;
      position: absolute;
      top: 10px;
      left: 53px;
      margin: auto;
    }
  }
}

.grades-list {
  display: flex;
  flex-direction: row;
}

.grades-item {
  flex: 1;
  margin: 16px;
  padding: 32px 16px;
  border-radius: 8px;
  text-align: center;
  color: #ffff;
  background-color: #1296db;
}

.application-list {
  display: flex;
  flex-wrap: wrap;
  margin: 16px;

  .application-item {
    height: 60px;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  .application-image {
    width: 45px;
    height: 45px;
    margin-bottom: 8px;
  }
}
</style>
