import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  pokemon: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_POKEMON: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.RECEIVE_POKEMON: {
      // TODO: Error response

      const pokemon = action.payload;
      return {
        ...state,
        loading: false,
        pokemon: state.pokemon.concat(pokemon),
      }
    }
    default:
      return state;
  }
}
