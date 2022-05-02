import { defineStore } from "pinia";
import { getMangaList } from "../helper/api/manga";

type MangaState = {
  isLoading: boolean;
  listManga: any[];
  page: number;
  perPage: number;
  total: number;
};

const useMangaState = defineStore("manga", {
  state: (): MangaState => ({
    isLoading: true,
    listManga: [],
    page: 1,
    perPage: 15,
    total: 0,
  }),
  actions: {
    async loadManga() {
      const page = this.page;
      const perPage = this.perPage;

      this.isLoading = true;

      try {
        const result = await getMangaList({ page: page, perPage: perPage });

        if (result) {
          this.listManga = result.data;
          this.page = result.page;
          this.perPage = result.perPage;
          this.total = result.total;
        }
      } catch (err) {
        // TODO: show error
      }

      this.isLoading = false;
    },
    async loadPage(page: number) {
      this.page = page;
      await this.loadManga();
    },
    async loadPerPage(perPage: number) {
      this.perPage = perPage;
      await this.loadManga();
    },
  },
  getters: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "titanium:manga",
        storage: localStorage,
      },
    ],
  },
});

export default useMangaState;
