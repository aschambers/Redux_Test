// reducer takes 2 things:

// 1. action (info about what happened)
// 2. copy of current state

// use es6 default parameters to set initial state = []
function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log("Incrementing likes!!");
			const i = action.index;
			return [
				...state.slice(0, i), // before the one we are updating
				{...state[i], likes: state[i].likes + 1}, 
				...state.slice(i + 1) // after the one we are updating
			]
		default:
			return state;
	}
}

export default posts;