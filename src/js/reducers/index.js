import { combineReducers } from 'redux';
import friendList from './friendList';
import pokedex from './pokedex';

const rootReducer = combineReducers({
  friendList,
  pokedex,
});

export default rootReducer;
