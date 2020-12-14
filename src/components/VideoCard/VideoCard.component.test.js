import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import VideoCard from './VideoCard.component'
import FavoritesProvider,{ useFavorites } from '../../FavoritesContext'
import { BrowserRouter as Router } from 'react-router-dom';


describe('<VideoCard />', () =>{
    it('renders Video Card component correctly', ()=> {
        render(<Router><FavoritesProvider><VideoCard/></FavoritesProvider></Router>)
    })
})


    it('Renders the button Watch', ()=>{
        const container= render(<Router><FavoritesProvider><VideoCard/></FavoritesProvider></Router>)
        expect(container.queryByText('Watch')).toBeVisible()

    })

    it('Renders the button Favorite', ()=>{
        const container= render(<Router><FavoritesProvider><VideoCard/></FavoritesProvider></Router>)
        expect(container.queryByText('Favorite')).toBeVisible()

    })

    
