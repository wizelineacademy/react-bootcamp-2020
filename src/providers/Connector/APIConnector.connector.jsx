import axios from "axios";

const KEY = 'AIzaSyBvk50dGexx4FfcJZNVHVlfE7brR6ObUHg';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snipet',
        maxResults: 10,
        key: KEY
    }
})