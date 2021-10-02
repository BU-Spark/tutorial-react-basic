import { Asset } from "./types";

export function getAssets(limit: number, offset: number): Promise<Asset[]> {
  var requestOptions = {
    method: "GET",
  };
  return fetch(
    `https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`,
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: Asset[] }>;
    })
    .then((data) => {
      return data.data;
    });
}
