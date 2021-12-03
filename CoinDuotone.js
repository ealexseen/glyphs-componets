"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M0 208C0 128.44 114.67 64 256 64s256 64.44 256 144-114.67 144-256 144S0 287.56 0 208z",
  opacity: ".4"
})), 'CoinDuotone', '0 0 512 512');

exports["default"] = _default;