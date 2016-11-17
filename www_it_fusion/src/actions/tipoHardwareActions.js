// Tipo Hardware
//
import $ from 'jquery';
import Auth from '../helpers/auth';

//export const REQUEST_TIPO_HARDWARE = 'REQUEST_TIPO_HARDWARE'
function requestTipoHardware() {
  return {
    type: 'REQUEST_TIPO_HARDWARE'
  }
}

function receiveTiposHardware(tipos) {
  return {
    type: 'RECEIVE_TIPO_HARDWARE',
    tipos,
    receivedAt: Date.now()
  }
}

export function addOne(tipo) {
    return {
        type: 'ADD_ONE',
        tipo
    }
}

export function fetchTipoHardware() {
    return function(dispatch) {
        $.ajax({
            method: 'GET',
            url: Auth.baseUrl + '/tipohardware/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
                dispatch(requestTipoHardware());
            },
            success: function(res) {
                dispatch(receiveTiposHardware(res));
            }
        })
    }
}


export function addTipoHardware(nombre) {
    return function(dispatch) {
        $.ajax({
            method: 'POST',
            url: Auth.baseUrl + '/tipohardware/',
            datatype: 'json',
            data: {
                nombre,
            },
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
            },
            success: function(res) {
                dispatch(addOne(res));
            }
        })
    }

}




