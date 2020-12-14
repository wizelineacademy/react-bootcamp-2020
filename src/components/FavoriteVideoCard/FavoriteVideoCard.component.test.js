import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import FavoriteVideoCard from './FavoriteVideoCard.component'
import FavoritesProvider from '../../FavoritesContext'
import  { videos } from '../../mock'

describe('<FavoriteVideoCard />', () =>{
    it('renders correctly', ()=> {
        render(<FavoritesProvider><FavoriteVideoCard videos={videos}/></FavoritesProvider>)
    })

    it('Renders the button Watch', ()=>{
        const container= render(<FavoritesProvider><FavoriteVideoCard videos={videos}/></FavoritesProvider>)
        expect(container.queryByText('Watch')).toBeVisible()

    })

    it('Renders the button Delete', ()=>{
        const container= render(<FavoritesProvider><FavoriteVideoCard videos={videos}/></FavoritesProvider>)
        expect(container.queryByText('Delete')).toBeVisible()

    })


})
