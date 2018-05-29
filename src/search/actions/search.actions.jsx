import { searchConstants } from './search.constants.jsx';

export const searchActions = {
  loadPlayers,
  addPlayer,
  removePlayer
}

function loadPlayers() {
  return {
    type: searchConstants.LOAD_PLAYERS
  }
}

function addPlayer(name) {
  return {
    type: searchConstants.ADD_PLAYER,
    payload: { name: name }
  }
}

function removePlayer(key) {
  return {
    type: searchConstants.REMOVE_PLAYER,
    payload: key
  }
}