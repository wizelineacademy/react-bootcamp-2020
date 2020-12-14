import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Login from './Login'
import AuthProvider from '../../AuthContext'


describe('<Login />', () =>{
    it('renders correctly the Login Form', ()=> {
        render(<AuthProvider><Login/></AuthProvider>)
    })


    

})