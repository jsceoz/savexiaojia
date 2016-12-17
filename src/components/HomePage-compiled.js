'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _BottomNav = require('./BottomNav');

var _BottomNav2 = _interopRequireDefault(_BottomNav);

require('../App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jsceoz on 2016/12/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var HomePage = function (_React$Component) {
	_inherits(HomePage, _React$Component);

	function HomePage() {
		_classCallCheck(this, HomePage);

		return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
	}

	_createClass(HomePage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'home-page' },
				_react2.default.createElement(_AppBar2.default, {
					title: '\u62EF\u6551\u5C0F\u73C8'
				}),
				_react2.default.createElement(
					'nav',
					{ className: 'home-page-main-nav' },
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							{
								onClick: function onClick() {
									return window.location.href = "#/xue";
								}
							},
							'\u5B66'
						),
						_react2.default.createElement(
							'li',
							{
								onClick: function onClick() {
									return window.location.href = "#/shi";
								}
							},
							'\u98DF'
						),
						_react2.default.createElement(
							'li',
							{
								onClick: function onClick() {
									return window.location.href = "#/zhu";
								}
							},
							'\u4F4F'
						),
						_react2.default.createElement(
							'li',
							{
								onClick: function onClick() {
									return window.location.href = "#/map";
								}
							},
							'\u884C'
						)
					)
				),
				_react2.default.createElement(
					_Paper2.default,
					{ className: 'home-page-menu-wrapper' },
					_react2.default.createElement(
						_Menu2.default,
						null,
						_react2.default.createElement(_MenuItem2.default, {
							onClick: function onClick() {
								return window.location.href = "#/map";
							},
							primaryText: '\u5230\u6821\u63A8\u8350\u8DEF\u5F84' }),
						_react2.default.createElement(_Divider2.default, null),
						_react2.default.createElement(_MenuItem2.default, {
							onClick: function onClick() {
								return window.location.href = "#/map";
							},
							primaryText: '\u6821\u56ED\u666F\u70B9\u67E5\u8BE2' }),
						_react2.default.createElement(_Divider2.default, null),
						_react2.default.createElement(_MenuItem2.default, {
							onClick: function onClick() {
								return window.location.href = "#/qa";
							},
							primaryText: '\u65B0\u751F\u95EE\u7B54' })
					)
				),
				_react2.default.createElement(_BottomNav2.default, { index: 0 })
			);
		}
	}]);

	return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

//# sourceMappingURL=HomePage-compiled.js.map