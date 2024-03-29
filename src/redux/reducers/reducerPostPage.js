import {actionPostType} from '../actionTypes/actionTypesPage';

const initialState = {
  postsServer: [],
  indexMap: null,
  isShowComments: false,
  isLoadingPosts: false,
  isLoadingComments: false,
  commentsServer: [],
  createPostInputValue: '',
  createPostTextareaValue: '',
  errorValidTitle: {
    isErrorValid: false,
    errorText: '',
  },
  errorValidBody: {
    isErrorValid: false,
    errorText: '',
  },
  createdPosts: []
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
        isShowComments: true,
        indexMap: action.payload,
      }
    case actionPostType.HIDE_IS_COMMENT:
      return {
        ...state,
        isShowComments: false,
      }
    case actionPostType.IS_SHOW_LOADING_POST_SERVER:
      return {
        ...state,
        isLoadingPosts: action.payload,
      }
    case actionPostType.SET_COMMENTS_SERVER:
      return {
        ...state,
        commentsServer: action.payload,
      }
    case actionPostType.IS_SHOW_LOADING_COMMENTS_SERVER:
      return {
        ...state,
        isLoadingComments: action.payload,
      }
    case actionPostType.CHECK_VALUE_TITLE:
      return {
        ...state,
        ...state.errorValidTitle,
        errorValidTitle: {
          isErrorValid: action.payload.isErrorValid,
          errorText: action.payload.errorText,
        }
      }
    case actionPostType.CHECK_VALUE_BODY:
      return {
        ...state,
        ...state.errorValidBody,
        errorValidBody: {
          isErrorValid: action.payload.isErrorValid,
          errorText: action.payload.errorText,
        }
      }
    case actionPostType.ADD_CREATED_POSTS:
      return {
        ...state,
        createdPosts: [...state.createdPosts, action.payload]
      }
    default:
      return state
  }
}
