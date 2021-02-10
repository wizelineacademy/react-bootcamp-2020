import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigationDrawerToggle } from '../../redux/actions/template';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
    handleNavigationDrawerToggle = () => {
        this.props.navigationDrawerToggleAction(
            !this.props.template.navigationDrawerToggle
        );
    };

    render() {
        const { navigationDrawerToggle } = this.props.template;
        const { auth } = this.props;
        return (
            <div
                className={
                    'navigation-drawer-container w-full fixed bg-black bg-opacity-50 top-0 h-screen transition-all duration-300 z-10 transform ' +
                    (!navigationDrawerToggle ? '-translate-x-full' : 'translate-x-0')
                }
            >
                <div className="navigation-drawer w-64 absolute bg-white dark:bg-gray-800 top-0 h-screen">
                    <div className="flex pr-2 justify-end pt-3">
                        <button
                            className="p-1 text-black dark:text-white text-xl font-bold leading-4"
                            onClick={this.handleNavigationDrawerToggle}
                        >
                            &times;
                        </button>
                    </div>
                    <Link
                        to="/"
                        className="text-xl text-center pt-5 text-black dark:text-white w-full block"
                    >
                        Home
                    </Link>
                    {auth.id ? (
                        <Link
                            to="/favorite-videos"
                            className="text-xl text-center pt-5 text-black dark:text-white w-full block"
                        >
                            Favorites
                        </Link>
                    ) : null}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        template: state.template,
        auth: state.auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigationDrawerToggleAction: (navigationDrawerToggleValue) =>
            dispatch(navigationDrawerToggle(navigationDrawerToggleValue)),
    };
}

const NavigationMenuWithReduxStates = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationMenu);

export default NavigationMenuWithReduxStates;
