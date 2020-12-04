import React from 'react'
import { VideoGrid, WelcomeDisplay,NotContentDisplay } from './VideoListGrid.styles'

const VideoListGrid= ({children,welcomeMessage,listSize,emptyMessage})=> {
   return (
      <div>
         <WelcomeDisplay>{welcomeMessage}</WelcomeDisplay>
         <VideoGrid listSize={listSize}>
           {children}
         </VideoGrid>
         <NotContentDisplay>
            {!listSize &&listSize===0 
            ?emptyMessage
            :null
            }
         </NotContentDisplay>
      </div>
   )

}
export {VideoListGrid}
