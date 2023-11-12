<template>
  <div class="task-container">
    <view class="calendar-wrapper">
      <nut-calendar
        :poppable="false"
        :default-value="date"
        :is-auto-back-fill="true"
        :show-title="false"
        :show-sub-title="false"
        @choose="setChooseValue"
      >
      </nut-calendar>
    </view>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const state = reactive({
  date: '2022-07-08',
})
const setChooseValue = (param) => {
  state.date = param[3]
}

const { date } = toRefs(state)
</script>
<style lang="scss">
.task-container {
  padding: 24rpx;
  height: 100vh;
  background: #f2f6fa;
}

.calendar-wrapper {
  display: flex;
  width: 100%;
  height: 800rpx;
  overflow: hidden;
}

.nut-calendar
  .nut-calendar-content
  .calendar-months-panel
  .calendar-month-con
  .calendar-month-day-active
  .calendar-curr-tip-curr {
  visibility: unset !important;
}
</style>
