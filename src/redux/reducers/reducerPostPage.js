import {actionPostType} from '../actionTypes/actionTypesPage';

const initialState = {
  postsServer: [],
  indexMap: null,
  isShowComments: false,
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
      console.log('actionPostType.HIDE_IS_COMMENT:', true, state.isShowComments)
      return {
        ...state,
        isShowComments: true,
        indexMap: action.payload,
      }
    case actionPostType.HIDE_IS_COMMENT:
      console.log('actionPostType.HIDE_IS_COMMENT:', false, state.isShowComments)
      return {
        ...state,
        isShowComments: false,
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
