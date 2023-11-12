<template>
  <div>
    <div class="container">
      <div class="avatar-container">
        <div class="avatar"></div>
        <div class="user-info">用户11</div>
        <nut-button v-if="userInfo" class="login-btn" plain type="primary">登录</nut-button>
      </div>
      <div class="operation-list">
        <div class="item-content" @click="handleOperat('info')">
          <div class="operation-name">
            <image
              class="oper-icon mr16"
              src="../../assets/svg/btn_personal_new.svg"
              mode="aspectFit"
            />
            <p>消息中心</p>
          </div>
          <image class="enter-icon" src="../../assets/svg/btn_enter.svg" mode="aspectFit" />
        </div>

        <div class="item-contents">
          <div class="item-content" @click="handleOperat('guide')">
            <div class="operation-name">
              <image
                class="oper-icon mr16"
                src="../../assets/svg/btn_personal_guide.svg"
                mode="aspectFit"
              />
              <p>操作指引</p>
            </div>
            <image class="enter-icon" src="../../assets/svg/btn_enter.svg" mode="aspectFit" />
          </div>
          <div class="item-content" @click="handleOperat('about')">
            <div class="operation-name">
              <image
                class="oper-icon mr16"
                src="../../assets/svg/btn_personal_about.svg"
                mode="aspectFit"
              />
              <p>关于我们</p>
            </div>
            <image class="enter-icon" src="../../assets/svg/btn_enter.svg" mode="aspectFit" />
          </div>
        </div>

        <div class="item-content" @click="handleLogOut">
          <div class="operation-name">
            <image
              class="oper-icon mr16"
              src="../../assets/svg/btn_personal_login.svg"
              mode="aspectFit"
            />
            <p>退出登录</p>
          </div>
          <image class="enter-icon" src="../../assets/svg/btn_enter.svg" mode="aspectFit" />
        </div>
      </div>
    </div>

    <nut-dialog
      no-cancel-btn
      title="温馨提示"
      :content="dialogContent"
      v-model:visible="visible"
      @ok="onOk"
    />
  </div>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref, computed } from 'vue'
import { useLogin } from '@/stores'

const user = useLogin()
const userInfo = computed(() => user.login)

const visible = ref(false)
const dialogContent = ref('')

const onOk = () => {
  visible.value = false
}

const handleOperat = (type: string) => {
  const typeMap = {
    info: '消息中心',
    guide: '操作指引',
    about: '关于我们',
  }
  dialogContent.value = `${typeMap[type]}功能暂未开通，敬请期待！`
  visible.value = true
}

const handleLogOut = () => {
  Taro.showModal({
    title: '提示',
    content: '是否退出登录？',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },
  })
}
</script>
<style lang="scss">
.container {
  height: 100vh;
  background: #f2f6fa;
}

.avatar-container {
  background-color: #fff;
  text-align: center;
  color: #fff;
  padding: 80rpx 0 32rpx;
  .avatar {
    width: 128rpx;
    height: 128rpx;
    border-radius: 50%;
    background-color: #eee;
    margin: auto;
  }

  .user-info {
    font-size: 36rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 44rpx;
    margin: 16rpx 0;
  }

  .login-btn {
    margin-top: 16rpx;
    height: 68rpx;
    border-radius: 48rpx;
  }
}

.operation-list {
  padding: 24rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 34rpx;

  & .item-content:last-child {
    margin-bottom: 0;
  }

  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-radius: 16rpx;
    padding: 33rpx 24rpx 33rpx 40rpx;
    margin-bottom: 16rpx;
  }

  .item-contents {
    display: flex;
    flex-direction: column;
    margin-bottom: 16rpx;
    border-radius: 16rpx;

    & .item-content {
      margin-bottom: 0;
    }

    & .item-content:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    & .item-content:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  .operation-name {
    display: flex;
    align-items: center;
  }

  .oper-icon {
    width: 32rpx;
    height: 32rpx;
  }

  .enter-icon {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
