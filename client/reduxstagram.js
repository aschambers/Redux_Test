import React from 'react';
// allow us to render out to html
import { render } from 'react-dom';
// import css, don't need link tag because webpack will imbed it in the style tag for us
import css from './styles/style.styl';
// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import provider from react-redux
import { Provider } from 'react-redux';

// import our store for components
import store, { history } from './store';

// import sentry error tracker
import Raven from 'raven-js';
import { sentry_url } from './data/config';

// use the raven module with sentry error tracking
Raven.config(sentry_url, {
	tags: {
		git_commit: 'asdfas9d08f',
		userLevel: 'editor'
	}
}).install();
// log error 
// console.log(window.doesNotExist.nope);
// logException(new Error('download failed!'), {
// 	email: 'test@gmail.com'
// })
// console.log(store.doesNot.nope());
// Raven.captureMessage('Something Bad Happened!');
// Raven.showReportDialog();

// need to build route component
const router = (
	<Provider store={store}>
	{/* This exposes our store to our actual application (check $r, $r.store, $r.store.getState() to see it working) */}
		<Router history={history}>
		{/* need history object to be able to switch between pages without reloading */}
			{/* use App component as initial page */}
			<Route path="/" component={App}>
				{/* children of main component */}
				<IndexRoute component={PhotoGrid}></IndexRoute>
				{/* go to /view/290d for example to see single component where 290d is postId */}
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

// make sure it's working, so render something
render(router, document.getElementById('root'));