import { baseUrl, payload } from "../../../config/dev.js";
import http from "k6/http";
import { check } from "k6";

export let loginToken;

export const postLogin = async () => {
  const urlLogin = baseUrl + "/login";
  const res = http.post(urlLogin, JSON.stringify(payload));
  loginToken = await res.json().object.idToken;
  check(res, {
    "is status 200": (/** @type {{ status: number; }}*/ r) => r.status == 200,
  });
  return loginToken;
};
