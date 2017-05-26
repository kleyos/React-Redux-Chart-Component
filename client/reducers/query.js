function query(state={}, action){
	switch(action.type){
		case 'SET_QUERY':
			return {...action.value}
		default:
			return state
	}
}

export default query