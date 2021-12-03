"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M256 0H96a64.06 64.06 0 00-64 64v384h288V64a64.06 64.06 0 00-64-64zm0 192H96V64h160z",
  opacity: ".4"
})), 'GasPumpDuotone', '0 0 512 512');

exports["default"] = _default;