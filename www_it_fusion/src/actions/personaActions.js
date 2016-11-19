// Tipo Hardware
//
import $ from 'jquery';
import Auth from '../helpers/auth';

//export const REQUEST_TIPO_HARDWARE = 'REQUEST_TIPO_HARDWARE'
function requestPersona() {
  return {
    type: 'REQUEST_PERSONA'
  }
}

function receivePersonas(personas) {
  return {
    type: 'RECEIVE_PERSONAS',
    personas,
    receivedAt: Date.now()
  }
}

export function addOnePersona(persona) {
    return {
        type: 'ADD_ONE_PERSONA',
        persona
    }
}

export function fetchPersona() {
    return function(dispatch) {
        $.ajax({
            method: 'GET',
            url: Auth.baseUrl + '/persona/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
                dispatch(requestPersona());
            },
            success: function(res) {
                dispatch(receivePersonas(res));
            }
        })
    }
}


export function addPersona(nombre, departamento) {
    return function(dispatch) {
        $.ajax({
            method: 'POST',
            url: Auth.baseUrl + '/persona/',
            datatype: 'json',
            data: {
                nombre,
                departamento
            },
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
            	dispatch(requestPersona());
            },
            success: function(res) {
                dispatch(addOnePersona(res));
            }
        })
    }

}




