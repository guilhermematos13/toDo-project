import axios from "axios";

export const api = axios.create({
    baseURL:'https://63ec39d1be929df00ca8011b.mockapi.io/api/todo'
})