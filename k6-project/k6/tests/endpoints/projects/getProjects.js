import http from "k6/http";
import { Trend } from "k6/metrics";
import { check, sleep } from "k6";
import { postLogin } from "../login/postLogin.js";
import { baseUrl, headers } from "../../../config/dev.js";

const getTestInfoLatency = new Trend("getTest_duration");

export default async function () {
  const urlProjects = baseUrl + "/projects";
  const loginToken = await postLogin();
  let res = http.get(urlProjects, headers(loginToken));

  getTestInfoLatency.add(res.timings.duration);

  check(res, {
    "status was 200": (r) => r.status == 200,
  });
  sleep(1);
}
