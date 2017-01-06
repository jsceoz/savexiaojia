'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

require('../App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: 'handleLogin',
    value: function handleLogin() {
      this.setState({
        isOpen: true
      });
      setTimeout('window.location.href="#/home"', 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'login-page' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u62EF\u6551\u5C0F\u73C8'
        }),
        _react2.default.createElement(
          'div',
          { className: 'login-page-text-wrapper' },
          _react2.default.createElement(_TextField2.default, {
            className: 'login-text',
            hintText: '\u5B66\u53F7'
          }),
          _react2.default.createElement(_TextField2.default, {
            type: 'password',
            hintText: '\u5BC6\u7801'
          }),
          _react2.default.createElement(_RaisedButton2.default, {
            className: 'login-btn',
            label: '\u767B\u5F55',
            primary: true,
            onClick: this.handleLogin.bind(this),
            fullWidth: true
          })
        ),
        _react2.default.createElement(_Snackbar2.default, {
          open: this.state.isOpen,
          message: '\u767B\u5F55\u6210\u529F'
        }),
        _react2.default.createElement(
          'footer',
          { className: 'login-footer' },
          _react2.default.createElement(
            'p',
            null,
            '\xA9\u62EF\u6551\u5C0F\u73C8\u56E2\u961F'
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

//# sourceMappingURL=LoginPage-compiled.js.map