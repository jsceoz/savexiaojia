'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _LoginPage = require('./components/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _HomePage = require('./components/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _XuePage = require('./components/XuePage');

var _XuePage2 = _interopRequireDefault(_XuePage);

var _ShiPage = require('./components/ShiPage');

var _ShiPage2 = _interopRequireDefault(_ShiPage);

var _ZhuPage = require('./components/ZhuPage');

var _ZhuPage2 = _interopRequireDefault(_ZhuPage);

var _MapPage = require('./components/MapPage');

var _MapPage2 = _interopRequireDefault(_MapPage);

var _QAPage = require('./components/QAPage');

var _QAPage2 = _interopRequireDefault(_QAPage);

var _reactRouter = require('react-router');

var _XueDetailPage = require('./components/XueDetailPage');

var _XueDetailPage2 = _interopRequireDefault(_XueDetailPage);

var _ShiDetail = require('./components/ShiDetail');

var _ShiDetail2 = _interopRequireDefault(_ShiDetail);

var _ZhuDetail = require('./components/ZhuDetail');

var _ZhuDetail2 = _interopRequireDefault(_ZhuDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'index' },
          _react2.default.createElement(
            _reactRouter.Router,
            { history: _reactRouter.hashHistory },
            _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/map', component: _MapPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/qa', component: _QAPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/shi', component: _ShiPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/xue', component: _XuePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/zhu', component: _ZhuPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/xuanke', component: _XueDetailPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/sushe', component: _ZhuDetail2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/shitang', component: _ShiDetail2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

//# sourceMappingURL=App-compiled.js.map