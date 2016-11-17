// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function tipoHardware(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_TIPO_HARDWARE':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.tipos,
                lastUpdated: action.receivedAt
            })
        case 'REQUEST_TIPO_HARDWARE':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'ADD_ONE':
            return Object.assign({}, state, {
                isFetching: false,
                items: [...state.items, action.tipo]
            })
        default:
            return state;
    }
}

export default tipoHardware;
