import { accountLoginRequest } from "@/service"
import { defineStore } from "pinia"

const useLoginStore = defineStore("login", {
  state: () => ({
    success: false
  }),
  actions: {
    async fetchAccountLoginRequest(user) {
      const res = await accountLoginRequest(user)
      const { success, data } = res
      localStorage.setItem('token', JSON.stringify(data))
      this.success = success
    }
  }
})

export default useLoginStore