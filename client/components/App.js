import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import Main from './Main'

const mapStateToProps = state => { return {
	status: state.status,
	query: state.query
}}
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App
