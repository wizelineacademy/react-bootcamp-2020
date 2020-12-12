import '@testing-library/jest-dom/extend-expect'
import {render, screen, fireEvent } from "@testing-library/react"
import React from 'react'
import VideoContext from '../../providers/VideoContext'
import ListVideos from "./ListVideos"
import VideoCard from "../VideoCard/VideoCard"
describe("<ListVideos/>",()=>{

    test("Test favorite favoritesFlag false and rendering withing components",()=> {
        
        const changingg = true;
        const favoritesFlag= false;
        const videoMetaInfoTest= [
            {
              kind: "youtube#searchResult",
              etag: "o0Tx7BwU3fn95je2uZwrAjxCs3A",
              id: {
                kind: "youtube#video",
                videoId: "uLIs0j2WnlM"
              },
              snippet: {
                publishedAt: "2010-05-08T00:48:37Z",
                channelId: "UCfuBqPzLzbNWTXwqAil9kjA",
                title: "Gustavo Cerati - Crimen (Official VIdeo)",
                description:
                  'Escuchá Crimen en el álbum "Ahí Vamos" ▷ http://smarturl.it/AhiVamos Lo mejor de Cerati ACÁ ▷ https://smarturl.it/LoMejorDeCerati Mirá el video "Gustavo ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/uLIs0j2WnlM/default.jpg",
                    width: 120,
                    height: 90
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/uLIs0j2WnlM/mqdefault.jpg",
                    width: 320,
                    height: 180
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/uLIs0j2WnlM/hqdefault.jpg",
                    width: 480,
                    height: 360
                  }
                },
                channelTitle: "GustavoCeratiVEVO",
                liveBroadcastContent: "none",
                publishTime: "2010-05-08T00:48:37Z"
              }
            }];

        

        const userSessionTest = {
            user:"noSession"
        };

        const videoProppertiesTest =  {
            videoName: "One video Name",
            published: "Somedate",
            videoId : "Id1"
        }
        
        
        const mockValue = {
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest,
            videoMetaInfo : videoMetaInfoTest
        };
       
        render(
            <VideoContext.Provider value={mockValue}>
                <ListVideos/>
            </VideoContext.Provider>
        )
         
        expect(<VideoCard/>).toBeTruthy();
        
       
    })

    test("Test favorite favoritesFlag true and rendering withing components",()=> {
        
        const changinggTest = false;
        const favoritesFlagTest= true;
        const favoritesVideosArrayUserTest= new Array();
        const videoTest =   {
         
            videoId : "IdTest",
            videoName : "nameTest",
            imageVideo : "imageTest",
            published : "publishedTest",
            buttonText : "buttonTextTest"
          
      }

      
      favoritesVideosArrayUserTest.push(videoTest);
  

        const mockValue = {
            favoritesFlag : favoritesFlagTest,
            changingg : changinggTest,
            favoritesVideosArrayUser : favoritesVideosArrayUserTest
        };
       
        
       
        const {container} = render(
            <VideoContext.Provider value={mockValue}>
                <ListVideos/>
            </VideoContext.Provider>
        )
        expect(container.firstChild.classList.contains('grid-container')).toBe(true)
        expect(<VideoCard/>).toBeTruthy();
        expect(favoritesVideosArrayUserTest).toEqual(favoritesVideosArrayUserTest);
        expect (favoritesFlagTest).toBe(true);
       
    })



})