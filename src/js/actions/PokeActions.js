import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export function requestPokemon() {
  return {
    type: types.REQUEST_POKEMON,
  };
}

export function receivePokemon(response) {
  return {
    type: types.RECEIVE_POKEMON,
    payload: response,
  };
}

export function loadPokemon() {
  return function (dispatch) {

    dispatch(requestPokemon())

    // FIXME: Remove hardcoded url
    return fetch('http://localhost:3004/pokemon')
      .then(response => response.json())
      .then(json => {
        return dispatch(receivePokemon(json))
      });
  }
}
