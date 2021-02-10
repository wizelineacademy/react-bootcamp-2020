import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    navigationDrawerToggle,
    darkModeToggle,
    loginModalToggle,
} from '../../redux/actions/template';
import { logout } from '../../redux/actions/auth';
import { searchVideosTextTrigger } from '../../redux/actions/video';
import './Navbar.styles.css';

class Navbar extends Component {
    state = {
        searchVideosText: this.props.video.searchVideosText || '',
    };

    setHTMLMode() {
        const htmlElement = document.getElementsByTagName('html')[0];
        if (this.props.template.darkModeToggle) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }

    emitInputSearchText = (currentSearchString) => {
        this.setState({ searchVideosText: currentSearchString });
        this.props.searchVideosTextTrigger(currentSearchString);
    };

    handleInputSearch = (event) => {
        this.setState({ searchVideosText: event.target.value });
    };

    handleKeyDownInputSearch = (event) => {
        if (event.key !== 'Enter') return;
        this.props.searchVideosTextTrigger(this.state.searchVideosText);
    };

    handleDarkModeToggle = async () => {
        await this.props.darkModeToggle(!this.props.template.darkModeToggle);
        this.setHTMLMode();
    };

    handleNavigationDrawerToggle = () => {
        this.props.navigationDrawerToggle(!this.props.template.navigationDrawerToggle);
    };

    toggleDropdown = () => {
        const dropdown = document.getElementsByClassName('dropdown-menu')[0];
        if (dropdown.style.display === 'none') dropdown.style.display = '';
        else dropdown.style.display = 'none';
    };

    handleLoginModalToggle = () => {
        this.props.loginModalToggle(!this.props.template.loginModalToggle);
        this.toggleDropdown();
    };

    handleLogout = () => {
        this.props.logout();
        this.toggleDropdown();
    };

    componentDidMount() {
        this.props.navigationDrawerToggle(false);
        this.props.loginModalToggle(false);
        this.setHTMLMode();

        if (
            this.state.searchVideosText === '' ||
            this.state.searchVideosText === undefined
        ) {
            this.emitInputSearchText('wizeline');
        }
    }

    render() {
        const { darkModeToggle: darkModeToggleValue } = this.props.template;
        const { auth } = this.props;
        const { searchVideosText } = this.state;
        return (
            <nav className="navbar-container dark:bg-indigo-600">
                <div className="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex flex-wrap	 items-center justify-between min-h-16 py-3 md:-py-0">
                        <div className="flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded="false"
                                onClick={this.handleNavigationDrawerToggle}
                            >
                                <svg
                                    className="w-6 h-6"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    style={{ fill: '#FFFFFF' }}
                                >
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 md:flex-none flex items-center justify-center sm:items-stretch sm:justify-start mb-3 md:mb-0">
                            <div className="flex-shrink-0 flex items-center">
                                <svg
                                    className="mx-4"
                                    viewBox="0 0 105 24"
                                    style={{ width: '140px', height: '38px' }}
                                >
                                    <g>
                                        <path
                                            className="wize-color"
                                            d="M11.899 24H8.74L7.418 10.775 5.912 24H2.791L0 0h3.672l1.175 15.135L6.28 0h2.828l1.212 15.135L11.715 0h3.415zM19.826 24h3.652V0h-3.652zM33.428 20.468h4.435V24h-8.646v-1.261l4.659-19.207h-4.398V0h8.609v1.262zM43.304 24V0h7.826v3.46h-4.094v6.558h2.717v3.28h-2.717v7.135h4.094V24z"
                                            style={{ fill: '#FFFFFF' }}
                                        ></path>
                                        <path
                                            className="line-color"
                                            d="M57.391 24V0h2.54v21.514h4.765V24zM70.957 24h2.608V0h-2.608zM88.39 24L84.4 11.856 83.27 8v16h-2.4V0h2.294l3.637 12.324 1.06 3.892V0h2.4v24zM97.043 24V0h7.827v2.415H99.7v8h3.729v2.342H99.7v8.829h5.169V24z"
                                            style={{ fill: '#e93d44' }}
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="search-bar-container">
                                <div className="relative mx-auto text-gray-600">
                                    <input
                                        className="border-transparent h-10 px-5 pl-10 rounded-md text-sm focus:outline-none bg-transparent placeholder-white text-white"
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                        value={searchVideosText}
                                        onChange={this.handleInputSearch}
                                        onKeyDown={this.handleKeyDownInputSearch}
                                    />
                                    <div className="icon-container absolute left-0 inset-y-2/4 transform translate-x-2/4 -translate-y-2/4 h-4 w-4">
                                        <svg
                                            className="text-white h-4 w-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            id="Capa_1"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 56.966 56.966"
                                            style={{
                                                enableBackground: 'new 0 0 56.966 56.966',
                                            }}
                                            xmlSpace="preserve"
                                            width="512px"
                                            height="512px"
                                        >
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer ml-3 md:ml-0"
                            onClick={this.handleDarkModeToggle}
                        >
                            <div className="switch-container">
                                <div className="flex justify-between items-center">
                                    <div className="w-9 h-3 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out">
                                        <div
                                            className={
                                                'bg-white dark:bg-green-600 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ' +
                                                (darkModeToggleValue
                                                    ? 'translate-x-3'
                                                    : '-translate-x-1')
                                            }
                                        ></div>
                                    </div>
                                    <h2 className="text-white ml-3">Dark mode</h2>
                                </div>
                            </div>
                        </div>
                        <div className="ml-3 md:ml-6 relative">
                            <div>
                                <button
                                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    onClick={this.toggleDropdown}
                                >
                                    <svg
                                        className="h-8 w-8 rounded-full"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="dropdown-menu origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                                style={{ display: 'none' }}
                            >
                                {!auth.id ? (
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                                        onClick={this.handleLoginModalToggle}
                                    >
                                        Login
                                    </button>
                                ) : (
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                                        onClick={this.handleLogout}
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        template: state.template,
        auth: state.auth,
        video: state.video,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigationDrawerToggle: (navigationDrawerToggleValue) =>
            dispatch(navigationDrawerToggle(navigationDrawerToggleValue)),
        darkModeToggle: (darkModeToggleValue) =>
            dispatch(darkModeToggle(darkModeToggleValue)),
        loginModalToggle: (loginModalToggleValue) =>
            dispatch(loginModalToggle(loginModalToggleValue)),
        logout: () => dispatch(logout()),
        searchVideosTextTrigger: (searchVideosText) =>
            dispatch(searchVideosTextTrigger(searchVideosText)),
    };
}

const NavbarWithReduxStates = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarWithReduxStates;
