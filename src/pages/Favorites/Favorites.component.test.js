import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Favorites from './Favorites.page'
import AuthProvider from '../../AuthContext'

describe('<Favorites/>', () =>{
    it('renders correctly the Favorites Page which contains the Favorites Videos', ()=> {
        render(<AuthProvider><Favorites/></AuthProvider>)
    })

    it('Renders the title of the Favorite Home Page', ()=>{
        const container= render(<AuthProvider><Favorites/></AuthProvider>)
        expect(container.queryByText('Favorite Videos')).toBeVisible()

    })



    

})