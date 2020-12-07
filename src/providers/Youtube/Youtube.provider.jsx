import React, { useState, useContext } from 'react';

import { API_URL, API_KEY } from '../../constants';

const YoutubeContext = React.createContext(null);

async function callYoutubeApi(search) {
  const url = `${API_URL}?key=${API_KEY}&type=video&part=snippet&q=${search}&maxResults=10`; // `${API_URL}/${search}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.items;
}

function useYoutube() {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error(`Can't use "useYoutube" without an YoutubeContext!`);
  }
  return context;
}

function YoutubeProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);

  async function searchVideos(search) {
    const results = await callYoutubeApi(search);
    setVideos(results);
  }

  async function getVideo(videoId) {
    const results = await callYoutubeApi(videoId);
    const index = results.findIndex((v) => v.id.videoId === videoId);
    if (index !== -1) {
      setVideo(results[index]);
    }
  }

  return (
    <YoutubeContext.Provider value={{ videos, searchVideos, video, getVideo }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export { useYoutube };
export default YoutubeProvider;
