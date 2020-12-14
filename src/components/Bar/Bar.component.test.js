import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Bar from './Bar.component'
import AuthProvider from '../../AuthContext'
import { MemoryRouter } from 'react-router-dom';

describe('<Bar />', () =>{
    it('renders correctly', ()=> {
        render(<AuthProvider><Bar/></AuthProvider>)
    })

    it('Renders the Button to Favorites Videos', ()=>{
        const container= render(<AuthProvider><Bar/></AuthProvider>)
        expect(container.queryByText('Favorites')).toBeVisible()

    })

    it('Renders the Button to Home Page Videos', ()=>{
        const container= render(<AuthProvider><Bar/></AuthProvider>)
        expect(container.queryByText('Home')).toBeVisible()

    })




})

