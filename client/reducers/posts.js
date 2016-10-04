// reducer takes 2 things:

// 1. action (info about what happened)
// 2. copy of current state

// use es6 default parameters to set initial state = []
function posts(state = [], action) {
	{/* console.log("The post will change right??")
	console.log(state, action);
	return state; */}
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			{/* console.log('Incrementing Likes'); */}
			const i = action.index;
			return [
				...state.slice(0,i), // before the one we are updating
				{...state[i], likes: state[i].likes + 1}, 
				...state.slice(i + 1), // after the one we are updating
			]
		// return updated state
		default:
			return state;
	}
}

export default posts;