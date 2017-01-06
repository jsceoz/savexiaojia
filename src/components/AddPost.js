/**
 * Created by Jsceoz on 2017/1/6.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import $ from 'jquery';
import Snackbar from 'material-ui/Snackbar';
import '../App.css';

class AddPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			title: '',
			open: false
		}
	}

	handleContentChange(e) {
		this.setState({
			content: e.target.value
		})
	}

	handleTitleChange(e) {
		this.setState({
			title: e.target.value
		})
	}

	handleSubmit() {
		let self = this;
		$.ajax({
			method:"GET",
			url:"http://115.28.217.36/addpost/?content="+this.state.content+"&title="+this.state.title
		}).done(function (data) {
			self.setState({
				open: true
			});
			setTimeout('window.location.href="#/qa"', 800)
		})
	}

	render() {
		return (
			<div className="add-post">
				<AppBar
					title='添加问题'
				/>
				<div className="add-post-text-wrapper">
					<TextField
						value={this.state.title}
						className="login-text"
						hintText="问题名称"
						onChange={this.handleTitleChange.bind(this)}
					/>
					<TextField
						hintText="问题描述"
						floatingLabelText="问题描述"
						multiLine={true}
						rows={2}
						value={this.state.content}
					  onChange={this.handleContentChange.bind(this)}
					/>
					<RaisedButton
						className="login-btn"
						label="提交"
						primary={true}
						onClick={() => this.handleSubmit()}
						fullWidth={true}
					/>
				</div>
				<Snackbar
					open={this.state.open}
					message='提问成功'
				/>
				<BottomNav
					index={0}
				/>
			</div>
		)
	}
}

export default AddPost