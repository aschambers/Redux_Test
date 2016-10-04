import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// gives us the state and return state we need (posts and comments), takes what lives in our state and maps them
function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

// passes us dispatch which is the $r.store.dispatch({type: 'INCREMENT_LIKES', index: 0}); we ran manually in the console, it will pass us this via props
// when we connect it, we can immediately call it against Main which will add all the props and data from state to props and all action creators to props as well
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// make our App component which takes two things, mapStateToProps, and mapDispatchToProps that
// take state (posts and comments), and dispatch(action creators) and surface via props
// connects everything together!
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

// make App available for us
export default App;