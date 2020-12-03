/* global gapi */
import { useState, useEffect, useContext } from 'react';
import { StateContext } from '../State';

// Custom Hook
const useFetch = () => {
  
  const [VideoList, setVideoList] = useState(null);
  const { SearchVideo } = useContext(StateContext);

  useEffect(() => {
      try {
        setTimeout(() => {
          gapi.client.load("youtube", "v3").then( () => {
            gapi.client.setApiKey("AIzaSyDuNIHsx3MbUN3XHfHKgQ0f0FeatIsQtIk")
            gapi.client.youtube.search.list({
              part: "snippet",
              type: "video",
              q: SearchVideo ? SearchVideo : " ",
              maxResults: 20,
              order: "ViewCount",
              publishedAfter: "2020-01-01T00:00:00Z"
            }).then((response) => {
                const { result: { items } } = response;
                setVideoList(items);
            })
          })
        }, 1000);
      } catch (error) {
        console.error('Error :( ', error);
      }
  }, [SearchVideo]);

  return { VideoList };
}

export { useFetch };
