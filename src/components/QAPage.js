/**
 * Created by Jsceoz on 2016/12/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class QAPage extends React.Component {

	render() {
		return (
			<div className="q-and-a-page">
				<AppBar
					title="新生问答"
				/>
				<Card>
					<CardHeader
						title="有什么推荐的公选课吗？"
					  subtitle="如题，有没有什么推荐的公选课"
					/>
				</Card>
				<Card>
					<CardHeader
						title="信息学部网球场预定价格是什么样的？"
						subtitle="听同学说挺贵的"
					/>
				</Card>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default QAPage;