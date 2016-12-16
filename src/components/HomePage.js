/**
 * Created by Jsceoz on 2016/12/16.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import BottomNav from './BottomNav';
import '../App.css';

class HomePage extends React.Component {
	render() {
		return (
			<div className="home-page">
				<AppBar
					title="拯救小珈"
				/>
				<nav className="home-page-main-nav">
					<ul>
						<li>学</li>
						<li>食</li>
						<li>住</li>
						<li>行</li>
					</ul>
				</nav>
				<Paper className="home-page-menu-wrapper">
					<Menu>
						<MenuItem primaryText="到校推荐路径" />
						<MenuItem primaryText="校园景点查询" />
						<MenuItem primaryText="校园生活讯息" />
						<MenuItem primaryText="新生问答" />
					</Menu>
				</Paper>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default HomePage;
