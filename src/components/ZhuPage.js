/**
 * Created by Jsceoz on 2016/12/16.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import BottomNav from './BottomNav';
import '../App.css';

class ZhuPage extends React.Component {
	render() {
		return (
			<div className="shi-page">
				<AppBar
					title="住宿信息"
				/>
				<Paper className="home-page-menu-wrapper">
					<Menu>
						<MenuItem primaryText="桂园宿舍" />
						<Divider/>
						<MenuItem primaryText="湖滨宿舍"/>
						<Divider/>
						<MenuItem primaryText="枫园宿舍"/>
						<Divider/>
						<MenuItem primaryText="工学部宿舍"/>
						<Divider/>
						<MenuItem primaryText="信部宿舍"/>
						<Divider/>
					</Menu>
				</Paper>

				<BottomNav index={0}/>
			</div>
		)
	}
}

export default ZhuPage;
