// a reducer take in two things

// 1. The action (info what happened)
// 2. Copy of the current state

function ubicacion(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_UBICACION':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.ubicaciones,
                lastUpdated: action.receivedAt
            })
        case 'REQUEST_UBICACION':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'ADD_ONE_UBICACION':
            return Object.assign({}, state, {
                isFetching: false,
                items: [...state.items, action.ubicacion]
            })
        default:
            return state;
    }
}

export default ubicacion;
