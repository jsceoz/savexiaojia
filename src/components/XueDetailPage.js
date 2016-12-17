/**
 * Created by Jsceoz on 2016/12/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import BottomNav from './BottomNav';


class XueDetailPage extends React.Component {
	render() {
		return (
			<div className="page-content">
				<AppBar
					title="学习讯息"
				/>
				<p>
					公选课的选分和课时是对应的，也就是说你根据自己的情况选择是修一个两分的还是两个一分的，通常两分的课程比较热门。
					选修课的选上难度:2分通识>1分通识>=2分非通识>1分非通识，当然高年级通常优先一些。
					大一大二的尽量选一些冷门课程，比如工学部开设的课程，据说系统一般会优先大三大四的学生。
					结合经验，中外文明领域的通识课比较少，各位学弟学妹要早作打算。
					一次选不上，可以多选几次，因为会有人退课，虽然剩余人数显示为0，但只是数据不能即时刷新而已。
					大一不建议修很多选修课(毕竟公共课还很多)，大二可以多修点(应该结合下自身实际情况情况)，争取大三上选满学分，以后就可以根据兴趣随便选了，而且优先级也会比较高了。
					选修课是作为拿分的课还是拿知识的课，大家自己一定要计划好，既要拿到足够的分数，又要学到有用的知识。
				</p>
				<BottomNav index={0}/>
			</div>
		)
	}
}

export default XueDetailPage;