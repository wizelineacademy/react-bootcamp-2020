import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                email: action.payload.email,
            };
        case types.logout:
            return {};
        default:
            return state;
    }
};
