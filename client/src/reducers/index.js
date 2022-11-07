import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
// import Complaince from './Complaince';
import RFQ_Manager from './RFQ_Manager';

export const reducers = combineReducers({ posts, auth, RFQ_Manager });