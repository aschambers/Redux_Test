// reducer takes 2 things:

// 1. action (info about what happened)
// 2. copy of current state

// use es6 default parameters to set initial state = []
function posts(state = [], action) {
	console.log("The post will change right??")
	console.log(state, action);
	return state;
}

export default posts;