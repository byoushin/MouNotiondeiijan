import axios from "axios";
import API_KEY from "./env";

const BASE_URL = "https://api.notion.com/v1/";
const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

const config = {
  baseURL: BASE_URL,
  headers: headers,
};
const dbAxios = axios.create(config);

export default dbAxios;
