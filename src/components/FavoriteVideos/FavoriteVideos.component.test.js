import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import FavoriteVideos from './FavoriteVideos.component'
import FavoritesProvider from '../../FavoritesContext'
import  { videos } from '../../mock'

describe('<FavoriteVideos />', () =>{
    it('renders correctly Favorite Videos component', ()=> {
        render(<FavoritesProvider><FavoriteVideos videos={videos} /></FavoritesProvider>)
    })



  

})