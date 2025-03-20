"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggerStrategyConsole = void 0;
var _typeUtil = require("@beecode/msh-util/type-util");
var _logLevel = require("../log-level.js");
var _simple = require("../logger-strategy/console/log-strategy/simple.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LoggerStrategyConsole = exports.LoggerStrategyConsole = /*#__PURE__*/function () {
  function LoggerStrategyConsole(params) {
    _classCallCheck(this, LoggerStrategyConsole);
    var _ref = params !== null && params !== void 0 ? params : {},
      _ref$logLevel = _ref.logLevel,
      logLevel = _ref$logLevel === void 0 ? _logLevel.LogLevel.ERROR : _ref$logLevel,
      _ref$consoleLogStrate = _ref.consoleLogStrategy,
      consoleLogStrategy = _ref$consoleLogStrate === void 0 ? new _simple.ConsoleLogStrategySimple() : _ref$consoleLogStrate,
      messagePrefix = _ref.messagePrefix,
      meta = _ref.meta;
    this._logLevel = logLevel;
    this._consoleLogStrategy = consoleLogStrategy;
    this._messagePrefix = messagePrefix;
    this._meta = meta;
  }
  return _createClass(LoggerStrategyConsole, [{
    key: "clone",
    value: function clone(params) {
      var _ref2 = params !== null && params !== void 0 ? params : {},
        meta = _ref2.meta,
        messagePrefix = _ref2.messagePrefix,
        logLevel = _ref2.logLevel;
      return new LoggerStrategyConsole({
        logLevel: logLevel !== null && logLevel !== void 0 ? logLevel : this._logLevel,
        messagePrefix: messagePrefix !== null && messagePrefix !== void 0 ? messagePrefix : this._messagePrefix,
        meta: (this._meta || meta) && _objectSpread(_objectSpread({}, this._meta), meta)
      });
    }
  }, {
    key: "_shouldLog",
    value: function _shouldLog(currentLevel) {
      return LoggerStrategyConsole.LogLevelToInt(this._logLevel) >= LoggerStrategyConsole.LogLevelToInt(currentLevel);
    }
  }, {
    key: "_logMessage",
    value: function _logMessage(type) {
      var _this$_consoleLogStra;
      if (!this._shouldLog(type)) {
        return;
      }
      for (var _len = arguments.length, msgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        msgs[_key - 1] = arguments[_key];
      }
      (_this$_consoleLogStra = this._consoleLogStrategy).log.apply(_this$_consoleLogStra, [{
        meta: this._meta,
        prefix: this._messagePrefix,
        type: type
      }].concat(msgs));
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len2 = arguments.length, msgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        msgs[_key2] = arguments[_key2];
      }
      this._logMessage.apply(this, [_logLevel.LogLevel.DEBUG].concat(msgs));
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, msgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        msgs[_key3] = arguments[_key3];
      }
      this._logMessage.apply(this, [_logLevel.LogLevel.INFO].concat(msgs));
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len4 = arguments.length, msgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        msgs[_key4] = arguments[_key4];
      }
      this._logMessage.apply(this, [_logLevel.LogLevel.WARN].concat(msgs));
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len5 = arguments.length, msgs = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        msgs[_key5] = arguments[_key5];
      }
      this._logMessage.apply(this, [_logLevel.LogLevel.ERROR].concat(msgs));
    }
  }], [{
    key: "LogLevelToInt",
    value: function LogLevelToInt(logLevel) {
      switch (logLevel) {
        case _logLevel.LogLevel.ERROR:
          return 0;
        case _logLevel.LogLevel.WARN:
          return 1;
        case _logLevel.LogLevel.INFO:
          return 2;
        case _logLevel.LogLevel.DEBUG:
          return 3;
        default:
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          throw _typeUtil.typeUtil.exhaustiveError("Unknown log lever [".concat(logLevel, "]"), logLevel);
      }
    }
  }]);
}();