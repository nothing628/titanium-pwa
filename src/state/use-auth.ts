import { defineStore } from "pinia";
import {
  login as apiLogin,
  logout as apiLogout,
  getMe as apiGetMe,
} from "../helper/api/auth";

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
    async logout() {
      const accessToken = this.accessToken;
      const result = await apiLogout({ token: accessToken });

      if (result) {
        this.id = "";
        this.email = "";
        this.accessToken = "";
      }
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return Boolean(state.id);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "titanium:auth",
        storage: localStorage,
      },
    ],
  },
});

export default useAuthState;
