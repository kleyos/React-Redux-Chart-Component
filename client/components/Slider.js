import React from 'react'
import {LineChart, XAxis} from 'recharts'

class Slider extends React.Component {
	render() {
		const {setQuery} = this.props
		const ranges = [
			{hours:-24},
			{days:-7},
			{days:-14},
			{month:-1},
			{years:-1}
		]
		const style = {
			// left: this.state.left,
			// background:`rgb(255, ${this.state.color}, 0)`
		}

		const labels  = ['Last 24h', 'Last 7days', 'Last 14days','Last month','Last year'];
		const labelsRow = labels.map((t,index) => <div key={index} className='slider-label'>{t}</div>);
		const sliderLabels = <div className='slider-labels'> {labelsRow}</div>
		const slider = <input className="slider" type="range"
			list="tickmarks"
			min="0"
			max="4"
			step="1"
			onChange={(e) => setQuery(ranges[e.target.value])}
		/>
		const thumb = <div className="slider-thumb" style={style}></div>

		return (
			<div className="slider-component">
				{slider}
				{sliderLabels}
				{thumb}
			</div>
			)
	}
}
export default Slider