import './App.css'
import data from '../data.js'
import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import {LineChart, Line, XAxis, YAxis} from 'recharts'
import Slider from './Slider'

class Main extends React.Component {
	render() {
		const { changeStatus, setQuery, status, query } = this.props
		const { carbohydrates, proteins, fats } = this.props.status

		const getLine = (dataKey, color) => <Line type="monotone"
			dataKey={dataKey}
			stroke={color}
			strokeWidth="4"
			dot={false}
			isAnimationActive={false}/>
		const dataWithDay = data
			.filter(item => !_.isEmpty(query) ? new Date(item.date) >= moment().add(query).toDate() : true)
			.map(item => (item['day']=(new Date(item.date)).toLocaleString('en', {weekday: 'short'})) && item)
		return (
			<div className='container'>
				<Slider {...this.props}/>
				<div className="btns">
					<button type="button" className="btn calories">calories</button>
					{Object.keys(status).map(key => <button key={key} type="button" className={`btn ${key}`}
						onClick={() => changeStatus(key)}>{key}</button>
					)}
				</div>
				<LineChart width={600} height={300} data={dataWithDay}
					margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="day" padding={{ left: 10 }} tickLine={false}/>
					<YAxis type='number' domain={[0, 2000]} padding={{ bottom: 10 }} tickLine={false} />
					<path d="M 90 142.5 L 570 142.5 " stroke="#fe0000" strokeWidth="1" />
					<path d="M 90 182.5 L 570 182.5 " stroke="#fed300" strokeWidth="1" />
					<path d="M 90 230.5 L 570 230.5 " stroke="#007dfe" strokeWidth="1" />
					{carbohydrates ? getLine("carbohydrates","#fe0000") : null}
					{proteins ? getLine("proteins","#fed300") : null}
					{fats ? getLine("fats","#007dfe") : null}
			</LineChart>
			</div>
		);
	}
}

export default Main
