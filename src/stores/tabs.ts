import { defineStore } from 'pinia'

const useTabs = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'tabs',
  /** 状态 */
  state: () => ({
    selected: 0,
  }),
  getters: {
    getSelected: (state) => state.selected,
  },
  actions: {
    setSelected(index: Number) {
      this.selected = index
    },
  },
})
export { useTabs }
