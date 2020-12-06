import axios from "axios";

const KEY = "AIzaSyCzZtUxQroQmSDWl_ul_Ym24ADEl_9by1w";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    maxResults: "20",
    part: "snippet",
    type: "video",
    key: KEY
  }
});
