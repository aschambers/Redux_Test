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