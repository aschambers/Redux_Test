// note: only components can be hot-reloaded!, which is why sometimes you get: modules couldn't be updated in the console
// will dispatch the action by console logging: $r.store.dispatch({type: 'INCREMENT_LIKES', index: 0});
// every time you dispatch an action, every reducer will run, and whether you chose to act on that action
// or not is up to the reducer, we need a switch statement to handle action types
// increment likes
// actions are just objects that have a type (name of action), and the index
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}
// add comment
// with es6 you just need postId, not postId: postId (es6 thing), same with other functions
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}
// remove comment
// takes id of post, and index
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}