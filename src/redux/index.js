import {combineReducers} from 'redux'
import reducerPostPage from './reducers/reducerPostPage';

export default combineReducers({
  reducerPost: reducerPostPage
})