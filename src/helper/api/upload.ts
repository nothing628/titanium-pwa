import ky from "ky";
import { get } from "lodash";
import { API_MANGA } from "./base";

type CreateMangaParam = {
  title: string;
  description: string;
  token: string;
};

export async function createManga(param: CreateMangaParam) {
  try {
    const { description, title, token } = param;
    const response = await ky.post(API_MANGA, {
      json: {
        title,
        description,
      },
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();

    return {
      manga: get(responseJson, "manga", {}),
    };
  } catch (err) {
    //
  }
}

export async function uploadPage() {}
