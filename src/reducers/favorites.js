const favoritesReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            state.items.push(action.payload);
            return state;
        case 'REMOVE_FAVORITE':
            if (state.items) {
                let index = state.items.findIndex(element => element.id.videoId === action.payload.id.videoId);
                if (index !== -1) {
                    state.items.splice(index, 1);
                }
            }
            return state;
        default:
            return state;
        
    }
};

export default favoritesReducer;