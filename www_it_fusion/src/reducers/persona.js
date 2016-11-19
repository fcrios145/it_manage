// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function persona(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_PERSONAS':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.personas,
                lastUpdated: action.receivedAt
            })
        case 'REQUEST_PERSONA':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'ADD_ONE_PERSONA':
            return Object.assign({}, state, {
                isFetching: false,
                items: [...state.items, action.persona]
            })
        default:
            return state;
    }
}

export default persona;
