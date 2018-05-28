import { searchConstants } from './search.constants.jsx';

export const searchActions = {
  loadPlayers,
  addPlayer
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