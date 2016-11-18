// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function hardware(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_HARDWARE':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.hardwares,
                lastUpdated: action.receivedAt
            })
        case 'REQUEST_HARDWARE':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'ADD_ONE_HARDWARE':
            return Object.assign({}, state, {
                isFetching: false,
                items: [...state.items, action.hardware]
            })
        default:
            return state;
    }
}

export default hardware;
