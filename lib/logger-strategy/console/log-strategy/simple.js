"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogStrategySimple = void 0;
var _typeUtil = require("@beecode/msh-util/type-util");
var _logLevel = require("../../../log-level.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ConsoleLogStrategySimple = exports.ConsoleLogStrategySimple = /*#__PURE__*/function () {
  function ConsoleLogStrategySimple() {
    _classCallCheck(this, ConsoleLogStrategySimple);
  }
  return _createClass(ConsoleLogStrategySimple, [{
    key: "log",
    value: function log(params) {
      var _console;
      var type = params.type,
        meta = params.meta,
        prefix = params.prefix,
        _params$datetime = params.datetime,
        datetime = _params$datetime === void 0 ? new Date() : _params$datetime;
      var fnName = ConsoleLogStrategySimple.LogTypeToFunctionName(type);

      /* eslint-disable no-console*/
      for (var _len = arguments.length, msgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        msgs[_key - 1] = arguments[_key];
      }
      (_console = console)[fnName].apply(_console, ["".concat(datetime.toISOString(), " - ").concat(type.toUpperCase(), ": ").concat(prefix !== null && prefix !== void 0 ? prefix : '')].concat(msgs));
      if (meta) {
        console[fnName](meta);
      }
      /* eslint-enable no-console*/
    }
  }], [{
    key: "LogTypeToFunctionName",
    value: function LogTypeToFunctionName(type) {
      switch (type) {
        case _logLevel.LogLevel.ERROR:
          return 'error';
        case _logLevel.LogLevel.WARN:
          return 'warn';
        case _logLevel.LogLevel.INFO:
          return 'info';
        case _logLevel.LogLevel.DEBUG:
          return 'log';
        default:
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          throw _typeUtil.typeUtil.exhaustiveError("Unknown log level type [".concat(type, "]"), type);
      }
    }
  }]);
}();