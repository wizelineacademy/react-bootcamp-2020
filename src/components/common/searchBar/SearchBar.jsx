import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
import {Image, Menu, Form, Input} from 'semantic-ui-react';

const SearchBar = ({handleFormSubmit}) => {
    const [videoTitle, setVideoTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(videoTitle);
    }
 
    return (
        <Menu.Item className='search-input'>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Input 
                        value={videoTitle}
                        placeholder='Search'
                        size='small'
                        onChange={(e) => setVideoTitle(e.target.value)}
                    />
                </Form.Field>
            </Form>
        </Menu.Item>
        /*<form onSubmit={handleSubmit}>
            <div className="search-bar">
                <input
                    value={videoTitle}
                    className="search" 
                    type="text" 
                    placeholder="Search..." 
                    onChange={(e) => setVideoTitle(e.target.value)}
                />
            </div>
        </form>*/
    );
}

export default SearchBar;