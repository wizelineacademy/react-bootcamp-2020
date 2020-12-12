import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';
import App from '../../components/App/App';
import waitForExpect from 'wait-for-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { data } from '../../mock/video';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test app component',()=>{

    test('Render app component',()=>{
        render(
        <Router>
             <App/>
        </Router>
           
        );

        expect(<App/>).toBeTruthy();
    });
});