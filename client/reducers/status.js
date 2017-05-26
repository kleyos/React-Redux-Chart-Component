function status(state={}, action){
	switch(action.type){
		case 'CHANGE_STATUS':
			return {...state, [action.value]: !state[action.value]}
		default:
			return state
	}
}

export default status