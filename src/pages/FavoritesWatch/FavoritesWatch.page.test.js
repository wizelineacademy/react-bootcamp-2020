import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import FavoritesWatch from './FavoritesWatch.page'
import AuthProvider from '../../AuthContext'

describe('<FavoritesWatch/>', () =>{
    it('renders correctly the Favorites Page which contains the Favorites Videos', ()=> {
        render(<AuthProvider><FavoritesWatch/></AuthProvider>)
    })


})