import React from 'react'
import AppBar from 'material-ui/AppBar'
import BottomNav from './BottomNav'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import '../App.css'

class SpotQuery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			spot: ''
		}
	}

	handleClick() {
		if (this.state.spot == '珞珈山') {
			this.setState({
				content: '珞珈山原名落驾山，相传战国时楚王御驾曾在此山落脚，故得名“落驾”。又名罗家山，源于唐代名将罗成于此山会见鄂国公尉迟恭的传说。《江夏县志》中记载此山还有逻迦山的别名。'
			})
		}
		else {
			this.setState({
				content:'暂无数据'
			})
		}

	}

	handleChange(e) {
		this.setState({
			spot: e.target.value
		})
	}

	render() {
		return (
			<div className="spot-query">
				<AppBar
					title="景点查询"
				/>
				<div className="login-page-text-wrapper">
					<TextField
						value={this.state.spot}
						className="login-text"
						hintText="输入要查询的景点名称"
					  onChange={this.handleChange.bind(this)}
					/>
					<RaisedButton
						className="login-btn"
						label="查询"
						primary={true}
						onClick={() => this.handleClick()}
						fullWidth={true}
					/>
					<p className="spot-content">
						{this.state.content}
					</p>
				</div>
				<BottomNav
					index={0}
				/>
			</div>
		)
	}
}

export default SpotQuery;