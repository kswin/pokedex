import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

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
        console.log('json', json);
        return dispatch(receivePokemon(json))
      });
  }
}
