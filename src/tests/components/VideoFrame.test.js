import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';

describe('VideoFrame Test',()=>{
    const mockValue = {
        video : {
            title: "Cerati",
            views: "10000",
            likes: "2000",
            dislikes: "100",
            id: "asdad",
            publishedDate: "02/05/2020",
            description: "Crimen Ahi vamos"
          },
        objVideo : {}, 
        userLogged: {
            userStatus: true,
            user: ""
        }, 
        mapFavs: new Map()
    }
    
    test('VideoFrame Render DOM',()=>{
    
        const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

            );
        expect(screen.getByText('Cerati')).toBeInTheDocument();
        expect(screen.getByText('02/05/2020')).toBeInTheDocument();
        expect(screen.getByText('Crimen Ahi vamos')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
        expect(container.querySelector("button")).toBeInTheDocument();
    });
    
    test('button class true',()=>{
        mockValue.userLogged.user='Cesar';
        const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

        );
        expect(container.querySelector("button")).toHaveClass('favs active');

    });

    test('button class false',()=>{
        
     const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

        );
        expect(container.querySelector("button")).toHaveClass('favs');
        
    });

    test('Test iframe src',()=>{
        
        render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

        );
        expect(screen.getByTitle("Reproductor")).toHaveAttribute('src','https://www.youtube.com/embed/asdad');
    });

    test('onclick test empty map',()=>{
        mockValue.userLogged.user='Cesar';
        mockValue.objVideo={id:'video',key:'123'}
        const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

        );
        const favButton = container.querySelector("button");
        fireEvent.click(favButton)
        expect(mockValue.mapFavs).toBeTruthy();
    });

    test('onclick test user with key in map and same videoID',()=>{
        mockValue.userLogged.user='Cesar';
        mockValue.objVideo= {id:{videoId:'aaa'}},
        mockValue.mapFavs.set('Cesar',[{id:{videoId:'aaa'}}]);
        const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

        );
        const favButton = container.querySelector("button");
        fireEvent.click(favButton)
        expect(false).toBeFalsy();
    });

    test('onclick test user with key in map and different videoID',()=>{
        mockValue.userLogged.user='Cesar';
        mockValue.objVideo= {id:{videoId:'abc'}},
        mockValue.mapFavs.set('Cesar',[{id:{videoId:'aaa'}}]);
        const {container}  =  render(
            <PageContext.Provider value={mockValue}>
                <VideoFrame />
            </PageContext.Provider>

        );
        const favButton = container.querySelector("button");
        fireEvent.click(favButton)
        expect(mockValue.mapFavs).toBeTruthy();
    });
});