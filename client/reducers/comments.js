// reducer takes 2 things:

// 1. action (info about what happened)
// 2. copy of current state

// use es6 default parameters to set initial state = []

function postComments(state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
			// return the new state with new comment
			return [...state,{
				user: action.author,
				text: action.comment
			}]
		case 'REMOVE_COMMENT':
			// we need to return the new state without the deleted comment
			return [
				// from the start to the one we want to delete
				...state.slice(0, action.i),
				// after the deleted one, to the end
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}
function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			// take current state and then overwrite with new one
			...state,
			// overwrite this post with a new one, some other function needs to take care of updating
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;