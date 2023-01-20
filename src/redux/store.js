import { createStore } from 'redux';
import launchFilterReducer from './reducer'

const store = createStore(launchFilterReducer);

export default store