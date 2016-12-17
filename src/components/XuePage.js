/**
 * Created by Jsceoz on 2016/12/16.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import '../App.css'

class XuePage extends React.Component {
	render() {
		return (
			<div className="xue-page">
				<AppBar
					title="学习讯息"
				/>
				<Paper className="home-page-menu-wrapper">
					<Menu>
						<MenuItem
							onClick={() => window.location.href="#/xuanke"}
							primaryText="选课攻略" />
						<Divider/>
						<MenuItem primaryText="图书馆攻略" />
						<Divider/>
						<MenuItem primaryText="院系简介" />
					</Menu>
				</Paper>
				<BottomNav
					index={0}
				/>
			</div>
		)
	}
}

export default XuePage;