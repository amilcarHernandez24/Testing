export const baseUrl =
  "https://b02a6jye04.execute-api.us-east-1.amazonaws.com/dev";

export const payload = {
  email: "automationtmtsa@gmail.com",
  password: "Password.123",
};

export const headers = (loginToken) => ({
  headers: {
    Authorization: `Bearer ${loginToken}`,
    "Content-Type": "application/json",
  },
});

export const options = {
  vus: 1,
  duration: "3s",
};

export const smokeWorkload = {
  executor: "shared-iterations",
  iterations: 5,
  vus: 1,
};

export const thresholdsSettings = {
  http_req_failed: ["rate<0.01"], // http errors should be less than 1%
  http_req_duration: ["p(95)<10000"], // 95% of requests should be below 10s
};

export const breakingWorkload = {
  executor: "ramping-vus",
  startVUs: 0,
  stages: [
    { duration: "5s", target: 10 },
    { duration: "10s", target: 10 },
    { duration: "5s", target: 0 },
  ],
};
