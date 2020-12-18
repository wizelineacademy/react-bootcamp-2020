import React from 'react';
import renderer from 'react-test-renderer'
import App from './components/App';
import { State } from './utils/State';
import { ConfigState } from './utils/ConfigState';
import { VideoState } from './utils/VideoState';

describe('Test index', () => {
    it('Test index with Snapshot', () =>{
        const tree = renderer.create(
        <State>
            <ConfigState>
                <VideoState>
                    <App />
                </VideoState>
            </ConfigState>
        </State>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
