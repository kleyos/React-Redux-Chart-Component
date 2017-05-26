import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'

const defaultState = {
	status:{
		carbohydrates:true,
		proteins:true,
		fats:true
	}
};
const store = createStore(rootReducer, defaultState, applyMiddleware(logger))
if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

export default store
