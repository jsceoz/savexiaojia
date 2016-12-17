'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _person = require('material-ui/svg-icons/social/person');

var _person2 = _interopRequireDefault(_person);

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _place = require('material-ui/svg-icons/maps/place');

var _place2 = _interopRequireDefault(_place);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

require('../App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jsceoz on 2016/12/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BottomNavigationExampleSimple = function (_React$Component) {
	_inherits(BottomNavigationExampleSimple, _React$Component);

	function BottomNavigationExampleSimple() {
		_classCallCheck(this, BottomNavigationExampleSimple);

		return _possibleConstructorReturn(this, (BottomNavigationExampleSimple.__proto__ || Object.getPrototypeOf(BottomNavigationExampleSimple)).apply(this, arguments));
	}

	_createClass(BottomNavigationExampleSimple, [{
		key: 'select',
		value: function select(index) {
			switch (index) {
				case 0:
					window.location.href = "#/home/";
					break;
				case 1:
					window.location.href = "#/map/";
					break;
				case 2:
					window.location.href = "#/mine/";
					break;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'footer-component' },
				_react2.default.createElement(
					_Paper2.default,
					{ zDepth: 1 },
					_react2.default.createElement(
						_BottomNavigation.BottomNavigation,
						{ selectedIndex: this.props.index },
						_react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
							label: '\u9996\u9875',
							icon: _react2.default.createElement(_grade2.default, null),
							onClick: function onClick() {
								return _this2.select(0);
							}
						}),
						_react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
							label: '\u5730\u56FE',
							icon: _react2.default.createElement(_place2.default, null),
							onClick: function onClick() {
								return _this2.select(1);
							}
						}),
						_react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
							label: '\u6211\u7684',
							icon: _react2.default.createElement(_person2.default, null),
							onClick: function onClick() {
								return _this2.select(2);
							}
						})
					)
				)
			);
		}
	}]);

	return BottomNavigationExampleSimple;
}(_react2.default.Component);

exports.default = BottomNavigationExampleSimple;

//# sourceMappingURL=BottomNav-compiled.js.map