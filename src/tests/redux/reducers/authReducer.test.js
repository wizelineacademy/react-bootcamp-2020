import { authReducer } from '../../../redux/reducers/authReducer';
import { types } from '../../../redux/types/types';

describe('Testing on redux/reducers/authReducer', () => {
    test('Types.login should return id && email', () => {
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                id: 1,
                email: 'gianpierre.galvez@wizeline.com',
            },
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({
            id: 1,
            email: 'gianpierre.galvez@wizeline.com',
        });
    });
    test('Types.logout should return empty object', () => {
        const initState = {
            id: 1,
            email: 'gianpierre.galvez@wizeline.com',
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});
    });
});
