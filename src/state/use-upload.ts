import { defineStore } from "pinia";

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
    async submitManga(param: SubmitParam) {
      const { description, title } = param;
    },
    async uploadPage() {},
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
