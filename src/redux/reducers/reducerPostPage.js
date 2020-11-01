import {actionPostType} from '../actionTypes/actionTypesPage';

const initialState = {
  postsServer: []
}

export default function reducerPostPage(state = initialState, action) {

  switch (action.type) {
    case actionPostType.SET_POST_SERVER:
      return {
        ...state,
        postsServer: action.payload,
      }
    default:
      return state
  }
}
