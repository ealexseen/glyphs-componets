"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M500 384a12 12 0 0112 12v40a12 12 0 01-12 12H12a12 12 0 01-12-12V76a12 12 0 0112-12h40a12 12 0 0112 12v308z",
  opacity: ".4"
})), 'ChartAreaDuotone', '0 0 512 512');

exports["default"] = _default;