import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoPlayer from '../../pages/VideoPlayer/VideoPlayer';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';
import { data } from '../../mock/video';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test VideoPlayer Page',()=>{
   
    const mockValue = {
        video : {
            title: "",
            views: "",
            likes: "",
            dislikes: "",
            id: "",
            publishedDate: "",
            description: ""
          },
        videoList : data.items,
        userLogged: {
            userStatus: true,
            user: "cesar"
        }
    }
    test('Render VideoPlayer component',()=>{
        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <VideoPlayer/>
            </PageContext.Provider>
        </Router>

        );

        expect(<VideoPlayer/>).toBeTruthy();
    });
});
