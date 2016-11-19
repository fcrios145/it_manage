// Tipo Hardware
//
import $ from 'jquery';
import Auth from '../helpers/auth';

//export const REQUEST_TIPO_HARDWARE = 'REQUEST_TIPO_HARDWARE'
function requestPc() {
  return {
    type: 'REQUEST_PC'
  }
}

function receivePc(pcs) {
  return {
    type: 'RECEIVE_PC',
    pcs,
    receivedAt: Date.now()
  }
}

export function addOnePc(pc) {
    return {
        type: 'ADD_ONE_PC',
        pc
    }
}

export function fetcPc() {
    return function(dispatch) {
        $.ajax({
            method: 'GET',
            url: Auth.baseUrl + '/pc/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            beforeSend: function() {
                dispatch(requestPc());
            },
            success: function(res) {
                dispatch(receivePc(res));
            }
        })
    }
}


export function addPc(ubicacion, persona) {
    return function(dispatch) {
        $.ajax({
            method: 'POST',
            url: Auth.baseUrl + '/pc/',
            datatype: 'json',
            data: {
                ubicacion,
                persona
            },
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            success: function(res) {
                dispatch(addOnePc(res));
            }
        })
    }

}




