import {actionPostType} from '../actionTypes/actionTypesPage';

const initialState = {
  postsServer: [],
  indexMap: null,
  isLoading: true
}

export default function reducerPostPage(state = initialState, action) {

  switch (action.type) {
    case actionPostType.SET_POST_SERVER:
      return {
        ...state,
        postsServer: action.payload,
      }
    case actionPostType.CHANGE_IS_SHOW_COMMENT:
      return {
        ...state,
        indexMap: action.payload,
      }
    case actionPostType.IS_SHOW_LOADING_POST_SERVER:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
