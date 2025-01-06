import axios from "axios";

//axios.defaults.baseURL = "https://albumtalk-api-9fb1bb849439.herokuapp.com/";
axios.defaults.baseURL = "api.skivsnack.se/";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();