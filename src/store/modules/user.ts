import { defineStore } from "pinia";

export interface UserInfo {
  token: string
  userInfo: any;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {},
    token: ''
  }),
  actions: {
  }
});
