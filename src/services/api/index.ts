import { api } from "./api.constant";

export const loadCatsFromAPI = async (
  limit: number,
  page: number,
): Promise<any> => {
  const url = `/v1/images/search?limit=${limit}&page=${page}`;
  console.log("loadCatsFromAPI: " + url);
  const fetchResponse = (await api.get(url)).data;
  // const response = checkStatus(fetchResponse);
  return fetchResponse;
};
