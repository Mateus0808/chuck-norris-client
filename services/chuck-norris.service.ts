import { apiSetup } from "./api-setup.service";

const CHUCK_NORRIS_PATH = "/chuck-norris-fact";

export const fetchRandomJoke = async (category?: string) => {
  let url = `${CHUCK_NORRIS_PATH}/random`;

  if (category) url = `${url}?category=${category}`;

  const data = await apiSetup.get(url);
  return data;
};

export const fetchJokeByFreeText = async (query: string) => {
  try {
    const url = `${CHUCK_NORRIS_PATH}/free-text?query=${query}`;

    const data = await apiSetup.get(url);
    return data;
  } catch (err: any) {
    console.log("Failed to retrieve", err);
    return err.response;
  }
};

export const fetchCategories = async () => {
  const url = `${CHUCK_NORRIS_PATH}/categories`;

  const data = await apiSetup.get(url);
  return data;
};
