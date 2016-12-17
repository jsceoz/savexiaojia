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

class ShiPage extends React.Component {
	render() {
		return (
			<div className="shi-page">
				<AppBar
					title="食堂信息"
				/>
				<Paper className="home-page-menu-wrapper">
					<Menu>
						<MenuItem
							onClick={() => window.location.href="#/shitang"}
							primaryText="桂圆餐厅" />
						<MenuItem primaryText="桂圆小食" />
						<MenuItem primaryText="桂圆食堂" />
						<Divider/>
						<MenuItem primaryText="枫园餐厅"/>
						<MenuItem primaryText="枫园小食"/>
						<Divider/>
						<MenuItem primaryText="梅园食堂"/>
						<MenuItem primaryText="梅园教工食堂"/>
						<MenuItem primaryText="梅园餐厅"/>
						<Divider/>
						<MenuItem primaryText="湖滨食堂"/>
						<MenuItem primaryText="珞珈面馆"/>
						<Divider/>


					</Menu>
				</Paper>

				<BottomNav index={0}/>
			</div>
		)
	}
}

export default ShiPage;