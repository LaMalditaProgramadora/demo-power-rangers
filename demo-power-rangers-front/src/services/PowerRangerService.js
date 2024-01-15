import httpClient from "../utils/HttpClient";

export const getMyTop5PowerRangersSeasons = async () => {
  const data = await httpClient
    .get("/my-top-5-power-rangers-seasons")
    .then((v) => v.data);
  return data;
};
