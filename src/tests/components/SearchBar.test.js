import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';
import waitForExpect from 'wait-for-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { data } from '../../mock/video';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('SearchBar test',()=>{

    var mock = new MockAdapter(axios);

    const setSearchTextMock = jest.fn();
    const setVideoListMock = jest.fn();
    const mockValue = {
        searchText : "",
        setSearchText : setSearchTextMock,
        setVideoList : setVideoListMock,
    }

    test('Render components in DOM',()=>{
        const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <SearchBar />
            </PageContext.Provider>

            );
        expect(screen.getByPlaceholderText('Search..')).toBeInTheDocument();
        expect(container.querySelector("button")).toBeInTheDocument();
    });
    

});