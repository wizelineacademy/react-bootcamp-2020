import axios from 'axios';

const KEY = 'AIzaSyBUEIwqTfgjOFfTej5Ad7riSZo_vWyJIHg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
});