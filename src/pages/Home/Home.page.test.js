import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Home from './Home.page'
import AuthProvider from '../../AuthContext'

describe('<Home />', () =>{
    it('renders correctly the Home Page for Videos', ()=> {
        render(<AuthProvider><Home/></AuthProvider>)
    })

    

})