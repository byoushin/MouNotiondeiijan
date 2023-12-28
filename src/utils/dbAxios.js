import axios from "axios";
import API_KEY from "./env";

const baseURL = "https://api.notion.com/v1/";
const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

const dbAxios = axios.create({
  baseURL: baseURL,
  headers: headers,
});

export default dbAxios;
