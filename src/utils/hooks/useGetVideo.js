import { useState, useEffect } from 'react';
import * as Constants from '../constants';

// const API_URL = 'http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10';

function useGetVideo(videoId) {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    async function getVideo() {
      try {
        if (videoId === '') return null;
        // console.log(videoId);

        const API_URL = Constants.BASE_API_URL_VIDEO.replace(
          '<VIDEO_ID>',
          videoId
        ).replace('<API_KEY>', process.env.REACT_APP_API_KEY);
        // console.log(API_URL);

        const response = await fetch(API_URL);
        const jsonResult = await response.json();

        // console.log(jsonResult);
        setVideoInfo(jsonResult);
      } catch (error) {
        console.error('Error retrieving results: ', error);
      }
    }
    getVideo();
  }, [videoId]);

  if (videoInfo !== null) {
    // console.log(videoInfo);
    return videoInfo.items[0];
  }
  return null;
}

export { useGetVideo };

/*
const jsonResult = `{
    "kind":"youtube#videoListResponse",
    "etag":"F1PxZ4gTVIMzPcTfyheZgRYptKA",
    "items":[
       {
          "kind":"youtube#video",
          "etag":"aA4-m4SQVPpgMcasl3BDwvf5wEA",
          "id":"iwCtid1GDms",
          "snippet":{
             "publishedAt":"2020-12-03T19:00:06Z",
             "channelId":"UCo_q6aOlvPH7M-j_XGWVgXg",
             "title":"SURFING WITH WORLD CHAMPION ITALO FERREIRA",
             "description":"STAY PSYCHED MERCHANDISE",
             "thumbnails":{
                "default":{
                   "url":"https://i.ytimg.com/vi/iwCtid1GDms/default.jpg",
                   "width":120,
                   "height":90
                },
                "medium":{
                   "url":"https://i.ytimg.com/vi/iwCtid1GDms/mqdefault.jpg",
                   "width":320,
                   "height":180
                },
                "high":{
                   "url":"https://i.ytimg.com/vi/iwCtid1GDms/hqdefault.jpg",
                   "width":480,
                   "height":360
                },
                "standard":{
                   "url":"https://i.ytimg.com/vi/iwCtid1GDms/sddefault.jpg",
                   "width":640,
                   "height":480
                },
                "maxres":{
                   "url":"https://i.ytimg.com/vi/iwCtid1GDms/maxresdefault.jpg",
                   "width":1280,
                   "height":720
                }
             },
             "channelTitle":"Jamie O'Brien",
             "tags":[
                "PIPELINE",
                "NORTH SHORE",
                "surfing",
                "job vlogs",
                "surf trip",
                "jamie O'Brien",
                "redbull surfing",
                "wsl",
                "catch surf",
                "pro surfer",
                "surfing videos",
                "big waves",
                "big wave surfing",
                "redbull",
                "beach",
                "professional surfing",
                "banzai pipeline",
                "vlog",
                "pro surfing",
                "kelly slater",
                "john john florence",
                "travel",
                "surfline",
                "jamie obrien",
                "hawaii",
                "river",
                "river surfing",
                "REDBULL",
                "REDBULL SURFING",
                "pipeline masters",
                "Waimea bay",
                "Big waves",
                "ITALO FERREIRA"
             ],
             "categoryId":"17",
             "liveBroadcastContent":"none",
             "localized":{
                "title":"SURFING WITH WORLD CHAMPION ITALO FERREIRA",
                "description":"STAY PSYCHED MERCHANDISE"
             },
             "defaultAudioLanguage":"en"
          },
          "contentDetails":{
             "duration":"PT12M44S",
             "dimension":"2d",
             "definition":"hd",
             "caption":"false",
             "licensedContent":true,
             "contentRating":{
                
             },
             "projection":"rectangular"
          },
          "statistics":{
             "viewCount":"105667",
             "likeCount":"4533",
             "dislikeCount":"49",
             "favoriteCount":"0",
             "commentCount":"394"
          },
          "player":{
             "embedHtml":"<iframe width='480' height='270' src='//www.youtube.com/embed/iwCtid1GDms' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
          }
       }
    ],
    "pageInfo":{
       "totalResults":1,
       "resultsPerPage":1
    }
 }`;
// console.log(jsonResult);
*/
