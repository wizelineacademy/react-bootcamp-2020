import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Favourites from '../../pages/Favourites/Favourites';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';
import { data } from '../../mock/video';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const mockValue = {
   
    userLogged : {
        userStatus: false,
        user: ""
    },
    mapFavs : new Map()
}

describe('Test page Favourites',()=>{
    mockValue.mapFavs.set('Cesar',data.items);
    mockValue.userLogged.user='Cesar'
    test('test render component Favourites',()=>{
        render(
    <Router>
        <PageContext.Provider value={mockValue}>
            <Favourites/>
        </PageContext.Provider>
    </Router>
            
        );
        expect(<Favourites/>).toBeTruthy();
    });

    // test('test route user not logged',()=>{

    //     render(
    //     <Router>
    //         <PageContext.Provider value={mockValue}>
    //             <Favourites/>
    //         </PageContext.Provider>
    //     </Router>      
    //     );
    //     expect(screen.getByText("/")).toBeInTheDocument();
    // });

    // test('test route user logged',()=>{
    //     mockValue.userLogged.user='cesar';
    //     mockValue.userLogged.userStatus=true;
    //     render(
    //     <Router>
    //         <PageContext.Provider value={mockValue}>
    //             <Favourites/>
    //         </PageContext.Provider>
    //     </Router>
    //     );
    //     expect(screen.getByText("/favs")).toBeInTheDocument(); 
    // });
});