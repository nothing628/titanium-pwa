import ky from "ky";
import { get } from "lodash";
import { API_AUTH } from "./base";

type LoginParam = {
  email: string;
  password: string;
};

type GetMeParam = {
  token: string;
};

export async function login(param: LoginParam) {
  try {
    const { email, password } = param;
    const response = await ky.post(API_AUTH, {
      json: {
        email,
        password,
      },
    });
    const responseJson = await response.json();

    return {
      expires_at: get(responseJson, "accessToken.expires_at", ""),
      type: get(responseJson, "accessToken.type", ""),
      token: get(responseJson, "accessToken.token", ""),
    };
  } catch (err) {
    //
  }
}

export async function getMe(param: GetMeParam) {
  try {
    const { token } = param;
    const response = await ky.get(API_AUTH + "/me", {
      headers: {
        authorization: `Bearer ` + token,
      },
    });
    const responseJson = await response.json();

    return {
      id: get(responseJson, "user.id", ""),
      email: get(responseJson, "user.email", ""),
    };
  } catch (err) {
    //
  }
}
