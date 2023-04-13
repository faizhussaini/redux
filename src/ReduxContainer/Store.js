import {createStore} from 'redux'
import BookReaducer from './BookReducer'
const store = createStore(BookReaducer);
export default store;