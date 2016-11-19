// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function pc(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_PC':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.pcs,
                lastUpdated: action.receivedAt
            })
        case 'REQUEST_PC':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'ADD_ONE_PC':
            return Object.assign({}, state, {
                isFetching: false,
                items: [...state.items, action.pc]
            })
        default:
            return state;
    }
}

export default pc;
