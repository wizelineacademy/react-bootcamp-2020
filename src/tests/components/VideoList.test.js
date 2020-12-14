import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoList from '../../components/VideoList/VideoList';
import VideoCard from '../../components/Videocard/VideoCard';
import { BrowserRouter as Router } from 'react-router-dom';
import PageContext from '../../providers/Context/PageContext';
import React from 'react';
import { data } from '../../mock/video';

describe('Test videoList component',()=>{
    const videosList = data.items;
    const mockValue = {
        searchText : "",
        setSearchText : jest.fn(),
    }
    test('render component with properties',()=>{
        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <VideoList videos={videosList}/>
            </PageContext.Provider>
        </Router>


            );
        expect(<VideoCard/>).toBeTruthy();
        
    });

});