import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Videos, { isFavorite }from './Videos.component'
import FavoritesProvider,{ useFavorites } from '../../FavoritesContext'
import  { videos } from '../../mock'
import { BrowserRouter as Router } from 'react-router-dom';


describe('<Videos />', () =>{
    it('renders Videos Component correctly', ()=> {
        render(<Router><FavoritesProvider><Videos videos={videos}/></FavoritesProvider></Router>)
    })

    it('Renders the video titles', ()=>{
        const {queryByText} = render(<Router><FavoritesProvider><Videos videos={videos}/></FavoritesProvider></Router>)

        for (const video of videos) {
            expect(queryByText(video.snippet.title)).toBeVisible()
            
        }

       
        

    })
})