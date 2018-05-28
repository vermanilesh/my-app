import { searchConstants } from './actions/search.constants.jsx';

const DEFAULT_STATE = {
  players: [
    { name: "Sunil" },
    { name: "shubham" },
    { name: "nimish" },
    { name: "bhagwan" },
    { name: "jay" }
  ]
}

export const searchReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case searchConstants.LOAD_PLAYERS:
      return state;
    case searchConstants.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      };
    default:
      return state;
  }
}