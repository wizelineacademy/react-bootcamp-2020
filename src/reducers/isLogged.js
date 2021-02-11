const logReducer = (state = 'noLogged' , action) => {
    switch (action.type) {
        case 'LOGIN':
            return (action.payload.userName === 'fernanda' && action.payload.password === 'ramos') ?
             'logged' : 'noLogged';
        case 'LOGOUT':
            return 'noLogged';    
        default:
            return state;
        
    }
};

export default logReducer;