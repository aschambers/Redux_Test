import { createStore, compose } from 'redux';
// be able to hook up react-router with our redux
import { syncHistoryWithStore } from 'react-router-redux';
// import browser history to be able to switch between pages without refreshing
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// need default data to actually work with it
import comments from './data/comments';
import posts from './data/posts';

// create object for your default data
const defaultState = {
	posts: posts,
	comments: comments
};

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

// takes two things, rootReducer to interface with it, and the default state
const store = createStore(rootReducer, defaultState, enhancers);

// make going from page to page, keep track, and weave in the store to be accessible to other files
export const history = syncHistoryWithStore(browserHistory, store);

// make reducers hot
if(module.hot) {
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}

export default store;