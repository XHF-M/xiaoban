import { defineStore } from 'pinia'

export interface user {
  openId: string
  userName: string
  avatarUrl: string
}

const useLogin = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'login',
  /** 状态 */
  state: () => ({
    user: {} as user,
  }),
  actions: {
    login(user: user) {
      this.user = user
    },
  },
})
export { useLogin }
