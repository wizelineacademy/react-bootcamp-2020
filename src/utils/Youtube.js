import axios from "axios";

//const API_KEY = "AIzaSyAUl9bRka5hDTPjavDgGwDeBc9Fkqc7_yY";
// AIzaSyCzZtUxQroQmSDWl_ul_Ym24ADEl_9by1w
// AIzaSyCNoOErljI06cfv52iwogm4651bBwx
const KEY = "AIzaSyB7bFSwZazNzpCapLfbxQf3kUBr_n283ss";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    type: "video",
    key: KEY
  }
});
