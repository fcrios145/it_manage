// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function user(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            console.log('esto es el login');
            return state;
        case 'LOGOUT':
            console.log('logout');
            delete localStorage.token
            return state;
        default:
            return state;
    }
}

export default user;
