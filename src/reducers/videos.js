const videosReducer = (state = {items: []} , action) => {
    switch (action.type) {
        case 'SET_VIDEOS':
            return  action.payload;   
        default:
            return state;
    }
};

export default videosReducer;