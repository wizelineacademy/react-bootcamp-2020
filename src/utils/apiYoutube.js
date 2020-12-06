import axios from "axios";

const KEY = "AIzaSyDDZiO2SQC39TBe78GMG3hVrO1yMLhEeMQ";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    maxResults: "20",
    part: "snippet",
    type: "video",
    key: KEY
  }
});
