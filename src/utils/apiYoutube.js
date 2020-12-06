import axios from "axios";

const KEY = "AIzaSyCxX3tGJbGYtOEzIf5JOlNU4qvKf_RSN10";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    maxResults: "20",
    part: "snippet",
    type: "video",
    key: KEY
  }
});
