import { createStore, compse } from 'redux';
// be able to hook up react-router with our redux
import { syncHistoryWithStore } from 'react-router-redux';
// import browser history to be able to switch between pages without refreshing
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// need default data to actually work with it
import comments from './data/comments';
import posts from './data/posts';

// create object for your default data.
const defaultState = {
	posts: posts,
	comments: comments
}