const DEFAULT_STATE = [
  { id: 1, text: "item 1", completed: false },
  { id: 1, text: "item 2", completed: false }
]

const todoReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todoReducer;