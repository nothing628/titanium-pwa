import ky from "ky";
import { get } from "lodash";
import { API_MANGA } from "./base";

type GetMangaListParam = {
  page: number;
  perPage: number;
};

export async function getMangaList(param: GetMangaListParam) {
  try {
    const { page, perPage } = param;
    const response = await ky.get(API_MANGA, {
      searchParams: {
        page: page,
        perPage: perPage,
      },
    });
    const responseJson = await response.json();

    return {
      data: get(responseJson, "data", []),
      total: get(responseJson, "total", 0),
      page: get(responseJson, "page", 1),
      perPage: get(responseJson, "perPage", 0),
    };
  } catch (err) {
    //
  }
}
