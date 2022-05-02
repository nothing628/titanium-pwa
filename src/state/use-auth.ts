import { defineStore } from "pinia";
import { login as apiLogin, getMe as apiGetMe } from "../helper/api/auth";

const useAuthState = defineStore("auth", {
  state: () => ({
    id: "",
    email: "",
    accessToken: "",
  }),
  actions: {
    async login(email: string, password: string) {
      const result = await apiLogin({
        email,
        password,
      });

      if (result) {
        const userInfo = await apiGetMe({ token: result.token });

        if (userInfo) {
          this.id = userInfo.id;
          this.email = userInfo.email;
          this.accessToken = result.token;
        }
      }
    },
    async logout() {},
  },
  getters: {
    isLoggedIn: (state) => {
      return Boolean(state.id);
    },
  },
});

export default useAuthState;
