/**
 * Created by Jsceoz on 2016/12/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';


class ZhuDetailPage extends React.Component {
	render() {
		return (
			<div className="page-content">
				<AppBar
					title="住宿讯息"
				/>
				<p>
					桂园宿舍分为两部分，1舍—5舍为代表的新宿舍，条件很好，上床下桌，有空调、热水和独卫；和6舍—9舍为代表的老宿舍，桂六和桂七条件比较差 ，上下铺没有独卫，桂八和桂九外表比较陈旧，但内部设施不错
					【地理位置】桂园最大的特点就是便利，从桂园到武大的各个地方都很方便，可以概括为：东临樱花道，西对计科楼，北上工学部，南达教四五。
					【饮食】桂园食堂一楼是面食，二楼是套餐，三楼是小餐馆，还有较高档的桂圆餐厅和田园小观园可以聚餐时去。开小灶可以去桂园小食和工学部菜市场，不嫌远的话也可以去茶港门，西门找好吃的
					【购物】桂园八舍有个小店，卖吃的和水果，而且校内最大的自强超市就坐落在桂园周边，里面东西应有尽有
					【锻炼】桂操篮球场足球场，风雨操场还有专业的羽毛球场
					【学习】桂园离文理学部教二、教三、教四、教五和计院大楼、图书馆都很近

				</p>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default ZhuDetailPage;
