import axios from "axios";

const KEY = "AIzaSyBd8dZ1ifnfs2BoYmUmembIydMfctl2lRU";

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
  return axiosInstance.get("/search", { params });
}
