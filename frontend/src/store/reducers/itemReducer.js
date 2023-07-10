const initialState = {
  items: [],
  currItem: {}
}

export function itemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, currItem: action.item }
    case 'SET_ITEMS':
      return { ...state, items: [...action.items] }
    case 'ADD_ITEM':
      return { ...state, currItem: action.item, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.itemId)
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        currItem: action.item,
        items: state.items.map((item) =>
          item._id === action.item._id ? action.item : item
        ),
      };
    default:
      return state
  }
}
