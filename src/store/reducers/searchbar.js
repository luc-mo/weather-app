import { TOGGLE_SEARCHBAR } from "store/actions/types"

const initialState = {
  isSearchbarOpen: false
}

export function searchbarReducer(state = initialState, action) {
  const { type } = action
  switch(type) {
    case TOGGLE_SEARCHBAR:
      return {
        ...state,
        isSearchbarOpen: !state.isSearchbarOpen
      }
    default:
      return state
  }
}