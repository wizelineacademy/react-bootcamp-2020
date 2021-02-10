import { templateReducer } from '../../../redux/reducers/templateReducer';
import { types } from '../../../redux/types/types';

describe('Testing on redux/reducers/templateReducer', () => {
    test('Types.navigationDrawerToggle should edit navigationDrawerToggle value (true or false)', () => {
        const initState = {
            navigationDrawerToggle: false,
            darkModeToggle: false,
            loginModalToggle: false,
        };

        const action = {
            type: types.navigationDrawerToggle,
            payload: {
                navigationDrawerToggle: true,
            },
        };

        const state = templateReducer(initState, action);

        expect(state).toEqual({
            navigationDrawerToggle: true,
            darkModeToggle: false,
            loginModalToggle: false,
        });
    });
    test('Types.darkModeToggle should edit darkModeToggle value (true or false)', () => {
        const initState = {
            navigationDrawerToggle: false,
            darkModeToggle: false,
            loginModalToggle: false,
        };

        const action = {
            type: types.darkModeToggle,
            payload: {
                darkModeToggle: true,
            },
        };

        const state = templateReducer(initState, action);

        expect(state).toEqual({
            navigationDrawerToggle: false,
            darkModeToggle: true,
            loginModalToggle: false,
        });
    });
    test('Types.loginModalToggle should edit loginModalToggle value (true or false)', () => {
        const initState = {
            navigationDrawerToggle: false,
            darkModeToggle: false,
            loginModalToggle: false,
        };

        const action = {
            type: types.loginModalToggle,
            payload: {
                loginModalToggle: true,
            },
        };

        const state = templateReducer(initState, action);

        expect(state).toEqual({
            navigationDrawerToggle: false,
            darkModeToggle: false,
            loginModalToggle: true,
        });
    });
});
