/**
 * Created by Jsceoz on 2016/12/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';


class ShiDetailPage extends React.Component {
	render() {
		return (
			<div className="page-content">
				<AppBar
					title="学习讯息"
				/>
				<p>
					推荐理由：桂园餐厅菜品丰富但价格略高，但是地理位置优越，交通方便，是同学家庭和同学聚会的不错选择。

					消费区间：人均50元左右

				</p>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default ShiDetailPage;
