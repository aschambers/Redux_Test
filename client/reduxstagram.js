import React from 'react';
// allow us to render out to html
import { render } from 'react-dom';
// import css, don't need link tag because webpack will imbed it in the style tag for us
import css from './styles/style.styl';
// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import provider from react-redux
import { Provider } from 'react-redux';

// import our store for components
import store, { history } from './store';

// need to build route component
const router = (
	<Provider store={store}>
	{/* This exposes our store to our actual application (check $r, $r.store, $r.store.getState() to see it working) */}
		<Router history={history}>
		{/* need history object to be able to switch between pages without reloading */}
			{/* use main component as initial page */}
			<Route path="/" component={Main}>
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