import axios from "axios";

//const API_KEY = "AIzaSyAUl9bRka5hDTPjavDgGwDeBc9Fkqc7_yY";
// AIzaSyCzZtUxQroQmSDWl_ul_Ym24ADEl_9by1w
// AIzaSyCNoOErljI06cfv52iwogm4651bBwx
const KEY = "AIzaSyB7bFSwZazNzpCapLfbxQf3kUBr_n283ss";
/*const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 20,
    type: "video",
    key: KEY
  }
});
*/

export const search = params => {
  const axiosInstance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: "snippet",
      maxResults: 20,
      type: "video",
      key: KEY
    }
  });
  return axiosInstance.get("/search", {
    params
  });
}