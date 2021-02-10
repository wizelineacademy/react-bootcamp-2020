import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginModalToggle } from '../../redux/actions/template';
import LoginForm from '../LoginForm';

class LoginModal extends Component {
    render() {
        const { loginModalToggle: showModal } = this.props.template;
        return showModal ? (
            <div className="fixed z-0 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div
                        className="inline-block align-bottom bg-white dark:bg-gray-500 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="modal-data bg-white dark:bg-gray-500">
                            <div className="modal-title px-4 pb-2 pt-3">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                                            id="modal-headline"
                                        >
                                            Login
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        template: state.template,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginModalToggle: (loginModalToggleValue) =>
            dispatch(loginModalToggle(loginModalToggleValue)),
    };
}

const LoginModalWithReduxStates = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);

export default LoginModalWithReduxStates;
