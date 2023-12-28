import axios from "axios";
import API_KEY from "./env";

const createDbAxios = (path) => {
  const baseURL = `https://api.notion.com/v1/${path}`;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  };

  const instance = axios.create({
    baseURL: baseURL,
    headers: headers,
  });

  return instance;
};

export default createDbAxios;
