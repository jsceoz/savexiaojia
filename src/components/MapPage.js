/**
 * Created by Jsceoz on 2016/12/16.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';
import '../App.css';

class MapPage extends  React.Component {

	render() {
		return (
			<div className="map-page">
				<AppBar
					title="地图"
				/>
				<div id="map-wrapper">

				</div>
				<BottomNav index={1}/>
			</div>
		)
	}
}

export default MapPage;