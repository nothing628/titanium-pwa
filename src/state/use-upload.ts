import { defineStore } from "pinia";
import useAuthState from "./use-auth";
import { createManga, uploadPage } from "../helper/api/upload";

type UploadState = {
  isLoading: boolean;
  isComplete: boolean;
  pages: any[];
  id: string;
  manga: any;
};

type SubmitParam = {
  title: string;
  description: string;
};

const useUploadState = defineStore("upload", {
  state: (): UploadState => ({
    isLoading: false,
    isComplete: false,
    pages: [],
    id: "",
    manga: null,
  }),
  actions: {
    setIsComplete(complete: boolean) {
      this.isComplete = complete;
    },
    async submitManga(param: SubmitParam) {
      this.isLoading = true;
      this.isComplete = false;

      const { description, title } = param;
      const token = this.token;
      const result = await createManga({
        description: description,
        title: title,
        token: token,
      });

      if (result) {
        const manga = result.manga;
        this.id = manga.id;
        this.manga = manga;

        this.isComplete = true;
      }

      this.isLoading = false;
    },
    async uploadPage() {},
  },
  getters: {
    token: () => {
      const auth = useAuthState();

      return auth.accessToken;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "titanium:upload",
        storage: localStorage,
      },
    ],
  },
});

export default useUploadState;
