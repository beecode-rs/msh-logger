"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogStrategyNewRelicJson = void 0;
var _objectUtil = require("@beecode/msh-util/object-util");
var _excluded = ["message"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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