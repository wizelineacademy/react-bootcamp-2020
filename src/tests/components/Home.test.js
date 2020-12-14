import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/Home/Home';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';
import waitForExpect from 'wait-for-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { data } from '../../mock/video';
import { BrowserRouter as Router } from 'react-router-dom';

const setVideoListMock = jest.fn();
const mockValue = {
    videoList : data.items,
    setVideoList : setVideoListMock,
    userLogged : {
        userStatus: false,
        user: ""
    }
}

describe('Test page Home',()=>{
    
    
    var mock = new MockAdapter(axios);
    test('Home Render',()=>{

        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <Home />
            </PageContext.Provider>
        </Router>

            
        );
        expect(<Home />).toBeTruthy();
    });

    test('test response if video list is empty', async ()=>{ 
        mockValue.videoList=[];
        mock.onGet("/search").reply(200,data);
        render(
            <PageContext.Provider value={mockValue}>
                 <Home />
            </PageContext.Provider>
        );
        await waitForExpect(() => {
            expect(setVideoListMock).toBeCalledWith(data.items);
        });    

    });

    test('test H3 with true', ()=>{ 
       mockValue.userLogged.userStatus = true;
       mockValue.userLogged.user = 'Cesar';
        render(
            <PageContext.Provider value={mockValue}>
                 <Home />
            </PageContext.Provider>
        );
      
        expect(screen.getByText("Bienvenido Cesar")).toBeInTheDocument();
    });

});