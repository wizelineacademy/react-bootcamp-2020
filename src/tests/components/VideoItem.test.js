import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import store from '../../redux/store/store';
import { Provider } from 'react-redux';
import VideoItem from '../../components/VideoItem';

console.error = jest.fn();

beforeEach(() => {
    console.error.mockClear();
});

describe('Testing on component <VideoItem />', () => {
    test('Render should throw an error if prop video is missing', () => {
        const wrapper = render(
            <Provider store={store}>
                <VideoItem />
            </Provider>
        );
        expect(console.error).toHaveBeenCalledTimes(1);
    });
});
