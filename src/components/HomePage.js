/**
 * Created by Jsceoz on 2016/12/16.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
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
						<li
							onClick={() => window.location.href="#/xue"}
						>学</li>
						<li
							onClick={() => window.location.href="#/shi"}
						>食</li>
						<li
							onClick={() => window.location.href="#/zhu"}
						>住</li>
						<li
							onClick={() => window.location.href="#/map"}
						>行</li>
					</ul>
				</nav>
				<Paper className="home-page-menu-wrapper">
					<Menu>
						<MenuItem
							onClick={() => window.location.href="#/map"}
							primaryText="到校推荐路径" />
						<Divider/>
						<MenuItem
							onClick={() => window.location.href="#/map"}
							primaryText="校园景点查询" />
						<Divider/>
						<MenuItem
							onClick={() => window.location.href="#/qa"}
							primaryText="新生问答" />
					</Menu>
				</Paper>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default HomePage;
