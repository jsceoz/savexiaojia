/**
 * Created by Jsceoz on 2016/12/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import $ from 'jquery'


class QAPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		let self = this;
		$.ajax({
			method: "GET",
			url:"http://115.28.217.36/listpost/"
		}).done(function (data) {
			self.setState({
				list: data
			})
		})
	}

	render() {
		return (
			<div className="q-and-a-page">
				<AppBar
					title="新生问答"
				/>
				{this.state.list.map((item) => (
					<Card>
						<CardHeader
							title={item.title}
							subtitle={item.content}
						/>
					</Card>
				))}
				<FloatingActionButton
					className="add-btn"
					onClick={() => window.location.href="#/addpost"}
				>
					<ContentAdd/>

				</FloatingActionButton>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default QAPage;