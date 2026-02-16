"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogStrategyNewRelicJson = void 0;
var _objectUtil = require("@beecode/msh-util/object-util");
var _excluded = ["message"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ConsoleLogStrategyNewRelicJson = exports.ConsoleLogStrategyNewRelicJson = /*#__PURE__*/function () {
  function ConsoleLogStrategyNewRelicJson() {
    _classCallCheck(this, ConsoleLogStrategyNewRelicJson);
    _defineProperty(this, "_objectUtil", new _objectUtil.ObjectUtil());
  }
  return _createClass(ConsoleLogStrategyNewRelicJson, [{
    key: "log",
    value: function log(params) {
      var _this = this;
      var type = params.type,
        meta = params.meta,
        prefix = params.prefix,
        _params$datetime = params.datetime,
        datetime = _params$datetime === void 0 ? new Date() : _params$datetime;
      for (var _len = arguments.length, msgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        msgs[_key - 1] = arguments[_key];
      }
      var messagePayloads = msgs.map(function (msg) {
        return _objectSpread(_objectSpread({}, meta), {}, {
          logtype: type.toString(),
          timestamp: datetime.getTime()
        }, _this._messagePayloadExtractorIfExists({
          msg: msg,
          prefix: prefix
        }));
      });
      messagePayloads.forEach(function (payload) {
        console.log(_this._objectUtil.deepStringify(payload, {
          isSorted: true
        })); // eslint-disable-line no-console
      });
    }
  }, {
    key: "_messagePayloadExtractorIfExists",
    value: function _messagePayloadExtractorIfExists(params) {
      var msg = params.msg,
        prefix = params.prefix;
      if (!msg) {
        return {
          message: ''
        };
      }
      if (_typeof(msg) === 'object') {
        var _ref = msg,
          message = _ref.message,
          restObjects = _objectWithoutProperties(_ref, _excluded);
        return _objectSpread(_objectSpread({}, restObjects), {}, {
          message: this._joinDefined(prefix, message)
        });
      }
      if (typeof msg === 'string') {
        return {
          message: this._joinDefined(prefix, msg)
        };
      }
      return {
        message: ''
      };
    }
  }, {
    key: "_joinDefined",
    value: function _joinDefined(prefix, msg) {
      return [prefix, msg].filter(Boolean).join(' ');
    }
  }]);
}();