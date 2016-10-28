// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function user(state = [], action) {
    console.log(state, action);
    return state;
}

export default user;
