/**
 * Created by Jsceoz on 2016/12/16.
 */
import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Person from 'material-ui/svg-icons/social/person';
import Grade from 'material-ui/svg-icons/action/grade';
import Place from 'material-ui/svg-icons/maps/place';
import Paper from 'material-ui/Paper';
import '../App.css';


class BottomNavigationExampleSimple extends React.Component {
	select(index){
		switch(index)
		{
			case 0:
				window.location.href="#/home/";
				break;
			case 1:
				window.location.href="#/map/";
				break;
			case 2:
				window.location.href="#/mine/";
				break;
		}
	}

	render() {
		return (
			<div className="footer-component">
				<Paper zDepth={1}>
					<BottomNavigation selectedIndex={this.props.index}>
						<BottomNavigationItem
							label="首页"
							icon={<Grade/>}
							onClick={() => this.select(0)}
						/>
						<BottomNavigationItem
							label="地图"
							icon={<Place/>}
							onClick={() => this.select(1)}
						/>
						<BottomNavigationItem
							label="我的"
							icon={<Person/>}
							onClick={() => this.select(2)}
						/>
					</BottomNavigation>
				</Paper>
			</div>
		);
	}
}

export default BottomNavigationExampleSimple;