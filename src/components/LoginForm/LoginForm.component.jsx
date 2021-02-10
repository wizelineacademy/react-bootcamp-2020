import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../../redux/actions/auth';
import { loginModalToggle } from '../../redux/actions/template';
import FloatingLabelInput from '../FloatingLabelInput';

class LoginForm extends Component {
    state = {
        email: 'react@wizeline.com',
        password: '123456',
        canSubmit: true,
        errorMessage: '',
    };
    handleClick = () => {
        this.props.login();
    };

    handleLoginInput = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordInput = (event) => {
        this.setState({ password: event.target.value });
    };

    closeModal = () => {
        this.props.loginModalToggle(false);
    };

    handleSubmitLogin = async (event) => {
        event.preventDefault();
        this.setState({ canSubmit: false });
        const { email, password } = this.state;
        if (!(email === 'react@wizeline.com' && password === '123456')) {
            this.setState({
                canSubmit: true,
                errorMessage: 'Email or password are invalid',
            });
            return;
        }

        await this.props.login(1, email);
        this.setState({ canSubmit: true });
        this.closeModal();
    };

    clearErrorMessage = () => {
        this.setState({ errorMessage: '' });
    };

    render() {
        const { email, password, canSubmit, errorMessage } = this.state;
        return (
            <form onSubmit={this.handleSubmitLogin}>
                <div className="modal-body">
                    {errorMessage !== '' && (
                        <div className="errors-container px-3">
                            <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">
                                <div slot="avatar">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        class="feather feather-alert-octagon w-5 h-5 mx-2"
                                    >
                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                </div>
                                <div class="text-md font-normal max-w-full flex-initial">
                                    {errorMessage}
                                </div>
                                <div class="flex flex-auto flex-row-reverse">
                                    <div
                                        className="cursor-pointer"
                                        onClick={this.clearErrorMessage}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="100%"
                                            height="100%"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="container px-4">
                        <FloatingLabelInput
                            name="email"
                            type="text"
                            children="Email"
                            handleChange={this.handleLoginInput}
                            value={email}
                        />
                        <FloatingLabelInput
                            name="password"
                            type="password"
                            children="Password"
                            handleChange={this.handlePasswordInput}
                            value={password}
                        />
                    </div>
                </div>
                <div className="modal-footer bg-white dark:bg-gray-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        disabled={canSubmit ? '' : 'disabled'}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={this.closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (id, email) => dispatch(loginAsync(id, email)),
        loginModalToggle: (loginModalToggleValue) =>
            dispatch(loginModalToggle(loginModalToggleValue)),
    };
}

const Form = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Form;
