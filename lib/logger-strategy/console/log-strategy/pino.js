"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogStrategyPino = void 0;
var _typeUtil = require("@beecode/msh-util/type-util");
var _pino = _interopRequireDefault(require("pino"));
var _logLevel = require("../../../log-level.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ConsoleLogStrategyPino = exports.ConsoleLogStrategyPino = /*#__PURE__*/function () {
  function ConsoleLogStrategyPino() {
    _classCallCheck(this, ConsoleLogStrategyPino);
    this._logger = (0, _pino["default"])();
  }
  return _createClass(ConsoleLogStrategyPino, [{
    key: "log",
    value: function log(params) {
      var _this = this;
      var type = params.type,
        meta = params.meta,
        prefix = params.prefix,
        _params$datetime = params.datetime,
        datetime = _params$datetime === void 0 ? new Date() : _params$datetime;
      var fnName = ConsoleLogStrategyPino.LogLevelToFunctionName(type);
      for (var _len = arguments.length, msgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        msgs[_key - 1] = arguments[_key];
      }
      msgs.forEach(function (msg) {
        var message = _this._formatMessage(msg, prefix);
        var logObject = _objectSpread(_objectSpread({}, meta), {}, {
          time: datetime.getTime()
        });
        _this._logger[fnName](logObject, message);
      });
    }
  }, {
    key: "_formatMessage",
    value: function _formatMessage(msg, prefix) {
      if (!msg) {
        return prefix !== null && prefix !== void 0 ? prefix : '';
      }
      if (_typeof(msg) === 'object') {
        var _ref = msg,
          message = _ref.message;
        return this._joinDefined(prefix, message !== null && message !== void 0 ? message : JSON.stringify(msg));
      }
      if (typeof msg === 'string') {
        return this._joinDefined(prefix, msg);
      }

      // eslint-disable-next-line @typescript-eslint/no-base-to-string -- msg is a primitive at this point (string/object cases handled above)
      return this._joinDefined(prefix, String(msg));
    }
  }, {
    key: "_joinDefined",
    value: function _joinDefined(prefix, msg) {
      return [prefix, msg].filter(Boolean).join(' ');
    }
  }], [{
    key: "LogLevelToFunctionName",
    value: function LogLevelToFunctionName(type) {
      switch (type) {
        case _logLevel.LogLevel.ERROR:
          return 'error';
        case _logLevel.LogLevel.WARN:
          return 'warn';
        case _logLevel.LogLevel.INFO:
          return 'info';
        case _logLevel.LogLevel.DEBUG:
          return 'debug';
        default:
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          throw _typeUtil.typeUtil.exhaustiveError("Unknown log level type [".concat(type, "]"), type);
      }
    }
  }]);
}();