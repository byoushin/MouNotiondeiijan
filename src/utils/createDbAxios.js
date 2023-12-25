import axios from "axios";
import API_KEY from "./env";

const createDbAxios = (databaseId) => {
  const baseURL = `https://api.notion.com/v1/databases/${databaseId}`;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Notion-Version": "2022-06-28",
  };

  const instance = axios.create({
    baseURL: baseURL,
    headers: headers,
  });

  return instance;
};

export default createDbAxios;
