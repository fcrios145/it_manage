// Tipo Hardware
//
import $ from 'jquery';
import Auth from '../helpers/auth';

//export const REQUEST_TIPO_HARDWARE = 'REQUEST_TIPO_HARDWARE'
function requestHardware() {
  return {
    type: 'REQUEST_HARDWARE'
  }
}

function receiveHardware(hardwares) {
  return {
    type: 'RECEIVE_HARDWARE',
    hardwares,
    receivedAt: Date.now()
  }
}

export function addOneHardware(hardware) {
    return {
        type: 'ADD_ONE_HARDWARE',
        hardware
    }
}

export function fetchardware() {
    return function(dispatch) {
        $.ajax({
            method: 'GET',
            url: Auth.baseUrl + '/hardware/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
                dispatch(requestHardware());
            },
            success: function(res) {
                dispatch(receiveHardware(res));
            }
        })
    }
}


export function addHardware(nombre, descripcion, tipo_hardware) {
    return function(dispatch) {
        $.ajax({
            method: 'POST',
            url: Auth.baseUrl + '/hardware/',
            datatype: 'json',
            data: {
                nombre,
                descripcion,
                tipo_hardware
            },
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
            	dispatch(requestHardware());
            },
            success: function(res) {
                dispatch(addOneHardware(res));
            }
        })
    }

}




