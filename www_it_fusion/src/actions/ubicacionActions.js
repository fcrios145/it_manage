// Tipo Hardware
//
import $ from 'jquery';
import Auth from '../helpers/auth';

//export const REQUEST_TIPO_HARDWARE = 'REQUEST_TIPO_HARDWARE'
function requestUbicacion() {
  return {
    type: 'REQUEST_UBICACION'
  }
}

function receiveUbicaciones(ubicaciones) {
  return {
    type: 'RECEIVE_UBICACION',
    ubicaciones,
    receivedAt: Date.now()
  }
}

export function addOneUbicacion(ubicacion) {
    return {
        type: 'ADD_ONE_UBICACION',
        ubicacion
    }
}

export function fetchUbicacion() {
    return function(dispatch) {
        $.ajax({
            method: 'GET',
            url: Auth.baseUrl + '/ubicacion/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
                dispatch(requestUbicacion());
            },
            success: function(res) {
                dispatch(receiveUbicaciones(res));
            }
        })
    }
}


export function addUbicacion(nombre) {
    return function(dispatch) {
        $.ajax({
            method: 'POST',
            url: Auth.baseUrl + '/ubicacion/',
            datatype: 'json',
            data: {
                nombre
            },
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
            	dispatch(requestUbicacion());
            },
            success: function(res) {
                dispatch(addOneUbicacion(res));
            }
        })
    }

}




