import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import Watch  from './Watch.page'


describe('<Watch/>', () =>{
    it('renders correctly Watch page which contains the Video Display', ()=> {
        render(<Router path="/watch/:id"><Watch/></Router>)
    })


    

})